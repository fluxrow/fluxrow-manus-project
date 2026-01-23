

# Plano de Ajuste - Produtividade Real (Dado Validado)

## Contexto

Dado real da reunião com Augusto e Alexandre:
- Uma pessoa consegue enviar **~16 mensagens personalizadas por dia**
- Mensagem personalizada = pesquisa + adaptação + contexto da empresa
- Não é "copiar e colar" - é abordagem estratégica

## Cálculo Real

| Métrica | Manual | Agente IA |
|---------|--------|-----------|
| Por dia | ~16 | distribuído |
| Por mês (20 dias) | ~320 | 3.000+ |
| Diferença | - | **~10x mais** |

## Mudanças no Card (linhas 862-883)

### Grid Comparativo

**Antes:**
```
Manual: ~50 msg/dia
Agente IA: 3.000+/dia
```

**Depois:**
```
Manual: ~320/mês (~16/dia)
Agente IA: 3.000+/mês (Templates!)
```

### Segunda linha do grid

**Antes:**
```
Horário: 8h comerciais
Disponibilidade: 24/7
```

**Depois:**
```
Cada msg: Pesquisa + Escrita
Templates: Criar 1x, usar sempre
```

### Texto final

**Antes:**
```
"Funciona 24/7, responde em segundos e nunca tira férias."
```

**Depois:**
```
"Templates personalizados por setor. Cria uma vez, usa sempre. Volume distribuído que protege seu número."
```

## Arquivo a Modificar

`src/pages/PropostaPromotrip.tsx`

### Linhas 862-883

```tsx
<div className="grid grid-cols-2 gap-2 text-sm mb-4">
  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
    <p className="text-gray-500 text-xs mb-1">Manual</p>
    <p className="text-white font-semibold">~320/mês</p>
    <p className="text-gray-500 text-[10px]">(~16/dia real)</p>
  </div>
  <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 text-center">
    <p className="text-emerald-400 text-xs mb-1">Agente IA</p>
    <p className="text-white font-semibold">3.000+/mês</p>
    <p className="text-emerald-300 text-[10px]">(seguro p/ Meta)</p>
  </div>
  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
    <p className="text-gray-500 text-xs mb-1">Cada msg</p>
    <p className="text-white font-semibold text-xs">Pesquisa + Escrita</p>
  </div>
  <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 text-center">
    <p className="text-emerald-400 text-xs mb-1">Templates</p>
    <p className="text-white font-semibold text-xs">Criar 1x, usar sempre</p>
  </div>
</div>

<p className="text-gray-400 text-xs text-center leading-relaxed">
  Templates por setor prontos para reutilizar. Volume distribuído que protege seu número.
</p>
```

## Por Que Isso é Mais Poderoso

1. **Dado real** - Veio da própria conversa com eles
2. **Diferença de 10x** - Muito mais impactante que "3.000 vs 50"
3. **Honestidade** - Reconhece que personalização leva tempo
4. **Templates** - Mostra o valor de criar uma vez e reutilizar
5. **Empatia** - "Sabemos que você faz direito, não na loucura"

## Resultado Visual

```text
+--------------------------------+
|        👤  vs  🤖              |
|     Produtividade Real         |
+--------------------------------+
| Manual          | Agente IA    |
| ~320/mês        | 3.000+/mês   |
| (~16/dia real)  | (seguro Meta)|
+--------------------------------+
| Cada msg        | Templates    |
| Pesquisa+Escrita| Criar 1x,    |
|                 | usar sempre  |
+--------------------------------+
| Templates por setor prontos    |
| para reutilizar. Volume        |
| distribuído que protege número.|
+--------------------------------+
```

