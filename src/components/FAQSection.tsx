import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona o acesso ao curso?',
      answer: 'Após a compra, você recebe acesso imediato à plataforma com todos os módulos, materiais e bônus. Tudo fica disponível na sua área do aluno.',
    },
    {
      question: 'Existe garantia?',
      answer: 'Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor pago.',
    },
    {
      question: 'Preciso de conhecimento técnico?',
      answer: 'Não! O curso foi pensado para pessoas sem conhecimento técnico. Explicamos tudo do básico ao avançado, passo a passo.',
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer: 'O acesso é vitalício. Você pode acessar o conteúdo quando quiser, quantas vezes precisar, para sempre.',
    },
    {
      question: 'Posso usar no meu negócio atual?',
      answer: 'Sim! As técnicas ensinadas podem ser aplicadas em qualquer área: vendas, marketing, atendimento, criação de conteúdo e muito mais.',
    },
    {
      question: 'E se eu não conseguir implementar?',
      answer: 'Oferecemos suporte completo através do WhatsApp e comunidade exclusiva. Você nunca estará sozinho nessa jornada.',
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Muitos alunos relatam primeiros resultados em 24-48h. Em 30 dias você já domina as principais técnicas e vê transformações significativas.',
    },
    {
      question: 'O investimento vale a pena?',
      answer: 'Uma única automação bem feita pode economizar dezenas de horas por semana. O retorno do investimento acontece rapidamente.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-xl text-white/90 font-space-grotesk max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar sua transformação com IA
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-gray-700 hover:border-cyan-500/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold font-space-grotesk text-white hover:text-cyan-400 transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 font-space-grotesk leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/80 font-space-grotesk mb-6">
            Ainda tem dúvidas? Fale conosco diretamente!
          </p>
          <a
            href="https://wa.me/5541992361868"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold font-space-grotesk hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;