import React, { useState } from 'react'; // Importa useState para manejar el estado del formulario
import styles from './LoginPage.module.css'; // Importa los estilos CSS Modules

const LoginPage: React.FC = () => {
  // ===================== Estado del Componente =====================
  // Estado para guardar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    username: '', // Campo para el nombre de usuario
    password: '', // Campo para la contraseña
  });

  // ===================== Funciones Manejadoras de Eventos =====================
  // Función para manejar cambios en los campos de entrada (Usuario y Contraseña)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value // Actualiza el estado con el valor del campo que cambió
    }));
    console.log(`Campo ${name} cambiado a:`, value); // Para probar
  };

  // Función para manejar el envío del formulario (clic en el botón)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    console.log("Intentando iniciar sesión con:", formData); // Muestra los datos en consola

    // --- Lógica de autenticación aquí ---
    // En un caso real, aquí enviarías formData a tu backend para verificar las credenciales
    // Si la autenticación es exitosa, redirigirías al usuario al panel de administración
    // Si falla, mostrarías un mensaje de error

    // Ejemplo básico de simulación (reemplazar con lógica real):
    if (formData.username === 'admin' && formData.password === 'password123') {
      alert("¡Inicio de sesión exitoso (simulado)! Redirigiendo...");
      // Aquí iría la lógica de redirección, por ejemplo, usando navigate de react-router-dom
      // navigate('/admin-dashboard');
    } else {
      alert("Usuario o contraseña incorrectos (simulado).");
      // Podrías mostrar un mensaje de error en la interfaz
    }
  };

  // ===================== Renderizado del Componente LoginPage =====================
  return (
    // Contenedor principal de la página de inicio de sesión
    <div className={styles.loginPageContainer}>
      {/* Contenedor central para el formulario y título */}
      <div className={styles.loginBox}>
        {/* Título de la página */}
        <h1 className={styles.pageTitle}>Acceso Administrativo</h1>

        {/* Formulario de inicio de sesión */}
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          {/* Campo de Usuario */}
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username" // El nombre debe coincidir con la clave en el estado formData
              className={styles.formInput}
              value={formData.username} // Vincula el valor al estado
              onChange={handleInputChange} // Maneja los cambios en el input
              placeholder="Ingresa tu usuario"
              required // Hace que el campo sea obligatorio (validación básica HTML5)
            />
          </div>

          {/* Campo de Contraseña */}
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="password">Contraseña</label>
            <input
              type="password" // Tipo password para ocultar la entrada
              id="password"
              name="password" // El nombre debe coincidir con la clave en el estado formData
              className={styles.formInput}
              value={formData.password} // Vincula el valor al estado
              onChange={handleInputChange} // Maneja los cambios en el input
              placeholder="Ingresa tu contraseña"
              required // Hace que el campo sea obligatorio
            />
          </div>

          {/* Botón de Iniciar Sesión */}
          <button
            type="submit" // Tipo submit para enviar el formulario
            className={styles.loginButton}
            // Puedes deshabilitar el botón si los campos están vacíos si quieres
            // disabled={!formData.username || !formData.password}
          >
            INICIAR SESIÓN
          </button>
        </form> {/* Fin loginForm */}

        {/* Texto explicativo debajo del formulario */}
        <p className={styles.explanatoryText}>
          Este es un acceso exclusivo para administradores del sistema.
        </p>

      </div> {/* Fin loginBox */}
    </div> // Fin loginPageContainer
  );
};

export default LoginPage; // Exporta el componente LoginPage
