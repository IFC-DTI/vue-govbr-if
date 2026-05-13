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
