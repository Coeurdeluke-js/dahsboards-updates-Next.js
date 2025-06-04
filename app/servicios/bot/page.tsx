'use client';
import BackButton from '@/components/ui/BackButton';

export default function BotTradingPage() {
  const handleWhatsAppRedirect = () => {
    window.open('https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-4xl mx-auto py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Bot de Trading</h1>
          
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Trading Automático</h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                Nuestro bot de trading opera de forma automática en los mercados de criptomonedas, 
                generando una rentabilidad dinámica de entre el 10% y 20% mensual.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Características principales:</h3>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>Funcionamiento 24/7 sin interrupciones</li>
                  <li>Mínimo de inversión: 500 USDT</li>
                  <li>Descuentos en comisiones según nivel de fondeo</li>
                  <li>Estrategias adaptativas según condiciones de mercado</li>
                  <li>Panel de control para seguimiento de operaciones</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 justify-end mt-6">
                <BackButton />
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Activar Bot
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}