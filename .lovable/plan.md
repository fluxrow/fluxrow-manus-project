
# Plano de Consistência Visual - Cards de Benefícios

## Situação Atual

Temos 3 seções com cards diferentes, cada um com estilos distintos:

### 1. Seção "Escale Sem Limites" (linhas 842-917)
- **Card 1 (Produtividade)**: ✅ Novo estilo com comparativo visual 👤 vs 🤖
- **Card 2 (Soluções Personalizadas)**: Estilo antigo com ícone grande + texto
- **Card 3 (Suporte Direto)**: Estilo antigo com ícone grande + texto

### 2. Seção "Por Que Investir Agora" (linhas 920-940)
- Cards simples do array `beneficios` - estilo padrão básico

---

## Proposta de Padronização

### Opção A: Aplicar mini-comparativos em TODOS os cards "Escale Sem Limites"

Transformar os 3 cards em comparativos visuais:

```text
CARD 1 (atual)          CARD 2 (novo)              CARD 3 (novo)
+-------------------+   +-------------------+      +-------------------+
| 👤 vs 🤖          |   | 🔧 vs 📦          |      | 🎫 vs 💬          |
| Produtividade     |   | Personalização    |      | Suporte           |
|                   |   |                   |      |                   |
| Manual: ~50/dia   |   | Software pronto:  |      | Ticket:           |
| IA: 3.000+/dia    |   | Você se adapta    |      | Resposta em dias  |
|                   |   |                   |      |                   |
| Manual: 8h        |   | Sob medida:       |      | WhatsApp:         |
| IA: 24/7          |   | Sistema se adapta |      | Resposta imediata |
+-------------------+   +-------------------+      +-------------------+
```

### Detalhes das Mudanças

**Card 2 - Soluções Personalizadas**
- Ícone comparativo: 📦 (software pronto) vs 🔧 (sob medida)
- Título: "Personalização Real"
- Comparativo:
  - Software pronto: "Você se adapta ao sistema"
  - Sob Medida: "Sistema se adapta a você"
- Segundo comparativo:
  - Software pronto: "Funcionalidades limitadas"
  - Sob Medida: "Funcionalidades sob demanda"
- Texto final: "Surgiu necessidade nova? Criamos."

**Card 3 - Suporte Direto**
- Ícone comparativo: 🎫 (ticket) vs 💬 (WhatsApp)
- Título: "Suporte Real"
- Comparativo:
  - Ticket: "Resposta em dias"
  - WhatsApp: "Resposta imediata"
- Segundo comparativo:
  - Ticket: "Atendente genérico"
  - WhatsApp: "Direto comigo"
- Texto final: "Parceria de verdade, não ticket."
- Manter indicador verde de "Disponível no WhatsApp"

---

## Arquivos a Modificar

`src/pages/PropostaPromotrip.tsx`

### Linhas 887-899 (Card 2 - Soluções Personalizadas)

Trocar de:
```tsx
<CardContent className="p-6 text-center">
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 ...">
    <Puzzle className="w-8 h-8 text-purple-400" />
  </div>
  <div className="text-xs ...">Funcionalidades Ilimitadas</div>
  <h3>Soluções Sob Medida</h3>
  <p>Surgiu uma necessidade nova? Criamos funcionalidades personalizadas...</p>
</CardContent>
```

Para:
```tsx
<CardContent className="p-6">
  {/* Ícone comparativo */}
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
      <span className="text-xl">📦</span>
    </div>
    <span className="text-purple-400 font-bold text-lg">vs</span>
    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
      <span className="text-xl">🔧</span>
    </div>
  </div>
  
  <h3 className="text-lg font-bold text-white mb-4 text-center">Personalização Real</h3>
  
  {/* Mini comparativo */}
  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
      <p className="text-gray-500 text-xs mb-1">Software Pronto</p>
      <p className="text-white font-semibold text-xs">Você se adapta</p>
    </div>
    <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 text-center">
      <p className="text-purple-400 text-xs mb-1">Sob Medida</p>
      <p className="text-white font-semibold text-xs">Sistema se adapta</p>
    </div>
    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
      <p className="text-gray-500 text-xs mb-1">Limite</p>
      <p className="text-white font-semibold text-xs">Funções fixas</p>
    </div>
    <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 text-center">
      <p className="text-purple-400 text-xs mb-1">Flexibilidade</p>
      <p className="text-white font-semibold text-xs">Sob demanda</p>
    </div>
  </div>
  
  <p className="text-gray-400 text-xs text-center leading-relaxed">
    Surgiu necessidade nova? Criamos a funcionalidade para você.
  </p>
</CardContent>
```

### Linhas 901-916 (Card 3 - Suporte Direto)

Trocar de:
```tsx
<CardContent className="p-6 text-center">
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 ...">
    <Headphones className="w-8 h-8 text-amber-400" />
  </div>
  <div className="flex items-center justify-center gap-2 mb-2">
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    <span>Disponível no WhatsApp</span>
  </div>
  <h3>Suporte Direto Comigo</h3>
  <p>Nada de tickets intermináveis...</p>
</CardContent>
```

Para:
```tsx
<CardContent className="p-6">
  {/* Ícone comparativo */}
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
      <span className="text-xl">🎫</span>
    </div>
    <span className="text-amber-400 font-bold text-lg">vs</span>
    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
      <span className="text-xl">💬</span>
    </div>
  </div>
  
  <h3 className="text-lg font-bold text-white mb-4 text-center">Suporte Real</h3>
  
  {/* Mini comparativo */}
  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
      <p className="text-gray-500 text-xs mb-1">Ticket</p>
      <p className="text-white font-semibold text-xs">Dias de espera</p>
    </div>
    <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 text-center">
      <p className="text-amber-400 text-xs mb-1">WhatsApp</p>
      <p className="text-white font-semibold text-xs">Resposta rápida</p>
    </div>
    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
      <p className="text-gray-500 text-xs mb-1">Atendente</p>
      <p className="text-white font-semibold text-xs">Genérico</p>
    </div>
    <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 text-center">
      <p className="text-amber-400 text-xs mb-1">Contato</p>
      <p className="text-white font-semibold text-xs">Direto comigo</p>
    </div>
  </div>
  
  {/* Status online */}
  <div className="flex items-center justify-center gap-2">
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    <span className="text-amber-400 text-xs font-medium">Disponível no WhatsApp</span>
  </div>
</CardContent>
```

---

## Resultado Esperado

Todos os 3 cards da seção "Escale Sem Limites" terão:

1. **Estrutura visual idêntica**: Ícone comparativo no topo (emoji vs emoji)
2. **Grid 2x2** com comparativos claros
3. **Cores temáticas** mantidas (emerald, purple, amber)
4. **Mesmo padding e espaçamento**
5. **Tipografia consistente**

---

## Benefício

- Consistência visual forte
- Mensagem clara de "antes vs depois" em cada card
- Fácil de escanear e entender rapidamente
- Conecta com o cliente mostrando problemas reais que ele conhece
