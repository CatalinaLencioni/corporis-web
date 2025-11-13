const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="logo-header">
              <img src="/logo.png" alt="Corporis Salud" className="home-logo" />
           
            </div>
            <button className="cta-button">Conoce nuestros servicios</button>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Nuestras Áreas de Especialización</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Servicios Médicos</h3>
              <p>Atención integral con profesionales calificados</p>
            </div>
            <div className="feature-card">
              <h3>Obras Sociales</h3>
              <p>Amplia cobertura con las principales prepagas</p>
            </div>
            <div className="feature-card">
              <h3>Equipo Profesional</h3>
              <p>Especialistas en diversas áreas de la salud</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home