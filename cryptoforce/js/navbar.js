// Constants
const NAVBAR_CONTAINER = 'navbar-container';
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

// Función para cargar la navbar
async function loadNavbar() {
    const navbarContainer = document.getElementById(NAVBAR_CONTAINER);
    if (!navbarContainer) {
        console.error('Contenedor de navbar no encontrado');
        return;
    }

    try {
        // Determinar la ruta correcta basada en la ubicación actual
        const path = window.location.pathname;
        let navbarPath;
        let basePath = '';
        
        // Determinar si estamos en la raíz o en una subcarpeta
        if (path.includes('/components/')) {
            if (path.includes('/components/game/')) {
                // Si estamos en la carpeta game
                navbarPath = '../../components/navbar.html';
                basePath = '../..';
            } else {
                // Si estamos en la carpeta components pero no en game
                navbarPath = 'navbar.html';
                basePath = '..';
            }
        } else {
            // Si estamos en la raíz
            navbarPath = 'components/navbar.html';
            basePath = '.';
        }
        
        console.log('Cargando navbar desde:', navbarPath);
        console.log('Base path:', basePath);
        
        const response = await fetch(navbarPath);
        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }

        // Cargar el HTML de la navbar
        const html = await response.text();
        navbarContainer.innerHTML = html;
        
        // Ajustar todas las rutas de la navbar según la ubicación actual
        const allLinks = navbarContainer.querySelectorAll('a');
        
        allLinks.forEach(link => {
            let href = link.getAttribute('href');
            
            // No modificar enlaces externos o con hash
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                // Ajustar enlaces según la ubicación actual
                if (path.includes('/components/game/')) {
                    // Si estamos en game
                    if (href === '../index.html') {
                        link.setAttribute('href', '../../index.html');
                    } else if (href.startsWith('game/')) {
                        link.setAttribute('href', href.replace('game/', ''));
                    } else if (!href.includes('/')) {
                        // Enlaces a archivos en la misma carpeta
                        link.setAttribute('href', '../' + href);
                    }
                } else if (path.includes('/components/')) {
                    // Si estamos en components pero no en game
                    // Los enlaces ya están correctos para esta ubicación
                } else {
                    // Si estamos en la raíz
                    if (href === '../index.html') {
                        link.setAttribute('href', 'index.html');
                    } else if (!href.includes('/')) {
                        link.setAttribute('href', 'components/' + href);
                    } else if (href.startsWith('game/')) {
                        link.setAttribute('href', 'components/' + href);
                    }
                }
            }
        });
        
        // Configurar específicamente el botón The Sith Clash
        const sithClashDesktop = document.querySelector('.sith-clash-button');
        const sithClashMobile = document.querySelector('.mobile-sith-expanded');
        
        if (sithClashDesktop && sithClashMobile) {
            // Determinar la ruta correcta para el botón The Sith Clash
            let gamePath;
            
            if (path.includes('/components/game/')) {
                gamePath = 'index.html'; // Ya estamos en la carpeta game
            } else if (path.includes('/components/')) {
                gamePath = 'game/index.html'; // Estamos en components pero no en game
            } else {
                gamePath = 'components/game/index.html'; // Estamos en la raíz
            }
            
            sithClashDesktop.setAttribute('href', gamePath);
            sithClashMobile.setAttribute('href', gamePath);
            
            console.log('Ruta de The Sith Clash ajustada a:', gamePath);
        }
        
        // Configurar el toggle para la navbar móvil
        const mobileToggle = document.querySelector('.mobile-toggle');
        const mobileExpanded = document.querySelector('.mobile-expanded');
        const mobileNavbar = document.querySelector('.mobile-navbar');
        const closeMenu = document.querySelector('.close-menu');
        
        if (mobileToggle && mobileExpanded && mobileNavbar) {
            mobileToggle.addEventListener('click', () => {
                console.log('Toggle clicked'); // Para depuración
                mobileExpanded.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Evitar scroll
            });
        }
        
        if (closeMenu && mobileExpanded) {
            closeMenu.addEventListener('click', () => {
                console.log('Close clicked'); // Para depuración
                mobileExpanded.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restaurar scroll
            });
        }
        
        // Cerrar menú al hacer clic en cualquier enlace
        const menuLinks = document.querySelectorAll('.mobile-expanded a');
        if (menuLinks.length > 0 && mobileExpanded) {
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileExpanded.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            });
        }
        
        console.log('Navbar cargada correctamente');
    } catch (error) {
        console.error('Error al cargar la navbar:', error);
        retryLoadNavbar(1);
    }
}

// Función para reintentar la carga de la navbar
function retryLoadNavbar(attempt) {
    if (attempt <= RETRY_ATTEMPTS) {
        console.log(`Reintentando cargar navbar (intento ${attempt} de ${RETRY_ATTEMPTS})...`);
        setTimeout(() => {
            loadNavbar();
        }, RETRY_DELAY);
    } else {
        console.error(`No se pudo cargar la navbar después de ${RETRY_ATTEMPTS} intentos.`);
    }
}

// Inicializar navbar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando navbar...');
    loadNavbar();
});