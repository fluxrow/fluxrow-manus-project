

# Integrar Fonte Akony no Logo FLUXROW

## Arquivos de Fonte Recebidos
- `akony.otf`
- `akony.ttf`
- `akony.woff`

---

## Implementação

### 1. Copiar Fontes para o Projeto

Salvar os arquivos em:
```
src/assets/fonts/akony.woff
src/assets/fonts/akony.ttf
src/assets/fonts/akony.otf
```

---

### 2. Registrar Fonte no CSS Global

Adicionar em `src/index.css`:

```css
@font-face {
  font-family: 'Akony';
  src: url('./assets/fonts/akony.woff') format('woff'),
       url('./assets/fonts/akony.ttf') format('truetype'),
       url('./assets/fonts/akony.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

---

### 3. Atualizar Logo no Header

Em `src/pages/PropostaTeresopolis.tsx`:

```tsx
<span 
  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
  style={{ fontFamily: 'Akony, sans-serif' }}
>
  FLUXROW
</span>
```

---

## Arquivos a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/assets/fonts/` | Criar pasta e copiar 3 arquivos de fonte |
| `src/index.css` | Adicionar `@font-face` para Akony |
| `src/pages/PropostaTeresopolis.tsx` | Aplicar `fontFamily: 'Akony'` no logo |

---

## Resultado Visual

O logo FLUXROW no header manterá o gradiente cyan → purple → pink, mas agora com a tipografia oficial Akony.

