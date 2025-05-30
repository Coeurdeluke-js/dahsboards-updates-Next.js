'use client';

export default function BotTradingPage() {
  const handleWhatsAppRedirect = () => {
    window.open('https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU', '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="content-container">
        <section className="curso-section">
          <h1>Bot de Trading</h1>
          
          <div className="curso-card">
            <h2>Trading Automático</h2>
            <div className="curso-content">
              <p>
                Nuestro bot de trading opera de forma automática en los mercados de criptomonedas, 
                generando una rentabilidad dinámica de entre el 10% y 20% mensual.
              </p>
              
              <h3>Características principales:</h3>
              <ul>
                <li>Funcionamiento 24/7 sin interrupciones</li>
                <li>Mínimo de inversión: 500 USDT</li>
                <li>Descuentos en comisiones según nivel de fondeo</li>
                <li>Estrategias adaptativas según condiciones de mercado</li>
                <li>Panel de control para seguimiento de operaciones</li>
              </ul>
              
              <div className="whatsapp-button">
                <button onClick={handleWhatsAppRedirect} className="btn-whatsapp">
                  <i className="fab fa-whatsapp"></i> Activar Bot
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}