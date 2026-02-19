import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  
  const ano = dataFim.getFullYear();
  
  return {
    dataInicio: dataInicio.toISOString().split('T')[0],
    dataFim: dataFim.toISOString().split('T')[0],
    periodo: `${formatDate(dataInicio)} a ${formatDate(dataFim)}/${ano}`
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

// Delay com promise
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch com timeout
const fetchWithTimeout = async (url: string, options: RequestInit, timeoutMs = 15000): Promise<Response> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeout);
  }
};

// Fetch com retry e backoff exponencial para rate limiting
const fetchWithRetry = async (
  url: string, 
  options: RequestInit, 
  timeoutMs = 15000,
  maxRetries = 3
): Promise<Response> => {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, options, timeoutMs);
      
      // Se receber 429, esperar e tentar novamente
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : Math.min(1000 * Math.pow(2, attempt), 5000);
        console.log(`    ⏳ Rate limit (429), aguardando ${waitTime}ms antes do retry ${attempt + 1}/${maxRetries}...`);
        await delay(waitTime);
        continue;
      }
      
      // Se receber 5xx, retry com backoff
      if (response.status >= 500) {
        const waitTime = Math.min(500 * Math.pow(2, attempt), 4000);
        console.log(`    ⏳ Erro ${response.status}, aguardando ${waitTime}ms...`);
        await delay(waitTime);
        continue;
      }
      
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries - 1) {
        const waitTime = Math.min(500 * Math.pow(2, attempt), 3000);
        console.log(`    ⏳ Erro de rede, retry em ${waitTime}ms...`);
        await delay(waitTime);
      }
    }
  }
  
  throw lastError || new Error('Max retries exceeded');
};

// Batch fetch múltiplos widgets de uma vez COM retry
const fetchWidgetsBatch = async (
  integrationId: number,
  widgets: any[],
  dateStart: string,
  dateEnd: string,
  headers: any,
  baseUrl: string
): Promise<Map<string, any>> => {
  const results = new Map<string, any>();
  
  if (widgets.length === 0) return results;

  const payload = {
    start: dateStart,
    end: dateEnd,
    widgets: widgets.map(w => ({
      id: w.id,
      reference_key: w.reference_key,
      component: w.component || 'number_v1',
      metrics: w.metrics || []
    }))
  };

  try {
    console.log(`    📦 Batch request: ${widgets.length} widgets`);
    
    const response = await fetchWithRetry(
      `${baseUrl}/integrations/${integrationId}/widgets/value`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      },
      20000, // 20s timeout para batch
      3 // 3 retries
    );

    if (response.ok) {
      const data = await response.json();
      
      // Processar resposta e mapear por widget id
      if (data?.data) {
        for (const widget of widgets) {
          const widgetData = data.data[widget.id];
          if (widgetData) {
            results.set(widget.reference_key, widgetData);
          }
        }
      }
      console.log(`    ✅ Batch recebido: ${results.size} respostas`);
    } else {
      console.log(`    ⚠️ Batch falhou após retries: ${response.status}`);
    }
  } catch (error) {
    console.error(`    ❌ Erro batch após retries:`, error.message);
  }

  return results;
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
    if (value.value !== undefined) return extractNumber(value.value);
    if (value.values !== undefined) return extractNumber(value.values);
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
const extractValueFromWidget = (widgetResponse: any): number => {
  if (!widgetResponse) return 0;
  
  // Formato: { values: X }
  if (widgetResponse.values !== undefined) {
    return extractNumber(widgetResponse.values);
  }
  
  // Formato: { value: X }
  if (widgetResponse.value !== undefined) {
    return extractNumber(widgetResponse.value);
  }
  
  // Formato: { data: [{ value: X }] }
  if (widgetResponse.data && Array.isArray(widgetResponse.data) && widgetResponse.data[0]) {
    return extractNumber(widgetResponse.data[0].value);
  }
  
  return extractNumber(widgetResponse);
};

