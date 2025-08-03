// Archivo del dashboard del usuario

import { useAuthContext } from "../context/AuthContext";

function UserDashboard() {
  const { user, logout } = useAuthContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 relative">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in p-6 sm:p-10 border border-gray-100 border-opacity-30 transition-shadow duration-300 hover:shadow-xl">
        <img
          src={user?.picture}
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Hola, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mb-3">{user?.email}</p>
        <p className="text-sm text-gray-500 mb-6">
          Nombre: {user?.name}
        </p>

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
      <p className="absolute bottom-4 text-xs text-gray-400 text-center w-full sm:w-auto sm:right-5">
        Prueba técnica desarrollada por Jose I. Bayón
      </p>
    </div>
  );
}

export default UserDashboard;
