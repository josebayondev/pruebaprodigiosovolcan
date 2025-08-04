#!/bin/bash

# 🔒 Generador automático de certificados SSL
# Proyecto Login Volcán - Jose I. Bayón
# 
# INSTRUCCIONES:
# 1. Ejecutar: ./scripts/setup-ssl.sh
# 2. Ejecutar: docker-compose -f docker-compose.nginx.yml up --build
# 3. Acceder: https://127.0.0.1

# Crear directorios si no existen
mkdir -p ./certbot/conf ./certbot/www


# Generar certificado
docker run --rm \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    certbot/certbot certonly --standalone \
    --email evaluador@test.com \
    --agree-tos --no-eff-email --staging \
    -d login.localhost

# Crear directorios
mkdir -p ./certbot/conf ./certbot/www

# Generar certificado auto-firmado
docker run --rm -v $(pwd)/certbot/conf:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  --email test@example.com --agree-tos --staging \
  -d login.localhost

