

## Adicionar "Preços" no Menu de Navegação

### O que será feito
Adicionar um novo item "Preços" no menu de navegação do header que levará o usuário diretamente para a seção de planos.

### Alteração

**Arquivo:** `src/components/Header.tsx`

Será adicionado o item "Preços" no array `navItems`, posicionado após "Projetos" e antes de "Serviços":

```typescript
const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre-mim" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Preços", href: "#planos" },        // ← Novo item
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];
```

### Resultado
- O link "Preços" aparecerá no menu desktop e mobile
- Ao clicar, a página rolará suavemente até a seção "Escolha o plano ideal para você!"

