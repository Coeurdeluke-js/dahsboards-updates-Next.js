'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import BackButton from '@/components/ui/BackButton';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AnalisisBasicoIntro() {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
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
          <div className="flex items-center gap-6">
            <TimeZoneClock />
            <ThemeToggle />
          </div>
        </header>

        <div className="card relative">
          <div className="absolute top-4 left-4">
            <BackButton />
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ec4d58]">Introducción al Análisis Básico</h2>
            <p className="mb-4 text-lg">
              El análisis de mercados crypto requiere comprender tanto el análisis técnico como el fundamental. Estas herramientas te ayudarán a tomar decisiones más informadas en el trading.
            </p>
            <p className="mb-4 text-lg">
              <strong>¿Qué es el análisis técnico?</strong> Es el estudio de los movimientos del precio y volumen históricos para identificar patrones y tendencias. Utilizamos gráficos, indicadores y herramientas estadísticas para predecir posibles movimientos futuros.
            </p>
            <p className="mb-4 text-lg">
              <strong>¿Por qué es importante?</strong> El análisis técnico te permite:
            </p>
            <ul className="list-disc pl-8 mb-4 text-lg space-y-2">
              <li>Identificar tendencias y puntos de entrada/salida</li>
              <li>Gestionar el riesgo de manera efectiva</li>
              <li>Tomar decisiones basadas en datos, no en emociones</li>
              <li>Comprender el sentimiento del mercado</li>
            </ul>
            <p className="mb-4 text-lg">
              En este módulo, aprenderás los conceptos fundamentales del análisis técnico: soportes y resistencias, tendencias, patrones de velas, indicadores básicos y cómo combinarlos para crear tu propia estrategia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}