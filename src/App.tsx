// Importaciones necesarias de React y react-icons
import React, { useRef } from 'react'; // Importa useRef
import styles from './App.module.css'; // Importa estilos CSS Modules
import {
  FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaGoogle,
  FaSearch, FaBars, FaChevronDown, FaArrowRight,
  FaPhone, FaChevronLeft, FaChevronRight // Importa los iconos de flecha y teléfono
  // Si usas FaWhatsapp, asegúrate de importarlo aquí también
  // FaWhatsapp
} from 'react-icons/fa';
// Si necesitas otros iconos (ej: de Material Design), instala react-icons/md y descomenta:
// import { MdLocationOn, MdPhone } from 'react-icons/md';


function App() {
  // ===================== Lógica de Scroll Horizontal para Servicios =====================
  // Ref para acceder al elemento DOM del contenedor de scroll de servicios
  const servicesScrollRef = useRef<HTMLDivElement>(null); // Especificamos que la referencia es para un div

  // Función para hacer scroll a la izquierda
  const scrollLeft = () => {
    if (servicesScrollRef.current) {
      servicesScrollRef.current.scrollBy({
        left: -300, // Ajusta la cantidad de scroll (en píxeles)
        behavior: 'smooth', // Animación suave
      });
    }
  };

  // Función para hacer scroll a la derecha
  const scrollRight = () => {
    if (servicesScrollRef.current) {
      servicesScrollRef.current.scrollBy({
        left: 300, // Ajusta la cantidad de scroll (en píxeles)
        behavior: 'smooth', // Animación suave
      });
    }
  };
  // ===================== Fin Lógica de Scroll =====================


  // ===================== Renderizado del Componente App =====================
  return (
    <div className={styles.App}>
      {/* ===================== Top Bar ===================== */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.topBarItem}>
            <FaMapMarkerAlt />
            <span>Argentina</span>
          </div>
          <div className={styles.topBarItem}>
            <FaEnvelope />
            <span>hola@turnosbelleza.com.ar</span>
          </div>
        </div>
        <div className={styles.topBarRight}>
          <span>SEGUINOS:</span>
          <div className={styles.topBarSocialIcons}>
            <FaFacebookF />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
      </div>

      {/* ===================== Header / Navbar ===================== */}
      <header className={styles.header}>
        {/* Logo: Usando ruta pública si el archivo está en la carpeta /public */}
        <img src="/logo.png" alt="Turno Belleza Logo" className={styles.logo} />
        {/* Si el logo está en src/, impórtalo y úsalo:
        import logoImage from './logo.png';
        ... <img src={logoImage} alt="Turno Belleza Logo" className={styles.logo} />
        */}

        {/* Navigation */}
        <nav className={styles.nav}>
          {/* Los href="#" son placeholders, idealmente irían a IDs de secciones (#quienes-somos, etc.) */}
          <a href="#inicio" className={styles.navLink}>INICIO</a>
          <a href="#quienes-somos" className={styles.navLink}>QUIENES SOMOS</a>
          <a href="#profesionales" className={styles.navLink}>
            PROFESIONALES <FaChevronDown size={12} />
          </a>
          <a href="#faq" className={styles.navLink}>PREGUNTAS FRECUENTES</a>
        </nav>

        {/* Action Buttons (para funcionalidades como búsqueda o menú móvil) */}
        <div className={styles.navActions}>
          <button className={styles.actionButton} aria-label="Buscar">
            <FaSearch />
          </button>
          <button className={styles.actionButton} aria-label="Menu">
            <FaBars />
          </button>
        </div>
      </header>

      {/* ===================== Hero Section ===================== */}
      {/* Sección principal con la imagen de fondo y el mensaje destacado */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubheading}>Ahora es el Turno de la Belleza</p>
          <h1 className={styles.heroHeading}>
            Reserva turnos con los mejores profesionales de la Belleza
          </h1>
          <p className={styles.heroDescription}>
            Descubre la belleza con nosotros. ¡Reserva tu turno hoy mismo!
          </p>
          <button className={styles.heroCtaButton}>
            Reservá tu turno <FaArrowRight />
          </button>
        </div>
      </main>

      {/* ===================== Sección: Sobre Nosotros ===================== */}
      {/* Contiene el texto, contacto, ubicación y mapa en columnas */}
      <section id="quienes-somos" className={styles.aboutUsSection}> {/* Añadimos ID para navegación */}
        <div className={styles.sectionContent}> {/* Contenedor general centrado */}

          <h2 className={styles.sectionHeading}>Sobre Nosotros</h2>

          {/* Contenedor para las dos columnas */}
          <div className={styles.aboutUsContentColumns}>

            {/* Columna Izquierda: Texto principal e información */}
            <div className={styles.aboutUsLeftColumn}>
              <p className={styles.sectionText}>
                Bienvenidos a Sentirse Bien, un espacio creado para reconectar con vos mismo,
                donde el bienestar del cuerpo y la mente es nuestra prioridad.
              </p>

              <p className={styles.sectionText}>
                Ubicados dentro del centro de salud integral <a href="URL_DE_ZENTITE" target="_blank" rel="noopener noreferrer">@zentitebienfisioterapia</a>, nuestro nuevo SPA combina técnicas tradicionales con terapias modernas para ofrecerte una experiencia de relajación completa. Desde un masaje energético para liberar tensiones acumuladas hasta una limpieza facial profunda que revitaliza tu piel, cada servicio fue pensado para vos.
              </p>

              <p className={styles.sectionText}>
                Nos especializamos en crear un ambiente íntimo, cálido y personalizado. Creemos que cada cuerpo habla, y estamos acá para escucharlo.
              </p>

              {/* Lista de preguntas con viñetas */}
              {/* Puedes quitar este párrafo si la lista va justo después del texto */}
               {/* <p className={styles.sectionText} style={{ marginBottom: '10px' }}>
                ¿Querés...?
              </p> */}
              <ul className={styles.questionsList}>
                <li>¿Desconectar del estrés cotidiano?</li>
                <li>¿Buscar un momento solo para vos?</li>
                <li>¿Regalarle a alguien querido una experiencia única?</li>
              </ul>

              <p className={styles.sectionText}>
                ¡En Sentirse Bien lo vas a encontrar!
              </p>

            </div> {/* Fin Columna Izquierda */}

            {/* Columna Derecha: Contacto, Ubicación y Mapa */}
            <div className={styles.aboutUsRightColumn}>

              {/* Información de Contacto y Ubicación RESALTADA */}
              <div className={styles.contactInfoBlock}>
                {/* Bloque de Contacto */}
                <div className={styles.contactItem}>
                  {/* Contenedor para el ícono del teléfono/WhatsApp */}
                  <div className={styles.contactIconContainer}>
                     <FaPhone className={styles.contactIcon} /> {/* O FaWhatsapp */}
                  </div>
                  <p className={styles.contactText}>
                    Consultas y turnos al <a href="tel:+5491123152163">112 315 2163</a>
                    {' '} (<a href="https://wa.me/5491123152163" target="_blank" rel="noopener noreferrer">Enviar WhatsApp</a>)
                  </p>
                </div>

                {/* Bloque de Ubicación */}
                <div className={styles.contactItem}>
                  {/* Contenedor para el ícono de ubicación */}
                   <div className={styles.contactIconContainer}>
                    <FaMapMarkerAlt className={styles.contactIcon} />
                   </div>
                  <p className={styles.contactText}>
                    Ubicados en Av. Rep Argentina y Humberto Primo, Resistencia - Chaco {/* <-- Dirección Corregida */}
                    {' '} (<a href="https://www.google.com/maps/search/?api=1&query=Santa+Fe+718,+Resistencia,+Chaco" target="_blank" rel="noopener noreferrer">Ver en Mapa</a>) {/* Verifica URL */}
                  </p>
                </div>
              </div> {/* Fin ContactInfoBlock */}

              {/* Recuadro del Mapa - Usando iFrame */}
              <div className={styles.mapContainer}>
                {/* Pega aquí el código <iframe> que copiaste de Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8613488754554!2d-58.36822492425079!3d-34.809429972881176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32ca981f47a07%3A0x164bdc6890dda77c!2sAvenida%20Rep%C3%BAblica%20Argentina%20Y%20Humberto%20Primo!5e0!3m2!1ses-419!2sar!4v1745555820613!5m2!1ses-419!2sar" // <-- REEMPLAZA esta URL con la de tu iframe
                  width="100%"
                  height="100%" // Aseguramos que el iframe llene su contenedor
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div> {/* Fin MapContainer */}

              {/* Botón "Abrir en Maps" */}
              {/* Usamos un enlace <a> y le daremos estilo de botón en CSS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Santa+Fe+718,+Resistencia,+Chaco" // Enlace para abrir en Google Maps (Verifica URL)
                target="_blank" // Abre en una nueva pestaña
                rel="noopener noreferrer"
                className={styles.openInMapsButton}
              >
                Abrir en Maps <FaArrowRight />
              </a>

            </div> {/* Fin Columna Derecha */}

          </div> {/* Fin aboutUsContentColumns */}

          {/* Último párrafo que abarca todo el ancho */}
          <p className={styles.sectionText} style={{ textAlign: 'center', marginTop: '30px' }}>
            Estamos ansiosos por verte, conocerte y ayudarte a sentirte mejor. Porque no se trata solo de verse bien... se trata de sentirse bien.
          </p>

        </div> {/* Fin sectionContent */}
      </section>

      {/* ===================== Sección: Nuestros Servicios ===================== */}
      {/* Contiene el scroll horizontal de tarjetas de servicios */}
      <section id="profesionales" className={styles.servicesSection}> {/* Añadimos ID */}
         <div className={styles.sectionContent}> {/* Contenedor centrado */}

          <h2 className={styles.sectionHeading}>Nuestros Servicios</h2>

          {/* Contenedor para el scroll horizontal y las flechas */}
          {/* Este div wrapper tiene position: relative para posicionar las flechas absolutas */}
          <div className={styles.scrollWrapper}>

            {/* Flecha Izquierda (Visible en desktop/tablet, oculta en mobile con CSS) */}
            <button className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`} onClick={scrollLeft} aria-label="Scroll Left">
              <FaChevronLeft />
            </button>

            {/* Contenedor que habilita el scroll horizontal de las tarjetas */}
            {/* Le asignamos la referencia para poder controlarlo con los botones */}
            <div className={styles.servicesScrollContainer} ref={servicesScrollRef}>

              {/* =============================================== */}
              {/* === Tarjetas Individuales para CADA Servicio === */}
              {/* =============================================== */}

              {/* --- Masajes --- */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceImagePlaceholder}> {/* Espacio para la imagen */}</div>
                <div className={styles.serviceTitleContainer}> {/* Contenedor para el título con fondo de color */}
                  <h3 className={styles.serviceTitle}>Masaje Anti-stress</h3>
                </div>
              </div>
              <div className={styles.serviceCard}>
                 <div className={styles.serviceImagePlaceholder}></div>
                 <div className={styles.serviceTitleContainer}>
                  <h3 className={styles.serviceTitle}>Masaje Descontracturante</h3>
                 </div>
               </div>
               <div className={styles.serviceCard}>
                  <div className={styles.serviceImagePlaceholder}></div>
                  <div className={styles.serviceTitleContainer}>
                   <h3 className={styles.serviceTitle}>Masaje con Piedras Calientes</h3>
                  </div>
                </div>
                <div className={styles.serviceCard}>
                   <div className={styles.serviceImagePlaceholder}></div>
                   <div className={styles.serviceTitleContainer}>
                    <h3 className={styles.serviceTitle}>Masaje Circulatorio</h3>
                   </div>
                 </div>

              {/* --- Belleza --- */}
               <div className={styles.serviceCard}>
                  <div className={styles.serviceImagePlaceholder}></div>
                  <div className={styles.serviceTitleContainer}>
                   <h3 className={styles.serviceTitle}>Lifting de Pestaña</h3>
                  </div>
                </div>
                <div className={styles.serviceCard}>
                   <div className={styles.serviceImagePlaceholder}></div>
                   <div className={styles.serviceTitleContainer}>
                    <h3 className={styles.serviceTitle}>Depilación Facial</h3>
                   </div>
                 </div>
                 <div className={styles.serviceCard}>
                    <div className={styles.serviceImagePlaceholder}></div>
                    <div className={styles.serviceTitleContainer}>
                     <h3 className={styles.serviceTitle}>Belleza de Manos y Pies</h3>
                    </div>
                  </div>

              {/* --- Tratamientos Faciales --- */}
               <div className={styles.serviceCard}>
                   <div className={styles.serviceImagePlaceholder}></div>
                   <div className={styles.serviceTitleContainer}>
                    <h3 className={styles.serviceTitle}>Punta de Diamante Microexfoliación</h3> {/* Nombre completo */}
                   </div>
                 </div>
                 <div className={styles.serviceCard}>
                    <div className={styles.serviceImagePlaceholder}></div>
                    <div className={styles.serviceTitleContainer}>
                     <h3 className={styles.serviceTitle}>Limpieza Profunda + Hidratación</h3>
                    </div>
                  </div>
                  <div className={styles.serviceCard}>
                     <div className={styles.serviceImagePlaceholder}></div>
                     <div className={styles.serviceTitleContainer}>
                      <h3 className={styles.serviceTitle}>Crio Frecuencia Facial</h3>
                     </div>
                   </div>

              {/* --- Tratamientos Corporales --- */}
                <div className={styles.serviceCard}>
                    <div className={styles.serviceImagePlaceholder}></div>
                    <div className={styles.serviceTitleContainer}>
                     <h3 className={styles.serviceTitle}>VelaSlim</h3>
                    </div>
                  </div>
                  <div className={styles.serviceCard}>
                      <div className={styles.serviceImagePlaceholder}></div>
                      <div className={styles.serviceTitleContainer}>
                       <h3 className={styles.serviceTitle}>DermoHealth</h3>
                      </div>
                    </div>
                   <div className={styles.serviceCard}>
                       <div className={styles.serviceImagePlaceholder}></div>
                       <div className={styles.serviceTitleContainer}>
                        <h3 className={styles.serviceTitle}>Criofrecuencia Corporal</h3> {/* Especificar Corporal */}
                       </div>
                     </div>
                     <div className={styles.serviceCard}>
                         <div className={styles.serviceImagePlaceholder}></div>
                         <div className={styles.serviceTitleContainer}>
                          <h3 className={styles.serviceTitle}>Ultracavitación</h3>
                         </div>
                       </div>

              {/* --- Servicios Grupales --- */}
               <div className={styles.serviceCard}>
                  <div className={styles.serviceImagePlaceholder}></div>
                  <div className={styles.serviceTitleContainer}>
                   <h3 className={styles.serviceTitle}>Hidromasajes</h3>
                 </div>
               </div>

                <div className={styles.serviceCard}>
                   <div className={styles.serviceImagePlaceholder}></div>
                   <div className={styles.serviceTitleContainer}>
                    <h3 className={styles.serviceTitle}>Yoga</h3>
                   </div>
                 </div>


            </div> {/* Fin servicesScrollContainer */}

            {/* Flecha Derecha (Visible en desktop/tablet, oculta en mobile con CSS) */}
            <button className={`${styles.scrollArrow} ${styles.scrollArrowRight}`} onClick={scrollRight} aria-label="Scroll Right">
              <FaChevronRight />
            </button>

          </div> {/* Fin scrollWrapper */}


         </div> {/* Fin sectionContent */}
      </section>

      {/* ===================== Footer (Opcional) ===================== */}
      {/* Puedes añadir un pie de página aquí si es necesario */}
      {/* <footer className={styles.footer}>
        <p>© 2023 Turno Belleza. Todos los derechos reservados.</p>
      </footer> */}
    </div> // Fin styles.App
  );
}

export default App;