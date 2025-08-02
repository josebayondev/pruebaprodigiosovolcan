# 🌋 Login Prodigioso Volcán - Google SSO Application

Una aplicación React con TypeScript y Vite que implementa autenticación SSO (Single Sign-On) a través de Google OAuth.

## 🚀 Características

- ✅ Autenticación con Google OAuth
- ✅ Interfaz moderna con Tailwind CSS
- ✅ Persistencia de sesión con localStorage
- ✅ Arquitectura modular con TypeScript
- ✅ Context API para manejo de estado global

## 📋 Historial de Desarrollo

### 1. **Configuración Inicial del Proyecto**
```bash
# Proyecto creado con Vite + React + TypeScript
npm create vite@latest login-prodigioso-volcan -- --template react-ts
```

### 2. **Instalación de Tailwind CSS**
```bash
# Instalación de dependencias de Tailwind
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# Generación de archivos de configuración
npx tailwindcss init -p
```

**Configuración realizada:**
- `tailwind.config.js` - Configurado para escanear archivos React
- `src/index.css` - Agregadas directivas de Tailwind
- Eliminación de estilos CSS conflictivos

### 3. **Instalación de Google OAuth**
```bash
# Librería para autenticación con Google
npm install @react-oauth/google

# Librería para decodificar JWT tokens
npm install jwt-decode
```

### 4. **Configuración de Variables de Entorno**
Archivo `.env` creado con:
```properties
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
VITE_GOOGLE_CLIENT_SECRET=tu_google_client_secret
```

### 5. **Arquitectura de Archivos Creada**

```
src/
├── components/
│   └── LoginPage.tsx           # Componente de página de login
├── context/
│   └── AuthContext.tsx         # Context API para autenticación
├── hooks/
│   └── useAuth.ts              # Hook personalizado para auth
├── services/
│   └── authServices.ts         # Lógica de procesamiento de Google OAuth
├── types/
│   └── auth.ts                 # Interfaces TypeScript
└── main.tsx                    # Configuración de providers
```

### 6. **Implementación de Componentes**

#### `src/types/auth.ts`
```typescript
// Interfaces para tipado de datos de Google y usuario
export interface GoogleUser {
  sub: string
  email: string
  name: string
  picture: string
  given_name: string
  family_name: string
}

export interface User {
  id: string
  email: string
  name: string
  picture: string
  firstName: string
  lastName: string
}
```

#### `src/services/authServices.ts`
```typescript
// Servicio para procesar respuesta de Google OAuth
export const authService = {
  processGoogleResponse: (credential: string): User => {
    const userInfo: GoogleUser = jwtDecode(credential)
    return {
      id: userInfo.sub,
      email: userInfo.email,
      name: userInfo.name,
      picture: userInfo.picture,
      firstName: userInfo.given_name,
      lastName: userInfo.family_name
    }
  }
}
```

#### `src/hooks/useAuth.ts`
- Hook personalizado para manejo de estado de autenticación
- Funciones: `login()`, `logout()`
- Persistencia con localStorage
- Estados: `user`, `isAuthenticated`, `isLoading`

#### `src/context/AuthContext.tsx`
- Context API para compartir estado de autenticación globalmente
- Provider: `AuthProvider`
- Hook: `useAuthContext()`

#### `src/components/LoginPage.tsx`
- Componente de página de login con Google OAuth
- Interfaz moderna con Tailwind CSS
- Integración con Context API

### 7. **Configuración de Providers en main.tsx**
```typescript
<GoogleOAuthProvider clientId={clientId}>
  <AuthProvider>
    <App />
  </AuthProvider>
</GoogleOAuthProvider>
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
1. **Node.js** (v18 o superior)
2. **Cuenta de Google Cloud Platform**
3. **Credenciales OAuth 2.0 configuradas**

### Pasos para inicializar el proyecto:

1. **Clonar y instalar dependencias:**
```bash
git clone <repository-url>
cd login-prodigioso-volcan
npm install
```

2. **Configurar variables de entorno:**
```bash
# Crear archivo .env en la raíz del proyecto
echo "VITE_GOOGLE_CLIENT_ID=tu_google_client_id" > .env
echo "VITE_GOOGLE_CLIENT_SECRET=tu_google_client_secret" >> .env
```

3. **Configurar Google OAuth:**
   - Ir a [Google Cloud Console](https://console.cloud.google.com/)
   - Crear un nuevo proyecto o seleccionar uno existente
   - Habilitar la API de Google+
   - Crear credenciales OAuth 2.0
   - Agregar dominios autorizados:
     - `http://localhost:5173` (desarrollo)
     - `http://localhost:5174` (desarrollo alternativo)

4. **Ejecutar en desarrollo:**
```bash
npm run dev
```

5. **Construir para producción:**
```bash
npm run build
```

## 🎯 Funcionalidades Implementadas

### ✅ Completadas:
- [x] Configuración de Tailwind CSS
- [x] Instalación de Google OAuth
- [x] Estructura de archivos TypeScript
- [x] Context API para autenticación
- [x] Componente de LoginPage
- [x] Servicio de procesamiento de Google OAuth
- [x] Hook personalizado useAuth
- [x] Persistencia con localStorage

### 🚧 Pendientes:
- [ ] Integración completa del flujo de autenticación
- [ ] Página de usuario autenticado
- [ ] Funcionalidad de logout
- [ ] Componente de protección de rutas
- [ ] Manejo de errores avanzado

## 📚 Tecnologías Utilizadas

- **React 19.1.0** - Librería de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático
- **Vite 7.0.4** - Build tool y dev server
- **Tailwind CSS 3.4.0** - Framework de CSS
- **@react-oauth/google** - Autenticación con Google
- **jwt-decode** - Decodificación de tokens JWT

## 🔧 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Construcción para producción
npm run lint       # Linting con ESLint
npm run preview    # Preview de la build de producción
```

## 📝 Notas de Desarrollo

- **Puerto por defecto:** `http://localhost:5173`
- **Puerto alternativo:** `http://localhost:5174`
- **Configuración de Tailwind:** Optimizada para React con TypeScript
- **Manejo de estado:** Context API + hooks personalizados
- **Persistencia:** localStorage para mantener sesión

---

**Desarrollado por:** Prodigioso Volcán Team  
**Fecha:** Agosto 2025
