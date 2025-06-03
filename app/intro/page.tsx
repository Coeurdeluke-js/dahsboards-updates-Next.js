'use client';
import { useEffect, useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import '../styles/intro.css';

export default function IntroPage() {
  const [showVolumeMessage, setShowVolumeMessage] = useState(true);

  useEffect(() => {
    // Manejar el mensaje de volumen
    const handleClick = () => {
      setShowVolumeMessage(false);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="video-container">
        <VideoPlayer 
          src="/promo-video.mp4"
          poster="/video-poster.jpg"
        />
        
        {showVolumeMessage && (
          <div className="volume-message">
            <i className="fas fa-volume-up"></i>
            <span>Sube el volumen para escuchar</span>
          </div>
        )}
      </div>
      
      <div className="text-content">
        <h1>Introducción a Crypto Force</h1>
        <p>Hola equipo, Quiero presentarles un proyecto que nació de una idea simple pero transformadora: <strong>Crypto Force</strong>. Este sistema educativo está diseñado para empoderarnos con el conocimiento necesario para navegar el mundo de las criptomonedas e inversiones.</p>
        <p><strong>Crypto Force</strong> es una comunidad donde aprendemos juntos, crecemos como equipo, y construimos habilidades reales que nos permiten tomar decisiones informadas y responsables en un entorno de constante cambio.</p>
        <p>Sabemos que el mundo de las criptomonedas puede parecer confuso, incluso intimidante, pero no tiene por qué serlo. Nuestro propósito con <strong>Crypto Force</strong> es acercar ese mundo a las personas de una manera que sea accesible, comprensible y, sobre todo, humana. Queremos crear un espacio donde no solo adquiramos habilidades, sino donde también podamos compartir experiencias, aprender de nuestros errores y celebrar nuestros logros.</p>
        
        <h2>Lo que nos mueve:</h2>
        <p>En <strong>Crypto Force</strong>, creemos que el verdadero poder está en el conocimiento, y que cuando entendemos cómo funcionan las cosas, ganamos la confianza para tomar decisiones por nosotros mismos. El dinero, las inversiones y los mercados son herramientas, pero el conocimiento es lo que nos da la libertad para usarlas a nuestro favor.</p>
        <p>Lo más valioso de este proyecto es la comunidad que estamos formando. Porque aquí, nadie está solo. Nos apoyamos, nos damos una mano cuando es necesario, y compartimos lo que aprendemos para que otros puedan seguir avanzando. <strong>Crypto Force</strong> no es solo un equipo de trading, es una red de personas que creen en el poder de la educación y el crecimiento colectivo.</p>
        
        <h2>Empoderar a través del conocimiento:</h2>
        <p>Nuestro enfoque va más allá de simplemente enseñar a operar en los mercados. Queremos que cada uno de ustedes, al aprender y desarrollar sus habilidades, sienta que tiene el control de su futuro financiero. Y lo más importante, que lo hagan a su propio ritmo, con apoyo y sin presiones externas.</p>
        <p>Además, sabemos que aquellos que se destaquen en este proceso no solo alcanzarán sus metas, sino que tendrán la oportunidad de compartir lo que han aprendido. Queremos que los mejores entre nosotros puedan transmitir ese conocimiento a otros y, al mismo tiempo, recibir un beneficio económico por ello.</p>
        <p>Porque aquí, creemos que enseñar y aprender son dos caras de la misma moneda, y ambos tienen un valor inmenso.</p>
        
        <h2>¿Cómo seguimos adelante?</h2>
        <p>Este es el momento de escucharnos. Cada opinión y cada comentario que recibamos de ustedes nos ayudará a dar forma a este proyecto de la mejor manera posible. <strong>Crypto Force</strong> es una construcción colectiva, y la visión que tenemos solo se materializará si todos los que formamos parte de ella sentimos que estamos caminando juntos.</p>
        <p>No estamos buscando un éxito inmediato ni ganancias rápidas. Estamos construyendo algo a largo plazo, un lugar donde cada uno pueda encontrar su camino, aprender lo que necesita y avanzar a su propio ritmo.</p>
        <p><strong>Crypto Force</strong> será lo que cada uno de nosotros quiera que sea, porque aquí, el poder del conocimiento es lo que realmente importa.</p>
        <p>Gracias por estar aquí, por formar parte de esta aventura y por confiar en el proceso. Juntos, podemos crear algo realmente significativo.</p>
        <p>Con afecto, <strong>El equipo de Crypto Force.</strong></p>
      </div>
    </div>
  );
}