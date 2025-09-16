import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, FileText, Phone, Mail, MessageCircle, Star, Award, Users, TrendingUp } from 'lucide-react';

export default function PropostaMatchSolutions() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para Sistema Completo de Automação em Vendas com IA e gostaria de conversar mais sobre o projeto. Com ticket médio de R$ 35.000, vejo que o ROI pode chegar a 2.233%!`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Proposta: Sistema Completo de Automação em Vendas com IA - Match Solutions`;
    const body = `Olá!\n\nVi a proposta personalizada para automação de vendas com IA e fiquei muito interessado.\n\nOs números apresentados são impressionantes:\n- ROI de até 2.233% com 3 vendas/mês\n- Economia de R$ 2.000-3.750/mês vs contratação interna\n- Capacidade de atender 100+ prospects simultaneamente\n\nGostaria de agendar uma conversa para discutir a implementação.\n\nObrigado!`;
    const mailtoUrl = `mailto:contato@suaempresa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="min-h-screen py-8 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Proposta Personalizada
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Olá, <span className="text-primary">Match Solutions</span>! 👋
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Proposta especial para <strong>Match Solutions</strong>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preparamos uma solução sob medida para suas necessidades. Confira todos os detalhes abaixo.
          </p>
        </div>

        <div className="grid gap-8">
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

          {/* Serviço Principal */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Sistema Completo de Automação em Vendas com IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h4 className="font-semibold mb-4">📋 Escopo do Projeto:</h4>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-700 mb-2">🎯 FASE 1: ANÁLISE E CONFIGURAÇÃO (Semana 1)</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Análise completa do funil de vendas atual</li>
                      <li>• Configuração de disparos em massa personalizados</li>
                      <li>• Integração com sistemas existentes</li>
                      <li>• Setup inicial do SDR IA</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700 mb-2">🤖 FASE 2: IMPLEMENTAÇÃO DO SDR IA (Semana 2-3)</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Configuração de atendimento simultâneo para 100+ conversas</li>
                      <li>• Treinamento da IA com scripts específicos da Match Solutions</li>
                      <li>• Sistema de qualificação inteligente de leads</li>
                      <li>• Configuração de handoff para equipe humana</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-700 mb-2">📈 FASE 3: SISTEMA DE FOLLOW-UP INTELIGENTE (Semana 3-4)</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• Sequências automatizadas baseadas no comportamento do lead</li>
                      <li>• Sistema de remarketing por tempo de interação</li>
                      <li>• Configuração de múltiplos pontos de contato</li>
                      <li>• Otimização para aumento de 35% na conversão</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-700 mb-2">✅ FASE 4: OTIMIZAÇÃO E RELATÓRIOS (Semana 4)</h5>
                    <ul className="text-sm space-y-1 text-orange-600">
                      <li>• Dashboard completo com métricas em tempo real</li>
                      <li>• Relatórios de performance e ROI</li>
                      <li>• Ajustes finais baseados em dados</li>
                      <li>• Treinamento da equipe para uso da plataforma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detalhes da Proposta */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Prazo de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">3-4 semanas</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Cronograma otimizado para sua necessidade
                </p>
              </CardContent>
            </Card>

            {/* Investimento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Investimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">R$ 4.500/mês</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Sem taxa de implementação
                </p>
              </CardContent>
            </Card>
          </div>

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

          {/* Resultados Esperados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Resultados Esperados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">💰 RETORNO FINANCEIRO GARANTIDO:</h5>
                  <ul className="text-sm space-y-1 text-green-600">
                    <li>• Com apenas 1 venda/mês (ticket R$ 35.000): ROI de 678%</li>
                    <li>• Cenário conservador de 2 vendas/mês: ROI de 1.456%</li>
                    <li>• Meta de 3 vendas/mês: ROI de 2.233%</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">📊 MELHORIAS OPERACIONAIS:</h5>
                  <ul className="text-sm space-y-1 text-blue-600">
                    <li>• Atendimento simultâneo de 100+ prospects (vs. 5-8 humano)</li>
                    <li>• Aumento de 35% na conversão com follow-up inteligente</li>
                    <li>• Redução de 80% no tempo de qualificação de leads</li>
                    <li>• Operação 24/7 sem pausas ou intervalos</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">💡 ECONOMIA vs CONTRATAÇÃO INTERNA:</h5>
                  <ul className="text-sm space-y-1 text-purple-600">
                    <li>• SDR Júnior: R$ 3.500/mês + encargos (R$ 5.250)</li>
                    <li>• SDR Pleno: R$ 5.500/mês + encargos (R$ 8.250)</li>
                    <li>• <strong>Economia mensal: R$ 2.000 a R$ 3.750</strong></li>
                    <li>• <strong>Economia anual: R$ 24.000 a R$ 45.000</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Informações Adicionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 mb-2">🏆 GARANTIAS E DIFERENCIAIS:</h5>
                  <ul className="text-sm space-y-1 text-yellow-600">
                    <li>• Implementação completa em até 4 semanas</li>
                    <li>• Suporte técnico especializado incluído</li>
                    <li>• Dashboard com métricas em tempo real</li>
                    <li>• Integração com ferramentas existentes</li>
                    <li>• Treinamento completo da equipe</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-indigo-700 mb-2">📞 CAPACIDADE TÉCNICA ÚNICA:</h5>
                  <ul className="text-sm space-y-1 text-indigo-600">
                    <li>• Sistema proprietário de IA conversacional</li>
                    <li>• Processamento simultâneo de 100+ conversas</li>
                    <li>• Follow-up inteligente baseado em comportamento</li>
                    <li>• Qualificação automática com 94% de precisão</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar? 🚀</h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato e vamos transformar sua operação de vendas!
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
          <p>Esta proposta foi criada especialmente para <strong>Match Solutions</strong></p>
          <p className="mt-1">Válida por 30 dias a partir da data de envio</p>
        </div>
      </div>
    </div>
  );
}