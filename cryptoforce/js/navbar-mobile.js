// Script para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
  console.log("Script de navbar-mobile cargado");
  
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileExpanded = document.querySelector('.mobile-expanded');
  const closeMenu = document.querySelector('.close-menu');
  
  // Verificar que los elementos existan
  console.log('Mobile menu toggle:', mobileMenuToggle);
  console.log('Mobile expanded:', mobileExpanded);
  console.log('Close menu:', closeMenu);
  
  // Abrir menú
  if (mobileMenuToggle && mobileExpanded) {
    mobileMenuToggle.addEventListener('click', function(e) {
      console.log('Toggle menu clicked');
      e.preventDefault();
      mobileExpanded.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evitar scroll
    });
  }
  
  // Cerrar menú - Asegurarse de que este evento funcione
  if (closeMenu && mobileExpanded) {
    closeMenu.addEventListener('click', function(e) {
      console.log('Close menu clicked');
      e.preventDefault();
      mobileExpanded.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaurar scroll
    });
  }
  
  // Cerrar menú al hacer clic en cualquier enlace del menú
  const menuLinks = document.querySelectorAll('.mobile-expanded a');
  if (menuLinks.length > 0 && mobileExpanded) {
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileExpanded.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    });
  }
  
  // Cerrar menú al presionar la tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileExpanded && mobileExpanded.style.display === 'flex') {
      mobileExpanded.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});