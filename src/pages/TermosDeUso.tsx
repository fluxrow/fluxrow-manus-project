import { Link } from "react-router-dom";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import BackToHomeButton from "@/components/ui/BackToHomeButton";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-[#080807] text-gray-300">
      <BackToHomeButton />

      {/* Header */}
      <header className="border-b border-white/10 py-6">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Link to="/">
            <FluxrowLogo size="md" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Termos de Uso</h1>
          <p className="text-sm text-gray-500">Última atualização: 12 de fevereiro de 2026</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          {/* 1. Aceitação */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong className="text-white">Fluxrow</strong> (CNPJ 61.260.831/0001-97), você concorda integralmente com os presentes Termos de Uso. Caso não concorde com qualquer disposição aqui estabelecida, recomendamos que interrompa imediatamente o uso do site.
            </p>
            <p className="mt-3">
              Estes Termos podem ser atualizados a qualquer momento, sem aviso prévio. O uso continuado do site após eventuais alterações constitui aceitação dos novos termos.
            </p>
          </section>

          {/* 2. Descrição dos Serviços */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Descrição dos Serviços</h2>
            <p className="mb-3">A Fluxrow é uma agência especializada em soluções digitais, oferecendo os seguintes serviços:</p>
            <ul className="list-disc pl-6 space-y-2 break-words">
              <li><strong className="text-white">Growth Marketing:</strong> estratégias de aquisição, retenção e crescimento baseadas em dados e performance.</li>
              <li><strong className="text-white">Automação e IA Generativa:</strong> implementação de fluxos automatizados, chatbots inteligentes e soluções com inteligência artificial para otimização de processos.</li>
              <li><strong className="text-white">Desenvolvimento Web:</strong> criação de sites, landing pages, sistemas web e aplicações digitais.</li>
              <li><strong className="text-white">Gestão de Tráfego Pago:</strong> gerenciamento de campanhas em Google Ads, Meta Ads e outras plataformas de mídia paga.</li>
              <li><strong className="text-white">Consultoria Digital:</strong> análise estratégica, relatórios de performance e planejamento de marketing digital.</li>
            </ul>
            <p className="mt-3">
              O site serve como vitrine institucional e canal de apresentação de propostas comerciais, não constituindo, por si só, oferta vinculante de serviços.
            </p>
          </section>

          {/* 3. Propriedade Intelectual */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site — incluindo, mas não se limitando a, textos, imagens, gráficos, logotipos, ícones, vídeos, layouts, código-fonte, design e a marca Fluxrow — é de propriedade exclusiva da Fluxrow ou de seus licenciadores, estando protegido pelas leis brasileiras de propriedade intelectual (Lei nº 9.610/98 e Lei nº 9.279/96).
            </p>
            <p className="mt-3">
              É proibida a reprodução, distribuição, modificação, exibição pública ou qualquer outra forma de utilização do conteúdo sem autorização prévia e expressa da Fluxrow.
            </p>
          </section>

          {/* 4. Uso Aceitável */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Uso Aceitável</h2>
            <p className="mb-3">Ao utilizar este site, você se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 break-words">
              <li>Não utilizar o site para fins ilícitos ou contrários à moral e aos bons costumes;</li>
              <li>Não tentar acessar áreas restritas do site ou sistemas da Fluxrow sem autorização;</li>
              <li>Não reproduzir, copiar ou distribuir conteúdo do site sem autorização prévia;</li>
              <li>Não inserir ou transmitir vírus, malware ou qualquer código malicioso;</li>
              <li>Não utilizar ferramentas de raspagem de dados (web scraping) ou mineração automatizada;</li>
              <li>Fornecer informações verdadeiras e atualizadas nos formulários disponíveis.</li>
            </ul>
          </section>

          {/* 5. Limitação de Responsabilidade */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitação de Responsabilidade</h2>
            <p>
              O conteúdo deste site é fornecido "como está" (as is), sem garantias de qualquer natureza, expressas ou implícitas. A Fluxrow não garante que:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3 break-words">
              <li>O site estará disponível de forma ininterrupta ou livre de erros;</li>
              <li>Os resultados obtidos com os serviços de marketing, IA ou automação corresponderão a expectativas específicas do contratante, uma vez que dependem de múltiplos fatores externos;</li>
              <li>As informações apresentadas no site sejam completas, precisas ou atualizadas em todos os momentos.</li>
            </ul>
            <p className="mt-3">
              A Fluxrow não se responsabiliza por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da impossibilidade de uso do site.
            </p>
          </section>

          {/* 6. Propostas e Contratos */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Propostas Comerciais e Contratos</h2>
            <p>
              As propostas comerciais apresentadas por meio deste site têm caráter informativo e ilustrativo. A contratação efetiva de serviços ocorre somente mediante a formalização de contrato específico entre as partes, com termos, condições, prazos e valores definidos individualmente para cada projeto.
            </p>
            <p className="mt-3">
              A navegação no site ou o preenchimento de formulários não constitui, por si só, vínculo contratual entre o visitante e a Fluxrow.
            </p>
          </section>

          {/* 7. Disponibilidade */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Disponibilidade do Site</h2>
            <p>
              A Fluxrow se esforça para manter o site disponível 24 horas por dia, 7 dias por semana, mas não garante disponibilidade ininterrupta. O site pode ser temporariamente indisponível para manutenção, atualizações ou por motivos de força maior, sem que isso gere direito a indenização.
            </p>
          </section>

          {/* 8. Links Externos */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Links para Sites de Terceiros</h2>
            <p>
              Este site pode conter links para sites de terceiros. A Fluxrow não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Recomendamos que você leia os termos e políticas de privacidade de qualquer site de terceiros que visitar.
            </p>
          </section>

          {/* 9. Lei Aplicável e Foro */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Curitiba, Estado do Paraná, como competente para dirimir quaisquer questões decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          {/* 10. Contato */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contato</h2>
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso, entre em contato:
            </p>
            <div className="mt-3 p-4 border border-white/10 rounded-lg bg-white/5">
              <p><strong className="text-white">Fluxrow</strong></p>
              <p>E-mail: <a href="mailto:contato@fluxrow.com" className="text-white hover:underline">contato@fluxrow.com</a></p>
              <p>CNPJ: 61.260.831/0001-97</p>
              <p>Curitiba/PR — Brasil</p>
            </div>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fluxrow. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/" className="hover:text-white transition-colors">Página Inicial</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermosDeUso;
