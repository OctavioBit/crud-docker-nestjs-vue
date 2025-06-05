FROM node:20.14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 5001

CMD [ "npm", "run", "dev"]