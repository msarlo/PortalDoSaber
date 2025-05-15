# Portal Saber

Portal web desenvolvido para a Prefeitura de Juiz de Fora.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Geist Font](https://vercel.com/font) - Font family

## Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Gera build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## Estrutura do Projeto

- `/src/app` - Páginas e layouts da aplicação
- `/src/components` - Componentes React reutilizáveis
- `/src/assets` - Arquivos estáticos como imagens
- `/public` - Arquivos públicos

# Workflow de Desenvolvimento

Este documento descreve o fluxo de trabalho padrão para desenvolvimento no projeto.

## Estrutura de Branches

Nossa estrutura de branches segue o seguinte padrão:
- `main` - Branch de produção
- `Dev` - Branch de desenvolvimento integrado
- `feature/JIRA-XXX-descricao` - Branches de funcionalidades

## Processo de Trabalho

### 1. Início de uma Nova Feature

Sempre comece uma nova feature a partir da branch `Dev` atualizada:

```bash
# Mude para a branch Dev
git checkout Dev

# Atualize a branch Dev com as últimas alterações
git pull

# Crie uma nova branch de feature baseada nos cards do JIRA
git checkout -b feature/JIRA-123-nova-funcionalidade
```

### 2. Durante o Desenvolvimento

Realize commits frequentes e descritivos:

```bash
# Adicione as alterações
git add .

# Faça o commit incluindo o código do JIRA
git commit -m "[JIRA-123] Implementação da funcionalidade X"

# Envie as alterações para o repositório remoto
git push origin feature/JIRA-123-nova-funcionalidade
```

### 3. Mantendo sua Branch Atualizada

Mantenha sua branch de feature sincronizada com a `Dev` para evitar conflitos maiores:

```bash
# Mude para a branch Dev
git checkout Dev

# Atualize a branch Dev
git pull

# Volte para sua branch de feature
git checkout feature/JIRA-123-nova-funcionalidade

# Integre as alterações da Dev
git merge Dev
```

### 4. Finalizando a Feature

Quando a feature estiver completa:

1. Certifique-se de que todos os testes passam localmente
2. Crie um Pull Request (PR) da sua branch de feature para a branch `Dev`
3. Adicione os revisores necessários
4. Vincule o PR ao card do JIRA correspondente

### 5. Revisão de Código

- Atenda a todos os comentários e sugestões dos revisores
- Faça os ajustes necessários e atualize o PR
- Uma vez aprovado, o PR pode ser mesclado à branch `Dev`

### 6. Promoção para Produção

Após o merge na `Dev`, uma pipeline automática:
1. Executará os testes na branch `Dev`
2. Criará um Pull Request da `Dev` para a `main`
3. Este PR precisa ser revisado e aprovado antes de ser mesclado

### 7. Resolução de Conflitos

Se houver conflitos durante um merge:

```bash
# Durante o merge com conflitos
git status                           # Verifique os arquivos com conflito
# Edite os arquivos para resolver os conflitos
git add <arquivos-resolvidos>        # Adicione os arquivos resolvidos
git commit                           # Finalize o merge
```

## Padrões de Nomenclatura

- **Branches**: `feature/JIRA-XXX-breve-descricao`
- **Commits**: `[JIRA-XXX] Descrição concisa da alteração`
- **Pull Requests**: `[JIRA-XXX] Descrição da funcionalidade implementada`

## Dicas Importantes

- **NUNCA** faça push diretamente para as branches `main` ou `Dev`
- Mantenha os commits focados e coesos
- Escreva mensagens de commit claras e descritivas
- Resolva conflitos em sua branch de feature, não nas branches principais
- Faça push frequentemente para backup e visibilidade das alterações

## Licença

Copyright © Prefeitura de Juiz de Fora. Todos os direitos reservados.
