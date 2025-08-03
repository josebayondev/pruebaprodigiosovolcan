# 🌋 Login Prodigioso Volcán - SSO con Google

**Proyecto de prueba técnica desarrollado por José I. Bayón**

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
git clone <url-del-repositorio>
cd login-prodigioso-volcan
```

### 2. Instalar dependencias
```bash
npm install
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
└── main.tsx        # Punto de entrada
```

## 🛠️ Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview de la build
npm run lint     # Linting con ESLint
```

---

**Desarrollado con ❤️ por José I. Bayón**