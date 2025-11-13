import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Contacto = () => {
  const location = useLocation()

  const contextMessage = useMemo(() => {
    if (!location.state) return ''
    if (location.state.mensaje) return location.state.mensaje
    if (location.state.servicio) {
      return `Estoy interesado/a en ${location.state.servicio}. ¿Podrían brindarme más información?`
    }
    if (location.state.motivo === 'asesoria') {
      return 'Quisiera agendar una asesoría personalizada.'
    }
    return ''
  }, [location.state])

  const [contextLabel, contextHint] = useMemo(() => {
    if (!location.state) return [null, null]
    if (location.state.motivo === 'asesoria') {
      return ['Solicitud de asesoría', 'Responderemos con opciones de agenda y profesionales disponibles.']
    }
    if (location.state.servicio) {
      return [
        `Interés en ${location.state.servicio}`,
        'Incluye cualquier detalle clínico o cobertura para agilizar la respuesta.',
      ]
    }
    return [null, null]
  }, [location.state])

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: location.state?.servicio || '',
    mensaje: contextMessage
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      motivo: location.state?.servicio || '',
      mensaje: contextMessage
    })
  }

  const contactChannels = [
    {
      icon: '📞',
      title: 'Teléfonos directos',
      lines: ['Emergencias: (011) 1234-5678', 'Administración: (011) 8765-4321'],
    },
    {
      icon: '✉️',
      title: 'Correos',
      lines: ['info@corporissalud.com', 'turnos@corporissalud.com'],
    },
    {
      icon: '📍',
      title: 'Clínica central',
      lines: ['Av. Siempre Viva 123', 'Buenos Aires, Argentina'],
    },
  ]

  const contactHighlights = [
    { value: '24hs', label: 'Respuesta a emergencias' },
    { value: '2', label: 'Sucursales activas' },
    { value: '15', label: 'Coordinadores administrativos' },
    { value: '300+', label: 'Familias asistidas este año' },
  ]

  return (
    <div className="contact-page-hero">
      <section className="contact-hero-section">
        <div className="container">
          <span className="contact-pill">Contacto</span>
          <h1>Estamos disponibles para coordinar tu atención</h1>
          <p>
            Nuestro equipo responde consultas sobre turnos, coberturas, coordinación domiciliaria y servicios
            corporativos. Contanos qué necesitás y te guiaremos en minutos.
          </p>
          <div className="contact-highlights">
            {contactHighlights.map((item) => (
              <div key={item.label} className="contact-highlight-card">
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <div className="contact-details-panel">
            <h2>Canales directos</h2>
            <p>Elegí el medio que te resulte más cómodo, nuestro equipo está atento de lunes a sábado.</p>
            <div className="contact-channels">
              {contactChannels.map((channel) => (
                <article key={channel.title} className="contact-channel-card">
                  <div className="contact-channel-icon">{channel.icon}</div>
                  <div>
                    <h3>{channel.title}</h3>
                    {channel.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-schedule">
              <h3>Horarios de atención</h3>
              <p>Lunes a Viernes · 08:00 a 20:00</p>
              <p>Sábados · 09:00 a 13:00</p>
              <span>Guardia de enfermería 24/7</span>
            </div>
          </div>

          <form className="contact-form-panel" onSubmit={handleSubmit}>
            <h2>Escribinos</h2>
            {contextLabel && (
              <div className="contact-context">
                <span className="contact-context-badge">{contextLabel}</span>
                {contextHint && <p>{contextHint}</p>}
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono de contacto"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="motivo"
                placeholder="Servicio o motivo (opcional)"
                value={formData.motivo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Contanos brevemente tu consulta"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje
            </button>
            <p className="contact-privacy">
              Protegemos tus datos personales y solo los usamos para responder la consulta.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contacto
