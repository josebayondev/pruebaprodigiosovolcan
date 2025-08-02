import { createContext, useContext } from 'react'
import { useAuth } from '../hooks/useAuth'
import type { User } from '../types/auth'

// Lo que vamos a compartir desde el contexto
type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (user: User) => void
  logout: () => void
}

// Creamos el contexto con valor inicial "undefined"
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Este componente envolverá la app y le dará acceso al contexto
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth() // Lógica de login/logout, estado, etc.

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para acceder fácilmente al contexto desde cualquier componente
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  // Si el contexto no está definido, lanzamos un error
  if (!context) {
    throw new Error('useAuthContext debe usarse dentro de <AuthProvider>')
  }

  return context
}