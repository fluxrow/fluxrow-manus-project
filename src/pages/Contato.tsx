import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, Instagram, Facebook, Twitter, Hash } from 'lucide-react';

const Contato = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('contact.whatsapp.title'),
      description: t('contact.whatsapp.description'),
      action: t('contact.whatsapp.action'),
      link: 'https://wa.me/5541992361868',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      description: t('contact.email.description'),
      action: t('contact.email.action'),
      link: 'mailto:suporte@fluxrow.com.br',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialMedias = [
    { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/flux.row/', color: 'from-pink-500 to-purple-500' },
    { name: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/fluxrow', color: 'from-blue-600 to-blue-700' },
    { name: 'Pinterest', icon: 'pinterest', link: 'https://www.pinterest.com/fluxrow', color: 'from-red-500 to-red-600' },
    { name: 'X (Twitter)', icon: 'twitter', link: 'https://www.threads.com/@flux.row?igshid=NTc4MTIwNjQ2YQ==', color: 'from-gray-800 to-black' },
    { name: 'Threads', icon: 'MessageCircle', link: 'https://www.threads.com/@flux.row?igshid=NTc4MTIwNjQ2YQ==', color: 'from-gray-700 to-gray-800' }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <SEO
        title={`${t('contact.title')} - Fluxrow`}
        description={t('contact.subtitle')}
        path="/contato"
      />
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-16 px-6 bg-gradient-to-r from-green-900/20 via-black to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">{t('contact.title')}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 font-space-grotesk">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">{method.title}</h3>
                    <p className="text-white/90 font-space-grotesk mb-6">{method.description}</p>
                    <a href={method.link} target="_blank" rel="noopener noreferrer" className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full font-semibold font-space-grotesk hover:opacity-90 transition-all duration-300`}>
                      {method.action}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">{t('contact.social.title')}</span>
              </h2>
              <p className="text-white/90 font-space-grotesk">{t('contact.social.subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {socialMedias.map((social, index) => {
                const getIcon = (iconName: string) => {
                  switch(iconName) {
                    case 'instagram': return Instagram;
                    case 'facebook': return Facebook;
                    case 'twitter': return Twitter;
                    case 'pinterest': return Hash;
                    default: return MessageCircle;
                  }
                };
                const IconComponent = getIcon(social.icon);
                return (
                  <div key={index} className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold font-space-grotesk text-white">{social.name}</h4>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" className={`inline-block mt-3 bg-gradient-to-r ${social.color} text-white px-4 py-2 rounded-full text-xs font-semibold font-space-grotesk hover:opacity-90 transition-all duration-300`}>
                      {t('contact.social.follow')}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">{t('contact.form.title')}</span>
              </h2>
              <p className="text-white/90 font-space-grotesk">{t('contact.form.subtitle')}</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="glass-card p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white/90 font-space-grotesk mb-2">{t('contact.form.name')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white font-space-grotesk focus:border-cyan-500 focus:outline-none" placeholder={t('contact.form.namePlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-white/90 font-space-grotesk mb-2">{t('contact.form.email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white font-space-grotesk focus:border-cyan-500 focus:outline-none" placeholder={t('contact.form.emailPlaceholder')} />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white/90 font-space-grotesk mb-2">{t('contact.form.subject')}</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white font-space-grotesk focus:border-cyan-500 focus:outline-none">
                    <option value="">{t('contact.form.subjectPlaceholder')}</option>
                    <option value="duvida-curso">{t('contact.form.subjects.course')}</option>
                    <option value="problema-tecnico">{t('contact.form.subjects.technical')}</option>
                    <option value="suporte-pagamento">{t('contact.form.subjects.payment')}</option>
                    <option value="parceria">{t('contact.form.subjects.partnership')}</option>
                    <option value="outro">{t('contact.form.subjects.other')}</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label className="block text-white/90 font-space-grotesk mb-2">{t('contact.form.message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white font-space-grotesk focus:border-cyan-500 focus:outline-none resize-none" placeholder={t('contact.form.messagePlaceholder')} />
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-4 rounded-full font-bold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>{t('contact.form.submit')}</span>
                </button>
              </form>
            ) : (
              <div className="glass-card p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">{t('contact.form.success.title')}</h3>
                <p className="text-white/90 font-space-grotesk mb-6">{t('contact.form.success.description')}</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300">
                  {t('contact.form.success.newMessage')}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
