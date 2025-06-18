'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const timeZones = [
  { label: 'España (Madrid)', value: 'Europe/Madrid' },
  { label: 'Argentina (Buenos Aires)', value: 'America/Argentina/Buenos_Aires' },
  { label: 'México (CDMX)', value: 'America/Mexico_City' },
  { label: 'Colombia (Bogotá)', value: 'America/Bogota' },
  { label: 'Chile (Santiago)', value: 'America/Santiago' },
  { label: 'Perú (Lima)', value: 'America/Lima' },
];

export default function TimeZoneClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedTimeZone') || timeZones[0].value;
    }
    return timeZones[0].value;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedTimeZone', selectedZone);
    }
  }, [selectedZone]);

  const formattedTime = new Intl.DateTimeFormat('es', {
    timeZone: selectedZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(currentTime);

  const formattedDate = format(currentTime, 'EEEE, d MMMM yyyy', {
    locale: es,
  });

  return (
    <div className="flex items-center gap-4">
      <select
        value={selectedZone}
        onChange={(e) => setSelectedZone(e.target.value)}
        className="bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec4d58] dark:focus:ring-opacity-50 text-[rgb(var(--foreground))]">
        {timeZones.map((zone) => (
          <option key={zone.value} value={zone.value} className="bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
            {zone.label}
          </option>
        ))}
      </select>
      <div className="text-sm">
        <div className="font-medium text-[rgb(var(--foreground))]">{formattedTime}</div>
        <div className="text-[rgb(var(--foreground))] opacity-80 capitalize">{formattedDate}</div>
      </div>
    </div>
  );
}