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
    const requestBody = await req.json();
    console.log('Requisição recebida:', requestBody);
    
    const { contratoId, nomeResponsavel, cpfResponsavel, cargoResponsavel, papel } = requestBody;

    console.log('Validando campos obrigatórios...');
    console.log('contratoId:', contratoId);
    console.log('nomeResponsavel:', nomeResponsavel);
    console.log('cpfResponsavel:', cpfResponsavel);
    console.log('cargoResponsavel:', cargoResponsavel);
    console.log('papel:', papel);

    if (!contratoId || !nomeResponsavel || !cpfResponsavel || !cargoResponsavel || !papel) {
      console.error('Campos faltando!');
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios, incluindo o papel (contratante ou contratada)' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (papel !== 'contratante' && papel !== 'contratada') {
      return new Response(
        JSON.stringify({ error: 'Papel deve ser "contratante" ou "contratada"' }),
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

    // Verificar se já foi totalmente assinado
    if (contrato.status === 'totalmente_assinado') {
      return new Response(
        JSON.stringify({ error: 'Este contrato já foi totalmente assinado por ambas as partes' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Verificar se esta parte já assinou
    if (papel === 'contratante' && contrato.contratante_assinatura_nome) {
      return new Response(
        JSON.stringify({ error: 'A CONTRATANTE já assinou este contrato' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (papel === 'contratada' && contrato.contratada_assinatura_nome) {
      return new Response(
        JSON.stringify({ error: 'A CONTRATADA já assinou este contrato' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Preparar dados de atualização baseado no papel
    const cpfLimpo = cpfResponsavel.replace(/[^\d]/g, '');
    const dataAssinatura = new Date().toISOString();
    
    let updateData: any = {
      email_enviado: false
    };

    if (papel === 'contratante') {
      updateData.contratante_assinatura_nome = nomeResponsavel;
      updateData.contratante_assinatura_cpf = cpfLimpo;
      updateData.contratante_assinatura_cargo = cargoResponsavel;
      updateData.contratante_data_assinatura = dataAssinatura;
    } else {
      updateData.contratada_assinatura_nome = nomeResponsavel;
      updateData.contratada_assinatura_cpf = cpfLimpo;
      updateData.contratada_assinatura_cargo = cargoResponsavel;
      updateData.contratada_data_assinatura = dataAssinatura;
    }

    // Determinar novo status
    const outraPapelJaAssinou = papel === 'contratante' 
      ? contrato.contratada_assinatura_nome 
      : contrato.contratante_assinatura_nome;
    
    updateData.status = outraPapelJaAssinou ? 'totalmente_assinado' : 'parcialmente_assinado';

    // Atualizar contrato com dados da assinatura
    const { error: updateError } = await supabaseAdmin
      .from('contratos_assinados')
      .update(updateData)
      .eq('id', contratoId);

    if (updateError) {
      console.error('Erro ao atualizar contrato:', updateError);
      throw new Error('Erro ao processar assinatura');
    }

    console.log('Contrato atualizado com sucesso');

    // Enviar email de confirmação
    try {
      // Buscar email do contratante (fallback para email padrão se não houver)
      const emailDestino = contrato.email_contratante || 'thiagogea@matchsolutions.com.br';
      
      console.log('Enviando email de confirmação para:', emailDestino);

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
              }
              .success-icon {
                font-size: 56px;
                margin-bottom: 15px;
                display: block;
              }
              .content {
                padding: 40px 30px;
              }
              .info-box {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 8px;
                margin: 25px 0;
                border-left: 4px solid #0066FF;
              }
              .info-box h3 {
                margin-top: 0;
                color: #0066FF;
                font-size: 18px;
                font-weight: 600;
              }
              .info-box p {
                margin: 10px 0;
                font-size: 15px;
              }
              .status-badge {
                display: inline-block;
                padding: 8px 16px;
                background: #d4edda;
                color: #155724;
                border-radius: 20px;
                font-weight: 600;
                font-size: 14px;
                margin: 15px 0;
              }
              .contact-box {
                background: #fff8e1;
                padding: 20px;
                border-radius: 8px;
                margin: 25px 0;
                border-left: 4px solid #ffc107;
              }
              .contact-box ul {
                list-style: none;
                padding: 0;
                margin: 10px 0 0 0;
              }
              .contact-box li {
                padding: 5px 0;
                font-size: 15px;
              }
              .footer {
                background: #f8f9fa;
                text-align: center;
                padding: 30px;
                border-top: 1px solid #e9ecef;
                color: #6c757d;
                font-size: 13px;
              }
              .footer strong {
                color: #495057;
                font-size: 15px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="success-icon">✓</span>
                <h1>Assinatura Digital Confirmada!</h1>
              </div>
              <div class="content">
                <p style="font-size: 16px; color: #495057;">Olá,</p>
                <p style="font-size: 16px;">Confirmamos o recebimento da assinatura digital do <strong>Contrato de Prestação de Serviços</strong> com a Match Solutions.</p>
                
                <div class="info-box">
                  <h3>📋 Dados da Assinatura</h3>
                  <p><strong>Nome do Responsável:</strong> ${nomeResponsavel}</p>
                  <p><strong>CPF:</strong> ${cpfResponsavel}</p>
                  <p><strong>Cargo:</strong> ${cargoResponsavel}</p>
                  <p><strong>Data e Hora:</strong> ${new Date().toLocaleString('pt-BR', { 
                    dateStyle: 'long', 
                    timeStyle: 'short',
                    timeZone: 'America/Sao_Paulo'
                  })}</p>
                  <p><strong>Assinado como:</strong> <span style="color: #0066FF; font-weight: 600;">${papel === 'contratante' ? 'CONTRATANTE' : 'CONTRATADA'}</span></p>
                </div>

                <div class="status-badge">
                  ${updateData.status === 'totalmente_assinado' 
                    ? '🎉 Contrato Totalmente Assinado' 
                    : papel === 'contratante' 
                      ? '🟢 Aguardando assinatura da CONTRATADA' 
                      : '🟢 Aguardando assinatura da CONTRATANTE'}
                </div>

                <p style="font-size: 15px; margin-top: 25px;">
                  ${updateData.status === 'totalmente_assinado' 
                    ? 'O contrato foi totalmente assinado por ambas as partes! Em breve nossa equipe entrará em contato para os próximos passos da implementação.' 
                    : 'O contrato está em processo de assinatura digital. Quando todas as partes assinarem, você receberá uma nova notificação com o documento completo.'}
                </p>
                
                <div class="contact-box">
                  <p style="margin: 0 0 10px 0; font-weight: 600; color: #f57c00;">📞 Precisa de ajuda?</p>
                  <p style="margin: 0 0 5px 0; font-size: 14px;">Entre em contato com nossa equipe:</p>
                  <ul>
                    <li>📧 <strong>Email:</strong> contato@fluxrow.com</li>
                    <li>📱 <strong>WhatsApp:</strong> (41) 99236-1868</li>
                    <li>🌐 <strong>Site:</strong> fluxrow.com.br</li>
                  </ul>
                </div>
              </div>
              <div class="footer">
                <p><strong>Fluxrow Inteligência Criativa</strong></p>
                <p>CNPJ: 61.260.831/0001-97 | Curitiba/PR</p>
                <p style="margin-top: 15px; font-size: 12px;">Este é um email automático de confirmação. Por favor, não responda diretamente a esta mensagem.</p>
              </div>
            </div>
          </body>
        </html>
      `;

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Fluxrow - Suporte <suporte@fluxrow.com.br>',
        to: [emailDestino],
        subject: '✅ Confirmação de Assinatura Digital - Contrato Match Solutions',
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
