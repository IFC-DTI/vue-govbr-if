# vue-govbr-if

![Capa do projeto](public/assets/images/Logo_IFC_horizontal_sem_fundo.png)

Projeto-esqueleto de interface web do DTI/IFC construído com Vue 3 e alinhado ao Design System do GovBR para servir como base de novas telas, fluxos e protótipos institucionais.

![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Docker](https://img.shields.io/badge/Docker-enabled-2496ed?logo=docker&logoColor=white)

## Índice

- [Descrição do projeto](#descrição-do-projeto)
- [Status do projeto](#status-do-projeto)
- [Funcionalidades e demonstração da aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Acesso ao projeto](#acesso-ao-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pessoas contribuidoras](#pessoas-contribuidoras)
- [Pessoas desenvolvedoras do projeto](#pessoas-desenvolvedoras-do-projeto)
- [Licença](#licença)
- [Documentação dos componentes](#documentação-dos-componentes)

## Descrição do Projeto

Este repositório reúne um esqueleto de site institucional para o DTI/IFC com visual e componentes baseados no GovBR, além de recursos de navegação, cards, formulários, tabelas e layout responsivo. A proposta é oferecer um ponto de partida consistente para evolução de serviços internos, páginas de apoio e experiências orientadas ao cidadão e ao servidor.

O projeto já nasce com estrutura de rotas, layout base, carregamento global durante a navegação e componentes reutilizáveis para acelerar a construção de novas telas.

## Status do Projeto

**Em desenvolvimento.**

O núcleo da aplicação está estruturado e funcional para demonstração, mas ainda há áreas previstas para evolução, refinamento visual e integração com serviços reais, como a autenticação gov.br.

## Funcionalidades e Demonstração da Aplicação

As rotas atuais demonstram diferentes padrões de interface do projeto:

- Página inicial com chamada de ação para entrada com gov.br e lista de serviços do IFC.
- Página de banners com carrossel demonstrando conteúdo promocional ou informativo.
- Página de cards com estados hover, disabled e slots com botão, imagem e data.
- Página de formulário com componente dedicado para captura de dados.
- Tabela simples para listagem objetiva de registros.
- Tabela complexa com seleção, ações e detalhes de usuários.
- Dashboard administrativo com visão geral, atividades recentes e ações rápidas.
- Página de exemplo para explorar serviços e atalhos institucionais.
- Rota de página não encontrada para tratamento de navegação inválida.

Além disso, o layout global inclui indicador de carregamento durante a troca de rotas, breadcrumb semântico e base visual com componentes do GovBR.

## Acesso ao Projeto

### Com Docker

O projeto foi preparado para subir em container e disponibilizar a aplicação em `http://localhost:5173`.

```bash
docker compose up --build
```

Se preferir manter o terminal livre:

```bash
docker compose up -d --build
```

Para acompanhar os logs:

```bash
docker compose logs -f app
```

Para encerrar o ambiente:

```bash
docker compose down
```

### Sem Docker

Para executar localmente com Node.js compatível com o projeto:

```bash
npm install
npm run dev
```

Depois, acesse:

```text
http://localhost:5173
```

## Tecnologias utilizadas

- Vue 3
- TypeScript
- Vite
- Vue Router
- GovBR Design System (`@govbr-ds/core`, `@govbr-ds/webcomponents`, `@govbr-ds/webcomponents-vue`)
- Bootstrap 5
- Vitest
- Cypress
- Docker e Docker Compose

## Pessoas Contribuidoras

- Arthur Manenti
- Tiago Heineck

## Pessoas Desenvolvedoras do Projeto

- Arthur Manenti
- Tiago Heineck

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você for evoluir este esqueleto para produção, o próximo passo natural é documentar variáveis de ambiente, fluxos de autenticação e critérios de publicação por ambiente.

## Documentação dos componentes

A seguir está a documentação prática dos componentes disponíveis em `src/components`. A leitura está organizada para facilitar o reuso no restante do projeto.

### AppBreadcrumb

Como usar: coloque-o no layout ou na página para exibir a navegação hierárquica atual. O componente lê automaticamente a rota atual e o `meta.breadcrumb` definido no router.

Props: não recebe props.

Eventos: não emite eventos.

Slots: não possui slots.

Dependências: Vue Router, com a rota atual fornecendo `meta.breadcrumb` quando houver um rótulo específico.

### AppFormulario

Como usar: renderize o componente em uma página para exibir o formulário completo de cadastro, com validação, mensagens de feedback e botões de ação.

Props: não recebe props.

Eventos: não emite eventos externos.

Slots: não possui slots.

Observação: o componente já monta internamente os grupos de dados pessoais, endereço e informações adicionais.

### AppInputWithIcon

Como usar: use este componente como campo de busca com botão/ícone de ação, especialmente em barras de navegação e cabeçalhos.

Props:
- `placeholder` como texto do campo.
- `actionLabel` como rótulo da ação associada ao campo.
- `density` como `small`, `medium` ou `large`.
- `icon` como nome do ícone exibido no botão.
- `highlight` como destaque visual opcional.

Eventos: o clique no ícone dispara uma busca simples via `alert` com o texto digitado.

Slots: usa os slots `search` e `action` do `br-input`.

### AppContainerBotoes

Como usar: envolva botões, links de ação ou qualquer conteúdo horizontal que precise de espaçamento consistente.

Props:
- `gap` como distância entre os itens, com padrão `1em`.

Eventos: não emite eventos.

Slots: usa o slot padrão para receber os botões.

### AppTabelaComplexa

Como usar: passe uma lista de dados com `id`, um conjunto de cabeçalhos e um título. O componente entrega busca, seleção, expansão de linhas, ações em lote e paginação.

Props:
- `title` como título exibido acima da tabela.
- `headers` como lista de colunas no formato `{ label, key }`.
- `data` como array de objetos com os dados.
- `expandableKey` como chave do campo de detalhes, com padrão `details`.

Eventos:
- `selectionChange` devolve um `Set` com os itens selecionados.
- `action` devolve a ação executada e os itens afetados.

Slots: não possui slots.

Observação: a tabela espera que cada item tenha a propriedade `id`, usada para seleção e expansão.

### AppSectionItemsServicos

Como usar: use este componente para montar uma seção de serviços com título e vários itens de acesso rápido.

Props:
- `densidade` como `large`, `medium` ou `small`.
- `items` como lista de serviços com `id`, `iconName`, `link`, `title` e `description`.
- `nomeSessao` como título da seção.

Eventos: não emite eventos.

Slots: não possui slots.

Dependências: renderiza internamente o componente [AppItemServico](#appitemservico).

### AppCarousel

Como usar: passe uma lista de banners para exibir um carrossel com navegação anterior/próximo e indicadores inferiores.

Props:
- `banners` como lista de itens com `id`, `label`, `image`, `alt` e `description` opcional.
- `circular` como controle de loop contínuo, com padrão `false`.

Eventos: a navegação é controlada por botões internos; não há eventos externos.

Slots: não possui slots.

Observação: o componente foi pensado para banners institucionais ou informativos com imagem em destaque.

### AppCard

Como usar: use-o para destacar um bloco de conteúdo com título, descrição e conteúdo complementar no slot.

Props:
- `title` como título do card.
- `description` como texto de apoio.
- `hover` como estado com realce ao passar o mouse, com padrão `false`.
- `disabled` como estado desabilitado, com padrão `false`.

Eventos: não emite eventos.

Slots: possui o slot padrão para inserir botão, imagem, data ou outro conteúdo.

### AppModal

Como usar: controle a abertura do modal pelo estado `isShowingModal` no componente pai e feche-o ouvindo o evento de saída.

Props:
- `isShowingModal` como controle booleano de exibição.

Eventos:
- `fecharModal` para solicitar o fechamento ao componente pai.

Slots: o conteúdo do modal já vem montado internamente; o rodapé usa o slot `footer` do `br-modal`.

Dependências: usa `ContainerBotoes` para organizar os botões de ação no rodapé.

### AppTabelaSimples

Como usar: passe cabeçalhos e dados para renderizar uma tabela básica, útil para listagens curtas e sem interação avançada.

Props:
- `headers` como lista de colunas no formato `{ label, key }`.
- `data` como array com os registros.

Eventos: não emite eventos.

Slots: não possui slots.

Observação: o componente exibe a mesma estrutura em HTML puro e em Web Components GovBR, o que facilita comparação e prototipação.

### AppItemServico

Como usar: use este componente como item de uma lista de serviços com ícone, link e descrição curta.

Props:
- `densidade` como `large`, `medium` ou `small`, com padrão visual equivalente a `small`.
- `iconName` como nome do ícone.
- `link` como endereço de destino.
- `title` como texto principal.
- `description` como texto secundário.

Eventos: não emite eventos.

Slots: não possui slots.

### AppHeader

Como usar: insira-o no topo do layout para exibir a barra institucional do IFC com logo, atalhos, busca, acesso e menu lateral.

Props: não recebe props.

Eventos:
- `startMenu` para acionar a abertura do menu lateral.

Slots: usa os slots do `br-header`, como `logo`, `links`, `functions`, `access`, `menu-trigger`, `caption` e `subcaption`.

Dependências: usa [InputWithIcon](#inputwithicon) como campo de busca interno.

### AppFooter

Como usar: coloque-o no fim do layout para exibir o rodapé institucional com áreas de categoria, redes sociais e informações legais.

Props: não recebe props.

Eventos: não emite eventos.

Slots: usa os slots do `br-footer`, incluindo `logo`, `social-network` e `legal`.

### CollapseMenu

Como usar: utilize este componente quando precisar de um menu hierárquico recolhível com grupos, subgrupos e itens navegáveis.

Props:
- `groupTitle` como título principal do grupo.
- `groupIcon` como ícone do grupo.
- `subCollapses` como lista de subgrupos com `id`, `label`, `icon` e `itens`.

Eventos: não emite eventos próprios.

Slots: trabalha com os slots de trigger e conteúdo do `br-collapse`.

### MenuBar

Como usar: use este componente como menu lateral sobreposto, normalmente disparado a partir do cabeçalho.

Props: não recebe props.

Eventos:
- `closeMenu` para fechar a barra lateral.

Slots: não possui slots.

Observação: o menu já vem com navegação para as rotas de demonstração da aplicação.

Esta documentação reflete o estado atual dos componentes e deve ser revisada sempre que a interface mudar.
