# Usa una imagen base de Node.js
FROM node:20.14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
#CMD ["node", "app.js"] Puede no ser este
