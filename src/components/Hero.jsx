// components/Hero.jsx
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Corporis Salud</span>
          </div>
          <h1>Tu salud en las <span className="highlight">mejores manos</span></h1>
          <p className="hero-description">
            Más de 15 años brindando atención médica de excelencia 
            con profesionales calificados y tecnología de vanguardia.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Conoce nuestros servicios</button>
            <button className="cta-button secondary">Solicitar turno</button>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Profesionales certificados</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Tecnología de última generación</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Amplia cobertura de obras sociales</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="medical-icon">🏥</div>
            <p>Imagen de instalaciones médicas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero