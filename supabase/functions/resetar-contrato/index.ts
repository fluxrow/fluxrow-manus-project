import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contratoId } = await req.json();

    if (!contratoId) {
      return new Response(
        JSON.stringify({ error: 'ID do contrato é obrigatório' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Resetando contrato:', contratoId);

    const { data, error } = await supabase
      .from('contratos_assinados')
      .update({
        status: 'pendente',
        assinatura_nome_responsavel: null,
        assinatura_cpf_responsavel: null,
        assinatura_cargo_responsavel: null,
        data_assinatura: new Date().toISOString(),
        email_enviado: false,
        updated_at: new Date().toISOString()
      })
      .eq('id', contratoId)
      .select();

    if (error) {
      console.error('Erro ao resetar contrato:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contrato resetado com sucesso:', data);

    return new Response(
      JSON.stringify({ success: true, contrato: data[0] }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erro na função resetar-contrato:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao resetar contrato' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
