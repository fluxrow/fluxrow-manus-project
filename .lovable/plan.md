

# Painel Central de Propostas e Contratos

## Objetivo
Criar um dashboard protegido por PIN onde voce gerencia todas as propostas e contratos em um so lugar, enquanto os clientes continuam acessando suas propostas normalmente pelo link direto.

## Como vai funcionar

### 1. Dashboard protegido (/propostas)
- Ao acessar `/propostas`, aparece uma tela pedindo PIN (4 digitos)
- Apos digitar o PIN correto, voce ve o painel com todas as propostas organizadas em cards
- Cada card mostra: nome do cliente, servico, valor, status (enviada/aprovada/contrato assinado)
- Ao clicar no card, abre a proposta do cliente
- O PIN fica salvo na sessao do navegador (nao precisa digitar toda vez que recarrega)

### 2. Organizacao das propostas
Lista de todas as propostas existentes em um unico painel:
- Match Solutions (Automacao IA - R$ 5.200/mes)
- Amanda Neves (Trafego Pago Meta Ads)
- Babora Seguros (Sistema de Gestao)
- Promotrip (Marketing Digital)
- Evolua Digital (Parceria Hibrida)
- Comunica (Gestao de Boletos + NF)
- Teresopolis Shopping (IA Multicanal)

### 3. Vinculo com contratos
Cada proposta mostra se tem contrato vinculado e o status:
- Sem contrato
- Contrato pendente
- Contrato assinado (contratante)
- Contrato assinado (ambas partes)

Link direto para o contrato a partir da proposta.

### 4. Acesso dos clientes
Nada muda para os clientes -- continuam acessando pelo link direto sem senha.

### 5. Protecao do painel
Quem digitar a URL `/propostas` sem o PIN correto nao consegue ver nada.

---

## Detalhes tecnicos

### Arquivos que serao modificados/criados:

**`src/pages/Propostas.tsx`** -- Reescrever completamente:
- Tela de PIN usando o componente `InputOTP` ja existente
- Dashboard com grid de cards das propostas
- Cada card com badge de status, link para proposta e link para contrato
- PIN validado contra valor fixo (armazenado em variavel no codigo)
- Sessao mantida via `sessionStorage`

**`src/data/propostas.ts`** (novo) -- Registro centralizado:
```text
Array com todas as propostas:
- slug, nome do cliente, empresa, servico, valor
- rota da proposta (ex: /match-solutions)
- rota do contrato vinculado (ex: /contrato-match-solutions)
- status atual
```

**`src/App.tsx`** -- Nenhuma rota nova necessaria, apenas o `/propostas` que ja existe vai mudar de comportamento.

### Fluxo do PIN:
1. Usuario acessa /propostas
2. Tela escura com input de PIN (4 digitos)
3. PIN correto -> sessionStorage salva flag -> mostra dashboard
4. PIN errado -> mensagem de erro, tenta novamente
5. Fechar aba/navegador -> precisa digitar PIN de novo

### Design do dashboard:
- Fundo escuro (consistente com o resto do site)
- Cards com gradiente sutil por status
- Badge colorido: verde (contrato assinado), amarelo (pendente), cinza (sem contrato)
- Busca/filtro simples por nome do cliente
- Responsivo para mobile
