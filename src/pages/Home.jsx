const Home = () => {
  const highlights = [
    { icon: '🏠', title: 'Internación Domiciliaria', description: 'Atención médica integral en el hogar del paciente.' },
    { icon: '👩‍⚕️', title: 'Equipo Profesional', description: 'Médicos, enfermeros, kinesiólogos, psicólogos y más.' },
    { icon: '🤝', title: 'Atención Personalizada', description: 'Planes adaptados a cada paciente y su familia.' },
    { icon: '❤️', title: 'Trato Humano', description: 'Cuidamos con respeto, compromiso y empatía.' },
  ]

  const benefits = [
    { number: '16+', label: 'Años de trayectoria' },
    { number: '300+', label: 'Pacientes asistidos mensualmente' },
    { number: '120+', label: 'Profesionales capacitados' },
    { number: '24/7', label: 'Disponibilidad y acompañamiento' },
  ]

  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <div className="home-hero-text">
              <h1>Internación Domiciliaria con Calidez y Profesionalismo</h1>
              <p>
                Somos una empresa líder en servicios de internación domiciliaria, con más de 15 años de trayectoria.
                Brindamos una atención integral y humana, acompañando al paciente y su familia durante el proceso de recuperación,
                en el entorno más valioso: su hogar.
              </p>
              <div className="home-hero-ctas">
                <button className="cta-button primary">Servicios</button>
                <button className="cta-button secondary">Conocer más</button>
              </div>
            </div>
            <div className="home-hero-visual">
              <img src="/logo.png" alt="Corporis Salud" className="home-hero-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS DE SERVICIOS */}
      <section className="home-highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS DESTACADOS */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-header">
            <p className="stats-eyebrow">Números que hablan por nosotros</p>
            <h2>Una trayectoria de confianza y compromiso</h2>
          </div>
          <div className="stats-grid">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="stat-card">
                <span className="stat-number">{benefit.number}</span>
                <p>{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="home-why">
        <div className="container">
          <h2>¿Por qué elegir Corporis Salud?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🌿</div>
              <h3>Visión Humana</h3>
              <p>Creemos que el tratamiento en el hogar favorece una recuperación más rápida y efectiva.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👩‍⚕️</div>
              <h3>Equipo Multidisciplinario</h3>
              <p>Médicos, enfermería, kinesiología, psicología, nutrición y más profesionales certificados.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Objetivos Claros</h3>
              <p>Proporcionar atención de calidad, mejorar la vida de los pacientes y reducir riesgos hospitalarios.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Planes Personalizados</h3>
              <p>Diseñamos presupuestos adaptados a cada paciente, según sus necesidades y cobertura.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Valores Institucionales</h3>
              <p>Responsabilidad, confidencialidad, integridad, compromiso, respeto y solidaridad.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💙</div>
              <h3>Compromiso Constante</h3>
              <p>Buscamos la excelencia y la confianza en cada servicio que brindamos día a día.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="home-final-cta">
        <div className="container">
          <h2>¿Necesitás asistencia domiciliaria?</h2>
          <p>
            Nuestro equipo está disponible para acompañarte en cada paso. 
            Contactanos y te brindaremos la mejor opción según tus necesidades.
          </p>
          <button className="cta-button primary large">Contactar ahora</button>
        </div>
      </section>
    </>
  )
}

export default Home
