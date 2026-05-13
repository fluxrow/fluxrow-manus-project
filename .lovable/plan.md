# Reorganização Fluxrow — plano definitivo

Baseado nas suas respostas:
- **Curso premium**: descontinuado, arquivar tudo
- **Kit**: bilingue PT + EN
- **Vende**: sistemas, SaaS e automações + conhecimento empacotado (curso, conteúdo, passo a passo)
- **Meta**: renda passiva o mais rápido possível

## Posicionamento que o site vai comunicar

Fluxrow vende dois caminhos:
1. **Feito-pra-você** (agência) — sistemas, SaaS e automações sob medida (B2B, ticket alto)
2. **Feito-por-você** (produtos) — Kit + futuros cursos/conteúdos para pessoa comprar e operar sozinho (renda passiva)

Home roteia o visitante para um dos dois caminhos rápido. Sem ambiguidade.

## Nova arquitetura de rotas

```text
/                           Home (3 blocos: hero + caminho agência + caminho produtos)
/agencia                    Landing da agência (sistemas, SaaS, automação B2B)
/contato                    Briefing/contato

/produtos                   Vitrine dos produtos (hoje só o Kit)
/produtos/ai-operator-kit   Kit em EN (atual /kit)
/produtos/kit-operador-ia   Kit em PT (nova versão)

/conteudos                  Hub editorial (9 posts atuais, sem mexer)
/conteudos/:slug            Posts (mantém URLs existentes)

/p/:slug                    Propostas privadas (noindex)
/c/:slug                    Contratos privados (noindex)

/politica-de-privacidade
/termos-de-uso
```

## Rotas que somem (com 301 via Navigate)

| De | Para |
|---|---|
| `/curso`, `/modulos`, `/materiais` | `/produtos` |
| `/modulos/1-premium`, `/2-premium`, `/3-premium` | `/produtos` |
| `/curso-ia-operator`, `/produtos/operator-curso` | `/produtos` |
| `/kit` | `/produtos/ai-operator-kit` (mantém EN canonical) |

## Arquivos deletados (curso descontinuado)

- `src/pages/Curso.tsx`
- `src/pages/Modulos.tsx`
- `src/pages/Materiais.tsx`
- `src/pages/Modulo1Premium.tsx`
- `src/pages/Modulo2Premium.tsx`
- `src/pages/Modulo3Premium.tsx`
- `src/pages/CursoIAOperator.tsx`
- `src/components/curso/*` (ModuleComponents, ModuleNavigation, ProgressSidebar)

## Kit bilingue — como vai funcionar

- `/produtos/ai-operator-kit` → componente atual `AIOperatorKitSales` (EN, intacto)
- `/produtos/kit-operador-ia` → nova página PT, mesma estrutura, copy traduzida e adaptada para BR (preço em BRL via Stripe quando você quiser ativar)
- Hub `/produtos` mostra os dois cards com bandeira de idioma; detecção de idioma do navegador sugere o card relevante mas não força
- `<link rel="alternate" hreflang="en">` e `hreflang="pt-BR"` cruzados entre as duas

## Home reescrita (foco renda passiva)

3 blocos:
1. **Hero** — "Sistemas que rodam sozinhos" (mantém estética atual)
2. **Caminho A — Compre o sistema pronto** → CTA `/produtos` (destaque visual, é o que gera renda passiva)
3. **Caminho B — Construímos pra você** → CTA `/agencia` (B2B alto ticket)

Sem misturar curso descontinuado, sem cluster editorial gigante. Conteúdo fica em `/conteudos` como apoio SEO mas não é destaque.

## Execução em 4 fases

### Fase A — Limpeza (deletar curso)
- Apagar 7 páginas + pasta `components/curso/`
- Remover rotas correspondentes em `App.tsx`
- Adicionar `<Navigate>` 301 das URLs antigas para `/produtos`
- Atualizar Header/Footer/HeroSection (remover qualquer link pra módulos)
- Atualizar sitemap

### Fase B — Kit PT
- Criar `src/pages/KitOperadorIA.tsx` (clone PT do `AIOperatorKitSales`)
- Adicionar rota `/produtos/kit-operador-ia`
- Atualizar `ProdutosHub.tsx`: 2 cards (EN + PT), cada um com hreflang
- Adicionar hreflang nas duas páginas

### Fase C — Home reescrita
- Refazer `Index.tsx` com 3 blocos focados (hero + caminho produtos + caminho agência)
- Sem o conteúdo do curso espalhado
- CTAs claros para `/produtos` e `/agencia`

### Fase D — Polish
- Sitemap atualizado
- Robots.txt revisado
- Atualizar memória do projeto (Kit deixa de ser "English only")

## O que NÃO toco
- Three.js / hero visual
- Sistema de relatórios (`/relatorio/*`, `/admin/*`)
- Stripe checkout
- Briefing Alek
- 9 posts de conteúdo (ficam onde estão)
- Propostas/contratos individuais

## Pergunta antes de começar

Posso começar pela **Fase A (deletar curso)** agora? É a mudança mais agressiva — depois dela não tem volta sem reverter no Git. Você confirma que esses 7 arquivos podem morrer?
