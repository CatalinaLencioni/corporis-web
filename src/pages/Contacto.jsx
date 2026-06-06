import { useMemo, useState } from "react"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"

const SEDES = {
  cordoba: {
    slug: "cordoba",
    nombre: "Córdoba",
    whatsapp: "3516137269",
    contactChannels: [
      {
        icon: "TEL",
        title: "Teléfonos directos",
        lines: ["Coordinador: 3516137269", "Administración: 351-6410124"],
      },
      {
        icon: "MAIL",
        title: "Correos",
        lines: ["administracion@corporissalud.com.ar", "ivan.farias@corporissalud.com.ar"],
      },
      {
        icon: "DIR",
        title: "Oficina de administración",
        lines: ["José Roque Funes 1761, PB-B", "Cerro de las Rosas, Córdoba"],
      },
    ],
  },
  "buenos-aires": {
    slug: "buenos-aires",
    nombre: "Buenos Aires",
    whatsapp: "3515732409",
    contactChannels: [
      {
        icon: "TEL",
        title: "Teléfonos directos",
        lines: ["Coordinación: +54 9 3515732409", "Comercial: +54 9 116726-0280"],
      },
      {
        icon: "MAIL",
        title: "Correos",
        lines: ["adriano.berti@corporissalud.com.ar", "daniel.hdallera@corporissalud.com.ar"],
      },
      {
        icon: "DIR",
        title: "Oficina de administración",
        lines: ["Piedras 383 - Piso 6", "CABA / Buenos Aires"],
      },
    ],
  },
}

const Contacto = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { sede } = useParams()

  const sedeKey = (sede || "cordoba").toLowerCase()
  const sedeData = SEDES[sedeKey]

  if (!sedeData) return <Navigate to="/contacto/cordoba" replace />

  const contextMessage = useMemo(() => {
    if (!location.state) return ""
    if (location.state.mensaje) return location.state.mensaje
    if (location.state.servicio) {
      return `Estoy interesado/a en ${location.state.servicio}. ¿Podrían brindarme más información?`
    }
    if (location.state.motivo === "asesoria") {
      return "Quisiera agendar una asesoría personalizada."
    }
    return ""
  }, [location.state])

  const [contextLabel, contextHint] = useMemo(() => {
    if (!location.state) return [null, null]
    if (location.state.motivo === "asesoria") {
      return ["Solicitud de asesoría", "Responderemos con opciones de agenda y profesionales disponibles."]
    }
    if (location.state.servicio) {
      return [
        `Interés en ${location.state.servicio}`,
        "Incluí cualquier detalle clínico o cobertura para agilizar la respuesta.",
      ]
    }
    if (location.state.motivo === "cobertura") {
      return ["Consulta de cobertura", "Te orientamos con requisitos, autorización y documentación médica."]
    }
    return [null, null]
  }, [location.state])

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: location.state?.servicio || "",
    mensaje: contextMessage,
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Nueva consulta desde la web Corporis Salud (${sedeData.nombre})

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono || "No indicado"}
Motivo: ${formData.motivo || "No indicado"}

Mensaje:
${formData.mensaje}`

    const whatsappURL = `https://wa.me/${sedeData.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: location.state?.servicio || "",
      mensaje: contextMessage,
    })
  }

  const handleSwitchSede = (nextSlug) => {
    navigate(`/contacto/${nextSlug}`, { state: location.state })
  }

  const isActive = (slug) => slug === sedeData.slug

  return (
    <div className="contact-page-hero">
      <section className="contact-hero-section page-hero">
        <div className="container">
          <span className="contact-pill page-pill">Contacto</span>
          <h1>Estamos disponibles para coordinar tu atención</h1>
          <p>
            Respondemos consultas sobre turnos, coberturas, coordinación domiciliaria y servicios para pacientes.
            Contanos qué necesitás y te guiamos con el próximo paso.
          </p>

          <div className="sede-switch" aria-label="Seleccionar sede">
            <button type="button" className={isActive("cordoba") ? "active" : ""} onClick={() => handleSwitchSede("cordoba")}>
              Córdoba
            </button>
            <button type="button" className={isActive("buenos-aires") ? "active" : ""} onClick={() => handleSwitchSede("buenos-aires")}>
              Buenos Aires
            </button>
          </div>

          <p className="selected-sede">Sede seleccionada: <strong>{sedeData.nombre}</strong></p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <div className="contact-details-panel">
            <p className="eyebrow">Canales directos</p>
            <h2>Elegí el medio que te quede más cómodo</h2>
            <p>El equipo administrativo y de coordinación está atento para orientar tu consulta.</p>

            <div className="contact-channels">
              {sedeData.contactChannels.map((channel) => (
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
            </div>
          </div>

          <form className="contact-form-panel" onSubmit={handleSubmit}>
            <p className="eyebrow">Consulta rápida</p>
            <h2>Escribinos</h2>

            {contextLabel && (
              <div className="contact-context">
                <span className="contact-context-badge">{contextLabel}</span>
                {contextHint && <p>{contextHint}</p>}
              </div>
            )}

            <div className="form-group">
              <input type="text" name="nombre" placeholder="Tu nombre completo" value={formData.nombre} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Tu correo electrónico" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="tel" name="telefono" placeholder="Teléfono de contacto" value={formData.telefono} onChange={handleChange} />
            </div>

            <div className="form-group">
              <input type="text" name="motivo" placeholder="Servicio o motivo (opcional)" value={formData.motivo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <textarea name="mensaje" placeholder="Contanos brevemente tu consulta" rows="5" value={formData.mensaje} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje por WhatsApp
            </button>

            <p className="contact-privacy">
              Tus datos se usan solo para responder esta consulta.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contacto
