import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle } from "lucide-react";

const ContratoPromotrip = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Contrato de Prestação de Serviços</h1>
              <p className="text-muted-foreground text-lg">Sistema de Prospecção B2B com IA para Promotrip Corporate</p>
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
              Sistema de Prospecção B2B com IA para Promotrip Corporate
            </p>
          </div>

          {/* Partes */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-2">CONTRATANTE:</h3>
              <p className="text-muted-foreground">
                <strong>LINE AGENCIA DE VIAGENS LTDA</strong><br />
                Nome Fantasia: <strong>PROMOTRIP CORPORATE</strong><br />
                CNPJ: 40.789.152/0001-30<br />
                Endereço: Rua Pedro Horokoski, 60 - Campo Comprido<br />
                Curitiba/PR - CEP: 81.210-130<br />
                E-mail: financeiro@promotripcorporate.com<br />
                Telefone: (41) 8851-8644
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
            O presente contrato tem por objeto a prestação de serviços de <strong>Sistema de Prospecção B2B com Inteligência Artificial para Promotrip Corporate</strong>, compreendendo:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• <strong>Agente de IA Especializado:</strong> Agente inteligente para qualificação de leads B2B via WhatsApp</li>
            <li>• <strong>Integração com Base CSV:</strong> Importação e organização de ~3.000 contatos corporativos</li>
            <li>• <strong>Disparos WhatsApp (Z-API):</strong> Envios inteligentes sem limitações da API oficial</li>
            <li>• <strong>Email Marketing Integrado:</strong> Campanhas segmentadas por setor empresarial</li>
            <li>• <strong>Dashboard de Controle:</strong> Métricas e acompanhamento em tempo real</li>
            <li>• <strong>Avisos Inteligentes de Follow-up:</strong> Sistema de alertas para acompanhamento de leads</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Importante:</strong> O sistema tem como objetivo <strong>qualificar e nutrir leads B2B</strong>. A conversão final permanece sob responsabilidade da equipe de vendas da CONTRATANTE (Alexandre).
          </p>
        </div>

        {/* Cláusula 2: Prazo */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SEGUNDA – DO PRAZO
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>2.1.</strong> Prazo de vigência: <strong>1 (um) mês</strong> inicial para testes, iniciando-se na data de assinatura deste contrato.</p>
            <p><strong>2.2.</strong> Renovação: Mediante acordo prévio entre as partes, com nova assinatura de contrato. Poderá manter o mesmo período ou aumentar conforme necessidade.</p>
            <p><strong>2.3.</strong> <strong>Não há renovação automática.</strong> A continuidade do serviço depende de manifestação expressa de ambas as partes.</p>
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
              <p className="text-lg font-bold text-foreground mb-2">Valor Mensal: R$ 1.500,00</p>
              <p className="text-sm">Período inicial de teste: 1 mês = R$ 1.500,00</p>
            </div>
            
            <p><strong>3.1. PAGAMENTO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Valor: R$ 1.500,00</li>
              <li>• Forma: PIX</li>
              <li>• Chave PIX (CNPJ): <strong>61.260.831/0001-97</strong></li>
              <li>• Momento: Junto com a assinatura do contrato</li>
            </ul>

            <p><strong>3.2. TAXA DE IMPLEMENTAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• <strong>ISENTA</strong> – Sem cobrança de taxa de setup</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 4: Escopo Técnico */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA QUARTA – DO ESCOPO TÉCNICO
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>4.1. FUNCIONALIDADES INCLUÍDAS:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Disparos WhatsApp via Z-API (sem limitações da API oficial)</li>
              <li>• Email Marketing integrado com segmentação</li>
              <li>• Integração com base CSV (~3.000 contatos corporativos)</li>
              <li>• Personalização de mensagens por setor empresarial</li>
              <li>• Agente de IA especializado para qualificação B2B</li>
              <li>• Dashboard de controle e métricas</li>
              <li>• Avisos inteligentes de follow-up</li>
            </ul>

            <p><strong>4.2. PRAZO DE IMPLEMENTAÇÃO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Configuração inicial: 1 semana</li>
              <li>• Treinamento da equipe (Alexandre): 1 sessão</li>
              <li>• Go-live: Até 10 dias após assinatura</li>
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
              <li>• Operação <strong>24 horas por dia, 7 dias por semana</strong></li>
              <li>• Base de <strong>~3.000 contatos corporativos</strong></li>
              <li>• Segmentação por setor empresarial</li>
              <li>• Tempo médio de resposta: <strong>menos de 5 segundos</strong></li>
            </ul>

            <p><strong>5.2. LIMITES DO PLANO:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Tokens de IA: Conforme demanda do período de teste</li>
              <li>• Disparos WhatsApp: Conforme volume da base</li>
              <li>• Upgrade disponível mediante acordo para renovação</li>
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
            <li>• Implementar o sistema de prospecção conforme especificações técnicas</li>
            <li>• Fornecer treinamento para equipe da CONTRATANTE (Alexandre)</li>
            <li>• Manter disponibilidade do sistema</li>
            <li>• Gerar relatórios mensais de performance</li>
            <li>• Prestar suporte técnico durante vigência do contrato</li>
            <li>• Garantir sigilo de informações conforme LGPD</li>
          </ul>
        </div>

        {/* Cláusula 7: Obrigações da CONTRATANTE */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA SÉTIMA – DAS OBRIGAÇÕES DA CONTRATANTE
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Fornecer base CSV de contatos para qualificação</li>
            <li>• Definir segmentos e prioridades de prospecção</li>
            <li>• Disponibilizar equipe para atendimento de leads qualificados</li>
            <li>• Efetuar pagamentos nas datas acordadas</li>
            <li>• Informar imediatamente sobre problemas técnicos</li>
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
              <li>• Manutenções programadas comunicadas com antecedência</li>
            </ul>

            <p><strong>8.2. TEMPO DE RESPOSTA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Suporte técnico: Resposta em até <strong>24 horas úteis</strong></li>
              <li>• Problemas críticos: Atendimento em até <strong>4 horas</strong></li>
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
            <p><strong>9.3.</strong> Dados coletados e processados pelo Agente IA serão utilizados exclusivamente para fins de qualificação de leads.</p>
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
            </ul>

            <p><strong>10.3. RESCISÃO POR INADIMPLÊNCIA DA CONTRATADA:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Não entrega do sistema no prazo estipulado</li>
              <li>• Violação de confidencialidade ou LGPD</li>
              <li>• Rescisão imediata sem multa para a CONTRATANTE</li>
            </ul>
          </div>
        </div>

        {/* Cláusula 11: Mediação */}
        <div className="bg-card border rounded-lg p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            CLÁUSULA DÉCIMA PRIMEIRA – DA MEDIAÇÃO E RESOLUÇÃO DE CONFLITOS
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>11.1.</strong> Em caso de conflitos relacionados ao contrato, as partes se comprometem a buscar solução amigável.</p>
            <p><strong>11.2.</strong> Tentativa de mediação antes de processo judicial.</p>
            <p><strong>11.3.</strong> Prazo de 15 dias para tentativa de acordo.</p>
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
              <p className="text-muted-foreground mb-4">
                Curitiba/PR, _____ de __________________ de 2025
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="border-t-2 border-muted pt-4 mt-16">
                  <p className="font-bold text-foreground mb-2">CONTRATANTE</p>
                  <p className="text-sm text-muted-foreground">LINE AGENCIA DE VIAGENS LTDA</p>
                  <p className="text-sm text-muted-foreground">CNPJ: 40.789.152/0001-30</p>
                </div>
              </div>

              <div className="text-center">
                <div className="border-t-2 border-muted pt-4 mt-16">
                  <p className="font-bold text-foreground mb-2">CONTRATADA</p>
                  <p className="text-sm text-muted-foreground">Fluxrow Inteligência Criativa</p>
                  <p className="text-sm text-muted-foreground">CNPJ: 61.260.831/0001-97</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted/30 border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Este documento foi gerado digitalmente pela <strong>Fluxrow Inteligência Criativa</strong>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Em caso de dúvidas, entre em contato: contato@fluxrow.com | (41) 99236-1868
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContratoPromotrip;
