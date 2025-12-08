import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

function validateCNPJ(cnpj: string): boolean {
  const cleanCNPJ = cnpj.replace(/\D/g, '');
  if (cleanCNPJ.length !== 14) return false;
  if (/^(\d)\1+$/.test(cleanCNPJ)) return false;
  
  // CNPJ validation algorithm
  let size = cleanCNPJ.length - 2;
  let numbers = cleanCNPJ.substring(0, size);
  const digits = cleanCNPJ.substring(size);
  let sum = 0;
  let pos = size - 7;
  
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(0))) return false;
  
  size = size + 1;
  numbers = cleanCNPJ.substring(0, size);
  sum = 0;
  pos = size - 7;
  
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(1))) return false;
  
  return true;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Muitas tentativas. Aguarde um minuto e tente novamente.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { cnpj, cliente } = await req.json();

    if (!cnpj) {
      return new Response(
        JSON.stringify({ error: 'CNPJ é obrigatório' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Limpar CNPJ (remover pontuação)
    const cnpjLimpo = cnpj.replace(/[^\d]/g, '');

    // Validate CNPJ format
    if (!validateCNPJ(cnpjLimpo)) {
      console.log('Invalid CNPJ format:', cnpjLimpo);
      return new Response(
        JSON.stringify({ error: 'CNPJ inválido' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate cliente parameter if provided
    const validClientes = ['amanda-neves', 'match-solutions'];
    if (cliente && !validClientes.includes(cliente)) {
      console.log('Invalid cliente:', cliente);
      return new Response(
        JSON.stringify({ error: 'Cliente inválido' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Mapear cliente para CNPJ contratante e contratada
    const clienteMapContratante: Record<string, string> = {
      'amanda-neves': '61153521000173',
      'match-solutions': '34325200000136'
    };

    const clienteMapContratada: Record<string, string> = {
      'amanda-neves': '61260831000197', // Fluxrow
      'match-solutions': '61260831000197' // Fluxrow
    };

    const cnpjContratante = cliente ? clienteMapContratante[cliente] : null;
    const cnpjContratada = cliente ? clienteMapContratada[cliente] : null;

    console.log('Validando CNPJ:', cnpjLimpo, '| Cliente:', cliente, '| CNPJ Contratante:', cnpjContratante, '| CNPJ Contratada:', cnpjContratada);

    // Criar cliente Supabase com service_role para acesso via edge function
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Buscar contrato pelo CNPJ (pode ser contratante ou contratada)
    let query = supabaseAdmin
      .from('contratos_assinados')
      .select('*');

    if (cnpjContratante && cnpjContratada) {
      // Busca flexível: CNPJ digitado pode ser da contratante OU da contratada
      query = query.or(
        `and(cnpj_contratante.eq.${cnpjContratante},cnpj_contratada.eq.${cnpjLimpo}),` +
        `and(cnpj_contratante.eq.${cnpjLimpo},cnpj_contratada.eq.${cnpjContratada})`
      );
    } else {
      // Busca genérica: CNPJ pode ser contratante ou contratada
      query = query.or(`cnpj_contratante.eq.${cnpjLimpo},cnpj_contratada.eq.${cnpjLimpo}`);
    }

    const { data: contratos, error } = await query;

    if (error || !contratos || contratos.length === 0) {
      console.error('Contrato não encontrado:', error);
      return new Response(
        JSON.stringify({ error: 'Contrato não encontrado para este CNPJ' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const contrato = contratos[0];
    
    // Determinar o papel da empresa (contratante ou contratada)
    const papel = contrato.cnpj_contratante === cnpjLimpo ? 'contratante' : 'contratada';

    console.log('Contrato encontrado:', contrato.id, '- Papel:', papel);

    return new Response(
      JSON.stringify({ contrato, papel }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Erro ao validar contrato:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
