import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Delay helper to avoid rate limiting (429)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Função auxiliar para formatar data no formato dd/mm
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}`;
};

// Função auxiliar para calcular semana anterior (seg-dom)
const getLastWeek = () => {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  
  const diasParaSegundaAnterior = diaSemana === 0 ? 6 : diaSemana + 6;
  
  const dataFim = new Date(hoje);
  dataFim.setDate(hoje.getDate() - diasParaSegundaAnterior);
  
  const dataInicio = new Date(dataFim);
  dataInicio.setDate(dataFim.getDate() - 6);
  
  return {
    dataInicio: dataInicio.toISOString().split('T')[0],
    dataFim: dataFim.toISOString().split('T')[0],
    periodo: `${formatDate(dataInicio)} a ${formatDate(dataFim)}/2025`
  };
};

// Função genérica para encontrar widget por múltiplos termos
const findWidget = (widgets: any[], ...searchTerms: string[]) => {
  return widgets.find((w: any) => {
    const refKey = (w.reference_key || '').toLowerCase();
    const slug = (w.slug || '').toLowerCase();
    const name = (w.name || '').toLowerCase();
    const title = (w.references?.title || w.title || '').toLowerCase();
    const key = (w.key || '').toLowerCase();
    
    return searchTerms.some(term => 
      refKey.includes(term) || 
      slug.includes(term) || 
      name.includes(term) || 
      title.includes(term) ||
      key.includes(term)
    );
  });
};

// Função para buscar valor de um widget com payload correto
const fetchWidgetValue = async (
  integrationId: number, 
  widget: any, 
  dateStart: string, 
  dateEnd: string, 
  headers: any, 
  baseUrl: string
) => {
  try {
    console.log(`    🔄 Buscando widget: ${widget.reference_key}`);
    
    // Payload correto para a API Reportei
    const payload = {
      start: dateStart,
      end: dateEnd,
      widgets: [{
        id: widget.id,
        reference_key: widget.reference_key,
        component: widget.component || 'number_v1',
        metrics: widget.metrics || []
      }]
    };
    
    const response = await fetch(
      `${baseUrl}/integrations/${integrationId}/widgets/value`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(`    ✅ Resposta recebida:`, JSON.stringify(data).substring(0, 200));
      return data;
    } else {
      const errorText = await response.text();
      console.log(`    ⚠️ Widget ${widget.reference_key} status ${response.status}: ${errorText.substring(0, 100)}`);
      return null;
    }
  } catch (error) {
    console.error(`    ❌ Erro widget ${widget.reference_key}:`, error.message);
    return null;
  }
};

// Função auxiliar para extrair número de diferentes formatos
const extractNumber = (value: any): number => {
  if (value === null || value === undefined) return 0;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^\d.,\-]/g, '').replace(',', '.');
    return Number(cleaned) || 0;
  }
  if (typeof value === 'object') {
    // Tentar extrair de formatos comuns de resposta
    if (value.value !== undefined) return extractNumber(value.value);
    if (value.data && Array.isArray(value.data) && value.data[0]?.value !== undefined) {
      return extractNumber(value.data[0].value);
    }
  }
  return 0;
};

// Função auxiliar para extrair porcentagem
const extractPercentage = (value: any): string => {
  if (value === null || value === undefined) return '0%';
  if (typeof value === 'string' && value.includes('%')) return value;
  const num = extractNumber(value);
  return `${num.toFixed(2)}%`;
};

// Extrair valor de resposta da API (que pode vir em diferentes formatos)
const extractValueFromResponse = (response: any): number => {
  if (!response) return 0;
  
  // Formato: { data: [{ value: X }] }
  if (response.data && Array.isArray(response.data) && response.data[0]) {
    return extractNumber(response.data[0].value);
  }
  
  // Formato: { value: X }
  if (response.value !== undefined) {
    return extractNumber(response.value);
  }
  
  // Formato: [{ value: X }]
  if (Array.isArray(response) && response[0]?.value !== undefined) {
    return extractNumber(response[0].value);
  }
  
  return extractNumber(response);
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const REPORTEI_API_KEY = Deno.env.get('REPORTEI_API_KEY');
    const CLIENT_ID = '948243';
    const BASE_URL = 'https://app.reportei.com/api/v1';
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Obter período da requisição ou usar semana anterior
    const body = await req.json().catch(() => ({}));
    const { data_inicio, data_fim, auto } = body;
    
    const periodo = data_inicio && data_fim 
      ? { dataInicio: data_inicio, dataFim: data_fim, periodo: `${data_inicio} a ${data_fim}` }
      : getLastWeek();

    console.log(`\n${'='.repeat(60)}`);
    console.log(`📊 INICIANDO COLETA DE DADOS REPORTEI`);
    console.log(`📅 Período: ${periodo.periodo}`);
    console.log(`📅 Data início: ${periodo.dataInicio} | Data fim: ${periodo.dataFim}`);
    console.log(`🤖 Automático: ${auto || false}`);
    console.log(`${'='.repeat(60)}\n`);

    // Headers padrão para API do Reportei
    const headers = {
      'Authorization': `Bearer ${REPORTEI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // 1. BUSCAR INTEGRAÇÕES DO CLIENTE
    console.log('1️⃣ Buscando integrações do cliente...');
    const integrationsResponse = await fetch(`${BASE_URL}/clients/${CLIENT_ID}/integrations`, { headers });
    
    if (!integrationsResponse.ok) {
      throw new Error(`Erro ao buscar integrações: ${integrationsResponse.status}`);
    }

    const integrationsData = await integrationsResponse.json();
    const integrations = integrationsData.data || [];
    console.log(`✅ ${integrations.length} integrações encontradas:`);
    
    integrations.forEach((i: any) => {
      console.log(`   - ${i.integration_name} (ID: ${i.id}) - ${i.source_name}`);
    });

    // 2. MAPEAR INTEGRAÇÕES POR NOME EXATO (integration_name)
    // Isso é CRÍTICO! Usar integration_name, não platform
    const integrationMap: {
      metaAds?: any;
      googleAds?: any;
      instagram?: any;
      rdStation?: any;
      facebookPage?: any;
      analytics?: any;
    } = {};
    
    for (const integration of integrations) {
      const integrationName = integration.integration_name;
      
      if (integrationName === 'Meta Ads') {
        integrationMap.metaAds = integration;
        console.log(`📱 Meta Ads mapeado: ID ${integration.id}`);
      } else if (integrationName === 'Google Ads') {
        integrationMap.googleAds = integration;
        console.log(`🔍 Google Ads mapeado: ID ${integration.id}`);
      } else if (integrationName === 'Instagram Business') {
        integrationMap.instagram = integration;
        console.log(`📸 Instagram mapeado: ID ${integration.id}`);
      } else if (integrationName === 'RD Station CRM') {
        integrationMap.rdStation = integration;
        console.log(`📊 RD Station mapeado: ID ${integration.id}`);
      } else if (integrationName === 'Facebook') {
        integrationMap.facebookPage = integration;
        console.log(`📘 Facebook Page mapeado: ID ${integration.id}`);
      } else if (integrationName === 'Google Analytics 4') {
        if (!integrationMap.analytics) {
          integrationMap.analytics = integration;
          console.log(`📈 Google Analytics mapeado: ID ${integration.id}`);
        }
      }
    }

    console.log(`\n📌 Resumo das integrações mapeadas:`);
    console.log(`   Meta Ads: ${integrationMap.metaAds?.id || 'N/A'}`);
    console.log(`   Google Ads: ${integrationMap.googleAds?.id || 'N/A'}`);
    console.log(`   Instagram: ${integrationMap.instagram?.id || 'N/A'}`);
    console.log(`   RD Station: ${integrationMap.rdStation?.id || 'N/A'}`);
    console.log(`   Facebook Page: ${integrationMap.facebookPage?.id || 'N/A'}`);
    console.log(`   Analytics: ${integrationMap.analytics?.id || 'N/A'}`);

    // Inicializar variáveis de coleta
    let leadsMeta = 0, investimentoMeta = 0, conversasMeta = 0;
    let alcanceMeta = 0, impressoesMeta = 0, cliquesMeta = 0;
    let cpmMeta = 0, cpcMeta = 0, ctrMeta = '0%', frequenciaMeta = 0;
    
    let cliquesGoogle = 0, investimentoGoogle = 0, impressoesGoogle = 0;
    let conversoesGoogle = 0, cpcGoogle = 0, cpmGoogle = 0, ctrGoogle = '0%', custoConversaoGoogle = 0;
    
    let conversasInstagram = 0, seguidoresInstagram = 0, novosSeguidoresInstagram = 0, alcanceInstagram = 0;
    let conversasFacebook = 0;
    
    let oportunidadesRD = 0, vendasRD = 0, taxaConversaoRD = 0;
    let dadosVendedores: any[] = [];
    let dadosCategorias: any[] = [];
    let dadosUrls: any[] = [];

    // 3. BUSCAR DADOS DO META ADS
    if (integrationMap.metaAds) {
      console.log(`\n2️⃣ COLETANDO DADOS META ADS (ID: ${integrationMap.metaAds.id})...`);
      
      await delay(500);
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${integrationMap.metaAds.id}/widgets`, { headers });
      
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = widgetsData.data || widgetsData || [];
        console.log(`   📋 Widgets disponíveis: ${widgets.length}`);
        
        // Log todos os reference_key para debug
        const refKeys = widgets.map((w: any) => w.reference_key).filter(Boolean);
        console.log(`   🔑 Reference keys: ${refKeys.slice(0, 10).join(', ')}...`);
        
        // INVESTIMENTO (spend)
        const spendWidget = findWidget(widgets, 'spend', 'amount_spent', 'cost', 'custo');
        if (spendWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, spendWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          investimentoMeta = extractValueFromResponse(data);
          console.log(`   ✅ Investimento: R$ ${investimentoMeta}`);
        }
        
        // LEADS/RESULTADOS
        const leadsWidget = findWidget(widgets, 'leads', 'results', 'onsite_conversion', 'conversions', 'onsiteconversion');
        if (leadsWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, leadsWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          leadsMeta = extractValueFromResponse(data);
          console.log(`   ✅ Leads: ${leadsMeta}`);
        }
        
        // CONVERSAS INICIADAS
        const conversasWidget = findWidget(widgets, 'messaging_conversation', 'messaging', 'message', 'conversa');
        if (conversasWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, conversasWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          conversasMeta = extractValueFromResponse(data);
          console.log(`   ✅ Conversas: ${conversasMeta}`);
        }
        
        // ALCANCE
        const reachWidget = findWidget(widgets, 'reach', 'alcance');
        if (reachWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, reachWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          alcanceMeta = extractValueFromResponse(data);
          console.log(`   ✅ Alcance: ${alcanceMeta}`);
        }
        
        // IMPRESSÕES
        const impressionsWidget = findWidget(widgets, 'impressions', 'impressoes');
        if (impressionsWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, impressionsWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          impressoesMeta = extractValueFromResponse(data);
          console.log(`   ✅ Impressões: ${impressoesMeta}`);
        }
        
        // CLIQUES
        const clicksWidget = findWidget(widgets, 'clicks', 'link_click', 'cliques');
        if (clicksWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, clicksWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          cliquesMeta = extractValueFromResponse(data);
          console.log(`   ✅ Cliques: ${cliquesMeta}`);
        }
        
        // CPM
        const cpmWidget = findWidget(widgets, 'cpm');
        if (cpmWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, cpmWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          cpmMeta = extractValueFromResponse(data);
          console.log(`   ✅ CPM: R$ ${cpmMeta}`);
        } else if (impressoesMeta > 0 && investimentoMeta > 0) {
          cpmMeta = Number(((investimentoMeta / impressoesMeta) * 1000).toFixed(2));
          console.log(`   📊 CPM calculado: R$ ${cpmMeta}`);
        }
        
        // CPC
        const cpcWidget = findWidget(widgets, 'cpc', 'cost_per_click');
        if (cpcWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, cpcWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          cpcMeta = extractValueFromResponse(data);
          console.log(`   ✅ CPC: R$ ${cpcMeta}`);
        } else if (cliquesMeta > 0 && investimentoMeta > 0) {
          cpcMeta = Number((investimentoMeta / cliquesMeta).toFixed(2));
          console.log(`   📊 CPC calculado: R$ ${cpcMeta}`);
        }
        
        // CTR
        const ctrWidget = findWidget(widgets, 'ctr', 'click_through');
        if (ctrWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, ctrWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          ctrMeta = extractPercentage(extractValueFromResponse(data));
          console.log(`   ✅ CTR: ${ctrMeta}`);
        } else if (impressoesMeta > 0 && cliquesMeta > 0) {
          ctrMeta = `${((cliquesMeta / impressoesMeta) * 100).toFixed(2)}%`;
          console.log(`   📊 CTR calculado: ${ctrMeta}`);
        }
        
        // FREQUÊNCIA
        const freqWidget = findWidget(widgets, 'frequency', 'frequencia');
        if (freqWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.metaAds.id, freqWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          frequenciaMeta = extractValueFromResponse(data);
          console.log(`   ✅ Frequência: ${frequenciaMeta}`);
        } else if (alcanceMeta > 0 && impressoesMeta > 0) {
          frequenciaMeta = Number((impressoesMeta / alcanceMeta).toFixed(2));
          console.log(`   📊 Frequência calculada: ${frequenciaMeta}`);
        }
      }
    }

    // 4. BUSCAR DADOS DO GOOGLE ADS
    if (integrationMap.googleAds) {
      console.log(`\n3️⃣ COLETANDO DADOS GOOGLE ADS (ID: ${integrationMap.googleAds.id})...`);
      
      await delay(500);
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${integrationMap.googleAds.id}/widgets`, { headers });
      
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = widgetsData.data || widgetsData || [];
        console.log(`   📋 Widgets disponíveis: ${widgets.length}`);
        
        // Log reference keys
        const refKeys = widgets.map((w: any) => w.reference_key).filter(Boolean);
        console.log(`   🔑 Reference keys: ${refKeys.slice(0, 10).join(', ')}...`);
        
        // INVESTIMENTO
        const costWidget = findWidget(widgets, 'cost', 'spend', 'custo');
        if (costWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.googleAds.id, costWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          investimentoGoogle = extractValueFromResponse(data);
          console.log(`   ✅ Investimento: R$ ${investimentoGoogle}`);
        }
        
        // CLIQUES
        const clicksWidget = findWidget(widgets, 'clicks', 'cliques');
        if (clicksWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.googleAds.id, clicksWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          cliquesGoogle = extractValueFromResponse(data);
          console.log(`   ✅ Cliques: ${cliquesGoogle}`);
        }
        
        // IMPRESSÕES
        const impressionsWidget = findWidget(widgets, 'impressions', 'impressoes');
        if (impressionsWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.googleAds.id, impressionsWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          impressoesGoogle = extractValueFromResponse(data);
          console.log(`   ✅ Impressões: ${impressoesGoogle}`);
        }
        
        // CONVERSÕES
        const conversionsWidget = findWidget(widgets, 'conversions', 'conversoes', 'all_conv');
        if (conversionsWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.googleAds.id, conversionsWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          conversoesGoogle = extractValueFromResponse(data);
          console.log(`   ✅ Conversões: ${conversoesGoogle}`);
        }
        
        // Calcular métricas derivadas
        if (cliquesGoogle > 0 && investimentoGoogle > 0) {
          cpcGoogle = Number((investimentoGoogle / cliquesGoogle).toFixed(2));
        }
        if (impressoesGoogle > 0 && investimentoGoogle > 0) {
          cpmGoogle = Number(((investimentoGoogle / impressoesGoogle) * 1000).toFixed(2));
        }
        if (impressoesGoogle > 0 && cliquesGoogle > 0) {
          ctrGoogle = `${((cliquesGoogle / impressoesGoogle) * 100).toFixed(2)}%`;
        }
        if (conversoesGoogle > 0 && investimentoGoogle > 0) {
          custoConversaoGoogle = Number((investimentoGoogle / conversoesGoogle).toFixed(2));
        }
        
        console.log(`   📊 CPC: R$ ${cpcGoogle}`);
        console.log(`   📊 CPM: R$ ${cpmGoogle}`);
        console.log(`   📊 CTR: ${ctrGoogle}`);
        console.log(`   📊 Custo/Conversão: R$ ${custoConversaoGoogle}`);
      }
    }

    // 5. BUSCAR DADOS DO INSTAGRAM
    if (integrationMap.instagram) {
      console.log(`\n4️⃣ COLETANDO DADOS INSTAGRAM (ID: ${integrationMap.instagram.id})...`);
      
      await delay(500);
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${integrationMap.instagram.id}/widgets`, { headers });
      
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = widgetsData.data || widgetsData || [];
        console.log(`   📋 Widgets disponíveis: ${widgets.length}`);
        
        // SEGUIDORES
        const followersWidget = findWidget(widgets, 'followers', 'seguidores', 'followers_count');
        if (followersWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.instagram.id, followersWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          seguidoresInstagram = extractValueFromResponse(data);
          console.log(`   ✅ Seguidores: ${seguidoresInstagram}`);
        }
        
        // NOVOS SEGUIDORES
        const newFollowersWidget = findWidget(widgets, 'new_followers', 'gained', 'novos');
        if (newFollowersWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.instagram.id, newFollowersWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          novosSeguidoresInstagram = extractValueFromResponse(data);
          console.log(`   ✅ Novos Seguidores: ${novosSeguidoresInstagram}`);
        }
        
        // ALCANCE
        const reachWidget = findWidget(widgets, 'reach', 'alcance');
        if (reachWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.instagram.id, reachWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          alcanceInstagram = extractValueFromResponse(data);
          console.log(`   ✅ Alcance: ${alcanceInstagram}`);
        }
      }
    }

    // 6. BUSCAR CONVERSAS DO FACEBOOK PAGE
    if (integrationMap.facebookPage) {
      console.log(`\n5️⃣ COLETANDO DADOS FACEBOOK PAGE (ID: ${integrationMap.facebookPage.id})...`);
      
      await delay(500);
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${integrationMap.facebookPage.id}/widgets`, { headers });
      
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = widgetsData.data || widgetsData || [];
        console.log(`   📋 Widgets disponíveis: ${widgets.length}`);
        
        // MENSAGENS INICIADAS
        const messagesWidget = findWidget(widgets, 'messages_new', 'page_messages', 'conversations');
        if (messagesWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.facebookPage.id, messagesWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          conversasFacebook = extractValueFromResponse(data);
          console.log(`   ✅ Mensagens: ${conversasFacebook}`);
        }
      }
    }

    // 7. BUSCAR DADOS DO RD STATION
    if (integrationMap.rdStation) {
      console.log(`\n6️⃣ COLETANDO DADOS RD STATION (ID: ${integrationMap.rdStation.id})...`);
      
      await delay(500);
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${integrationMap.rdStation.id}/widgets`, { headers });
      
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = widgetsData.data || widgetsData || [];
        console.log(`   📋 Widgets disponíveis: ${widgets.length}`);
        
        // OPORTUNIDADES
        const oppsWidget = findWidget(widgets, 'opportunities', 'deals', 'oportunidades');
        if (oppsWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.rdStation.id, oppsWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          oportunidadesRD = extractValueFromResponse(data);
          console.log(`   ✅ Oportunidades: ${oportunidadesRD}`);
        }
        
        // VENDAS (WON)
        const wonWidget = findWidget(widgets, 'won', 'vendas', 'ganhos', 'closed_won');
        if (wonWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.rdStation.id, wonWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          vendasRD = extractValueFromResponse(data);
          console.log(`   ✅ Vendas: ${vendasRD}`);
        }
        
        // VENDEDORES (breakdown)
        const usersWidget = findWidget(widgets, 'by_user', 'deals_by_user', 'vendedor', 'responsavel');
        if (usersWidget) {
          await delay(400);
          const data = await fetchWidgetValue(integrationMap.rdStation.id, usersWidget, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (data?.data && Array.isArray(data.data)) {
            dadosVendedores = data.data.map((item: any) => ({
              nome: (item.name || item.user || item.dimension || 'Desconhecido').replace('Juan', 'Jean Lucas'),
              leads: extractNumber(item.value || item.count || item.deals)
            })).filter((v: any) => v.leads > 0).sort((a: any, b: any) => b.leads - a.leads);
            console.log(`   ✅ Vendedores: ${dadosVendedores.length}`);
          }
        }
        
        // Taxa de conversão
        if (oportunidadesRD > 0 && vendasRD > 0) {
          taxaConversaoRD = Number(((vendasRD / oportunidadesRD) * 100).toFixed(2));
        }
      }
    }

    // 8. CALCULAR KPIs FINAIS
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📊 RESUMO DOS DADOS COLETADOS:`);
    console.log(`${'='.repeat(60)}`);
    
    const investimentoTotal = investimentoMeta + investimentoGoogle;
    const leadsTotais = leadsMeta + conversoesGoogle;
    const custoLeadMedio = leadsTotais > 0 ? Number((investimentoTotal / leadsTotais).toFixed(2)) : 0;
    const custoLeadMeta = leadsMeta > 0 ? Number((investimentoMeta / leadsMeta).toFixed(2)) : 0;

    console.log(`\nMETA ADS:`);
    console.log(`  - Leads: ${leadsMeta}`);
    console.log(`  - Investimento: R$ ${investimentoMeta}`);
    console.log(`  - Conversas: ${conversasMeta}`);
    console.log(`  - Alcance: ${alcanceMeta}`);
    console.log(`  - Impressões: ${impressoesMeta}`);
    console.log(`  - Cliques: ${cliquesMeta}`);
    console.log(`  - CPM: R$ ${cpmMeta}`);
    console.log(`  - CPC: R$ ${cpcMeta}`);
    console.log(`  - CTR: ${ctrMeta}`);
    console.log(`  - Frequência: ${frequenciaMeta}`);
    
    console.log(`\nGOOGLE ADS:`);
    console.log(`  - Investimento: R$ ${investimentoGoogle}`);
    console.log(`  - Cliques: ${cliquesGoogle}`);
    console.log(`  - Impressões: ${impressoesGoogle}`);
    console.log(`  - Conversões: ${conversoesGoogle}`);
    console.log(`  - CPC: R$ ${cpcGoogle}`);
    console.log(`  - CPM: R$ ${cpmGoogle}`);
    console.log(`  - CTR: ${ctrGoogle}`);
    console.log(`  - Custo/Conversão: R$ ${custoConversaoGoogle}`);
    
    console.log(`\nINSTAGRAM:`);
    console.log(`  - Seguidores: ${seguidoresInstagram}`);
    console.log(`  - Novos Seguidores: ${novosSeguidoresInstagram}`);
    console.log(`  - Alcance: ${alcanceInstagram}`);
    
    console.log(`\nFACEBOOK PAGE:`);
    console.log(`  - Mensagens: ${conversasFacebook}`);
    
    console.log(`\nRD STATION:`);
    console.log(`  - Oportunidades: ${oportunidadesRD}`);
    console.log(`  - Vendas: ${vendasRD}`);
    console.log(`  - Taxa Conversão: ${taxaConversaoRD}%`);
    console.log(`  - Vendedores: ${dadosVendedores.length}`);
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`💰 INVESTIMENTO TOTAL: R$ ${investimentoTotal.toFixed(2)}`);
    console.log(`📈 LEADS TOTAIS: ${leadsTotais}`);
    console.log(`💵 CPL MÉDIO: R$ ${custoLeadMedio}`);
    console.log(`${'='.repeat(60)}\n`);

    if (investimentoTotal === 0 && leadsTotais === 0) {
      console.log(`⚠️ ATENÇÃO: Nenhum dado significativo coletado! Verifique se as integrações estão configuradas corretamente.`);
    }

    // 9. ESTRUTURAR E SALVAR NO BANCO
    const relatorioProcessado = {
      periodo: periodo.periodo,
      data_inicio: periodo.dataInicio,
      data_fim: periodo.dataFim,
      investimento_total: investimentoTotal,
      leads_totais: leadsTotais,
      custo_lead_medio: custoLeadMedio,
      
      dados_meta: {
        leads: leadsMeta,
        investimento: investimentoMeta,
        conversas: conversasMeta,
        alcance: alcanceMeta,
        impressoes: impressoesMeta,
        cliques: cliquesMeta,
        cpm: cpmMeta,
        cpc: cpcMeta,
        ctr: ctrMeta,
        frequencia: frequenciaMeta,
        custo_lead: custoLeadMeta
      },
      
      dados_google: {
        investimento: investimentoGoogle,
        cliques: cliquesGoogle,
        impressoes: impressoesGoogle,
        conversoes: conversoesGoogle,
        leads: conversoesGoogle,
        cpc: cpcGoogle,
        cpm: cpmGoogle,
        ctr: ctrGoogle,
        custo_conversao: custoConversaoGoogle
      },
      
      dados_instagram: {
        seguidores: seguidoresInstagram,
        novos_seguidores: novosSeguidoresInstagram,
        alcance: alcanceInstagram,
        conversas: conversasInstagram,
        visualizacoes: 0
      },
      
      dados_rd_station: {
        oportunidades: oportunidadesRD,
        vendas: vendasRD,
        taxa_conversao: taxaConversaoRD,
        valor_vendas: 0,
        ticket_medio: 0
      },
      
      dados_vendedores: dadosVendedores,
      dados_categorias: dadosCategorias, // Mantido vazio para preenchimento manual
      dados_urls: dadosUrls, // Mantido vazio para preenchimento manual
      dados_asset_groups: [], // Mantido vazio para preenchimento manual
      dados_analytics: {},
      conversas_mensagem: {
        facebook: conversasFacebook || conversasMeta,
        instagram: conversasInstagram
      },
      gerado_automaticamente: true
    };

    console.log(`\n💾 Salvando relatório no banco...`);
    
    const { data: savedData, error: saveError } = await supabase
      .from('relatorios_semanais')
      .insert(relatorioProcessado)
      .select()
      .single();

    if (saveError) {
      console.error(`❌ Erro ao salvar:`, saveError);
      throw saveError;
    }

    console.log(`✅ Relatório salvo com sucesso!`);
    console.log(`📊 ID: ${savedData.id}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Relatório gerado com sucesso',
      id: savedData.id,
      periodo: periodo.periodo,
      resumo: {
        investimento_total: investimentoTotal,
        leads_totais: leadsTotais,
        custo_lead_medio: custoLeadMedio,
        meta_ads: {
          leads: leadsMeta,
          investimento: investimentoMeta,
          conversas: conversasMeta
        },
        google_ads: {
          conversoes: conversoesGoogle,
          investimento: investimentoGoogle
        }
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Erro geral:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
