import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { FileText, Share2, Wand2, Calculator, Clock, CheckCircle, MessageCircle } from 'lucide-react';

interface PropostaData {
  clienteNome: string;
  clienteEmpresa: string;
  clienteEmail: string;
  clienteWhatsApp: string;
  servico: string;
  escopo: string;
  timeline: string;
  investimento: string;
  resultadosEsperados: string;
  observacoes: string;
  template: string;
}

export default function Propostas() {
  const { toast } = useToast();
  const [step, setStep] = useState(3); // Começa na etapa final para Match Solutions
  const [proposta, setProposta] = useState<PropostaData>({
    clienteNome: 'Match Solutions',
    clienteEmpresa: 'Match Solutions',
    clienteEmail: 'contato@matchsolutions.com.br',
    clienteWhatsApp: '11999999999',
    servico: 'Sistema Completo de Automação em Vendas com IA',
    escopo: `🎯 **FASE 1: ANÁLISE E CONFIGURAÇÃO (Semana 1)**
• Análise completa do funil de vendas atual
• Configuração de disparos em massa personalizados
• Integração com sistemas existentes
• Setup inicial do SDR IA

🤖 **FASE 2: IMPLEMENTAÇÃO DO SDR IA (Semana 2-3)**
• Configuração de atendimento simultâneo para 100+ conversas
• Treinamento da IA com scripts específicos da Match Solutions
• Sistema de qualificação inteligente de leads
• Configuração de handoff para equipe humana

📈 **FASE 3: SISTEMA DE FOLLOW-UP INTELIGENTE (Semana 3-4)**
• Sequências automatizadas baseadas no comportamento do lead
• Sistema de remarketing por tempo de interação
• Configuração de múltiplos pontos de contato
• Otimização para aumento de 35% na conversão

✅ **FASE 4: OTIMIZAÇÃO E RELATÓRIOS (Semana 4)**
• Dashboard completo com métricas em tempo real
• Relatórios de performance e ROI
• Ajustes finais baseados em dados
• Treinamento da equipe para uso da plataforma`,
    timeline: '3-4 semanas',
    investimento: 'R$ 4.500/mês (sem taxa de implementação)',
    resultadosEsperados: `💰 **RETORNO FINANCEIRO GARANTIDO:**
• Com apenas 1 venda/mês (ticket R$ 35.000): ROI de 678%
• Cenário conservador de 2 vendas/mês: ROI de 1.456%
• Meta de 3 vendas/mês: ROI de 2.233%

📊 **MELHORIAS OPERACIONAIS:**
• Atendimento simultâneo de 100+ prospects (vs. 5-8 humano)
• Aumento de 35% na conversão com follow-up inteligente
• Redução de 80% no tempo de qualificação de leads
• Operação 24/7 sem pausas ou intervalos

💡 **ECONOMIA vs CONTRATAÇÃO INTERNA:**
• SDR Júnior: R$ 3.500/mês + encargos (R$ 5.250)
• SDR Pleno: R$ 5.500/mês + encargos (R$ 8.250)
• **Economia mensal**: R$ 2.000 a R$ 3.750
• **Economia anual**: R$ 24.000 a R$ 45.000`,
    observacoes: `🏆 **GARANTIAS E DIFERENCIAIS:**
• Implementação completa em até 4 semanas
• Suporte técnico especializado incluído
• Dashboard com métricas em tempo real
• Integração com ferramentas existentes
• Treinamento completo da equipe

📞 **CAPACIDADE TÉCNICA ÚNICA:**
• Sistema proprietário de IA conversacional
• Processamento simultâneo de 100+ conversas
• Follow-up inteligente baseado em comportamento
• Qualificação automática com 94% de precisão

💼 **SOBRE NOSSA EMPRESA:**
Somos especialistas em automação de vendas com mais de 200 projetos implementados. Nossa tecnologia proprietária já gerou mais de R$ 50 milhões em vendas para nossos clientes, com cases comprovados em diversos setores.`,
    template: 'corporativo'
  });

  // Auto-salva a proposta da Match Solutions
  React.useEffect(() => {
    const propostaId = `proposta_match_solutions`;
    const clienteSlug = 'match-solutions';
    
    localStorage.setItem(propostaId, JSON.stringify(proposta));
    localStorage.setItem(`cliente_${clienteSlug}`, propostaId);
  }, [proposta]);

  const handleInputChange = (field: keyof PropostaData, value: string) => {
    setProposta(prev => ({ ...prev, [field]: value }));
  };

  const gerarLinkProposta = () => {
    if (!proposta.clienteNome || !proposta.servico) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos o nome do cliente e o serviço.",
        variant: "destructive",
      });
      return;
    }

    // Salva a proposta no localStorage
    const propostaId = `proposta_${Date.now()}`;
    const clienteSlug = proposta.clienteNome.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    localStorage.setItem(propostaId, JSON.stringify(proposta));
    localStorage.setItem(`cliente_${clienteSlug}`, propostaId);
    
    const link = `${window.location.origin}/proposta/${clienteSlug}`;
    
    // Copia para área de transferência
    navigator.clipboard.writeText(link);
    
    toast({
      title: "Link da proposta gerado! 🎉",
      description: "Link copiado para área de transferência",
    });

    // Gera mensagem para WhatsApp
    const mensagemWhatsApp = `Olá ${proposta.clienteNome}! 

Preparei uma proposta personalizada para ${proposta.clienteEmpresa}. 

Confira todos os detalhes aqui: ${link}

Qualquer dúvida, estarei à disposição! 📲`;

    const whatsappUrl = `https://wa.me/${proposta.clienteWhatsApp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(mensagemWhatsApp)}`;
    
    // Abre WhatsApp em nova aba
    if (proposta.clienteWhatsApp) {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Gerador de Propostas Inteligente
          </h1>
          <p className="text-lg text-muted-foreground">
            Crie propostas profissionais em minutos e impressione seus clientes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNum ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <FileText className="w-5 h-5" />}
              {step === 2 && <Wand2 className="w-5 h-5" />}
              {step === 3 && <Share2 className="w-5 h-5" />}
              {step === 1 && "Informações do Cliente"}
              {step === 2 && "Detalhes da Proposta"}
              {step === 3 && "Finalizar e Compartilhar"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Step 1: Cliente Info */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clienteNome">Nome do Cliente *</Label>
                  <Input
                    id="clienteNome"
                    value={proposta.clienteNome}
                    onChange={(e) => handleInputChange('clienteNome', e.target.value)}
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <Label htmlFor="clienteEmpresa">Empresa</Label>
                  <Input
                    id="clienteEmpresa"
                    value={proposta.clienteEmpresa}
                    onChange={(e) => handleInputChange('clienteEmpresa', e.target.value)}
                    placeholder="Empresa LTDA"
                  />
                </div>
                <div>
                  <Label htmlFor="clienteEmail">E-mail</Label>
                  <Input
                    id="clienteEmail"
                    type="email"
                    value={proposta.clienteEmail}
                    onChange={(e) => handleInputChange('clienteEmail', e.target.value)}
                    placeholder="contato@empresa.com"
                  />
                </div>
                <div>
                  <Label htmlFor="clienteWhatsApp">WhatsApp</Label>
                  <Input
                    id="clienteWhatsApp"
                    value={proposta.clienteWhatsApp}
                    onChange={(e) => handleInputChange('clienteWhatsApp', e.target.value)}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Proposta Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="template">Template da Proposta</Label>
                  <Select value={proposta.template} onValueChange={(value) => handleInputChange('template', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moderno">Moderno - Clean e minimalista</SelectItem>
                      <SelectItem value="corporativo">Corporativo - Formal e tradicional</SelectItem>
                      <SelectItem value="criativo">Criativo - Visual e impactante</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="servico">Serviço Oferecido *</Label>
                  <Input
                    id="servico"
                    value={proposta.servico}
                    onChange={(e) => handleInputChange('servico', e.target.value)}
                    placeholder="Desenvolvimento de Website, Consultoria, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="escopo">Escopo do Projeto</Label>
                  <Textarea
                    id="escopo"
                    value={proposta.escopo}
                    onChange={(e) => handleInputChange('escopo', e.target.value)}
                    placeholder="Descreva o que será entregue..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timeline">Prazo de Entrega</Label>
                    <Input
                      id="timeline"
                      value={proposta.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      placeholder="30 dias, 2 semanas, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="investimento">Investimento</Label>
                    <Input
                      id="investimento"
                      value={proposta.investimento}
                      onChange={(e) => handleInputChange('investimento', e.target.value)}
                      placeholder="R$ 5.000,00"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="resultadosEsperados">Resultados Esperados</Label>
                  <Textarea
                    id="resultadosEsperados"
                    value={proposta.resultadosEsperados}
                    onChange={(e) => handleInputChange('resultadosEsperados', e.target.value)}
                    placeholder="Quais benefícios o cliente terá..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Share */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Preview da Proposta</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div><strong>Cliente:</strong> {proposta.clienteNome} ({proposta.clienteEmpresa})</div>
                    <div><strong>Serviço:</strong> {proposta.servico}</div>
                    <div><strong>Prazo:</strong> {proposta.timeline}</div>
                    <div><strong>Investimento:</strong> {proposta.investimento}</div>
                    {proposta.escopo && <div><strong>Escopo:</strong> {proposta.escopo}</div>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="observacoes">Observações Finais</Label>
                  <Textarea
                    id="observacoes"
                    value={proposta.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                    placeholder="Informações adicionais, condições, etc."
                    rows={3}
                  />
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                    <CheckCircle className="w-4 h-4" />
                    Proposta da Match Solutions Pronta!
                  </div>
                  <p className="text-sm text-green-600 mb-3">
                    Link direto: <strong>/proposta/match-solutions</strong>
                  </p>
                  <Button 
                    onClick={() => window.open('/proposta/match-solutions', '_blank')}
                    variant="outline" 
                    size="sm"
                    className="mr-2"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Ver Proposta
                  </Button>
                  <Button onClick={gerarLinkProposta} size="sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Enviar WhatsApp
                  </Button>
                </div>
              </div>
            )}

            <Separator />

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Anterior
              </Button>

              {step < 3 ? (
                <Button onClick={() => setStep(step + 1)}>
                  Próximo
                </Button>
              ) : (
                <Button onClick={gerarLinkProposta} className="bg-green-600 hover:bg-green-700">
                  <Share2 className="w-4 h-4 mr-2" />
                  Gerar Link & Enviar WhatsApp
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}