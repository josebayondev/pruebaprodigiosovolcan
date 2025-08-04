#!/bin/bash

echo "🔒 Generando certificados SSL estilo Let's Encrypt para https://127.0.0.1..."

# Verificar si ya existen certificados
if [ -f "./certbot/conf/live/127.0.0.1/fullchain.pem" ] && [ -f "./certbot/conf/live/127.0.0.1/privkey.pem" ]; then
    echo "✅ Los certificados ya existen!"
    echo "🌐 Puedes ejecutar: docker-compose -f docker-compose.nginx.yml up --build"
    exit 0
fi

# Crear estructura de directorios como Let's Encrypt
mkdir -p ./certbot/conf/live/127.0.0.1
mkdir -p ./certbot/www

echo "📝 Simulando estructura Let's Encrypt para 127.0.0.1..."

# Generar CA como Let's Encrypt (simulado)
openssl genrsa -out ./certbot/conf/live/127.0.0.1/ca-key.pem 2048

openssl req -new -x509 \
    -key ./certbot/conf/live/127.0.0.1/ca-key.pem \
    -out ./certbot/conf/live/127.0.0.1/ca-cert.pem \
    -days 365 \
    -subj "/C=US/O=Let's Encrypt/CN=R3"

# Generar clave privada del dominio
openssl genrsa -out ./certbot/conf/live/127.0.0.1/privkey.pem 2048

# Generar CSR para el dominio
openssl req -new \
    -key ./certbot/conf/live/127.0.0.1/privkey.pem \
    -out ./certbot/conf/live/127.0.0.1/domain.csr \
    -subj "/C=US/ST=CA/L=San Francisco/O=Volcan/CN=127.0.0.1"

# Generar certificado firmado por "Let's Encrypt" (simulado)
openssl x509 -req \
    -in ./certbot/conf/live/127.0.0.1/domain.csr \
    -CA ./certbot/conf/live/127.0.0.1/ca-cert.pem \
    -CAkey ./certbot/conf/live/127.0.0.1/ca-key.pem \
    -CAcreateserial \
    -out ./certbot/conf/live/127.0.0.1/cert.pem \
    -days 90 \
    -extensions v3_req

# Crear fullchain como Let's Encrypt
cat ./certbot/conf/live/127.0.0.1/cert.pem ./certbot/conf/live/127.0.0.1/ca-cert.pem > ./certbot/conf/live/127.0.0.1/fullchain.pem

# Limpiar archivos temporales
rm ./certbot/conf/live/127.0.0.1/ca-key.pem
rm ./certbot/conf/live/127.0.0.1/ca-cert.pem  
rm ./certbot/conf/live/127.0.0.1/domain.csr
rm ./certbot/conf/live/127.0.0.1/cert.pem
rm ./certbot/conf/live/127.0.0.1/ca-cert.srl

echo ""
echo "✅ Certificados estilo Let's Encrypt generados!"
echo "📁 Ubicación: ./certbot/conf/live/127.0.0.1/"
echo "🔧 Siguiente: docker-compose -f docker-compose.nginx.yml up --build"
echo "🌐 Acceder: https://127.0.0.1"
echo ""
echo "🎯 SIMULANDO Let's Encrypt para desarrollo local"
