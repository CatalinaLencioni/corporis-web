import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "Asistencia de enfermería 24hs",
      description:
        "Equipo especializado que cubre guardias, visitas domiciliarias y seguimiento permanente.",
      badge: "Guardia activa",
      tags: ["24/7", "Domiciliaria", "Cobertura total"],
    },
    {
      title: "Cuidados domiciliarios",
      description:
        "Planes personalizados para rehabilitación, control de signos vitales y acompañamiento terapéutico.",
      badge: "Plan a medida",
      tags: ["Plan mensual", "Supervisión médica"],
    },
    {
      title: "Ortopedia y traumatología",
      description:
        "Adaptamos elementos ortopédicos, realizamos controles postquirúrgicos y acompañamos la recuperación.",
      badge: "Especialistas",
      tags: ["Prótesis", "Reeducación"],
    },
    {
      title: "Rehabilitación integral",
      description:
        "Kinesiología, terapia ocupacional y fonoaudiología con circuitos de ejercicios y seguimiento digital.",
      badge: "Centros aliados",
      tags: ["Sesiones guiadas", "Plan progresivo"],
    },
    {
      title: "Cuidados paliativos",
      description:
        "Acompañamos al paciente y su familia con soporte médico, psicológico y espiritual.",
      badge: "Humanizado",
      tags: ["Interdisciplinario", "Apoyo familiar"],
    },
    {
      title: "Coordinación médica",
      description:
        "Gestionamos turnos, derivaciones y recetas electrónicas articulando con obras sociales.",
      badge: "Gestión express",
      tags: ["Turnos", "Derivaciones"],
    },
  ]

  const highlights = [
    {
      title: "Equipo interdisciplinario",
      description:
        "Enfermería, médicos clínicos, kinesiólogos y psicólogos trabajando bajo el mismo plan terapéutico.",
    },
    {
      title: "Cobertura nacional",
      description:
        "Operamos en todo Córdoba y coordinamos prestadores aliados en las principales ciudades del país.",
    },
    {
      title: "Monitoreo digital",
      description:
        "Reportes semanales, indicadores y alertas tempranas para que la familia esté informada en tiempo real.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Evaluación inicial",
      description: "Analizamos tu situación médica, necesidades y cobertura para diseñar el plan ideal.",
    },
    {
      step: "02",
      title: "Plan personalizado",
      description: "Definimos equipo, frecuencia de visitas y recursos necesarios para tu recuperación.",
    },
    {
      step: "03",
      title: "Atención integral",
      description: "Comienza el acompañamiento con profesionales dedicados y disponibilidad 24/7.",
    },
    {
      step: "04",
      title: "Seguimiento continuo",
      description: "Reportes periódicos, ajustes de plan y coordinación constante con tu médico.",
    },
  ]

  const handleScheduleMeeting = () => {
    navigate('/contacto', {
      state: {
        motivo: 'asesoria',
        mensaje: 'Quisiera agendar una asesoría para evaluar el mejor plan de cuidados.',
      },
    })
  }

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
      <section className="services-hero">
        <div className="container">
          <h1>Servicios diseñados para cada etapa del cuidado</h1>
          <p>
            Combinamos especialistas, tecnología y un acompañamiento cercano para ofrecer soluciones médicas
            que se adaptan a la realidad de cada familia.
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
              <h2>Elegimos la combinación ideal para cada paciente</h2>
              <p>
                Cada programa incluye seguimiento clínico, reportes periódicos y un coordinador dedicado que
                gestiona todos los pasos por vos.
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
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="service-card-cta"
                  type="button"
                  onClick={() => handleRequestInfo(service.title)}
                >
                  Solicitar información
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <div className="process-header">
            <p className="eyebrow">Proceso Simple</p>
            <h2>Cómo comenzamos a cuidarte</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <div key={item.step} className="process-card">
                <div className="process-step">{item.step}</div>
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
