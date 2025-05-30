// ZWTC 2025 Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
  // Animación de entrada para elementos de la sección ZWTC
  const zwtcElements = document.querySelectorAll('.zwtc-benefits, .zwtc-dates, .zwtc-considerations, .zwtc-video, .zwtc-opportunity');
  
  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Función para animar elementos cuando entran en el viewport
  function animateOnScroll() {
    zwtcElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Aplicar estilos iniciales
  zwtcElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Ejecutar animación al cargar y al hacer scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Efecto hover para el botón CTA
  const ctaButton = document.querySelector('.zwtc-cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#f57c00';
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 6px 15px rgba(255, 152, 0, 0.4)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
      this.style.backgroundColor = '#ff9800';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 10px rgba(255, 152, 0, 0.3)';
    });
  }
});