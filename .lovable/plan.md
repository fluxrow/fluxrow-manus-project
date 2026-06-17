## Entendi

Manter o tema novo (fundo cream `#F5F3EE` + accent laranja `#FF6709` + texto escuro `#1A1A1A`) na home e nas outras rotas públicas. O problema é só **texto/borda/fundo que ficaram com classes do tema dark** (`text-white`, `text-white/70`, `border-white/15`, `bg-white/[0.04]` etc.) e por isso sumiram no fundo cream.

A correção é trocar essas classes pelas equivalentes no tema claro nas páginas/componentes globais.

## Arquivos a ajustar

Só os que renderizam sobre o fundo cream e estão usando classes do tema escuro:

- `src/pages/Index.tsx` — hero, badges, stats, cards "Dois perfis", seções subsequentes (várias ocorrências de `text-white*`, `border-white/*`, `bg-white/*`).
- `src/pages/Agencia.tsx` — todas as seções com texto/borda branca.
- `src/pages/ProdutosHub.tsx`, `src/pages/Conteudos.tsx`, `src/pages/Contato.tsx`, `src/pages/Blog.tsx` — se estiverem renderizando com Header/Footer novos e ainda tiverem texto branco, mesmo tratamento.
- Componentes compartilhados que aparecem nessas páginas e ainda estão no esquema escuro: `HeroSection`, `FAQSection`, `PricingSection`, `Footer`, `BenefitsMobileCards`, `TestimonialsMobileCards`, `SimpleAISection`, `InfiniteCarousel`, `DemoSection`, `LeadCaptureForm`, `ai-showcase/*`, `fluxrow/SectionBadge`, `fluxrow/Counter` etc. (vou varrer e tratar caso a caso).

## Mapeamento de substituições (tema dark → tema cream Burati)

| Antes (dark) | Depois (cream) |
|---|---|
| `text-white` | `text-[#1A1A1A]` |
| `text-white/90` `/85` `/80` `/75` `/70` | `text-[#1A1A1A]/75` |
| `text-white/65` `/60` `/55` `/50` `/45` `/40` | `text-[#1A1A1A]/55` |
| `text-gray-300` `text-gray-400` | `text-[#1A1A1A]/65` |
| `border-white/20` `/15` `/10` `/5` | `border-[#1A1A1A]/12` |
| `bg-white/[0.04]` `bg-white/[0.03]` `bg-white/5` `bg-white/10` | `bg-[#1A1A1A]/[0.04]` |
| `bg-white/85` `bg-white` (badges/dots de destaque) | `bg-[#FF6709]` |
| `bg-black` `bg-[#080807]` `bg-[#0a0a0a]` em wrappers globais | `bg-[#F5F3EE]` |
| `text-cyan/purple/pink` em gradient hero (logo accent) | substituir gradient por `text-[#FF6709]` ou manter o `gradient-accent-text` (avalio por componente — se ficar borrado no cream eu troco pelo laranja sólido) |

## Hierarquia de contraste no tema cream

- **Heading principal:** `text-[#1A1A1A]` (preto carbono)
- **Body / parágrafos:** `text-[#1A1A1A]/75`
- **Texto secundário / labels / captions:** `text-[#1A1A1A]/55`
- **Texto desativado / metadado:** `text-[#1A1A1A]/40`
- **Borda sutil:** `border-[#1A1A1A]/10` a `/15`
- **Fundo de card:** `bg-[#1A1A1A]/[0.03]` ou branco puro `bg-white` com `border-[#1A1A1A]/10`
- **Accent / CTA / hover:** `#FF6709` (laranja Burati)

## O que NÃO será tocado

- `src/pages/PropostaPositivo.tsx` e `src/components/positivo/*` — intocado.
- `src/pages/PropostaBuratiGT.tsx` — intocado.
- Wrapper `bg-[#F5F3EE] text-[#1A1A1A]` e Header/Footer já no tema claro — ficam como estão; só ajusto o conteúdo interno.
- Lógica, dados, rotas, SEO, animações — sem mudança. Só classes de cor.

## Como vou executar

1. Listar todas as ocorrências de classes do tema dark dentro dos arquivos no escopo (sem entrar em `positivo/` ou `PropostaBuratiGT`).
2. Aplicar as substituições da tabela acima componente por componente.
3. Rodar Playwright em `/`, `/agencia`, `/produtos`, `/conteudos`, `/contato`, `/blog` para conferir contraste visualmente.
4. Abrir `/proposta/positivo` e `/proposta/burati-gt` para confirmar que continuam idênticos.
