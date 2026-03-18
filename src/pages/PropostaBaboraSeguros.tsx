import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, Clock, DollarSign, FileText, MessageCircle, 
  Award, Users, TrendingUp, Target, BarChart3, Zap, PieChart, 
  Shield, Car, ClipboardList, Kanban, Bell, Bot, Calculator,
  FileSearch, FileSignature, Search, Sparkles, Rocket, ArrowRight,
  Megaphone, Share2, Mail, Workflow, Settings, Brain, X, Crown
} from 'lucide-react';

export default function PropostaBaboraSeguros() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Sou o Leandro da Babora Seguros. Vi a proposta do Sistema de Gestão e gostaria de conversar mais sobre o projeto!`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const modulosPrincipais = [
    {
      icon: Users,
      title: "Cadastro de Assegurados",
      description: "Base de dados completa e centralizada de todos os seus clientes. Histórico completo, documentos digitalizados e acesso rápido a qualquer informação do segurado.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Gestão de Seguros",
      description: "Controle total sobre todas as apólices ativas. Visualize coberturas, valores, vigências e condições em um único lugar. Nunca mais perca uma informação importante.",
      color: "cyan"
    },
    {
      icon: Car,
      title: "Gestão de Sinistros",
      description: "Acompanhe todo o ciclo de vida do sinistro - da abertura à resolução. Histórico completo por assegurado, status em tempo real e documentação organizada.",
      color: "orange"
    },
    {
      icon: Calculator,
      title: "Gestão de Orçamentos",
      description: "Crie e gerencie orçamentos de forma profissional. Templates prontos, cálculo automático de valores e envio direto para o cliente.",
      color: "green"
    },
    {
      icon: Target,
      title: "Funil de Vendas",
      description: "Visualize sua pipeline de vendas com clareza. Saiba exatamente onde cada oportunidade está e nunca deixe um lead esfriar.",
      color: "purple"
    },
    {
      icon: Kanban,
      title: "Kanban de Atividades",
      description: "Organize as tarefas da equipe de forma visual. Arrastar e soltar para mover entre colunas, prazos automáticos e produtividade maximizada.",
      color: "indigo"
    },
    {
      icon: MessageCircle,
      title: "Gestão de Conversas WhatsApp",
      description: "Centralize todas as conversas com clientes em uma única tela. Histórico completo, busca rápida e continuidade perfeita no atendimento.",
      color: "emerald"
    },
    {
      icon: Bot,
      title: "Assistente de IA",
      description: "Sua corretora com inteligência artificial. Respostas automáticas, sugestões inteligentes e atendimento 24/7 para seus clientes.",
      color: "pink"
    },
    {
      icon: Bell,
      title: "Alertas de Renovações",
      description: "Nunca mais perca uma renovação. Alertas automáticos por email, WhatsApp e no sistema garantem que você sempre antecipe o contato.",
      color: "yellow"
    }
  ];

  const recursosRoadmap = [
    {
      icon: Search,
      title: "Busca de Cotações Direto das Seguradoras",
      description: "Integração direta com as principais seguradoras. Faça cotações em segundos sem sair do sistema e compare opções instantaneamente.",
      color: "cyan"
    },
    {
      icon: Sparkles,
      title: "Avaliação Inteligente de Cotações",
      description: "IA compara automaticamente as melhores opções para cada perfil de cliente. Economia de tempo e assertividade nas recomendações.",
      color: "purple"
    },
    {
      icon: FileSignature,
      title: "Geração de Contratos",
      description: "Contratos profissionais gerados automaticamente. Templates personalizáveis, preenchimento automático de dados e assinatura digital.",
      color: "green"
    },
    {
      icon: FileSearch,
      title: "Busca Automática de Apólices",
      description: "Sistema busca automaticamente informações de apólices nas seguradoras parceiras. Dados sempre atualizados sem trabalho manual.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: "from-blue-900/30", border: "border-blue-500/20 hover:border-blue-400/40", text: "text-blue-300", icon: "text-blue-400" },
      cyan: { bg: "from-cyan-900/30", border: "border-cyan-500/20 hover:border-cyan-400/40", text: "text-cyan-300", icon: "text-cyan-400" },
      green: { bg: "from-green-900/30", border: "border-green-500/20 hover:border-green-400/40", text: "text-green-300", icon: "text-green-400" },
      emerald: { bg: "from-emerald-900/30", border: "border-emerald-500/20 hover:border-emerald-400/40", text: "text-emerald-300", icon: "text-emerald-400" },
      purple: { bg: "from-purple-900/30", border: "border-purple-500/20 hover:border-purple-400/40", text: "text-purple-300", icon: "text-purple-400" },
      indigo: { bg: "from-indigo-900/30", border: "border-indigo-500/20 hover:border-indigo-400/40", text: "text-indigo-300", icon: "text-indigo-400" },
      pink: { bg: "from-pink-900/30", border: "border-pink-500/20 hover:border-pink-400/40", text: "text-pink-300", icon: "text-pink-400" },
      orange: { bg: "from-orange-900/30", border: "border-orange-500/20 hover:border-orange-400/40", text: "text-orange-300", icon: "text-orange-400" },
      yellow: { bg: "from-yellow-900/30", border: "border-yellow-500/20 hover:border-yellow-400/40", text: "text-yellow-300", icon: "text-yellow-400" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      <BackToHomeButton />
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-blue-100 backdrop-blur-sm">
              Proposta Personalizada 🛡️
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Olá, <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leandro</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para Babora Seguros
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Apresentamos uma solução completa de <strong className="text-white">controle e gestão de processos de seguradoras</strong>, 
            desenvolvida para transformar a operação da sua corretora com tecnologia de ponta.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Quem Somos */}
          <Card className="border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border-2 shadow-2xl shadow-blue-500/20 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-7 h-7 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Quem Somos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <strong className="text-white">Somos uma empresa especializada em desenvolvimento de software e tecnologia</strong> que resolve problemas através de soluções digitais inteligentes. 
                  Criamos sistemas sob medida que transformam a operação do seu negócio.
                </p>
                <p className="text-gray-400">
                  Nossa expertise abrange todo o espectro de desenvolvimento de soluções empresariais:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Desenvolvimento de Software */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-5 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-300">Desenvolvimento de Software</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Sistemas personalizados que atendem exatamente às necessidades do seu negócio, 
                          com escalabilidade e performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Inteligência Artificial */}
                  <div className="bg-gradient-to-br from-cyan-900/30 to-transparent p-5 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Bot className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-cyan-300">Inteligência Artificial</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          IA aplicada ao seu negócio: assistentes virtuais, automações inteligentes 
                          e análise preditiva de dados.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Integrações & APIs */}
                  <div className="bg-gradient-to-br from-green-900/30 to-transparent p-5 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-green-300">Integrações & APIs</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Conectamos seu sistema a qualquer plataforma: WhatsApp, seguradoras, 
                          bancos e outros sistemas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gestão de Processos */}
                  <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-5 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <ClipboardList className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-300">Gestão de Processos</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Mapeamento e automação de workflows, eliminando gargalos 
                          e aumentando a produtividade da equipe.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics & Relatórios */}
                  <div className="bg-gradient-to-br from-orange-900/30 to-transparent p-5 rounded-xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-300">Analytics & Relatórios</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Dashboards inteligentes com métricas em tempo real 
                          para tomada de decisão estratégica.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Suporte & Atendimento */}
                  <div className="bg-gradient-to-br from-emerald-900/30 to-transparent p-5 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-emerald-300">Suporte & Atendimento</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Acompanhamento contínuo, treinamento da equipe e 
                          suporte técnico dedicado.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tráfego Pago */}
                  <div className="bg-gradient-to-br from-rose-900/30 to-transparent p-5 rounded-xl border border-rose-500/20 backdrop-blur-sm hover:border-rose-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Megaphone className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-rose-300">Tráfego Pago</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads e TikTok Ads 
                          com otimização contínua e ROI garantido.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="bg-gradient-to-br from-pink-900/30 to-transparent p-5 rounded-xl border border-pink-500/20 backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Share2 className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-pink-300">Social Media</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Gestão completa de redes sociais com estratégias automatizadas, 
                          conteúdo personalizado e engajamento inteligente.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Marketing Digital */}
                  <div className="bg-gradient-to-br from-indigo-900/30 to-transparent p-5 rounded-xl border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-indigo-300">Marketing Digital</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          SEO, Email Marketing, Content Marketing e estratégias omnichannel 
                          para presença digital completa.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Automações de Marketing */}
                  <div className="bg-gradient-to-br from-amber-900/30 to-transparent p-5 rounded-xl border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3">
                      <Workflow className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2 text-amber-300">Automações de Marketing</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Nutrição de leads, CRM integrado, workflows automatizados 
                          e jornadas personalizadas do cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm">
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    "Entendemos que cada negócio tem suas particularidades. Por isso, nossa abordagem é sempre 
                    consultiva: primeiro entendemos seu desafio, depois criamos a solução perfeita para resolvê-lo."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sistema Principal - Módulos */}
          <Card className="shadow-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500"></div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-4">
                <Shield className="w-8 h-8 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Sistema Principal - O Que Você Recebe
                </span>
              </CardTitle>
              <p className="text-gray-400 mt-2">9 módulos integrados para gestão completa da sua corretora</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {modulosPrincipais.map((modulo, index) => {
                  const colors = getColorClasses(modulo.color);
                  const Icon = modulo.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${colors.bg} to-transparent p-5 rounded-xl border ${colors.border} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`} />
                        <div>
                          <h4 className={`font-semibold mb-2 ${colors.text}`}>{modulo.title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{modulo.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Roadmap - Novos Recursos */}
          <Card className="shadow-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Exclusivo Plano 2
                </Badge>
              </div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-2">
                <Rocket className="w-8 h-8 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Roadmap - Novos Recursos
                </span>
              </CardTitle>
              <p className="text-gray-400 mt-2">Atualizações futuras incluídas no Plano Completo</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {recursosRoadmap.map((recurso, index) => {
                  const colors = getColorClasses(recurso.color);
                  const Icon = recurso.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${colors.bg} to-transparent p-5 rounded-xl border ${colors.border} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`} />
                        <div>
                          <h4 className={`font-semibold mb-2 ${colors.text}`}>{recurso.title}</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">{recurso.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl border-l-4 border-purple-400">
                <p className="text-sm text-gray-300 italic">
                  💡 <strong className="text-purple-300">Desenvolvimento contínuo:</strong> No Plano 2, novos recursos são desenvolvidos 
                  conforme a necessidade do seu negócio, sem custos adicionais de desenvolvimento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comparativo: Seu Sistema vs Agger */}
          <Card className="shadow-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-4">
                <BarChart3 className="w-8 h-8 text-amber-400" />
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Comparativo: Seu Sistema vs Agger
                </span>
              </CardTitle>
              <p className="text-gray-400 mt-2">Por que escolher uma solução personalizada?</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Seu Sistema */}
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-6 py-2 text-lg">
                      Seu Sistema
                    </Badge>
                  </div>
                  {[
                    { label: "Modelo", value: "Personalizado e evolutivo", positive: true },
                    { label: "Preço por Usuário", value: "Não cobra!", positive: true },
                    { label: "Evolução Contínua", value: "Inclusa no Plano 2", positive: true },
                    { label: "IA Integrada", value: "Avançada", positive: true },
                    { label: "WhatsApp", value: "CRM completo", positive: true },
                    { label: "Personalização", value: "Total", positive: true },
                    { label: "Desenvolvimento Sob Demanda", value: "Sim (Plano 2)", positive: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 rounded-lg border border-cyan-500/20">
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-cyan-300 font-medium text-sm">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Agger */}
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <Badge className="bg-slate-600 text-slate-300 border-0 px-6 py-2 text-lg">
                      Agger
                    </Badge>
                  </div>
                  {[
                    { label: "Modelo", value: "Sistema padrão, igual pra todos", positive: false },
                    { label: "Preço por Usuário", value: "R$ 179,80/usuário", positive: false },
                    { label: "Evolução Contínua", value: "Cobrança extra", positive: false },
                    { label: "IA Integrada", value: "Básica/Inexistente", positive: false },
                    { label: "WhatsApp", value: "Envio simples", positive: false },
                    { label: "Personalização", value: "Limitada", positive: false },
                    { label: "Desenvolvimento Sob Demanda", value: "Não disponível", positive: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-600/30">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.positive ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-slate-400 text-sm">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque de Preço */}
              <div className="mt-8 bg-gradient-to-r from-green-900/40 to-emerald-900/30 p-6 rounded-xl border-2 border-green-500/30">
                <div className="text-center space-y-3">
                  <h4 className="text-xl font-bold text-green-300">💰 Faça as Contas:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Agger com 6 usuários</p>
                      <p className="text-2xl font-bold text-red-400">R$ 1.078,80/mês</p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/40 p-4 rounded-lg border border-cyan-500/30">
                      <p className="text-cyan-400 text-sm">Seu Sistema com usuários ILIMITADOS</p>
                      <p className="text-2xl font-bold text-cyan-300">R$ 997/mês</p>
                    </div>
                  </div>
                  <p className="text-green-400 font-semibold">Mais barato e entrega MUITO mais!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diferenciais que Fazem a Diferença */}
          <Card className="shadow-2xl border-2 border-rose-500/30 bg-gradient-to-br from-rose-900/20 to-pink-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mt-4">
                <Sparkles className="w-8 h-8 text-rose-400" />
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                  Diferenciais que Fazem a Diferença
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { 
                    icon: Settings, 
                    title: "Personalização Real", 
                    desc: "Seu sistema se molda à Babora. O Agger exige que a Babora se molde ao sistema.",
                    color: "blue"
                  },
                  { 
                    icon: Rocket, 
                    title: "Evolução Sem Custo", 
                    desc: "O cliente vira dono do roadmap. Nenhum concorrente oferece isso.",
                    color: "purple"
                  },
                  { 
                    icon: Brain, 
                    title: "IA que Trabalha", 
                    desc: "Responde clientes, gera insights, evita perda de negócios, aprende com o uso.",
                    color: "pink"
                  },
                  { 
                    icon: MessageCircle, 
                    title: "WhatsApp como CRM", 
                    desc: "Conversas integradas no processo inteiro. Não só envio de mensagens.",
                    color: "emerald"
                  },
                  { 
                    icon: DollarSign, 
                    title: "Preço Competitivo", 
                    desc: "Mesmo no Premium, mais barato que o Agger com 6 usuários.",
                    color: "green"
                  },
                  { 
                    icon: TrendingUp, 
                    title: "Foco em Crescimento", 
                    desc: "Agger organiza. Seu sistema FAZ A CORRETORA CRESCER: mais renovações, mais conversão.",
                    color: "cyan"
                  },
                ].map((item, index) => {
                  const colors = getColorClasses(item.color);
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`bg-gradient-to-br ${colors.bg} to-transparent p-5 rounded-xl border ${colors.border} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105`}>
                      <Icon className={`w-8 h-8 ${colors.icon} mb-3`} />
                      <h4 className={`font-semibold mb-2 ${colors.text}`}>{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Investimento - Planos */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Plano 1 - Essencial */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-600/30 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto bg-slate-600/50 text-slate-300 border-slate-500/30 mb-2">
                  Para começar organizado
                </Badge>
                <CardTitle className="text-xl text-slate-300">Plano 1</CardTitle>
                <p className="text-2xl font-bold text-white">Sistema Essencial</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Setup (único)</p>
                    <p className="text-3xl font-bold text-white">R$ 1.500</p>
                  </div>
                  <Separator className="bg-slate-600/50" />
                  <div>
                    <p className="text-sm text-gray-400">Mensalidade</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">R$ 297</p>
                    <p className="text-sm text-gray-500">/mês</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { text: "Todos os 9 módulos principais", included: true },
                    { text: "Suporte via WhatsApp", included: true },
                    { text: "Treinamento inicial", included: true },
                    { text: "Usuários ilimitados", included: true },
                    { text: "Novos recursos e atualizações", included: false },
                    { text: "Desenvolvimento sob demanda", included: false },
                    { text: "IA avançada", included: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.included ? (
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
                      )}
                      <span className={item.included ? "text-gray-300 text-sm" : "text-gray-500 text-sm"}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-400">Ideal para</p>
                  <p className="text-sm text-gray-300">Corretoras que querem organização imediata</p>
                </div>
              </CardContent>
            </Card>

            {/* Plano 2 - Recomendado */}
            <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border-2 border-cyan-500/50 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform scale-105">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400"></div>
              <div className="absolute -top-1 right-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-1">
                  🔥 MAIS VENDIDO
                </Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <Badge className="w-fit mx-auto bg-cyan-600/50 text-cyan-200 border-cyan-500/30 mb-2">
                  Carro-chefe | Setup GRÁTIS
                </Badge>
                <CardTitle className="text-xl text-cyan-300">Plano 2</CardTitle>
                <p className="text-2xl font-bold text-white">Completo + Evolução</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <div>
                    <p className="text-sm text-cyan-400">Setup</p>
                    <p className="text-lg text-gray-400 line-through">R$ 1.500</p>
                    <p className="text-lg text-green-400 font-bold">GRÁTIS!</p>
                  </div>
                  <Separator className="bg-cyan-600/50" />
                  <div>
                    <p className="text-sm text-gray-400">Mensalidade</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">R$ 997</p>
                    <p className="text-sm text-gray-500">/mês</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { text: "Todos os 9 módulos principais", included: true },
                    { text: "Suporte via WhatsApp", included: true },
                    { text: "Treinamento completo", included: true },
                    { text: "Usuários ilimitados", included: true },
                    { text: "Novos recursos e atualizações", included: true },
                    { text: "Desenvolvimento sob demanda", included: true },
                    { text: "IA avançada integrada", included: true },
                    { text: "Prioridade em suporte", included: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cyan-900/30 p-4 rounded-lg text-center border border-cyan-500/20">
                  <p className="text-xs text-cyan-400">Você vira dono do roadmap</p>
                  <p className="text-sm text-gray-300">Sistema evolui com seu negócio</p>
                </div>
              </CardContent>
            </Card>

            {/* Plano 3 - Premium/Enterprise */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border-2 border-purple-500/40 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"></div>
              <div className="absolute -top-1 right-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 px-3 py-1">
                  <Crown className="w-3 h-3 mr-1 inline" />
                  ENTERPRISE
                </Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <Badge className="w-fit mx-auto bg-purple-600/50 text-purple-200 border-purple-500/30 mb-2">
                  Operações robustas
                </Badge>
                <CardTitle className="text-xl text-purple-300">Plano 3</CardTitle>
                <p className="text-2xl font-bold text-white">Premium/Enterprise</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <div>
                    <p className="text-sm text-purple-400">Setup sob medida</p>
                    <p className="text-lg text-gray-300">A partir de R$ 2.500</p>
                  </div>
                  <Separator className="bg-purple-600/50" />
                  <div>
                    <p className="text-sm text-gray-400">Mensalidade</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">R$ 1.497</p>
                    <p className="text-sm text-gray-500">a R$ 1.997/mês</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { text: "TUDO do Plano 2", included: true },
                    { text: "Integrações avançadas", included: true },
                    { text: "Multicálculo externo", included: true },
                    { text: "Dashboards customizados", included: true },
                    { text: "Automações complexas", included: true },
                    { text: "API dedicada", included: true },
                    { text: "Gerente de sucesso dedicado", included: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg text-center border border-purple-500/20">
                  <p className="text-xs text-purple-400">Para corretoras</p>
                  <p className="text-sm text-gray-300">Com operações complexas e alto volume</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Por Que Investir */}
          <Card className="border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-7 h-7 text-green-400" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Por Que Investir Nesta Solução?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Bell, title: "Aumente Renovações", desc: "Alertas automáticos garantem que você nunca perca uma renovação. Mais contratos = mais receita.", color: "green" },
                  { icon: Clock, title: "Zero Prazos Perdidos", desc: "Sistema avisa antes de vencer. Sua equipe sempre um passo à frente.", color: "blue" },
                  { icon: Bot, title: "Atendimento com IA", desc: "IA trabalhando 24/7: respostas instantâneas, sugestões inteligentes, clientes satisfeitos.", color: "cyan" },
                  { icon: Target, title: "Melhore Conversão", desc: "Funil visual + histórico completo = fechamento mais rápido e assertivo.", color: "purple" },
                  { icon: TrendingUp, title: "Impulsione Faturamento", desc: "Cresça sem aumentar equipe. Automação inteligente multiplica sua capacidade.", color: "emerald" },
                  { icon: Shield, title: "Dados Seguros 24/7", desc: "Infraestrutura em nuvem com backup automático. Proteção total dos seus dados.", color: "orange" },
                ].map((item, index) => {
                  const colors = getColorClasses(item.color);
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`bg-gradient-to-br ${colors.bg} to-transparent p-5 rounded-xl border ${colors.border} backdrop-blur-sm transition-all duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.icon} mb-3`} />
                      <h4 className={`font-semibold mb-2 ${colors.text}`}>{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Próximos Passos */}
          <Card className="border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-7 h-7 text-indigo-400" />
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Próximos Passos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { num: 1, title: "Conversa Inicial", desc: "Alinhamento para entender detalhes do seu negócio e necessidades específicas" },
                  { num: 2, title: "Personalização", desc: "Configuração do sistema de acordo com os processos da Babora Seguros" },
                  { num: 3, title: "Implantação & Treinamento", desc: "Sistema no ar + capacitação completa da equipe" },
                  { num: 4, title: "Go-Live & Suporte", desc: "Início da operação com acompanhamento dedicado" },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">{step.num}</div>
                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 animate-scale-in">
            <CardContent className="pt-8">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Pronto para Transformar a Gestão da Babora Seguros? 🚀
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Vamos começar a construir o sistema ideal para sua corretora!
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
                    <Clock className="w-4 h-4" />
                    Resposta em até 2h
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Sem compromisso
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm py-8">
            <p>Proposta válida por 15 dias • Babora Seguros</p>
            <p className="mt-2">© 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
