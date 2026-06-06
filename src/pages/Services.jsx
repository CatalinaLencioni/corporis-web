import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "Enfermería 24 hs",
      description: "Guardias, visitas domiciliarias, control de signos vitales y seguimiento profesional.",
      badge: "Guardia activa",
      tags: ["24/7", "Domicilio", "Seguimiento"],
    },
    {
      title: "Cuidados domiciliarios",
      description: "Acompañamiento diario, higiene, confort, medicación y asistencia en rutinas del paciente.",
      badge: "Plan a medida",
      tags: ["Familia", "Rutina", "Supervisión"],
    },
    {
      title: "Rehabilitación integral",
      description: "Kinesiología, terapia ocupacional y fonoaudiología con objetivos claros de recuperación.",
      badge: "Evolución guiada",
      tags: ["Kinesiología", "Terapia", "Progreso"],
    },
    {
      title: "Cuidados paliativos",
      description: "Soporte médico, psicológico y familiar con una mirada humana y respetuosa.",
      badge: "Humanizado",
      tags: ["Contención", "Dolor", "Familia"],
    },
    {
      title: "Ortopedia y traumatología",
      description: "Acompañamiento postquirúrgico, adaptación de elementos y recuperación funcional.",
      badge: "Especialistas",
      tags: ["Postquirúrgico", "Movilidad"],
    },
    {
      title: "Coordinación médica",
      description: "Gestión de derivaciones, recetas, indicaciones y comunicación con obras sociales.",
      badge: "Gestión simple",
      tags: ["Turnos", "Cobertura", "Informes"],
    },
  ]

  const highlights = [
    {
      title: "Un plan por paciente",
      description: "Nada es genérico: cada frecuencia, profesional y recurso se define según la necesidad real.",
    },
    {
      title: "Comunicación clara",
      description: "La familia sabe qué se hace, cuándo se hace y quién coordina cada etapa.",
    },
    {
      title: "Red profesional",
      description: "Trabajamos con equipos interdisciplinarios y prestadores preparados para atención domiciliaria.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consulta inicial",
      description: "Nos contás la situación médica, cobertura y urgencia de la atención.",
    },
    {
      step: "02",
      title: "Evaluación",
      description: "Analizamos el caso y definimos qué tipo de equipo necesita el paciente.",
    },
    {
      step: "03",
      title: "Plan de cuidado",
      description: "Armamos frecuencia, profesionales, objetivos y coordinación administrativa.",
    },
    {
      step: "04",
      title: "Seguimiento",
      description: "Acompañamos la evolución y ajustamos el plan cuando hace falta.",
    },
  ]

  const handleRequestInfo = (serviceTitle) => {
    navigate('/contacto', {
      state: {
        motivo: 'info-servicio',
        servicio: serviceTitle,
        mensaje: `Estoy interesado/a en ${serviceTitle}. ¿Podrían enviarme más información?`,
      },
    })
  }

  return (
    <div className="services-page">
      <section className="services-hero page-hero">
        <div className="container">
          <span className="services-pill page-pill">Servicios</span>
          <h1>Soluciones de salud pensadas para cada etapa del cuidado</h1>
          <p>
            Coordinamos profesionales, cobertura y seguimiento para que la atención domiciliaria sea clara,
            ordenada y humana desde el primer contacto.
          </p>
          <div className="services-hero-points">
            {highlights.map((item) => (
              <div key={item.title} className="services-hero-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <header className="services-grid-header">
            <div>
              <p className="eyebrow">Programas de atención</p>
              <h2>Elegimos la combinación ideal para cada paciente</h2>
              <p>
                Cada servicio puede integrarse dentro de un plan mensual o solicitarse como prestación puntual.
              </p>
            </div>
          </header>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-card-header">
                  <span className="service-badge">{service.badge}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
                <button className="service-card-cta" type="button" onClick={() => handleRequestInfo(service.title)}>
                  Consultar servicio
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Proceso simple</p>
            <h2>Cómo comenzamos a cuidarte</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <div key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
