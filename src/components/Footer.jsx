import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>Corporis Salud</h3>
            <p className="footer-tagline">LENAVA S.A. · Internación domiciliaria</p>
            <p className="footer-description">
              Más de 16 años brindando atención médica integral en el hogar con profesionalismo, coordinación y calidez humana.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/corporis_lenava?igsh=MWl3cmRtYW9mOHY5aw==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://corporissalud.com.ar" target="_blank" rel="noopener noreferrer">
                Sitio Web
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-list">
              <p>+54 9 3516410124</p>
              <p>+54 9 3516137269</p>
              <p>+54 9 3515732409</p>
              <p>corporiscentral@gmail.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Sedes</h4>
            <div className="footer-list">
              <p>José Roque Funes 1761, PB-B<br />Cerro de las Rosas, Córdoba</p>
              <p>Piedras 383, piso 6<br />CABA, Buenos Aires</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces</h4>
            <nav className="footer-links">
              <Link to="/servicios">Servicios</Link>
              <Link to="/obras-sociales">Obras Sociales</Link>
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Corporis Salud - LENAVA S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
