export default function MentoriaPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="content-container">
        <section className="curso-section">
          <h1>Mentoría</h1>
          
          <div className="curso-card">
            <h2>Servicio de instrucción y acción en el análisis y trading</h2>
            <div className="curso-content">
              <p>
                Recibe orientación personalizada de traders expertos que te guiarán 
                en tu camino hacia el éxito en el trading de criptomonedas.
              </p>
              
              <h3>Requisitos:</h3>
              <ul>
                <li>Cada usuario deberá tener una cuenta en el exchange proporcionado por nosotros, referida y correctamente verificada.</li>
                <li>Se utilizará para fines educativos la simulación de trading (demo, dinero ficticio); quedando a consideración del usuario fondear con dinero real.</li>
              </ul>
              
              <h3>Horarios propuestos:</h3>
              <ul>
                <li><i className="far fa-clock"></i> Martes y jueves; 23.15hr Argentina</li>
                <li><i className="fas fa-hourglass-half"></i> 3 horas de duración aproximada</li>
                <li><i className="far fa-calendar-alt"></i> 8 sesiones mensuales (10 inclusive dependiendo del mes)</li>
              </ul>
              
              <div className="whatsapp-button">
                <a href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" target="_blank" className="service-button">
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