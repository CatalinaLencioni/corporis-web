import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logotipo.png" alt="Corporis Salud" className="nav-logo-img" />
          </Link>
        </div>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/servicios" 
            className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Servicios
          </Link>
          <Link 
            to="/nosotros" 
            className={`nav-link ${location.pathname === '/nosotros' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Nosotros
          </Link>
          <Link 
            to="/obras-sociales" 
            className={`nav-link ${location.pathname === '/obras-sociales' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Obras Sociales
          </Link>
          <Link 
            to="/trabaja-con-nosotros" 
            className={`nav-link ${location.pathname === '/trabaja-con-nosotros' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Trabaja con nosotros
          </Link>
          <Link 
            to="/contacto" 
            className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
      <div
        className={`nav-backdrop ${isMenuOpen ? 'show' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </nav>
  )
}

export default Navbar
