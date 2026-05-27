// ============================================
// LUCIA BENITEZ - RETRO PORTFOLIO v2.0
// Script de Interactividad
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ========== HAMBURGER MENU ==========
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ========== NAVBAR ACTIVE LINK ==========
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ========== FORM SUBMISSION ==========
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            if (name && email && message) {
                // Simulación de envío
                const submitBtn = this.querySelector('.btn-submit');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = '→ ENVIADO ✓';
                submitBtn.style.pointerEvents = 'none';
                submitBtn.style.opacity = '0.6';
                
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.pointerEvents = 'auto';
                    submitBtn.style.opacity = '1';
                }, 2000);
            } else {
                alert('Por favor completa todos los campos');
            }
        });
    }
    
    // ========== SMOOTH SCROLL LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========== CONTACT BUTTON CLICK ==========
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ========== TERMINAL ACTION BUTTONS ==========
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    
    // Botón ENVIAR MENSAJE
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Botón DESCARGAR CV
    if (btnSecondary) {
        btnSecondary.addEventListener('click', function() {
            // Descargar el archivo LuciaBenitezCV.pdf
            const cvLink = document.createElement('a');
            cvLink.href = 'LuciaBenitezCV.pdf';
            cvLink.download = 'Lucia_Benitez_CV.pdf';
            cvLink.click();
        });
    }
    
    console.log('🎮 Retro Portfolio v2.0 Inicializado');
});
// ═══════════════════════════════
// DIAGNOSTICS TABS
// ═══════════════════════════════

document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.diagnostics-tab');
    const contents = document.querySelectorAll('.tabs-content');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {

            // 1. Sacar active de todos los tabs
            tabs.forEach(function(t) { t.classList.remove('active'); });

            // 2. Sacar active de todos los contenidos
            contents.forEach(function(c) { c.classList.remove('active'); });

            // 3. Poner active en el tab clickeado
            tab.classList.add('active');

            // 4. Mostrar el contenido correspondiente
            const target = tab.getAttribute('data-tab');
            const targetContent = document.querySelector('[data-content="' + target + '"]');
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // 5. Animar las barras del tab nuevo desde 0
            if (targetContent) {
                const bars = targetContent.querySelectorAll('.skill-bar');
                bars.forEach(function(bar) {
                    const finalWidth = bar.style.width;
                    bar.style.width = '0%';
                    bar.style.transition = 'none';
                    setTimeout(function() {
                        bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
                        bar.style.width = finalWidth;
                    }, 50);
                });
            }
        });
    });

    // Animar barras del tab inicial (frontend) al cargar la página
    const initialContent = document.querySelector('.tabs-content.active');
    if (initialContent) {
        const bars = initialContent.querySelectorAll('.skill-bar');
        bars.forEach(function(bar) {
            const finalWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(function() {
                bar.style.width = finalWidth;
            }, 300);
        });
    }

});