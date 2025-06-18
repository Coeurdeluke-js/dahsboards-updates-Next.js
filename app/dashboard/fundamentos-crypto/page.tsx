'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function FundamentosCryptoIntro() {
  useEffect(() => {
    // Iniciar el contador de 10 segundos cuando el usuario está en la página
    const timer = setTimeout(() => {
      localStorage.setItem('moduleUnlocked', 'true');
      // Opcional: Actualizar el estado local si quieres mostrar algún feedback
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const [user, setUser] = useState(null);
  const [hasRead, setHasRead] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Iniciar el contador de 10 segundos cuando el usuario está en la página
    const timer = setTimeout(() => {
      setHasRead(true);
      // Aquí puedes agregar la lógica para actualizar el estado global
      // o hacer una llamada a la API para desbloquear el módulo 2
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 pt-20">
        {/* Header idéntico al dashboard */}
        <header className="card flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
              <Image 
                src={user?.user_metadata?.avatar_url || "/images/default-avatar.png"} 
                alt="Avatar" 
                width={64} 
                height={64} 
                className="rounded-full" 
                priority 
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user?.email || 'Iniciado'}</h1>
              <p className="text-gray-600 dark:text-gray-400">Rango: Iniciado</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <div className="card relative">
          <div className="absolute top-4 left-4">
            <BackButton />
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Introducción a los Fundamentos Crypto</h2>
            <p className="mb-4 text-lg">
              Las criptomonedas han revolucionado el mundo financiero al introducir un sistema descentralizado, seguro y transparente. El blockchain, la tecnología detrás de las criptomonedas, permite registrar transacciones de manera inmutable y sin intermediarios.
            </p>
            <p className="mb-4 text-lg">
              <strong>¿Qué es una criptomoneda?</strong> Es un activo digital que utiliza criptografía para asegurar las transacciones y controlar la creación de nuevas unidades. Bitcoin fue la primera, pero hoy existen miles de criptomonedas con diferentes propósitos y tecnologías.
            </p>
            <p className="mb-4 text-lg">
              <strong>¿Por qué es importante?</strong> Las criptomonedas ofrecen libertad financiera, acceso global, y la posibilidad de participar en una economía digital sin fronteras. Sin embargo, también implican riesgos y requieren educación para operar de forma segura.
            </p>
            <p className="mb-4 text-lg">
              En este módulo aprenderás los conceptos clave: blockchain, wallets, exchanges, seguridad, y cómo empezar tu camino en el mundo crypto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}