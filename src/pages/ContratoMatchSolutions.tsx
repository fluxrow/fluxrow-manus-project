import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ContratoData {
  id: string;
  nome_contratante: string;
  cpf_contratante: string;
  cnpj_contratante: string;
  nome_contratada: string;
  cpf_contratada: string;
  status: string;
  data_assinatura: string;
  assinatura_nome_responsavel: string | null;
  assinatura_cpf_responsavel: string | null;
  assinatura_cargo_responsavel: string | null;
  created_at: string;
}

const ContratoMatchSolutions = () => {
  const [contrato, setContrato] = useState<ContratoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarContrato();
  }, []);

  const carregarContrato = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('validar-contrato', {
        body: { cnpj: '34.325.200/0001-36' } // CNPJ da Match Solutions (contratante)
      });

      if (error) throw error;
      if (data.contrato) {
        setContrato(data.contrato);
      }
    } catch (error) {
      console.error('Erro ao carregar contrato:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatarCNPJ = (cnpj: string) => {
    if (!cnpj) return '';
    const numeros = cnpj.replace(/\D/g, '');
    return numeros
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 18);
  };

  const formatarCPF = (cpf: string) => {
    if (!cpf) return '';
    const numeros = cpf.replace(/\D/g, '');
    return numeros
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1-$2')
      .substring(0, 14);
  };

  const formatarDataExtenso = (data: string) => {
    if (!data) return '';
    try {
      return format(new Date(data), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    } catch {
      return '';
    }
  };

  const formatarDataHora = (data: string) => {
    if (!data) return '';
    try {
      return format(new Date(data), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    } catch {
      return '';
    }
  };


  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Contrato de Prestação de Serviços</h1>
              <p className="text-muted-foreground text-lg">Sistema de Qualificação para Vendas com IA</p>
            </div>
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Baixar PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Cabeçalho do Contrato */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <div className="text-center mb-8">
            <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              CONTRATO DE PRESTAÇÃO DE SERVIÇOS
            </h2>
            <p className="text-xl font-semibold text-primary">
              Sistema Completo de Qualificação para Vendas com IA
            </p>
          </div>

          {/* Partes */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-2">CONTRATANTE:</h3>
              <p className="text-muted-foreground">
                <strong>Match Solutions Fios e Cabos Elétricos LTDA</strong><br />
                CNPJ: 34.325.200/0001-36<br />
                Endereço: Rua Inacio de Loyola 317, Vila Primavera, São Paulo SP, CEP: 03389-080<br />
                E-mail: thiagogea@matchsolutions.com.br<br />
                Telefone: (11) 96405-6383
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-foreground mb-2">CONTRATADA:</h3>
              <p className="text-muted-foreground">
                <strong>Fluxrow Inteligência Criativa</strong><br />
                CNPJ: 61.260.831/0001-97<br />
                Endereço: Curitiba/PR<br />
                E-mail: contato@fluxrow.com<br />
                Telefone: (41) 99236-1868<br />
                Chave PIX CNPJ: 61.260.831/0001-97
              </p>
            </div>
          </div>
        </div>

        {/* Cláusula 1: Objeto do Contrato */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA PRIMEIRA – DO OBJETO
          </h3>
          <p className="text-muted-foreground mb-4">
            O presente contrato tem por objeto a prestação de serviços de <strong>Sistema Completo de Qualificação para Vendas com Inteligência Artificial</strong>, compreendendo:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• <strong>SDR IA (Sales Development Representative IA):</strong> Agente de IA para qualificação inicial de leads via WhatsApp</li>
            <li>• <strong>Automação de Follow-up Inteligente:</strong> Sistema automatizado de nutrição e qualificação de leads</li>
            <li>• <strong>Integração com Sistema Promotheus:</strong> Sincronização com CRM atual da CONTRATANTE</li>
            <li>• <strong>Dashboard de Resultados:</strong> Relatórios através da ferramenta Fluxrow para análise de conversão</li>
            <li>• <strong>Transferência Qualificada:</strong> Encaminhamento de leads qualificados para equipe de vendas humana</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Importante:</strong> O sistema tem como objetivo <strong>qualificar leads para vendas</strong>, não realizar vendas automaticamente. A conversão final permanece sob responsabilidade da equipe de vendas da CONTRATANTE.
          </p>
        </div>

        {/* Cláusula 2: Prazo */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SEGUNDA – DO PRAZO
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>2.1.</strong> Prazo de vigência: <strong>3 (três) meses</strong>, iniciando-se na data de assinatura deste contrato.</p>
            <p><strong>2.2.</strong> Prazo de implementação: <strong>3 a 4 semanas</strong> para entrega completa do sistema.</p>
            <p><strong>2.3.</strong> Renovação: Automática por períodos iguais e sucessivos, salvo manifestação contrária de qualquer das partes com antecedência mínima de 30 dias do término da vigência.</p>
          </div>
        </div>

        {/* Cláusula 3: Valor e Condições de Pagamento */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA TERCEIRA – DO VALOR E CONDIÇÕES DE PAGAMENTO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="text-lg font-bold text-foreground mb-2">Valor Mensal: R$ 2.500,00</p>
              <p className="text-sm">Contrato trimestral (3 meses) = R$ 7.500,00</p>
            </div>
            
            <p><strong>3.1. PRIMEIRO PAGAMENTO (Na assinatura):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Valor: R$ 2.500,00</li>
              <li>• Forma: PIX</li>
              <li>• Chave PIX (CNPJ): <strong>61.260.831/0001-97</strong></li>
              <li>• Momento: Junto com a assinatura do contrato</li>
            </ul>

            <p><strong>3.2. PAGAMENTOS MENSAIS SUBSEQUENTES:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Forma: <strong>Boleto Bancário</strong></li>
              <li>• Envio: Para o e-mail <strong>thiagogea@matchsolutions.com.br</strong></li>
              <li>• Vencimento: Todo dia <strong>30 de cada mês</strong></li>
              <li>• Primeiro boleto: 30/10/2025</li>
              <li>• Segundo boleto: 30/11/2025</li>
            </ul>

            <p><strong>3.3. MULTA POR ATRASO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• 2% sobre o valor da parcela</li>
              <li>• Juros de 1% ao mês</li>
              <li>• Correção monetária pelo IGPM</li>
            </ul>

            <p><strong>3.4. TAXA DE IMPLEMENTAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>ISENTA</strong> – Sem cobrança de taxa de setup</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 4: Comissões sobre Vendas */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA QUARTA – DAS COMISSÕES SOBRE VENDAS QUALIFICADAS
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>4.1. PERCENTUAL DE COMISSÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>0,20%</strong> (dois décimos por cento) sobre o valor bruto das vendas efetivadas</li>
              <li>• Incidência apenas sobre vendas comprovadamente originadas de leads qualificados pela IA</li>
            </ul>

            <p><strong>4.2. CRITÉRIOS DE ELEGIBILIDADE PARA COMISSÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Lead deve ter sido qualificado pela agente IA da CONTRATADA</li>
              <li>• Transferência documentada do lead qualificado para equipe de vendas humana</li>
              <li>• Venda efetivada em até <strong>90 dias</strong> após o primeiro contato da IA</li>
              <li>• Pagamento confirmado pelo cliente final</li>
              <li>• Rastreabilidade completa desde qualificação até fechamento</li>
            </ul>

            <p><strong>4.3. SISTEMA DUPLO DE CONTROLE E AUDITORIA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>Relatório Promotheus:</strong> Sistema oficial da CONTRATANTE para registro de vendas</li>
              <li>• <strong>Relatório Fluxrow:</strong> Ferramenta da CONTRATADA para tracking de leads e conversões</li>
              <li>• Ambos os relatórios devem ser apresentados mensalmente para comparação e validação</li>
            </ul>

            <p><strong>4.4. PROCESSO DE PAGAMENTO DAS COMISSÕES:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Prazo: <strong>Junto com o pagamento da mensalidade</strong> (todo dia 30)</li>
              <li>• Condição: Mediante apresentação e concordância entre os relatórios de ambos os sistemas</li>
              <li>• Relatórios mensais obrigatórios até o dia <strong>25 de cada mês</strong></li>
              <li>• Em caso de divergência, será considerado o menor valor entre os dois relatórios até esclarecimento</li>
            </ul>

            <p><strong>4.5. TRANSPARÊNCIA E AUDITORIA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Acesso mútuo aos dados de conversão durante vigência do contrato</li>
              <li>• Direito de questionamento e esclarecimento em até 5 dias úteis</li>
              <li>• Em caso de discrepância superior a 10%, auditoria conjunta obrigatória</li>
              <li>• Documentação discriminada: data, valor, cliente, origem do lead</li>
            </ul>

            <p><strong>4.6. PROTEÇÃO PARA AMBAS AS PARTES:</strong></p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <p><strong>Para a CONTRATANTE (Match Solutions):</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Pagamento apenas de vendas comprovadamente geradas pela IA</li>
                <li>• Dupla validação impede cobrança indevida</li>
                <li>• Prazo de 90 dias evita comissões sobre vendas antigas</li>
                <li>• Controle total via sistema Promotheus</li>
              </ul>
              <p className="mt-3"><strong>Para a CONTRATADA (Fluxrow):</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Impossibilidade de sonegação de vendas geradas pela IA</li>
                <li>• Relatório próprio como backup de controle</li>
                <li>• Pagamento garantido junto com mensalidade</li>
                <li>• Critérios claros de elegibilidade</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cláusula 5: Escopo Técnico */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA QUINTA – DO ESCOPO TÉCNICO DETALHADO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>5.1. FASE 1 – ANÁLISE E PLANEJAMENTO (Semana 1):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Mapeamento do perfil de cliente ideal (ICP)</li>
              <li>• Análise do funil de vendas atual</li>
              <li>• Definição de critérios de qualificação de leads</li>
              <li>• Criação de scripts de qualificação personalizados</li>
            </ul>

            <p><strong>5.2. FASE 2 – IMPLEMENTAÇÃO SDR IA (Semana 2):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Configuração do agente IA para WhatsApp</li>
              <li>• Treinamento da IA com informações da empresa</li>
              <li>• Integração com base de contatos</li>
              <li>• Testes de conversação e ajustes</li>
            </ul>

            <p><strong>5.3. FASE 3 – INTEGRAÇÃO E AUTOMAÇÃO (Semana 3):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Integração com sistema Promotheus</li>
              <li>• Configuração de relatórios Fluxrow</li>
              <li>• Automação de follow-up inteligente</li>
              <li>• Sistema de transferência de leads qualificados</li>
            </ul>

            <p><strong>5.4. FASE 4 – OTIMIZAÇÃO E ENTREGA (Semana 4):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Testes de carga e performance</li>
              <li>• Ajustes finais baseados em feedback</li>
              <li>• Treinamento da equipe de vendas</li>
              <li>• Entrega de documentação e acesso aos dashboards</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 6: Capacidade Técnica */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SEXTA – DA CAPACIDADE TÉCNICA
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>6.1. CAPACIDADE DE QUALIFICAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>100+ conversas simultâneas</strong> no WhatsApp</li>
              <li>• Operação <strong>24 horas por dia, 7 dias por semana</strong></li>
              <li>• Tempo médio de resposta: <strong>menos de 5 segundos</strong></li>
              <li>• Qualificação inteligente baseada em critérios pré-definidos</li>
            </ul>

            <p><strong>6.2. LIMITES DO PLANO INICIAL:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>Tokens de IA:</strong> 1.000.000 tokens/mês (aproximadamente 5.000 conversas completas)</li>
              <li>• <strong>Mensagens em massa:</strong> Até 10.000 envios/mês</li>
              <li>• Upgrade disponível mediante solicitação e custo adicional</li>
            </ul>

            <p><strong>6.3. FUNCIONALIDADES INCLUÍDAS:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Qualificação automática de leads via WhatsApp</li>
              <li>• Follow-up inteligente e nutrição automatizada</li>
              <li>• Agendamento automático de reuniões</li>
              <li>• Transferência de leads qualificados para equipe</li>
              <li>• Relatórios de performance e conversão</li>
              <li>• Dashboard com métricas em tempo real</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 7: Obrigações da CONTRATADA */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SÉTIMA – DAS OBRIGAÇÕES DA CONTRATADA
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Implementar o sistema de qualificação conforme especificações técnicas</li>
            <li>• Entregar sistema funcional em até 4 semanas</li>
            <li>• Fornecer treinamento para equipe da CONTRATANTE</li>
            <li>• Manter disponibilidade do sistema 24/7</li>
            <li>• Gerar relatórios mensais via ferramenta Fluxrow</li>
            <li>• Prestar suporte técnico durante vigência do contrato</li>
            <li>• Garantir sigilo de informações conforme LGPD</li>
            <li>• Realizar ajustes e otimizações no sistema conforme necessário</li>
          </ul>
        </div>

        {/* Cláusula 8: Obrigações da CONTRATANTE */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA OITAVA – DAS OBRIGAÇÕES DA CONTRATANTE
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Fornecer informações necessárias para implementação</li>
            <li>• Garantir acesso aos sistemas (Promotheus) para integração</li>
            <li>• Disponibilizar base de contatos para qualificação</li>
            <li>• Gerar relatórios mensais via sistema Promotheus</li>
            <li>• Realizar atendimento de leads qualificados transferidos pela IA</li>
            <li>• Efetuar pagamentos nas datas acordadas</li>
            <li>• Informar imediatamente sobre problemas técnicos</li>
            <li>• Manter equipe disponível para receber leads qualificados</li>
          </ul>
        </div>

        {/* Cláusula 9: SLA */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA NONA – DO SLA (SERVICE LEVEL AGREEMENT)
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>9.1. DISPONIBILIDADE DO SISTEMA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Uptime garantido: <strong>99%</strong> do tempo mensal</li>
              <li>• Janela de manutenção: Até 1% ao mês (aproximadamente 7 horas)</li>
              <li>• Manutenções programadas comunicadas com 48h de antecedência</li>
            </ul>

            <p><strong>9.2. TEMPO DE RESPOSTA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Suporte técnico: Resposta em até <strong>24 horas úteis</strong></li>
              <li>• Problemas críticos: Atendimento em até <strong>4 horas</strong></li>
              <li>• Ajustes e melhorias: Implementação em até <strong>7 dias úteis</strong></li>
            </ul>

            <p><strong>9.3. MÉTRICAS DE QUALIFICAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Taxa mínima de resposta da IA: <strong>95%</strong></li>
              <li>• Tempo máximo de resposta da IA: <strong>10 segundos</strong></li>
              <li>• Taxa de transferência de leads qualificados: Conforme critérios definidos</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 10: Confidencialidade */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA – DA CONFIDENCIALIDADE E LGPD
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>10.1.</strong> As partes comprometem-se a manter sigilo sobre todas as informações confidenciais obtidas durante a vigência deste contrato.</p>
            <p><strong>10.2.</strong> A CONTRATADA compromete-se a cumprir integralmente a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).</p>
            <p><strong>10.3.</strong> Dados coletados e processados pela IA serão utilizados exclusivamente para fins de qualificação de leads.</p>
            <p><strong>10.4.</strong> A CONTRATADA não compartilhará dados de clientes com terceiros sem autorização expressa.</p>
            <p><strong>10.5.</strong> Ao término do contrato, todos os dados serão devolvidos ou destruídos conforme solicitação da CONTRATANTE.</p>
          </div>
        </div>

        {/* Cláusula 11: Rescisão */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA PRIMEIRA – DA RESCISÃO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>11.1. RESCISÃO POR QUALQUER DAS PARTES:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Aviso prévio de <strong>30 dias</strong></li>
              <li>• Multa de <strong>30%</strong> sobre o valor restante do contrato</li>
              <li>• Pagamento de serviços já prestados até a data da rescisão</li>
            </ul>

            <p><strong>11.2. RESCISÃO POR INADIMPLÊNCIA DA CONTRATANTE:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Atraso superior a <strong>15 dias</strong> no pagamento</li>
              <li>• Suspensão imediata dos serviços</li>
              <li>• Cobrança de multa e juros conforme cláusula 3.3</li>
              <li>• Rescisão unilateral sem aviso prévio</li>
            </ul>

            <p><strong>11.3. RESCISÃO POR INADIMPLÊNCIA DA CONTRATADA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Não entrega do sistema no prazo estipulado</li>
              <li>• Descumprimento do SLA por mais de 3 ocorrências</li>
              <li>• Violação de confidencialidade ou LGPD</li>
              <li>• Rescisão imediata sem multa para a CONTRATANTE</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 12: Cláusula Anti-Conflito */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA SEGUNDA – DA CLÁUSULA ANTI-CONFLITO
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>12.1. DIVERGÊNCIA NOS RELATÓRIOS:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Em caso de discordância irreconciliável entre relatórios Promotheus e Fluxrow</li>
              <li>• Será solicitada auditoria independente especializada</li>
              <li>• Custos de auditoria divididos igualmente entre as partes</li>
            </ul>

            <p><strong>12.2. SUSPENSÃO TEMPORÁRIA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Suspensão do pagamento de comissões até resolução do conflito</li>
              <li>• Manutenção da mensalidade fixa durante período de auditoria</li>
              <li>• Prazo máximo de resolução: 30 dias</li>
            </ul>

            <p><strong>12.3. MEDIAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Tentativa de mediação antes de processo judicial</li>
              <li>• Escolha de mediador em comum acordo</li>
              <li>• Prazo de 15 dias para tentativa de acordo</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 13: Disposições Gerais */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA TERCEIRA – DAS DISPOSIÇÕES GERAIS
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>13.1.</strong> Este contrato substitui todos os acordos anteriores, verbais ou escritos, entre as partes.</p>
            <p><strong>13.2.</strong> Qualquer alteração deve ser feita por escrito e assinada por ambas as partes.</p>
            <p><strong>13.3.</strong> A tolerância de uma parte em relação ao descumprimento de qualquer cláusula não constitui renúncia ou novação.</p>
            <p><strong>13.4.</strong> Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor.</p>
            <p><strong>13.5.</strong> Este contrato obriga as partes e seus sucessores.</p>
          </div>
        </div>

        {/* Cláusula 14: Foro */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA QUARTA – DO FORO
          </h3>
          <p className="text-muted-foreground">
            Fica eleito o foro da comarca de <strong>Curitiba/PR</strong> para dirimir quaisquer dúvidas ou litígios oriundos do presente contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>
        </div>

        {/* Assinaturas */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            ASSINATURAS
          </h3>
          <div className="space-y-8">
            <div className="text-center">
              {contrato?.status === 'assinado' && contrato?.data_assinatura ? (
                <div className="space-y-2">
                  <p className="text-muted-foreground mb-2">
                    Curitiba/PR, {formatarDataExtenso(contrato.data_assinatura)}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-semibold">
                      Contrato Assinado Digitalmente
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Assinado em: {formatarDataHora(contrato.data_assinatura)}
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground mb-4">
                  Curitiba/PR, _____ de __________________ de 2025
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="border-t-2 border-muted pt-4 mt-8">
                  <p className="font-bold text-foreground mb-2">CONTRATANTE</p>
                  <p className="text-sm text-muted-foreground">Match Solutions Fios e Cabos Elétricos LTDA</p>
                  <p className="text-sm text-muted-foreground">CNPJ: {formatarCNPJ(contrato?.cnpj_contratante || '34325200000136')}</p>
                  
                  {contrato?.status === 'assinado' && contrato?.assinatura_nome_responsavel && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm font-semibold text-foreground">Representante Legal:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>{contrato.assinatura_nome_responsavel}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CPF: {formatarCPF(contrato.assinatura_cpf_responsavel || '')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Cargo: {contrato.assinatura_cargo_responsavel}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <div className="border-t-2 border-muted pt-4 mt-8">
                  <p className="font-bold text-foreground mb-2">CONTRATADA</p>
                  <p className="text-sm text-muted-foreground">Fluxrow Inteligência Criativa</p>
                  <p className="text-sm text-muted-foreground">CNPJ: 61.260.831/0001-97</p>
                  
                  {contrato?.status === 'assinado' && (
                    <div className="mt-4 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                      <p className="text-sm font-semibold text-foreground">Representante Legal:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Fabio Cauã Faria de Farias</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CPF: 330.383.488-13
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sócio-Fundador
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {contrato?.status !== 'assinado' && (
              <div className="text-center mt-8 space-y-2">
                <p className="text-sm text-muted-foreground">Testemunhas:</p>
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  <div className="text-center">
                    <div className="border-t-2 border-muted pt-2 mt-12">
                      <p className="text-sm text-muted-foreground">Nome: _______________________</p>
                      <p className="text-sm text-muted-foreground">CPF: _______________________</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-t-2 border-muted pt-2 mt-12">
                      <p className="text-sm text-muted-foreground">Nome: _______________________</p>
                      <p className="text-sm text-muted-foreground">CPF: _______________________</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        {contrato?.status !== 'assinado' ? (
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center shadow-lg">
            <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Pronto para Assinar?
            </h3>
            <Button 
              onClick={() => window.location.href = '/contrato/match-solutions'}
              size="lg"
              className="gap-2 text-lg px-8"
            >
              <FileText className="h-5 w-5" />
              Assinar Digitalmente
            </Button>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 border border-green-500/20 rounded-lg p-8 text-center shadow-lg">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Contrato Assinado com Sucesso!
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Este contrato foi assinado digitalmente em {formatarDataHora(contrato.data_assinatura)} e possui validade jurídica.
            </p>
            <div className="bg-card p-4 rounded-lg border max-w-md mx-auto">
              <p className="text-sm font-semibold text-foreground mb-2">Dados da Assinatura Digital:</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>ID do Contrato:</strong> {contrato.id.substring(0, 8)}...</p>
                <p><strong>Data:</strong> {formatarDataExtenso(contrato.data_assinatura)}</p>
                <p><strong>Hora:</strong> {format(new Date(contrato.data_assinatura), "HH:mm:ss")}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-muted/30 border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Fluxrow Inteligência Criativa - CNPJ: 61.260.831/0001-97</p>
          <p className="mt-1">Contato: (41) 99236-1868 | contato@fluxrow.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContratoMatchSolutions;