import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "E se a IA não souber responder?",
    answer: "A IA é treinada para reconhecer quando não sabe algo. Nesses casos, ela automaticamente encaminha para um atendente humano ou coleta os dados do cliente para retorno. Além disso, fazemos atualizações mensais na base de conhecimento para cobrir novas dúvidas que surgirem.",
  },
  {
    question: "Preciso mudar meu número de WhatsApp?",
    answer: "Não necessariamente. Podemos criar um número virtual exclusivo para a IA, mantendo seu número atual para outros fins. Ou, se preferir, podemos integrar ao número existente. Você decide o que faz mais sentido para a operação.",
  },
  {
    question: "Como atualizo as informações do shopping?",
    answer: "Você terá acesso a um painel simples onde pode atualizar horários, lojas, eventos e outras informações. As mudanças refletem na IA em tempo real. Também oferecemos suporte para atualizações mais complexas.",
  },
  {
    question: "Posso ver as conversas que a IA teve?",
    answer: "Sim! O dashboard mostra todas as conversas em tempo real. Você pode filtrar por canal, período, assunto e até exportar relatórios. Tudo com total transparência.",
  },
  {
    question: "E se quiser cancelar?",
    answer: "Trabalhamos com contrato de 12 meses, mas entendemos que imprevistos acontecem. Caso precise cancelar, basta um aviso prévio de 30 dias. Não há multa abusiva ou burocracia.",
  },
  {
    question: "Como funciona a integração com nossos sistemas?",
    answer: "A integração com Group Shopping, BeMall ou COM21 depende das APIs disponibilizadas por cada sistema. Fazemos um mapeamento técnico antes de iniciar e propomos as integrações possíveis. Tudo é feito de forma gradual e segura.",
  },
  {
    question: "O sistema funciona 24h mesmo?",
    answer: "Sim, a IA funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Se um cliente enviar mensagem às 3h da manhã, ele receberá resposta instantânea. Para casos que precisam de humano, a IA registra e avisa a equipe no horário comercial.",
  },
  {
    question: "Como os lojistas acessam a plataforma?",
    answer: "Os lojistas terão um número/canal exclusivo para comunicação B2B. Podem usar WhatsApp, Instagram ou email para fazer solicitações, consultar informações e receber comunicados. Tudo unificado na mesma plataforma.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas que Você Pode Ter
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Respondemos as dúvidas mais comuns sobre a implementação da Central de IA
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-900/50 border border-slate-700/50 rounded-lg px-6 data-[state=open]:border-blue-500/30"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
