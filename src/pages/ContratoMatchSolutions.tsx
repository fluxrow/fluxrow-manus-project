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
  // Campos legados (ainda podem existir em registros antigos)
  assinatura_nome_responsavel: string | null;
  assinatura_cpf_responsavel: string | null;
  assinatura_cargo_responsavel: string | null;
  // Novos campos separados
  contratante_assinatura_nome: string | null;
  contratante_assinatura_cpf: string | null;
  contratante_assinatura_cargo: string | null;
  contratante_data_assinatura: string | null;
  contratada_assinatura_nome: string | null;
  contratada_assinatura_cpf: string | null;
  contratada_assinatura_cargo: string | null;
  contratada_data_assinatura: string | null;
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
            O presente contrato tem por objeto a prestação de serviços de <strong>Sistema Completo de Automação em Vendas com Inteligência Artificial</strong>, compreendendo:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• <strong>6 Agentes IA Especializados:</strong> Múltiplos agentes de IA para qualificação paralela de leads via WhatsApp</li>
            <li>• <strong>Sistema de Backup Duplo via Prometheus:</strong> Redundância por email garantindo continuidade operacional</li>
            <li>• <strong>Email Marketing Quinzenal:</strong> Campanhas automáticas para base de 6-7k contatos com segmentação inteligente</li>
            <li>• <strong>Automação de Follow-up Inteligente:</strong> Sistema automatizado de nutrição e qualificação de leads</li>
            <li>• <strong>Integração com Sistema Prometheus:</strong> Sincronização com CRM atual da CONTRATANTE</li>
            <li>• <strong>Dashboard de Resultados:</strong> Relatórios através da ferramenta Fluxrow para análise de conversão</li>
            <li>• <strong>Transferência Qualificada:</strong> Encaminhamento de leads qualificados para equipe de vendas humana</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Importante:</strong> O sistema tem como objetivo <strong>qualificar e nutrir leads para vendas</strong>, não realizar vendas automaticamente. A conversão final permanece sob responsabilidade da equipe de vendas da CONTRATANTE.
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
              <p className="text-lg font-bold text-foreground mb-2">Valor Mensal: R$ 5.200,00</p>
              <p className="text-sm">Contrato trimestral (3 meses) = R$ 15.600,00</p>
            </div>
            
            <p><strong>3.1. PRIMEIRO PAGAMENTO (Na assinatura):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Valor: R$ 5.200,00</li>
              <li>• Forma: PIX</li>
              <li>• Chave PIX (CNPJ): <strong>61.260.831/0001-97</strong></li>
              <li>• Momento: Junto com a assinatura do contrato</li>
            </ul>

            <p><strong>3.2. PAGAMENTOS MENSAIS SUBSEQUENTES:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Forma: <strong>Boleto Bancário</strong></li>
              <li>• Envio: Para o e-mail <strong>thiagogea@matchsolutions.com.br</strong></li>
              <li>• Vencimento: Todo dia <strong>30 de cada mês</strong></li>
              <li>• Valor por boleto: <strong>R$ 5.200,00</strong></li>
              <li>• Primeiro boleto: 30/10/2025</li>
              <li>• Segundo boleto: 30/11/2025</li>
            </ul>

            <p><strong>3.3. TAXA DE IMPLEMENTAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>ISENTA</strong> – Sem cobrança de taxa de setup</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 4: Escopo Técnico */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA QUARTA – DO ESCOPO TÉCNICO DETALHADO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>4.1. FASE 1 – ANÁLISE E CONFIGURAÇÃO (Semana 1):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Mapeamento do perfil de cliente ideal (ICP)</li>
              <li>• Análise do funil de vendas atual</li>
              <li>• Definição de critérios de qualificação de leads</li>
              <li>• Integração com sistema Prometheus (WhatsApp + Email backup)</li>
              <li>• Configuração da base de email marketing (6-7k contatos)</li>
              <li>• Planejamento dos 6 Agentes IA especializados</li>
            </ul>

            <p><strong>4.2. FASE 2 – CRIAÇÃO DOS 6 AGENTES IA (Semana 2):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Desenvolvimento de 6 agentes IA especializados</li>
              <li>• Cada agente verifica demanda em sua carteira de clientes</li>
              <li>• Treinamento individual de cada agente com informações específicas</li>
              <li>• Sistema de backup duplo: WhatsApp + Email via Prometheus</li>
              <li>• Geração de leads qualificados por cada agente</li>
            </ul>

            <p><strong>4.3. FASE 3 – EMAIL MARKETING + FOLLOW-UP INTELIGENTE (Semana 3):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Configuração de campanhas quinzenais para 6-7k contatos</li>
              <li>• Segmentação inteligente da base de email marketing</li>
              <li>• Integração com sistema Prometheus</li>
              <li>• Configuração de relatórios Fluxrow</li>
              <li>• Automação de follow-up inteligente</li>
              <li>• Sistema de transferência de leads qualificados</li>
            </ul>

            <p><strong>4.4. FASE 4 – OTIMIZAÇÃO E ENTREGA (Semana 4):</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Testes de carga e performance dos 6 agentes</li>
              <li>• Ajustes finais baseados em feedback</li>
              <li>• Treinamento da equipe sobre os 6 agentes e email marketing</li>
              <li>• Entrega de documentação e acesso aos dashboards</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 5: Capacidade Técnica */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA QUINTA – DA CAPACIDADE TÉCNICA
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>5.1. CAPACIDADE DE QUALIFICAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>6 Agentes IA especializados</strong> operando em paralelo</li>
              <li>• <strong>Capacidade multiplicada</strong> com múltiplos agentes trabalhando simultaneamente</li>
              <li>• <strong>Sistema de backup duplo:</strong> WhatsApp + Email via Prometheus</li>
              <li>• Operação <strong>24 horas por dia, 7 dias por semana</strong></li>
              <li>• Tempo médio de resposta: <strong>menos de 5 segundos</strong></li>
              <li>• Qualificação inteligente baseada em critérios pré-definidos</li>
            </ul>

            <p><strong>5.2. LIMITES DO PLANO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>Tokens de IA:</strong> 1.000.000 tokens/mês por agente (aproximadamente 5.000 conversas completas por agente)</li>
              <li>• <strong>Mensagens em massa:</strong> Até 10.000 envios/mês via WhatsApp</li>
              <li>• <strong>Email Marketing:</strong> Campanhas quinzenais para base de 6-7k contatos</li>
              <li>• Upgrade disponível mediante solicitação e custo adicional</li>
            </ul>

            <p><strong>5.3. FUNCIONALIDADES INCLUÍDAS:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Qualificação automática de leads via WhatsApp com 6 agentes</li>
              <li>• Email Marketing quinzenal com segmentação inteligente</li>
              <li>• Follow-up inteligente e nutrição automatizada</li>
              <li>• Sistema de backup por email via Prometheus</li>
              <li>• Agendamento automático de reuniões</li>
              <li>• Transferência de leads qualificados para equipe</li>
              <li>• Relatórios de performance e conversão</li>
              <li>• Dashboard com métricas em tempo real</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 6: Obrigações da CONTRATADA */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SEXTA – DAS OBRIGAÇÕES DA CONTRATADA
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Implementar o sistema de automação completo conforme especificações técnicas</li>
            <li>• Entregar os 6 Agentes IA + Email Marketing + Sistema de Backup em até 4 semanas</li>
            <li>• Fornecer treinamento completo para equipe da CONTRATANTE</li>
            <li>• Manter disponibilidade do sistema 24/7</li>
            <li>• Executar campanhas quinzenais de email marketing</li>
            <li>• Gerar relatórios mensais via ferramenta Fluxrow</li>
            <li>• Prestar suporte técnico durante vigência do contrato</li>
            <li>• Garantir sigilo de informações conforme LGPD</li>
            <li>• Realizar ajustes e otimizações no sistema conforme necessário</li>
          </ul>
        </div>

        {/* Cláusula 7: Obrigações da CONTRATANTE */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SÉTIMA – DAS OBRIGAÇÕES DA CONTRATANTE
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Fornecer informações necessárias para implementação</li>
            <li>• Garantir acesso aos sistemas (Prometheus) para integração</li>
            <li>• Disponibilizar base de contatos para qualificação e email marketing</li>
            <li>• Realizar atendimento de leads qualificados transferidos pelos 6 Agentes IA</li>
            <li>• Efetuar pagamentos nas datas acordadas</li>
            <li>• Informar imediatamente sobre problemas técnicos</li>
            <li>• Manter equipe disponível para receber leads qualificados</li>
          </ul>
        </div>

        {/* Cláusula 8: SLA */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA OITAVA – DO SLA (SERVICE LEVEL AGREEMENT)
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>8.1. DISPONIBILIDADE DO SISTEMA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Uptime garantido: <strong>99%</strong> do tempo mensal</li>
              <li>• Janela de manutenção: Até 1% ao mês (aproximadamente 7 horas)</li>
              <li>• Manutenções programadas comunicadas com 48h de antecedência</li>
            </ul>

            <p><strong>8.2. TEMPO DE RESPOSTA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Suporte técnico: Resposta em até <strong>24 horas úteis</strong></li>
              <li>• Problemas críticos: Atendimento em até <strong>4 horas</strong></li>
              <li>• Ajustes e melhorias: Implementação em até <strong>7 dias úteis</strong></li>
            </ul>

            <p><strong>8.3. MÉTRICAS DE QUALIFICAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Taxa mínima de resposta dos 6 Agentes IA: <strong>95%</strong></li>
              <li>• Tempo máximo de resposta da IA: <strong>10 segundos</strong></li>
              <li>• Entrega quinzenal de campanhas de email marketing</li>
              <li>• Taxa de transferência de leads qualificados: Conforme critérios definidos</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 9: Confidencialidade */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA NONA – DA CONFIDENCIALIDADE E LGPD
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>9.1.</strong> As partes comprometem-se a manter sigilo sobre todas as informações confidenciais obtidas durante a vigência deste contrato.</p>
            <p><strong>9.2.</strong> A CONTRATADA compromete-se a cumprir integralmente a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).</p>
            <p><strong>9.3.</strong> Dados coletados e processados pelos Agentes IA e email marketing serão utilizados exclusivamente para fins de qualificação de leads.</p>
            <p><strong>9.4.</strong> A CONTRATADA não compartilhará dados de clientes com terceiros sem autorização expressa.</p>
            <p><strong>9.5.</strong> Ao término do contrato, todos os dados serão devolvidos ou destruídos conforme solicitação da CONTRATANTE.</p>
          </div>
        </div>

        {/* Cláusula 10: Rescisão */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA – DA RESCISÃO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>10.1. RESCISÃO POR QUALQUER DAS PARTES:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Aviso prévio de <strong>30 dias</strong></li>
              <li>• Pagamento de serviços já prestados até a data da rescisão</li>
            </ul>

            <p><strong>10.2. RESCISÃO POR INADIMPLÊNCIA DA CONTRATANTE:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Atraso superior a <strong>15 dias</strong> no pagamento</li>
              <li>• Suspensão imediata dos serviços</li>
              <li>• Rescisão unilateral sem aviso prévio</li>
            </ul>

            <p><strong>10.3. RESCISÃO POR INADIMPLÊNCIA DA CONTRATADA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Não entrega do sistema no prazo estipulado</li>
              <li>• Descumprimento do SLA por mais de 3 ocorrências</li>
              <li>• Violação de confidencialidade ou LGPD</li>
              <li>• Rescisão imediata sem multa para a CONTRATANTE</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 11: Mediação e Resolução de Conflitos */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA PRIMEIRA – DA MEDIAÇÃO E RESOLUÇÃO DE CONFLITOS
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>11.1. MEDIAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Em caso de conflitos relacionados ao contrato, as partes se comprometem a buscar solução amigável</li>
              <li>• Tentativa de mediação antes de processo judicial</li>
              <li>• Escolha de mediador em comum acordo</li>
              <li>• Prazo de 15 dias para tentativa de acordo</li>
            </ul>

            <p><strong>11.2. AUDITORIA TÉCNICA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Em caso de divergências técnicas sobre performance do sistema</li>
              <li>• Possibilidade de auditoria independente especializada</li>
              <li>• Custos de auditoria divididos igualmente entre as partes</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 12: Disposições Gerais */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA SEGUNDA – DAS DISPOSIÇÕES GERAIS
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>12.1.</strong> Este contrato substitui todos os acordos anteriores, verbais ou escritos, entre as partes.</p>
            <p><strong>12.2.</strong> Qualquer alteração deve ser feita por escrito e assinada por ambas as partes.</p>
            <p><strong>12.3.</strong> A tolerância de uma parte em relação ao descumprimento de qualquer cláusula não constitui renúncia ou novação.</p>
            <p><strong>12.4.</strong> Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor.</p>
            <p><strong>12.5.</strong> Este contrato obriga as partes e seus sucessores.</p>
          </div>
        </div>

        {/* Cláusula 13: Foro */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA TERCEIRA – DO FORO
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
              {(contrato?.status === 'totalmente_assinado' || contrato?.status === 'parcialmente_assinado' || contrato?.status === 'assinado') && contrato?.data_assinatura ? (
                <div className="space-y-2">
                  <p className="text-muted-foreground mb-2">
                    Curitiba/PR, {formatarDataExtenso(contrato.data_assinatura)}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-semibold">
                      {contrato.status === 'totalmente_assinado' ? 'Contrato Totalmente Assinado' : 
                       contrato.status === 'parcialmente_assinado' ? 'Contrato Parcialmente Assinado' : 
                       'Contrato Assinado Digitalmente'}
                    </span>
                  </div>
                  {contrato.status === 'parcialmente_assinado' && (
                    <p className="text-sm text-amber-600 mt-2 font-medium">
                      Aguardando assinatura da outra parte
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {contrato.status === 'totalmente_assinado' 
                      ? `Ambas as partes assinaram digitalmente`
                      : `Assinado em: ${formatarDataHora(contrato.data_assinatura)}`}
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
                  
                  {contrato?.contratante_assinatura_nome ? (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm font-semibold text-foreground">Representante Legal:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>{contrato.contratante_assinatura_nome}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CPF: {formatarCPF(contrato.contratante_assinatura_cpf || '')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Cargo: {contrato.contratante_assinatura_cargo}
                      </p>
                      {contrato.contratante_data_assinatura && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Assinado em: {formatarDataHora(contrato.contratante_data_assinatura)}
                        </p>
                      )}
                    </div>
                  ) : contrato?.status === 'assinado' && contrato?.assinatura_nome_responsavel ? (
                    // Fallback para dados legados
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
                  ) : (
                    <div className="mt-4 p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                      <p className="text-sm text-amber-600">
                        ⏳ Aguardando assinatura
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
                  
                  {contrato?.contratada_assinatura_nome ? (
                    <div className="mt-4 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                      <p className="text-sm font-semibold text-foreground">Representante Legal:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>{contrato.contratada_assinatura_nome}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CPF: {formatarCPF(contrato.contratada_assinatura_cpf || '')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Cargo: {contrato.contratada_assinatura_cargo}
                      </p>
                      {contrato.contratada_data_assinatura && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Assinado em: {formatarDataHora(contrato.contratada_data_assinatura)}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="mt-4 p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                      <p className="text-sm text-amber-600">
                        ⏳ Aguardando assinatura
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {contrato?.status !== 'totalmente_assinado' && contrato?.status !== 'parcialmente_assinado' && contrato?.status !== 'assinado' && (
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
        {contrato?.status !== 'totalmente_assinado' && contrato?.status !== 'assinado' ? (
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center shadow-lg">
            <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {contrato?.status === 'parcialmente_assinado' ? 'Falta Sua Assinatura!' : 'Pronto para Assinar?'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {contrato?.status === 'parcialmente_assinado' 
                ? 'Uma das partes já assinou o contrato. Clique abaixo para adicionar sua assinatura.'
                : 'Assine digitalmente este contrato de forma segura e jurídica.'}
            </p>
            <Button 
              onClick={() => window.location.href = '/contrato/match-solutions/assinar'}
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
              Este contrato foi {contrato?.status === 'totalmente_assinado' ? 'totalmente assinado por ambas as partes' : 'assinado digitalmente'} e possui validade jurídica.
            </p>
            <div className="bg-card p-4 rounded-lg border max-w-md mx-auto">
              <p className="text-sm font-semibold text-foreground mb-2">Dados da Assinatura Digital:</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>ID do Contrato:</strong> {contrato?.id.substring(0, 8)}...</p>
                <p><strong>Data:</strong> {formatarDataExtenso(contrato?.data_assinatura || '')}</p>
                <p><strong>Hora:</strong> {contrato?.data_assinatura && format(new Date(contrato.data_assinatura), "HH:mm:ss")}</p>
                {contrato?.status === 'totalmente_assinado' && (
                  <p className="text-green-600 font-medium mt-2">✓ Ambas as partes assinaram</p>
                )}
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