FROM node:23-alpine

WORKDIR /app

COPY api_mock/package.json api_mock/package-lock.json /app/

RUN npm install -g npm@latest
RUN npm install --save-dev --prefix /app

COPY api_mock/db.json /app/db.json
COPY api_mock/server.js /app/server.js

EXPOSE 8888

CMD ["node", "/app/server.js"]