'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay - Black background that covers the entire screen */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden" />
      )}

      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 py-3">
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-home mr-2"></i> Home
              </Link>
              <Link href="/intro" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-info-circle mr-2"></i> Introducción
              </Link>
              <Link href="/quienessomos" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-users mr-2"></i> Quiénes Somos
              </Link>
              <Link href="/servicios" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-cogs mr-2"></i> Servicios
              </Link>
              <Link href="/contacto" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-envelope mr-2"></i> Contacto
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/game" className="bg-[#ec4d58] text-white px-4 py-2 rounded-lg hover:bg-[#d93f4a] transition-colors">
                <i className="fas fa-bolt mr-2"></i> The Siths Clash
              </Link>
              {user && (
                <div className="flex items-center space-x-4">
                  <Link href="/perfil" className="text-white hover:text-[#ec4d58] transition-colors">Perfil</Link>
                  <button 
                    onClick={logout}
                    className="text-white hover:text-[#ec4d58] transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-home text-xl"></i>
              </Link>
              <Link href="/intro" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-info-circle text-xl"></i>
              </Link>
              <Link href="/quienessomos" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-users text-xl"></i>
              </Link>
              <Link href="/servicios" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-cogs text-xl"></i>
              </Link>
              <Link href="/contacto" className="text-white hover:text-[#ec4d58] transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </Link>
              <Link href="/game" className="text-[#ec4d58] hover:text-white transition-colors">
                <i className="fas fa-bolt text-xl"></i>
              </Link>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#ec4d58] transition-colors ml-4"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>

          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="absolute inset-x-0 top-full z-50 md:hidden">
              <div className="bg-[#121212] border-t border-white/10">
                <div className="flex flex-col items-center space-y-6 py-8">
                  <Link 
                    href="/" 
                    className="text-white text-xl hover:text-[#ec4d58] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-home text-xl"></i> Home
                  </Link>
                  <Link 
                    href="/intro" 
                    className="text-white text-xl hover:text-[#ec4d58] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-info-circle text-xl"></i> Introducción
                  </Link>
                  <Link 
                    href="/quienessomos" 
                    className="text-white text-xl hover:text-[#ec4d58] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-users text-xl"></i> Quiénes Somos
                  </Link>
                  <Link 
                    href="/servicios" 
                    className="text-white text-xl hover:text-[#ec4d58] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-cogs text-xl"></i> Servicios
                  </Link>
                  <Link 
                    href="/contacto" 
                    className="text-white text-xl hover:text-[#ec4d58] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-envelope text-xl"></i> Contacto
                  </Link>
                  <Link 
                    href="/game" 
                    className="bg-[#ec4d58] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#d93f4a] transition-colors flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-bolt text-xl"></i> The Siths Clash
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}