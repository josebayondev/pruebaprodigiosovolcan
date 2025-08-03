# Usa Node.js como base
FROM node:18-alpine

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Copiar el archivo de entorno específico para Docker
COPY .env.docker .env

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto 9778
EXPOSE 9778

# Comando para iniciar la aplicación (sirviendo desde dist)
CMD ["npm", "run", "preview", "--", "--port", "9778", "--host", "0.0.0.0"]