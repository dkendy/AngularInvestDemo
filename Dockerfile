FROM node:alpine

RUN npm install -g @angular/cli

WORKDIR /usr/app

COPY package*.json ./ 
 
RUN npm install

COPY . .
COPY /src/assets ./
 
EXPOSE 4200

CMD ng serve --host 0.0.0.0 --port 4200