import React from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProcessCards from '../ui/process-cards';

const ProcessTimeline = () => {
  const { t } = useTranslation();
  
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; description: string; details: string }>;
  const icons = [Search, Lightbulb, Rocket, TrendingUp];
  const colors = ['cyan', 'purple', 'green', 'yellow'] as const;

  return (
    <section id="process" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
            {t('process.title')}
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>
        
        {/* Desktop - Stacked Cards */}
        <div className="hidden md:flex justify-center py-12">
          <ProcessCards />
        </div>
        
        {/* Mobile - Vertical List */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const colorClasses = {
              cyan: { icon: "from-white/10 to-white/5", title: "text-white/80" },
              purple: { icon: "from-white/10 to-white/5", title: "text-white/80" },
              green: { icon: "from-white/10 to-white/5", title: "text-white/80" },
              yellow: { icon: "from-white/10 to-white/5", title: "text-white/80" },
            };
            const color = colors[index];
            const colorStyle = colorClasses[color];
            const Icon = icons[index];
            
            return (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colorStyle.icon} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/55 bg-white/5 px-2 py-0.5 rounded">
                      {t('process.step')} {index + 1}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold font-space-grotesk ${colorStyle.title} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
