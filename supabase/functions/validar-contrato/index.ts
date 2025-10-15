import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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

    // Mapear cliente para CNPJ contratante
    const clienteMap: Record<string, string> = {
      'amanda-neves': '61153521000173',
      'match-solutions': '34325200000136'
    };

    const cnpjContratante = cliente ? clienteMap[cliente] : null;

    console.log('Validando CNPJ:', cnpjLimpo, '| Cliente:', cliente, '| CNPJ Contratante:', cnpjContratante);

    // Criar cliente Supabase com service_role para acesso via edge function
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Buscar contrato pelo CNPJ (pode ser contratante ou contratada)
    // Se temos o cliente, filtramos pelo CNPJ contratante específico
    let query = supabaseAdmin
      .from('contratos_assinados')
      .select('*');

    if (cnpjContratante) {
      // Busca exata: contratante específico + contratada = CNPJ fornecido
      query = query
        .eq('cnpj_contratante', cnpjContratante)
        .eq('cnpj_contratada', cnpjLimpo);
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
