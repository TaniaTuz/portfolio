import { Component, HostListener, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';


@Component({
    selector: 'app-main-layout',
    templateUrl: 'main-layout.component.html',
    styleUrls: ['main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor() {
        this.isDarkTheme = false;
    }

    /**
     * Método de ciclo de vida de Angular que se ejecuta al inicializar el componente.
     * Recupera el tema guardado en el almacenamiento local y aplica el tema correspondiente.
     * También configura la función para actualizar el enlace de navegación activo al cargar el componente.
     */
    ngOnInit() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.isDarkTheme = savedTheme === 'dark';
            this.applyTheme();
        }
        this.setActiveNavLink();

        const sr = ScrollReveal(
            {
                reset: true,
                distance: '60px',
                duration: 2500,
                delay: 100
            }
        );

        sr.reveal('.home .info h2, .section-title-01, .section-title-02', {delay: 500, origin: 'left'});
        sr.reveal('.home .info h3, .home .info p, .media-icons a, .about-info .btn', {delay: 600, origin: 'right'});
        sr.reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
        sr.reveal('.contact-left li', {delay: 500, origin: 'left', interval: 200});
        sr.reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
        sr.reveal('.scroll-down, .about .description, .contact-right', {delay: 600, origin: 'right'});
        sr.reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
        sr.reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', {
            delay: 700,
            origin: 'left'
        });
        sr.reveal('.skill-category h4, .card, .experience-card, .service-card, .education, .portfolio .img-card', {
            delay: 800,
            origin: 'bottom',
            interval: 200
        });
        sr.reveal('footer .group', {delay: 500, origin: 'top', interval: 200});
    }

    /**
     * Escucha el evento de desplazamiento de la ventana para mostrar u ocultar el botón "scrollToTop"
     * y actualizar el enlace de navegación activo en función del desplazamiento de la ventana.
     */
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollToToBtn = document.querySelector('.scrollToTop-btn');
        if (scrollToToBtn) {
            scrollToToBtn.classList.toggle('active', window.scrollY > 500);
        }
        this.setActiveNavLink();
    }

    /**
     * Desplaza la ventana hacia arriba de manera suave.
     */
    scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    /**
     * Cambia el tema entre claro y oscuro.
     * Alterna el valor de `isDarkTheme` y aplica el tema correspondiente.
     * Guarda el tema actual en el almacenamiento local.
     */
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }

    /**
     * Aplica el tema oscuro o claro en función del valor de `isDarkTheme`.
     * Añade o elimina la clase `dark-theme` en el elemento raíz del documento.
     */
    applyTheme() {
        if (this.isDarkTheme) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    }


    /**
     * Actualiza el estado activo de los enlaces de navegación en función del desplazamiento de la ventana.
     * Marca el enlace correspondiente a la sección visible en la ventana.
     */
    setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-items a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}
