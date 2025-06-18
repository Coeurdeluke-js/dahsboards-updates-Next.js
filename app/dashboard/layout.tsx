'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RoleSelector from '@/components/layout/RoleSelector';

const getSidebarColor = (path: string) => {
  switch (true) {
    case path.includes('/iniciado'):
      return 'bg-[#fafafa] dark:bg-[#121212]';
    case path.includes('/acolito'):
      return 'bg-yellow-900';
    case path.includes('/warrior'):
      return 'bg-green-900';
    case path.includes('/lord'):
      return 'bg-blue-900';
    case path.includes('/darth'):
      return 'bg-red-900';
    case path.includes('/maestro'):
      return 'bg-[#121212]';
    default:
      return 'bg-gray-900';
  }
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const sidebarColor = getSidebarColor(pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (isNowMobile) {
        setIsSidebarOpen(false);
        setIsCollapsed(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.querySelector('nav');
      const toggleButton = document.querySelector('#sidebar-toggle');
      const collapseButton = document.querySelector('#collapse-toggle');
      if (
        isMobile &&
        isSidebarOpen &&
        sidebar &&
        !sidebar.contains(e.target as Node) &&
        toggleButton &&
        !toggleButton.contains(e.target as Node) &&
        collapseButton &&
        !collapseButton.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isSidebarOpen]);

  const menuItems = [
    { icon: 'fas fa-home', text: 'Inicio', href: '/dashboard/iniciado' },
    { icon: 'fas fa-compass', text: 'Explora la Academia', href: '#' },
    { icon: 'fas fa-user-graduate', text: 'Convertirse en Acólito', href: '#' },
    { icon: 'fas fa-calendar-alt', text: 'Eventos abiertos', href: '#' },
    { icon: 'fas fa-cog', text: 'Ajustes básicos', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {/* Mobile Toggle Button */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`md:hidden fixed top-4 ${isSidebarOpen ? 'left-64' : 'left-4'} z-20 p-2 rounded-lg bg-white dark:bg-[#1a1f2e] text-[#1a1f2e] dark:text-white shadow-lg transition-all duration-300`}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed left-0 h-full bg-white dark:bg-[#121212] shadow-xl z-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen 
            ? isCollapsed 
              ? 'w-16 translate-x-0' 
              : 'w-64 translate-x-0'
            : 'w-64 -translate-x-full md:translate-x-0 md:w-16'
        }`}
      >
        {/* Collapse Toggle */}
        <button
          id="collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`hidden md:block absolute top-4 -right-3 bg-white dark:bg-[#1a1f2e] border border-gray-300 dark:border-[#2e2e2e] rounded-full w-6 h-6 flex items-center justify-center text-[#1a1f2e] dark:text-white text-xs cursor-pointer transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#2a2f3d] shadow-md`}
        >
          <i className={`fas ${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>

        <div className="p-4 h-full flex flex-col overflow-y-auto text-[#121212] dark:text-[#fafafa]">
          {/* Logo */}
          <div className={`mb-8 ${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'text-center' : ''}`}>
            <div className={`logo transition-all duration-300 ${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'w-8 h-8 mx-auto' : 'w-32 h-8'}`}></div>
          </div>

          {/* Menu */}
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#121212] hover:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#121212] transition-colors group ${
                    (isCollapsed || (!isSidebarOpen && !isMobile)) ? 'justify-center' : ''
                  }`}
                  title={(isCollapsed || (!isSidebarOpen && !isMobile)) ? item.text : ''}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span className={`${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'hidden' : 'block'} group-hover:text-inherit transition-colors`}>
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Role Selector (opcional) */}
          {/* <div className={`mt-8 ${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'hidden' : 'block'}`}>
            <RoleSelector />
          </div> */}

          {/* User Links */}
          <div className="mt-auto pt-4 border-t border-gray-300 dark:border-[#2e2e2e]">
            <Link 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#121212] hover:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#121212] transition-colors ${
                (isCollapsed || (!isSidebarOpen && !isMobile)) ? 'justify-center' : ''
              }`}
              title={(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'Perfil' : ''}
            >
              <i className="fas fa-user text-lg"></i>
              <span className={`${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'hidden' : 'block'}`}>Perfil</span>
            </Link>
            <Link 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#121212] hover:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#121212] transition-colors ${
                (isCollapsed || (!isSidebarOpen && !isMobile)) ? 'justify-center' : ''
              }`}
              title={(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'Salir' : ''}
            >
              <i className="fas fa-sign-out-alt text-lg"></i>
              <span className={`${(isCollapsed || (!isSidebarOpen && !isMobile)) ? 'hidden' : 'block'}`}>Salir</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[5]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen 
            ? isCollapsed 
              ? 'ml-0 md:ml-16' 
              : 'ml-0 md:ml-64'
            : 'ml-0 md:ml-16'
        } p-4 md:p-8`}
      >
        <header className="mb-8">
          {children}
        </header>
      </main>
    </div>
  );
}
