const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Corporis Salud</h3>
              <p className="footer-tagline">LENAVA S.A. - Internación Domiciliaria</p>
            </div>
            <p className="footer-description">
              Más de 15 años brindando atención médica integral en el hogar con profesionalismo y calidez humana.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/corporis_lenava?igsh=MWl3cmRtYW9mOHY5aw==" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://corporissalud.com.ar" target="_blank" rel="noopener noreferrer" className="social-link">
                Sitio Web
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contacto Directo</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p>+54 9 3516410124</p>
                  <p>+54 9 3517466826</p>
                  <p>+54 9 3515732409 </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>corporiscentral@gmail.com</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>José Roque Funes 1761, PB-B<br />Cerro de las Rosas, Córdoba</p>
                <span className="contact-icon">📍</span>
                <p>Piedras 383, piso 6<br />Cdad. Autónoma de Buenos Aires</p>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Horarios de Atención</h4>
            <div className="schedule-info">
              <div className="schedule-item">
                <strong>Lunes a Viernes:</strong>
                <p>8:00 - 16:00 hs</p>
              </div>
              <div className="schedule-item">
                <strong>Sábados:</strong>
                <p>9:00 - 13:00 hs</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <nav className="footer-links">
              <a href="/servicios" className="footer-link">Nuestros Servicios</a>
              <a href="/obras-sociales" className="footer-link">Obras Sociales</a>
              <a href="/nosotros" className="footer-link">Sobre Nosotros</a>
              <a href="/contacto" className="footer-link">Contacto</a>
            </nav>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Corporis Salud - LENAVA S.A. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="/privacidad" className="legal-link">Política de Privacidad</a>
              <a href="/terminos" className="legal-link">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-section h3 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }

        .footer-section h4 {
          color: var(--accent);
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .social-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;
        }

        .social-link:hover {
          color: var(--accent);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .contact-icon {
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .contact-item p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.4;
        }

        .schedule-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .schedule-item {
          color: rgba(255, 255, 255, 0.9);
        }

        .schedule-item strong {
          color: white;
          display: block;
          margin-bottom: 0.2rem;
        }

        .schedule-item.emergency {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          border-radius: 8px;
          border-left: 3px solid var(--accent);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1.5rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: var(--accent);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }

          .contact-item {
            flex-direction: row;
          }
        }

        @media (max-width: 480px) {
          .footer-social {
            flex-direction: column;
          }

          .footer-legal {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer