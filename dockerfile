# Usamos una imagen base oficial de Node.js
FROM node:18-slim

#
RUN apt-get update && apt-get install -y git

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install 

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto que usará la aplicación (por defecto, NestJS usa el puerto 3000)
EXPOSE 3001

# Comando para compilar el código y luego ejecutar el servidor
CMD ["npm", "run", "start:prod"]

#docker build -t nombre-de-tu-imagen .