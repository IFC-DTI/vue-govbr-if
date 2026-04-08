# vue-govbr-if

Guia rapido para estagiario subir o projeto com Docker.

## Objetivo

Subir o ambiente de desenvolvimento em container e acessar a aplicacao no browser em http://localhost:5173.

## Pre-requisitos

1. Docker instalado e funcionando.
2. Docker Compose habilitado (comando docker compose).
3. Porta 5173 livre na maquina.

## Como subir os containers

1. Entre na pasta do projeto.

```bash
cd /caminho/para/vue-govbr-if
```

2. Suba o servico em modo foreground (para ver logs).

```bash
docker compose up --build
```

3. Aguarde a instalacao das dependencias e a mensagem do Vite indicando que o servidor iniciou.

4. Abra no browser:

http://localhost:5173

## Rodar em background

Se quiser deixar o terminal livre:

```bash
docker compose up -d --build
```

Para acompanhar logs:

```bash
docker compose logs -f app
```

## Como parar o ambiente

Parar e remover os containers:

```bash
docker compose down
```

## Comandos uteis

Ver status dos containers:

```bash
docker compose ps
```

Reiniciar apenas o app:

```bash
docker compose restart app
```

Recriar do zero (build limpo):

```bash
docker compose down
docker compose up --build
```

## Problemas comuns

1. Porta 5173 ocupada

- Erro comum: bind: address already in use.
- Solucao: parar o processo que usa a porta ou trocar o mapeamento no arquivo docker-compose.yml.

2. Browser abre, mas pagina nao carrega

- Verifique se o container esta em execucao com docker compose ps.
- Veja logs com docker compose logs -f app.
- Confirme que esta acessando http://localhost:5173.

3. Dependencias quebradas no container

- Rode um rebuild completo:

```bash
docker compose down
docker compose up --build
```

## Estrutura Docker usada no projeto

- Dockerfile: usa imagem node:24.14.1-slim.
- docker-compose.yml: publica 5173:5173 e monta o codigo em /app.
- .docker/entrypoint.sh: executa npm install e inicia Vite com host 0.0.0.0 na porta 5173.
