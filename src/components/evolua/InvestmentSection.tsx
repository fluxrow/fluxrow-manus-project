import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  DollarSign, 
  GraduationCap, 
  Star, 
  Zap, 
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Rocket,
  Calendar
} from 'lucide-react';

export default function InvestmentSection() {
  const [openSuccessFee, setOpenSuccessFee] = useState(false);
  const [openConsultoria, setOpenConsultoria] = useState(false);

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Investimento
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Valores transparentes para cada modelo de parceria
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card Success Fee */}
        <Card className="border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-sm shadow-2xl shadow-purple-500/20 relative overflow-hidden hover:border-purple-400/60 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500"></div>
          <CardHeader className="pb-4">
            <Badge className="w-fit mb-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Parceria de Resultado
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
                  Ver pacotes de volume
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
              <p className="text-4xl font-bold text-white mb-1">R$ 28.220</p>
              <p className="text-cyan-300 font-semibold">Programa de 3 meses</p>
              <p className="text-sm text-gray-400 mt-2">72h de sessões (presencial ou via meeting)</p>
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
                  Ver parcelamento
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
                      <span className="text-cyan-300">R$ 11.288</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>30% no início do mês 2</span>
                      <span className="text-cyan-300">R$ 8.466</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>30% na entrega final</span>
                      <span className="text-cyan-300">R$ 8.466</span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
