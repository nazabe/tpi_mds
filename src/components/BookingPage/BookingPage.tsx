import React, { useState } from 'react'; // Asegúrate de que useState esté importado
import styles from './BookingPage.module.css'; // Importa los estilos CSS Modules
import {
  FaCheckCircle, FaRegCircle, FaHeart, FaClock, FaDollarSign,
  FaCalendarAlt, FaUserCircle // Importa el icono de calendario y usuario
} from 'react-icons/fa'; // Iconos de Font Awesome

import 'react-datepicker/dist/react-datepicker.css';

// Importa el componente DatePicker y sus estilos CSS por defecto
import DatePicker from 'react-datepicker';
// Asegúrate de que solo importas los estilos una vez
// import 'react-datepicker/dist/react-datepicker.css'; // ¡Elimina esta línea duplicada!

// Asegúrate de que NO tengas la línea 'import usePage from 'react-datepicker';'. Si la tienes, elimínala.


// --- Interfaz y Datos de Servicios ---
// Define una interfaz para la estructura de un servicio
interface Service {
  id: number; // Un ID único para cada servicio
  name: string; // Nombre del servicio
  duration: string; // Duración (ej: "45 minutos")
  price: string; // Precio (ej: "$40000,00")
  icon?: React.ReactNode; // Icono opcional para el servicio (ej: <FaHeart />)
  // Puedes añadir más campos si necesitas (ej: description, image)
}

// Datos de ejemplo de los servicios (Actualizados con los valores proporcionados)
// Idealmente, estos datos vendrían de una API o un archivo de configuración central

const servicesData: Service[] = [
  // Servicios Individuales - Masajes
  { id: 1, name: "Masaje Anti-stress", duration: "50 minutos", price: "$12.000", icon: <FaHeart /> },
  { id: 2, name: "Masaje Descontracturante", duration: "60 minutos", price: "$13.000", icon: <FaHeart /> },
  { id: 3, name: "Masaje con Piedras Calientes", duration: "70 minutos", price: "$15.000", icon: <FaHeart /> },
  { id: 4, name: "Masaje Circulatorio", duration: "45 minutos", price: "$11.000", icon: <FaHeart /> },

  // Servicios Individuales - Belleza
  { id: 5, name: "Lifting de Pestaña", duration: "50 minutos", price: "$8.500", icon: <FaHeart /> },
  { id: 6, name: "Depilación Facial", duration: "25 minutos", price: "$4.000", icon: <FaHeart /> },
  { id: 7, name: "Belleza de Manos y Pies", duration: "90 minutos", price: "$10.000", icon: <FaHeart /> },

  // Servicios Individuales - Tratamientos Faciales
  { id: 8, name: "Punta de Diamante Microexfoliación", duration: "60 minutos", price: "$9.500", icon: <FaHeart /> },
  { id: 9, name: "Limpieza Profunda + Hidratación", duration: "70 minutos", price: "$11.000", icon: <FaHeart /> },
  { id: 10, name: "Crio Frecuencia Facial", duration: "40 minutos", price: "$9.000", icon: <FaHeart /> },

  // Servicios Individuales - Tratamientos Corporales
  { id: 11, name: "VelaSlim", duration: "45 minutos", price: "$10.500", icon: <FaHeart /> },
  { id: 12, name: "DermoHealth", duration: "40 minutos", price: "$9.000", icon: <FaHeart /> },
  // Descomentados y actualizados con los datos proporcionados

  // Servicios Grupales (Mantengo como estaban en tu código, comentados)
  // { id: 15, name: "Hidromasajes", duration: "XX minutos", price: "$XXXXX,XX", icon: <FaHeart /> },
  // { id: 16, name: "Yoga", duration: "XX minutos", price: "$XXXXX,XX", icon: <FaHeart /> },

];

// Eliminé el bloque <div> con className="serviceCard" que estaba fuera del componente.
// Esto era un fragmento de JSX que no pertenecía a la estructura principal del componente.

// --- Fin Interfaz y Datos de Servicios ---


