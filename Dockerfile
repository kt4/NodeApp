FROM node:10.20
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY . /usr/src/app
RUN npm install
EXPOSE 4000
CMD [ "npm", "start" ]
