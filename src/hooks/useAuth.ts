import { useState, useEffect } from 'react'
import type { User } from '../types/auth'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Función para hacer login
  const login = (userData: User) => {
    setUser(userData)
    setIsAuthenticated(true)
    // Guardar en localStorage para persistencia
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('isAuthenticated', 'true')
  }

  // Función para hacer logout
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    // Limpiar localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
  }

  // Verificar si hay datos guardados al cargar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedAuth = localStorage.getItem('isAuthenticated')
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  }
}