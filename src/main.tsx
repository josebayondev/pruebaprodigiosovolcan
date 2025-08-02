import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

// Constante para importar el ID del cliente de Google del archivo .env
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}> {/* Proveedor de Google OAuth con el ID del cliente */}
      <AuthProvider> {/* Proveedor de contexto de autenticación */}
      <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)