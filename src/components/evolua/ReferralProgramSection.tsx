import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Users, 
  Percent, 
  ArrowRight,
  Trophy,
  Building2
} from 'lucide-react';

export default function ReferralProgramSection() {
  return (
    <section className="mb-16">
      <Card className="border-2 border-amber-500/40 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>
        
        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 px-4 py-2">
            <Gift className="w-4 h-4 mr-2" />
            Bônus Exclusivo
          </Badge>
          <CardTitle className="text-2xl md:text-3xl text-white">
            Programa de Indicações
          </CardTitle>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            A Evolua é referência regional — transformem isso em economia real
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Como Funciona */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl border border-amber-500/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className="font-semibold text-amber-300 mb-2">1 Indicação</h4>
              <p className="text-3xl font-bold text-white mb-1">5%</p>
              <p className="text-sm text-gray-400">de desconto na mensalidade</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-900/30 to-transparent rounded-2xl border border-orange-500/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 to-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-orange-400" />
              </div>
              <h4 className="font-semibold text-orange-300 mb-2">2 Indicações</h4>
              <p className="text-3xl font-bold text-white mb-1">10%</p>
              <p className="text-sm text-gray-400">de desconto na mensalidade</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-900/30 to-transparent rounded-2xl border border-yellow-500/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-7 h-7 text-yellow-400" />
              </div>
              <h4 className="font-semibold text-yellow-300 mb-2">3 Indicações</h4>
              <p className="text-3xl font-bold text-white mb-1">15%</p>
              <p className="text-sm text-gray-400">máximo de desconto</p>
            </div>
          </div>

          {/* Por que funciona */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-2xl border border-slate-600/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white mb-2">
                  Por Que Isso Funciona Para a Evolua?
                </h4>
                <p className="text-gray-300">
                  Vocês já recebem visitas de <span className="text-amber-300 font-semibold">empresas menores do mesmo ramo</span> querendo ver 
                  suas ferramentas e sistemas. Cada indicação gera desconto real no contrato — 
                  vocês economizam enquanto ajudam parceiros a crescer também.
                </p>
              </div>
            </div>
          </div>

          {/* Regras */}
          <div className="text-center text-sm text-gray-400">
            <p>
              <span className="text-amber-300">*</span> Indicações válidas para empresas do mesmo ramo (distribuição/revenda de telecomunicações) 
              que fechem contrato conosco. Desconto aplicado sobre a mensalidade durante o período do contrato.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
