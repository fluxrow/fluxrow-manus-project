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
    const COMPANY_ID = '948243';
    const BASE_URL = 'https://app.reportei.com/api';

    console.log('🔍 Testando API do Reportei...');
    console.log(`📊 Company ID: ${COMPANY_ID}`);

    const results = {
      token_valido: false,
      endpoints_testados: {},
      erros: [],
      timestamp: new Date().toISOString()
    };

    // Headers padrão para todas as requisições
    const headers = {
      'Authorization': `Bearer ${REPORTEI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // 1. Testar autenticação básica - Info da empresa
    console.log('\n1️⃣ Testando GET /api/companies/' + COMPANY_ID);
    try {
      const companyResponse = await fetch(`${BASE_URL}/companies/${COMPANY_ID}`, { headers });
      const companyStatus = companyResponse.status;
      console.log(`Status: ${companyStatus}`);
      
      if (companyStatus === 200) {
        const companyData = await companyResponse.json();
        results.token_valido = true;
        results.endpoints_testados['/companies/:id'] = {
          status: companyStatus,
          sucesso: true,
          data: companyData
        };
        console.log('✅ Token válido! Empresa encontrada:', companyData.name || 'N/A');
      } else {
        const errorText = await companyResponse.text();
        results.endpoints_testados['/companies/:id'] = {
          status: companyStatus,
          sucesso: false,
          erro: errorText
        };
        console.log('❌ Erro ao buscar empresa:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /companies: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 2. Testar endpoint de integrações
    console.log('\n2️⃣ Testando GET /api/companies/' + COMPANY_ID + '/integrations');
    try {
      const integrationsResponse = await fetch(`${BASE_URL}/companies/${COMPANY_ID}/integrations`, { headers });
      const integrationsStatus = integrationsResponse.status;
      console.log(`Status: ${integrationsStatus}`);
      
      if (integrationsStatus === 200) {
        const integrationsData = await integrationsResponse.json();
        results.endpoints_testados['/companies/:id/integrations'] = {
          status: integrationsStatus,
          sucesso: true,
          data: integrationsData
        };
        console.log('✅ Integrações encontradas:', integrationsData.length || 0);
      } else {
        const errorText = await integrationsResponse.text();
        results.endpoints_testados['/companies/:id/integrations'] = {
          status: integrationsStatus,
          sucesso: false,
          erro: errorText
        };
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /integrations: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 3. Testar endpoint de relatórios
    console.log('\n3️⃣ Testando GET /api/companies/' + COMPANY_ID + '/reports');
    try {
      const reportsResponse = await fetch(`${BASE_URL}/companies/${COMPANY_ID}/reports`, { headers });
      const reportsStatus = reportsResponse.status;
      console.log(`Status: ${reportsStatus}`);
      
      if (reportsStatus === 200) {
        const reportsData = await reportsResponse.json();
        results.endpoints_testados['/companies/:id/reports'] = {
          status: reportsStatus,
          sucesso: true,
          data: reportsData
        };
        console.log('✅ Relatórios encontrados:', reportsData.length || 0);
      } else {
        const errorText = await reportsResponse.text();
        results.endpoints_testados['/companies/:id/reports'] = {
          status: reportsStatus,
          sucesso: false,
          erro: errorText
        };
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /reports: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 4. Testar endpoint de templates
    console.log('\n4️⃣ Testando GET /api/companies/' + COMPANY_ID + '/templates');
    try {
      const templatesResponse = await fetch(`${BASE_URL}/companies/${COMPANY_ID}/templates`, { headers });
      const templatesStatus = templatesResponse.status;
      console.log(`Status: ${templatesStatus}`);
      
      if (templatesStatus === 200) {
        const templatesData = await templatesResponse.json();
        results.endpoints_testados['/companies/:id/templates'] = {
          status: templatesStatus,
          sucesso: true,
          data: templatesData
        };
        console.log('✅ Templates encontrados:', templatesData.length || 0);
      } else {
        const errorText = await templatesResponse.text();
        results.endpoints_testados['/companies/:id/templates'] = {
          status: templatesStatus,
          sucesso: false,
          erro: errorText
        };
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /templates: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    // 5. Testar endpoint de dados com período (semana passada)
    const hoje = new Date();
    const umaSemanaAtras = new Date(hoje);
    umaSemanaAtras.setDate(hoje.getDate() - 7);
    
    const dataInicio = umaSemanaAtras.toISOString().split('T')[0];
    const dataFim = hoje.toISOString().split('T')[0];

    console.log(`\n5️⃣ Testando GET /api/companies/${COMPANY_ID}/reports?date_start=${dataInicio}&date_end=${dataFim}`);
    try {
      const dataResponse = await fetch(
        `${BASE_URL}/companies/${COMPANY_ID}/reports?date_start=${dataInicio}&date_end=${dataFim}`, 
        { headers }
      );
      const dataStatus = dataResponse.status;
      console.log(`Status: ${dataStatus}`);
      
      if (dataStatus === 200) {
        const data = await dataResponse.json();
        results.endpoints_testados['/companies/:id/reports?date_start&date_end'] = {
          status: dataStatus,
          sucesso: true,
          data: data,
          periodo: `${dataInicio} a ${dataFim}`
        };
        console.log('✅ Dados do período encontrados');
      } else {
        const errorText = await dataResponse.text();
        results.endpoints_testados['/companies/:id/reports?date_start&date_end'] = {
          status: dataStatus,
          sucesso: false,
          erro: errorText
        };
        console.log('⚠️ Resposta:', errorText);
      }
    } catch (error) {
      results.erros.push(`Erro em /reports com período: ${error.message}`);
      console.error('❌ Erro:', error.message);
    }

    console.log('\n📊 RESUMO DO TESTE:');
    console.log(`Token válido: ${results.token_valido ? '✅' : '❌'}`);
    console.log(`Endpoints testados: ${Object.keys(results.endpoints_testados).length}`);
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
