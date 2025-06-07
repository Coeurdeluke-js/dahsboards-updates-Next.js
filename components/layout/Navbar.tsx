'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import clsx from 'clsx';

const mainLinks = [
  { href: '/', label: 'Home', icon: 'fas fa-home' },
  { href: '/intro', label: 'Introducción', icon: 'fas fa-info-circle' },
  { href: '/quienessomos', label: 'Quiénes Somos', icon: 'fas fa-users' },
  { href: '/servicios', label: 'Servicios', icon: 'fas fa-cogs' },
  { href: '/contacto', label: 'Contacto', icon: 'fas fa-envelope' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Fondo oscuro + blur */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-40 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* NAVBAR SUPERIOR */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[#ec4d58]/20 rounded-b-2xl overflow-hidden">
        <div className="absolute inset-0 animate-light-wave z-0" />

        <nav className="relative w-full bg-[#121212]/90 backdrop-blur-md flex justify-between items-center px-6 py-3 max-w-full z-50">
          <div className="flex justify-between items-center max-w-7xl w-full mx-auto">

            {/* NAV DESKTOP */}
            <div className="hidden md:flex space-x-8 items-center z-10">
              {mainLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white hover:text-[#ec4d58] transition-colors flex items-center gap-2 font-semibold"
                >
                  <i className={`${icon}`}></i> {label}
                </Link>
              ))}
            </div>

            {/* BOTONES EXTRA DESKTOP */}
            <div className="hidden md:flex items-center space-x-6 z-10">
              <Link
                href="/game"
                className="relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-[#ec4d58] via-[#c6373e] to-[#ec4d58] px-5 py-2 shadow-lg text-white font-semibold text-sm transition-all hover:brightness-110 border border-[#ec4d58]"
              >
                <i className="fas fa-bolt"></i> The Siths Clash
              </Link>
              {user && (
                <>
                  <Link href="/perfil" className="text-white hover:text-[#ec4d58] font-semibold">
                    Perfil
                  </Link>
                  <button
                    onClick={logout}
                    className="text-white hover:text-[#ec4d58] font-semibold"
                  >
                    Cerrar Sesión
                  </button>
                </>
              )}
            </div>

            {/* NAV COLAPSADA MÓVIL */}
            <div className={clsx("md:hidden flex items-center justify-between w-full z-10 transition-opacity duration-300", {
              'opacity-0 pointer-events-none': isMobileMenuOpen,
              'opacity-100': !isMobileMenuOpen,
            })}>
              <div className="flex gap-4 items-center">
                {mainLinks.map(({ href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-white hover:text-[#ec4d58] text-xl"
                  >
                    <i className={icon}></i>
                  </Link>
                ))}
                <Link href="/game" className="text-[#ec4d58] hover:text-white text-xl">
                  <i className="fas fa-bolt"></i>
                </Link>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-4 text-white hover:text-[#ec4d58]"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* NAVBAR MÓVIL DESPLEGADA */}
      {isMobileMenuOpen && (
        <div
          className={clsx(
            'fixed top-0 left-0 right-0 z-[60] bg-[#1a1a1a]/95 backdrop-blur-md border-t border-[#ec4d58]/30 shadow-2xl animate-slideFadeInDown',
            'flex flex-col gap-4 px-6 pt-24 pb-8 min-h-screen'
          )}
        >
          {mainLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 text-white hover:text-[#ec4d58] text-lg px-4 py-2 rounded-md transition-all"
            >
              <i className={`${icon} text-2xl w-8 text-center`}></i>
              <span className="font-semibold tracking-wide">{label}</span>
            </Link>
          ))}

          <Link
            href="/game"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 bg-gradient-to-tr from-[#ec4d58] via-[#c6373e] to-[#ec4d58] text-white px-5 py-3 rounded-lg font-semibold border border-[#ec4d58] shadow-lg transition-all hover:brightness-110"
          >
            <i className="fas fa-bolt text-2xl w-8 text-center"></i>
            The Siths Clash
          </Link>

          {/* BOTÓN COLAPSAR */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 flex items-center justify-center text-white hover:text-[#ec4d58] text-sm gap-2 border border-[#ec4d58]/30 rounded-lg px-4 py-2 transition-all"
          >
            <i className="fas fa-chevron-up"></i> Cerrar Menú
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes lightWave {
          0% {
            transform: translateX(-100%);
            opacity: 0.1;
          }
          50% {
            transform: translateX(0%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.1;
          }
        }

        .animate-light-wave {
          background: radial-gradient(
            circle at 30% 50%,
            rgba(236, 77, 88, 0.1),
            transparent 60%
          );
          animation: lightWave 6s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes slideFadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideFadeInDown {
          animation: slideFadeInDown 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}
