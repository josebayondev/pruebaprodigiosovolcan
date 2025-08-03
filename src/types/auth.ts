// Archivo que define los tipos de datos relacionados con la autenticación

// Datos que nos devuelve Google
export interface GoogleUser {
  sub: string           
  email: string         
  name: string          
  picture: string       
  given_name: string    
  family_name: string   
  exp?: number          
}

// Datos que usaremos en nuestra app
export interface User {
  id: string
  email: string
  name: string
  picture: string
  firstName: string
  lastName: string
}

// Datos de la sesión del usuario
export interface UserSession {
  user: User
  expiresAt: number
  createdAt: number
}