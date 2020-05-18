FROM node:alpine
WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .
#first dot- everything in local directory
#second dot - virtual WORKDIR

EXPOSE 4200
CMD ["npm", "start"]
