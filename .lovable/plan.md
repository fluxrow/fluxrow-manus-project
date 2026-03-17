

## Criar Proposta "Rota das Tortas Batavo"

### Resumo
Criar uma página de proposta premium com paleta gastronômica (creme, marrom, vermelho suave, branco), contendo as 11 seções solicitadas, registrá-la no dashboard e na rota pública.

### Arquivos a criar/editar

**1. `src/pages/PropostaBatavo.tsx`** — Página principal com todas as 11 seções inline (seguindo padrão de PropostaMatchSolutions que tem tudo em um arquivo):

- **Hero**: Background gradient warm (amber/stone), título "Rota das Tortas Batavo", subtítulo, CTA "Apresentar Projeto"
- **Sobre o Projeto**: 4 cards com ícones (Experiência, Engajamento, Consumo, Marca)
- **Como Funciona**: Timeline vertical com 5 passos e ícones
- **Experiência do Usuário**: Mock visual de card físico com carimbos + mock de interface WhatsApp
- **Diferenciais**: 4 blocos destacados (híbrido, antifraude, engajamento real, experiência memorável)
- **Benefícios**: Grid 2 colunas (Batavo vs Lojas)
- **Tecnologia**: Cards com ícones minimalistas (QR Code, WhatsApp, validação, controle)
- **Dados e Métricas**: 4 cards com métricas ilustrativas
- **Investimento**: Card premium destacado com R$ 9.000,00
- **Expansão**: Seção curta sobre escalabilidade
- **CTA Final**: "Vamos ativar essa experiência juntos?" + botão WhatsApp

Paleta: `amber-900`, `stone-800`, `red-400/500`, `orange-100`, backgrounds com gradientes warm. Animações `animate-fade-in` com delays escalonados. Cards com `backdrop-blur` e sombras suaves.

**2. `src/data/propostas.ts`** — Adicionar entrada para batavo:
```
{
  slug: 'batavo',
  cliente: 'Batavo',
  empresa: 'Batavo',
  servico: 'Rota das Tortas',
  valor: 'R$ 9.000',
  rota: '/propostas/batavo',
  rotaPublica: '/p/batavo',
  status: 'enviada',
}
```

**3. `src/App.tsx`** — Adicionar rota lazy `PropostaBatavo` dentro de `/propostas`:
```
<Route path="batavo" element={<PropostaBatavo />} />
```

**4. `src/pages/PropostaPublica.tsx`** — Adicionar `'batavo'` ao `slugToComponent` map.

### Elementos visuais especiais
- **Card físico com carimbos**: Grid 2x2 com círculos que simulam carimbos (preenchidos/vazios) dentro de um card com borda arredondada e textura de papel
- **Mock WhatsApp**: Card estilizado com balões de mensagem simulando notificações de check-in

