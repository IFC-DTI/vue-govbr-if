FROM node:24.14.1-slim

ARG USER=node

WORKDIR /app

USER ${USER}

ENTRYPOINT [ "sh",".docker/entrypoint.sh" ]