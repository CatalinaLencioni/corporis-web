const TrabajaConNosotros = () => {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdw2MJmAqGV8_fGMyTTt-lj7rK6SXb3NPjpms3H3DzXbRFirw/viewform?usp=sharing&ouid=117193183296207647443";

  const handleOpenForm = () => {
    window.open(googleFormURL, "_blank");
  };

  return (
    <div className="trabaja-page">

      {/* HERO AZUL (lo dejo igual que lo tenés) */}
      <section className="services-hero" style={{ padding: "3rem 0" }}>
        <div className="container">
          <h1>Trabajá con nosotros</h1>
          <p>
            Si te interesa formar parte del equipo, completá el formulario y
            dejános tu CV.
          </p>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section className="services-grid-section">
        <div className="container">

          <div
            className="trabaja-content"
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                fontWeight: "600",
                color: "#134074",
              }}
            >
              Enviar CV
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "2rem",
              }}
            >
              Hacé clic en el botón para completar el formulario oficial y
              adjuntar tu CV. Te va a llevar solo unos minutos.
            </p>

            <button
              onClick={handleOpenForm}
              className="submit-btn"
              style={{
                padding: "1rem 2.2rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                backgroundColor: "#134074",
                color: "white",
                border: "none",
                borderRadius: "8px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0f2e54")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#134074")
              }
            >
              Completar formulario
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabajaConNosotros;
