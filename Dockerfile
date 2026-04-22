FROM node:24.14.1-slim

RUN groupadd -g 1001 appuser \
  && useradd -m -u 1001 -g appuser appuser \
  && usermod -aG appuser node

WORKDIR /app

USER appuser

ENTRYPOINT [ "sh", ".docker/entrypoint.sh" ]