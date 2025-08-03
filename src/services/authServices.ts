// Archivo para manejar la autenticación con Google

import { jwtDecode } from 'jwt-decode'
import type { GoogleUser, User } from '../types/auth'

export const authService = {
  processGoogleResponse: (credential: string): User => {
    try {
      const userInfo: GoogleUser = jwtDecode(credential)
      
      // Validar que el token no haya expirado
      const currentTime = Date.now() / 1000
      if (userInfo.exp && userInfo.exp < currentTime) {
        throw new Error('Token expirado')
      }
      
      // Validar campos requeridos
      if (!userInfo.sub || !userInfo.email || !userInfo.name) {
        throw new Error('Token inválido')
      }
      
      return {
        id: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        firstName: userInfo.given_name,
        lastName: userInfo.family_name
      }
    } catch (error) {
      console.error('Falla al procesar la respuesta de Google:', error)
      throw new Error('Falla al procesar la respuesta de Google')
    }
  }
}