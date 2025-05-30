'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Controlar scroll del body
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div id="navbar-container">
      <nav className="navbar">
        {/* Desktop Navbar */}
        <div className="desktop-navbar">
          <div className="navbar-links">
            <Link href="/"><i className="fas fa-home"></i> Home</Link>
            <Link href="/intro"><i className="fas fa-info-circle"></i> Introducción</Link>
            <Link href="/quienessomos"><i className="fas fa-users"></i> Quiénes Somos</Link>
            <Link href="/servicios"><i className="fas fa-cogs"></i> Servicios</Link>
            <Link href="/contacto"><i className="fas fa-envelope"></i> Contacto</Link>
          </div>
          
          <div className="navbar-right">
            <Link href="/game" className="sith-clash-button">
              <i className="fas fa-bolt"></i> The Siths Clash
            </Link>
            {user && (
              <div className="user-menu">
                <Link href="/perfil">Perfil</Link>
                <button onClick={logout}>Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Navbar */}
        <div className="mobile-navbar">
          <Link href="/"><i className="fas fa-home"></i></Link>
          <Link href="/intro"><i className="fas fa-info-circle"></i></Link>
          <Link href="/quienessomos"><i className="fas fa-users"></i></Link>
          <Link href="/servicios"><i className="fas fa-cogs"></i></Link>
          <Link href="/contacto"><i className="fas fa-envelope"></i></Link>
          <button 
            id="mobile-menu-toggle" 
            className="mobile-toggle"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Mobile Expanded Menu */}
        <div 
          className="mobile-expanded" 
          style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
        >
          <button className="close-menu" onClick={closeMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
          <Link href="/" onClick={closeMobileMenu}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link href="/intro" onClick={closeMobileMenu}>
            <i className="fas fa-info-circle"></i> Introducción
          </Link>
          <Link href="/quienessomos" onClick={closeMobileMenu}>
            <i className="fas fa-users"></i> Quiénes Somos
          </Link>
          <Link href="/servicios" onClick={closeMobileMenu}>
            <i className="fas fa-cogs"></i> Servicios
          </Link>
          <Link href="/contacto" onClick={closeMobileMenu}>
            <i className="fas fa-envelope"></i> Contacto
          </Link>
          <Link href="/game" className="mobile-sith-expanded" onClick={closeMobileMenu}>
            <i className="fas fa-bolt"></i> The Siths Clash
          </Link>
        </div>
      </nav>
    </div>
  );
}