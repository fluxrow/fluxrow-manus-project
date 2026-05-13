import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, Instagram, Linkedin } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const channels = [
    {
      icon: MessageCircle,
      eyebrow: 'WhatsApp',
      title: 'Conversa direta com o time',
      description: 'Resposta em horário comercial. Ideal pra dúvida rápida ou proposta.',
      action: 'Abrir WhatsApp',
      link: 'https://wa.me/5541992361868?text=Oi%20Fluxrow%2C%20vim%20do%20site',
    },
    {
      icon: Mail,
      eyebrow: 'E-mail',
      title: 'Para propostas e parcerias',
      description: 'Conta o contexto e a gente te responde com um plano.',
      action: 'Enviar e-mail',
      link: 'mailto:contato@fluxrow.com',
    },
  ];

  const socials = [
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/flux.row/' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com/company/fluxrow' },
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#080807' }}>
      <SEO
        title="Contato — Fluxrow"
        description="Fale com a Fluxrow. WhatsApp, e-mail ou formulário. Atendemos projetos de sistemas com IA, automação e SaaS sob medida."
        path="/contato"
      />
      <Header />

      <main className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-6">
            Contato
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl">
            Conta o que você precisa. A gente responde rápido.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Pra dúvida sobre produto, escopo de projeto ou parceria — escolha o canal
            mais confortável pra você.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-4 mb-16">
          {channels.map((c) => (
            <a
              key={c.eyebrow}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/10 hover:border-white/30 transition-colors p-8 rounded-sm bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <div className="flex items-start gap-4 mb-5">
                <c.icon className="w-5 h-5 text-white/60 mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono mb-2">
                    {c.eyebrow}
                  </p>
                  <h2 className="font-serif text-2xl leading-tight">{c.title}</h2>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {c.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-white group-hover:gap-3 transition-all">
                {c.action} →
              </span>
            </a>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono mb-3">
            Formulário
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
            Ou nos manda uma mensagem por aqui.
          </h2>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 rounded-sm bg-white/[0.02] p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 font-mono mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 font-mono mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-colors"
                    placeholder="voce@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/50 font-mono mb-2">
                  Assunto
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080807] border border-white/15 rounded-sm px-4 py-3 text-white focus:border-white/50 focus:outline-none transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="produto">Dúvida sobre o AI Operator Kit</option>
                  <option value="agencia">Projeto sob medida (Agência)</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/50 font-mono mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-colors resize-none"
                  placeholder="Conte rapidamente seu contexto e o que precisa."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#080807] font-medium rounded-sm hover:bg-white/90 transition-colors text-sm"
              >
                <Send className="w-4 h-4" /> Enviar mensagem
              </button>
            </form>
          ) : (
            <div className="border border-white/10 rounded-sm bg-white/[0.02] p-10 text-center">
              <CheckCircle className="w-10 h-10 text-white/70 mx-auto mb-5" />
              <h3 className="font-serif text-2xl mb-3">Mensagem recebida.</h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                A gente responde em até 1 dia útil. Pra urgência, prefira o WhatsApp.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-white transition-colors"
              >
                Enviar outra mensagem
              </button>
            </div>
          )}
        </section>

        <section className="max-w-5xl mx-auto px-6 pt-12 border-t border-white/5">
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-white/40" />
              <span>(41) 99236-1868</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white/40" />
              <span>contato@fluxrow.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/40" />
              <span>Curitiba · PR</span>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-8">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label={s.name}
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
