import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "Asistencia de enfermería 24hs",
      description:
        "Equipo especializado que cubre guardias, visitas domiciliarias y seguimiento permanente.",
      icon: "🩺",
      badge: "Guardia activa",
      tags: ["24/7", "Domiciliaria", "Cobertura total"],
    },
    {
      title: "Cuidados domiciliarios",
      description:
        "Planes personalizados para rehabilitación, control de signos vitales y acompañamiento terapéutico.",
      icon: "🏡",
      badge: "Plan a medida",
      tags: ["Plan mensual", "Supervisión médica"],
    },
    {
      title: "Ortopedia y traumatología",
      description:
        "Adaptamos elementos ortopédicos, realizamos controles postquirúrgicos y acompañamos la recuperación.",
      icon: "🦴",
      badge: "Especialistas",
      tags: ["Prótesis", "Reeducación"],
    },
    {
      title: "Rehabilitación integral",
      description:
        "Kinesiología, terapia ocupacional y fonoaudiología con circuitos de ejercicios y seguimiento digital.",
      icon: "💪",
      badge: "Centros aliados",
      tags: ["Sesiones guiadas", "Plan progresivo"],
    },
    {
      title: "Cuidados paliativos",
      description:
        "Acompañamos al paciente y su familia con soporte médico, psicológico y espiritual.",
      icon: "🌿",
      badge: "Humanizado",
      tags: ["Interdisciplinario", "Apoyo familiar"],
    },
    {
      title: "Coordinación médica",
      description:
        "Gestionamos turnos, derivaciones y recetas electrónicas articulando con obras sociales.",
      icon: "📋",
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

  const stats = [
    { value: "15+", label: "Años acompañando familias" },
    { value: "120", label: "Profesionales activos" },
    { value: "24hs", label: "Tiempo promedio de respuesta" },
    { value: "50+", label: "Obras sociales integradas" },
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
          <span className="services-pill">Corporis Salud</span>
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
              <p className="eyebrow">Nuestro catálogo</p>
              <h2>Elegimos la combinación ideal para cada paciente</h2>
              <p>
                Cada programa incluye seguimiento clínico, reportes periódicos y un coordinador dedicado que
                gestiona todos los pasos por vos.
              </p>
            </div>
            <button className="services-cta" onClick={handleScheduleMeeting}>
              Agendar una asesoría
            </button>
          </header>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-card-header">
                  <span className="service-icon">{service.icon}</span>
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

      <section className="services-stats">
        <div className="container">
          <div className="services-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="services-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="services-note">
            <p>
              “El equipo de Corporis nos permitió continuar con la rehabilitación en casa. Están siempre
              disponibles y coordinan todos los turnos.” — Familia Rivero
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
