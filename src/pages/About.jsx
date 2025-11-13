const About = () => {
  const milestones = [
    { year: '2009', title: 'Fundación en Córdoba', detail: 'Abrimos el primer centro con un equipo de 12 profesionales enfocados en cuidados domiciliarios.' },
    { year: '2015', title: 'Programa integral', detail: 'Sumamos rehabilitación, ortopedia y monitoreo remoto para pacientes crónicos.' },
    { year: '2021', title: 'Expansión nacional', detail: 'Red de aliados en las principales ciudades y coordinación con más de 40 obras sociales.' },
  ]

  const values = [
    { title: 'Cuidado humano', description: 'Escuchamos a cada familia para diseñar un plan que respete su historia y ritmo.' },
    { title: 'Innovación aplicada', description: 'Integramos telemedicina, reportes digitales y dispositivos conectados.' },
    { title: 'Trabajo en red', description: 'Articulamos especialistas, aseguradoras y centros de diagnóstico para simplificar todo el recorrido.' },
  ]

  const stats = [
    { value: '15+', label: 'Años acompañando' },
    { value: '120', label: 'Profesionales activos' },
    { value: '6', label: 'Unidades móviles' },
    { value: '4.9/5', label: 'Satisfacción promedio' },
  ]

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="about-pill">Conocenos</span>
          <h1>Combinamos calidez clínica y gestión inteligente</h1>
          <p>
            En Corporis Salud creemos que un buen diagnóstico se construye tanto con conocimiento médico
            como con la cercanía necesaria para acompañar cada decisión.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story-content">
            <div>
              <h2>Nuestra misión</h2>
              <p>
                Brindar soluciones integrales de salud en el hogar y en nuestros centros asociados,
                priorizando la dignidad del paciente, la coordinación eficiente y la transparencia con las familias.
              </p>
              <h3>Visión</h3>
              <p>
                Ser la red de cuidado interdisciplinario más confiable de la región, donde la tecnología esté al servicio
                del vínculo humano y no al revés.
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
          <div className="about-values-header">
            <p className="eyebrow">Nuestros pilares</p>
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

      <section className="about-timeline">
        <div className="container">
          <h2>Evolucionamos junto a nuestros pacientes</h2>
          <div className="about-timeline-grid">
            {milestones.map((item) => (
              <div key={item.year} className="about-timeline-card">
                <span className="about-timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
