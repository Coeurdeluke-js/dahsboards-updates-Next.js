'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeToggle() {
  const pathname = usePathname();
  const isIniciado = pathname.includes('/iniciado');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let shouldBeDark = false;
    if (isIniciado) {
      shouldBeDark = false; // SIEMPRE modo claro en Iniciado
      localStorage.setItem('theme', 'light');
    } else {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isIniciado]);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-[var(--hover-bg)]"
      title="Cambiar tema"
    >
      <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}