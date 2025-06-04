import Link from 'next/link';

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
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <i className={`${servicio.icon} text-4xl text-[#ec4d58] mb-4 block`}></i>
              <h3 className="text-xl font-bold text-white mb-3">{servicio.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{servicio.description}</p>
              <Link href={servicio.link} className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-all duration-300 text-sm">
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