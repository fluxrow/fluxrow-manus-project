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
      title: "SDR Virtual Promotrip",
      description: "Agente IA qualificando leads em tempo real",
      type: "sdr"
    },
    {
      title: "Workflow n8n em Ação",
      description: "Processo completo de lead → qualificação → venda",
      type: "n8n"
    }
  ];

  const sdrConversation = [
    { sender: "lead", message: "Oi, vi vocês no Google. Trabalho com turismo e preciso de ajuda com marketing digital." },
    { sender: "sdr", message: "Olá! Sou Sarah, SDR da Fluxrow 😊 Que bom que nos encontrou! Qual o nome da sua empresa de turismo?" },
    { sender: "lead", message: "Promotrip. Somos uma agência especializada em pacotes personalizados." },
    { sender: "sdr", message: "Perfeito! A Promotrip já tem site próprio? Como vocês captam clientes atualmente?" },
    { sender: "lead", message: "Temos site, mas é bem básico. Captamos muito por indicação e Facebook." },
    { sender: "sdr", message: "Entendi. E qual o principal desafio que vocês enfrentam hoje? Falta de leads, conversão baixa ou algo operacional?" },
    { sender: "lead", message: "Nossa! Exatamente... falta de leads qualificados. Gastamos muito no Facebook e vem muito curioso." },
    { sender: "sdr", message: "Isso é super comum no turismo! Quantos leads vocês recebem por mês em média? E desses, quantos viram venda?" },
    { sender: "lead", message: "Uns 150 leads/mês, mas só uns 8-10 fecham. E olha que trabalhamos muito pra isso." },
    { sender: "sdr", message: "6% de conversão... vejo que há muito potencial! E me conta, vocês têm algum CRM ou é tudo manual mesmo?" },
    { sender: "lead", message: "Tudo no Excel e WhatsApp 😅 Um caos total. Perdemos muito lead por desorganização." },
    { sender: "sdr", message: "Imagino! Sarah, aqui na Fluxrow temos um case idêntico ao seu. A Promotrip que atendemos tinha exatamente esse problema." },
    { sender: "lead", message: "Sério? E como vocês resolveram?" },
    { sender: "sdr", message: "Implementamos um sistema completo: Site otimizado + Landing pages + CRM automático + WhatsApp Business integrado. O resultado foi incrível:" },
    { sender: "sdr", message: "📈 Saltaram de 150 para 380 leads/mês\n💰 Conversão foi de 6% para 18%\n⏰ Economizaram 6,5h/dia de trabalho manual\n🚀 ROI de 312% em 3 meses" },
    { sender: "lead", message: "Nossa! Isso seria o sonho aqui. Quanto custa uma implementação dessas?" },
    { sender: "sdr", message: "Depende do escopo, mas posso adiantar que o investimento se paga em 45-60 dias. Que tal marcarmos 15min para eu mostrar como seria na Promotrip?" },
    { sender: "lead", message: "Sim! Quero muito ver isso. Quando podemos conversar?" },
    { sender: "sdr", message: "Ótimo! Vou te passar para nosso especialista Carlos. Ele tem agenda hoje às 16h ou amanhã 10h. Qual prefere?" },
    { sender: "lead", message: "Hoje 16h perfeito!" },
    { sender: "sdr", message: "Perfeito! ✅ Agendado para hoje 16h\n📧 Vou enviar o link por email\n📊 Carlos vai preparar uma simulação personalizada para Promotrip\nObrigada pelo interesse! 🚀" }
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

  const renderSDRDemo = () => {
    const messagesToShow = Math.floor((progress / 100) * sdrConversation.length);
    
    return (
      <div className="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white font-medium">SDR Virtual - Sarah</span>
          </div>
          <Bot className="w-5 h-5 text-cyan-400" />
        </div>
        
        <div className="space-y-3">
          {sdrConversation.slice(0, messagesToShow).map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'lead' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-sm px-3 py-2 rounded-lg ${
                msg.sender === 'lead' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-cyan-600 text-white'
              }`}>
                <div className="text-sm whitespace-pre-line">{msg.message}</div>
              </div>
            </div>
          ))}
          {isPlaying && messagesToShow < sdrConversation.length && (
            <div className="flex justify-start">
              <div className="bg-cyan-600 text-white px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-200 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-200 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-cyan-200 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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

  const renderCurrentDemo = () => {
    switch (currentDemo) {
      case 0: return renderSDRDemo();
      case 1: return renderN8nDemo();
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