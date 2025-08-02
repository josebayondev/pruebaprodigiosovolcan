import { useAuthContext } from '../context/AuthContext'

function UserDashboard() {
  const { user, logout } = useAuthContext()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4">
        <img 
          src={user?.picture} 
          alt="Avatar" 
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Hola, {user?.name}!
        </h1>
        <p className="text-gray-600 mb-2">{user?.email}</p>
        <p className="text-sm text-gray-500 mb-6">
          Nombre: {user?.firstName} {user?.lastName}
        </p>
        
        <button 
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

export default UserDashboard