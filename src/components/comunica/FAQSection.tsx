import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quantas NF posso enviar por mês?",
    answer: "Depende do plano escolhido: Start (até 250), Growth (até 500), Pro (até 750) ou Scale (até 1000 NF/mês). Upgrade disponível a qualquer momento."
  },
  {
    question: "Funciona com boletos parcelados?",
    answer: "Sim! O sistema detecta automaticamente boletos parcelados, agrupa pela chave de acesso da NF e mostra o status: em aberto, completo ou estouro (quando a soma ultrapassa o valor da NF)."
  },
  {
    question: "E se a validação falhar?",
    answer: "Quando há divergência de CNPJ ou valores, o envio vai para revisão manual. O Financeiro ou Admin pode aprovar manualmente após conferência."
  },
  {
    question: "Posso enviar só boleto, sem NF?",
    answer: "Sim, a NF é opcional. Você pode enviar apenas o boleto, e o sistema ainda valida o CNPJ do pagador quando disponível no documento."
  },
  {
    question: "Como funciona a detecção de parcelamento?",
    answer: "O sistema identifica a chave de acesso da NF (quando XML) e agrupa automaticamente todos os boletos vinculados. Calcula a soma das parcelas e compara com o valor total da NF."
  },
  {
    question: "Quais formatos de NF são aceitos?",
    answer: "PDF e XML. O XML é mais preciso porque os dados são estruturados. Para PDF, usamos IA/OCR para extrair as informações, com score de confiabilidade."
  }
];

export default function FAQSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o sistema
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/50 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white hover:text-cyan-400 text-left py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
