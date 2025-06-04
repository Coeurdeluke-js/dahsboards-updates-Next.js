import BackButton from '@/components/ui/BackButton';

export default function CursosPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-4xl mx-auto py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Nuestros Cursos</h1>
          
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">El Lado Oscuro de las Finanzas</h2>
            <h3 className="text-xl text-gray-300">Construye una Estrategia de Trading Digna de un Profesional desde Cero</h3>
            <div className="space-y-4">
              <p className="text-gray-300">Domina los fundamentos del trading, gestión del riesgo, mercados de futuros, análisis técnico y avanzado, y técnicas profesionales para tomar decisiones estratégicas en los mercados financieros.</p>
              
              <div className="flex justify-center mt-6">
                <a 
                  href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                  className="flex items-center gap-2 bg-[#ec4d58] text-white px-6 py-3 rounded-lg hover:bg-[#d93f4a] transition-colors"
                >
                  Ver Curso
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Curso Criptomonedas (De 0 a Pro)</h2>
            <div className="space-y-6">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">✅ Acceso inmediato a formación grabada.</li>
                <li className="flex items-start gap-2">✅ 15 días prueba.</li>
                <li className="flex items-start gap-2">✅ A partir del día 16 se desbloquea el 100% del contenido.</li>
                <li className="flex items-start gap-2">✅ Videos exclusivos (las claves que marcan la diferencia entre ganar y perder, y que jamás encontrarás en youtube).</li>
                <li className="flex items-start gap-2">✅ Acceso ilimitado a plataforma.</li>
                <li className="flex items-start gap-2">✅ Clases en directo periódicamente.</li>
                <li className="flex items-start gap-2">✅ Resolución de dudas.</li>
              </ul>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">BONUS INCLUIDOS:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">🎁 Curso completo Introducción a las cripto (2 horas)</li>
                  <li className="flex items-start gap-2">🎁 Curso Psicología del trading (3.5 horas)</li>
                  <li className="flex items-start gap-2">🎁 BONUS: Master class (x2)</li>
                  <li className="flex items-start gap-2">🎁 BONUS: Resúmenes de libros (x14)</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 justify-end mt-6">
                <BackButton />
                <a 
                  href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                  className="flex items-center gap-2 bg-[#ec4d58] text-white px-6 py-3 rounded-lg hover:bg-[#d93f4a] transition-colors"
                >
                  Acceder al Curso
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}