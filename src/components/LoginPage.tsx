import { GoogleLogin, type CredentialResponse } from '@react-oauth/google'

function LoginPage() {

  // Función para manejar el éxito del inicio de sesión
  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Login Success:', credentialResponse)
    // Aquí manejaremos la respuesta exitosa
  }
  // Función para manejar el error del inicio de sesión
  const handleError = () => {
    console.log('Login Failed')
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full mx-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-800">
        ¡Bienvenido a Prodigioso Volcán!
      </h1>
      <p className="text-gray-600 mb-6 text-base">
        Inicia sesión con tu cuenta de Google para continuar
      </p>

      <div className="flex justify-center hover:scale-105 transition-transform">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          theme="filled_blue"
          type="standard"
          shape="rectangular"
          text="signin_with"
          size="large"
          logo_alignment="left"
          width="280"
        />
      </div>

      <p className="mt-8 text-xs text-gray-400">
        © {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </div>
  </div>
)
}

export default LoginPage