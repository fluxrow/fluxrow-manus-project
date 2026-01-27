import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, GraduationCap, Gift, ArrowRight, MapPin, Users } from 'lucide-react';

export default function HybridProposalSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-4 py-2">
          <Rocket className="w-4 h-4 mr-2" />
          Modelo Híbrido
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Parceria de 6 Meses com{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Transferência Total
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Operamos junto, ensinamos durante, vocês ficam com tudo no final
        </p>
      </div>

      {/* 3 Pilares */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Pilar 1 - Operação */}
        <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10 backdrop-blur-sm relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
          <CardHeader className="pb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-7 h-7 text-purple-400" />
            </div>
            <CardTitle className="text-xl text-white">Operação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">
              Colocamos o sistema para funcionar e <span className="text-purple-300 font-semibold">geramos resultados</span> desde o primeiro mês. Vocês focam em vender.
            </p>
          </CardContent>
        </Card>

        {/* Pilar 2 - Capacitação */}
        <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <CardHeader className="pb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
            </div>
            <CardTitle className="text-xl text-white">Capacitação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">
              Treinamos a equipe <span className="text-cyan-300 font-semibold">presencialmente na Evolua</span>. Mostramos na prática as ferramentas que usamos.
            </p>
          </CardContent>
        </Card>

        {/* Pilar 3 - Transferência */}
        <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          <CardHeader className="pb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Gift className="w-7 h-7 text-emerald-400" />
            </div>
            <CardTitle className="text-xl text-white">Transferência</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">
              Código-fonte, documentação e <span className="text-emerald-300 font-semibold">independência total</span>. O sistema passa a ser de vocês.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Destaque Presencial */}
      <Card className="border-2 border-amber-500/30 bg-gradient-to-r from-amber-900/20 to-orange-900/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                Implementação e Treinamento Presenciais na Evolua
              </h4>
              <p className="text-gray-300">
                Nossa equipe vai até vocês. Mostramos <span className="text-amber-300 font-semibold">na prática</span> as ferramentas 
                e ensinamos como criar e evoluir o sistema.
              </p>
            </div>
            <div className="flex items-center gap-2 text-amber-300 font-semibold flex-shrink-0">
              <Users className="w-5 h-5" />
              <span>Lado a lado</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
