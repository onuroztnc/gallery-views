FROM node:18.12.0

WORKDIR /usr/src/app/front-end

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]