import LoginPage from "./components/LoginPage"
import { useAuthContext } from "./context/AuthContext"


function App() {

  const { isAuthenticated, isLoading, user } = useAuthContext()

  // Si está cargando
if (isLoading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl text-gray-600">Cargando...</div>
    </div>
  )
}

// Si está autenticado
if (isAuthenticated && user) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1>¡Hola, {user.name}!</h1>
        <p>{user.email}</p>
        {/* Botón de logout lo agregaremos después */}
      </div>
    </div>
  )
}

// Si no está autenticado
return <LoginPage />
}

export default App
