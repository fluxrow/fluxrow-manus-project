

## Links Publicos para Propostas de Clientes

Criar rotas publicas `/p/:slug` que permitem clientes acessarem diretamente suas propostas sem PIN e sem ver o dashboard com outras propostas. O painel `/propostas` continua protegido por PIN para uso interno.

---

### O que muda

1. **Nova rota publica `/p/:slug`** - Cada cliente recebe um link direto como `fluxrow.com/p/teresopolis` que abre apenas a proposta dele, sem PIN e sem dashboard.

2. **Dashboard interno intacto** - `/propostas` continua protegido pelo PIN 2907 como esta hoje.

---

### Detalhes Tecnicos

**1. Criar pagina `src/pages/PropostaPublica.tsx`**
- Recebe o `:slug` da URL
- Busca a proposta correspondente no array `propostas` de `src/data/propostas.ts`
- Se o slug existir, renderiza o componente da proposta (ex: `PropostaTeresopolis`)
- Se nao existir, mostra pagina 404
- Sem header, sem dashboard, sem acesso a outras propostas
- Meta tags noindex/nofollow para nao indexar

**2. Criar mapeamento slug -> componente**
- Um objeto simples que mapeia cada slug ao seu componente lazy-loaded (reutilizando os mesmos imports do App.tsx)

**3. Adicionar rotas no `App.tsx`**
- Adicionar `<Route path="/p/:slug" element={<PropostaPublica />} />` antes do catch-all
- Cada proposta fica acessivel em `/p/teresopolis`, `/p/match-solutions`, etc.

**4. Atualizar `src/data/propostas.ts`**
- Adicionar campo `rotaPublica` em cada proposta (ex: `/p/teresopolis`) para facilitar copiar/compartilhar o link no dashboard interno

---

### Links de exemplo para compartilhar com clientes

- `fluxrow.com/p/teresopolis` - Teresopolis Shopping
- `fluxrow.com/p/match-solutions` - Match Solutions
- `fluxrow.com/p/amanda-neves` - Amanda Neves
- `fluxrow.com/p/promotrip` - Promotrip
- `fluxrow.com/p/evolua-digital` - Evolua Digital
- `fluxrow.com/p/comunica` - Comunica
- `fluxrow.com/p/babora-seguros` - Babora Seguros

