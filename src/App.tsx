import LoginPage from "./components/LoginPage"
import UserDashboard from "./components/UserDashboard"
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
  return <UserDashboard />
}

// Si no está autenticado
return <LoginPage />
}

export default App
