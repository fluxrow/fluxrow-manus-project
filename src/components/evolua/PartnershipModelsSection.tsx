import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, GraduationCap, Rocket, Clock, Users, Shield, BookOpen, Zap } from 'lucide-react';

export default function PartnershipModelsSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Duas Formas de Parceria
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Escolha o modelo que faz mais sentido para a realidade da Evolua
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Success Fee Card */}
        <Card className="border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-sm relative overflow-hidden hover:border-purple-400/60 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500"></div>
          <CardHeader className="pb-4">
            <Badge className="w-fit mb-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-0">
              <Rocket className="w-3 h-3 mr-1" />
              Resultado Rápido
            </Badge>
            <CardTitle className="text-2xl flex items-center gap-3">
              <DollarSign className="w-7 h-7 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                Nós Operamos
              </span>
            </CardTitle>
            <p className="text-gray-400 text-sm">Success Fee - Operação + Comissão</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              Assumimos toda a operação técnica. Vocês focam exclusivamente em <span className="text-purple-300 font-semibold">vender e fechar contratos</span>.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <span>Sistema funcionando em 4-5 semanas</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <span>Zero preocupação técnica para vocês</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-400" />
                </div>
                <span>Alinhamento de interesses no resultado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consultoria Card */}
        <Card className="border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm relative overflow-hidden hover:border-cyan-400/60 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"></div>
          <CardHeader className="pb-4">
            <Badge className="w-fit mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
              <BookOpen className="w-3 h-3 mr-1" />
              Independência Total
            </Badge>
            <CardTitle className="text-2xl flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Vocês Aprendem
              </span>
            </CardTitle>
            <p className="text-gray-400 text-sm">Consultoria Técnica - Capacitação Completa</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              Capacitamos sua equipe para <span className="text-cyan-300 font-semibold">construir e operar internamente</span>. O conhecimento fica na empresa.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <span>Programa de 3 meses (72h de sessões)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>
                <span>Equipe técnica 100% capacitada</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <span>Sem dependência de terceiros</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
