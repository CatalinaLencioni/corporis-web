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
    { title: 'Coordinación completa', description: 'Autorizaciones, derivaciones y auditorías gestionadas por nuestro equipo administrativo.' },
    { title: 'Planes flexibles', description: 'Combinamos servicios de cuidados domiciliarios, rehabilitación y ortopedia según cada cobertura.' },
    { title: 'Respuesta en 24 hs', description: 'Confirmamos disponibilidad y turnos en menos de un día hábil para casos prioritarios.' },
  ]

  const coverageNote = [
    'Si tu obra social no figura en el listado, escribinos igualmente: solemos gestionar convenios especiales.',
    'Disponemos de planes particulares con descuentos para pacientes sin cobertura.',
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
      <section className="obras-hero">
        <div className="container">
          <span className="obras-pill">Coberturas</span>
          <h1>Trabajamos con las obras sociales y prepagas más confiables</h1>
          <p>
            Gestionamos autorizaciones, auditorías y reintegros para que la experiencia médica sea ágil. Nuestro
            equipo administrativo está en contacto directo con cada entidad.
          </p>
          <button className="obras-cta" onClick={goToContact}>
            Consultar mi cobertura
          </button>
        </div>
      </section>

      <section className="obras-grid-section">
        <div className="container">
          <header className="obras-grid-header">
            <div>
              <p className="eyebrow">Red de convenios</p>
              <h2>Más de 40 convenios activos en todo el país</h2>
              <p>Estas son algunas de las entidades con las que trabajamos a diario.</p>
            </div>
            <span className="obras-legend">Actualizamos el listado mensualmente</span>
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
          <ul className="obras-note">
            {coverageNote.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ObrasSociales
