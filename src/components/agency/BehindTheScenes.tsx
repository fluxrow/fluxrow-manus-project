import React, { useEffect, useState } from 'react';
import { Terminal, Activity, Code } from 'lucide-react';

const BehindTheScenes = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    automation: 0,
    leads: 0,
    performance: 0
  });

  const terminalLines = [
    '$ fluxrow init --project=client-automation',
    '✓ Initializing AI workflows...',
    '✓ Setting up WhatsApp integration...',
    '✓ Configuring CRM sync...',
    '✓ Deploying automation pipeline...',
    '🚀 Automation live! Processing 24/7...'
  ];

  useEffect(() => {
    // Simulate terminal typing effect
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setTerminalOutput(prev => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    // Animate metrics
    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        automation: Math.min(prev.automation + Math.random() * 5, 100),
        leads: Math.min(prev.leads + Math.random() * 3, 85),
        performance: Math.min(prev.performance + Math.random() * 4, 95)
      }));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-space-grotesk gradient-text">
            Tecnologia em Ação
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Veja como transformamos ideias em soluções funcionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Terminal Simulation */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold font-space-grotesk text-white">
                Terminal de Automação
              </h3>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto">
              {terminalOutput.map((line, index) => (
                <div 
                  key={index} 
                  className={`mb-2 ${
                    line && line.startsWith('$') ? 'text-cyan-400' : 
                    line && line.startsWith('✓') ? 'text-green-400' :
                    line && line.startsWith('🚀') ? 'text-yellow-400' :
                    'text-gray-300'
                  }`}
                >
                  {line}
                  {index === terminalOutput.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Live Dashboard */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold font-space-grotesk text-white">
                Dashboard em Tempo Real
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Automação</span>
                  <span className="text-cyan-400 font-bold">{metrics.automation.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${metrics.automation}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Conversão de Leads</span>
                  <span className="text-purple-400 font-bold">{metrics.leads.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${metrics.leads}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Performance</span>
                  <span className="text-green-400 font-bold">{metrics.performance.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${metrics.performance}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Live indicators */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Sistema Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">IA Ativa</span>
              </div>
            </div>
          </div>
          
          {/* Code Preview */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-bold font-space-grotesk text-white">
                Código em Desenvolvimento
              </h3>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4 font-mono text-xs h-64 overflow-y-auto">
              <div className="text-gray-300 whitespace-pre-wrap">
                <div className="text-green-400">// AI Agent Configuration</div>
                <div className="text-cyan-400">const fluxrowAgent = &#123;</div>
                <div className="ml-2 text-yellow-400">name: "Sof.IA",</div>
                <div className="ml-2 text-yellow-400">model: "gpt-4-turbo",</div>
                <div className="ml-2 text-yellow-400">personality: "professional",</div>
                <br />
                <div className="ml-2 text-purple-400">async processLead(data) &#123;</div>
                <div className="ml-4 text-gray-300">const analysis = await this.analyze(data);</div>
                <div className="ml-4 text-gray-300">const strategy = await this.createStrategy(analysis);</div>
                <br />
                <div className="ml-4 text-cyan-400">return &#123;</div>
                <div className="ml-6 text-gray-300">qualification: analysis.score,</div>
                <div className="ml-6 text-gray-300">recommendations: strategy.actions,</div>
                <div className="ml-6 text-gray-300">nextSteps: strategy.timeline</div>
                <div className="ml-4 text-cyan-400">&#125;;</div>
                <div className="ml-2 text-purple-400">&#125;,</div>
                <br />
                <div className="ml-2 text-purple-400">async automate(workflow) &#123;</div>
                <div className="ml-4 text-green-400">// WhatsApp integration</div>
                <div className="ml-4 text-gray-300">await whatsapp.send(workflow.message);</div>
                <br />
                <div className="ml-4 text-green-400">// CRM sync</div>
                <div className="ml-4 text-gray-300">await crm.update(workflow.data);</div>
                <br />
                <div className="ml-4 text-green-400">// Analytics tracking</div>
                <div className="ml-4 text-gray-300">analytics.track('automation_executed');</div>
                <div className="ml-2 text-purple-400">&#125;</div>
                <div className="text-cyan-400">&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;