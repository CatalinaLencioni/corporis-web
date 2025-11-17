import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/logotipo.png" alt="Corporis Salud" className="nav-logo-img" />
          </Link>
        </div>
        
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Inicio
          </Link>
          <Link 
            to="/servicios" 
            className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
          >
            Servicios
          </Link>
          <Link 
            to="/nosotros" 
            className={`nav-link ${location.pathname === '/nosotros' ? 'active' : ''}`}
          >
            Nosotros
          </Link>
          <Link 
            to="/obras-sociales" 
            className={`nav-link ${location.pathname === '/obras-sociales' ? 'active' : ''}`}
          >
            Obras Sociales
          </Link>
          <Link 
            to="/trabaja-con-nosotros" 
            className={`nav-link ${location.pathname === '/trabaja-con-nosotros' ? 'active' : ''}`}
          >
            Trabajá con nosotros
          </Link>
          <Link 
            to="/contacto" 
            className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar