FROM node:9

WORKDIR .

COPY package*.json ./

RUN npm install

WORKDIR /usr/src/app

RUN ln -s /node_modules node_modules

EXPOSE 3000

VOLUME [ "/usr/src/app" ]

#CMD [ "npm", "start" ]