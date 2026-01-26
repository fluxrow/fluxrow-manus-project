import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Star, 
  Award, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Calendar,
  Phone,
  Bot,
  ArrowRight,
  Shield,
  UserCheck,
  Send,
  Trophy,
  GraduationCap,
  Rocket,
  ChevronDown,
  ChevronUp,
  Database,
  Code,
  Cpu,
  Mail,
  FileSpreadsheet,
  Plug,
  BookOpen,
  Video,
  Headphones,
  CheckCheck
} from 'lucide-react';

export default function PropostaEvoluaDigital() {
  const [openSuccessFee, setOpenSuccessFee] = useState(false);
  const [openConsultoria, setOpenConsultoria] = useState(false);

  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a nova proposta para Evolua Digital e gostaria de conversar sobre as opções de parceria!`;
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
              Nova Proposta Flexível ✨
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
            Olá, <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Alisson</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para <span className="text-purple-300 font-semibold">Evolua Digital</span> - Distribuidora VIVO
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Após nossa conversa, preparamos duas opções flexíveis que se encaixam na realidade da Evolua.
          </p>
        </div>

        {/* Dois Cards Principais - Success Fee e Consultoria */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card Success Fee */}
          <Card className="border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-sm shadow-2xl shadow-purple-500/20 relative overflow-hidden hover:border-purple-400/60 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500"></div>
            <CardHeader className="pb-4">
              <Badge className="w-fit mb-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                <Star className="w-3 h-3 mr-1" />
                Preferido pela Diretoria
              </Badge>
              <CardTitle className="text-2xl flex items-center gap-3">
                <DollarSign className="w-7 h-7 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">Success Fee</span>
              </CardTitle>
              <p className="text-gray-400 text-sm">Operação + Comissão por Resultado</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-4 bg-gradient-to-br from-purple-900/40 to-transparent rounded-xl border border-purple-500/30">
                <p className="text-4xl font-bold text-white mb-1">R$ 8.000<span className="text-lg text-gray-400">/mês</span></p>
                <p className="text-purple-300 font-semibold">+ 1.5% por contrato fechado</p>
                <p className="text-sm text-gray-400 mt-2">Setup: R$ 5.000 (único)</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Nós operamos tudo por vocês</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Vocês focam em vender</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Zero risco técnico</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>3 pacotes de volume disponíveis</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Alinhamento de interesses</span>
                </li>
              </ul>

              <Collapsible open={openSuccessFee} onOpenChange={setOpenSuccessFee}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30">
                    {openSuccessFee ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                    Ver detalhes completos
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="bg-gradient-to-br from-slate-800/50 to-transparent p-4 rounded-xl border border-slate-600/30">
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-purple-400" />
                      Pacotes de Volume
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                        <div>
                          <p className="font-semibold text-purple-300">Starter</p>
                          <p className="text-sm text-gray-400">~112k mensagens/mês • 15 instâncias</p>
                        </div>
                        <p className="text-white font-bold">R$ 8.000</p>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-fuchsia-900/30 rounded-lg border border-fuchsia-500/30">
                        <div>
                          <p className="font-semibold text-fuchsia-300">Professional</p>
                          <p className="text-sm text-gray-400">~262k mensagens/mês • 35 instâncias</p>
                        </div>
                        <p className="text-white font-bold">R$ 12.000</p>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-violet-900/30 rounded-lg border border-violet-500/30">
                        <div>
                          <p className="font-semibold text-violet-300">Enterprise</p>
                          <p className="text-sm text-gray-400">~412k mensagens/mês • 55 instâncias</p>
                        </div>
                        <p className="text-white font-bold">R$ 16.000</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Card Consultoria */}
          <Card className="border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 relative overflow-hidden hover:border-cyan-400/60 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"></div>
            <CardHeader className="pb-4">
              <Badge className="w-fit mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-lg">
                <Zap className="w-3 h-3 mr-1" />
                Independência Total
              </Badge>
              <CardTitle className="text-2xl flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Consultoria Técnica</span>
              </CardTitle>
              <p className="text-gray-400 text-sm">Programa de Capacitação Completa</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-4 bg-gradient-to-br from-cyan-900/40 to-transparent rounded-xl border border-cyan-500/30">
                <p className="text-4xl font-bold text-white mb-1">R$ 25.000</p>
                <p className="text-cyan-300 font-semibold">Programa de 3 meses</p>
                <p className="text-sm text-gray-400 mt-2">48-72h de sessões ao vivo</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Conhecimento fica na empresa</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Equipe técnica capacitada</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Documentação + gravações</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Templates e código base</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Suporte durante o período</span>
                </li>
              </ul>

              <Collapsible open={openConsultoria} onOpenChange={setOpenConsultoria}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/30">
                    {openConsultoria ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                    Ver detalhes completos
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="bg-gradient-to-br from-slate-800/50 to-transparent p-4 rounded-xl border border-slate-600/30">
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      Parcelamento
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>40% na assinatura</span>
                        <span className="text-cyan-300">R$ 10.000</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>30% no início do mês 2</span>
                        <span className="text-cyan-300">R$ 7.500</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>30% na entrega final</span>
                        <span className="text-cyan-300">R$ 7.500</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>

        {/* Tabela Comparativa */}
        <Card className="border-2 border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BarChart3 className="w-7 h-7 text-slate-400" />
              <span className="text-white">Comparativo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Aspecto</th>
                    <th className="text-center py-3 px-4 text-purple-300 font-medium">Success Fee</th>
                    <th className="text-center py-3 px-4 text-cyan-300 font-medium">Consultoria</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-700/30">
                    <td className="py-3 px-4 text-gray-300">Investimento inicial</td>
                    <td className="py-3 px-4 text-center text-purple-200">R$ 5.000 (setup)</td>
                    <td className="py-3 px-4 text-center text-cyan-200">R$ 10.000 (40%)</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="py-3 px-4 text-gray-300">Investimento mensal</td>
                    <td className="py-3 px-4 text-center text-purple-200">R$ 8k-16k + 1.5% fee</td>
                    <td className="py-3 px-4 text-center text-cyan-200">Parcelado (3 meses)</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="py-3 px-4 text-gray-300">Quem opera</td>
                    <td className="py-3 px-4 text-center text-purple-200">Nós operamos</td>
                    <td className="py-3 px-4 text-center text-cyan-200">Vocês operam</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="py-3 px-4 text-gray-300">Dependência técnica</td>
                    <td className="py-3 px-4 text-center text-purple-200">Alta (nós cuidamos)</td>
                    <td className="py-3 px-4 text-center text-cyan-200">Zero (vocês sabem)</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="py-3 px-4 text-gray-300">Tempo para resultado</td>
                    <td className="py-3 px-4 text-center text-purple-200">4-5 semanas</td>
                    <td className="py-3 px-4 text-center text-cyan-200">3 meses</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-300">Ideal para</td>
                    <td className="py-3 px-4 text-center text-purple-200">Resultado rápido</td>
                    <td className="py-3 px-4 text-center text-cyan-200">Autonomia total</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes Success Fee */}
        <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <DollarSign className="w-7 h-7 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">Detalhes: Success Fee</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* O que está incluso */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-900/40 to-transparent p-5 rounded-xl border border-purple-500/30">
                <h5 className="font-semibold text-purple-300 mb-4 flex items-center gap-2">
                  <CheckCheck className="w-5 h-5" />
                  O Que Está Incluso
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Operação completa do sistema de disparos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Manutenção e monitoramento das instâncias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Agente IA configurado e otimizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Dashboard de acompanhamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Suporte técnico contínuo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Relatórios mensais de performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Otimizações contínuas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-900/40 to-transparent p-5 rounded-xl border border-fuchsia-500/30">
                <h5 className="font-semibold text-fuchsia-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Projeção de Fee (1.5%)
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                    <span className="text-gray-400">Conservador (100 contratos)</span>
                    <span className="text-fuchsia-300">+R$ 225/mês</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                    <span className="text-gray-400">Moderado (300 contratos)</span>
                    <span className="text-fuchsia-300">+R$ 900/mês</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                    <span className="text-gray-400">Otimista (500 contratos)</span>
                    <span className="text-fuchsia-300">+R$ 1.500/mês</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  *Considerando ticket médio de R$ 150-200 por contrato
                </p>
              </div>
            </div>

            {/* Sistema Anti-Bloqueio */}
            <div className="bg-gradient-to-r from-purple-900/40 to-fuchsia-900/30 p-6 rounded-xl border border-purple-400/30">
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
            </div>

            {/* Fluxo Visual */}
            <div>
              <h5 className="font-semibold mb-4 text-lg text-gray-200 text-center">📋 Como Funciona:</h5>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-purple-900/50 to-transparent p-4 rounded-xl border border-purple-400/30 text-center min-w-[120px]">
                  <Send className="w-7 h-7 text-purple-400 mx-auto mb-2" />
                  <p className="text-xs text-purple-200 font-medium">1. Disparo</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 hidden md:block" />
                <div className="bg-gradient-to-br from-green-900/50 to-transparent p-4 rounded-xl border border-green-400/30 text-center min-w-[120px]">
                  <MessageCircle className="w-7 h-7 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-green-200 font-medium">2. Resposta</p>
                </div>
                <ArrowRight className="w-5 h-5 text-green-400 hidden md:block" />
                <div className="bg-gradient-to-br from-blue-900/50 to-transparent p-4 rounded-xl border border-blue-400/30 text-center min-w-[120px]">
                  <Bot className="w-7 h-7 text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-blue-200 font-medium">3. IA Qualifica</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 hidden md:block" />
                <div className="bg-gradient-to-br from-amber-900/50 to-transparent p-4 rounded-xl border border-amber-400/30 text-center min-w-[120px]">
                  <UserCheck className="w-7 h-7 text-amber-400 mx-auto mb-2" />
                  <p className="text-xs text-amber-200 font-medium">4. Vendedor</p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-400 hidden md:block" />
                <div className="bg-gradient-to-br from-emerald-900/50 to-transparent p-4 rounded-xl border border-emerald-400/30 text-center min-w-[120px]">
                  <Trophy className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs text-emerald-200 font-medium">5. Venda!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes Consultoria */}
        <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Detalhes: Consultoria Técnica</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Formato */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/40 to-transparent p-4 rounded-xl border border-cyan-500/30 text-center">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-cyan-300">3</p>
                <p className="text-sm text-gray-400">meses</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/40 to-transparent p-4 rounded-xl border border-blue-500/30 text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-300">2x</p>
                <p className="text-sm text-gray-400">por semana</p>
              </div>
              <div className="bg-gradient-to-br from-teal-900/40 to-transparent p-4 rounded-xl border border-teal-500/30 text-center">
                <Video className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-teal-300">2-3h</p>
                <p className="text-sm text-gray-400">por sessão</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/40 to-transparent p-4 rounded-xl border border-indigo-500/30 text-center">
                <Users className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-300">3</p>
                <p className="text-sm text-gray-400">participantes</p>
              </div>
            </div>

            {/* Stack Técnica */}
            <div className="bg-gradient-to-br from-slate-800/50 to-transparent p-5 rounded-xl border border-slate-600/30">
              <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Stack Técnica que Será Ensinada
              </h5>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">PostgreSQL (Banco de Dados)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300 text-sm">Edge Functions (TypeScript)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 text-sm">React + TypeScript (Frontend)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Low-code + Funções Serverless</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">WhatsApp API (Oficial + Não-oficial)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Bot className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300 text-sm">OpenAI API (IA para qualificação)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300 text-sm">Resend (Email Marketing)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 text-sm">CSV, APIs externas, CRMs</span>
                </div>
              </div>
            </div>

            {/* Cronograma */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Cronograma de 3 Meses
              </h5>
              
              {/* Mês 1 */}
              <div className="bg-gradient-to-r from-blue-900/40 to-transparent p-5 rounded-xl border border-blue-500/30">
                <h6 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <Badge className="bg-blue-500/30 text-blue-200 border-blue-500/50">Mês 1</Badge>
                  Fundamentos + Backend
                </h6>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 1-2: Banco de Dados</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• PostgreSQL/SQL avançado</li>
                      <li>• Modelagem para CRM e prospecção</li>
                      <li>• Migrations e versionamento</li>
                      <li>• Estrutura de leads e campanhas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 3-4: Backend</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Edge Functions (TypeScript)</li>
                      <li>• APIs REST e webhooks</li>
                      <li>• Autenticação e segurança</li>
                      <li>• Filas e processamento assíncrono</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mês 2 */}
              <div className="bg-gradient-to-r from-purple-900/40 to-transparent p-5 rounded-xl border border-purple-500/30">
                <h6 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                  <Badge className="bg-purple-500/30 text-purple-200 border-purple-500/50">Mês 2</Badge>
                  WhatsApp + Automação
                </h6>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 5-6: WhatsApp e Meta</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• WhatsApp Business API (oficial)</li>
                      <li>• Verificação Meta Business</li>
                      <li>• APIs não-oficiais e contingência</li>
                      <li>• Rotação e anti-bloqueio</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 7-8: Automação</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Fluxos low-code + Edge Functions</li>
                      <li>• Conexão com APIs (CRMs, ERPs)</li>
                      <li>• Importação e processamento de CSV</li>
                      <li>• Chaves de API e segurança</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mês 3 */}
              <div className="bg-gradient-to-r from-emerald-900/40 to-transparent p-5 rounded-xl border border-emerald-500/30">
                <h6 className="font-semibold text-emerald-300 mb-3 flex items-center gap-2">
                  <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-500/50">Mês 3</Badge>
                  IA + Interface + Go-live
                </h6>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 9-10: Inteligência Artificial</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• OpenAI API (GPT para qualificação)</li>
                      <li>• Prompt engineering para vendas</li>
                      <li>• Contexto e memória de conversas</li>
                      <li>• Otimização de custos</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2 font-medium">Semana 11-12: Frontend + Go-live</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Dashboard React/TypeScript</li>
                      <li>• Gráficos e métricas (Recharts)</li>
                      <li>• Email marketing com Resend</li>
                      <li>• Testes finais e lançamento</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Entregáveis */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/30 to-transparent p-4 rounded-xl border border-cyan-500/30">
                <h5 className="font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Entregáveis
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Documentação técnica completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Templates e código base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Prompts de IA otimizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Scripts de importação CSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Gravações de todas as sessões</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-4 rounded-xl border border-blue-500/30">
                <h5 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Suporte Pós-Implementação
                </h5>
                <p className="text-sm text-gray-400 mb-3">Opcional: R$ 3.000/mês</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>4h de consultoria/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Respostas em até 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Code review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Troubleshooting</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="border-2 border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <MessageCircle className="w-7 h-7 text-slate-400" />
              <span className="text-white">Perguntas Frequentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">Qual modelo é melhor para a Evolua?</p>
              <p className="text-gray-400 text-sm">
                Se o objetivo é resultado rápido sem preocupação técnica, o <span className="text-purple-300">Success Fee</span> é ideal. 
                Se a empresa quer construir capacidade interna e não depender de terceiros, a <span className="text-cyan-300">Consultoria</span> faz mais sentido.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">Posso começar com um pacote menor e aumentar?</p>
              <p className="text-gray-400 text-sm">
                Sim! No modelo Success Fee, você pode começar com o Starter (~112k mensagens) e aumentar conforme os resultados aparecerem.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">E se precisar de ambos?</p>
              <p className="text-gray-400 text-sm">
                Podemos combinar! Exemplo: começar com Success Fee para resultado imediato e depois fazer a consultoria para transferir o conhecimento.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">Quantos participantes podem acompanhar a consultoria?</p>
              <p className="text-gray-400 text-sm">
                Até 3 pessoas da equipe técnica podem participar das sessões ao vivo. Todos terão acesso às gravações.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <Card className="border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-sm shadow-2xl shadow-purple-500/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Vamos Conversar?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Ficou com alguma dúvida ou quer discutir qual modelo faz mais sentido para a Evolua? 
              Estou à disposição para uma conversa rápida.
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Respondo em até 2 horas em horário comercial
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Esta proposta foi preparada exclusivamente para <span className="text-purple-400">Evolua Digital</span></p>
          <p className="mt-1">Válida por 15 dias • Janeiro 2025</p>
        </div>
      </div>
    </div>
  );
}
