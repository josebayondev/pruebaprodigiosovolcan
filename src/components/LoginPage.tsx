// Archivo de inicio de sesión con Google

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { authService } from "../services/authServices";
import { useAuthContext } from "../context/AuthContext";
import welcomeIllustration from "../assets/img/welcome-illustration.svg";

function LoginPage() {
  const { login } = useAuthContext();

  // Función para manejar el éxito del inicio de sesión
  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const userData = authService.processGoogleResponse(
        credentialResponse.credential
      );
      login(userData);
    }
  };

  // Función para manejar el error del inicio de sesión
  const handleError = () => {
    alert("Error al iniciar sesión con Google. Por favor, inténtalo de nuevo.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#d1d5db] flex items-center justify-center px-4 relative">
     <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in p-6 sm:p-10 border border-gray-100 border-opacity-30 transition-shadow duration-300 hover:shadow-xl">
        {/* Ilustración */}
        <img
          src={welcomeIllustration} 
          alt="Bienvenida"
          className="mx-auto mb-6 w-20 mt-2"
        />

        {/* Título */}
        <h1 className="text-3xl font-extrabold text-indigo-800 mb-4 animate-fade-in">
          Bienvenido
        </h1>

        <p className="text-gray-600 text-sm mb-6">
          Inicia sesión con tu cuenta de Google para acceder a tu espacio.
        </p>

        <div className="flex justify-center transition-transform duration-200 ease-in-out hover:scale-105">
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

        <p className="mt-8 text-xs text-gray-00">
          © {new Date().getFullYear()}. Jose I. Bayón.
        </p>
      </div>
      <p className="absolute bottom-4 text-xs text-gray-500 text-center w-full sm:w-auto sm:right-5">
        Prueba técnica desarrollada por Jose I. Bayón
      </p>
    </div>
  );
}

export default LoginPage;
