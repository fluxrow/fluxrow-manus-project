import { CheckCircle2 } from 'lucide-react';

interface RelatorioPlanoAcaoProps {
  plano: {
    meta: string[];
    google: string[];
    rd: string[];
  };
}

export const RelatorioPlanoAcao = ({ plano }: RelatorioPlanoAcaoProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Plano de Ação (30 dias)
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Próximos passos para otimizar os resultados
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Meta Ads */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold">Meta Ads</h3>
            </div>
            <ul className="space-y-4">
              {plano.meta.map((acao, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{acao}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Ads */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold">Google Ads</h3>
            </div>
            <ul className="space-y-4">
              {plano.google.map((acao, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{acao}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
