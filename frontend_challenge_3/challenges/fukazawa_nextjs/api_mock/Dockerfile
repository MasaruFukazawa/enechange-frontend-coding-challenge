FROM node:23-alpine

COPY api_mock/package.json api_mock/package-lock.json /src/

RUN npm install -g npm@latest
RUN npm install --save-dev --prefix /src

WORKDIR /src

COPY api_mock/db.json /src/db.json
COPY api_mock/server.js /src/server.js

EXPOSE 8888

CMD ["node", "/src/server.js"]