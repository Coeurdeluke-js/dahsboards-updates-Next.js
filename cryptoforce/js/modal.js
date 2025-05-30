// Script para el funcionamiento del modal
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona los elementos del DOM
  const modal = document.getElementById('accessModal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  // Verificar que los elementos existan antes de agregar event listeners
  if (openModalBtn && modal) {
    // Abre el modal cuando se hace clic en el botón "Accede a tu Cuenta"
    openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Evita el desplazamiento del fondo
    });
  }
  
  if (closeModalBtn) {
    // Cierra el modal cuando se hace clic en la X
    closeModalBtn.addEventListener('click', function() {
      closeModal();
    });
  }
  
  // Cierra el modal si se hace clic fuera del contenido
  if (modal) {
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // Cierra el modal con la tecla Escape
  if (modal) {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  }
  
  // Función para cerrar el modal
  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura el desplazamiento
    }
  }
});