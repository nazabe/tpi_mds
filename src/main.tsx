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
      element: <Layout />, // Componente principal con <Outlet />
      children: [
        {
          index: true, // Equivale a path: ""
          element: <App />, // Landing page
        },
        {
          path: "reservar",
          element: <BookingPage />, // Página de reservas
        },
        {
          path: "login",
          element: <LoginPage />, // Página de login
        },
      ],
    },
  ],
  {
    basename: "/mds",
  }
);

// --- Fin Configuración del Router ---


// --- Renderizado de la Aplicación ---
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* RouterProvider hace que el router esté disponible */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// --- Fin Renderizado ---