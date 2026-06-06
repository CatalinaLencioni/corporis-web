import { Link } from 'react-router-dom'

const Icon = ({ name }) => {
  const icons = {
    home: (
      <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6" />
    ),
    medical: (
      <path d="M12 6v12M6 12h12M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    ),
    care: (
      <path d="M7 11.5V8a3 3 0 0 1 6 0v3.5M13 9h1a4 4 0 0 1 4 4v1.5a6.5 6.5 0 0 1-13 0V13a4 4 0 0 1 4-4h1M9 18h6" />
    ),
    heart: (
      <path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 1.9Z" />
    ),
    leaf: (
      <path d="M5 19c9 0 14-5 14-14C10 5 5 10 5 19ZM5 19c0-4 3-7 7-9" />
    ),
    team: (
      <path d="M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a3 3 0 0 0-3-3M17 4a3 3 0 0 1 0 6" />
    ),
    target: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
    plan: (
      <path d="M8 4h8M9 2h6v4H9zM7 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12h8M8 16h5" />
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4" />
    ),
    clock: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2" />
    ),
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const Home = () => {
  const highlights = [
    { icon: 'home', title: 'Internación Domiciliaria', description: 'Atención médica integral en el hogar del paciente.' },
    { icon: 'medical', title: 'Equipo Profesional', description: 'Médicos, enfermeros, kinesiólogos, psicólogos y más.' },
    { icon: 'care', title: 'Atención Personalizada', description: 'Planes adaptados a cada paciente y su familia.' },
    { icon: 'heart', title: 'Trato Humano', description: 'Cuidamos con respeto, compromiso y empatía.' },
  ]

  const benefits = [
    { number: '16+', label: 'Años de trayectoria' },
    { number: '500+', label: 'Pacientes asistidos mensualmente' },
    { number: '250+', label: 'Profesionales capacitados' },
    { number: '24/7', label: 'Disponibilidad y acompañamiento' },
  ]

  const processSteps = [
    { step: '01', title: 'Nos contactás', description: 'Recibimos la consulta y escuchamos la situación del paciente.' },
    { step: '02', title: 'Evaluamos la necesidad', description: 'Relevamos cobertura, diagnóstico y nivel de asistencia requerido.' },
    { step: '03', title: 'Armamos el plan', description: 'Definimos profesionales, frecuencia de visitas y seguimiento.' },
    { step: '04', title: 'Coordinamos la atención', description: 'Acompañamos a la familia durante todo el proceso en domicilio.' },
  ]

  const whyCards = [
    { icon: 'leaf', title: 'Visión Humana', description: 'Creemos que el tratamiento en el hogar favorece una recuperación más rápida y efectiva.' },
    { icon: 'team', title: 'Equipo Multidisciplinario', description: 'Médicos, enfermería, kinesiología, psicología, nutrición y más profesionales certificados.' },
    { icon: 'target', title: 'Objetivos Claros', description: 'Proporcionar atención de calidad, mejorar la vida de los pacientes y reducir riesgos hospitalarios.' },
    { icon: 'plan', title: 'Planes Personalizados', description: 'Diseñamos presupuestos adaptados a cada paciente, según sus necesidades y cobertura.' },
    { icon: 'shield', title: 'Valores Institucionales', description: 'Responsabilidad, confidencialidad, integridad, compromiso, respeto y solidaridad.' },
    { icon: 'clock', title: 'Compromiso Constante', description: 'Buscamos la excelencia y la confianza en cada servicio que brindamos día a día.' },
  ]

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <div className="home-hero-text">
              <span className="home-hero-badge">Atención domiciliaria integral</span>
              <h1>Internación Domiciliaria con Calidez y Profesionalismo</h1>
              <p>
                Somos una empresa líder en servicios de internación domiciliaria, con más de 16 años de trayectoria.
                Brindamos una atención integral y humana, acompañando al paciente y su familia durante el proceso de recuperación,
                en el entorno más valioso: su hogar.
              </p>
              <div className="home-hero-ctas">
                <Link to="/servicios" className="cta-button primary">Ver servicios</Link>
                <Link to="/contacto" className="cta-button secondary">Solicitar atención</Link>
              </div>
            </div>
            <div className="home-hero-visual">
              <img src="/logo.png" alt="Corporis Salud" className="home-hero-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <div className="highlight-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-process">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Cómo trabajamos</p>
            <h2>Un acompañamiento claro desde la primera consulta</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((item) => (
              <div key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="home-why">
        <div className="container">
          <h2>¿Por qué elegir Corporis Salud?</h2>
          <div className="why-grid">
            {whyCards.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container">
          <h2>¿Necesitás asistencia domiciliaria?</h2>
          <p>
            Nuestro equipo está disponible para acompañarte en cada paso.
            Contactanos y te brindaremos la mejor opción según tus necesidades.
          </p>
          <Link to="/contacto" className="cta-button primary large">Solicitar evaluación</Link>
        </div>
      </section>
    </>
  )
}

export default Home
