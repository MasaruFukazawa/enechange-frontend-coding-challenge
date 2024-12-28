FROM node:23-alpine

WORKDIR /app

# プロジェクトのファイルをコピー
COPY ./frontend /app

EXPOSE 3000
EXPOSE 6006

RUN cd /app/enechange-frontend-coding-challenge && \
npm install -g npm@latest && \
npm install
