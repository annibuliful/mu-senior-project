FROM node:12.14.0-alpine3.11

WORKDIR /usr/src/service

COPY . /usr/src/service

RUN chmod -R 775 /usr/src/service

RUN npm install

EXPOSE 3000

CMD ["npm","run","serve"]
