

# Adicionar Logo do Teresópolis Shopping no Header

## Objetivo
Incluir o logo oficial do Teresópolis Shopping no topo da página da proposta, criando um header profissional que reforce a identidade visual do cliente.

---

## Implementação

### 1. Baixar o Logo Oficial

Vou buscar o logo oficial do Teresópolis Shopping e salvá-lo em:
```
src/assets/teresopolis-shopping-logo.png
```

**URL do logo oficial:** Disponível no site/Instagram do shopping

---

### 2. Modificar PropostaTeresopolis.tsx

**Adicionar header fixo no topo da página com o logo:**

```tsx
// Novo header antes do Hero Section
<header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
  <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    <img 
      src={teresopolisLogo} 
      alt="Teresópolis Shopping" 
      className="h-10 md:h-12 object-contain"
    />
    <span className="text-sm text-gray-400">Proposta Comercial</span>
  </div>
</header>
```

**Ajustar padding do Hero Section para compensar o header fixo:**
```tsx
<section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
```

---

## Estrutura Visual do Header

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO TERESÓPOLIS]                    Proposta Comercial   │
│     SHOPPING                                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Arquivo a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/pages/PropostaTeresopolis.tsx` | Adicionar header com logo + ajustar padding |

---

## Detalhes Técnicos

- **Header fixo** com `position: fixed` e `backdrop-blur` para transparência elegante
- **Logo responsivo** com altura adaptável (h-10 mobile, h-12 desktop)
- **Import do asset** como variável para otimização do build
- **Padding-top** no Hero para evitar sobreposição com o header

