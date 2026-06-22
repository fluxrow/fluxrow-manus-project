# Quiz "Diagnóstico IG" — bio link

Página standalone no estilo conversa de WhatsApp (Cauã Farias · Fluxrow) que faz 5 perguntas, gera um score de maturidade e redireciona pro WhatsApp. Cada lead é salvo no backend antes do redirect.

## Rota
- URL pública: `/diagnóstico-IG` (com acento) + alias ASCII `/diagnostico-ig` para evitar problemas de copy/paste.
- Servido como página React lazy (mesmo padrão das outras), não como `public/*.html`, pra ficar integrado ao roteamento e ao SEO do app.

## UI
- Componente novo `src/pages/DiagnosticoIG.tsx` que reproduz fielmente o HTML enviado:
  - Header WhatsApp verde (#075e54), avatar laranja "C", "online agora".
  - Bolhas bot/usr com animação de digitação (3 pontinhos).
  - Botões de opção, input de nome/WhatsApp, card de resultado com barra de progresso, chips de áreas e CTA verde WhatsApp.
- Mesmas perguntas, scores, áreas, faixas de resultado e mensagens de abertura do arquivo enviado — nada alterado no conteúdo.
- Suporte ao `?nome=` igual ao original.
- CTA final mantém `https://wa.me/5541992361868` com mensagem pré-preenchida.
- Estilos isolados em `<style>` inline no componente (não toca no tema cream do site).

## Captura de lead (backend)
- Nova tabela `public.quiz_leads`:
  - `name`, `whatsapp`, `score`, `result_tier` (`baixa`|`media`|`alta`), `areas` (text[]), `answers` (jsonb), `source` (default `diagnostico-ig`), `lang` (default `pt`), `utm` (jsonb), `user_agent`, `referrer`.
  - RLS habilitado; sem grant pra `anon`/`authenticated` — escrita só via edge function com service role. `service_role` com `ALL`.
- Nova edge function `capture-quiz-lead`:
  - Valida com Zod (nome 2-100, whatsapp 8-20, score 0-30, arrays/jsonb limitados).
  - Verifica `apikey`, retorna erros genéricos, sem stack trace (padrão do projeto).
  - Insere com service role; retorna `{ ok: true }` ou `{ ok: false }` genérico.
- Front chama `supabase.functions.invoke('capture-quiz-lead', ...)` no momento em que o WhatsApp é informado, antes de abrir o link. Falha de rede não bloqueia o redirect (lead é "best effort", a conversa do WhatsApp é o que importa).

## SEO
- `<SEO>` com `noindex` (página de bio não precisa indexar) + título "Diagnóstico Fluxrow" + canonical em `/diagnostico-ig`.

## Não toca em
- Páginas `/proposta/positivo`, `/proposta/burati-gt`, `public/diagnostico.html`, tema cream/laranja do site.

## Detalhes técnicos
- Arquivos novos:
  - `src/pages/DiagnosticoIG.tsx`
  - `supabase/functions/capture-quiz-lead/index.ts` (+ `deno.json`)
  - Migration criando `quiz_leads` com GRANT + RLS.
- Editado: `src/App.tsx` adiciona rotas `/diagnóstico-IG` e `/diagnostico-ig` (lazy).
- Migration roda primeiro pra regenerar `types.ts`; depois o front e a edge function.
