import { TrendingUp, Settings, Target, Phone } from 'lucide-react';

interface RelatorioInsightsProps {
  insights: string[];
}

const icons = [TrendingUp, Settings, Target, Phone];

export const RelatorioInsights = ({ insights }: RelatorioInsightsProps) => {
  return (
    <div className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Insights do Período
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed">{insight}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
