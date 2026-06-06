const TrabajaConNosotros = () => {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdw2MJmAqGV8_fGMyTTt-lj7rK6SXb3NPjpms3H3DzXbRFirw/viewform?usp=sharing&ouid=117193183296207647443"

  const handleOpenForm = () => {
    window.open(googleFormURL, "_blank")
  }

  const benefits = [
    "Trabajo coordinado con un equipo interdisciplinario.",
    "Comunicación clara con administración y referentes de sede.",
    "Oportunidades para profesionales orientados al cuidado domiciliario.",
  ]

  return (
    <div className="trabaja-page">
      <section className="services-hero page-hero">
        <div className="container">
          <span className="services-pill page-pill">Sumate al equipo</span>
          <h1>Trabajá con nosotros</h1>
          <p>
            Buscamos profesionales comprometidos con una atención humana, responsable y cercana al paciente.
          </p>
        </div>
      </section>

      <section className="trabaja-section">
        <div className="container">
          <div className="trabaja-panel elevated-panel">
            <div className="trabaja-copy">
              <p className="eyebrow">Formulario de postulación</p>
              <h2>Dejanos tus datos y CV</h2>
              <p>
                Completá el formulario oficial para que podamos evaluar tu perfil y contactarte cuando haya una
                búsqueda compatible.
              </p>
              <ul>
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="trabaja-action">
              <h3>Postulación online</h3>
              <p>El formulario se abre en una pestaña nueva y te lleva solo unos minutos.</p>
              <button onClick={handleOpenForm} className="submit-btn" type="button">
                Completar formulario
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrabajaConNosotros
