import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  MessageCircle, 
  Star, 
  Award, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  PieChart, 
  Calendar,
  Phone,
  Bot,
  ArrowRight,
  Shield,
  Headphones,
  UserCheck,
  RefreshCw,
  Send,
  LineChart,
  Trophy,
  AlertTriangle
} from 'lucide-react';

export default function PropostaEvoluaDigital() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para Sistema de Prospecção com IA para Vendas de Planos VIVO e gostaria de conversar mais sobre o projeto!`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white relative overflow-hidden">
      {/* Background Effects - VIVO Purple Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/40 to-violet-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/15 to-purple-600/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 border-purple-500/40 text-purple-100 backdrop-blur-sm">
              Proposta Personalizada ✨
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
            Olá, <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Alisson</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para <span className="text-purple-300 font-semibold">Evolua Digital</span> - Distribuidora VIVO
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sistema completo de prospecção com IA para escalar suas vendas de planos com inteligência e eficiência.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Quem Somos */}
          <Card className="border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10 backdrop-blur-sm border-2 shadow-2xl shadow-purple-500/20 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-7 h-7 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">Quem Somos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <strong className="text-white">Somos uma agência digital completa</strong> que resolve problemas através da tecnologia. 
                  Não vendemos apenas serviços - criamos ecossistemas digitais integrados que transformam desafios em oportunidades de crescimento.
                </p>
                <p className="text-gray-400">
                  Nossa expertise abrange todo o espectro digital, desde estratégia até execução:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Bot className="w-7 h-7 text-purple-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-300 text-lg">Automação com IA</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Agentes inteligentes que qualificam leads e escalam seu atendimento 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-fuchsia-900/30 to-transparent p-6 rounded-xl border border-fuchsia-500/20 backdrop-blur-sm hover:border-fuchsia-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Send className="w-7 h-7 text-fuchsia-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-fuchsia-300 text-lg">Disparos em Massa</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Sistema anti-bloqueio com rotação de instâncias para máxima entrega.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-violet-900/30 to-transparent p-6 rounded-xl border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-7 h-7 text-violet-400 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-violet-300 text-lg">Dashboard & BI</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Métricas em tempo real para tomada de decisão estratégica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entendimento do Desafio */}
          <Card className="border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-7 h-7 text-amber-400" />
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Entendimento do Desafio</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-900/40 to-transparent p-6 rounded-xl border border-amber-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-8 h-8 text-amber-400" />
                    <div>
                      <p className="text-3xl font-bold text-amber-300">400 mil</p>
                      <p className="text-sm text-gray-400">mensagens/mês</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Volume necessário para prospecção ativa de novos clientes</p>
                </div>
                <div className="bg-gradient-to-br from-orange-900/40 to-transparent p-6 rounded-xl border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-orange-400" />
                    <div>
                      <p className="text-3xl font-bold text-orange-300">270</p>
                      <p className="text-sm text-gray-400">vendedores</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Equipe completa para receber leads qualificados pela IA</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-900/40 to-transparent p-6 rounded-xl border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="text-3xl font-bold text-yellow-300">Contingência</p>
                      <p className="text-sm text-gray-400">de números</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Sistema de rotação para evitar bloqueios e manter operação estável</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-900/40 to-transparent p-6 rounded-xl border border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 text-emerald-400" />
                    <div>
                      <p className="text-3xl font-bold text-emerald-300">IA 24/7</p>
                      <p className="text-sm text-gray-400">primeiro atendimento</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Agente IA qualifica antes de transferir para vendedor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solução Proposta */}
          <Card className="shadow-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-violet-900/10 backdrop-blur-sm">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500"></div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-4">
                <Star className="w-8 h-8 text-yellow-400" />
                <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Sistema Completo de Prospecção com IA
                </span>
              </CardTitle>
              <p className="text-gray-400 mt-2">Para Vendas de Planos VIVO</p>
            </CardHeader>
            <CardContent>
              {/* Fluxo Visual */}
              <div className="mb-8">
                <h4 className="font-semibold mb-6 text-xl text-gray-200 text-center">📋 Como Funciona:</h4>
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                  <div className="bg-gradient-to-br from-purple-900/50 to-transparent p-4 rounded-xl border border-purple-400/30 text-center min-w-[140px]">
                    <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-purple-200 font-medium">1. Campanha Criada</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-400 hidden md:block" />
                  <div className="bg-gradient-to-br from-fuchsia-900/50 to-transparent p-4 rounded-xl border border-fuchsia-400/30 text-center min-w-[140px]">
                    <Send className="w-8 h-8 text-fuchsia-400 mx-auto mb-2" />
                    <p className="text-sm text-fuchsia-200 font-medium">2. Disparo em Massa</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-fuchsia-400 hidden md:block" />
                  <div className="bg-gradient-to-br from-green-900/50 to-transparent p-4 rounded-xl border border-green-400/30 text-center min-w-[140px]">
                    <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-green-200 font-medium">3. Lead Responde</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-green-400 hidden md:block" />
                  <div className="bg-gradient-to-br from-blue-900/50 to-transparent p-4 rounded-xl border border-blue-400/30 text-center min-w-[140px]">
                    <Bot className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-200 font-medium">4. IA Qualifica</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-400 hidden md:block" />
                  <div className="bg-gradient-to-br from-amber-900/50 to-transparent p-4 rounded-xl border border-amber-400/30 text-center min-w-[140px]">
                    <UserCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-sm text-amber-200 font-medium">5. Vendedor Assume</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-amber-400 hidden md:block" />
                  <div className="bg-gradient-to-br from-emerald-900/50 to-transparent p-4 rounded-xl border border-emerald-400/30 text-center min-w-[140px]">
                    <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-sm text-emerald-200 font-medium">6. Venda Fechada!</p>
                  </div>
                </div>
              </div>

              {/* Sistema de Instâncias */}
              <div className="bg-gradient-to-r from-purple-900/40 to-fuchsia-900/30 p-6 rounded-xl border border-purple-400/30 mb-6">
                <h5 className="font-semibold text-purple-300 mb-4 text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Sistema Anti-Bloqueio
                </h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-300">250</p>
                    <p className="text-sm text-gray-400">mensagens/dia por instância</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-fuchsia-300">7.500</p>
                    <p className="text-sm text-gray-400">mensagens/mês por instância</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-violet-300">Rotação</p>
                    <p className="text-sm text-gray-400">automática de números</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center italic">
                  Limite conservador de 250 msg/dia garante melhor relacionamento com o Meta e evita bloqueios constantes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fases do Projeto */}
          <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="w-7 h-7 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Fases do Projeto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-400/30">
                  <h5 className="font-semibold text-blue-300 mb-3 text-lg">🎯 FASE 1: ANÁLISE E CONFIGURAÇÃO (Semana 1-2)</h5>
                  <ul className="text-sm space-y-2 text-blue-200">
                    <li>• Mapeamento de campanhas e scripts de abordagem</li>
                    <li>• Definição de públicos-alvo e segmentação</li>
                    <li>• Setup inicial de instâncias WhatsApp</li>
                    <li>• Planejamento do fluxo de distribuição para vendedores</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-400/30">
                  <h5 className="font-semibold text-purple-300 mb-3 text-lg">📱 FASE 2: SETUP DE INFRAESTRUTURA (Semana 2-3)</h5>
                  <ul className="text-sm space-y-2 text-purple-200">
                    <li>• Configuração das instâncias WhatsApp (números fornecidos pelo cliente)</li>
                    <li>• Sistema de rotação anti-bloqueio</li>
                    <li>• Contingência automática para troca de números</li>
                    <li>• Integração com sistema de campanhas</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-400/30">
                  <h5 className="font-semibold text-green-300 mb-3 text-lg">🤖 FASE 3: TREINAMENTO DO AGENTE IA (Semana 3-4)</h5>
                  <ul className="text-sm space-y-2 text-green-200">
                    <li>• IA especializada em planos de telefonia VIVO</li>
                    <li>• Scripts de qualificação personalizados</li>
                    <li>• Regras de transferência para vendedores</li>
                    <li>• Detecção de intenção e interesse do lead</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/30 p-6 rounded-xl border border-orange-400/30">
                  <h5 className="font-semibold text-orange-300 mb-3 text-lg">📊 FASE 4: DASHBOARD E MÉTRICAS (Semana 4-5)</h5>
                  <ul className="text-sm space-y-2 text-orange-200">
                    <li>• Painel com KPIs em tempo real</li>
                    <li>• Relatórios por vendedor e por campanha</li>
                    <li>• Métricas estratégicas para diretoria</li>
                    <li>• Funil de conversão detalhado</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 p-6 rounded-xl border border-emerald-400/30">
                  <h5 className="font-semibold text-emerald-300 mb-3 text-lg">✅ FASE 5: GO-LIVE E OTIMIZAÇÃO (Semana 5-6)</h5>
                  <ul className="text-sm space-y-2 text-emerald-200">
                    <li>• Lançamento gradual das campanhas</li>
                    <li>• Ajustes baseados em dados reais</li>
                    <li>• Treinamento da equipe de vendedores</li>
                    <li>• Suporte dedicado para estabilização</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* O que o Cliente Fornece */}
          <Card className="border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-yellow-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="w-7 h-7 text-amber-400" />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">O que o Cliente Fornece</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Chips e Números WhatsApp</h4>
                    <p className="text-sm text-gray-400">Para configuração das instâncias de disparo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Scripts e Campanhas</h4>
                    <p className="text-sm text-gray-400">Modelos de abordagem para cada tipo de campanha</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Lista de Vendedores</h4>
                    <p className="text-sm text-gray-400">Com contatos para distribuição de leads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Reposição de Números</h4>
                    <p className="text-sm text-gray-400">Contingência para números bloqueados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard e Métricas */}
          <Card className="border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 to-violet-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <LineChart className="w-7 h-7 text-indigo-400" />
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">Dashboard Premium com BI</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Métricas em tempo real para tomada de decisão estratégica:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-indigo-900/40 to-transparent p-4 rounded-xl border border-indigo-500/30">
                  <h5 className="font-semibold text-indigo-300 mb-2">📊 Disparos</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Total por dia/semana/mês</li>
                    <li>• Taxa de entrega</li>
                    <li>• Taxa de leitura</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-transparent p-4 rounded-xl border border-purple-500/30">
                  <h5 className="font-semibold text-purple-300 mb-2">💬 Conversas</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Taxa de resposta</li>
                    <li>• Conversas por campanha</li>
                    <li>• Leads qualificados pela IA</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-900/40 to-transparent p-4 rounded-xl border border-fuchsia-500/30">
                  <h5 className="font-semibold text-fuchsia-300 mb-2">💰 Vendas</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Conversões por vendedor</li>
                    <li>• ROI por campanha</li>
                    <li>• Ranking de vendedores</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-indigo-900/30 to-violet-900/30 p-4 rounded-xl border-l-4 border-indigo-400">
                <p className="text-sm text-gray-300 italic">
                  "Dados em tempo real para a diretoria tomar decisões estratégicas com base em performance real de cada vendedor e campanha."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pacotes de Investimento */}
          <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <DollarSign className="w-7 h-7 text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Pacotes de Investimento</span>
              </CardTitle>
              <p className="text-gray-400 mt-2">Escolha o pacote ideal para sua operação</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Pacote Starter */}
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-2xl border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/40 mb-4">STARTER</Badge>
                    <p className="text-4xl font-bold text-blue-300">R$ 18.000</p>
                    <p className="text-sm text-gray-400">/mês</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                      <span className="text-gray-400">Instâncias WhatsApp</span>
                      <span className="text-blue-300 font-bold">15</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                      <span className="text-gray-400">Mensagens/mês</span>
                      <span className="text-blue-300 font-bold">~112.500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-500/20">
                      <span className="text-gray-400">Vendedores</span>
                      <span className="text-blue-300 font-bold">Até 90</span>
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Dashboard Premium BI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Suporte 24/7</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Gestor de Conta Dedicado</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Agente IA Especializado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pacote Professional - Destacado */}
                <div className="bg-gradient-to-br from-purple-900/50 to-fuchsia-800/30 p-6 rounded-2xl border-2 border-purple-400/50 hover:border-purple-400/80 transition-all duration-300 transform scale-105 shadow-2xl shadow-purple-500/20">
                  <div className="text-center mb-6">
                    <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50 mb-4">RECOMENDADO</Badge>
                    <p className="text-4xl font-bold text-purple-300">R$ 35.000</p>
                    <p className="text-sm text-gray-400">/mês</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                      <span className="text-gray-400">Instâncias WhatsApp</span>
                      <span className="text-purple-300 font-bold">35</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                      <span className="text-gray-400">Mensagens/mês</span>
                      <span className="text-purple-300 font-bold">~262.500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-purple-500/20">
                      <span className="text-gray-400">Vendedores</span>
                      <span className="text-purple-300 font-bold">Até 180</span>
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Dashboard Premium BI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Suporte 24/7</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Gestor de Conta Dedicado</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Agente IA Especializado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pacote Enterprise */}
                <div className="bg-gradient-to-br from-emerald-900/40 to-green-800/20 p-6 rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40 mb-4">ENTERPRISE</Badge>
                    <p className="text-4xl font-bold text-emerald-300">R$ 55.000</p>
                    <p className="text-sm text-gray-400">/mês</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                      <span className="text-gray-400">Instâncias WhatsApp</span>
                      <span className="text-emerald-300 font-bold">55</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                      <span className="text-gray-400">Mensagens/mês</span>
                      <span className="text-emerald-300 font-bold">~412.500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                      <span className="text-gray-400">Vendedores</span>
                      <span className="text-emerald-300 font-bold">270 (todos)</span>
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Dashboard Premium BI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Suporte 24/7</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Gestor de Conta Dedicado</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Agente IA Especializado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxa de Setup */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-6 rounded-xl border border-yellow-400/30 text-center">
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">Taxa de Setup (Única)</h4>
                <p className="text-4xl font-bold text-yellow-400">R$ 5.000</p>
                <p className="text-sm text-gray-400 mt-2">Válida para todos os pacotes</p>
              </div>
            </CardContent>
          </Card>

          {/* Contrato e Upgrade */}
          <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calendar className="w-7 h-7 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Contrato e Flexibilidade</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-900/40 to-transparent p-6 rounded-xl border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-2xl font-bold text-cyan-300">6 meses</p>
                      <p className="text-sm text-gray-400">contrato mínimo</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Período mínimo para garantir a estabilização e otimização do sistema</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/40 to-transparent p-6 rounded-xl border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="text-2xl font-bold text-green-300">Upgrade Flexível</p>
                      <p className="text-sm text-gray-400">a qualquer momento</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Aumente instâncias ou mude de pacote conforme a necessidade, sem multa</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantias e SLAs */}
          <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-7 h-7 text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Garantias e SLAs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300">Uptime 99.5%</h4>
                    <p className="text-sm text-gray-400">Sistema disponível 24 horas, 7 dias por semana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300">Suporte em até 2h</h4>
                    <p className="text-sm text-gray-400">Tempo máximo de resposta para chamados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300">Contingência Automática</h4>
                    <p className="text-sm text-gray-400">Sistema detecta e rotaciona números bloqueados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300">Treinamento Incluso</h4>
                    <p className="text-sm text-gray-400">Capacitação completa da equipe de vendedores</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forma de Pagamento */}
          <Card className="bg-gradient-to-br from-yellow-900/40 via-orange-900/30 to-yellow-900/40 border-2 border-yellow-400/40 backdrop-blur-sm shadow-2xl shadow-yellow-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Forma de Pagamento
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black/20 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Setup + Primeira Mensalidade
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
                    Mensalidades Seguintes
                  </h4>
                  <p className="text-gray-300">A partir do 2º mês: cobrança via boleto bancário ou PIX</p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-500/30">
                  <p className="text-green-300 font-medium flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Início do projeto em até 48h após confirmação do pagamento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-br from-purple-900/40 via-fuchsia-900/30 to-purple-900/40 border-2 border-purple-400/40 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
            <CardContent className="text-center p-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Pronto para escalar suas vendas? 🚀
                </span>
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Entre em contato e vamos revolucionar a prospecção da Evolua Digital!
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>Esta proposta foi criada especialmente para <strong className="text-purple-300">Evolua Digital</strong></p>
          <p className="mt-1">Válida por 30 dias a partir da data de envio</p>
        </div>
      </div>
    </div>
  );
}
