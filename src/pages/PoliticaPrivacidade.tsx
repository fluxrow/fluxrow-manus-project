import { Link } from "react-router-dom";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import BackToHomeButton from "@/components/ui/BackToHomeButton";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Política de Privacidade</h1>
          <p className="text-sm text-gray-500">Última atualização: 12 de fevereiro de 2026</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          {/* 1. Introdução */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introdução e Identificação do Controlador</h2>
            <p>
              A <strong className="text-white">Fluxrow</strong>, inscrita no CNPJ sob o nº 61.260.831/0001-97, com sede em Curitiba/PR, é a controladora dos dados pessoais tratados por meio deste site e dos serviços prestados. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD) e com as melhores práticas internacionais de proteção de dados.
            </p>
            <p className="mt-3">
              Ao acessar ou utilizar nosso site e serviços, você declara estar ciente e de acordo com as disposições desta Política. Caso não concorde com qualquer disposição, recomendamos que interrompa o uso do site.
            </p>
          </section>

          {/* 2. Dados Coletados */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Dados Pessoais Coletados</h2>
            <p className="mb-3">Coletamos os seguintes tipos de dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Dados de navegação:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência, URL de origem e dados de geolocalização aproximada.</li>
              <li><strong className="text-white">Dados de formulários:</strong> nome, e-mail, telefone, empresa, cargo e demais informações fornecidas voluntariamente em formulários de contato, briefing ou solicitação de proposta.</li>
              <li><strong className="text-white">Dados de interação:</strong> mensagens trocadas via chat (widget GPTMaker), respostas a formulários interativos e briefings.</li>
              <li><strong className="text-white">Dados contratuais:</strong> nome completo, CPF/CNPJ, endereço, dados de assinatura digital e informações necessárias para a formalização de contratos de prestação de serviços.</li>
              <li><strong className="text-white">Dados de cookies e tecnologias similares:</strong> identificadores únicos, preferências de navegação e dados de rastreamento para fins analíticos e publicitários.</li>
            </ul>
          </section>

          {/* 3. Finalidades */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalidades do Tratamento</h2>
            <p className="mb-3">Os dados pessoais coletados são utilizados para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prestação de serviços de marketing digital, automação, inteligência artificial e desenvolvimento web;</li>
              <li>Envio de propostas comerciais, apresentações e materiais relacionados aos nossos serviços;</li>
              <li>Comunicação com clientes e potenciais clientes;</li>
              <li>Análise de métricas e desempenho do site por meio de ferramentas de analytics;</li>
              <li>Personalização da experiência de navegação e otimização de campanhas publicitárias;</li>
              <li>Cumprimento de obrigações legais e regulatórias;</li>
              <li>Exercício regular de direitos em processos judiciais, administrativos ou arbitrais.</li>
            </ul>
          </section>

          {/* 4. Base Legal */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Base Legal para o Tratamento</h2>
            <p className="mb-3">O tratamento de dados pessoais é realizado com fundamento nas seguintes bases legais previstas na LGPD (Art. 7º):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Consentimento (Art. 7º, I):</strong> quando o titular fornece seus dados voluntariamente em formulários ou aceita cookies opcionais.</li>
              <li><strong className="text-white">Execução de contrato (Art. 7º, V):</strong> para a prestação dos serviços contratados e cumprimento de obrigações contratuais.</li>
              <li><strong className="text-white">Interesse legítimo (Art. 7º, IX):</strong> para análises internas, melhoria dos serviços e comunicações de marketing direto, desde que respeitados os direitos do titular.</li>
              <li><strong className="text-white">Cumprimento de obrigação legal (Art. 7º, II):</strong> quando exigido por legislação aplicável.</li>
            </ul>
          </section>

          {/* 5. Compartilhamento */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Compartilhamento de Dados com Terceiros</h2>
            <p className="mb-3">Podemos compartilhar seus dados pessoais com os seguintes terceiros, exclusivamente para as finalidades descritas nesta Política:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Google Analytics:</strong> análise de tráfego e comportamento de navegação no site.</li>
              <li><strong className="text-white">Meta Pixel (Facebook/Instagram):</strong> mensuração de conversões e otimização de campanhas publicitárias nas plataformas Meta.</li>
              <li><strong className="text-white">GPTMaker:</strong> processamento de interações via widget de chat com inteligência artificial integrado ao site.</li>
              <li><strong className="text-white">Provedores de infraestrutura:</strong> serviços de hospedagem, armazenamento em nuvem e processamento de dados necessários à operação do site.</li>
            </ul>
            <p className="mt-3">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para finalidades distintas das aqui descritas sem o seu consentimento prévio.
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Cookies e Tecnologias de Rastreamento</h2>
            <p className="mb-3">Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação. Os tipos de cookies utilizados são:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Cookies essenciais:</strong> necessários para o funcionamento básico do site, não podem ser desativados.</li>
              <li><strong className="text-white">Cookies analíticos:</strong> utilizados para coletar dados sobre como os visitantes usam o site (Google Analytics), permitindo melhorias contínuas.</li>
              <li><strong className="text-white">Cookies de marketing:</strong> utilizados para rastrear visitantes em diferentes sites e exibir anúncios relevantes (Meta Pixel).</li>
              <li><strong className="text-white">Cookies de funcionalidade:</strong> permitem que o site lembre suas preferências e forneça funcionalidades aprimoradas.</li>
            </ul>
            <p className="mt-3">
              Você pode gerenciar suas preferências de cookies nas configurações do seu navegador. A desativação de certos cookies pode impactar a funcionalidade do site.
            </p>
          </section>

          {/* 7. Direitos do Titular */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Direitos do Titular dos Dados</h2>
            <p className="mb-3">Em conformidade com a LGPD (Art. 18), você tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados pessoais tratados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
              <li>Eliminação dos dados tratados com base no consentimento;</li>
              <li>Informação sobre entidades públicas e privadas com as quais os dados foram compartilhados;</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
              <li>Revogação do consentimento a qualquer tempo.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail: <a href="mailto:contato@fluxrow.com" className="text-cyan-400 hover:underline">contato@fluxrow.com</a>.
            </p>
          </section>

          {/* 8. Retenção */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Retenção de Dados</h2>
            <p>
              Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes. Dados de clientes são retidos durante a vigência do contrato e por até 5 (cinco) anos após seu encerramento, conforme legislação aplicável. Dados de navegação e analytics são retidos por até 26 meses.
            </p>
          </section>

          {/* 9. Segurança */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão. Utilizamos criptografia, controles de acesso, monitoramento de atividades e outras práticas alinhadas aos padrões de segurança da informação.
            </p>
          </section>

          {/* 10. Encarregado */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Encarregado de Proteção de Dados (DPO)</h2>
            <p>
              Para questões relacionadas ao tratamento de dados pessoais, exercício de direitos ou dúvidas sobre esta Política, entre em contato com o Encarregado de Proteção de Dados:
            </p>
            <div className="mt-3 p-4 border border-white/10 rounded-lg bg-white/5">
              <p><strong className="text-white">Fluxrow</strong></p>
              <p>E-mail: <a href="mailto:contato@fluxrow.com" className="text-cyan-400 hover:underline">contato@fluxrow.com</a></p>
              <p>Curitiba/PR — Brasil</p>
            </div>
          </section>

          {/* 11. Atualizações */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Atualizações desta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de tratamento de dados ou em razão de alterações legislativas. Recomendamos que você revise esta página regularmente. A data da última atualização será sempre indicada no topo deste documento.
            </p>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fluxrow. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/termos-de-uso" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link>
            <Link to="/" className="hover:text-cyan-400 transition-colors">Página Inicial</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidade;