serve(async (req) => {
  const startTime = Date.now();
  
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
    const integrationsResponse = await fetchWithTimeout(`${BASE_URL}/clients/${CLIENT_ID}/integrations`, { headers }, 10000);
    
    if (!integrationsResponse.ok) {
      throw new Error(`Erro ao buscar integrações: ${integrationsResponse.status}`);
    }

    const integrationsData = await integrationsResponse.json();
    const integrations = integrationsData.data || [];
    console.log(`✅ ${integrations.length} integrações encontradas`);

    // 2. MAPEAR INTEGRAÇÕES POR NOME EXATO
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
      } else if (integrationName === 'Google Ads') {
        integrationMap.googleAds = integration;
      } else if (integrationName === 'Instagram Business') {
        integrationMap.instagram = integration;
      } else if (integrationName === 'RD Station CRM') {
        integrationMap.rdStation = integration;
      } else if (integrationName === 'Facebook') {
        integrationMap.facebookPage = integration;
      } else if (integrationName === 'Google Analytics 4' && !integrationMap.analytics) {
        integrationMap.analytics = integration;
      }
    }

    console.log(`📌 Integrações: Meta=${integrationMap.metaAds?.id || 'N/A'}, Google=${integrationMap.googleAds?.id || 'N/A'}, IG=${integrationMap.instagram?.id || 'N/A'}, RD=${integrationMap.rdStation?.id || 'N/A'}`);

    // Inicializar variáveis de coleta
    let leadsMeta = 0, investimentoMeta = 0, conversasMeta = 0;
    let alcanceMeta = 0, impressoesMeta = 0, cliquesMeta = 0;
    let cpmMeta = 0, cpcMeta = 0, ctrMeta = '0%', frequenciaMeta = 0;
    
    let cliquesGoogle = 0, investimentoGoogle = 0, impressoesGoogle = 0;
    let conversoesGoogle = 0, cpcGoogle = 0, cpmGoogle = 0, ctrGoogle = '0%', custoConversaoGoogle = 0;
    
    let seguidoresInstagram = 0, novosSeguidoresInstagram = 0, alcanceInstagram = 0;
    let conversasInstagram = 0, conversasFacebook = 0;
    
    let oportunidadesRD = 0, vendasRD = 0, taxaConversaoRD = 0, valorVendasRD = 0;
    let dadosVendedores: any[] = [];
    let dadosCategorias: { whatsapp: any[], forms: any[] } = { whatsapp: [], forms: [] };
    let dadosUrls: any[] = [];

    // ============ COLETA SEQUENCIAL PARA EVITAR RATE LIMIT ============
    // Meta Ads -> delay -> Google Ads -> delay -> demais em paralelo

    // === META ADS ===
    if (integrationMap.metaAds) {
      console.log(`\n2️⃣ META ADS (ID: ${integrationMap.metaAds.id})...`);
      try {
        const widgetsResponse = await fetchWithRetry(`${BASE_URL}/integrations/${integrationMap.metaAds.id}/widgets`, { headers }, 10000, 3);
        
        if (widgetsResponse.ok) {
          const widgetsData = await widgetsResponse.json();
          const widgets = widgetsData.data || widgetsData || [];
          console.log(`   📋 Meta Ads: ${widgets.length} widgets disponíveis`);
          
          // Buscar widgets
          const spendWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase().includes('spend'));
          const leadsWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase().includes('actions_lead'));
          const messagingWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase().includes('conversation'));
          const reachWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase() === 'fb_ads:reach');
          const impressionsWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase() === 'fb_ads:impressions');
          const clicksWidget = widgets.find((w: any) => (w.reference_key || '').toLowerCase() === 'fb_ads:clicks');
          
          const targetWidgets = [spendWidget, leadsWidget, messagingWidget, reachWidget, impressionsWidget, clicksWidget].filter(Boolean);
          
          if (targetWidgets.length > 0) {
            console.log(`   📦 Buscando ${targetWidgets.length} widgets...`);
            
            const results = await fetchWidgetsBatch(
              integrationMap.metaAds.id, targetWidgets, periodo.dataInicio, periodo.dataFim, headers, BASE_URL
            );
            
            let leadsFormulario = 0;
            for (const [refKey, data] of results) {
              const value = extractValueFromWidget(data);
              const refLower = refKey.toLowerCase();
              if (refLower.includes('spend')) investimentoMeta = value;
              else if (refLower.includes('conversation')) conversasMeta = value;
              else if (refLower.includes('actions_lead')) leadsFormulario = value;
              else if (refLower === 'fb_ads:reach') alcanceMeta = value;
              else if (refLower === 'fb_ads:impressions') impressoesMeta = value;
              else if (refLower === 'fb_ads:clicks') cliquesMeta = value;
            }
            
            leadsMeta = conversasMeta + leadsFormulario;
            console.log(`   📊 Meta: ${conversasMeta} conversas WA + ${leadsFormulario} forms = ${leadsMeta} leads`);
            
            // Métricas derivadas
            if (impressoesMeta > 0 && investimentoMeta > 0) cpmMeta = Number(((investimentoMeta / impressoesMeta) * 1000).toFixed(2));
            if (cliquesMeta > 0 && investimentoMeta > 0) cpcMeta = Number((investimentoMeta / cliquesMeta).toFixed(2));
            if (impressoesMeta > 0 && cliquesMeta > 0) ctrMeta = `${((cliquesMeta / impressoesMeta) * 100).toFixed(2)}%`;
            if (alcanceMeta > 0 && impressoesMeta > 0) frequenciaMeta = Number((impressoesMeta / alcanceMeta).toFixed(2));
          }
          
          console.log(`   ✅ Meta: R$${investimentoMeta}, ${leadsMeta} leads`);
        }
      } catch (error) {
        console.error(`   ❌ Erro Meta Ads:`, error.message);
      }
    }

    // Delay entre Meta e Google para evitar rate limit
    await delay(300);

    // === GOOGLE ADS ===
    if (integrationMap.googleAds) {
      console.log(`\n3️⃣ GOOGLE ADS (ID: ${integrationMap.googleAds.id})...`);
      try {
        const widgetsResponse = await fetchWithRetry(`${BASE_URL}/integrations/${integrationMap.googleAds.id}/widgets`, { headers }, 10000, 3);
        
        if (widgetsResponse.ok) {
          const widgetsData = await widgetsResponse.json();
          const widgets = widgetsData.data || widgetsData || [];
          console.log(`   📋 Google Ads: ${widgets.length} widgets disponíveis`);
          
          const targetWidgets = [
            findWidget(widgets, 'gads:cost', 'cost_micros', 'spend'),
            findWidget(widgets, 'gads:clicks', 'clicks'),
            findWidget(widgets, 'gads:impressions', 'impressions'),
            findWidget(widgets, 'gads:all_conversions', 'conversions'),
          ].filter(Boolean);
          
          if (targetWidgets.length > 0) {
            const results = await fetchWidgetsBatch(
              integrationMap.googleAds.id, targetWidgets, periodo.dataInicio, periodo.dataFim, headers, BASE_URL
            );
            
            for (const [refKey, data] of results) {
              const value = extractValueFromWidget(data);
              if (refKey.includes('cost')) investimentoGoogle = value;
              else if (refKey.includes('clicks')) cliquesGoogle = value;
              else if (refKey.includes('impressions')) impressoesGoogle = value;
              else if (refKey.includes('conversions')) conversoesGoogle = value;
            }
            
            // Métricas derivadas
            if (cliquesGoogle > 0 && investimentoGoogle > 0) cpcGoogle = Number((investimentoGoogle / cliquesGoogle).toFixed(2));
            if (impressoesGoogle > 0 && investimentoGoogle > 0) cpmGoogle = Number(((investimentoGoogle / impressoesGoogle) * 1000).toFixed(2));
            if (impressoesGoogle > 0 && cliquesGoogle > 0) ctrGoogle = `${((cliquesGoogle / impressoesGoogle) * 100).toFixed(2)}%`;
            if (conversoesGoogle > 0 && investimentoGoogle > 0) custoConversaoGoogle = Number((investimentoGoogle / conversoesGoogle).toFixed(2));
          }
          
          console.log(`   ✅ Google: R$${investimentoGoogle}, ${conversoesGoogle} conv`);
        }
      } catch (error) {
        console.error(`   ❌ Erro Google Ads:`, error.message);
      }
    }

    // Delay antes das coletas secundárias
    await delay(300);

    // === COLETAS SECUNDÁRIAS EM PARALELO ===
    console.log(`\n⏳ Coletando Instagram, Facebook e RD Station...`);
    
    const secondaryPromises: Promise<void>[] = [];

    // Instagram
    if (integrationMap.instagram) {
      secondaryPromises.push((async () => {
        try {
          const widgetsResponse = await fetchWithRetry(`${BASE_URL}/integrations/${integrationMap.instagram.id}/widgets`, { headers }, 10000, 3);
          if (widgetsResponse.ok) {
            const widgetsData = await widgetsResponse.json();
            const widgets = widgetsData.data || widgetsData || [];
            
            const targetWidgets = [
              findWidget(widgets, 'ig:followers_count', 'followers'),
              findWidget(widgets, 'ig:new_followers', 'gained'),
              findWidget(widgets, 'ig:reach', 'reach'),
            ].filter(Boolean);
            
            if (targetWidgets.length > 0) {
              const results = await fetchWidgetsBatch(
                integrationMap.instagram.id, targetWidgets, periodo.dataInicio, periodo.dataFim, headers, BASE_URL
              );
              
              for (const [refKey, data] of results) {
                const value = extractValueFromWidget(data);
                if (refKey.includes('followers_count') || refKey.includes('followers')) seguidoresInstagram = value;
                else if (refKey.includes('new_followers') || refKey.includes('gained')) novosSeguidoresInstagram = value;
                else if (refKey.includes('reach')) alcanceInstagram = value;
              }
            }
            console.log(`   ✅ Instagram: ${seguidoresInstagram} seg, alcance ${alcanceInstagram}`);
          }
        } catch (error) {
          console.error(`   ❌ Erro Instagram:`, error.message);
        }
      })());
    }

    // Facebook Page
    if (integrationMap.facebookPage) {
      secondaryPromises.push((async () => {
        try {
          const widgetsResponse = await fetchWithRetry(`${BASE_URL}/integrations/${integrationMap.facebookPage.id}/widgets`, { headers }, 10000, 3);
          if (widgetsResponse.ok) {
            const widgetsData = await widgetsResponse.json();
            const widgets = widgetsData.data || widgetsData || [];
            
            const messagesWidget = findWidget(widgets, 'fb:page_messages_new', 'messages_new', 'conversations');
            if (messagesWidget) {
              const results = await fetchWidgetsBatch(
                integrationMap.facebookPage.id, [messagesWidget], periodo.dataInicio, periodo.dataFim, headers, BASE_URL
              );
              for (const [, data] of results) {
                conversasFacebook = extractValueFromWidget(data);
              }
            }
            console.log(`   ✅ Facebook: ${conversasFacebook} mensagens`);
          }
        } catch (error) {
          console.error(`   ❌ Erro Facebook:`, error.message);
        }
      })());
    }

    // RD Station
    if (integrationMap.rdStation) {
      secondaryPromises.push((async () => {
        try {
          const widgetsResponse = await fetchWithRetry(`${BASE_URL}/integrations/${integrationMap.rdStation.id}/widgets`, { headers }, 10000, 3);
          if (widgetsResponse.ok) {
            const widgetsData = await widgetsResponse.json();
            const widgets = widgetsData.data || widgetsData || [];
            
            const targetWidgets = [
              findWidget(widgets, 'rd_crm:created_deals', 'opportunities', 'deals'),
              findWidget(widgets, 'rd_crm:won_deals', 'won', 'vendas'),
              findWidget(widgets, 'rd_crm:won_value', 'total_value', 'valor'),
              findWidget(widgets, 'rd_crm:deals_by_user', 'by_user', 'vendedor'),
            ].filter(Boolean);
            
            if (targetWidgets.length > 0) {
              const results = await fetchWidgetsBatch(
                integrationMap.rdStation.id, targetWidgets, periodo.dataInicio, periodo.dataFim, headers, BASE_URL
              );
              
              for (const [refKey, data] of results) {
                if (refKey.includes('created_deals') || refKey.includes('opportunities')) {
                  oportunidadesRD = extractValueFromWidget(data);
                } else if (refKey.includes('won_deals') || refKey.includes('won')) {
                  vendasRD = extractValueFromWidget(data);
                } else if (refKey.includes('won_value') || refKey.includes('total_value')) {
                  valorVendasRD = extractValueFromWidget(data);
                } else if (refKey.includes('by_user') || refKey.includes('deals_by_user')) {
                  if (data?.data && Array.isArray(data.data)) {
                    dadosVendedores = data.data.map((item: any) => ({
                      nome: (item.name || item.user || 'Desconhecido').replace('Juan', 'Jean Lucas'),
                      leads: extractNumber(item.value || item.count || item.deals)
                    })).filter((v: any) => v.leads > 0).sort((a: any, b: any) => b.leads - a.leads);
                  }
                }
              }
              
              if (oportunidadesRD > 0 && vendasRD > 0) {
                taxaConversaoRD = Number(((vendasRD / oportunidadesRD) * 100).toFixed(2));
              }
            }
            console.log(`   ✅ RD: ${oportunidadesRD} opp, ${vendasRD} vendas, R$${valorVendasRD}`);
          }
        } catch (error) {
          console.error(`   ❌ Erro RD Station:`, error.message);
        }
      })());
    }

    await Promise.all(secondaryPromises);


    // 8. CALCULAR KPIs FINAIS
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📊 RESUMO (${elapsedTime}s):`);
    console.log(`${'='.repeat(60)}`);
    
    const investimentoTotal = investimentoMeta + investimentoGoogle;
    const leadsTotais = leadsMeta + conversoesGoogle;
    const custoLeadMedio = leadsTotais > 0 ? Number((investimentoTotal / leadsTotais).toFixed(2)) : 0;
    const custoLeadMeta = leadsMeta > 0 ? Number((investimentoMeta / leadsMeta).toFixed(2)) : 0;
    const ticketMedio = vendasRD > 0 && valorVendasRD > 0 ? Number((valorVendasRD / vendasRD).toFixed(2)) : 0;

    console.log(`💰 Investimento: R$ ${investimentoTotal.toFixed(2)} (Meta: ${investimentoMeta}, Google: ${investimentoGoogle})`);
    console.log(`📈 Leads: ${leadsTotais} (Meta: ${leadsMeta}, Google: ${conversoesGoogle})`);
    console.log(`💵 CPL Médio: R$ ${custoLeadMedio}`);
    console.log(`🏢 RD: ${oportunidadesRD} opp, ${vendasRD} vendas, R$${valorVendasRD}`);
    console.log(`${'='.repeat(60)}\n`);

    if (investimentoTotal === 0 && leadsTotais === 0) {
      console.log(`⚠️ ATENÇÃO: Nenhum dado significativo coletado!`);
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
        valor_vendas: valorVendasRD,
        ticket_medio: ticketMedio
      },
      
      dados_vendedores: dadosVendedores,
      dados_categorias: dadosCategorias, // Estruturado para whatsapp/forms
      dados_urls: dadosUrls,
      dados_asset_groups: [],
      dados_analytics: {},
      conversas_mensagem: {
        facebook: conversasFacebook || conversasMeta,
        instagram: conversasInstagram
      },
      gerado_automaticamente: true
    };

    console.log(`\n💾 Salvando relatório...`);
    
    const { data: savedData, error: saveError } = await supabase
      .from('relatorios_semanais')
      .insert(relatorioProcessado)
      .select()
      .single();

    if (saveError) {
      console.error(`❌ Erro ao salvar:`, saveError);
      throw saveError;
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`✅ Relatório salvo! ID: ${savedData.id} (${totalTime}s total)`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Relatório gerado com sucesso',
      relatorio: {
        id: savedData.id,
        periodo: periodo.periodo
      },
      resumo: {
        investimento_total: investimentoTotal,
        leads_totais: leadsTotais,
        custo_lead_medio: custoLeadMedio,
        tempo_execucao: `${totalTime}s`
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.error(`❌ Erro geral (${totalTime}s):`, error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Erro ao gerar relatório. Tente novamente.',
      tempo_execucao: `${totalTime}s`
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
