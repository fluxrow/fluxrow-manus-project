import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, FileText, Phone, Mail, MessageCircle, Star, Award, Users, TrendingUp } from 'lucide-react';

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

export default function PropostaView() {
  const { clienteSlug } = useParams<{ clienteSlug: string }>();
  const [proposta, setProposta] = useState<PropostaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (clienteSlug) {
      const propostaId = localStorage.getItem(`cliente_${clienteSlug}`);
      if (propostaId) {
        const propostaData = localStorage.getItem(propostaId);
        if (propostaData) {
          setProposta(JSON.parse(propostaData));
        }
      }
    }
    setLoading(false);
  }, [clienteSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Carregando proposta...</p>
        </div>
      </div>
    );
  }

  if (!proposta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Proposta não encontrada</h2>
            <p className="text-muted-foreground">
              A proposta que você está procurando não foi encontrada ou pode ter expirado.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta para ${proposta.servico} e gostaria de conversar mais sobre o projeto.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Proposta: ${proposta.servico}`;
    const body = `Olá!\n\nVi a proposta personalizada e gostaria de discutir mais detalhes sobre o projeto.\n\nObrigado!`;
    const mailtoUrl = `mailto:contato@suaempresa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  // Template Styles
  const getTemplateClasses = () => {
    switch (proposta.template) {
      case 'corporativo':
        return 'bg-slate-50 text-slate-900';
      case 'criativo':
        return 'bg-gradient-to-br from-purple-50 to-pink-50';
      default:
        return 'bg-gradient-to-br from-primary/5 to-secondary/5';
    }
  };

  return (
    <div className={`min-h-screen py-8 ${getTemplateClasses()}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Proposta Personalizada
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Olá, <span className="text-primary">{proposta.clienteNome}</span>! 👋
          </h1>
          {proposta.clienteEmpresa && (
            <p className="text-xl text-muted-foreground mb-4">
              Proposta especial para <strong>{proposta.clienteEmpresa}</strong>
            </p>
          )}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preparamos uma solução sob medida para suas necessidades. Confira todos os detalhes abaixo.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Serviço Principal */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                {proposta.servico}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {proposta.escopo && (
                <div className="prose max-w-none">
                  <h4 className="font-semibold mb-2">📋 Escopo do Projeto:</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{proposta.escopo}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Detalhes da Proposta */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Timeline */}
            {proposta.timeline && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Prazo de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{proposta.timeline}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cronograma otimizado para sua necessidade
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Investimento */}
            {proposta.investimento && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Investimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{proposta.investimento}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Valor especial para este projeto
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Resultados Esperados */}
          {proposta.resultadosEsperados && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Resultados Esperados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted-foreground">{proposta.resultadosEsperados}</p>
              </CardContent>
            </Card>
          )}

          {/* Diferenciais */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Por que escolher nossos serviços?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1">+500 Projetos</h4>
                  <p className="text-sm text-muted-foreground">Experiência comprovada</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <h4 className="font-semibold mb-1">99% Aprovação</h4>
                  <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <h4 className="font-semibold mb-1">Entrega no Prazo</h4>
                  <p className="text-sm text-muted-foreground">Pontualidade garantida</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          {proposta.observacoes && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Informações Adicionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted-foreground">{proposta.observacoes}</p>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar? 🚀</h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato e vamos transformar sua ideia em realidade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={handleEmailContact}
                  size="lg" 
                  variant="secondary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Esta proposta foi criada especialmente para {proposta.clienteNome}</p>
          <p className="mt-1">Válida por 30 dias a partir da data de envio</p>
        </div>
      </div>
    </div>
  );
}