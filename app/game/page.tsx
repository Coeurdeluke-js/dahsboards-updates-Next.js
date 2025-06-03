'use client';

// Eliminar esta línea:
import Image from 'next/image';
import '../styles/game.css';

export default function GamePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="overlay absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="container text-center p-8 relative z-10">
        <h1 className="text-5xl font-bold text-crypto-red mb-4 text-shadow-glow">
          The Siths Clash
        </h1>
        
        <p className="text-2xl text-white/80 mb-8">
          El poder oscuro se alza... Pero aún no ha llegado su momento.
        </p>
        
        <i className="fas fa-hammer text-6xl text-crypto-red mb-4 animate-pulse"></i>
        
        <p className="text-gray-400 mt-4 mb-8">
          Nuestros Señores Oscuros están forjando algo extraordinario.<br/>
          Pronto, el universo temblará ante tu poder.
        </p>
        
        <div className="loading-bar mx-auto w-48 h-1 bg-crypto-red/20 rounded overflow-hidden relative">
          <div className="loading-progress"></div>
        </div>
      </div>
      
      <style jsx>{`
        .text-shadow-glow {
          text-shadow: 0 0 15px rgba(236, 77, 88, 0.8);
        }
        
        .loading-bar {
          position: relative;
        }
        
        .loading-progress {
          position: absolute;
          top: 0;
          left: -50px;
          height: 100%;
          width: 50px;
          background: #ec4d58;
          box-shadow: 0 0 20px #ec4d58;
          animation: loading 2s infinite;
        }
        
        @keyframes loading {
          0% { left: -50px; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}