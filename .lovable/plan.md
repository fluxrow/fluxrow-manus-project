# Acesso ao Kit via Magic Link

Compra no Stripe → email com magic link → usuário clica → entra logado em `/kit` com conteúdo liberado. Sem senha, vitalício, bilíngue.

## Fluxo end-to-end

```
Stripe checkout (paid)
   ↓
payments-webhook
   ├─ upsert kit_purchases (já existe)
   ├─ generateLink(magiclink, email) via Supabase Auth Admin
   └─ invoke send-transactional-email (template kit-delivery-{lang})
                     ↓
        Email com recibo + botão "Acessar o Kit"
                     ↓
        Clique → Supabase cria sessão → /kit?lang=pt|en
                     ↓
        /kit valida sessão + checa kit_purchases.email = auth.email
        ├─ tem compra paga → libera conteúdo
        └─ não tem        → bloqueia + mostra "comprar"

Re-acesso futuro: /login → digita email → recebe novo magic link
```

## O que vai ser construído

### 1. Auth (Lovable Cloud)
- Habilitar provider Email (magic link mode, sem senha obrigatória)
- Configurar redirect URLs: `https://fluxrow.com/kit`, preview e localhost
- Sem signup form — usuário é criado automaticamente pelo `generateLink`

### 2. Webhook (`payments-webhook`)
Adicionar após o upsert em `kit_purchases`:
- `supabase.auth.admin.generateLink({ type: 'magiclink', email, options: { redirectTo: '/kit?lang=' + lang } })`
- Salvar `user_id` em nova coluna de `kit_purchases` para vincular auth.user → compra
- Disparar `send-transactional-email` com `templateName: 'kit-delivery-pt'` ou `'kit-delivery-en'`, passando `magicLink`, `amount`, `currency`, `email`

### 3. Email transacional
- Setup de email infra (Lovable Email, domínio fluxrow.com)
- 2 templates React Email: `kit-delivery-pt.tsx` e `kit-delivery-en.tsx`
  - Recibo: valor pago, data, email
  - CTA primário: "Acessar o Kit" → magic link
  - Nota: "Próximas vezes, entre em fluxrow.com/login com este email"
- Estilo Fluxrow: fundo branco (regra de email), tipografia e cores da marca

### 4. Banco
Migration:
- `ALTER TABLE kit_purchases ADD COLUMN user_id uuid REFERENCES auth.users(id)`
- Função `has_kit_access(user_uuid uuid) RETURNS boolean` (SECURITY DEFINER) — checa se existe compra paga vinculada
- RLS adicional: usuário pode SELECT própria linha de `kit_purchases` (`auth.uid() = user_id`)

### 5. Páginas novas

**`/login`** (PT/EN)
- Input email + botão "Receber link de acesso"
- Chama `supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: '/kit?lang=...' } })`
- Mensagem: "Se você comprou o Kit, vai receber o link em segundos"

**`/kit`** (gated, PT/EN)
- `useEffect` → checa sessão + `has_kit_access(user.id)`
- Se sem sessão → redirect `/login`
- Se sessão sem compra → mensagem "Esse email não tem acesso. Comprar →"
- Se ok → renderiza conteúdo do Kit
- Header com idioma, logout, email do usuário

**Conteúdo do Kit (placeholder nesta fase):**
- Estrutura de capítulos hardcoded em TS (`src/content/kitChapters.ts`)
- Layout de leitura: sidebar com 10 capítulos + área de conteúdo
- Cada capítulo = arquivo MDX/TSX renderizado
- **Conteúdo real fica como TODO** — estrutura pronta, capítulos com lorem/outline. Você preenche depois sem mexer em código.

### 6. Atualização do CTA da venda
- `CheckoutReturn` agora explica: "Confira seu email — enviamos o link de acesso ao Kit"
- Remove qualquer expectativa de acesso imediato sem clicar no email

## Detalhes técnicos

**Vinculação compra ↔ usuário:** o webhook chama `auth.admin.createUser` (ou `generateLink` que cria implicitamente), recebe o `user.id`, e salva em `kit_purchases.user_id`. Isso garante que `has_kit_access(auth.uid())` funciona mesmo se o usuário re-logar 6 meses depois.

**Idempotência:** webhook já é idempotente via `stripe_session_id` unique. `generateLink` é seguro de chamar múltiplas vezes para o mesmo email (não duplica usuário). Email tem `idempotencyKey: kit-delivery-{session_id}` pra não enviar 2x.

**Magic link expira em 1h** (padrão Supabase). Se expirar, usuário vai em `/login` e pede novo. Sem fricção.

**Bilíngue:** `lang` vem da `kit_purchases`, é passado pro template (`kit-delivery-pt` vs `-en`) e como query param no `redirectTo`.

**Re-envio manual:** se o email não chegar, você roda um script ou botão admin que chama `signInWithOtp` pro email do comprador. Sem suporte ticket complicado.

## Arquivos novos/editados

```
Migration:
  + alter kit_purchases (user_id)
  + has_kit_access() function
  + RLS policy own purchase

Edge Functions:
  ~ payments-webhook/index.ts          (gera magic link + envia email)
  + send-transactional-email           (via scaffold)
  + _shared/transactional-email-templates/
      + kit-delivery-pt.tsx
      + kit-delivery-en.tsx
      + registry.ts

Frontend:
  + src/pages/Login.tsx                (PT/EN)
  + src/pages/Kit.tsx                  (gated reader)
  + src/components/kit/ChapterSidebar.tsx
  + src/components/kit/ChapterReader.tsx
  + src/content/kitChapters.ts         (estrutura, conteúdo placeholder)
  ~ src/pages/CheckoutReturn.tsx       (copy: "veja seu email")
  ~ src/App.tsx                        (rotas /login, /kit)
```

## Ordem de execução

1. Migration (kit_purchases.user_id + has_kit_access + RLS)
2. Habilitar Auth email/magic link
3. Setup email infra + scaffold transacional + 2 templates kit-delivery
4. Atualizar webhook (gera magic link + envia email + grava user_id)
5. Página /login
6. Página /kit + estrutura de capítulos com placeholder
7. Atualizar CheckoutReturn
8. Teste end-to-end com compra sandbox

## Fora de escopo (decidir depois)

- **Conteúdo real dos capítulos** — estrutura fica pronta, você popula
- Painel admin pra ver compradores / re-enviar link
- Progresso de leitura por capítulo
- Comentários, downloads de assets, vídeos
