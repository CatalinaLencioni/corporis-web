const About = () => {
  const timeline = [
    {
      year: "2009",
      title: "Inicio en Córdoba",
      description: "Nacimos con un equipo cercano y especializado en internación domiciliaria.",
    },
    {
      year: "2015",
      title: "Equipo interdisciplinario",
      description: "Sumamos enfermería, kinesiología, psicología, cuidadores y coordinación médica.",
    },
    {
      year: "2019",
      title: "Más familias acompañadas",
      description: "Consolidamos una red de profesionales para responder con continuidad y criterio clínico.",
    },
    {
      year: "Hoy",
      title: "Atención integral",
      description: "Trabajamos con planes personalizados, obras sociales y seguimiento permanente.",
    },
  ]

  const values = [
    {
      title: "Cuidado humano",
      description: "Escuchamos a cada familia para diseñar un plan respetuoso, claro y posible.",
    },
    {
      title: "Coordinación profesional",
      description: "Integramos especialistas, prestadores y coberturas para simplificar el proceso.",
    },
    {
      title: "Acompañamiento real",
      description: "Estamos presentes antes, durante y después de cada etapa del tratamiento.",
    },
  ]

  const stats = [
    { value: "16+", label: "Años de trayectoria" },
    { value: "120+", label: "Profesionales activos" },
    { value: "300+", label: "Pacientes mensuales" },
    { value: "24/7", label: "Acompañamiento" },
  ]

  return (
    <div className="about-page">
      <section className="about-hero page-hero">
        <div className="container">
          <span className="about-pill page-pill">Conocenos</span>
          <h1>Cuidado domiciliario con calidez clínica y gestión clara</h1>
          <p>
            En Corporis Salud combinamos experiencia médica, coordinación administrativa y cercanía humana para
            acompañar a pacientes y familias en el hogar.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story-content elevated-panel">
            <div>
              <p className="eyebrow">Nuestra esencia</p>
              <h2>Salud en casa, con una red que responde</h2>
              <p>
                Brindamos soluciones integrales de salud domiciliaria priorizando la dignidad del paciente, la
                comunicación con la familia y la coordinación eficiente de cada profesional involucrado.
              </p>
              <h3>Visión</h3>
              <p>
                Ser una red de cuidado interdisciplinario confiable, donde cada decisión clínica esté acompañada por
                una gestión simple, humana y transparente.
              </p>
            </div>
            <div className="about-highlights">
              {stats.map((stat) => (
                <div key={stat.label} className="about-highlight">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Nuestros pilares</p>
            <h2>Lo que guía cada intervención</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article key={value.title} className="about-value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-timeline">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Trayectoria</p>
            <h2>Evolucionamos junto a nuestros pacientes</h2>
          </div>
          <div className="timeline-grid refined-timeline">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
