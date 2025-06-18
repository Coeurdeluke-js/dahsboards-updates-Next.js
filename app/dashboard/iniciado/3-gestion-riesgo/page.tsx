'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import TimeZoneClock from '@/components/ui/TimeZoneClock';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function GestionRiesgoIntro() {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const timer = setTimeout(() => {
      localStorage.setItem('module3Unlocked', JSON.stringify(true));
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 pt-20">
        {/* Header */}
        <header className="card flex items-center justify-between gap-4">
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
          <div className="flex items-center gap-4">
            <TimeZoneClock />
            <ThemeToggle />
          </div>
        </header>

        <div className="card relative">
          <div className="absolute top-4 left-4">
            <BackButton />
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Gestión de Riesgo en Trading</h2>
            <p className="mb-4 text-lg">
              La gestión de riesgo es uno de los pilares más importantes para el éxito en el trading. No se trata solo de identificar buenas oportunidades, sino de proteger tu capital y mantener una estrategia sostenible a largo plazo.
            </p>
            <p className="mb-4 text-lg">
              <strong>¿Qué es la gestión de riesgo?</strong> Es el conjunto de estrategias y prácticas que utilizamos para minimizar las pérdidas potenciales y maximizar las ganancias de manera controlada.
            </p>
            <p className="mb-4 text-lg">
              <strong>Conceptos clave que aprenderás:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Tamaño de posición y exposición</li>
                <li>Stop Loss y Take Profit</li>
                <li>Ratio riesgo/beneficio</li>
                <li>Diversificación y correlación</li>
                <li>Gestión de capital y drawdown</li>
              </ul>
            </p>
            <p className="mb-4 text-lg">
              Este módulo te proporcionará las herramientas necesarias para desarrollar un enfoque disciplinado y sistemático en tu trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}