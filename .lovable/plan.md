

# Ajuste do Ícone - Bloco Produtividade

## Problema Identificado

O emoji 🤖 (robô) tem um fundo branco nativo que aparece como um "quadrado branco" dentro do círculo. Isso acontece porque alguns emojis têm backgrounds sólidos no design original.

## Solução

Trocar os emojis por ícones do Lucide React (que já são usados em outras partes do projeto) para garantir consistência visual. Isso elimina o problema do fundo branco e mantém o estilo limpo.

---

## Mudança Proposta

### Arquivo
`src/pages/PropostaPromotrip.tsx`

### Linhas 849-856

**Antes (com emojis):**
```tsx
<div className="flex items-center justify-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
    <span className="text-xl">👤</span>
  </div>
  <span className="text-emerald-400 font-bold text-lg">vs</span>
  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
    <span className="text-xl">🤖</span>
  </div>
</div>
```

**Depois (com ícones Lucide):**
```tsx
<div className="flex items-center justify-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
    <User className="w-5 h-5 text-gray-400" />
  </div>
  <span className="text-emerald-400 font-bold text-lg">vs</span>
  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
    <Bot className="w-5 h-5 text-emerald-400" />
  </div>
</div>
```

---

## Ícones a Importar

Adicionar `User` e `Bot` na importação do Lucide (linha ~1-10):

```tsx
import { User, Bot, /* outros já existentes */ } from "lucide-react";
```

---

## Resultado Visual

- Ícone de pessoa: `User` (silhueta limpa, sem fundo)
- Ícone de IA: `Bot` (robô estilizado, sem fundo branco)
- Cores consistentes com o tema emerald do card
- Mesmo estilo visual dos outros blocos

---

## Benefício

- Remove o quadrado branco problemático
- Ícones vetoriais = mais nítidos em qualquer resolução
- Consistência com o design system do Lucide usado no projeto

