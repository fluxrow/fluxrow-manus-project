
# Criar Paginas de Politica de Privacidade e Termos de Uso

## Visao Geral

Criar duas paginas completas seguindo as melhores praticas do mercado brasileiro (LGPD - Lei 13.709/2018) e padroes internacionais (GDPR). O conteudo sera adaptado para a Fluxrow como agencia de marketing digital, IA e automacao.

## Paginas a Criar

### 1. Politica de Privacidade (`/politica-de-privacidade`)
Conteudo baseado nas exigencias da LGPD e praticas de empresas como RD Station, Resultados Digitais e agencias premium:

- **Introducao e identificacao do controlador** (Fluxrow, CNPJ 61.260.831/0001-97)
- **Dados coletados**: dados de navegacao, cookies, formularios de contato/briefing, dados de clientes
- **Finalidades do tratamento**: prestacao de servicos, marketing, analytics, melhoria do site
- **Base legal**: consentimento, execucao de contrato, interesse legitimo
- **Compartilhamento com terceiros**: Google Analytics, Meta Pixel, GPTMaker (widget do site)
- **Cookies e tecnologias de rastreamento**: tipos de cookies usados, como desativar
- **Direitos do titular**: acesso, correcao, exclusao, portabilidade, revogacao do consentimento
- **Retencao de dados**: prazos de armazenamento
- **Seguranca**: medidas tecnicas e organizacionais
- **Contato do DPO/Encarregado**: email para exercicio de direitos
- **Atualizacoes da politica**: data da ultima atualizacao

### 2. Termos de Uso (`/termos-de-uso`)
Conteudo seguindo padroes de empresas de tecnologia e agencias digitais:

- **Aceitacao dos termos**
- **Descricao dos servicos**: automacao, IA generativa, growth marketing, desenvolvimento web
- **Propriedade intelectual**: direitos sobre conteudo do site, marca Fluxrow
- **Uso aceitavel**: restricoes de uso do site
- **Limitacao de responsabilidade**: disclaimers sobre resultados de marketing/IA
- **Propostas e contratos**: relacao entre navegacao no site e contratacao de servicos
- **Disponibilidade do site**: sem garantia de uptime
- **Lei aplicavel e foro**: legislacao brasileira, foro de Curitiba/PR
- **Contato**

## Detalhes Tecnicos

### Arquivos a criar

| Arquivo | Descricao |
|---------|-----------|
| `src/pages/PoliticaPrivacidade.tsx` | Pagina completa de Politica de Privacidade |
| `src/pages/TermosDeUso.tsx` | Pagina completa de Termos de Uso |

### Arquivos a editar

| Arquivo | Mudanca |
|---------|---------|
| `src/App.tsx` | Adicionar rotas lazy-loaded para `/politica-de-privacidade` e `/termos-de-uso` |

### Design das paginas

- Fundo escuro (`bg-[#0a0a0a]`) consistente com o resto do site
- Header com logo Fluxrow + botao "Voltar ao inicio"
- Conteudo em prosa com tipografia legivel (`prose` styles)
- Secoes com titulos claros (`h2`) e paragrafos bem espacados
- Data da ultima atualizacao no topo
- Footer simplificado com links cruzados entre as duas paginas
- Responsivo para mobile
