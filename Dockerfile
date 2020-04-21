FROM node:5.8
WORKDIR /nodeapp
ADD ./nodeapp
RUN npm install
expose 4000
cmd npm start
