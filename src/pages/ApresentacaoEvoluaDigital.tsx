import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Bot, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock, 
  Target,
  Upload,
  Send,
  Brain,
  Bell,
  TrendingUp,
  FileText,
  Headphones,
  GraduationCap,
  Settings,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Database,
  RefreshCw,
  Eye,
  MessageCircle,
  UserCheck,
  Phone
} from "lucide-react";

const ApresentacaoEvoluaDigital = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Vim pela apresentação do sistema de prospecção com IA e gostaria de saber mais.");
    window.open(`https://wa.me/5541992361868?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <BackToHomeButton />
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 border border-purple-400/30">
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Sistema de Prospecção Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
            Conheça Nossa Plataforma de Vendas com IA
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Uma solução completa que automatiza a prospecção, qualifica leads com inteligência artificial 
            e potencializa sua equipe de vendas com tecnologia de ponta.
          </p>
        </section>

        {/* O Problema que Resolvemos */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Os Desafios que Resolvemos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-2xl border border-red-400/20">
              <MessageSquare className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-red-300">Volume de Mensagens</h3>
              <p className="text-slate-400">
                Equipes sobrecarregadas tentando enviar milhares de mensagens manualmente, 
                perdendo tempo e oportunidades.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-6 rounded-2xl border border-orange-400/20">
              <Users className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Gestão Ineficiente</h3>
              <p className="text-slate-400">
                Dificuldade em acompanhar performance individual, identificar gargalos 
                e tomar decisões baseadas em dados.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 p-6 rounded-2xl border border-yellow-400/20">
              <Shield className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Bloqueios de Números</h3>
              <p className="text-slate-400">
                Números constantemente bloqueados por envio excessivo, 
                interrompendo a operação de vendas.
              </p>
            </div>
          </div>
        </section>

        {/* Fluxo do Sistema Completo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Como o Sistema Funciona</h2>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            Um fluxo automatizado do início ao fim, desde a campanha até a venda fechada
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/50 p-8 rounded-3xl border border-purple-500/20">
            {[
              { icon: Upload, label: "Upload de Base", color: "purple" },
              { icon: Send, label: "Disparo em Massa", color: "blue" },
              { icon: MessageCircle, label: "Lead Responde", color: "green" },
              { icon: Brain, label: "IA Qualifica", color: "violet" },
              { icon: UserCheck, label: "Vendedor Assume", color: "emerald" },
              { icon: Target, label: "Venda Fechada", color: "amber" },
            ].map((step, index, arr) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-${step.color}-400/30`}>
                    <step.icon className={`w-8 h-8 text-${step.color}-400`} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{step.label}</span>
                </div>
                {index < arr.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-purple-400/50 hidden md:block shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Módulo de Campanhas */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full mb-4">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Módulo de Campanhas</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Gestão Completa de Campanhas</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Upload de Bases de Leads</span>
                    <p className="text-slate-400 text-sm">Importe planilhas com milhares de contatos em segundos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Segmentação Inteligente</span>
                    <p className="text-slate-400 text-sm">Divida leads por região, perfil, histórico e mais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Agendamento de Disparos</span>
                    <p className="text-slate-400 text-sm">Programe envios para horários de maior conversão</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Templates Personalizáveis</span>
                    <p className="text-slate-400 text-sm">Crie mensagens com variáveis dinâmicas por lead</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-8 rounded-3xl border border-purple-400/20">
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">Campanha VIVO Fibra</span>
                    <span className="text-green-400 text-sm">Ativa</span>
                  </div>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>15.000 leads</span>
                    <span>•</span>
                    <span>3 segmentos</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">Campanha Corporativo</span>
                    <span className="text-yellow-400 text-sm">Agendada</span>
                  </div>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>8.500 leads</span>
                    <span>•</span>
                    <span>2 segmentos</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 font-medium">Re-engajamento</span>
                    <span className="text-blue-400 text-sm">Em análise</span>
                  </div>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>5.200 leads</span>
                    <span>•</span>
                    <span>1 segmento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sistema de Disparos */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-3xl border border-blue-400/20">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-300">Instância 01</div>
                    <div className="text-xs text-green-400">Enviando... 847/1000</div>
                  </div>
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-300">Instância 02</div>
                    <div className="text-xs text-green-400">Enviando... 623/1000</div>
                  </div>
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-300">Instância 03</div>
                    <div className="text-xs text-yellow-400">Em espera (cooldown)</div>
                  </div>
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-300">Instância 04</div>
                    <div className="text-xs text-green-400">Enviando... 912/1000</div>
                  </div>
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-800/30 rounded-xl">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Progresso Total</span>
                  <span className="text-blue-400">3.382 / 4.000</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '84.5%' }} />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full mb-4">
                <Send className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm">Sistema de Disparos</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Disparos em Massa Inteligentes</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Rotação Automática de Números</span>
                    <p className="text-slate-400 text-sm">Múltiplas instâncias trabalham em paralelo com rodízio</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Sistema Anti-Bloqueio</span>
                    <p className="text-slate-400 text-sm">Delays inteligentes e warmup de números</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Monitoramento em Tempo Real</span>
                    <p className="text-slate-400 text-sm">Acompanhe o status de cada instância ao vivo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Filas de Envio Otimizadas</span>
                    <p className="text-slate-400 text-sm">Distribuição inteligente da carga de trabalho</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agente IA de Qualificação */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/20 px-3 py-1 rounded-full mb-4">
                <Brain className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm">Inteligência Artificial</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Agente IA de Qualificação</h2>
              <p className="text-slate-300 mb-6">
                Nossa IA conversa naturalmente com os leads, identifica interesse genuíno 
                e transfere apenas oportunidades reais para sua equipe.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Conversação Natural</span>
                    <p className="text-slate-400 text-sm">IA treinada para parecer humana e gerar rapport</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Scripts Personalizáveis</span>
                    <p className="text-slate-400 text-sm">Adapte as respostas da IA ao seu produto e tom</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Detecção de Intenção</span>
                    <p className="text-slate-400 text-sm">Identifica automaticamente leads quentes vs frios</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Transferência Inteligente</span>
                    <p className="text-slate-400 text-sm">Passa o lead no momento certo para o vendedor</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-6 rounded-3xl border border-violet-400/20">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                    <p className="text-sm text-slate-300">Oi, recebi uma mensagem sobre planos de internet</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-violet-600 p-3 rounded-2xl rounded-tr-none max-w-xs">
                    <p className="text-sm text-white">Olá! 😊 Temos os melhores planos da região. Você mora em casa ou apartamento?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                    <p className="text-sm text-slate-300">Casa, na zona sul de SP</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-violet-600 p-3 rounded-2xl rounded-tr-none max-w-xs">
                    <p className="text-sm text-white">Perfeito! Temos cobertura aí. Qual velocidade você usa hoje? E quanto paga?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                    <p className="text-sm text-slate-300">200 mega, pago 130 reais</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-green-600 p-3 rounded-2xl rounded-tr-none max-w-xs border-2 border-green-400">
                    <p className="text-sm text-white">🎯 <strong>Lead Qualificado!</strong> Transferindo para vendedor...</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Painel do Vendedor */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 rounded-3xl border border-emerald-400/20">
              <div className="flex items-center justify-between mb-4 p-3 bg-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Novo lead qualificado!</div>
                    <div className="text-xs text-slate-400">João Silva - Zona Sul SP</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400">Agora</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl mb-4">
                <div className="text-sm font-medium text-white mb-2">Resumo da IA:</div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Mora em casa, Zona Sul SP</li>
                  <li>• Atualmente 200MB por R$130</li>
                  <li>• Interessado em upgrade</li>
                  <li>• Disponível para instalação esta semana</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl mb-4">
                <div className="text-sm font-medium text-white mb-2">Histórico da Conversa</div>
                <div className="text-xs text-slate-500">5 mensagens • 2 min de interação</div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Phone className="w-4 h-4 mr-2" />
                Continuar Atendimento
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full mb-4">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm">Painel do Vendedor</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Tudo que o Vendedor Precisa</h2>
              <p className="text-slate-300 mb-6">
                O vendedor recebe o lead já qualificado, com todo o contexto da conversa 
                e informações importantes para fechar a venda.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Notificações em Tempo Real</span>
                    <p className="text-slate-400 text-sm">Alerta instantâneo quando um lead é qualificado</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Histórico Completo</span>
                    <p className="text-slate-400 text-sm">Acesso a toda conversa entre lead e IA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Resumo Inteligente</span>
                    <p className="text-slate-400 text-sm">IA resume os pontos principais para agilizar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Continuidade Perfeita</span>
                    <p className="text-slate-400 text-sm">Lead não percebe a transição IA → humano</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard de Gestão */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 px-3 py-1 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">Business Intelligence</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Dashboard de Gestão Completo</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Métricas em tempo real para tomada de decisão rápida e assertiva
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Mensagens Enviadas", value: "127.843", icon: Send, color: "blue", change: "+12%" },
              { label: "Leads Qualificados", value: "3.421", icon: UserCheck, color: "green", change: "+8%" },
              { label: "Taxa de Resposta", value: "34.2%", icon: MessageCircle, color: "purple", change: "+5%" },
              { label: "Vendas Fechadas", value: "847", icon: Target, color: "amber", change: "+15%" },
            ].map((metric) => (
              <div key={metric.label} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className={`w-8 h-8 text-${metric.color}-400`} />
                  <span className="text-green-400 text-sm font-medium">{metric.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Ranking de Vendedores</h3>
              <div className="space-y-3">
                {[
                  { name: "Carlos Silva", vendas: 127, taxa: "42%" },
                  { name: "Maria Santos", vendas: 98, taxa: "38%" },
                  { name: "João Oliveira", vendas: 85, taxa: "35%" },
                  { name: "Ana Costa", vendas: 72, taxa: "31%" },
                ].map((vendedor, i) => (
                  <div key={vendedor.name} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      i === 0 ? 'bg-amber-500 text-black' : 
                      i === 1 ? 'bg-slate-400 text-black' : 
                      i === 2 ? 'bg-orange-700 text-white' : 
                      'bg-slate-700 text-slate-300'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{vendedor.name}</div>
                      <div className="text-xs text-slate-400">{vendedor.vendas} vendas • {vendedor.taxa} conversão</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Performance por Campanha</h3>
              <div className="space-y-4">
                {[
                  { nome: "VIVO Fibra", leads: 1250, vendas: 312, cor: "purple" },
                  { nome: "Corporativo", leads: 890, vendas: 245, cor: "blue" },
                  { nome: "Re-engajamento", leads: 450, vendas: 89, cor: "green" },
                ].map((camp) => (
                  <div key={camp.nome}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{camp.nome}</span>
                      <span className="text-slate-400">{camp.vendas}/{camp.leads} leads</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${camp.cor}-500 rounded-full`}
                        style={{ width: `${(camp.vendas / camp.leads) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>Relatórios exportáveis em PDF e Excel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recursos Premium */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Recursos Premium Inclusos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6 rounded-2xl border border-purple-400/20 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Suporte Dedicado</h3>
              <p className="text-sm text-slate-400">Atendimento prioritário em horário comercial</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-400/20 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Gestor de Conta</h3>
              <p className="text-sm text-slate-400">Profissional dedicado ao seu sucesso</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 rounded-2xl border border-emerald-400/20 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Treinamento</h3>
              <p className="text-sm text-slate-400">Capacitação completa da sua equipe</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-400/20 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Customização</h3>
              <p className="text-sm text-slate-400">Scripts e fluxos personalizados</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 p-10 rounded-3xl border border-purple-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Quer Ver na Prática?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Agende uma demonstração gratuita e veja como nossa plataforma pode 
              transformar suas vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Falar com Consultor
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg"
                onClick={() => window.location.href = '/evolua-digital'}
              >
                <FileText className="w-5 h-5 mr-2" />
                Ver Proposta Comercial
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-8 border-t border-slate-800">
          <p>© 2025 FluxRow • Apresentação de Sistema</p>
        </footer>
      </div>
    </div>
  );
};

export default ApresentacaoEvoluaDigital;
