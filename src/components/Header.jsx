import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Dragon Ball App</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/entities">Personajes</Link>
          <Link className="nav-link" to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;