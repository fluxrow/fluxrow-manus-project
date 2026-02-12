import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { propostas, statusLabels, contratoStatusLabels, type PropostaItem } from '@/data/propostas';
import { Lock, FileText, ScrollText, Search, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ADMIN_PIN = '2907';
const SESSION_KEY = 'propostas_auth';

function PinScreen({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === ADMIN_PIN) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        onSuccess();
      } else {
        setError(true);
        setTimeout(() => { setPin(''); setError(false); }, 1000);
      }
    }
  }, [pin, onSuccess]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Lock className="w-7 h-7 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Painel de Propostas</h1>
          <p className="text-white/50 text-sm">Digite o PIN para acessar</p>
        </div>
        <div className="flex justify-center">
          <InputOTP maxLength={4} value={pin} onChange={setPin}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className={`bg-white/5 border-white/20 text-white text-lg w-14 h-14 ${error ? 'border-red-500 animate-pulse' : ''}`} />
              <InputOTPSlot index={1} className={`bg-white/5 border-white/20 text-white text-lg w-14 h-14 ${error ? 'border-red-500 animate-pulse' : ''}`} />
              <InputOTPSlot index={2} className={`bg-white/5 border-white/20 text-white text-lg w-14 h-14 ${error ? 'border-red-500 animate-pulse' : ''}`} />
              <InputOTPSlot index={3} className={`bg-white/5 border-white/20 text-white text-lg w-14 h-14 ${error ? 'border-red-500 animate-pulse' : ''}`} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        {error && <p className="text-red-400 text-sm">PIN incorreto</p>}
      </div>
    </div>
  );
}

function statusColor(status: PropostaItem['status']) {
  switch (status) {
    case 'aprovada': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'em_negociacao': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'recusada': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-white/10 text-white/60 border-white/20';
  }
}

function contratoColor(status?: string) {
  switch (status) {
    case 'assinado_ambas': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'assinado_contratante': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    case 'pendente': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    default: return 'bg-white/5 text-white/30 border-white/10';
  }
}

function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = propostas.filter(p =>
    p.empresa.toLowerCase().includes(search.toLowerCase()) ||
    p.cliente.toLowerCase().includes(search.toLowerCase()) ||
    p.servico.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white/50 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Propostas & Contratos</h1>
              <p className="text-white/40 text-sm">{propostas.length} propostas cadastradas</p>
            </div>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <Input
              placeholder="Buscar cliente..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <Card
              key={p.slug}
              className="bg-white/[0.03] border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
              onClick={() => navigate(p.rota)}
            >
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{p.empresa}</h3>
                    <p className="text-white/40 text-sm">{p.cliente}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors mt-1" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">{p.servico}</p>
                  <p className="text-cyan-400 font-medium mt-1">{p.valor}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={`text-xs ${statusColor(p.status)}`}>
                    <FileText className="w-3 h-3 mr-1" />
                    {statusLabels[p.status]}
                  </Badge>
                  <Badge className={`text-xs ${contratoColor(p.contrato?.status)}`}>
                    <ScrollText className="w-3 h-3 mr-1" />
                    {p.contrato ? contratoStatusLabels[p.contrato.status] : 'Sem contrato'}
                  </Badge>
                </div>

                {p.contrato && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-white/40 hover:text-cyan-400 hover:bg-white/5 text-xs"
                    onClick={(e) => { e.stopPropagation(); navigate(p.contrato!.rota); }}
                  >
                    <ScrollText className="w-3 h-3 mr-1" />
                    Ver Contrato
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30">
            Nenhuma proposta encontrada para "{search}"
          </div>
        )}
      </div>
    </div>
  );
}

export default function Propostas() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const location = useLocation();
  const isSubRoute = location.pathname !== '/propostas' && location.pathname !== '/propostas/';

  if (!authenticated) {
    return <PinScreen onSuccess={() => setAuthenticated(true)} />;
  }

  if (isSubRoute) {
    return <Outlet />;
  }

  return <Dashboard />;
}
