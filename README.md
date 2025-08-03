# 🌋 Login Prodigioso Volcán - SSO con Google

**Proyecto de prueba técnica desarrollado por Jose I. Bayón**

Aplicación React con TypeScript que implementa autenticación SSO (Single Sign-On) a través de Google OAuth, con persistencia de sesión y navegación condicional.

## 🚀 Tecnologías utilizadas

- **React 19.1.0** + TypeScript
- **Vite 7.0.4** - Build tool
- **Tailwind CSS 3.4.0** - Estilos
- **Google OAuth** - Autenticación
- **Context API** - Manejo de estado

## 📋 Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/josebayondev/pruebaprodigiosovolcan.git
cd login-prodigioso-volcan
```

### 2. Instalar dependencias
```bash
npm install
npm install @react-oauth/google
npm install jwt-decode
npm install -D tailwindcss autoprefixer postcss
npx tailwindcss init -p
```

### 3. Configurar variables de entorno
Crear archivo `.env` en la raíz del proyecto:
```properties
VITE_GOOGLE_CLIENT_ID=tu_google_client_id_aqui
VITE_PORT=5174
```

### 4. Configurar Google OAuth
1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear proyecto o seleccionar existente
3. Habilitar Google+ API
4. Crear credenciales OAuth 2.0
5. Agregar `http://localhost:5174` como dominio autorizado
6. Copiar el Client ID al archivo `.env`

### 5. Ejecutar la aplicación
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5174`

## 🎯 Funcionalidades

- ✅ Botón de inicio de sesión con Google
- ✅ Autenticación segura con validación JWT
- ✅ Persistencia de sesión (24 horas)
- ✅ Navegación condicional según estado de autenticación
- ✅ Logout y limpieza automática de sesiones expiradas
- ✅ Interfaz responsive con Tailwind CSS

## 📁 Estructura del proyecto

```
src/
├── components/     # Componentes React
├── context/        # Context API para autenticación
├── hooks/          # Hooks personalizados
├── services/       # Lógica de autenticación
├── types/          # Interfaces TypeScript
├── assets/         # Recursos estáticos (imágenes, etc.)
├── App.tsx         # Componente principal
└── main.tsx        # Punto de entrada
```

## 🛠️ Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Servidor de vista previa
```

## 🐳 Docker

Para ejecutar la aplicación con Docker:

```bash
# Abrir Docker y después ejecutar con Docker Compose
docker compose up

# La aplicación estará disponible en: http://localhost:9778
```

**Nota:** Antes de usar Docker, configura en Google OAuth agregando `http://localhost:9778` como origen autorizado en Google Cloud Console.

---

**Desarrollado con ❤️ por Jose I. Bayón**