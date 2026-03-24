

## Internacionalização completa do site — página por página

### Infraestrutura (primeiro)

**1. Instalar dependências**: `react-i18next`, `i18next`, `i18next-browser-languagedetector`

**2. Criar `src/i18n/index.ts`** — configuração do i18next com detecção automática via `navigator.language` + fallback para inglês

**3. Criar `src/i18n/locales/en.json`** — todas as strings em inglês
**4. Criar `src/i18n/locales/pt.json`** — todas as strings em português (cópia do que já existe)

**5. Criar Edge Function `supabase/functions/detect-language/index.ts`** — lê IP via headers e retorna país/idioma. Chamada uma vez no load, resultado salvo em `localStorage`

**6. Atualizar `src/main.tsx`** — importar i18n antes do render

### Componentes a traduzir (em ordem, um por vez)

| # | Arquivo | Strings principais |
|---|---------|-------------------|
| 1 | `AgencyNav.tsx` | Links de navegação, "Fale Conosco" |
| 2 | `HorizonAgencyHero.tsx` | Títulos das seções, subtítulos, CTAs, stats labels |
| 3 | `ServicesGrid.tsx` | 8 serviços (título, descrição, features, deliverables) |
| 4 | `CasesPortfolio.tsx` | 10 cases (título, descrição, métricas, depoimentos) |
| 5 | `ProcessTimeline.tsx` | 4 steps do processo |
| 6 | `BehindTheScenes.tsx` | Tech categories, showcase blocks, headers |
| 7 | `EnhancedInteractiveBriefing.tsx` | 5 perguntas do briefing, opções, diagnósticos |
| 8 | `AgencyCTA.tsx` | CTA final, footer, links legais |
| 9 | `SEO.tsx` | Meta tags (title, description, og:locale) |
| 10 | `Contato.tsx` | Formulário de contato |

### Como funciona a tradução em cada componente

- Importar `useTranslation` do react-i18next
- Substituir strings hardcoded por `t('chave.do.texto')`
- Manter a mesma estrutura visual — só muda o texto

### Detecção por IP

- No primeiro load, chama a Edge Function que retorna `{ language: "en" | "pt" }`
- Se Brasil → pt, senão → en
- Salva em `localStorage` para não chamar de novo
- Usuário pode trocar manualmente via seletor no nav

### Seletor de idioma no Header

- Botão simples com bandeiras 🇧🇷/🇺🇸 no `AgencyNav`
- Troca instantânea via `i18n.changeLanguage()`

### Ordem de implementação

Vou implementar na seguinte ordem para minimizar erros:
1. Infraestrutura (i18n config + arquivos de tradução + Edge Function)
2. AgencyNav (mais simples, valida que tudo funciona)
3. HeroSection
4. ServicesGrid
5. ... até completar todos os 10 componentes

