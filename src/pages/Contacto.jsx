import { useMemo, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"


const SEDES = {
  cordoba: {
    slug: "cordoba",
    nombre: "Córdoba",
    whatsapp: "5493517466826",
    contactChannels: [
      {
        icon: "📞",
        title: "Teléfonos directos",
        lines: ["Coordinador: 351-7466826", "Administración: 351-6410124"],
      },
      {
        icon: "✉️",
        title: "Correos",
        lines: ["administracion@corporissalud.com.ar", "ivan.farias@corporissalud.com.ar"],
      },
      {
        icon: "📍",
        title: "Oficina de Administración",
        lines: ["Jose Roque Funes 1761, PB-B", "Cerro de las Rosas, Córdoba"],
      },
    ],
  },
  "buenos-aires": {
    slug: "buenos-aires",
    nombre: "Buenos Aires",
    whatsapp: "3515732409",
    contactChannels: [
      {
        icon: "📞",
        title: "Teléfonos directos",
        lines: ["Responsable de Coordinación: +54 9 3515732409", "Responsable Comercial: +54 9 116726-0280"], 
      },
      {
        icon: "✉️",
        title: "Correos",
        lines: ["adriano.berti@corporissalud.com.ar", "daniel.hdallera@corporissalud.com.ar"], 
      },
      {
        icon: "📍",
        title: "Oficina de Administración",
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
        "Incluye cualquier detalle clínico o cobertura para agilizar la respuesta.",
      ]
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

    const whatsappURL = `https://wa.me/${sedeData.whatsapp}?text=${encodeURIComponent(
      `📩 *Nueva consulta desde la web Corporis Salud* (${sedeData.nombre})

👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono || "No indicado"}
📌 *Motivo:* ${formData.motivo || "No indicado"}

📝 *Mensaje:*
${formData.mensaje}`
    )}`

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
      <section className="contact-hero-section">
        <div className="container">
          <h1>Estamos disponibles para coordinar tu atención</h1>
          <p>
            Nuestro equipo responde consultas sobre turnos, coberturas, coordinación domiciliaria y servicios
            corporativos. Contanos qué necesitás y te guiaremos en minutos.
          </p>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                gap: 6,
                padding: 6,
                borderRadius: 999,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              <button
                type="button"
                onClick={() => handleSwitchSede("cordoba")}
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 14px",
                  borderRadius: 999,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                  background: isActive("cordoba") ? "rgba(255,255,255,0.92)" : "transparent",
                  color: isActive("cordoba") ? "#111" : "rgba(255,255,255,0.92)",
                }}
              >
                Córdoba
              </button>

              <button
                type="button"
                onClick={() => handleSwitchSede("buenos-aires")}
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 14px",
                  borderRadius: 999,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                  background: isActive("buenos-aires") ? "rgba(255,255,255,0.92)" : "transparent",
                  color: isActive("buenos-aires") ? "#111" : "rgba(255,255,255,0.92)",
                }}
              >
                Buenos Aires
              </button>
            </div>
          </div>

          {/* mini subtítulo */}
          <p style={{ marginTop: 10, opacity: 0.9 }}>
            Sede seleccionada: <strong>{sedeData.nombre}</strong>
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <div className="contact-details-panel">
            <h2>Canales directos</h2>
            <p>Elegí el medio que te resulte más cómodo, nuestro equipo está atento de lunes a sábado.</p>

            <div className="contact-channels">
              {sedeData.contactChannels.map((channel) => (
                <article
                  key={channel.title}
                  className="contact-channel-card"
                  style={{
                    borderRadius: 16,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.09)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)"
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.06)"
                  }}
                >
                  <div
                    className="contact-channel-icon"
                    style={{
                      width: 44,
                      height: 44,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: 12,
                      background: "rgba(0,0,0,0.04)",
                    }}
                  >
                    {channel.icon}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: 6 }}>{channel.title}</h3>
                    {channel.lines.map((line) => (
                      <p key={line} style={{ margin: "4px 0" }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div
              className="contact-schedule"
              style={{
                marginTop: 18,
                borderRadius: 16,
                padding: 16,
                border: "1px solid rgba(0,0,0,0.06)",
                background: "rgba(0,0,0,0.02)",
              }}
            >
              <h3 style={{ marginBottom: 8 }}>Horarios de atención</h3>
              <p style={{ margin: "4px 0" }}>Lunes a Viernes · 08:00 a 20:00</p>
              <p style={{ margin: "4px 0" }}>Sábados · 09:00 a 13:00</p>
            </div>
          </div>

          <form
            className="contact-form-panel"
            onSubmit={handleSubmit}
            style={{
              borderRadius: 18,
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 14px 34px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Escribinos</h2>

            {contextLabel && (
              <div
                className="contact-context"
                style={{
                  marginTop: 10,
                  padding: 12,
                  borderRadius: 14,
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="contact-context-badge"
                  style={{
                    display: "inline-flex",
                    padding: "6px 10px",
                    borderRadius: 999,
                    fontWeight: 700,
                    background: "rgba(0,0,0,0.08)",
                  }}
                >
                  {contextLabel}
                </span>
                {contextHint && <p style={{ marginTop: 10 }}>{contextHint}</p>}
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
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje por WhatsApp ({sedeData.nombre})
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
