// import React from 'react';
import styles from './App.module.css'; // Import CSS Modules
import {
  FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaGoogle,
  FaSearch, FaBars, FaChevronDown, FaArrowRight // Make sure these are all here
} from 'react-icons/fa';


function App() {
  return (
    <div className={styles.App}>
      {/* Top Bar */}
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

      {/* Header / Navbar */}
      <header className={styles.header}>
        {/* Logo */}
        <img src="/logo.png" alt="Turno Belleza Logo" className={styles.logo} /> {/* Adjust path if needed */}

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.navLink}>INICIO</a>
          <a href="#quienes-somos" className={styles.navLink}>QUIENES SOMOS</a>
          <a href="#profesionales" className={styles.navLink}>
            PROFESIONALES <FaChevronDown size={12} />
          </a>
          <a href="#faq" className={styles.navLink}>PREGUNTAS FRECUENTES</a>
        </nav>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <button className={styles.actionButton} aria-label="Buscar">
            <FaSearch />
          </button>
          <button className={styles.actionButton} aria-label="Menu">
            <FaBars />
          </button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Footer (Optional - Add if needed) */}
      {/* <footer className={styles.footer}>
        <p>© 2023 Turno Belleza. Todos los derechos reservados.</p>
      </footer> */}
    </div>
  );
}

export default App;