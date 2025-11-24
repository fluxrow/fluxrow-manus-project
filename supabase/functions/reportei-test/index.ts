import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const REPORTEI_API_KEY = Deno.env.get('REPORTEI_API_KEY');
    const CLIENT_ID = '948243'; // ID do cliente Fachini
    const BASE_URL = 'https://app.reportei.com/api/v1'; // URL correta da API v1

    console.log('🔍 Testando API do Reportei v1...');
    console.log(`📊 Client ID: ${CLIENT_ID}`);

    const results = {
      token_valido: false,
      account_info: null,
      client_info: null,
      integracoes: [],
      widgets_por_integracao: {},
      exemplo_valores: {},
      erros: [],
      timestamp: new Date().toISOString()
    };

    // Headers padrão para todas as requisições
    const headers = {
      'Authorization': `Bearer ${REPORTEI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // 1. Validar token e obter info da conta
    console.log('\n1️⃣ Testando GET /api/v1/me');
    try {
      const meResponse = await fetch(`${BASE_URL}/me`, { headers });
      const meStatus = meResponse.status;
      console.log(`Status: ${meStatus}`);
      
      if (meStatus === 200) {
        const meData = await meResponse.json();
        results.token_valido = true;
        results.account_info = meData;
        console.log('✅ Token válido! Conta:', meData);
      } else {
        const errorText = await meResponse.text();
        results.erros.push(`/me retornou ${meStatus}: ${errorText}`);
        console.log('❌ Erro ao validar token:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /me: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 2. Buscar informações do cliente específico
    console.log(`\n2️⃣ Testando GET /api/v1/clients/${CLIENT_ID}`);
    try {
      const clientResponse = await fetch(`${BASE_URL}/clients/${CLIENT_ID}`, { headers });
      const clientStatus = clientResponse.status;
      console.log(`Status: ${clientStatus}`);
      
      if (clientStatus === 200) {
        const clientData = await clientResponse.json();
        results.client_info = clientData;
        console.log('✅ Cliente encontrado:', clientData);
      } else {
        const errorText = await clientResponse.text();
        results.erros.push(`/clients/${CLIENT_ID} retornou ${clientStatus}: ${errorText}`);
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /clients: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 3. Buscar integrações do cliente
    console.log(`\n3️⃣ Testando GET /api/v1/clients/${CLIENT_ID}/integrations`);
    try {
      const integrationsResponse = await fetch(`${BASE_URL}/clients/${CLIENT_ID}/integrations`, { headers });
      const integrationsStatus = integrationsResponse.status;
      console.log(`Status: ${integrationsStatus}`);
      
      if (integrationsStatus === 200) {
        const integrationsData = await integrationsResponse.json();
        results.integracoes = integrationsData;
        console.log('✅ Integrações encontradas:', integrationsData);

        // 4. Para cada integração, buscar widgets disponíveis
        if (Array.isArray(integrationsData)) {
          for (const integration of integrationsData) {
            const integrationId = integration.id;
            const integrationName = integration.name || integration.platform || integrationId;
            
            console.log(`\n4️⃣ Buscando widgets da integração: ${integrationName} (ID: ${integrationId})`);
            
            try {
              const widgetsResponse = await fetch(
                `${BASE_URL}/integrations/${integrationId}/widgets`, 
                { headers }
              );
              const widgetsStatus = widgetsResponse.status;
              console.log(`  Status: ${widgetsStatus}`);
              
              if (widgetsStatus === 200) {
                const widgetsData = await widgetsResponse.json();
                results.widgets_por_integracao[integrationName] = {
                  integration_id: integrationId,
                  widgets: widgetsData
                };
                console.log(`  ✅ Widgets disponíveis (${Array.isArray(widgetsData) ? widgetsData.length : 'N/A'}):`, widgetsData);

                // 5. Testar busca de valores para alguns widgets importantes
                if (Array.isArray(widgetsData) && widgetsData.length > 0) {
                  // Pegar o primeiro widget como exemplo
                  const exampleWidget = widgetsData[0];
                  const widgetSlug = exampleWidget.slug || exampleWidget.id || exampleWidget.name;
                  
                  if (widgetSlug) {
                    console.log(`\n5️⃣ Testando POST /api/v1/integrations/${integrationId}/widgets/value`);
                    console.log(`   Widget de exemplo: ${widgetSlug}`);
                    
                    // Período: última semana
                    const hoje = new Date();
                    const umaSemanaAtras = new Date(hoje);
                    umaSemanaAtras.setDate(hoje.getDate() - 7);
                    
                    const dataInicio = umaSemanaAtras.toISOString().split('T')[0];
                    const dataFim = hoje.toISOString().split('T')[0];

                    try {
                      const valueResponse = await fetch(
                        `${BASE_URL}/integrations/${integrationId}/widgets/value`,
                        {
                          method: 'POST',
                          headers,
                          body: JSON.stringify({
                            date_start: dataInicio,
                            date_end: dataFim,
                            widget: widgetSlug
                          })
                        }
                      );
                      
                      const valueStatus = valueResponse.status;
                      console.log(`   Status: ${valueStatus}`);
                      
                      if (valueStatus === 200) {
                        const valueData = await valueResponse.json();
                        results.exemplo_valores[integrationName] = {
                          widget: widgetSlug,
                          periodo: `${dataInicio} a ${dataFim}`,
                          data: valueData
                        };
                        console.log(`   ✅ Valores obtidos:`, valueData);
                      } else {
                        const errorText = await valueResponse.text();
                        console.log(`   ⚠️ Erro ao buscar valores (${valueStatus}):`, errorText);
                      }
                    } catch (error) {
                      console.error(`   ❌ Erro ao buscar valores:`, error.message);
                    }
                  }
                }
              } else {
                const errorText = await widgetsResponse.text();
                console.log(`  ⚠️ Erro ao buscar widgets (${widgetsStatus}):`, errorText);
              }
            } catch (error) {
              console.error(`  ❌ Erro ao buscar widgets:`, error.message);
            }
          }
        }
      } else {
        const errorText = await integrationsResponse.text();
        results.erros.push(`/integrations retornou ${integrationsStatus}: ${errorText}`);
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /integrations: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    console.log('\n📊 RESUMO DO TESTE:');
    console.log(`Token válido: ${results.token_valido ? '✅' : '❌'}`);
    console.log(`Integrações encontradas: ${results.integracoes.length || 0}`);
    console.log(`Widgets mapeados: ${Object.keys(results.widgets_por_integracao).length}`);
    console.log(`Exemplos de valores: ${Object.keys(results.exemplo_valores).length}`);
    console.log(`Erros encontrados: ${results.erros.length}`);

    return new Response(JSON.stringify(results, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('💥 Erro geral na função:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
