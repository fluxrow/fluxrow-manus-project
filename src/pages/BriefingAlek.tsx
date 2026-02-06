import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Video, 
  Camera, 
  Clock, 
  Headphones, 
  Music, 
  Volume2, 
  VolumeX,
  Clapperboard,
  Settings,
  CheckCircle2,
  Users,
  Sparkles,
  Eye,
  Zap,
  Film,
  Image,
  FileVideo,
  FileImage
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BackToHomeButton from '@/components/ui/BackToHomeButton';

const BriefingAlek = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <BackToHomeButton />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header Principal */}
        <header className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-300 mb-4">
            Briefing de Produção
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3">
            Projeto Seara x Promova
          </h1>
          <p className="text-xl text-gray-400 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-violet-400" />
            Tauá Resort & Convention — Atibaia/SP
          </p>
          <p className="text-lg text-cyan-400 mt-2 font-medium">
            Produtora: Alek
          </p>
        </header>

        {/* Contexto Geral */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              Contexto Geral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Local</p>
                <p className="text-white font-medium">Tauá Resort & Convention</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Endereço</p>
                <p className="text-white font-medium">Rod. Dom Pedro I, Km 86</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Cliente Final</p>
                <p className="text-white font-medium">Seara</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Agência</p>
                <p className="text-white font-medium">Promova</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cronograma Visual */}
        <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>
              Cronograma de Captação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Dia 08 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 08
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Making Off</h4>
                  <p className="text-gray-300 text-sm mb-3">Montagem e bastidores</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>2h vídeo + foto</span>
                  </div>
                </div>
              </div>

              {/* Dia 10 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 10
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Evento Oficial</h4>
                  <p className="text-gray-300 text-sm mb-3">Captação principal</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>4h vídeo + foto</span>
                  </div>
                </div>
              </div>

              {/* Dia 11 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 11
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Evento Oficial</h4>
                  <p className="text-gray-300 text-sm mb-3">Captação principal</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>4h vídeo + foto</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vídeo 01 - Promova */}
        <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Video className="w-5 h-5 text-cyan-400" />
              </div>
              Vídeo 01 — Promova
              <span className="ml-auto px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                Institucional
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Conceito */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border-l-4 border-cyan-500">
              <p className="text-sm text-cyan-300 mb-1">Conceito Criativo</p>
              <p className="text-2xl font-bold text-white">"Do zero ao extraordinário."</p>
            </div>

            {/* Captação */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Clapperboard className="w-5 h-5 text-cyan-400" />
                Captação — Dia 08 (2h)
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Equipe descarregando/montando',
                  'Close em detalhes técnicos',
                  'Interação do time',
                  'Timelapse / planos acelerados',
                  'Expressões humanas (foco, concentração)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estilo de Câmera */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                Estilo de Câmera
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Dinâmico', 'Planos fechados + médios', 'Gimbal sempre que possível', 'Estética documental'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* DESTAQUE ESPECIAL - Áudio e Edição */}
            <div className="relative p-6 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-violet-500/20 rounded-2xl border-2 border-cyan-400/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Áudio & Edição</h4>
                  <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/50 animate-pulse">
                    DESTAQUE
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Fase 1 - ASMR */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-purple-500/20 rounded-lg">
                        <VolumeX className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">INÍCIO (0:00 - ~0:30)</p>
                        <p className="text-purple-300 text-sm">Modo ASMR / Som Ambiente</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-purple-300">SEM trilha sonora.</strong> Foco total nos sons reais:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Ferramentas sendo usadas',
                        'Passos no chão',
                        'Estruturas encaixando',
                        'Conversas abafadas',
                        'Fitas sendo puxadas',
                        'Metal batendo'
                      ].map((som, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {som}
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-purple-300 italic">
                      Sensação: intimidade, realidade, "estar lá"
                    </p>
                  </div>

                  {/* Transição */}
                  <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/40">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-yellow-500/20 rounded-lg">
                        <Zap className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold">TRANSIÇÃO (~0:30)</p>
                        <p className="text-yellow-300 text-lg font-bold">"O PAU TORA"</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1 ml-10">
                      <li>• Trilha entra de forma <strong className="text-yellow-300">IMPACTANTE</strong></li>
                      <li>• Coincidir com um corte forte</li>
                      <li>• Sincronizar com ação: luz acendendo, estrutura subindo, porta abrindo</li>
                    </ul>
                  </div>

                  {/* Fase 2 - Trilha */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-cyan-500/20 rounded-lg">
                        <Music className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">RESTANTE (~0:30 - 1:30)</p>
                        <p className="text-cyan-300 text-sm">Trilha Forte + Ritmo Acelerado</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Música crescente', 'Cortes rápidos', 'Transições modernas', 'Final épico'].map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nota de Captação de Áudio */}
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                    <strong className="text-cyan-300">Nota:</strong> Gravar áudio ambiente LIMPO durante a montagem. Microfone captando detalhes sonoros.
                  </p>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="flex flex-wrap gap-3 p-4 bg-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Film className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Vertical 9:16</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Até 1min30</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Instagram / LinkedIn / Portfólio</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vídeo 02 - Seara */}
        <Card className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border-violet-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <Video className="w-5 h-5 text-violet-400" />
              </div>
              Vídeo 02 — Seara
              <span className="ml-auto px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">
                Aftermovie
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Conceito */}
            <div className="p-4 bg-gradient-to-r from-violet-500/10 to-transparent rounded-xl border-l-4 border-violet-500">
              <p className="text-sm text-violet-300 mb-1">Conceito Criativo</p>
              <p className="text-2xl font-bold text-white">"A experiência vivida."</p>
            </div>

            {/* Captação */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Clapperboard className="w-5 h-5 text-violet-400" />
                Captação — Dias 10 e 11 (4h + 4h)
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Visão geral do evento (planos abertos)',
                  'Detalhes cenografia/iluminação',
                  'Pessoas interagindo com o espaço',
                  'Reações espontâneas',
                  'Close em elementos da marca Seara',
                  'Momentos-chave (pico de público, ativações)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estilo de Câmera */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-violet-400" />
                Estilo de Câmera
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Cinematográfico', 'Planos abertos + closes sensoriais', 'Movimento suave', 'Estética premium'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-violet-500/20 text-violet-300 text-sm rounded-full border border-violet-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Edição */}
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Music className="w-5 h-5 text-violet-400" />
                Edição
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Ritmo envolvente', 'Música com identidade forte', 'Foco em experiência real', 'Sem excesso de efeitos'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-violet-500/10 text-violet-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Entrega */}
            <div className="flex flex-wrap gap-3 p-4 bg-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Film className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Vertical 9:16</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Clock className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Até 1min30</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Institucional Seara</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fotografia */}
        <Card className="bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border-teal-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <Camera className="w-5 h-5 text-teal-400" />
              </div>
              Fotografia
              <span className="ml-auto px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                Todos os dias
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Especificações</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Image className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Até 50 fotos/dia</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Eye className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Estilo documental + institucional</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Film className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Verticais prioritariamente</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Foco nas Fotos</h4>
                <div className="space-y-2">
                  {['Pessoas', 'Detalhes', 'Ambiente', 'Marca aplicada'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Especificações Técnicas */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-600/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-slate-500/20 rounded-lg">
                <Settings className="w-5 h-5 text-slate-400" />
              </div>
              Especificações Técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FileVideo className="w-5 h-5 text-slate-400" />
                  Vídeos
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Formato</span>
                    <span className="text-white text-sm font-medium">MP4 / H.264 ou H.265</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Resolução</span>
                    <span className="text-white text-sm font-medium">4K</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Aspecto</span>
                    <span className="text-white text-sm font-medium">9:16 (vertical)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <span className="text-cyan-300 text-sm">Áudio</span>
                    <span className="text-cyan-200 text-sm font-medium">Som ambiente limpo!</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FileImage className="w-5 h-5 text-slate-400" />
                  Fotos
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Formato</span>
                    <span className="text-white text-sm font-medium">JPEG alta resolução</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">RAW</span>
                    <span className="text-white text-sm font-medium">Sob consulta</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Resumo */}
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Dia 08 */}
          <div className="p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-bold text-white">Dia 08</h4>
            </div>
            <div className="space-y-2">
              {['2h captação vídeo', 'Fotos making off', 'Áudio ambiente limpo', 'Timelapse montagem'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-amber-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dia 10 */}
          <div className="p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-violet-400" />
              <h4 className="text-lg font-bold text-white">Dia 10</h4>
            </div>
            <div className="space-y-2">
              {['4h captação vídeo', 'Até 50 fotos', 'Planos abertos evento', 'Interações público'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-violet-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dia 11 */}
          <div className="p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-violet-400" />
              <h4 className="text-lg font-bold text-white">Dia 11</h4>
            </div>
            <div className="space-y-2">
              {['4h captação vídeo', 'Até 50 fotos', 'Momentos-chave', 'Close marca Seara'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-violet-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Briefing Produção Alek — Projeto Seara x Promova — Tauá Resort Atibaia
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BriefingAlek;
