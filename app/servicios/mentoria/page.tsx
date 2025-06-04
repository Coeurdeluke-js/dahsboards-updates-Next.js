'use client';
import BackButton from '@/components/ui/BackButton';

export default function MentoriaPage() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-4xl mx-auto py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Mentoría</h1>
          
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Servicio de instrucción y acción en el análisis y trading</h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                Recibe orientación personalizada de traders expertos que te guiarán 
                en tu camino hacia el éxito en el trading de criptomonedas.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Requisitos:</h3>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>Cada usuario deberá tener una cuenta en el exchange proporcionado por nosotros, referida y correctamente verificada.</li>
                  <li>Se utilizará para fines educativos la simulación de trading (demo, dinero ficticio); quedando a consideración del usuario fondear con dinero real.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Horarios propuestos:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><i className="far fa-clock"></i> Martes y jueves; 23.15hr Argentina</li>
                  <li className="flex items-center gap-2"><i className="fas fa-hourglass-half"></i> 3 horas de duración aproximada</li>
                  <li className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> 8 sesiones mensuales (10 inclusive dependiendo del mes)</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 justify-end mt-6">
                <BackButton />
                <a 
                  href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" 
                  target="_blank" 
                  className="flex items-center gap-2 bg-[#ec4d58] text-white px-6 py-3 rounded-lg hover:bg-[#d93f4a] transition-colors"
                >
                  <i className="fab fa-whatsapp"></i> Quiero Aprender
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}