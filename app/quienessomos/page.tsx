'use client';
// Eliminar esta línea:
import { useEffect } from 'react';
import '../styles/quienessomos.css';

export default function QuienesSomosPage() {
  return (
    <div className="content-container">
      <section className="curso-section">
        <h1>Nuestro Equipo</h1>
        <p className="team-intro">
          Somos un grupo diverso de profesionales apasionados por la educación financiera y el trading, unidos por el compromiso de empoderar a otros en su viaje hacia la independencia financiera.
        </p>

        {/* Grid de Nuestro Equipo */}
        <div className="services-grid">
          {/* Educadores Financieros */}
          <div className="service-card curso-card">
            <i className="fas fa-chalkboard-teacher service-icon"></i>
            <h3 className="service-title">Educadores Financieros</h3>
            <p className="service-description">
              Nuestros educadores combinan años de experiencia en los mercados financieros con una pasión por la enseñanza. Cada uno aporta su experiencia única en diferentes aspectos del trading.
            </p>
          </div>

          {/* Analistas de Mercado */}
          <div className="service-card curso-card">
            <i className="fas fa-chart-line service-icon"></i>
            <h3 className="service-title">Analistas de Mercado</h3>
            <p className="service-description">
              Contamos con analistas dedicados que monitorean constantemente los mercados globales, identificando oportunidades y tendencias, desde el análisis fundamental hasta el técnico.
            </p>
          </div>

          {/* Mentores */}
          <div className="service-card curso-card">
            <i className="fas fa-users service-icon"></i>
            <h3 className="service-title">Mentores</h3>
            <p className="service-description">
              Nuestros mentores son traders activos que han recorrido el camino del aprendizaje y ahora comparten sus conocimientos, ofreciendo apoyo personalizado.
            </p>
          </div>

          {/* Soporte al Cliente */}
          <div className="service-card curso-card">
            <i className="fas fa-handshake service-icon"></i>
            <h3 className="service-title">Soporte al Cliente</h3>
            <p className="service-description">
              Equipo dedicado a garantizar que tu experiencia de aprendizaje sea óptima, brindando asistencia y resolución de dudas de manera oportuna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}