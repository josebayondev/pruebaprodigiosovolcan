// Archivo hook que gestiona la autenticación del usuario, 
// mantiene el estado y controla la sesión usando localStorage 
// para que la sesión persista aunque cierres la pestaña o recargues.

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import type { User, UserSession } from "../types/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Función para hacer login
  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);

    // Crear sesión con expiración (24 horas)
    const sessionData: UserSession = {
      user: userData,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      createdAt: Date.now(),
    };

    // Guardar solo una clave en localStorage
    localStorage.setItem("userSession", JSON.stringify(sessionData));
  };

  // Función para hacer logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Limpiar localStorage
    localStorage.removeItem("userSession");
  };

// Verificar si hay datos guardados al cargar la app
useEffect(() => {
  const savedSession = localStorage.getItem("userSession");
  
  if (savedSession) {
    try {
      const sessionData: UserSession = JSON.parse(savedSession);
      
      // Verificar si la sesión no ha expirado
      if (Date.now() < sessionData.expiresAt) {
        setUser(sessionData.user);
        setIsAuthenticated(true);
      } else {
        // Sesión expirada, limpiar localStorage
        localStorage.removeItem("userSession");
      }
    } catch (error) {
      // Si hay error limpiar localStorage
      localStorage.removeItem("userSession");
    }
  }
  setIsLoading(false);
}, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
};
