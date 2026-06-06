import { useNavigate } from 'react-router-dom'

const ObrasSociales = () => {
  const navigate = useNavigate()

  const obrasSociales = [
    { logo: '/apross.png', nombre: 'APROSS', tipo: 'Provincial' },
    { logo: '/PAMI.png', nombre: 'PAMI', tipo: 'Nacional' },
    { logo: '/Boreal.png', nombre: 'Boreal', tipo: 'Prepaga' },
    { logo: '/daspu.png', nombre: 'DASPU', tipo: 'Universitaria' },
    { logo: '/Ospevic.png', nombre: 'OSPEVIC', tipo: 'Sindical' },
    { logo: '/OSPG.png', nombre: 'OSPG', tipo: 'Sindical' },
    { logo: '/ospoce.png', nombre: 'OSPOCE', tipo: 'Prepaga' },
    { logo: '/SWISS.png', nombre: 'Swiss Medical', tipo: 'Premium' },
  ]

  const benefits = [
    {
      title: 'Gestión completa',
      description: 'Te orientamos con autorizaciones, derivaciones y documentación necesaria.',
    },
    {
      title: 'Planes flexibles',
      description: 'Combinamos cuidados, rehabilitación y seguimiento según cada cobertura.',
    },
    {
      title: 'Respuesta ágil',
      description: 'Confirmamos condiciones y disponibilidad para avanzar sin vueltas.',
    },
  ]

  const goToContact = () => {
    navigate('/contacto', {
      state: {
        motivo: 'cobertura',
        mensaje: 'Quisiera confirmar cobertura y condiciones para mi obra social.',
      },
    })
  }

  return (
    <div className="obras-page">
      <section className="obras-hero page-hero">
        <div className="container">
          <span className="obras-pill page-pill">Coberturas</span>
          <h1>Trabajamos con obras sociales, prepagas y planes particulares</h1>
          <p>
            Nuestro equipo administrativo te ayuda a ordenar requisitos, autorizaciones y próximos pasos para que
            puedas enfocarte en la atención.
          </p>
          <button className="obras-cta" onClick={goToContact}>Consultar mi cobertura</button>
        </div>
      </section>

      <section className="obras-grid-section">
        <div className="container">
          <header className="obras-grid-header">
            <div>
              <p className="eyebrow">Red de convenios</p>
              <h2>Algunas entidades con las que trabajamos</h2>
              <p>Si tu cobertura no aparece, escribinos igual: podemos revisar alternativas.</p>
            </div>
            <span className="obras-legend">Consulta sujeta a validación</span>
          </header>

          <div className="obras-grid">
            {obrasSociales.map((obra) => (
              <article key={obra.nombre} className="obra-card">
                <div className="obra-card-logo">
                  <img src={obra.logo} alt={`Logo ${obra.nombre}`} />
                </div>
                <div className="obra-card-info">
                  <h3>{obra.nombre}</h3>
                  <span>{obra.tipo}</span>
                </div>
                <button className="obra-card-button" type="button" onClick={goToContact}>
                  Ver requisitos
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="obras-benefits">
        <div className="container">
          <div className="obras-benefits-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="obras-benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
          <div className="obras-note">
            <p>También contamos con opciones particulares para pacientes sin cobertura o con reintegro.</p>
            <p>El equipo puede orientarte sobre documentación médica y pasos administrativos.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ObrasSociales
