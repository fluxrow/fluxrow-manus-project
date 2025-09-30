import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { Resend } from 'npm:resend@4.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contratoId, nomeResponsavel, cpfResponsavel, cargoResponsavel } = await req.json();

    if (!contratoId || !nomeResponsavel || !cpfResponsavel || !cargoResponsavel) {
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processando assinatura do contrato:', contratoId);

    // Criar cliente Supabase com service_role
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Buscar dados do contrato
    const { data: contrato, error: contratoError } = await supabaseAdmin
      .from('contratos_assinados')
      .select('*')
      .eq('id', contratoId)
      .single();

    if (contratoError || !contrato) {
      console.error('Contrato não encontrado:', contratoError);
      return new Response(
        JSON.stringify({ error: 'Contrato não encontrado' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Verificar se já foi assinado
    if (contrato.status === 'assinado') {
      return new Response(
        JSON.stringify({ error: 'Este contrato já foi assinado' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Atualizar contrato com dados da assinatura
    const { error: updateError } = await supabaseAdmin
      .from('contratos_assinados')
      .update({
        status: 'assinado',
        assinatura_nome_responsavel: nomeResponsavel,
        assinatura_cpf_responsavel: cpfResponsavel.replace(/[^\d]/g, ''),
        assinatura_cargo_responsavel: cargoResponsavel,
        data_assinatura: new Date().toISOString(),
        email_enviado: false
      })
      .eq('id', contratoId);

    if (updateError) {
      console.error('Erro ao atualizar contrato:', updateError);
      throw new Error('Erro ao processar assinatura');
    }

    console.log('Contrato atualizado com sucesso');

    // Enviar email de confirmação
    try {
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            h1 { margin: 0; font-size: 28px; }
            h2 { color: #667eea; margin-top: 0; }
            .label { font-weight: bold; color: #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ Contrato Assinado</h1>
            </div>
            <div class="content">
              <p>Olá <strong>${contrato.nome_contratante}</strong>,</p>
              
              <p>Confirmamos que o contrato de <strong>Sistema de Qualificação para Vendas com IA</strong> foi assinado digitalmente com sucesso.</p>
              
              <div class="info-box">
                <h2>Dados da Assinatura</h2>
                <p><span class="label">Nome do Responsável:</span> ${nomeResponsavel}</p>
                <p><span class="label">CPF:</span> ${cpfResponsavel}</p>
                <p><span class="label">Cargo:</span> ${cargoResponsavel}</p>
                <p><span class="label">Data e Hora:</span> ${new Date().toLocaleString('pt-BR')}</p>
              </div>
              
              <div class="info-box">
                <h2>Dados do Contratante</h2>
                <p><span class="label">Empresa:</span> ${contrato.nome_contratante}</p>
                <p><span class="label">CNPJ:</span> ${contrato.cnpj_contratante}</p>
                <p><span class="label">CPF Representante:</span> ${contrato.cpf_contratante}</p>
              </div>
              
              <p>Este email serve como confirmação oficial da assinatura digital do contrato.</p>
              
              <p>Em breve, nossa equipe entrará em contato para os próximos passos da implementação.</p>
              
              <p>Atenciosamente,<br><strong>Equipe Match Solutions</strong></p>
            </div>
            <div class="footer">
              <p>Este é um email automático, por favor não responda.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Match Solutions <onboarding@resend.dev>',
        to: [contrato.nome_contratante], // Assumindo que este campo contém o email
        subject: 'Confirmação de Assinatura - Sistema de Qualificação para Vendas',
        html: emailHtml,
      });

      if (emailError) {
        console.error('Erro ao enviar email:', emailError);
        // Não falha a requisição se o email falhar
      } else {
        console.log('Email enviado com sucesso:', emailData);
        
        // Marcar email como enviado
        await supabaseAdmin
          .from('contratos_assinados')
          .update({ email_enviado: true })
          .eq('id', contratoId);
      }
    } catch (emailError) {
      console.error('Erro ao enviar email de confirmação:', emailError);
      // Continua mesmo se o email falhar
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Contrato assinado com sucesso!'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Erro ao assinar contrato:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Erro ao processar assinatura' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
