import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Play, Pause, RotateCcw, MessageCircle, Bot, Zap } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const demos = [
    {
      title: "Automação WhatsApp + IA",
      description: "Veja como nossa IA responde automaticamente no WhatsApp",
      type: "whatsapp"
    },
    {
      title: "Workflow n8n em Ação",
      description: "Processo completo de lead → qualificação → venda",
      type: "n8n"
    },
    {
      title: "Dashboard Analytics Real-time",
      description: "Métricas e insights atualizados em tempo real",
      type: "analytics"
    }
  ];

  const whatsappMessages = [
    { sender: "client", message: "Olá! Sou da Promotrip e preciso de automação" },
    { sender: "bot", message: "Olá! 👋 Sou a Sof.IA, assistente virtual da Fluxrow. Que área da Promotrip podemos otimizar?" },
    { sender: "client", message: "Nosso site, landing pages e apresentações estão muito manuais" },
    { sender: "bot", message: "Entendo! Vamos automatizar todo seu funil. Que tal começarmos pelo CRM?" },
    { sender: "client", message: "Sim! E também precisamos melhorar nosso tráfego no Meta e Google" },
    { sender: "bot", message: "Perfeito! Posso integrar tudo: CRM → Automação → Tráfego → Redes Sociais" },
    { sender: "bot", message: "📊 Resultados esperados:\n📈 +47% nas conversões\n⏰ 6.5h/dia economizadas\n💰 ROI de 312%" },
    { sender: "client", message: "Incrível! Como funciona a implementação?" },
    { sender: "bot", message: "1️⃣ Análise do seu funil atual\n2️⃣ Criação das automações\n3️⃣ Integração com suas ferramentas\n4️⃣ Treinamento da equipe" },
    { sender: "bot", message: "Posso agendar uma demonstração personalizada para a Promotrip? 🚀" }
  ];

  const n8nSteps = [
    "🎯 Lead capturado no landing page",
    "📊 Dados enviados para CRM (HubSpot)",
    "🤖 IA analisa perfil do cliente",
    "📱 WhatsApp automático enviado",
    "⏰ Agendamento criado no Calendly",
    "📧 Sequência de e-mails ativada",
    "🔔 Notificação para equipe comercial",
    "✅ Lead qualificado e pronto para venda!"
  ];

  const analyticsData = {
    leads: { current: 1247, target: 1500, trend: "+12%" },
    conversion: { current: 23.5, target: 25, trend: "+2.1%" },
    revenue: { current: 89750, target: 100000, trend: "+15%" }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1; // Mais lento
        });
      }, 400); // Mais lento
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isOpen]);

  useEffect(() => {
    if (isPlaying && currentDemo === 1) {
      // Simulate n8n workflow steps
      const stepInterval = setInterval(() => {
        setTerminalLines(prev => {
          const nextIndex = prev.length;
          if (nextIndex < n8nSteps.length) {
            return [...prev, n8nSteps[nextIndex]];
          }
          return prev;
        });
      }, 1000);

      return () => clearInterval(stepInterval);
    }
  }, [isPlaying, currentDemo]);

  const resetDemo = () => {
    setProgress(0);
    setIsPlaying(false);
    setTerminalLines([]);
  };

  const playDemo = () => {
    setIsPlaying(true);
    if (progress >= 100) {
      resetDemo();
      setTimeout(() => setIsPlaying(true), 100);
    }
  };

  const renderWhatsAppDemo = () => {
    const messagesToShow = Math.floor((progress / 100) * whatsappMessages.length);
    
    return (
      <div className="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white font-medium">WhatsApp Business</span>
          </div>
          <MessageCircle className="w-5 h-5 text-green-400" />
        </div>
        
        <div className="space-y-3">
          {whatsappMessages.slice(0, messagesToShow).map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-3 py-2 rounded-lg ${
                msg.sender === 'client' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-white'
              }`}>
                <div className="text-sm whitespace-pre-line">{msg.message}</div>
              </div>
            </div>
          ))}
          {isPlaying && messagesToShow < whatsappMessages.length && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderN8nDemo = () => (
    <div className="bg-black rounded-lg p-4 h-80 overflow-y-auto font-mono">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-medium">n8n Workflow Engine</span>
        </div>
        <div className="text-green-400 text-sm">● Active</div>
      </div>
      
      <div className="space-y-2">
        {terminalLines.map((line, index) => (
          <div key={index} className="text-green-400 text-sm animate-fade-in">
            <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {line}
          </div>
        ))}
        {isPlaying && (
          <div className="text-yellow-400 text-sm animate-pulse">
            <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> ▋ Processando...
          </div>
        )}
      </div>
    </div>
  );

  const renderAnalyticsDemo = () => (
    <div className="bg-gray-900 rounded-lg p-4 h-80">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
        <h3 className="text-white font-medium">Dashboard Analytics</h3>
        <div className="text-green-400 text-sm">● Live</div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(analyticsData).map(([key, data]) => (
          <div key={key} className="bg-black/50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 capitalize">{key}</span>
              <span className="text-green-400 text-sm">{data.trend}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">
                {key === 'revenue' ? `R$ ${data.current.toLocaleString()}` : 
                 key === 'conversion' ? `${data.current}%` : 
                 data.current.toLocaleString()}
              </span>
              <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-400 transition-all duration-1000"
                  style={{ width: `${(data.current / data.target) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCurrentDemo = () => {
    switch (currentDemo) {
      case 0: return renderWhatsAppDemo();
      case 1: return renderN8nDemo();
      case 2: return renderAnalyticsDemo();
      default: return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Demo ao Vivo - Fluxrow
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Demo Selector */}
          <div className="flex space-x-2">
            {demos.map((demo, index) => (
              <Button
                key={index}
                onClick={() => {
                  setCurrentDemo(index);
                  resetDemo();
                }}
                variant={currentDemo === index ? "default" : "outline"}
                className={`text-sm ${
                  currentDemo === index 
                    ? "bg-cyan-500 hover:bg-cyan-600" 
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {demo.title}
              </Button>
            ))}
          </div>

          {/* Demo Description */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              {demos[currentDemo].title}
            </h3>
            <p className="text-gray-400">
              {demos[currentDemo].description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Demo Content */}
          <div className="border border-gray-700 rounded-lg">
            {renderCurrentDemo()}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={playDemo}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Pausar' : 'Reproduzir'}
            </Button>
            
            <Button
              onClick={resetDemo}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center pt-4 border-t border-gray-700">
            <p className="text-gray-400 mb-4">
              Gostou do que viu? Vamos implementar isso no seu negócio!
            </p>
            <Button
              onClick={() => {
                window.open('https://wa.me/5511999999999?text=Vi%20a%20demo%20e%20quero%20saber%20mais!', '_blank');
                onClose();
              }}
              className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Quero Implementar Agora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;