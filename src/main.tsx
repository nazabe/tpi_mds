import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales

// Importa tus componentes de página específicos
import App from './App.tsx'; // Tu componente de la landing page
import BookingPage from './components/BookingPage/BookingPage.tsx'; // El componente de la página de reserva
import LoginPage from './components/LoginPage/LoginPage.tsx'; // Tu componente de la página de login

// Importa el componente Layout
import Layout from './components/Layout/Layout.tsx';

// Importa las herramientas de enrutamiento necesarias
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// --- Configuración del Router con Layout y Basename ---
// Definimos un enrutador usando createBrowserRouter
// Incluimos la configuracion del basename directamente aqui
const router = createBrowserRouter([
  {
    // Esta ruta principal '/' renderiza el Layout
    // Todas las rutas definidas en 'children' se renderizarán dentro del Outlet del Layout
    path: "/",
    element: <Layout />, // El elemento principal es el Layout
    children: [
      {
        // La ruta index renderiza el contenido de la landing page (App)
        index: true, // `index: true` indica que esta es la ruta por defecto para el path padre ('/')
        element: <App />, // El contenido de la ruta principal es el componente App
      },
      {
        // Esta ruta renderiza la página de reserva
        path: "reservar", // El path 'reservar' se combina con el path padre '/' para formar '/reservar'
        element: <BookingPage />, // El contenido de la ruta /reservar es el componente BookingPage
      },
      {
        // Esta ruta renderiza la página de inicio de sesión
        path: "login", // El path 'login' se combina con el path padre '/' para formar '/login'
        element: <LoginPage />, // El contenido de la ruta /login es el componente LoginPage
      },
      // Puedes añadir más rutas anidadas aquí
      // Por ejemplo, para manejar rutas 404 (páginas no encontradas)
      // {
      //   path: "*", // Coincide con cualquier ruta no definida antes
      //   element: <div>404 - Página no encontrada</div>, // O un componente NotFoundPage
      // },
    ],
  },
  // Opcionalmente, puedes definir rutas FUERA de este Layout si necesitas páginas
  // que NO muestren el Header o Footer global
], {
  // Configuración del Basename: Reemplaza "/mds/" con la ruta base real si es diferente
  basename: "/mds/", // <-- Especifica la ruta base de la aplicacion
});
// --- Fin Configuración del Router ---


// --- Renderizado de la Aplicación ---
// createRoot es la nueva forma de renderizar en React 18+
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* StrictMode ayuda a detectar problemas potenciales */}
     {/* RouterProvider provee el enrutador a toda la aplicación */}
    {/* Usa el router con basename configurado */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// --- Fin Renderizado ---
