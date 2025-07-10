import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Clock, 
  Copy, 
  Check, 
  Lock,
  ChevronLeft,
  ChevronRight,
  User,
  Brain,
  Zap,
  Target,
  Lightbulb,
  Shield,
  Users,
  Calendar
} from 'lucide-react';

const Modulo1Premium = () => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // In real app, check auth

  const lessons = [
    {
      id: 1,
      title: 'O que é Inteligência Artificial (sem enrolação)',
      explanation: 'IA é a tecnologia que simula inteligência humana pra resolver problemas, acelerar tarefas e gerar resultados. Está presente em quase tudo — de sugestões do Spotify a anúncios no Instagram.',
      prompt: 'Explique o que é Inteligência Artificial com um exemplo prático do dia a dia.',
      imageAlt: 'ChatGPT respondendo sobre IA de forma simples'
    },
    {
      id: 2,
      title: 'IA vs Automação: Qual a diferença?',
      explanation: 'Automação executa tarefas repetitivas. IA aprende e toma decisões. A automação é o robô da esteira. A IA é o robô que aprende a montar o quebra-cabeça.',
      prompt: 'Qual a diferença entre automação e IA? Dê exemplos reais.',
      imageAlt: 'Comparação visual entre automação e IA'
    },
    {
      id: 3,
      title: 'Onde aplicar IA no seu negócio?',
      explanation: 'IA pode ser aplicada no marketing, atendimento, criação de conteúdo, vendas e organização. O segredo é encontrar onde você perde tempo ou dinheiro e automatizar com inteligência.',
      prompt: 'Tenho um negócio de [sua área]. Onde posso aplicar IA pra otimizar e vender mais?',
      imageAlt: 'Mapa de aplicações de IA em negócios'
    },
    {
      id: 4,
      title: 'Ferramentas essenciais (ChatGPT, Claude, Gemini)',
      explanation: 'Você não precisa de todas. Só precisa dominar bem uma. Vamos mostrar os pontos fortes e fracos das 3 principais.',
      prompt: 'Compare ChatGPT, Claude e Gemini. Mostre onde cada um é melhor.',
      imageAlt: 'Comparação das principais ferramentas de IA'
    },
    {
      id: 5,
      title: 'Primeiros prompts que geram resultado real',
      explanation: 'Aqui a pessoa começa a aplicar e ver retorno imediato.',
      prompt: 'Crie um post de Instagram para uma loja de roupas femininas, com legenda e 3 hashtags estratégicas.',
      secondaryPrompt: 'Gere um roteiro de vendas para um plano de internet.',
      imageAlt: 'Resultados práticos dos prompts'
    },
    {
      id: 6,
      title: 'Casos reais de uso com resultado',
      explanation: 'Exemplos reais de como negócios pequenos usaram IA e economizaram tempo/dinheiro.',
      cases: [
        'Loja de bijuterias usando IA para criar 20 posts por mês',
        'Freelancer usando IA para gerar calendário de conteúdo e automações'
      ],
      imageAlt: 'Cases de sucesso com IA'
    },
    {
      id: 7,
      title: 'Ética e responsabilidade ao usar IA',
      explanation: 'IA é poderosa, mas precisa ser usada com bom senso. Não engane, não copie, não iluda. Use com verdade, valor e voz.',
      checklist: [
        'Confirme fontes',
        'Teste antes de publicar',
        'Avise quando usar IA'
      ],
      imageAlt: 'Checklist de boas práticas com IA'
    },
    {
      id: 8,
      title: 'Plano de ação em 7 dias',
      explanation: 'Aplicação prática pra quem quer colocar a IA no dia a dia.',
      dailyPlan: [
        'Dia 1: Criar conta e explorar ChatGPT',
        'Dia 2: Escrever primeiro prompt de conteúdo',
        'Dia 3: Testar IA com Canva ou ferramenta visual',
        'Dia 4: Criar algo real pro seu negócio',
        'Dia 5: Automatizar uma tarefa',
        'Dia 6: Compartilhar um conteúdo criado com IA',
        'Dia 7: Criar uma rotina com IA'
      ],
      imageAlt: 'Plano semanal de implementação'
    }
  ];

  const copyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const nextLesson = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const currentLessonData = lessons[currentLesson - 1];

  // Authentication check
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 text-center">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Conteúdo Premium
            </h1>
            <p className="text-muted-foreground mb-6">
              Este módulo é exclusivo para usuários pagantes. 
              Faça login para acessar o conteúdo completo.
            </p>
            <button 
              onClick={() => setIsAuthenticated(true)} // For demo - replace with real auth
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Fazer Login
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Premium Header */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary/20 via-background to-primary/20 border-b border-primary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                ⭐ MÓDULO PREMIUM
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              <span className="gradient-text">Fundamentos da IA para Negócios</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8">
              8 aulas práticas para dominar IA sem enrolação
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progresso</span>
                <span>{currentLesson}/{lessons.length}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentLesson / lessons.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Lesson Header */}
            <div className="text-center mb-12">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                Aula {currentLesson}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {currentLessonData.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {currentLessonData.explanation}
              </p>
            </div>

            {/* Lesson Content Card */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              {/* Main Prompt */}
              {currentLessonData.prompt && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-primary mr-2" />
                    Prompt Principal
                  </h3>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                      {currentLessonData.prompt}
                    </pre>
                  </div>
                  <button
                    onClick={() => copyPrompt(currentLessonData.prompt, `main-${currentLesson}`)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
                  >
                    {copiedPrompt === `main-${currentLesson}` ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Secondary Prompt */}
              {currentLessonData.secondaryPrompt && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Target className="w-5 h-5 text-secondary mr-2" />
                    Prompt Adicional
                  </h3>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                      {currentLessonData.secondaryPrompt}
                    </pre>
                  </div>
                  <button
                    onClick={() => copyPrompt(currentLessonData.secondaryPrompt!, `secondary-${currentLesson}`)}
                    className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors flex items-center space-x-2"
                  >
                    {copiedPrompt === `secondary-${currentLesson}` ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Cases */}
              {currentLessonData.cases && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    Exemplos Reais
                  </h3>
                  <div className="space-y-3">
                    {currentLessonData.cases.map((case_item, idx) => (
                      <div key={idx} className="bg-muted/30 border border-border rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-foreground">{case_item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Checklist */}
              {currentLessonData.checklist && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    Regra dos 3 Filtros
                  </h3>
                  <div className="space-y-3">
                    {currentLessonData.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Daily Plan */}
              {currentLessonData.dailyPlan && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    Plano de 7 Dias
                  </h3>
                  <div className="grid gap-3">
                    {currentLessonData.dailyPlan.map((day, idx) => (
                      <div key={idx} className="bg-muted/30 border border-border rounded-lg p-4">
                        <span className="text-foreground">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {currentLessonData.imageAlt}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  [Espaço reservado para print/exemplo visual]
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevLesson}
                disabled={currentLesson === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentLesson === 1
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-card border border-border text-foreground hover:bg-muted'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Aula Anterior</span>
              </button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {currentLesson} de {lessons.length}
                </p>
              </div>

              {currentLesson === lessons.length ? (
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2">
                  <span>Ir para Módulo 2</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={nextLesson}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
                >
                  <span>Próxima Aula</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modulo1Premium;