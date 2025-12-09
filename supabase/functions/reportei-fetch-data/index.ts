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

// Função para buscar valor de um widget
const fetchWidgetValue = async (integrationId: string, widgetKey: string, dateStart: string, dateEnd: string, headers: any, baseUrl: string) => {
  try {
    console.log(`    🔄 Buscando valor do widget: ${widgetKey}`);
    
    const response = await fetch(
      `${baseUrl}/integrations/${integrationId}/widgets/value`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          start: dateStart,
          end: dateEnd,
          widgets: [widgetKey]
        })
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(`    ✅ Valor recebido:`, data.value || data);
      return data;
    } else {
      console.log(`    ⚠️ Widget ${widgetKey} retornou status ${response.status}`);
      const errorText = await response.text();
      console.log(`    ❌ Erro: ${errorText}`);
      return null;
    }
  } catch (error) {
    console.error(`    ❌ Erro ao buscar widget ${widgetKey}:`, error.message);
    return null;
  }
};

// Função auxiliar para extrair número de diferentes formatos
const extractNumber = (value: any): number => {
  if (value === null || value === undefined) return 0;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    // Remove caracteres não numéricos exceto ponto e vírgula
    const cleaned = value.replace(/[^\d.,\-]/g, '').replace(',', '.');
    return Number(cleaned) || 0;
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

    console.log(`🔄 Gerando relatório para período: ${periodo.periodo}`);
    console.log(`📅 Data início: ${periodo.dataInicio} | Data fim: ${periodo.dataFim}`);
    console.log(`🤖 Automático: ${auto || false}`);

    // Headers padrão para API do Reportei
    const headers = {
      'Authorization': `Bearer ${REPORTEI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // 1. BUSCAR INTEGRAÇÕES DO CLIENTE
    console.log('\n🔗 Buscando integrações do cliente...');
    const integrationsResponse = await fetch(`${BASE_URL}/clients/${CLIENT_ID}/integrations`, { headers });
    
    if (!integrationsResponse.ok) {
      throw new Error(`Erro ao buscar integrações: ${integrationsResponse.status}`);
    }

    const integrationsData = await integrationsResponse.json();
    const integrations = integrationsData.data || [];
    console.log(`✅ ${integrations.length} integrações encontradas`);

    // 2. MAPEAR INTEGRAÇÕES POR PLATAFORMA
    const integrationMap: any = {};
    
    for (const integration of integrations) {
      console.log(`\n🔍 Analisando integração:`, {
        id: integration.id,
        platform: integration.platform,
        name: integration.name,
        integration_name: integration.integration_name,
        source_name: integration.source_name
      });
      
      const platform = integration.platform?.toLowerCase() || '';
      const name = (integration.name || integration.integration_name || integration.source_name || '').toLowerCase();
      
      if (platform.includes('facebook') || platform.includes('meta') || name.includes('meta') || name.includes('facebook')) {
        integrationMap.meta = integration;
        console.log(`📱 Meta Ads encontrado: ID ${integration.id}`);
      } else if (platform.includes('google_ads') || name.includes('google ads')) {
        integrationMap.google = integration;
        console.log(`🔍 Google Ads encontrado: ID ${integration.id}`);
      } else if (platform.includes('instagram') || name.includes('instagram')) {
        integrationMap.instagram = integration;
        console.log(`📸 Instagram encontrado: ID ${integration.id}`);
      } else if (platform.includes('rd_station') || name.includes('rd station')) {
        integrationMap.rd = integration;
        console.log(`📊 RD Station encontrado: ID ${integration.id}`);
      }
    }

    // 3. BUSCAR DADOS DO META ADS (COMPLETO)
    console.log('\n📱 Buscando dados COMPLETOS do Meta Ads...');
    let leadsMeta = 0;
    let investimentoMeta = 0;
    let conversasMeta = 0;
    let alcanceMeta = 0;
    let impressoesMeta = 0;
    let cliquesMeta = 0;
    let cpmMeta = 0;
    let cpcMeta = 0;
    let ctrMeta = '0%';
    let frequenciaMeta = 0;
    let dadosCategorias: any[] = [];

    if (integrationMap.meta) {
      const metaId = integrationMap.meta.id;
      
      // Buscar widgets disponíveis
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${metaId}/widgets`, { headers });
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = Array.isArray(widgetsData) ? widgetsData : (widgetsData.data || []);
        console.log(`  📋 Total de widgets Meta Ads: ${widgets.length}`);
        
        // Log detalhado de todos os widgets disponíveis
        console.log(`  📋 LISTA COMPLETA DE WIDGETS META:`);
        widgets.forEach((w: any, i: number) => {
          console.log(`    [${i}] slug: "${w.slug}", name: "${w.name}", key: "${w.key}", ref_key: "${w.reference_key}"`);
        });
        
        // Buscar LEADS
        const leadsWidget = findWidget(widgets, 'lead', 'form', 'formulario', 'formulário', 'conversion');
        if (leadsWidget) {
          const widgetId = leadsWidget.reference_key || leadsWidget.slug || leadsWidget.key;
          console.log(`  🎯 Widget LEADS encontrado: ${widgetId}`);
          const leadsData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (leadsData?.value) {
            leadsMeta = extractNumber(leadsData.value);
            console.log(`  ✅ Leads: ${leadsMeta}`);
            
            // Se houver breakdown por categoria/campanha
            if (leadsData.breakdown && Array.isArray(leadsData.breakdown)) {
              dadosCategorias = leadsData.breakdown.map((item: any) => ({
                categoria: item.dimension || item.name || 'Outros',
                qtd: extractNumber(item.value),
                custo: 0 // será calculado depois individualmente
              }));
            }
          }
        } else {
          console.log(`  ⚠️ Widget LEADS não encontrado`);
        }
        
        // Buscar INVESTIMENTO (spend)
        const spendWidget = findWidget(widgets, 'spend', 'cost', 'gasto', 'investimento', 'valor');
        if (spendWidget) {
          const widgetId = spendWidget.reference_key || spendWidget.slug || spendWidget.key;
          console.log(`  🎯 Widget INVESTIMENTO encontrado: ${widgetId}`);
          const spendData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (spendData?.value) {
            investimentoMeta = extractNumber(spendData.value);
            console.log(`  ✅ Investimento: R$ ${investimentoMeta}`);
          }
        } else {
          console.log(`  ⚠️ Widget INVESTIMENTO não encontrado`);
        }
        
        // Buscar CONVERSAS INICIADAS
        const conversasWidget = findWidget(widgets, 'messaging', 'conversation', 'conversa', 'mensagem', 'message');
        if (conversasWidget) {
          const widgetId = conversasWidget.reference_key || conversasWidget.slug || conversasWidget.key;
          console.log(`  🎯 Widget CONVERSAS encontrado: ${widgetId}`);
          const conversasData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (conversasData?.value) {
            conversasMeta = extractNumber(conversasData.value);
            console.log(`  ✅ Conversas: ${conversasMeta}`);
          }
        } else {
          console.log(`  ⚠️ Widget CONVERSAS não encontrado`);
        }

        // Buscar ALCANCE (reach)
        const alcanceWidget = findWidget(widgets, 'reach', 'alcance', 'people_reached');
        if (alcanceWidget) {
          const widgetId = alcanceWidget.reference_key || alcanceWidget.slug || alcanceWidget.key;
          console.log(`  🎯 Widget ALCANCE encontrado: ${widgetId}`);
          const alcanceData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (alcanceData?.value) {
            alcanceMeta = extractNumber(alcanceData.value);
            console.log(`  ✅ Alcance: ${alcanceMeta}`);
          }
        } else {
          console.log(`  ⚠️ Widget ALCANCE não encontrado`);
        }

        // Buscar IMPRESSÕES
        const impressoesWidget = findWidget(widgets, 'impression', 'impressao', 'impressão', 'impressoes', 'impressões');
        if (impressoesWidget) {
          const widgetId = impressoesWidget.reference_key || impressoesWidget.slug || impressoesWidget.key;
          console.log(`  🎯 Widget IMPRESSÕES encontrado: ${widgetId}`);
          const impressoesData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (impressoesData?.value) {
            impressoesMeta = extractNumber(impressoesData.value);
            console.log(`  ✅ Impressões: ${impressoesMeta}`);
          }
        } else {
          console.log(`  ⚠️ Widget IMPRESSÕES não encontrado`);
        }

        // Buscar CLIQUES
        const cliquesWidget = findWidget(widgets, 'click', 'clique', 'clicks', 'link_click');
        if (cliquesWidget) {
          const widgetId = cliquesWidget.reference_key || cliquesWidget.slug || cliquesWidget.key;
          console.log(`  🎯 Widget CLIQUES encontrado: ${widgetId}`);
          const cliquesData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (cliquesData?.value) {
            cliquesMeta = extractNumber(cliquesData.value);
            console.log(`  ✅ Cliques: ${cliquesMeta}`);
          }
        } else {
          console.log(`  ⚠️ Widget CLIQUES não encontrado`);
        }

        // Buscar CPM
        const cpmWidget = findWidget(widgets, 'cpm', 'cost_per_mille', 'custo_por_mil');
        if (cpmWidget) {
          const widgetId = cpmWidget.reference_key || cpmWidget.slug || cpmWidget.key;
          console.log(`  🎯 Widget CPM encontrado: ${widgetId}`);
          const cpmData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (cpmData?.value) {
            cpmMeta = extractNumber(cpmData.value);
            console.log(`  ✅ CPM: R$ ${cpmMeta}`);
          }
        } else {
          // Calcular CPM se não encontrar widget
          if (impressoesMeta > 0 && investimentoMeta > 0) {
            cpmMeta = Number(((investimentoMeta / impressoesMeta) * 1000).toFixed(2));
            console.log(`  📊 CPM calculado: R$ ${cpmMeta}`);
          }
        }

        // Buscar CPC
        const cpcWidget = findWidget(widgets, 'cpc', 'cost_per_click', 'custo_por_clique', 'cost_per_link_click');
        if (cpcWidget) {
          const widgetId = cpcWidget.reference_key || cpcWidget.slug || cpcWidget.key;
          console.log(`  🎯 Widget CPC encontrado: ${widgetId}`);
          const cpcData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (cpcData?.value) {
            cpcMeta = extractNumber(cpcData.value);
            console.log(`  ✅ CPC: R$ ${cpcMeta}`);
          }
        } else {
          // Calcular CPC se não encontrar widget
          if (cliquesMeta > 0 && investimentoMeta > 0) {
            cpcMeta = Number((investimentoMeta / cliquesMeta).toFixed(2));
            console.log(`  📊 CPC calculado: R$ ${cpcMeta}`);
          }
        }

        // Buscar CTR
        const ctrWidget = findWidget(widgets, 'ctr', 'click_through_rate', 'taxa_clique');
        if (ctrWidget) {
          const widgetId = ctrWidget.reference_key || ctrWidget.slug || ctrWidget.key;
          console.log(`  🎯 Widget CTR encontrado: ${widgetId}`);
          const ctrData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (ctrData?.value) {
            ctrMeta = extractPercentage(ctrData.value);
            console.log(`  ✅ CTR: ${ctrMeta}`);
          }
        } else {
          // Calcular CTR se não encontrar widget
          if (impressoesMeta > 0 && cliquesMeta > 0) {
            const ctrValue = (cliquesMeta / impressoesMeta) * 100;
            ctrMeta = `${ctrValue.toFixed(2)}%`;
            console.log(`  📊 CTR calculado: ${ctrMeta}`);
          }
        }

        // Buscar FREQUÊNCIA
        const frequenciaWidget = findWidget(widgets, 'frequency', 'frequencia', 'frequência', 'freq');
        if (frequenciaWidget) {
          const widgetId = frequenciaWidget.reference_key || frequenciaWidget.slug || frequenciaWidget.key;
          console.log(`  🎯 Widget FREQUÊNCIA encontrado: ${widgetId}`);
          const frequenciaData = await fetchWidgetValue(metaId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (frequenciaData?.value) {
            frequenciaMeta = extractNumber(frequenciaData.value);
            console.log(`  ✅ Frequência: ${frequenciaMeta}`);
          }
        } else {
          // Calcular frequência se não encontrar widget
          if (alcanceMeta > 0 && impressoesMeta > 0) {
            frequenciaMeta = Number((impressoesMeta / alcanceMeta).toFixed(2));
            console.log(`  📊 Frequência calculada: ${frequenciaMeta}`);
          }
        }
      }
    }

    // 4. BUSCAR DADOS DO GOOGLE ADS (COMPLETO)
    console.log('\n🔍 Buscando dados COMPLETOS do Google Ads...');
    let cliquesGoogle = 0;
    let investimentoGoogle = 0;
    let impressoesGoogle = 0;
    let conversoesGoogle = 0;
    let cpcGoogle = 0;
    let cpmGoogle = 0;
    let ctrGoogle = '0%';
    let custoConversaoGoogle = 0;
    let dadosUrls: any[] = [];

    if (integrationMap.google) {
      const googleId = integrationMap.google.id;
      
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${googleId}/widgets`, { headers });
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = Array.isArray(widgetsData) ? widgetsData : (widgetsData.data || []);
        console.log(`  📋 Total de widgets Google Ads: ${widgets.length}`);
        
        // Log detalhado de todos os widgets disponíveis
        console.log(`  📋 LISTA COMPLETA DE WIDGETS GOOGLE:`);
        widgets.forEach((w: any, i: number) => {
          console.log(`    [${i}] slug: "${w.slug}", name: "${w.name}", key: "${w.key}", ref_key: "${w.reference_key}"`);
        });
        
        // Buscar CLIQUES
        const clicksWidget = findWidget(widgets, 'click', 'clique', 'clicks');
        if (clicksWidget) {
          const widgetId = clicksWidget.reference_key || clicksWidget.slug || clicksWidget.key;
          console.log(`  🎯 Widget CLIQUES encontrado: ${widgetId}`);
          const clicksData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (clicksData?.value) {
            cliquesGoogle = extractNumber(clicksData.value);
            console.log(`  ✅ Cliques: ${cliquesGoogle}`);
          }
        } else {
          console.log(`  ⚠️ Widget CLIQUES não encontrado`);
        }
        
        // Buscar INVESTIMENTO
        const spendWidget = findWidget(widgets, 'cost', 'spend', 'gasto', 'investimento', 'custo');
        if (spendWidget) {
          const widgetId = spendWidget.reference_key || spendWidget.slug || spendWidget.key;
          console.log(`  🎯 Widget INVESTIMENTO encontrado: ${widgetId}`);
          const spendData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (spendData?.value) {
            investimentoGoogle = extractNumber(spendData.value);
            console.log(`  ✅ Investimento: R$ ${investimentoGoogle}`);
          }
        } else {
          console.log(`  ⚠️ Widget INVESTIMENTO não encontrado`);
        }
        
        // Buscar IMPRESSÕES
        const impressionsWidget = findWidget(widgets, 'impression', 'impressao', 'impressão', 'impressoes', 'impressões');
        if (impressionsWidget) {
          const widgetId = impressionsWidget.reference_key || impressionsWidget.slug || impressionsWidget.key;
          console.log(`  🎯 Widget IMPRESSÕES encontrado: ${widgetId}`);
          const impressionsData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (impressionsData?.value) {
            impressoesGoogle = extractNumber(impressionsData.value);
            console.log(`  ✅ Impressões: ${impressoesGoogle}`);
          }
        } else {
          console.log(`  ⚠️ Widget IMPRESSÕES não encontrado`);
        }
        
        // Buscar CONVERSÕES
        const conversionsWidget = findWidget(widgets, 'conversion', 'conversao', 'conversão', 'conversoes', 'conversões');
        if (conversionsWidget) {
          const widgetId = conversionsWidget.reference_key || conversionsWidget.slug || conversionsWidget.key;
          console.log(`  🎯 Widget CONVERSÕES encontrado: ${widgetId}`);
          const conversionsData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (conversionsData?.value) {
            conversoesGoogle = extractNumber(conversionsData.value);
            console.log(`  ✅ Conversões: ${conversoesGoogle}`);
          }
        } else {
          console.log(`  ⚠️ Widget CONVERSÕES não encontrado`);
        }

        // Buscar CPC
        const cpcWidget = findWidget(widgets, 'cpc', 'cost_per_click', 'avg_cpc', 'custo_por_clique');
        if (cpcWidget) {
          const widgetId = cpcWidget.reference_key || cpcWidget.slug || cpcWidget.key;
          console.log(`  🎯 Widget CPC encontrado: ${widgetId}`);
          const cpcData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (cpcData?.value) {
            cpcGoogle = extractNumber(cpcData.value);
            console.log(`  ✅ CPC: R$ ${cpcGoogle}`);
          }
        } else {
          // Calcular CPC
          if (cliquesGoogle > 0 && investimentoGoogle > 0) {
            cpcGoogle = Number((investimentoGoogle / cliquesGoogle).toFixed(2));
            console.log(`  📊 CPC calculado: R$ ${cpcGoogle}`);
          }
        }

        // Buscar CPM
        const cpmWidget = findWidget(widgets, 'cpm', 'cost_per_mille', 'custo_por_mil');
        if (cpmWidget) {
          const widgetId = cpmWidget.reference_key || cpmWidget.slug || cpmWidget.key;
          console.log(`  🎯 Widget CPM encontrado: ${widgetId}`);
          const cpmData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (cpmData?.value) {
            cpmGoogle = extractNumber(cpmData.value);
            console.log(`  ✅ CPM: R$ ${cpmGoogle}`);
          }
        } else {
          // Calcular CPM
          if (impressoesGoogle > 0 && investimentoGoogle > 0) {
            cpmGoogle = Number(((investimentoGoogle / impressoesGoogle) * 1000).toFixed(2));
            console.log(`  📊 CPM calculado: R$ ${cpmGoogle}`);
          }
        }

        // Buscar CTR
        const ctrWidget = findWidget(widgets, 'ctr', 'click_through_rate', 'taxa_clique');
        if (ctrWidget) {
          const widgetId = ctrWidget.reference_key || ctrWidget.slug || ctrWidget.key;
          console.log(`  🎯 Widget CTR encontrado: ${widgetId}`);
          const ctrData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (ctrData?.value) {
            ctrGoogle = extractPercentage(ctrData.value);
            console.log(`  ✅ CTR: ${ctrGoogle}`);
          }
        } else {
          // Calcular CTR
          if (impressoesGoogle > 0 && cliquesGoogle > 0) {
            const ctrValue = (cliquesGoogle / impressoesGoogle) * 100;
            ctrGoogle = `${ctrValue.toFixed(2)}%`;
            console.log(`  📊 CTR calculado: ${ctrGoogle}`);
          }
        }

        // Buscar CUSTO POR CONVERSÃO
        const costConvWidget = findWidget(widgets, 'cost_per_conversion', 'cost_conversion', 'custo_conversao', 'custo_por_conversao');
        if (costConvWidget) {
          const widgetId = costConvWidget.reference_key || costConvWidget.slug || costConvWidget.key;
          console.log(`  🎯 Widget CUSTO/CONVERSÃO encontrado: ${widgetId}`);
          const costConvData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (costConvData?.value) {
            custoConversaoGoogle = extractNumber(costConvData.value);
            console.log(`  ✅ Custo/Conversão: R$ ${custoConversaoGoogle}`);
          }
        } else {
          // Calcular custo por conversão
          if (conversoesGoogle > 0 && investimentoGoogle > 0) {
            custoConversaoGoogle = Number((investimentoGoogle / conversoesGoogle).toFixed(2));
            console.log(`  📊 Custo/Conversão calculado: R$ ${custoConversaoGoogle}`);
          }
        }
        
        // Buscar URLs de destino (se disponível)
        const urlsWidget = findWidget(widgets, 'final_url', 'landing', 'url', 'destination', 'destino');
        if (urlsWidget) {
          const widgetId = urlsWidget.reference_key || urlsWidget.slug || urlsWidget.key;
          console.log(`  🎯 Widget URLs encontrado: ${widgetId}`);
          const urlsData = await fetchWidgetValue(googleId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (urlsData?.breakdown && Array.isArray(urlsData.breakdown)) {
            dadosUrls = urlsData.breakdown
              .map((item: any) => ({
                url: item.dimension || item.url || 'N/A',
                cliques: extractNumber(item.clicks || item.cliques),
                gasto: extractNumber(item.cost || item.gasto || item.spend),
                impressoes: extractNumber(item.impressions || item.impressoes),
                conversoes: extractNumber(item.conversions || item.conversoes),
                ctr: extractPercentage(item.ctr),
                cpc: extractNumber(item.cpc)
              }))
              .sort((a: any, b: any) => b.cliques - a.cliques)
              .slice(0, 5);
            console.log(`  ✅ URLs: ${dadosUrls.length} encontradas`);
          }
        }
      }
    }

    // 5. BUSCAR DADOS DO INSTAGRAM
    console.log('\n📸 Buscando dados do Instagram...');
    let conversasInstagram = 0;
    let seguidoresInstagram = 0;
    let novosSeguidoresInstagram = 0;

    if (integrationMap.instagram) {
      const instagramId = integrationMap.instagram.id;
      
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${instagramId}/widgets`, { headers });
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = Array.isArray(widgetsData) ? widgetsData : (widgetsData.data || []);
        console.log(`  📋 Total de widgets Instagram: ${widgets.length}`);
        
        // Log detalhado
        console.log(`  📋 LISTA COMPLETA DE WIDGETS INSTAGRAM:`);
        widgets.forEach((w: any, i: number) => {
          console.log(`    [${i}] slug: "${w.slug}", name: "${w.name}", key: "${w.key}", ref_key: "${w.reference_key}"`);
        });
        
        // Buscar CONVERSAS
        const conversasWidget = findWidget(widgets, 'messaging', 'conversation', 'conversa', 'mensagem', 'message', 'dm');
        if (conversasWidget) {
          const widgetId = conversasWidget.reference_key || conversasWidget.slug || conversasWidget.key;
          console.log(`  🎯 Widget CONVERSAS encontrado: ${widgetId}`);
          const conversasData = await fetchWidgetValue(instagramId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (conversasData?.value) {
            conversasInstagram = extractNumber(conversasData.value);
            console.log(`  ✅ Conversas: ${conversasInstagram}`);
          }
        } else {
          console.log(`  ⚠️ Widget CONVERSAS não encontrado`);
        }

        // Buscar SEGUIDORES
        const seguidoresWidget = findWidget(widgets, 'follower', 'seguidor', 'seguidores', 'followers');
        if (seguidoresWidget) {
          const widgetId = seguidoresWidget.reference_key || seguidoresWidget.slug || seguidoresWidget.key;
          console.log(`  🎯 Widget SEGUIDORES encontrado: ${widgetId}`);
          const seguidoresData = await fetchWidgetValue(instagramId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (seguidoresData?.value) {
            seguidoresInstagram = extractNumber(seguidoresData.value);
            console.log(`  ✅ Seguidores: ${seguidoresInstagram}`);
          }
        }

        // Buscar NOVOS SEGUIDORES
        const novosSeguidoresWidget = findWidget(widgets, 'new_follower', 'novo_seguidor', 'novos_seguidores', 'gained');
        if (novosSeguidoresWidget) {
          const widgetId = novosSeguidoresWidget.reference_key || novosSeguidoresWidget.slug || novosSeguidoresWidget.key;
          console.log(`  🎯 Widget NOVOS SEGUIDORES encontrado: ${widgetId}`);
          const novosData = await fetchWidgetValue(instagramId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (novosData?.value) {
            novosSeguidoresInstagram = extractNumber(novosData.value);
            console.log(`  ✅ Novos Seguidores: ${novosSeguidoresInstagram}`);
          }
        }
      }
    }

    // 6. BUSCAR DADOS DO RD STATION
    console.log('\n📊 Buscando dados do RD Station...');
    let dadosVendedores: any[] = [];
    let oportunidadesRD = 0;
    let vendasRD = 0;
    let taxaConversaoRD = '0%';

    if (integrationMap.rd) {
      const rdId = integrationMap.rd.id;
      
      const widgetsResponse = await fetch(`${BASE_URL}/integrations/${rdId}/widgets`, { headers });
      if (widgetsResponse.ok) {
        const widgetsData = await widgetsResponse.json();
        const widgets = Array.isArray(widgetsData) ? widgetsData : (widgetsData.data || []);
        console.log(`  📋 Total de widgets RD Station: ${widgets.length}`);
        
        // Log detalhado
        console.log(`  📋 LISTA COMPLETA DE WIDGETS RD STATION:`);
        widgets.forEach((w: any, i: number) => {
          console.log(`    [${i}] slug: "${w.slug}", name: "${w.name}", key: "${w.key}", ref_key: "${w.reference_key}"`);
        });
        
        // Buscar VENDEDORES/RESPONSÁVEIS
        const vendedoresWidget = findWidget(widgets, 'owner', 'user', 'vendedor', 'responsavel', 'responsável', 'seller');
        if (vendedoresWidget) {
          const widgetId = vendedoresWidget.reference_key || vendedoresWidget.slug || vendedoresWidget.key;
          console.log(`  🎯 Widget VENDEDORES encontrado: ${widgetId}`);
          const vendedoresData = await fetchWidgetValue(rdId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (vendedoresData?.breakdown && Array.isArray(vendedoresData.breakdown)) {
            dadosVendedores = vendedoresData.breakdown
              .map((item: any) => ({
                nome: (item.dimension || item.name || 'Sem nome').replace('Juan', 'Jean Lucas'), // Correção nome
                leads: extractNumber(item.value)
              }))
              .sort((a: any, b: any) => b.leads - a.leads);
            console.log(`  ✅ Vendedores: ${dadosVendedores.length}`);
          }
        } else {
          console.log(`  ⚠️ Widget VENDEDORES não encontrado`);
        }

        // Buscar OPORTUNIDADES
        const opWidget = findWidget(widgets, 'opportunity', 'oportunidade', 'oportunidades', 'deal');
        if (opWidget) {
          const widgetId = opWidget.reference_key || opWidget.slug || opWidget.key;
          console.log(`  🎯 Widget OPORTUNIDADES encontrado: ${widgetId}`);
          const opData = await fetchWidgetValue(rdId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (opData?.value) {
            oportunidadesRD = extractNumber(opData.value);
            console.log(`  ✅ Oportunidades: ${oportunidadesRD}`);
          }
        }

        // Buscar VENDAS
        const vendasWidget = findWidget(widgets, 'sale', 'venda', 'vendas', 'won', 'ganho');
        if (vendasWidget) {
          const widgetId = vendasWidget.reference_key || vendasWidget.slug || vendasWidget.key;
          console.log(`  🎯 Widget VENDAS encontrado: ${widgetId}`);
          const vendasData = await fetchWidgetValue(rdId, widgetId, periodo.dataInicio, periodo.dataFim, headers, BASE_URL);
          if (vendasData?.value) {
            vendasRD = extractNumber(vendasData.value);
            console.log(`  ✅ Vendas: ${vendasRD}`);
          }
        }

        // Calcular taxa de conversão
        if (oportunidadesRD > 0 && vendasRD > 0) {
          const taxa = (vendasRD / oportunidadesRD) * 100;
          taxaConversaoRD = `${taxa.toFixed(1)}%`;
        }
      }
    }

    // 7. CALCULAR KPIs FINAIS
    console.log('\n🧮 Calculando KPIs...');
    
    const investimentoTotal = investimentoGoogle + investimentoMeta;
    const leadsTotais = leadsMeta;
    const custoLeadMedio = leadsTotais > 0 ? Number((investimentoTotal / leadsTotais).toFixed(2)) : 0;
    const custoLeadMeta = leadsMeta > 0 ? Number((investimentoMeta / leadsMeta).toFixed(2)) : 0;

    // Manter categorias vazias se não encontrou via API (permite preenchimento manual)
    if (dadosCategorias.length === 0) {
      console.log('  ⚠️ Sem dados de categorias via API - mantendo vazio para preenchimento manual');
    }

    console.log('\n📊 RESUMO DOS DADOS COLETADOS:');
    console.log('━'.repeat(60));
    console.log(`META ADS:`);
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
    console.log(`  - Cliques: ${cliquesGoogle}`);
    console.log(`  - Investimento: R$ ${investimentoGoogle}`);
    console.log(`  - Impressões: ${impressoesGoogle}`);
    console.log(`  - Conversões: ${conversoesGoogle}`);
    console.log(`  - CPC: R$ ${cpcGoogle}`);
    console.log(`  - CPM: R$ ${cpmGoogle}`);
    console.log(`  - CTR: ${ctrGoogle}`);
    console.log(`  - Custo/Conversão: R$ ${custoConversaoGoogle}`);
    console.log(`\nINSTAGRAM:`);
    console.log(`  - Conversas: ${conversasInstagram}`);
    console.log(`  - Seguidores: ${seguidoresInstagram}`);
    console.log(`  - Novos Seguidores: ${novosSeguidoresInstagram}`);
    console.log(`\nRD STATION:`);
    console.log(`  - Vendedores: ${dadosVendedores.length}`);
    console.log(`  - Oportunidades: ${oportunidadesRD}`);
    console.log(`  - Vendas: ${vendasRD}`);
    console.log(`  - Taxa Conversão: ${taxaConversaoRD}`);
    console.log('━'.repeat(60));
    console.log(`💰 Investimento Total: R$ ${investimentoTotal.toFixed(2)}`);
    console.log(`📈 Leads Totais: ${leadsTotais}`);
    console.log(`💵 CPL Médio: R$ ${custoLeadMedio}`);
    
    if (leadsTotais === 0 && investimentoTotal === 0) {
      console.log('⚠️ ATENÇÃO: Nenhum dado significativo coletado! Verifique widgets disponíveis.');
    }

    // 8. ESTRUTURAR DADOS PARA O BANCO
    const relatorioProcessado = {
      periodo: periodo.periodo,
      data_inicio: periodo.dataInicio,
      data_fim: periodo.dataFim,
      investimento_total: investimentoTotal,
      leads_totais: leadsTotais,
      custo_lead_medio: custoLeadMedio,
      
      dados_google: {
        cliques: cliquesGoogle,
        investimento: investimentoGoogle,
        custo_clique: cpcGoogle,
        impressoes: impressoesGoogle,
        conversoes: conversoesGoogle,
        leads: conversoesGoogle,
        cpm: cpmGoogle,
        ctr: ctrGoogle,
        custo_conversao: custoConversaoGoogle
      },
      
      dados_meta: {
        conversas: conversasMeta,
        investimento: investimentoMeta,
        custo_lead: custoLeadMeta,
        leads: leadsMeta,
        alcance: alcanceMeta,
        impressoes: impressoesMeta,
        cliques: cliquesMeta,
        cpm: cpmMeta,
        cpc: cpcMeta,
        ctr: ctrMeta,
        frequencia: frequenciaMeta
      },
      
      dados_instagram: {
        conversas: conversasInstagram,
        seguidores: seguidoresInstagram,
        novos_seguidores: novosSeguidoresInstagram
      },
      
      conversas_mensagem: {
        facebook: conversasMeta,
        instagram: conversasInstagram
      },
      
      dados_vendedores: dadosVendedores.length > 0 ? dadosVendedores : null,
      
      dados_categorias: dadosCategorias.length > 0 ? dadosCategorias : null,
      
      dados_urls: dadosUrls.length > 0 ? dadosUrls : null,
      
      dados_rd_station: {
        oportunidades: oportunidadesRD,
        vendas: vendasRD,
        taxa_conversao: taxaConversaoRD
      },
      
      gerado_automaticamente: auto || false
    };

    // 9. SALVAR NO BANCO
    console.log('\n💾 Salvando relatório no banco...');
    
    const { data: relatorioSalvo, error: erroSalvar } = await supabase
      .from('relatorios_semanais')
      .insert(relatorioProcessado)
      .select()
      .single();

    if (erroSalvar) {
      console.error('❌ Erro ao salvar:', erroSalvar);
      throw new Error(`Erro ao salvar no banco: ${erroSalvar.message}`);
    }

    console.log('✅ Relatório salvo com sucesso!');
    console.log(`📊 ID: ${relatorioSalvo.id}`);

    return new Response(
      JSON.stringify({
        success: true,
        relatorio: relatorioSalvo,
        reportId: relatorioSalvo.id,
        message: `Relatório gerado com sucesso para o período ${periodo.periodo}`,
        metricas_coletadas: {
          meta: { leads: leadsMeta, investimento: investimentoMeta, alcance: alcanceMeta, impressoes: impressoesMeta, cpm: cpmMeta, cpc: cpcMeta, ctr: ctrMeta },
          google: { cliques: cliquesGoogle, investimento: investimentoGoogle, impressoes: impressoesGoogle, conversoes: conversoesGoogle, cpm: cpmGoogle, ctr: ctrGoogle },
          instagram: { conversas: conversasInstagram, seguidores: seguidoresInstagram },
          rd_station: { vendedores: dadosVendedores.length, oportunidades: oportunidadesRD, vendas: vendasRD }
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

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