// --- Componente Principal de la Página de Reserva ---
const BookingPage: React.FC = () => {
  // ===================== Estado del Componente =====================
  // Estado para guardar el ID del servicio seleccionado (Controla la visibilidad del Paso 2 y 3)
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  // Estado para la fecha seleccionada en el datepicker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Estado para el horario seleccionado (ej: "09:00")
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // --- Nuevo estado para los datos del formulario del Paso 3 ---
   const [formData, setFormData] = useState({
       name: '',
       email: '',
       phone: '',
       notes: ''
   });

   // --- Nuevo estado para controlar si el cliente está logeado para la reserva ---
   const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);

   // --- Nuevo estado para los datos del formulario de Login/Signup ---
   const [authFormData, setAuthFormData] = useState({
       authEmail: '',
       authPassword: '',
   });
   // Estado para mostrar mensajes de autenticación (login/signup)
   const [authMessage, setAuthMessage] = useState<string | null>(null);


  // ===================== Funciones Manejadoras de Eventos =====================

  // Función que se ejecuta al hacer clic en una tarjeta de servicio
  const handleSelectService = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    console.log("Servicio seleccionado ID:", serviceId);
    // Al seleccionar un servicio, NO CAMBIAMOS DE PANTALLA, solo actualizamos el estado selectedServiceId
    // Esto hará que el bloque del Paso 2 se renderice debajo del Paso 1.
  };

  // Función que se ejecuta al seleccionar una fecha en el datepicker
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date);
    // Cuando cambia la fecha, reseteamos el horario seleccionado para evitar inconsistencias
    setSelectedTime(null);
    // Aquí iría la lógica (fetch) para cargar los horarios disponibles para 'date' y el 'selectedServiceId'
  };

  // Función que se ejecuta al hacer clic en un botón de horario
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    console.log("Horario seleccionado:", time);
    // Podrías hacer algo adicional si necesitas al seleccionar horario
  };

  // Función para manejar cambios en los campos del formulario de datos personales (Paso 3)
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       const { name, value } = e.target;
       setFormData(prevData => ({
           ...prevData,
           [name]: value
       }));
       console.log(`Campo ${name} cambiado a:`, value); // Para probar
   };

   // --- Nueva función para manejar cambios en los campos del formulario de Login/Signup ---
    const handleAuthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuthFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Limpia mensajes de autenticación al empezar a escribir
        if (authMessage) setAuthMessage(null);
    };


  // --- Modificar la función handleGoBack para que funcione desde Paso 3 ---
  // Ahora esta función maneja el "Volver" desde el Paso 3
  const handleGoBack = () => {
      // Si estamos viendo Paso 3 (porque selectedDate y selectedTime NO son null)
      if (selectedDate !== null && selectedTime !== null) {
          console.log("Volviendo al Paso 2");
           setSelectedDate(null); // Limpiamos fecha seleccionada
           setSelectedTime(null); // Limpiamos horario seleccionado
           // selectedServiceId queda seleccionado, manteniendo Paso 2 visible
           // También limpiamos los datos del formulario y el estado de login al volver del Paso 3
           setFormData({ name: '', email: '', phone: '', notes: '' });
           setIsClientLoggedIn(false);
           setAuthFormData({ authEmail: '', authPassword: '' });
           setAuthMessage(null);

      } else if (selectedServiceId !== null) {
           // Si estamos viendo Paso 2 (solo selectedServiceId NO es null)
           console.log("Volviendo al Paso 1");
           setSelectedServiceId(null); // Limpiamos servicio seleccionado
           setSelectedDate(null); // Limpia fecha (redundante si ya es null, pero seguro)
           setSelectedTime(null); // Limpia horario (redundante si ya es null, pero seguro)
           // setAvailableTimes([]); // No necesitas limpiar esto al volver al paso 1
      }
      // Si no hay servicio seleccionado (estamos en Paso 1), el botón Volver no debería estar visible.
  };


  // --- Nueva función para simular el inicio de sesión ---
   const handleLogin = () => {
       // Validación básica para que no esté vacío (para la simulación)
       if (!authFormData.authEmail || !authFormData.authPassword) {
           setAuthMessage("Por favor, ingrese email y contraseña.");
           return;
       }
       // --- SIMULACIÓN DE LOGIN EXITOSO ---
       // En un caso real, aquí harías un fetch POST a tu backend /api/login
       // y verificarías la respuesta.
       console.log("Simulando inicio de sesión con:", authFormData);
       setIsClientLoggedIn(true); // Establece el estado como logeado
       setAuthMessage("¡Inicio de sesión exitoso!"); // Mensaje de éxito
       // Opcional: Podrías limpiar los campos de login/signup después del éxito
       setAuthFormData({ authEmail: '', authPassword: '' });
       // Opcional: Si el backend devuelve datos del usuario (nombre, email),
       // podrías prellenar el formulario de datos personales con ellos.
       // setFormData(prevData => ({ ...prevData, name: userData.name, email: userData.email }));
   };

   // --- Nueva función para simular la creación de cuenta ---
    const handleSignup = () => {
        // Validación básica para que no esté vacío (para la simulación)
        if (!authFormData.authEmail || !authFormData.authPassword) {
            setAuthMessage("Por favor, ingrese email y contraseña para crear la cuenta.");
            return;
        }
        // --- SIMULACIÓN DE CREACIÓN DE CUENTA EXITOSA ---
        // En un caso real, aquí harías un fetch POST a tu backend /api/signup
        // y verificarías la respuesta.
        console.log("Simulando creación de cuenta con:", authFormData);
        // Después de crear la cuenta, podrías logear al usuario automáticamente
        setIsClientLoggedIn(true); // Establece el estado como logeado
        setAuthMessage("¡Cuenta creada con éxito! Has iniciado sesión."); // Mensaje de éxito
        // Opcional: Limpiar campos de login/signup
        setAuthFormData({ authEmail: '', authPassword: '' });
        // Opcional: Si el backend devuelve datos del usuario (nombre, email),
        // podrías prellenar el formulario de datos personales con ellos.
        // setFormData(prevData => ({ ...prevData, name: userData.name, email: userData.email }));
    };


  // --- Función para manejar la confirmación de la reserva (botón final) ---
  const handleConfirmBooking = () => {
      // Aquí iría la lógica final para enviar los datos de la reserva
      // (selectedServiceId, selectedDate, selectedTime, formData) a tu backend o servicio de reserva
      console.log("Datos de reserva a confirmar:", {
          serviceId: selectedServiceId,
          date: selectedDate,
          time: selectedTime,
          // Si el cliente está logeado, podrías enviar su ID de usuario en lugar de formData.name/email/phone
          // Si no está logeado, envías los datos del formData.
          clientData: isClientLoggedIn ? 'Usuario Logeado' : formData, // Ejemplo: enviar 'Usuario Logeado' o formData
          notes: formData.notes,
      });
      // Podrías mostrar un mensaje de éxito, redirigir al usuario, etc.
      alert("Reserva simulada confirmada. Revisa la consola para ver los datos."); // Mensaje de ejemplo

      // Opcional: Limpiar todos los estados para empezar una nueva reserva después de confirmar
      setSelectedServiceId(null);
      setSelectedDate(null);
      setSelectedTime(null);
      // setAvailableTimes([]); // No necesitas limpiar esto aquí
      setFormData({ name: '', email: '', phone: '', notes: '' });
      setIsClientLoggedIn(false); // Asegurarse de que el estado de login se resetee
      setAuthFormData({ authEmail: '', authPassword: '' });
      setAuthMessage(null);
  };


  // ===================== Renderizado del Componente BookingPage =====================
  // Renderizamos secuencialmente: Título principal, luego el bloque del Paso 1,
  // el bloque del Paso 2 (si hay servicio), el bloque del Paso 3 (si hay fecha y hora),
  // y finalmente los botones de acción (solo si se muestra el Paso 3).

  // Definimos los horarios disponibles (lista fija por ahora)
  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00",
    "19:00", "20:00", "21:00" // Horarios hasta las 21:00
  ];

  // Función auxiliar para encontrar el nombre del servicio seleccionado por su ID
  const getSelectedServiceName = (id: number | null) => {
      if (id === null) return "Servicio no seleccionado";
      const service = servicesData.find(s => s.id === id);
      return service ? service.name : "Servicio desconocido";
  };

  // Determinamos si debemos mostrar los bloques de pasos
  const showStep2 = selectedServiceId !== null;
  const showStep3 = selectedServiceId !== null && selectedDate !== null && selectedTime !== null;

  // Determinamos si el botón de Confirmar Reserva debe estar habilitado
  // Debe estar habilitado si el cliente está logeado O si NO está logeado PERO los campos de Nombre y (Email O Teléfono) están llenos.
  const isConfirmButtonEnabled = isClientLoggedIn || (!isClientLoggedIn && formData.name && (formData.email || formData.phone));


  return (
    <div className={styles.bookingPageContainer}>
      {/* Título principal de la página */}
      <h1 className={styles.pageTitle}>Reservar Turno</h1>

      {/* ===================== Bloque del Paso 1: Selección de Servicio ===================== */}
      {/* Este bloque siempre es visible al inicio */}
      <div className={styles.stepContainer}> {/* Contenedor para aplicar margen inferior */}
        <div className={styles.stepIndicator}>
          {/* Icono: CheckCircle si completado (servicio seleccionado), RegCircle si actual */}
          {showStep2 ? ( // Si se muestra el Paso 2, el Paso 1 está completado
             <FaCheckCircle className={`${styles.stepIcon} ${styles.stepIconCompleted}`} /> // Icono y estilo para completado (rosa oscuro)
          ) : (
             <FaRegCircle className={styles.stepIcon} /> // Icono y estilo para actual (azul oscuro)
          )}
          <h2 className={styles.stepTitle}>Paso 1: Seleccione un Servicio</h2>
          {/* Muestra el nombre del servicio seleccionado si existe */}
          {selectedServiceId !== null && (
              <span className={styles.selectedServiceName}>
                  : {getSelectedServiceName(selectedServiceId)}
              </span>
          )}
        </div> {/* Fin stepIndicator */}

        {/* Galería / Cuadrícula de Servicios */}
        <div className={styles.servicesGallery}>
          {servicesData.map(service => (
            <div
              key={service.id} // Key única esencial
              className={`${styles.serviceCard} ${selectedServiceId === service.id ? styles.selected : ''}`} // Clases CSS dinámicas
              onClick={() => handleSelectService(service.id)} // Llama a handleSelectService
            >
              {/* Contenido de la tarjeta (ícono, nombre, info) */}
              <div className={styles.serviceIcon}>{service.icon}</div> {/* Icono del servicio (azul oscuro) */}
              <h3 className={styles.serviceName}>{service.name}</h3> {/* Nombre (azul oscuro) */}
              <div className={styles.serviceInfo}> {/* Duración y Precio */}
                <p className={styles.serviceDetail}>
                    <FaClock className={styles.infoIcon} /> {/* Icono reloj (rosa oscuro) */}
                    {service.duration}
                </p>
                <p className={styles.serviceDetail}>
                    <FaDollarSign className={styles.infoIcon} /> {/* Icono dólar (rosa oscuro) */}
                    {service.price}
                </p>
              </div>
              {/* Indicador visual si la tarjeta está seleccionada (checkmark rosa oscuro) */}
              {selectedServiceId === service.id && (
                <div className={styles.selectedIndicator}>
                   <FaCheckCircle className={styles.checkIcon} />
                </div>
              )}
            </div> // Fin serviceCard
          ))}
        </div> {/* Fin servicesGallery */}
      </div> {/* Fin stepContainer para Paso 1 */}


      {/* ===================== Bloque del Paso 2: Selección de Fecha y Hora ===================== */}
      {/* Visible SOLAMENTE si selectedServiceId NO es null */}
      {showStep2 && (
          <div className={styles.stepContainer}> {/* Contenedor para aplicar margen inferior */}
              <div className={styles.stepIndicator}>
                 {/* Icono: CheckCircle si completado (fecha/hora seleccionados), CalendarAlt si actual */}
                 {showStep3 ? ( // Si se muestra el Paso 3, el Paso 2 está completado
                     <FaCheckCircle className={`${styles.stepIcon} ${styles.stepIconCompleted}`} /> // Completado (rosa oscuro)
                 ) : (
                     <FaCalendarAlt className={styles.stepIcon} /> // Actual (azul oscuro)
                 )}
                 <h2 className={styles.stepTitle}>Paso 2: Seleccione Profesional,   Fecha y Hora</h2>
              </div> {/* Fin stepIndicator */}

              {/* Selección de Profesional */}
                <div className={styles.professionalSelectionContainer}>
                <label htmlFor="professionalSelect" className={styles.dateLabel}>
                    Seleccione profesional a elección
                </label>
                <select id="professionalSelect" className={styles.dateInput}>
                    <option value="">-- Seleccione un profesional --</option>
                    <option value="1">Dra. López - 42 años</option>
                    <option value="2">Dr. García - 37 años</option>
                    <option value="3">Lic. Pérez - 29 años</option>
                </select>
                
                </div>

              {/* Sección de Selección de Fecha */}
              <div className={styles.dateSelectionContainer}>
                <label className={styles.dateLabel}>Fecha</label>
                {/* Componente DatePicker (Calendario) */}
                <DatePicker
                  selected={selectedDate} // Vincula el valor al estado selectedDate
                  onChange={handleDateChange} // Llama a handleDateChange al cambiar la fecha
                  dateFormat="yyyy/MM/dd" // Formato en que se muestra la fecha en el input
                  className={styles.dateInput} // Clase CSS para estilizar el input
                  minDate={new Date()} // No permitir fechas pasadas
                  placeholderText="Seleccione una fecha" // Texto dentro del input vacío
                  isClearable // Permite borrar la fecha seleccionada
                  // Puedes añadir más props aquí si necesitas personalizar el calendario
                />
              </div> {/* Fin dateSelectionContainer */}


              {/* Sección de Horarios Disponibles */}
              <div className={styles.timeSelectionContainer}>
                <h3 className={styles.timesTitle}>Horarios disponibles:</h3>

                {/* Renderizado de los botones de horarios */}
                {selectedDate === null ? (
                    <p>Seleccione una fecha para ver los horarios disponibles.</p> // Mensaje si no hay fecha seleccionada
                ) : (
                   <div className={styles.timeSlotsGrid}> {/* Contenedor para la cuadrícula de horarios */}
                     {availableTimes.length > 0 ? ( // Muestra horarios si la lista no está vacía
                       availableTimes.map(time => (
                         <button
                           key={time} // Key única
                           className={`${styles.timeSlotButton} ${selectedTime === time ? styles.selectedTime : ''}`} // Clase 'selectedTime' si el horario coincide
                           onClick={() => handleSelectTime(time)} // Llama a handleSelectTime
                           // Lógica para deshabilitar horarios no disponibles (si tuvieras esos datos reales)
                           // disabled={!isTimeAvailable(time, selectedServiceId, selectedDate)} // Ejemplo: verifica disponibilidad
                         >
                           {time} {/* Muestra el horario en el botón */}
                         </button>
                       ))
                     ) : (
                       // Este mensaje se mostraría si availableTimes estuviera vacío para la fecha seleccionada
                       <p>No hay horarios disponibles para esta fecha.</p>
                     )}
                   </div>
               )} {/* Fin renderizado condicional de horarios */}

              </div> {/* Fin timeSelectionContainer */}

              {/* Botón Volver para el Paso 2 */}
               {/* <div className={styles.bookingActions}>
                   <button className={styles.backButton} onClick={handleGoBack}>Volver</button>
               </div> */}


          </div>
      )} {/* Fin del renderizado condicional del Bloque del Paso 2 */}


      {/* ===================== Bloque del Paso 3: Complete sus Datos / Iniciar Sesión ===================== */}
      {/* Visible SOLAMENTE si selectedServiceId, selectedDate Y selectedTime NO son null */}
      {showStep3 && (
          <div className={styles.stepContainer}> {/* Contenedor para aplicar margen inferior */}
              <div className={styles.stepIndicator}>
                  {/* Icono para Paso 3 */}
                 <FaUserCircle className={styles.stepIcon} /> {/* Icono actual (azul oscuro) */}
                 <h2 className={styles.stepTitle}>Paso 3: Complete sus Datos</h2>
              </div> {/* Fin stepIndicator */}

              {/* --- Sección de Autenticación (Login/Signup) --- */}
              {!isClientLoggedIn && ( // Muestra esta sección SOLO si el cliente NO está logeado
                  <div className={styles.authContainer}>
                      <p className={styles.authPrompt}>¿Ya tienes cuenta? Inicia sesión o crea una:</p>

                      {authMessage && <div className={styles.authMessage}>{authMessage}</div>} {/* Muestra mensajes de autenticación */}

                      <div className={styles.authForm}>
                          {/* Campo Email para Login/Signup */}
                          <div className={styles.formField}>
                              <label className={styles.formLabel} htmlFor="authEmail">Email</label>
                              <input
                                  type="email"
                                  id="authEmail"
                                  name="authEmail"
                                  className={styles.formInput}
                                  value={authFormData.authEmail}
                                  onChange={handleAuthInputChange}
                                  placeholder="tu.email@ejemplo.com"
                                  required // Requerido para la simulación de login/signup
                              />
                          </div>
                          {/* Campo Contraseña para Login/Signup */}
                          <div className={styles.formField}>
                              <label className={styles.formLabel} htmlFor="authPassword">Contraseña</label>
                              <input
                                  type="password"
                                  id="authPassword"
                                  name="authPassword"
                                  className={styles.formInput}
                                  value={authFormData.authPassword}
                                  onChange={handleAuthInputChange}
                                  placeholder="Ingresa tu contraseña"
                                  required // Requerido para la simulación de login/signup
                              />
                          </div>
                          {/* Botones de Login y Signup */}
                          <div className={styles.authButtons}>
                              <button
                                  type="button" // Usa type="button" para evitar que envíe el formulario principal
                                  className={styles.authButton}
                                  onClick={handleLogin} // Llama a la función de login simulada
                                  disabled={!authFormData.authEmail || !authFormData.authPassword} // Deshabilitado si campos vacíos
                              >
                                  Iniciar Sesión
                              </button>
                              <button
                                  type="button" // Usa type="button"
                                  className={`${styles.authButton} ${styles.signupButton}`} // Estilo diferente para signup
                                  onClick={handleSignup} // Llama a la función de signup simulada
                                  disabled={!authFormData.authEmail || !authFormData.authPassword} // Deshabilitado si campos vacíos
                              >
                                  Crear Cuenta
                              </button>
                          </div>
                      </div> {/* Fin authForm */}

                      {/* Opción para continuar sin iniciar sesión */}
                      <p className={styles.continueWithoutLogin}>
                          O <button type="button" className={styles.linkButton} onClick={() => setAuthMessage(null)}>Continúa sin iniciar sesión</button>
                      </p>

                  </div> 
               )}

              {/* --- Sección de Formulario de Datos Personales (Visible si NO logeado O si eligió continuar sin login) --- */}
              {/* Muestra el formulario SOLO si el cliente NO está logeado Y NO hay mensaje de autenticación (es decir, eligió continuar sin login) */}
              {!isClientLoggedIn && authMessage === null && (
                  <div className={styles.formDataContainer}>
                      {/* Campo Nombre */}
                      <div className={styles.formField}>
                          <label className={styles.formLabel} htmlFor="name">Nombre</label>
                          <input
                              type="text"
                              id="name"
                              name="name" // Nombre del campo para setFormData
                              className={styles.formInput}
                              value={formData.name} // Vincula al estado
                              onChange={handleInputChange} // Maneja cambios
                              placeholder="Tu nombre completo"
                              required={!isClientLoggedIn} // Requerido SOLO si NO está logeado
                          />
                      </div>
                       {/* Campo Email */}
                      <div className={styles.formField}>
                          <label className={styles.formLabel} htmlFor="email">Email</label>
                          <input
                              type="email" // Usa tipo email para validación básica
                              id="email"
                              name="email" // Nombre del campo para setFormData
                              className={styles.formInput}
                              value={formData.email} // Vincula al estado
                              onChange={handleInputChange} // Maneja cambios
                              placeholder="tu.email@ejemplo.com"
                               required={!isClientLoggedIn && !formData.phone} // Requerido si NO logeado Y teléfono vacío
                          />
                      </div>
                      {/* Campo Teléfono */}
                      <div className={styles.formField}>
                          <label className={styles.formLabel} htmlFor="phone">Teléfono</label>
                           {/* Podrías usar un componente específico para teléfono con código de país si necesitas */}
                          <input
                              type="tel" // Usa tipo tel para teclados numéricos en mobile
                              id="phone"
                              name="phone" // Nombre del campo para setFormData
                              className={styles.formInput}
                              value={formData.phone} // Vincula al estado
                              onChange={handleInputChange} // Maneja cambios
                              placeholder="Ingresa tu número" // Ajusta placeholder según formato esperado
                               required={!isClientLoggedIn && !formData.email} // Requerido si NO logeado Y email vacío
                          />
                          {/* Opcional: Un pequeño texto de ayuda */}
                           {/* <p className={styles.formHelpText}>Ingresa el número sin el código de país (Ejemplo: 9112345678)</p> */}
                      </div>
                       {/* Campo Notas */}
                       <div className={`${styles.formField} ${styles.formFieldNotes}`}> {/* Clase para área de texto */}
                          <label className={styles.formLabel} htmlFor="notes">Notas (opcional)</label>
                          <textarea
                              id="notes"
                              name="notes" // Nombre del campo para setFormData
                              className={styles.formTextArea} // Clase para área de texto
                              value={formData.notes} // Vincula al estado
                              onChange={handleInputChange} // Maneja cambios
                              placeholder="Alguna nota adicional..."
                              rows={4} // Número de filas visible por defecto
                          ></textarea>
                       </div>

                  </div>
              )} {/* Fin renderizado condicional del formulario de datos */}

              {/* --- Mensaje de Usuario Logeado (Visible si SÍ está logeado) --- */}
              {isClientLoggedIn && (
                  <div className={styles.loggedInMessage}>
                      <p>¡Estás logeado! Puedes continuar para confirmar tu reserva.</p>
                      {/* Opcional: Mostrar nombre de usuario si lo tuvieras */}
                      {/* <p>¡Hola, [Nombre de Usuario]! Puedes continuar para confirmar tu reserva.</p> */}
                  </div>
              )}


              {/* Bloque de Resumen de la Reserva */}
              <div className={styles.bookingSummary}>
                  <h3 className={styles.summaryTitle}>Resumen de su reserva</h3>
                  <p className={styles.summaryDetail}>
                      <strong>Servicio:</strong> {getSelectedServiceName(selectedServiceId)}
                  </p>
                  {selectedDate && ( // Muestra fecha solo si está seleccionada
                     <p className={styles.summaryDetail}>
                         <strong>Fecha:</strong> {selectedDate.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} {/* Formato localizado */}
                     </p>
                  )}
                  {selectedTime && ( // Muestra hora solo si está seleccionada
                      <p className={styles.summaryDetail}>
                          <strong>Hora:</strong> {selectedTime}
                      </p>
                  )}
                  {/* Puedes añadir aquí el precio total si tienes esa lógica */}
                   {/* {selectedServiceId !== null && (
                       <p className={styles.summaryDetail}>
                           <strong>Precio:</strong> {servicesData.find(s => s.id === selectedServiceId)?.price}
                       </p>
                   )} */}
              </div> {/* Fin bookingSummary */}


              {/* ===================== Botones de Navegación Finales ===================== */}
              {/* Estos botones aparecen solo si se muestra el Paso 3 */}
              <div className={styles.bookingActions}>
                {/* Botón Volver: Llama a la función handleGoBack */}
                {/* Este botón siempre vuelve al Paso 2 (limpiando fecha/hora) */}
                <button className={styles.backButton} onClick={handleGoBack}>Volver</button>
                {/* Botón Confirmar Reserva: Habilitado según la lógica de autenticación/formulario */}
                <button
                  className={`${styles.nextButton} ${styles.confirmButton}`} // Usamos estilo de botón principal (rosa) + posible estilo específico
                  onClick={handleConfirmBooking} // Llama a la función que envía la reserva al backend
                  // Habilitado si isConfirmButtonEnabled es true
                  disabled={!isConfirmButtonEnabled}
                >
                   Confirmar Reserva {/* Texto del botón final */}
                </button>
              </div> {/* Fin bookingActions */}


          </div>
      )} {/* Fin del renderizado condicional del Bloque del Paso 3 */}


      {/* Puedes añadir aquí un footer específico para la página de reserva si quieres */}

    </div> // Fin bookingPageContainer
  );
};

export default BookingPage; // Exporta el componente
