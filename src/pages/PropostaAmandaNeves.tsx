import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, FileText, Phone, MessageCircle, Star, Award, Users, TrendingUp, Target, BarChart3, Zap, PieChart, Calendar, ShoppingCart, Package, Smartphone, Share2, Eye, MousePointerClick } from 'lucide-react';
import aiAutomationImage from "@/assets/ai-sales-automation.jpg";
import businessSuccessImage from "@/assets/business-success-roi.jpg";

export default function PropostaAmandaNeves() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para Gestão Completa de Tráfego Pago Meta Ads + E-commerce e gostaria de conversar mais sobre o projeto!`;
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
            Olá, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Caroline</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para Amanda Neves Store
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Preparamos uma estratégia completa de Meta Ads para alavancar suas vendas online. Confira todos os detalhes abaixo.
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
                <ShoppingCart className="w-8 h-8 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Gestão Completa de Tráfego Pago Meta Ads + E-commerce
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Hero Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={businessSuccessImage} 
                  alt="E-commerce Success with Meta Ads" 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="prose max-w-none">
                <h4 className="font-semibold mb-6 text-xl text-gray-200">📋 Escopo do Projeto:</h4>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-blue-300 mb-3 text-lg">🛠️ FASE 1: SETUP & CONFIGURAÇÃO TÉCNICA (Semana 1)</h5>
                    <ul className="text-sm space-y-2 text-blue-200">
                      <li>• <strong>Configuração do Gerenciador de Comércio Meta:</strong> Setup completo para integração com loja</li>
                      <li>• <strong>Integração Feed de Produtos Nuvem Shop → Meta:</strong> Sincronização automática de produtos</li>
                      <li>• <strong>Catálogo de Produtos:</strong> Configuração completa com categorias, preços e disponibilidade</li>
                      <li>• <strong>Meta Pixel + Conversões API:</strong> Rastreamento avançado de todas as ações no site</li>
                      <li>• <strong>Eventos Customizados:</strong> ViewContent, AddToCart, InitiateCheckout, Purchase</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-950/50 rounded-lg border border-blue-500/20">
                      <p className="text-xs text-blue-300 italic">
                        💡 <strong>Por que isso é importante:</strong> O Gerenciador de Comércio permite criar anúncios dinâmicos com carrosséis de produtos, 
                        facilitando a visualização e compra direta pelos clientes. A integração com Nuvem Shop mantém tudo sincronizado automaticamente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-green-300 mb-3 text-lg">🎯 FASE 2: ESTRUTURA DE CAMPANHAS (Semana 2)</h5>
                    <ul className="text-sm space-y-2 text-green-200">
                      <li>• <strong>Campanhas de Vendas para WhatsApp:</strong> Foco inicial em conversão rápida e atendimento humanizado</li>
                      <li>• <strong>Campanhas de Tráfego para Site:</strong> Construção de audiência qualificada para remarketing futuro</li>
                      <li>• <strong>Carrosséis Dinâmicos de Produtos:</strong> Anúncios automáticos com produtos mais relevantes para cada pessoa</li>
                      <li>• <strong>Remarketing de Carrinhos Abandonados:</strong> Reimpacto estratégico em quem adicionou produtos mas não finalizou</li>
                      <li>• <strong>Segmentações Estratégicas:</strong> Públicos personalizados por interesse, comportamento e intenção de compra</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-950/50 rounded-lg border border-green-500/20">
                      <p className="text-xs text-green-300 italic">
                        💡 <strong>Por que começar com WhatsApp:</strong> Campanhas direcionadas para WhatsApp têm tempo de resposta mais rápido 
                        e taxa de conversão maior no início. Enquanto isso, construímos base de dados para campanhas mais sofisticadas no site.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-purple-300 mb-3 text-lg">📊 FASE 3: RASTREAMENTO & OTIMIZAÇÃO (Semana 2-3)</h5>
                    <ul className="text-sm space-y-2 text-purple-200">
                      <li>• <strong>Eventos Personalizados de Rastreamento:</strong> Mapeamento completo da jornada do cliente</li>
                      <li>• <strong>Públicos Customizados:</strong> Segmentação por tempo de visita, produtos visualizados, valor do carrinho</li>
                      <li>• <strong>Conversões Personalizadas:</strong> Métricas específicas para seu negócio</li>
                      <li>• <strong>Sistema de Captura de Leads:</strong> Recuperação estratégica de carrinhos abandonados</li>
                      <li>• <strong>Integração Plano Pago Nuvem Shop:</strong> Configuração adicional quando disponível para relatórios avançados</li>
                    </ul>
                    <div className="mt-4 p-4 bg-purple-950/50 rounded-lg border border-purple-500/20">
                      <p className="text-xs text-purple-300 italic">
                        💡 <strong>O valor do rastreamento:</strong> Com configuração completa, sabemos exatamente o que cada pessoa faz no site. 
                        Isso permite criar campanhas super personalizadas e recuperar vendas que seriam perdidas (ex: carrinhos abandonados).
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/30 p-6 rounded-xl border border-orange-400/30 backdrop-blur-sm">
                    <h5 className="font-semibold text-orange-300 mb-3 text-lg">📈 FASE 4: GESTÃO & RELATÓRIOS (Contínuo)</h5>
                    <ul className="text-sm space-y-2 text-orange-200">
                      <li>• <strong>Relatórios Semanais:</strong> Performance detalhada de todas as campanhas</li>
                      <li>• <strong>Relatórios Mensais Consolidados:</strong> Visão estratégica com insights e recomendações</li>
                      <li>• <strong>Análise de ROAS:</strong> Retorno sobre investimento em anúncios</li>
                      <li>• <strong>Otimizações Baseadas em Dados:</strong> Ajustes contínuos para maximizar resultados</li>
                      <li>• <strong>Ajustes de Criativos:</strong> Testes A/B e otimização de anúncios</li>
                      <li>• <strong>Relatório Nuvem Shop (quando disponível):</strong> Integração completa com dados da plataforma</li>
                    </ul>
                    <div className="mt-4 p-4 bg-orange-950/50 rounded-lg border border-orange-500/20">
                      <p className="text-xs text-orange-300 italic">
                        💡 <strong>Plano pago Nuvem Shop:</strong> Com o plano pago, temos acesso a dados mais detalhados da plataforma, 
                        permitindo relatórios ainda mais completos e otimizações mais precisas. Faremos a configuração assim que disponível.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detalhes da Proposta */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Timeline */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-transparent border-blue-400/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300">Prazo de Entrega</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">2-3 semanas</p>
                <p className="text-sm text-gray-400 mt-2">
                  Setup completo + primeiras campanhas
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
                <div className="space-y-2">
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">R$ 2.000</p>
                    <p className="text-xs text-gray-400">Primeiro mês (com setup)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">R$ 1.500</p>
                    <p className="text-xs text-gray-400">Meses seguintes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orçamento Sugerido */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-transparent border-purple-400/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-300">Orçamento em Ads</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">R$ 1.500</p>
                <p className="text-sm text-gray-400 mt-2">
                  Sugestão inicial para começar
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Diferenciais Técnicos */}
          <Card className="border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Package className="w-7 h-7 text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Diferenciais Técnicos para E-commerce</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Integração Completa Nuvem Shop + Meta</h4>
                      <p className="text-sm text-gray-300">Feed de produtos sincronizado automaticamente, sem trabalho manual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Carrosséis Dinâmicos de Produtos</h4>
                      <p className="text-sm text-gray-300">Anúncios automáticos mostrando produtos relevantes para cada pessoa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Rastreamento Avançado de Eventos</h4>
                      <p className="text-sm text-gray-300">Pixel Meta + Conversões API para rastreamento preciso e completo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Remarketing Inteligente de Carrinhos</h4>
                      <p className="text-sm text-gray-300">Recuperação estratégica de vendas perdidas com anúncios personalizados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Dupla Estratégia: WhatsApp + Site</h4>
                      <p className="text-sm text-gray-300">Foco em conversão rápida via WhatsApp + construção de base para remarketing no site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-300">Relatórios Detalhados de E-commerce</h4>
                      <p className="text-sm text-gray-300">Métricas específicas: ROAS, CAC, LTV, taxa de abandono, produtos mais vendidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Esperado */}
          <Card className="border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-900/20 to-orange-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-7 h-7 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Projeção de Retorno (ROI)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300">
                  Considerando ticket médio de <strong className="text-white">R$ 150</strong> e orçamento inicial de <strong className="text-white">R$ 1.500 em anúncios:</strong>
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-900/40 to-transparent p-6 rounded-xl border border-orange-400/30">
                    <h4 className="text-orange-300 font-semibold mb-4 text-lg">📊 Cenário Conservador</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investimento em Ads:</span>
                        <span className="text-white font-semibold">R$ 1.500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taxa de Conversão:</span>
                        <span className="text-white font-semibold">2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Cliques Esperados:</span>
                        <span className="text-white font-semibold">750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Vendas Estimadas:</span>
                        <span className="text-white font-semibold">15 vendas</span>
                      </div>
                      <Separator className="bg-orange-500/30" />
                      <div className="flex justify-between">
                        <span className="text-orange-300 font-semibold">Faturamento:</span>
                        <span className="text-orange-300 font-bold text-lg">R$ 2.250</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investimento Total:</span>
                        <span className="text-white">R$ 3.500</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>(R$ 1.500 ads + R$ 2.000 gestão)</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-orange-500/30">
                        <span className="text-orange-300 font-semibold">ROAS:</span>
                        <span className="text-orange-300 font-bold">1.5x</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/40 to-transparent p-6 rounded-xl border border-green-400/30">
                    <h4 className="text-green-300 font-semibold mb-4 text-lg">🚀 Cenário Otimista</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investimento em Ads:</span>
                        <span className="text-white font-semibold">R$ 1.500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taxa de Conversão:</span>
                        <span className="text-white font-semibold">4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Cliques Esperados:</span>
                        <span className="text-white font-semibold">750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Vendas Estimadas:</span>
                        <span className="text-white font-semibold">30 vendas</span>
                      </div>
                      <Separator className="bg-green-500/30" />
                      <div className="flex justify-between">
                        <span className="text-green-300 font-semibold">Faturamento:</span>
                        <span className="text-green-300 font-bold text-lg">R$ 4.500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investimento Total:</span>
                        <span className="text-white">R$ 3.500</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>(R$ 1.500 ads + R$ 2.000 gestão)</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-green-500/30">
                        <span className="text-green-300 font-semibold">ROAS:</span>
                        <span className="text-green-300 font-bold">3.0x</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    💡 <strong className="text-cyan-300">Importante:</strong> Esses números são projeções baseadas em médias de mercado. 
                    Com otimização contínua e estratégias de remarketing, os resultados tendem a melhorar significativamente nos meses seguintes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entregáveis */}
          <Card className="border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="w-7 h-7 text-indigo-400" />
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">O Que Você Recebe</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Gerenciador de Comércio Meta configurado",
                  "Feed de produtos Nuvem Shop integrado",
                  "Catálogo de produtos organizado",
                  "Meta Pixel + Conversões API instalados",
                  "Eventos personalizados configurados",
                  "Campanhas de vendas WhatsApp ativas",
                  "Campanhas de tráfego para site",
                  "Carrosséis dinâmicos de produtos",
                  "Sistema de remarketing ativo",
                  "Públicos personalizados criados",
                  "Relatórios semanais de performance",
                  "Relatórios mensais consolidados",
                  "Análises de ROAS e otimizações",
                  "Suporte via WhatsApp",
                  "Ajustes e otimizações contínuas",
                  "Configuração Nuvem Shop pago (quando disponível)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-indigo-900/20 to-transparent p-4 rounded-lg border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Próximos Passos */}
          <Card className="border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-7 h-7 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Próximos Passos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Entre em Contato</h4>
                    <p className="text-sm text-gray-400">Clique no botão abaixo para conversar via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Alinhamento Inicial</h4>
                    <p className="text-sm text-gray-400">Reunião para entender melhor seu negócio e objetivos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Setup & Configuração</h4>
                    <p className="text-sm text-gray-400">Iniciamos imediatamente a implementação técnica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Lançamento das Campanhas</h4>
                    <p className="text-sm text-gray-400">Suas campanhas entram no ar e começamos a gerar resultados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 animate-scale-in">
            <CardContent className="pt-8">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Pronta para Decolar suas Vendas Online? 🚀
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Vamos começar a gerar resultados reais para a Amanda Neves Store!
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Falar com a Equipe Agora
                </Button>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>(41) 99236-1868</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    <span>Resposta em minutos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
