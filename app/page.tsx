import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/home.css';

export default function HomePage() {
  return (
    <main>
      {/* Contenido izquierdo: Logo y botones */}
      <div className="content-left">
        <div className="logo-container">
          <Image 
            src="/logo.png" 
            alt="Crypto Force Logo" 
            className="main-logo"
            width={400}  // Aumentado a 400 para agrandar el logo
            height={200} // Aumentado proporcionalmente
            priority={true}
          />
        </div>
        <div className="button-group">
          <a href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU" className="cta-button">
            <i className="fas fa-rocket"></i> Comienza tu Viaje Galáctico
          </a>
          <a href="/aviso" className="temario-button">
            <i className="fas fa-home"></i> Accede a tu Cuenta
          </a>
        </div>
      </div>

      {/* Contenido derecho: Curso premium */}
      <div className="content-right">
        <div className="promo-section">
          <div className="promo-header">
            🚨 CURSO PREMIUM 🚨
            <span className="discount-tag">-40%</span>
          </div>
          
          <div className="feature-container">
            <div className="feature-columns">
              <div className="feature-column">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Acceso inmediato a formación grabada.</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>15 días de periodo de prueba.</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Videos exclusivos con las claves que marcan la diferencia entre ganar y perder.</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Resolución de dudas personalizada.</span>
                </div>
              </div>
              <div className="feature-column">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Clases en vivo periódicas para resolver dudas.</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>A partir del día 16 se desbloquea el 100% del contenido.</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Acceso ilimitado a la plataforma.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bonus-section">
            <div className="bonus-title">🎁 BONUS INCLUIDOS:</div>
            <div className="bonus-container">
              <div className="bonus-columns">
                <div className="bonus-column">
                  <div className="bonus-item">
                    <i className="fas fa-gift"></i>
                    <span>Curso completo Introducción a las cripto</span>
                  </div>
                  <div className="bonus-item">
                    <i className="fas fa-gift"></i>
                    <span>Master class exclusivas</span>
                  </div>
                </div>
                <div className="bonus-column">
                  <div className="bonus-item">
                    <i className="fas fa-gift"></i>
                    <span>Curso Psicología del trading</span>
                  </div>
                  <div className="bonus-item">
                    <i className="fas fa-gift"></i>
                    <span>Resúmenes de libros especializados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="price-container">
            <span className="original-price">450€</span>
            <span className="promo-price">270€</span>
            <span className="promo-code">Código: 40%OFF</span>
          </div>
          
          <div className="button-container">
            <a href="https://hotmart.com/es/marketplace/productos/curso-criptomonedas-de-0-a-pro/M96551914V" className="cta-button">
              <i className="fas fa-sign-in-alt"></i> INSCRÍBETE AHORA
            </a>
            <a href="/servicios/cursos" className="temario-button">
              <i className="fas fa-list"></i> VER TEMARIO
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
<Image 
  src="/logo.png" 
  alt="Crypto Force Logo" 
  className="main-logo"
  width={400}
  height={200}
  priority={true}
/>
