import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales
import LoginPage from './components/LoginPage/LoginPage.tsx'; // Importa el componente LoginPage

// Importa tus componentes de página
import App from './App.tsx'; // Tu componente de la landing page
import BookingPage from './components/BookingPage/BookingPage.tsx'; // El componente de la página de reserva
// Importa el nuevo componente Layout
import Layout from './components/Layout/Layout.tsx';

// Importa las herramientas de enrutamiento necesarias
import {
  createBrowserRouter,
  RouterProvider,
  // Puedes importar Outlet aquí si lo prefieres, pero ya lo importamos en Layout
} from "react-router-dom";

// --- Configuración del Router con Layout ---
// Definimos una ruta principal ('/') que usa el Layout
const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout />, // Tu componente Layout
    children: [
      {
        index: true,
        element: <App />, // Tu componente App (landing)
      },
      {
        path: "reservar",
        element: <BookingPage />, // Tu componente BookingPage
      },
      {
        path: "login", // La ruta para /login
        element: <LoginPage />, // <-- Asegúrate de que sea LoginPage aquí
      },
      // ... otras rutas
    ],
    
      
  },
  // ... rutas fuera del layout si las tienes
],
{
        basename: "/mds",
      });
// --- Fin Configuración del Router ---


// --- Renderizado de la Aplicación ---
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* RouterProvider hace que el router esté disponible */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// --- Fin Renderizado ---