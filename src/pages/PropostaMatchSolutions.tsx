import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, FileText, Phone, MessageCircle, Star, Award, Users, TrendingUp, Target, BarChart3, Zap, PieChart, Calendar } from 'lucide-react';
import aiAutomationImage from "@/assets/ai-sales-automation.jpg";
import businessSuccessImage from "@/assets/business-success-roi.jpg";

export default function PropostaMatchSolutions() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para Sistema Completo de Automação em Vendas com IA (6 Agentes + Email Marketing) e gostaria de conversar mais sobre o projeto de R$ 5.200/mês!`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      <BackToHomeButton />
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-100 backdrop-blur-sm">
              Proposta Personalizada ✨
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Olá, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Thiago</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para Match Solutions
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Preparamos uma solução sob medida para suas necessidades. Confira todos os detalhes abaixo.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Quem Somos */}
          <Card className="border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm border-2 shadow-2xl shadow-purple-500/20 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-7 h-7 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Quem Somos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <strong className="text-white">Somos uma agência digital completa</strong> que resolve problemas através da tecnologia. 
                  Não vendemos apenas serviços - criamos ecossistemas digitais integrados que transformam desafios em oportunidades de crescimento.
                </p>
                <p className="text-gray-400">
                  Nossa expertise abrange todo o espectro digital, desde estratégia até execução, em áreas que realmente impactam o crescimento do seu negócio:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-7 h-7 text-purple-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-300 text-lg">Automação com IA</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Criamos automações inteligentes que conectam suas campanhas ao funil de vendas, 
                          maximizando cada lead gerado com IA.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-900/30 to-transparent p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-7 h-7 text-pink-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-pink-300 text-lg">Social Media</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Gestão completa de redes sociais com estratégias automatizadas, conteúdo personalizado 
                          e engajamento inteligente.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-900/30 to-transparent p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Target className="w-7 h-7 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-cyan-300 text-lg">Tráfego Pago</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads e TikTok Ads com otimização 
                          contínua e ROI garantido.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-900/30 to-transparent p-6 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-7 h-7 text-emerald-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-emerald-300 text-lg">Marketing Digital</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          SEO, Email Marketing, Content Marketing e estratégias omnichannel 
                          para presença digital completa.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-900/30 to-transparent p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Zap className="w-7 h-7 text-orange-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-300 text-lg">Automações de Marketing</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Nutrição de leads, CRM integrado, workflows automatizados e 
                          jornadas personalizadas do cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-900/30 to-transparent p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <PieChart className="w-7 h-7 text-indigo-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-indigo-300 text-lg">Analytics & Relatórios</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Dashboard completo de resultados, métricas em tempo real e 
                          insights estratégicos para tomada de decisão.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm">
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    "Entendemos que cada negócio tem suas particularidades. Por isso, nossa abordagem é sempre 
                    consultiva: primeiro entendemos seu desafio, depois criamos a solução perfeita para resolvê-lo."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Serviço Principal */}
          <Card className="shadow-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-4">
                <Star className="w-8 h-8 text-yellow-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Sistema Completo de Automação em Vendas com IA
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Hero Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={aiAutomationImage} 
                  alt="AI Sales Automation System" 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="prose max-w-none">
                <h4 className="font-semibold mb-6 text-xl text-gray-200">📋 Escopo do Projeto:</h4>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-blue-300 mb-3 text-lg">🎯 FASE 1: ANÁLISE E CONFIGURAÇÃO (Semana 1)</h5>
                    <ul className="text-sm space-y-2 text-blue-200">
                      <li>• Análise completa do funil de vendas atual</li>
                      <li>• Configuração de disparos em massa personalizados</li>
                      <li>• Integração com sistema Prometheus (backup duplo: WhatsApp + Email)</li>
                      <li>• Setup da base de email marketing (6-7 mil contatos)</li>
                      <li>• Planejamento dos 6 Agentes IA especializados</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-green-300 mb-3 text-lg">🤖 FASE 2: CRIAÇÃO DOS 6 AGENTES IA (Semana 2-3)</h5>
                    <ul className="text-sm space-y-2 text-green-200">
                      <li>• Criação de 6 Agentes IA (cópias digitais dos vendedores reais)</li>
                      <li>• Cada agente verifica demanda na própria carteira de clientes</li>
                      <li>• Treinamento individual com scripts específicos de cada vendedor</li>
                      <li>• Sistema de backup: WhatsApp prioritário + Email automático via Prometheus</li>
                      <li>• Sistema de qualificação inteligente de leads por agente</li>
                      <li>• Configuração de handoff para equipe humana</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-purple-300 mb-3 text-lg">📧 FASE 3: EMAIL MARKETING + FOLLOW-UP INTELIGENTE (Semana 3-4)</h5>
                    <ul className="text-sm space-y-2 text-purple-200">
                      <li>• Configuração de Email Marketing quinzenal (2 disparos/mês)</li>
                      <li>• Base de 6.000-7.000 contatos cadastrados</li>
                      <li>• Segmentação inteligente por comportamento e perfil</li>
                      <li>• Sequências automatizadas de follow-up por agente</li>
                      <li>• Sistema de remarketing por tempo de interação</li>
                      <li>• Otimização para aumento de 35% na conversão</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/30 p-6 rounded-xl border border-orange-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-orange-300 mb-3 text-lg">✅ FASE 4: OTIMIZAÇÃO E RELATÓRIOS (Semana 4)</h5>
                    <ul className="text-sm space-y-2 text-orange-200">
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
            <Card className="bg-gradient-to-br from-blue-900/30 to-transparent border-blue-400/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300">Prazo de Entrega</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">3-4 semanas</p>
                <p className="text-sm text-gray-400 mt-2">
                  Cronograma otimizado para sua necessidade
                </p>
              </CardContent>
            </Card>

            {/* Investimento */}
            <Card className="bg-gradient-to-br from-green-900/30 to-transparent border-green-400/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  <span className="text-green-300">Investimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">R$ 5.200/mês</p>
                <p className="text-sm text-gray-400 mt-2">
                  Sem taxa de implementação
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Diferenciais Técnicos */}
          <Card className="border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-7 h-7 text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Diferenciais Técnicos Únicos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">6 Agentes IA Especializados</h4>
                      <p className="text-sm text-gray-300">Cada agente é uma cópia digital de um vendedor real, verificando demanda em sua própria carteira</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Sistema de Backup Duplo</h4>
                      <p className="text-sm text-gray-300">WhatsApp prioritário + Email automático via Prometheus caso contato não esteja cadastrado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Email Marketing Integrado</h4>
                      <p className="text-sm text-gray-300">2 disparos quinzenais para 6-7 mil contatos com segmentação inteligente</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Operação 24/7 Multiplicada</h4>
                      <p className="text-sm text-gray-300">6 agentes trabalhando simultaneamente sem pausas ou limitações</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Follow-up Inteligente</h4>
                      <p className="text-sm text-gray-300">Sistema baseado em comportamento aumenta conversão em 35%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Qualificação Multi-Canal</h4>
                      <p className="text-sm text-gray-300">WhatsApp, Email e remarketing integrados em tempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limites do Plano */}
          <Card className="border-2 border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-7 h-7 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Limites do Plano Inicial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                  <h5 className="font-semibold text-blue-300 mb-4 text-lg">📊 Limites Mensais Inclusos:</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-900/30 to-transparent p-4 rounded-xl border border-green-400/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <h6 className="font-semibold text-green-300">Tokens de IA</h6>
                      </div>
                      <p className="text-2xl font-bold text-green-400">5.000 tokens/mês</p>
                      <p className="text-sm text-gray-400 mt-1">Suficiente para ~2.500 conversas completas</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-4 rounded-xl border border-purple-400/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <h6 className="font-semibold text-purple-300">Envio em Massa</h6>
                      </div>
                      <p className="text-2xl font-bold text-purple-400">5.000 mensagens/mês</p>
                      <p className="text-sm text-gray-400 mt-1">Para campanhas de prospecção inicial</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 p-6 rounded-xl border border-amber-400/30 backdrop-blur-sm">
                  <h5 className="font-semibold text-amber-300 mb-3 text-lg">🚀 Estratégia de Crescimento:</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-amber-200 font-medium">Plano Inicial para Demonstração de Resultados</p>
                        <p className="text-sm text-gray-300">Ideal para comprovar eficácia antes de escalar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-amber-200 font-medium">Upgrade Disponível Conforme Necessidade</p>
                        <p className="text-sm text-gray-300">Aumento de limites baseado no sucesso obtido</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-amber-200 font-medium">Monitoramento em Tempo Real</p>
                        <p className="text-sm text-gray-300">Dashboard com uso atual e projeções</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 p-4 rounded-xl border border-green-400/30">
                  <p className="text-green-300 font-medium text-center">
                    💡 Limites pensados estrategicamente para construir confiança e demonstrar valor real
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Análise de Valor */}
          <Card className="border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <DollarSign className="w-7 h-7 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Análise de Valor da Solução</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Hero Image para ROI */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={businessSuccessImage} 
                  alt="Business Success and ROI Growth" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-4 text-xl">💰 Cenários de ROI com Ticket Médio de R$ 35.000:</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-900/40 to-transparent border border-green-400/30 p-6 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
                      <div className="text-center">
                        <h5 className="font-semibold text-green-300 text-lg mb-2">1 Venda/Mês</h5>
                        <p className="text-3xl font-bold text-green-400 mb-2">ROI 573%</p>
                        <p className="text-sm text-gray-300">R$ 29.800 lucro líquido</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900/40 to-transparent border border-emerald-400/30 p-6 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
                      <div className="text-center">
                        <h5 className="font-semibold text-emerald-300 text-lg mb-2">2 Vendas/Mês</h5>
                        <p className="text-3xl font-bold text-emerald-400 mb-2">ROI 1.246%</p>
                        <p className="text-sm text-gray-300">R$ 64.800 lucro líquido</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-900/40 to-transparent border border-teal-400/30 p-6 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
                      <div className="text-center">
                        <h5 className="font-semibold text-teal-300 text-lg mb-2">3 Vendas/Mês</h5>
                        <p className="text-3xl font-bold text-teal-400 mb-2">ROI 1.919%</p>
                        <p className="text-sm text-gray-300">R$ 99.800 lucro líquido</p>
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
                        <h5 className="font-semibold text-green-600">Nossa Solução (6 Agentes + Email Marketing):</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mensalidade: R$ 5.200</li>
                          <li>• Setup: R$ 0 (incluso)</li>
                          <li>• Treinamento: Incluso</li>
                          <li>• Suporte: Incluso</li>
                          <li>• Email Marketing: Incluso</li>
                        </ul>
                        <p className="text-lg font-bold text-green-600 mt-2">
                          Economia: R$ 1.800-3.050/mês
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
                    <li>• Com apenas 1 venda/mês (ticket R$ 35.000): ROI de 573%</li>
                    <li>• Cenário conservador de 2 vendas/mês: ROI de 1.246%</li>
                    <li>• Meta de 3 vendas/mês: ROI de 1.919%</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">📊 MELHORIAS OPERACIONAIS:</h5>
                  <ul className="text-sm space-y-1 text-blue-600">
                    <li>• 6 Agentes IA verificando demanda simultaneamente em carteiras individuais</li>
                    <li>• Email Marketing quinzenal para 6-7 mil contatos</li>
                    <li>• Sistema de backup duplo (WhatsApp + Email via Prometheus)</li>
                    <li>• Aumento de 35% na conversão com follow-up inteligente</li>
                    <li>• Redução de 80% no tempo de qualificação de leads</li>
                    <li>• Operação 24/7 multiplicada por 6 agentes especializados</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">💡 ECONOMIA vs CONTRATAÇÃO INTERNA:</h5>
                  <ul className="text-sm space-y-1 text-purple-600">
                    <li>• 6 SDRs Júnior: 6 × R$ 5.250/mês = R$ 31.500</li>
                    <li>• Plataforma de Email Marketing: R$ 500-1.000/mês</li>
                    <li>• Nossa solução completa: R$ 5.200/mês</li>
                    <li>• <strong>Economia mensal: R$ 26.800 a R$ 27.300</strong></li>
                    <li>• <strong>Economia anual: R$ 321.600 a R$ 327.600</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/10 border-amber-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <FileText className="w-6 h-6 text-amber-400" />
                <span className="text-amber-300">Informações Adicionais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/30 p-6 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
                  <h5 className="font-semibold text-yellow-300 mb-3 text-lg">🏆 GARANTIAS E DIFERENCIAIS:</h5>
                  <ul className="text-sm space-y-2 text-yellow-200">
                    <li>• Implementação completa em até 4 semanas</li>
                    <li>• Suporte técnico especializado incluído</li>
                    <li>• Integração com ferramentas existentes</li>
                    <li>• Treinamento completo da equipe</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-6 rounded-xl border border-indigo-400/30 backdrop-blur-sm">
                  <h5 className="font-semibold text-indigo-300 mb-3 text-lg">📞 CAPACIDADE TÉCNICA ÚNICA:</h5>
                  <ul className="text-sm space-y-2 text-indigo-200">
                    <li>• 6 Agentes IA especializados (cópia digital de cada vendedor)</li>
                    <li>• Sistema proprietário de IA conversacional</li>
                    <li>• Integração com Prometheus para backup de Email automático</li>
                    <li>• Email Marketing quinzenal para 6-7 mil contatos</li>
                    <li>• Follow-up inteligente multi-canal (WhatsApp + Email)</li>
                    <li>• Qualificação automática com 94% de precisão</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investimento */}
          <Card className="bg-gradient-to-br from-yellow-900/40 via-orange-900/30 to-yellow-900/40 border-2 border-yellow-400/40 backdrop-blur-sm shadow-2xl shadow-yellow-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Investimento
                  </span>
                </h3>
              </div>

              {/* Valor do Investimento */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-400/30 backdrop-blur-sm mb-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Valor Mensal</h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-2">
                    R$ 5.200/mês
                  </p>
                  <p className="text-sm text-gray-400">Sem taxa de implementação</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/20 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Primeira Parcela
                  </h4>
                  <p className="text-gray-300 mb-2">Pagamento à vista na assinatura do contrato</p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-lg">✓ PIX</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg">✓ Transferência Bancária</span>
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Parcelas Seguintes
                  </h4>
                  <p className="text-gray-300">A partir do 2º mês: cobrança via boleto bancário</p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-500/30">
                  <p className="text-green-300 font-medium flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Início imediato do projeto após confirmação do pagamento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-purple-900/40 border-2 border-purple-400/40 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
            <CardContent className="text-center p-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Pronto para começar? 🚀
                </span>
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Entre em contato e vamos transformar sua operação de vendas!
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>Esta proposta foi criada especialmente para <strong className="text-purple-300">Match Solutions</strong></p>
          <p className="mt-1">Válida por 30 dias a partir da data de envio</p>
        </div>
      </div>
    </div>
  );
}