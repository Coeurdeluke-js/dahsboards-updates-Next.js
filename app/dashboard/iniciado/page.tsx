'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ThemeToggle from '@/components/ui/ThemeToggle';
import TimeZoneClock from '@/components/ui/TimeZoneClock';

// Definir los tips antes de usarlos
const tips = [
  "Mantén un diario de trading para registrar tus operaciones",
  "Establece límites claros de pérdidas antes de operar",
  "No inviertas más de lo que puedas permitirte perder",
  "Estudia el análisis técnico y fundamental",
  "La paciencia es clave en el trading",
  "El miedo es el camino hacia el lado oscuro del trading...",
  "La paciencia es la clave del éxito en el trading...",
  "El conocimiento es poder en el mundo crypto...",
  "La disciplina es el puente entre metas y logros..."
];

// Función para normalizar texto
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// Función para obtener el mensaje de desbloqueo
const getUnlockMessage = (index) => {
  switch(index) {
    case 1:
      return "Completa el módulo 1 para desbloquear este módulo";
    case 2:
      return "Completa el módulo 2 para desbloquear este módulo";
    case 3:
      return "Completa el módulo 3 para desbloquear este módulo";
    default:
      return "Completa el módulo anterior para desbloquear este módulo";
  }
};

const IniciadoDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [moduleUnlocked, setModuleUnlocked] = useState(() => {
    if (typeof window !== 'undefined') {
      const module2Unlocked = localStorage.getItem('moduleUnlocked');
      const module3Unlocked = localStorage.getItem('module3Unlocked');
      return {
        module2: module2Unlocked ? JSON.parse(module2Unlocked) : false,
        module3: module3Unlocked ? JSON.parse(module3Unlocked) : false
      };
    }
    return { module2: false, module3: false };
  });
  const [tipDelDia, setTipDelDia] = useState('');
  const checklistOrder = [
    { key: 'perfil', label: 'Crea tu perfil' },
    { key: 'video', label: 'Ver primer video' },
    { key: 'quiz', label: 'Completa tu primer quiz' }
  ];
  const [checklist, setChecklist] = useState({ perfil: true, video: false, quiz: false });
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const videoRef = useRef(null);
  const [watched, setWatched] = useState<number[]>([]);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTipDelDia(randomTip);
  }, [supabase]);

  const progress = (Object.values(checklist).filter(Boolean).length / Object.keys(checklist).length) * 100;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-[rgb(var(--background))] text-[rgb(var(--foreground))] overflow-hidden">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ec4d58]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 pt-20">
        {/* HEADER */}
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

        {/* BIENVENIDA */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">🌟 Bienvenido a la Academia Crypto Force</h2>
          <div className="aspect-video relative mb-4 shadow-2xl rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full rounded"
              controls
              poster="/images/intro-poster.png"
              preload="metadata"
              onTimeUpdate={e => {
                const video = e.target as HTMLVideoElement;
                const current = Math.floor(video.currentTime);
                setWatched(prev => prev.includes(current) ? prev : [...prev, current]);
                if (video.duration && watched.length / video.duration > 0.98 && !checklist.video) {
                  setChecklist(prev => ({ ...prev, video: true }));
                }
              }}
            >
              <source src="/images/intro.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <p>Tu viaje hacia el dominio del trading comienza aquí.</p>
        </div>

        {/* MODULOS */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">📘 Módulos de Exploración</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {["Fundamentos Crypto", "Análisis Básico", "Gestión de Riesgo", "Psicología"].map((modulo, index) => {
              const isUnlocked = index === 0 || 
                (index === 1 && moduleUnlocked.module2) || 
                (index === 2 && moduleUnlocked.module3);

              return (
                <div key={index} 
                     className={`module-card p-4 rounded-lg shadow-md relative group ${isUnlocked ? 'bg-white dark:bg-[#232323] border-2 border-[#ec4d58] cursor-pointer' : 'bg-gray-200 dark:bg-[#181818] opacity-60 cursor-not-allowed'}`}>
                  <h3 className="font-semibold">{modulo}</h3>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {`Módulo ${index + 1} - ${isUnlocked ? 'Desbloqueado' : 'Bloqueado'}`}
                  </p>
                  {isUnlocked ? (
                    <a 
                      href={`/dashboard/iniciado/${index + 1}-${normalizeText(modulo)}`} 
                      className="mt-2 text-[#ec4d58] underline block"
                    >
                      Ver introducción
                    </a>
                  ) : (
                    <div className="absolute left-1/2 top-full mt-2 z-10 bg-black bg-opacity-80 text-white text-xs rounded px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-56 -translate-x-1/2">
                      {getUnlockMessage(index)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {showIntro && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-[#232323] p-8 rounded-lg shadow-xl max-w-lg w-full relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white" onClick={() => setShowIntro(false)}>&times;</button>
                <h3 className="text-lg font-bold mb-2">Introducción a Fundamentos Crypto</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Aquí puedes colocar una breve lectura introductoria sobre los conceptos básicos de las criptomonedas, blockchain, y su importancia en el mundo financiero moderno...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CHECKLIST Y PROGRESO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-bold mb-4">🌱 Primeros Pasos</h2>
            <div className="space-y-3">
              {checklistOrder.map(({ key, label }) => (
                <div key={key} className="flex items-center space-x-3 relative group">
                  <input
                    type="checkbox"
                    checked={checklist[key as keyof typeof checklist]}
                    onChange={key === 'video' ? undefined : () => setChecklist(prev => ({ ...prev, [key]: !prev[key as keyof typeof checklist] }))}
                    readOnly={key === 'video'}
                    className={`form-checkbox h-5 w-5 text-[#ec4d58] rounded border-gray-400 dark:border-gray-600 bg-transparent ${key === 'video' ? 'cursor-not-allowed' : ''}`}
                  />
                  <span className="font-medium">{label}</span>
                  {key === 'video' && !checklist.video && (
                    <div className="absolute left-8 top-full mt-2 z-10 bg-black bg-opacity-80 text-white text-xs rounded px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-56">
                      Debes ver el video completo para tildar este paso. No es posible marcarlo manualmente.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold mb-4">🎖️ Progreso hacia Acólito</h2>
            <div className="progress-bar bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
              <div className="progress-fill bg-[#ec4d58] h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="mt-2 font-medium">{progress.toFixed(2)}% completado</p>
          </div>
        </div>

        {/* TIP DEL DÍA */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">🧠 ¿Sabías que...?</h2>
          <p className="italic text-gray-700 dark:text-gray-300">{tipDelDia}</p>
        </div>
      </div>
    </div>
  );
};

export default IniciadoDashboard;
