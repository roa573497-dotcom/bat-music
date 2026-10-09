document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. LÓGICA DEL MENÚ DESPLEGABLE (HAMBURGUESA)
    // ==========================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (menuToggle && navMenu) {
        // Abrir / Cerrar menú al presionar el botón
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            // Cambia el ícono de hamburguesa (☰) a equis (✕) y viceversa
            menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
        });

        // Cerrar menú al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });

        // Cerrar menú al hacer clic fuera de él (en el overlay oscuro)
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                menuToggle.textContent = '☰';
            }
        });
    }

    // ==========================================================================
    // 2. LÓGICA DEL SLIDER
    // ==========================================================================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider__dot');
    const prevBtn = document.querySelector('.slider__arrow--prev');
    const nextBtn = document.querySelector('.slider__arrow--next');
    let currentSlide = 0;

    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        if (slides.length === 0) return;
        
        // Quitar clase active de todos
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        // Agregar clase active al actual
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
    }

    // Funciones para avanzar y retroceder
    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    // Event listeners para los botones
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event listeners para los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Autoplay: cambiar diapositiva cada 5 segundos
    setInterval(nextSlide, 5000);
});