FROM node:14

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

RUN npm install


CMD ["npm", "start"]
