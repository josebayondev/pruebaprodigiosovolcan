#!/bin/bash

# Script para obtener certificados SSL de Let's Encrypt
# Para prueba técnica - Proyecto Login Volcán

echo "🚀 Obteniendo certificado SSL para login.localhost..."

# Crear directorios necesarios
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

# Para pruebas locales, creamos certificado auto-firmado
echo "📝 Creando certificado auto-firmado para demostración..."

docker run --rm -v $(pwd)/certbot/conf:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  --email test@example.com \
  --agree-tos \
  --no-eff-email \
  --staging \
  -d login.localhost

echo "✅ Certificado creado!"
echo ""
echo "🔧 Para dominio real, cambiar por:"
echo "   certbot certonly --webroot -w /var/www/certbot -d login.tudominio.com"
echo ""
echo "📋 Pasos para producción:"
echo "1. Cambiar 'login.localhost' por tu dominio real"
echo "2. Configurar DNS A record apuntando a tu servidor"
echo "3. Ejecutar: docker-compose -f docker-compose.nginx.yml up"
