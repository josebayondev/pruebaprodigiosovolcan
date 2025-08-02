// Datos que nos devuelve Google una vez iniciada la sesión
export interface GoogleUser {
  sub: string           // ID único del usuario
  email: string         // Email del usuario
  name: string          // Nombre completo
  picture: string       // URL de la foto de perfil
  given_name: string    // Nombre
  family_name: string   // Apellido
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