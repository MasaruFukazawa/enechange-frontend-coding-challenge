FROM node:23-alpine

WORKDIR /app

# プロジェクトのファイルをコピー
COPY ./frontend /app

RUN cd /app/enechange-frontend-coding-challenge && \
npm install -g npm@latest && \
npm install
