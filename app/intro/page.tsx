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
        <p>Hola equipo, Quiero presentarles un proyecto que nació de una idea simple pero transformadora: <strong>Crypto Force</strong>...</p>
        {/* Resto del contenido */}
      </div>
    </div>
  );
}