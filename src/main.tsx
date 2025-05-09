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

// --- Configuración del Router con Layout ---
// Definimos un enrutador usando createBrowserRouter
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
    ],
  },
  // Opcionalmente, puedes definir rutas FUERA de este Layout si necesitas páginas
  // que NO muestren el Header o Footer global (ej: un dashboard de administración)
]);
// --- Fin Configuración del Router ---

// --- Configuración del Basename ---
// Añadimos la opción 'basename' a createBrowserRouter
// Reemplaza "/mds/" con la ruta base real si es diferente
const routerWithBasename = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "reservar", element: <BookingPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
], {
  basename: "/mds/", // <-- AÑADE esta línea para especificar la ruta base
});
// --- Fin Configuración del Basename ---


// --- Renderizado de la Aplicación ---
// createRoot es la nueva forma de renderizar en React 18+
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* StrictMode ayuda a detectar problemas potenciales */}
     {/* RouterProvider provee el enrutador a toda la aplicación */}
    {/* Usa el router con basename configurado */}
    <RouterProvider router={routerWithBasename} />
  </React.StrictMode>,
);
// --- Fin Renderizado ---
