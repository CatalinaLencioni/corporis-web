// pages/Careers.jsx
import { useState } from 'react'

const Careers = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    })
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <h1>Contacto</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            
            <div className="contact-item">
              <h3>📍 Dirección</h3>
              <p>Av. Siempre Viva 123</p>
              <p>Buenos Aires, CABA</p>
            </div>
            
            <div className="contact-item">
              <h3>📞 Teléfonos</h3>
              <p>Emergencias: (011) 1234-5678</p>
              <p>Administración: (011) 8765-4321</p>
            </div>
            
            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p>info@corporissalud.com</p>
              <p>turnos@corporissalud.com</p>
            </div>
            
            <div className="contact-item">
              <h3>🕒 Horarios de Atención</h3>
              <p>Lunes a Viernes: 8:00 - 20:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envíanos un mensaje</h2>
            
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
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Careers