import Link from 'next/link';
import '../styles/servicios.css';

const servicios = [
  {
    icon: "fas fa-user-graduate",
    title: "Mentoría",
    description: "Recibe orientación personalizada de traders expertos que te guiarán en tu camino hacia el éxito en el trading de criptomonedas.",
    link: "/servicios/mentoria",
    buttonText: "Más Información"
  },
  {
    icon: "fas fa-book-open",
    title: "Cursos",
    description: "Accede a nuestro contenido educativo completo sobre trading, análisis técnico y gestión de riesgos.",
    link: "/servicios/cursos",
    buttonText: "Ver Cursos"
  },
  {
    icon: "fas fa-chart-line",
    title: "Señales",
    description: "Recibe alertas y análisis de trading en tiempo real para aprovechar las mejores oportunidades del mercado.",
    link: "/servicios/signals",
    buttonText: "Obtener Señales"
  },
  {
    icon: "fas fa-robot",
    title: "Bot de Trading",
    description: "Trading automático con rentabilidad dinámica de entre el 10% y 20% mensual. Funcionamiento las 24 horas, los 7 días de la semana. Mínimo 500 USDT. Descuentos en comisiones según nivel de fondeo.",
    link: "/servicios/bot",
    buttonText: "Activar Bot"
  }
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="servicios-container">
        <h1>Nuestros Servicios</h1>
        
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <i className={`${servicio.icon} service-icon`}></i>
              <h3 className="service-title">{servicio.title}</h3>
              <p className="service-description">{servicio.description}</p>
              <Link href={servicio.link} className="service-button">
                <i className="fas fa-arrow-right"></i>
                <span>{servicio.buttonText}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}