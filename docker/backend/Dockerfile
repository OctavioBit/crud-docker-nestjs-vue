FROM node:20.14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 5000

RUN npm i typeorm reflect-metadata --save

#RUN npx prisma generate
CMD [ "npm", "run", "start:debug" ]