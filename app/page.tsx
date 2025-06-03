'use client';
import Image from 'next/image';
import { useEffect } from 'react';
// Remove all CSS imports

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.zwtc-header, .zwtc-description, .zwtc-text, .zwtc-benefits, .zwtc-dates, .key-points, .video-guide, .opportunity-section'
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-[#212121] via-[#121212] to-[#212121] overflow-x-hidden">
      <div className="absolute inset-0 bg-triangle-pattern opacity-20"></div>
      <div className="relative">
        {/**
         * Aquí he añadido:
         *  - overflow-y-auto: para que <main> pueda scrollear si de pronto
         *    el contenido excede ligeramente el viewport.
         *  - scrollbar personalizado: ver parte 2 abajo.
         */}
        <main className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-[60px_30px_30px] gap-4 md:gap-6 h-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#ec4d58] scrollbar-track-[#121212]">
          {/* ================================================================= */}
          {/* Contenido izquierdo: Logo + botones */}
          <div className="w-full md:w-5/12 max-w-[500px] px-4 md:px-0 flex flex-col items-center mt-4 md:mt-8">
            <div className="flex justify-center items-center mx-auto mb-4 md:mb-4 max-w-[280px] md:max-w-[350px]">
              <Image
                src="/logo.png"
                alt="Crypto Force Logo"
                className="w-full h-auto filter drop-shadow-md hover:scale-101 transition-transform duration-300"
                width={450}
                height={225}
                priority={true}
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-4 w-full max-w-[350px]">
              <a
                href="https://chat.whatsapp.com/JQJT3H0KE4u7WNiVc8QqxU"
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 bg-[#ec4d58] text-white rounded-lg hover:bg-[#d43d47] transition-all duration-300 text-sm md:text-base w-full"
              >
                <i className="fas fa-rocket"></i> Comienza tu Viaje Galáctico
              </a>
              <a
                href="/login"
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-all duration-300 text-sm md:text-base w-full"
              >
                <i className="fas fa-home"></i> Accede a tu Cuenta
              </a>
            </div>
          </div>

          {/* ================================================================= */}
          {/* Contenido derecho: Card “Curso Premium” */}
          <div className="w-full md:w-7/12 max-w-[600px] px-4 md:px-0 mt-4 md:mt-8">
            <div className="bg-[#1e1e1e] rounded-xl p-4 md:p-6 shadow-md">
              <div className="rounded-xl p-2 md:p-3 mb-2 flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-[#ffd700] px-3 md:px-4 py-2 border-2 border-[#ffd700] rounded-lg flex items-center whitespace-nowrap gap-2">
                  ⚠️ CURSO PREMIUM
                  <span className="text-[#ffd700] font-bold">-40% OFF ⚠️</span>
                </span>
              </div>

              {/** Aquí he añadido “list-none marker:hidden” para quitar cualquier marcador */}
              <ul className="feature-list list-none marker:hidden space-y-1 text-sm md:text-sm leading-snug">
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Acceso inmediato a formación grabada.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>15 días de período de prueba.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Videos exclusivos con las claves que marcan la diferencia.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Resolución de dudas personalizada.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Clases en vivo periódicas para resolver dudas.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>A partir del día 16 se desbloquea el 100% del contenido.</span>
                </li>
                <li className="feature-item flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Acceso ilimitado a la plataforma.</span>
                </li>
              </ul>

              <div className="mt-3 md:mt-4">
                <h3 className="text-[#ffd700] font-bold mb-2 text-sm md:text-base">
                  🎁 BONUS INCLUIDOS:
                </h3>
                <ul className="feature-list list-none marker:hidden space-y-1 text-sm md:text-sm leading-snug">
                  <li className="feature-item flex items-start gap-2">
                    <span className="flex-shrink-0">📚</span>
                    <span>Curso completo Introducción a las cripto</span>
                  </li>
                  <li className="feature-item flex items-start gap-2">
                    <span className="flex-shrink-0">📚</span>
                    <span>Master class exclusivas</span>
                  </li>
                  <li className="feature-item flex items-start gap-2">
                    <span className="flex-shrink-0">📚</span>
                    <span>Curso Psicología del trading</span>
                  </li>
                  <li className="feature-item flex items-start gap-2">
                    <span className="flex-shrink-0">📚</span>
                    <span>Resúmenes de libros especializados</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 leading-snug">
                <div className="text-center">
                  <span className="text-gray-400 line-through text-xs md:text-sm">
                    450€
                  </span>
                  <div className="text-[#ec4d58] text-2xl md:text-3xl font-bold my-1 md:my-2">
                    270€
                  </div>
                  <span className="text-gray-400 text-xs md:text-sm">
                    Código: 40%OFF
                  </span>
                </div>

                <button className="w-full py-2 bg-[#ec4d58] text-white font-bold rounded-lg hover:bg-[#d43d47] transition-colors text-sm md:text-base">
                  🚀 INSCRÍ BETE AHORA
                </button>
                <button className="w-full py-2 bg-[#2a2a2a] text-white font-bold rounded-lg hover:bg-[#3a3a3a] transition-colors text-sm md:text-base">
                  📋 VER TEMARIO
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
