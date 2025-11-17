const WhatsAppButton = () => {
  const phoneNumber = "351-7466826"
  const whatsappUrl = `https://wa.me/${3517466826}?text=Hola%2C%20quisiera%20consultar%20sobre%20los%20servicios%20de%20Corporis%20Salud.`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20.52 3.98C18.44 1.9 15.66 0.9 12.68 0.9c-5.33 0-9.68 4.35-9.68 9.68 0 1.7.44 3.36 1.27 4.83L2.18 22.1l5.07-1.33c1.41.76 3.01 1.16 4.68 1.16 5.33 0 9.68-4.35 9.68-9.68 0-2.58-1-5.01-2.81-6.83zm-8.84 14.72c-1.46 0-2.89-.39-4.12-1.11l-.3-.18-3.1 0.82 0.84-3.07-.19-.3C4.55 13.75 4.12 12.2 4.12 10.58 4.12 6.92 7.04 3.98 10.68 3.98c0.97 0 1.91 0.19 2.8 0.56 0.88 0.36 1.68 0.89 2.35 1.56 0.67 0.67 1.2 1.47 1.56 2.35 0.37 0.89 0.56 1.83 0.56 2.8 0 3.66-2.92 6.6-6.56 6.6z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
