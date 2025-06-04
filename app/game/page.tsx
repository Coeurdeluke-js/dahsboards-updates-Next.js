'use client';

import Image from 'next/image';

export default function GamePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="container text-center p-8 relative z-10">
        <h1 className="text-5xl font-bold text-[#ec4d58] mb-4 drop-shadow-[0_0_15px_rgba(236,77,88,0.8)]">
          The Siths Clash
        </h1>
        
        <p className="text-2xl text-white/80 mb-8">
          El poder oscuro se alza... Pero aún no ha llegado su momento.
        </p>
        
        <i className="fas fa-hammer text-6xl text-[#ec4d58] mb-4 animate-pulse"></i>
        
        <p className="text-gray-400 mt-4 mb-8">
          Nuestros Señores Oscuros están forjando algo extraordinario.<br/>
          Pronto, el universo temblará ante tu poder.
        </p>
        
        <div className="mx-auto w-48 h-1 bg-[#ec4d58]/20 rounded overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-12 bg-[#ec4d58] shadow-[0_0_20px_#ec4d58] animate-loading"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-loading {
          animation: loading 2s infinite;
        }
      `}</style>
    </div>
  );
}