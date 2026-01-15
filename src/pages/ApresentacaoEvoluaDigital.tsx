import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  RefreshCw,
  Send,
  Bot,
  ArrowRight,
  Trophy,
  Shield,
  Headphones,
  UserCheck,
  BarChart3,
  Zap,
  Target,
  FileText,
  AlertTriangle,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle
} from 'lucide-react';

export default function ApresentacaoEvoluaDigital() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a apresentação do Sistema de Prospecção com IA para Vendas de Planos VIVO e gostaria de conversar mais!`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/40 to-violet-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/15 to-purple-600/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20 pt-8">
          <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 border-purple-500/40 text-purple-100 backdrop-blur-sm mb-8">
            Apresentação Comercial • Evolua Digital
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent leading-tight">
            Revolucione suas Vendas
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              com Inteligência Artificial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Sistema completo de prospecção e qualificação automatizada para planos VIVO
          </p>
        </section>

        {/* O Desafio */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
            O Desafio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-900/40 to-transparent p-8 rounded-2xl border border-amber-500/30 text-center hover:scale-105 transition-transform">
              <MessageCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-amber-300 mb-2">400 mil</p>
              <p className="text-gray-400">mensagens/mês para disparar</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-transparent p-8 rounded-2xl border border-orange-500/30 text-center hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-orange-300 mb-2">270</p>
              <p className="text-gray-400">vendedores para gerenciar</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/40 to-transparent p-8 rounded-2xl border border-yellow-500/30 text-center hover:scale-105 transition-transform">
              <RefreshCw className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-yellow-300 mb-2">Contingência</p>
              <p className="text-gray-400">de números necessária</p>
            </div>
          </div>
        </section>

        {/* A Solução - Fluxo Visual */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
            A Solução
          </h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 p-8 rounded-2xl border border-purple-500/30">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-purple-900/60 to-transparent p-6 rounded-xl border border-purple-400/40 text-center min-w-[120px]">
                <FileText className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-sm text-purple-200 font-medium">Campanha</p>
              </div>
              <ArrowRight className="w-8 h-8 text-purple-400 hidden md:block" />
              <div className="bg-gradient-to-br from-fuchsia-900/60 to-transparent p-6 rounded-xl border border-fuchsia-400/40 text-center min-w-[120px]">
                <Send className="w-10 h-10 text-fuchsia-400 mx-auto mb-3" />
                <p className="text-sm text-fuchsia-200 font-medium">Disparo em Massa</p>
              </div>
              <ArrowRight className="w-8 h-8 text-fuchsia-400 hidden md:block" />
              <div className="bg-gradient-to-br from-green-900/60 to-transparent p-6 rounded-xl border border-green-400/40 text-center min-w-[120px]">
                <MessageCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <p className="text-sm text-green-200 font-medium">Lead Responde</p>
              </div>
              <ArrowRight className="w-8 h-8 text-green-400 hidden md:block" />
              <div className="bg-gradient-to-br from-blue-900/60 to-transparent p-6 rounded-xl border border-blue-400/40 text-center min-w-[120px]">
                <Bot className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <p className="text-sm text-blue-200 font-medium">IA Qualifica</p>
              </div>
              <ArrowRight className="w-8 h-8 text-blue-400 hidden md:block" />
              <div className="bg-gradient-to-br from-amber-900/60 to-transparent p-6 rounded-xl border border-amber-400/40 text-center min-w-[120px]">
                <UserCheck className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="text-sm text-amber-200 font-medium">Vendedor Assume</p>
              </div>
              <ArrowRight className="w-8 h-8 text-amber-400 hidden md:block" />
              <div className="bg-gradient-to-br from-emerald-900/60 to-transparent p-6 rounded-xl border border-emerald-400/40 text-center min-w-[120px]">
                <Trophy className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-sm text-emerald-200 font-medium">Venda Fechada!</p>
              </div>
            </div>
          </div>
        </section>

        {/* O que Entregamos */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            O que Entregamos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Send, title: "Sistema de Disparos em Massa", desc: "Campanhas automatizadas com rotação de números", color: "purple" },
              { icon: Shield, title: "Rotação Anti-Bloqueio", desc: "250 msg/dia por instância - limite seguro", color: "fuchsia" },
              { icon: Bot, title: "Agente IA Especializado", desc: "Qualificação 24/7 com scripts VIVO", color: "blue" },
              { icon: UserCheck, title: "Transferência para Vendedores", desc: "Leads quentes direto para a equipe", color: "green" },
              { icon: BarChart3, title: "Dashboard Premium BI", desc: "Métricas em tempo real para diretoria", color: "indigo" },
              { icon: Headphones, title: "Suporte 24/7 + Gestor", desc: "Equipe dedicada ao seu sucesso", color: "violet" },
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${item.color}-900/40 to-transparent p-6 rounded-2xl border border-${item.color}-500/30 hover:scale-105 transition-transform`}>
                <item.icon className={`w-10 h-10 text-${item.color}-400 mb-4`} />
                <h3 className={`text-lg font-semibold text-${item.color}-300 mb-2`}>{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Métricas para Diretoria */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
            Métricas para Diretoria
          </h2>
          <div className="bg-gradient-to-r from-indigo-900/30 to-violet-900/30 p-8 rounded-2xl border border-indigo-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Send, label: "Disparos por campanha" },
                { icon: Target, label: "Taxa de resposta" },
                { icon: Bot, label: "Leads qualificados" },
                { icon: Users, label: "Performance por vendedor" },
                { icon: Trophy, label: "Ranking de vendedores" },
                { icon: TrendingUp, label: "ROI em tempo real" },
                { icon: BarChart3, label: "Funil de conversão" },
                { icon: Zap, label: "Campanhas ativas" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pacotes de Investimento */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            Pacotes de Investimento
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Starter */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl border-2 border-blue-400/30 hover:border-blue-400/60 transition-all">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/40 mb-4">STARTER</Badge>
              <p className="text-5xl font-bold text-blue-300 mb-1">R$ 18k</p>
              <p className="text-sm text-gray-400 mb-6">/mês</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Instâncias</span>
                  <span className="text-blue-300 font-bold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mensagens/mês</span>
                  <span className="text-blue-300 font-bold">~112.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vendedores</span>
                  <span className="text-blue-300 font-bold">Até 90</span>
                </div>
              </div>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-br from-purple-900/50 to-fuchsia-800/30 p-8 rounded-2xl border-2 border-purple-400/50 transform scale-105 shadow-2xl shadow-purple-500/20">
              <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50 mb-4">RECOMENDADO</Badge>
              <p className="text-5xl font-bold text-purple-300 mb-1">R$ 35k</p>
              <p className="text-sm text-gray-400 mb-6">/mês</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Instâncias</span>
                  <span className="text-purple-300 font-bold">35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mensagens/mês</span>
                  <span className="text-purple-300 font-bold">~262.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vendedores</span>
                  <span className="text-purple-300 font-bold">Até 180</span>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-800/20 p-8 rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40 mb-4">ENTERPRISE</Badge>
              <p className="text-5xl font-bold text-emerald-300 mb-1">R$ 55k</p>
              <p className="text-sm text-gray-400 mb-6">/mês</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Instâncias</span>
                  <span className="text-emerald-300 font-bold">55</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mensagens/mês</span>
                  <span className="text-emerald-300 font-bold">~412.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vendedores</span>
                  <span className="text-emerald-300 font-bold">270 (todos)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Setup */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-6 rounded-xl border border-yellow-400/30 text-center mb-8">
            <p className="text-sm text-gray-400 mb-1">Taxa de Setup (Única)</p>
            <p className="text-3xl font-bold text-yellow-400">R$ 5.000</p>
          </div>

          {/* Transparência de Custos */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-xl border border-slate-500/30 mb-8">
            <h4 className="text-center text-slate-200 mb-4 font-semibold flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-slate-400" />
              Transparência de Custos
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-2xl font-bold text-slate-300">R$ 1.000 - R$ 1.200</p>
                <p className="text-sm text-gray-400">por instância/mês</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-2xl font-bold text-slate-300">250 msg</p>
                <p className="text-sm text-gray-400">por dia/instância (limite seguro)</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-2xl font-bold text-slate-300">7.500 msg</p>
                <p className="text-sm text-gray-400">por mês/instância</p>
              </div>
            </div>
          </div>

          {/* Valor por Vendedor */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-violet-900/30 p-6 rounded-xl border border-indigo-400/30 mb-8">
            <h4 className="text-center text-indigo-200 mb-4 font-semibold flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              Valor Real por Vendedor
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-indigo-500/30">
                    <th className="text-left py-3 px-4 text-gray-400">Métrica</th>
                    <th className="text-center py-3 px-4 text-blue-300">Starter</th>
                    <th className="text-center py-3 px-4 text-purple-300">Professional</th>
                    <th className="text-center py-3 px-4 text-emerald-300">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-indigo-500/20">
                    <td className="py-3 px-4 text-gray-300">Custo por vendedor</td>
                    <td className="py-3 px-4 text-center text-blue-200 font-semibold">R$ 200/mês</td>
                    <td className="py-3 px-4 text-center text-purple-200 font-semibold">R$ 194/mês</td>
                    <td className="py-3 px-4 text-center text-emerald-200 font-semibold">R$ 204/mês</td>
                  </tr>
                  <tr className="border-b border-indigo-500/20">
                    <td className="py-3 px-4 text-gray-300">Mensagens por vendedor</td>
                    <td className="py-3 px-4 text-center text-blue-200">~1.250/mês</td>
                    <td className="py-3 px-4 text-center text-purple-200">~1.458/mês</td>
                    <td className="py-3 px-4 text-center text-emerald-200">~1.528/mês</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-300">Custo por mensagem</td>
                    <td className="py-3 px-4 text-center text-blue-200">R$ 0,16</td>
                    <td className="py-3 px-4 text-center text-purple-200">R$ 0,13</td>
                    <td className="py-3 px-4 text-center text-emerald-200">R$ 0,13</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-gradient-to-r from-green-500/30 to-emerald-500/30 p-6 rounded-2xl border-2 border-green-400/50 text-center shadow-lg shadow-green-500/20 animate-pulse-slow">
              <p className="text-green-300 font-bold text-2xl md:text-3xl mb-2">
                💡 Menos de R$ 7 por dia por vendedor
              </p>
              <p className="text-green-200 text-lg">
                para ter IA + disparos + dashboard completo!
              </p>
            </div>
          </div>
        </section>

        {/* Comparativo Manual vs IA */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-200">
            Processo Manual vs Nossa Solução
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Processo Manual */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-8 rounded-2xl border-2 border-red-500/30">
              <h3 className="text-xl font-bold text-red-300 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Processo Manual Atual
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <p className="font-semibold">2-3 minutos por contato</p>
                    <p className="text-sm text-gray-400">Digitando mensagem manualmente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <p className="font-semibold">~50-80 contatos/dia</p>
                    <p className="text-sm text-gray-400">Por vendedor, no máximo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Vendedor ocupado prospectando</p>
                    <p className="text-sm text-gray-400">Em vez de focar em fechar vendas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Sem métricas centralizadas</p>
                    <p className="text-sm text-gray-400">Diretoria no escuro</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Apenas horário comercial</p>
                    <p className="text-sm text-gray-400">Leads perdidos fora do expediente</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Nossa Solução */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-800/20 p-8 rounded-2xl border-2 border-green-500/30">
              <h3 className="text-xl font-bold text-green-300 mb-6 flex items-center gap-2">
                <Bot className="w-6 h-6" />
                Nossa Solução IA
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Disparo instantâneo</p>
                    <p className="text-sm text-gray-400">Automático e em massa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="font-semibold">+1.500 contatos/mês por vendedor</p>
                    <p className="text-sm text-gray-400">Escalável com mais instâncias</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Vendedor foca em fechar</p>
                    <p className="text-sm text-gray-400">Recebe apenas leads qualificados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Dashboard completo</p>
                    <p className="text-sm text-gray-400">Métricas em tempo real para diretoria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="font-semibold">IA atende 24/7</p>
                    <p className="text-sm text-gray-400">Nunca perde um lead</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-purple-400/30 text-center">
            <p className="text-purple-300 font-bold text-2xl">
              🚀 Vendedor livre para vender, IA cuida da prospecção!
            </p>
          </div>
        </section>

        {/* Condições */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <Clock className="w-12 h-12 text-cyan-400" />
                <div>
                  <p className="text-2xl font-bold text-cyan-300">6 meses</p>
                  <p className="text-gray-400">Contrato mínimo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TrendingUp className="w-12 h-12 text-green-400" />
                <div>
                  <p className="text-2xl font-bold text-green-300">Upgrade Flexível</p>
                  <p className="text-gray-400">Aumente instâncias a qualquer momento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-br from-purple-900/40 via-fuchsia-900/30 to-purple-900/40 p-12 rounded-3xl border-2 border-purple-400/40">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Pronto para escalar suas vendas? 🚀
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos revolucionar a prospecção da Evolua Digital!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/evolua-digital'}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold py-6 px-10 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-lg"
              >
                <FileText className="w-6 h-6 mr-2" />
                Ver Proposta Completa
              </Button>
              <Button 
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-6 px-10 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Falar com Consultor
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 FluxRow • Apresentação Comercial Evolua Digital
          </p>
        </footer>
      </div>
    </div>
  );
}