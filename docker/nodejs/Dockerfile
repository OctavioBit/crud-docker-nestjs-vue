FROM node:20.14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 5000

RUN npx prisma generate
RUN npx prisma migrate dev
CMD [ "npm", "run", "start" ]