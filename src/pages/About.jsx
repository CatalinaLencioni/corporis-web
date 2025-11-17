const About = () => {
  const timeline = [
    {
      year: "2009",
      title: "Nacimiento de Corporis Salud",
      description:
        "Iniciamos actividades en Córdoba brindando internación domiciliaria con un enfoque humano y cercano.",
    },
    {
      year: "2010 - 2015",
      title: "Consolidación del servicio",
      description:
        "Se incorporan médicos clínicos, enfermería profesional, kinesiólogos, psicólogos y cuidadores.",
    },
    {
      year: "2016 - 2018",
      title: "Crecimiento sostenido",
      description:
        "Superamos los 200 pacientes mensuales ampliando la red de profesionales certificados.",
    },
    {
      year: "2019",
      title: "Más de 300 pacientes",
      description:
        "Atención mensual a más de 300 pacientes con seguimiento clínico y acompañamiento continuo.",
    },
    {
      year: "2020 - 2022",
      title: "Planes personalizados",
      description:
        "Se integran convenios y presupuestos adaptados a obras sociales y prepagas según cada necesidad.",
    },
    {
      year: "2023 - Actualidad",
      title: "Fortalecimiento institucional",
      description:
        "Refuerzo de valores: responsabilidad, integridad, respeto y compromiso. Atención 24/7 en Córdoba.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Fundación en Córdoba",
      detail:
        "Abrimos el primer centro con un equipo de 12 profesionales enfocados en cuidados domiciliarios.",
    },
    {
      year: "2015",
      title: "Programa integral",
      detail:
        "Sumamos rehabilitación, ortopedia y monitoreo remoto para pacientes crónicos.",
    },
    {
      year: "2021",
      title: "Expansión nacional",
      detail:
        "Red de aliados en las principales ciudades y coordinación con más de 40 obras sociales.",
    },
  ];

  const values = [
    {title: "Cuidado humano", description: "Escuchamos a cada familia para diseñar un plan que respete su historia y ritmo.",},
    {title: "Coordinación profesional", description:"Integramos especialistas y obras sociales para garantizar un cuidado eficiente y seguro.",},
    {title: "Colaboración en equipo", description: "Fomentamos la colaboración entre profesionales y familias para ofrecer soluciones integrales y acompañamiento continuo.",},
  ];

  const stats = [
    { value: "15+", label: "Años acompañando" },
    { value: "120", label: "Profesionales activos" },
    { value: "6", label: "Unidades móviles" },
    { value: "4.9/5", label: "Satisfacción promedio" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="about-pill">Conocenos</span>
          <h1>Combinamos calidez clínica y gestión inteligente</h1>
          <p>
            En Corporis Salud creemos que un buen diagnóstico se construye tanto
            con conocimiento médico como con la cercanía necesaria para
            acompañar cada decisión.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story-content">
            <div>
              <h2>Nuestra misión</h2>
              <p>
                Brindar soluciones integrales de salud en el hogar y en nuestros
                centros asociados, priorizando la dignidad del paciente, la
                coordinación eficiente y la transparencia con las familias.
              </p>
              <h3>Visión</h3>
              <p>
                Ser la red de cuidado interdisciplinario más confiable de la
                región, donde la tecnología esté al servicio del vínculo humano
                y no al revés.
              </p>
            </div>
            <div className="about-highlights">
              {stats.map((stat) => (
                <div key={stat.label} className="about-highlight">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values-header">
            <p className="eyebrow">Nuestros pilares</p>
            <h2>Lo que guía cada intervención</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article key={value.title} className="about-value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-timeline">
        <div className="container">
          <h2>Evolucionamos junto a nuestros pacientes</h2>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-card">
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
