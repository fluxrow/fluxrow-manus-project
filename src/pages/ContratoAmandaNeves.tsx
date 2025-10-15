import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, CheckCircle, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ContratoData {
  id: string;
  nome_contratante: string;
  cpf_contratante: string;
  cnpj_contratante: string;
  email_contratante: string;
  nome_contratada: string;
  cpf_contratada: string;
  cnpj_contratada: string;
  status: string;
  data_assinatura: string;
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

const ContratoAmandaNeves = () => {
  const [contrato, setContrato] = useState<ContratoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarContrato();
  }, []);

  const carregarContrato = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('validar-contrato', {
        body: { cnpj: '61.153.521/0001-73' }
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
    const numeros = cnpj.replace(/\D/g, "");
    return numeros.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };

  const formatarCPF = (cpf: string) => {
    const numeros = cpf.replace(/\D/g, "");
    return numeros.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  const formatarDataExtenso = (data: string) => {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const d = new Date(data);
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
  };

  const formatarDataHora = (dataISO: string) => {
    return format(new Date(dataISO), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  };

  const handleDownload = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!contrato) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Contrato não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 print:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Contrato de Prestação de Serviços</h1>
              <p className="text-sm opacity-90 mt-1">Amanda Neves Store - Gestão de Tráfego Pago</p>
            </div>
            <Button onClick={handleDownload} variant="secondary" className="gap-2">
              <Download className="w-4 h-4" />
              Baixar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Contrato */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          {/* Título */}
          <div className="text-center border-b pb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              CONTRATO DE PRESTAÇÃO DE SERVIÇOS
            </h1>
            <p className="text-muted-foreground">
              Gestão Completa de Tráfego Pago Meta Ads + E-commerce
            </p>
          </div>

          {/* Partes */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">CONTRATANTE:</h2>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p><strong>Razão Social:</strong> {contrato.nome_contratante}</p>
                <p><strong>Nome Fantasia:</strong> AMANDAH NEVES STORE</p>
                <p><strong>CNPJ:</strong> {formatarCNPJ(contrato.cnpj_contratante)}</p>
                <p><strong>Endereço:</strong> R DOUTOR PIO BORGES, 1931, LOJA - PITA - SÃO GONÇALO/RJ - CEP 24.412-001</p>
                <p><strong>Email:</strong> {contrato.email_contratante}</p>
                <p><strong>Telefone:</strong> (21) 96465-5941</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">CONTRATADA:</h2>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p><strong>Razão Social:</strong> {contrato.nome_contratada}</p>
                <p><strong>Nome Fantasia:</strong> FLUXROW</p>
                <p><strong>CNPJ:</strong> {formatarCNPJ(contrato.cnpj_contratada)}</p>
                <p><strong>Endereço:</strong> Curitiba/PR</p>
                <p><strong>Email:</strong> suporte@fluxrow.com.br</p>
                <p><strong>Telefone:</strong> (41) 99236-1868</p>
                <p><strong>Chave PIX (CNPJ):</strong> 61.260.831/0001-97</p>
              </div>
            </div>
          </div>

          {/* Cláusulas */}
          <div className="space-y-6">
            {/* Cláusula 1 - Objeto */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA PRIMEIRA - DO OBJETO</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O presente contrato tem como objeto a prestação de serviços de <strong>Gestão Completa de Tráfego Pago Meta Ads + E-commerce</strong>, 
                compreendendo a criação, configuração, gerenciamento e otimização de campanhas publicitárias na plataforma Meta (Facebook e Instagram), 
                integradas ao e-commerce da CONTRATANTE.
              </p>
            </div>

            {/* Cláusula 2 - Prazo */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA SEGUNDA - DO PRAZO</h3>
              <p className="text-muted-foreground leading-relaxed">
                O presente contrato terá vigência de <strong>90 (noventa) dias</strong>, contados a partir da data de sua assinatura, 
                podendo ser renovado mediante acordo entre as partes.
              </p>
            </div>

            {/* Cláusula 3 - Valor */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA TERCEIRA - DO VALOR E FORMA DE PAGAMENTO</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Pelo serviço objeto deste contrato, a CONTRATANTE pagará à CONTRATADA o valor total de <strong>R$ 4.100,00 
                  (quatro mil e cem reais)</strong>, divididos da seguinte forma:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2 ml-4">
                  <p>• <strong>1º Pagamento:</strong> R$ 1.700,00 (um mil e setecentos reais) - Na assinatura do contrato</p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-3 mb-3">
                    <p className="font-semibold text-foreground mb-2">💳 Link de Pagamento - 1ª Parcela:</p>
                    <a 
                      href="https://checkout.nubank.com.br/cobranca/?id=0668eea328-c287-4816-866d-3ba795682e54&parcela=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all text-sm"
                    >
                      Clique aqui para pagar R$ 1.700,00 via Nubank
                    </a>
                  </div>
                  <p>• <strong>2º Pagamento:</strong> R$ 1.200,00 (um mil e duzentos reais) - 30 dias após a assinatura</p>
                  <p>• <strong>3º Pagamento:</strong> R$ 1.200,00 (um mil e duzentos reais) - 60 dias após a assinatura</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Parágrafo Único:</strong> Os pagamentos deverão ser realizados via PIX ou transferência bancária, 
                  mediante envio de nota fiscal pela CONTRATADA.
                </p>
              </div>
            </div>

            {/* Cláusula 4 - Escopo Técnico */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA QUARTA - DO ESCOPO TÉCNICO</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A CONTRATADA realizará as seguintes etapas e entregas:
              </p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">FASE 1 - Setup & Configuração Técnica (Dias 1-7)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Configuração completa do Gerenciador de Comércio da Meta</li>
                    <li>Integração técnica da plataforma Nuvem Shop</li>
                    <li>Instalação e configuração do Pixel Meta</li>
                    <li>Setup de eventos de conversão personalizados</li>
                    <li>Configuração de catálogo de produtos</li>
                    <li>Verificação de domínio</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">FASE 2 - Estrutura de Campanhas (Dias 8-21)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Criação de campanhas para mensagens no WhatsApp</li>
                    <li>Criação de campanhas de tráfego para o site</li>
                    <li>Desenvolvimento de anúncios em carrossel dinâmicos</li>
                    <li>Configuração de testes A/B de criativos</li>
                    <li>Estratégia de lances e orçamento</li>
                    <li>Segmentação de públicos por interesse e comportamento</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">FASE 3 - Rastreamento & Otimização (Dias 22-60)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Implementação de eventos personalizados (visualização de página, adicionar ao carrinho, iniciar checkout, compra)</li>
                    <li>Criação de públicos customizados baseados em comportamento</li>
                    <li>Setup de públicos semelhantes (Lookalike)</li>
                    <li>Campanhas de remarketing para visitantes</li>
                    <li>Remarketing de carrinhos abandonados</li>
                    <li>Otimizações semanais baseadas em performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">FASE 4 - Gestão & Relatórios (Dias 1-90)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Monitoramento diário de performance</li>
                    <li>Ajustes de lances e orçamento conforme necessário</li>
                    <li>Atualização de criativos com base em resultados</li>
                    <li>Relatórios semanais via WhatsApp</li>
                    <li>Relatórios mensais detalhados</li>
                    <li>Análise de métricas: CTR, CPC, CPM, ROAS, conversões</li>
                    <li>Reunião mensal de alinhamento e estratégia</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cláusula 5 - Obrigações da Contratada */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA QUINTA - DAS OBRIGAÇÕES DA CONTRATADA</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Executar os serviços com qualidade técnica e dentro dos prazos estabelecidos</li>
                <li>Fornecer relatórios periódicos de performance das campanhas</li>
                <li>Manter sigilo sobre informações confidenciais da CONTRATANTE</li>
                <li>Comunicar imediatamente qualquer problema técnico ou limitação identificada</li>
                <li>Otimizar continuamente as campanhas para melhores resultados</li>
                <li>Estar disponível para reuniões de alinhamento mensais</li>
              </ul>
            </div>

            {/* Cláusula 6 - Obrigações da Contratante */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA SEXTA - DAS OBRIGAÇÕES DA CONTRATANTE</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Efetuar os pagamentos nas datas acordadas</li>
                <li>Fornecer acesso às plataformas necessárias (Meta Business, Nuvem Shop, etc.)</li>
                <li>Fornecer materiais, fotos e informações dos produtos</li>
                <li>Aprovar criativos e textos dos anúncios em até 48 horas</li>
                <li>Disponibilizar orçamento para investimento em mídia (não incluso no valor do contrato)</li>
                <li>Responder dúvidas e solicitações em tempo hábil</li>
              </ul>
            </div>

            {/* Cláusula 7 - SLA */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA SÉTIMA - DO ACORDO DE NÍVEL DE SERVIÇO (SLA)</h3>
              <div className="space-y-2 ml-4">
                <p className="text-muted-foreground">• Tempo de resposta a dúvidas e solicitações: até 24 horas úteis</p>
                <p className="text-muted-foreground">• Ajustes emergenciais em campanhas: até 4 horas</p>
                <p className="text-muted-foreground">• Entrega de relatórios semanais: toda segunda-feira</p>
                <p className="text-muted-foreground">• Entrega de relatórios mensais: até o dia 5 do mês seguinte</p>
              </div>
            </div>

            {/* Cláusula 8 - Confidencialidade */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA OITAVA - DA CONFIDENCIALIDADE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todas as informações trocadas entre as partes serão tratadas como confidenciais, 
                não podendo ser divulgadas a terceiros sem prévia autorização por escrito.
              </p>
            </div>

            {/* Cláusula 9 - Rescisão */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA NONA - DA RESCISÃO</h3>
              <p className="text-muted-foreground leading-relaxed">
                O presente contrato poderá ser rescindido por qualquer das partes mediante aviso prévio de 30 (trinta) dias, 
                devendo ser quitados os valores proporcionais aos serviços já prestados.
              </p>
            </div>

            {/* Cláusula 10 - Foro */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA DÉCIMA - DO FORO</h3>
              <p className="text-muted-foreground leading-relaxed">
                As partes elegem o foro da comarca de São Gonçalo/RJ para dirimir quaisquer dúvidas ou controvérsias 
                oriundas do presente contrato, renunciando a qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            {/* Cláusula 11 - Disposições Gerais */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">CLÁUSULA DÉCIMA PRIMEIRA - DAS DISPOSIÇÕES GERAIS</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Parágrafo Primeiro:</strong> O investimento em mídia paga (budget de anúncios) não está incluso no valor deste contrato 
                e deverá ser definido e custeado diretamente pela CONTRATANTE na plataforma Meta Ads.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Parágrafo Segundo:</strong> A CONTRATADA não se responsabiliza por resultados caso a CONTRATANTE não forneça 
                os materiais necessários ou não aprove os criativos em tempo hábil.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Parágrafo Terceiro:</strong> Qualquer alteração neste contrato deverá ser feita por escrito e assinada por ambas as partes.
              </p>
            </div>
          </div>

          {/* Assinatura */}
          <div className="space-y-6 border-t pt-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                E por estarem assim justas e contratadas, as partes assinam o presente instrumento em 2 (duas) vias de igual teor e forma.
              </p>
              <p className="text-muted-foreground font-semibold">
                São Gonçalo/RJ, {formatarDataExtenso(contrato.created_at)}
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">ASSINATURAS</h3>
              
              {contrato.status === 'totalmente_assinado' ? (
                <div className="space-y-6">
                  {contrato.contratante_assinatura_nome && (
                    <div className="border-t pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="font-bold text-green-600">CONTRATANTE - ASSINADO</p>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Nome:</strong> {contrato.contratante_assinatura_nome}</p>
                        <p><strong>CPF:</strong> {formatarCPF(contrato.contratante_assinatura_cpf || '')}</p>
                        <p><strong>Cargo:</strong> {contrato.contratante_assinatura_cargo}</p>
                        <p><strong>Data/Hora:</strong> {formatarDataHora(contrato.contratante_data_assinatura || '')}</p>
                      </div>
                    </div>
                  )}
                  
                  {contrato.contratada_assinatura_nome && (
                    <div className="border-t pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="font-bold text-green-600">CONTRATADA - ASSINADO</p>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Nome:</strong> {contrato.contratada_assinatura_nome}</p>
                        <p><strong>CPF:</strong> {formatarCPF(contrato.contratada_assinatura_cpf || '')}</p>
                        <p><strong>Cargo:</strong> {contrato.contratada_assinatura_cargo}</p>
                        <p><strong>Data/Hora:</strong> {formatarDataHora(contrato.contratada_data_assinatura || '')}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-center py-8 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      ⏳ Aguardando assinaturas digitais
                    </p>
                    <a 
                      href="/contrato/amanda-neves/assinar"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FileText className="h-5 w-5" />
                      Assinar Digitalmente
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground print:hidden">
          <p>FLUXROW INTELIGÊNCIA CRIATIVA LTDA - CNPJ 61.260.831/0001-97</p>
          <p>suporte@fluxrow.com.br | (41) 99236-1868</p>
        </div>
      </div>
    </div>
  );
};

export default ContratoAmandaNeves;
