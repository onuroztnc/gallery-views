FROM node:18.12.0

WORKDIR /usr/src/app/front-end

COPY package*.json ./

RUN npm install

RUN mkdir /usr/src/app/front-end/node_modules/.cache && chmod -R 777 /usr/src/app/front-end/node_modules/.cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]