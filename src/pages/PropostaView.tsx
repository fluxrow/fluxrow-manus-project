import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, FileText, Phone, Mail, MessageCircle, Star, Award, Users, TrendingUp } from 'lucide-react';

interface PropostaData {
  clienteNome: string;
  clienteEmpresa: string;
  clienteEmail: string;
  clienteWhatsApp: string;
  servico: string;
  escopo: string;
  timeline: string;
  investimento: string;
  resultadosEsperados: string;
  observacoes: string;
  template: string;
}

export default function PropostaView() {
  const { clienteSlug } = useParams<{ clienteSlug: string }>();
  const [proposta, setProposta] = useState<PropostaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (clienteSlug) {
      const propostaId = localStorage.getItem(`cliente_${clienteSlug}`);
      if (propostaId) {
        const propostaData = localStorage.getItem(propostaId);
        if (propostaData) {
          setProposta(JSON.parse(propostaData));
        }
      }
    }
    setLoading(false);
  }, [clienteSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Carregando proposta...</p>
        </div>
      </div>
    );
  }

  if (!proposta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Proposta não encontrada</h2>
            <p className="text-muted-foreground">
              A proposta que você está procurando não foi encontrada ou pode ter expirado.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para ${proposta.servico} e gostaria de conversar mais sobre o projeto. Com ticket médio de R$ 35.000, vejo que o ROI pode chegar a 2.233%!`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Proposta: ${proposta.servico} - Match Solutions`;
    const body = `Olá!\n\nVi a proposta personalizada para automação de vendas com IA e fiquei muito interessado.\n\nOs números apresentados são impressionantes:\n- ROI de até 2.233% com 3 vendas/mês\n- Economia de R$ 2.000-3.750/mês vs contratação interna\n- Capacidade de atender 100+ prospects simultaneamente\n\nGostaria de agendar uma conversa para discutir a implementação.\n\nObrigado!`;
    const mailtoUrl = `mailto:contato@suaempresa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  // Template Styles
  const getTemplateClasses = () => {
    switch (proposta.template) {
      case 'corporativo':
        return 'bg-slate-50 text-slate-900';
      case 'criativo':
        return 'bg-gradient-to-br from-purple-50 to-pink-50';
      default:
        return 'bg-gradient-to-br from-primary/5 to-secondary/5';
    }
  };

  return (
    <div className={`min-h-screen py-8 ${getTemplateClasses()}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Proposta Personalizada
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Olá, <span className="text-primary">{proposta.clienteNome}</span>! 👋
          </h1>
          {proposta.clienteEmpresa && (
            <p className="text-xl text-muted-foreground mb-4">
              Proposta especial para <strong>{proposta.clienteEmpresa}</strong>
            </p>
          )}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preparamos uma solução sob medida para suas necessidades. Confira todos os detalhes abaixo.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Serviço Principal */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                {proposta.servico}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {proposta.escopo && (
                <div className="prose max-w-none">
                  <h4 className="font-semibold mb-2">📋 Escopo do Projeto:</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{proposta.escopo}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Detalhes da Proposta */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Timeline */}
            {proposta.timeline && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Prazo de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{proposta.timeline}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cronograma otimizado para sua necessidade
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Investimento */}
            {proposta.investimento && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Investimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{proposta.investimento}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Valor especial para este projeto
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Resultados Esperados */}
          {proposta.resultadosEsperados && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Resultados Esperados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted-foreground">{proposta.resultadosEsperados}</p>
              </CardContent>
            </Card>
          )}

          {/* Quem Somos */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Quem Somos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Somos especialistas em automação de vendas com IA, com mais de 200 projetos implementados 
                  e R$ 50 milhões em vendas geradas para nossos clientes.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">+200 Projetos</h4>
                    <p className="text-sm text-muted-foreground">Experiência comprovada</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold mb-1">R$ 50M+ Gerados</h4>
                    <p className="text-sm text-muted-foreground">Em vendas para clientes</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold mb-1">94% Precisão</h4>
                    <p className="text-sm text-muted-foreground">Na qualificação de leads</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diferenciais Técnicos */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <TrendingUp className="w-5 h-5" />
                Diferenciais Técnicos Únicos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Capacidade 10x Superior</h4>
                      <p className="text-sm text-green-600">SDR IA atende 100+ pessoas simultaneamente vs. 5-8 humano</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Follow-up Inteligente</h4>
                      <p className="text-sm text-green-600">Sistema baseado em comportamento aumenta conversão em 35%</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Operação 24/7</h4>
                      <p className="text-sm text-green-600">Sem pausas, intervalos ou limitações humanas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Qualificação Instantânea</h4>
                      <p className="text-sm text-green-600">IA identifica prospects qualificados em tempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Análise de Valor */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <DollarSign className="w-5 h-5" />
                Análise de Valor da Solução
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">💰 Cenários de ROI com Ticket Médio de R$ 35.000:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <h5 className="font-semibold text-blue-700">1 Venda/Mês</h5>
                        <p className="text-2xl font-bold text-green-600">ROI 678%</p>
                        <p className="text-sm text-blue-600">R$ 30.500 lucro líquido</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <h5 className="font-semibold text-blue-700">2 Vendas/Mês</h5>
                        <p className="text-2xl font-bold text-green-600">ROI 1.456%</p>
                        <p className="text-sm text-blue-600">R$ 65.500 lucro líquido</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <h5 className="font-semibold text-blue-700">3 Vendas/Mês</h5>
                        <p className="text-2xl font-bold text-green-600">ROI 2.233%</p>
                        <p className="text-sm text-blue-600">R$ 100.500 lucro líquido</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">💼 Economia vs Contratação Interna:</h4>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-red-600">Custos Internos:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• SDR Júnior: R$ 5.250/mês (com encargos)</li>
                          <li>• SDR Pleno: R$ 8.250/mês (com encargos)</li>
                          <li>• Treinamento: R$ 2.000-5.000</li>
                          <li>• Ferramentas: R$ 500-1.000/mês</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-600">Nossa Solução:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mensalidade: R$ 4.500</li>
                          <li>• Setup: R$ 0 (incluso)</li>
                          <li>• Treinamento: Incluso</li>
                          <li>• Suporte: Incluso</li>
                        </ul>
                        <p className="text-lg font-bold text-green-600 mt-2">
                          Economia: R$ 2.000-3.750/mês
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          {proposta.observacoes && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Informações Adicionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted-foreground">{proposta.observacoes}</p>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar? 🚀</h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato e vamos transformar sua ideia em realidade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={handleEmailContact}
                  size="lg" 
                  variant="secondary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Esta proposta foi criada especialmente para {proposta.clienteNome}</p>
          <p className="mt-1">Válida por 30 dias a partir da data de envio</p>
        </div>
      </div>
    </div>
  );
}