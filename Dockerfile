# FROM node:6.11.5    
FROM node:12.14

LABEL maintainer="mdimai666@mail.ru"

WORKDIR /var/www/node1
COPY package.json .
RUN npm install    
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]   