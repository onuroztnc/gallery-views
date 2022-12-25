FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY front-end/ ./front-end/
RUN cd front-end && npm install && npm run build

EXPOSE 3080
