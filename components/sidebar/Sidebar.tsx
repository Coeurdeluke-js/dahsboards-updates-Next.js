'use client';

import { useSidebar } from '@/components/sidebar/SidebarContext';
import Image from 'next/image';

export default function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const menuItems = [
    { icon: 'fas fa-home', text: 'Dashboard', href: '/' },
    { icon: 'fas fa-book', text: 'Módulos', href: '/modulos' },
    { icon: 'fas fa-chart-line', text: 'Análisis', href: '/analisis' },
    { icon: 'fas fa-tools', text: 'Herramientas', href: '/herramientas' },
    { icon: 'fas fa-users', text: 'Comunidad', href: '/comunidad' },
    { icon: 'fas fa-cog', text: 'Configuración', href: '/configuracion' },
  ];

  return (
    <aside className={`sidebar relative z-10 pt-20 bg-gradient-to-b from-[#fafafa] to-[#e0e0e0] dark:from-[#121212] dark:to-[#232323] ${isCollapsed ? 'collapsed' : ''}`}>

      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="sidebar-toggle"
        aria-label={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
      >
        <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
      </button>

      {/* Logo */}
      <div className={`logo mb-8 pt-6 ${isCollapsed ? 'mx-auto' : ''}`} style={{ width: isCollapsed ? 32 : 128, height: 40 }}>
  <span className="block dark:hidden">
    <Image src="/logo-white-theme.png" alt="Logo Light" width={isCollapsed ? 32 : 128} height={40} priority />
  </span>
  <span className="hidden dark:block">
    <Image src="/logo.png" alt="Logo Dark" width={isCollapsed ? 32 : 128} height={40} priority />
  </span>
</div>


      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="sidebar-item flex items-center group">
                <i className={`${item.icon} text-lg ${isCollapsed ? '' : 'mr-3'}`}></i>
                <span className={`${isCollapsed ? 'hidden' : 'block'} group-hover:text-[#ec4d58] transition-colors`}>
                  {item.text}
                </span>
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="mt-auto pt-4 border-t border-[#2e2e2e]">
        <div className="sidebar-item">
          <i className="fas fa-user text-lg"></i>
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Perfil</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-sign-out-alt text-lg"></i>
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Salir</span>
        </div>
      </div>
    </aside>
  );
}