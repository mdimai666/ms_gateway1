FROM node:12.14-alpine

LABEL maintainer="mdimai666@mail.ru"

WORKDIR /var/www/node1
COPY package.json .
RUN npm i && npm i -g pm2
COPY . .

EXPOSE 3000

CMD [ "pm2-runtime", "bin/www" ]   