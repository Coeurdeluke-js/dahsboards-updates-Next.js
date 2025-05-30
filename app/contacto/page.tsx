import '../styles/contacto.css';

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <div className="content-container">
        <section className="curso-section">
          <div className="curso-card">
            {/* Título Principal */}
            <h1>CONTACTO</h1>

            {/* Introducción */}
            <div className="curso-content">
              <p className="intro">Estamos aquí para ayudarte a alcanzar el éxito en el mundo del trading. Si tienes preguntas o necesitas más información, contáctanos a través de los siguientes canales.</p>
            </div>

            {/* Botones de Contacto */}
            <div className="curso-content">
              <h2>CONTÁCTANOS</h2>
              <div className="contact-buttons">
                {/* WhatsApp */}
                <a href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <i className="fab fa-whatsapp"></i> Únete al Grupo de WhatsApp
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/The_CryptoForce" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <i className="fab fa-instagram"></i> Síguenos en Instagram
                </a>

                {/* Correo 1 */}
                <a href="mailto:info@thecryptoforce.com" className="social-link email">
                  <i className="fas fa-envelope"></i> info@thecryptoforce.com
                </a>

                {/* Correo 2 */}
                <a href="mailto:services@thecryptoforce.com" className="social-link email">
                  <i className="fas fa-envelope"></i> services@thecryptoforce.com
                </a>

                {/* Correo 3 */}
                <a href="mailto:infocryptoforce@gmail.com" className="social-link email">
                  <i className="fas fa-envelope"></i> infocryptoforce@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}