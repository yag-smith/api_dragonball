import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    // 1. min-vh-100: Fuerza a que la app mida AL MENOS el 100% de la altura de la pantalla
    // 2. d-flex flex-column: Organiza los elementos en columna (uno debajo de otro)
    <div className="d-flex flex-column min-vh-100">
      
      <Header />
      
      {/* 3. container: Centra el contenido horizontalmente y le da márgenes a los lados.
         4. flex-grow-1: Hace que este div CREZCA para ocupar todo el espacio sobrante,
            empujando el footer hacia abajo.
      */}
      <main className="container flex-grow-1 py-4">
        {/* Aquí se renderizan tus páginas (Home, Contact, Entities) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;