import { jwtDecode } from 'jwt-decode'
import type { GoogleUser, User } from '../types/auth'

export const authService = {
  // Función para procesar la respuesta de Google
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