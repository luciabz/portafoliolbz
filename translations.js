// Traducciones para el portfolio
const translations = {
  es: {
    // Navbar
    navbar: {
      inicio: "// INICIO",
      proyectos: "// PROYECTOS",
      skills: "// SKILLS",
      contacto: "// CONTACTO"
    },
    // Hero Section
    hero: {
      terminal: "Bienvenido a Lucia Benitez Portfolio",
      role: "Role:",
      roleValue: "Web Developer",
      location: "Locacion:",
      locationValue: "Argentina",
      specialization: "Especialización:",
      specializationValue: "Frontend & Design",
      description: "Creando experiencias digitales innovadoras desde la nostalgia del código retro. Apasionada por HTML5, CSS3, JavaScript y diseño responsivo con sabor vintage.",
      button: "→ ENVIAR MENSAJE"
    },
    // Projects Section
    projects: {
      title: "PROYECTOS",
      project1Title: "Proyecto 1",
      project1Desc: "Aplicación web interactiva que demuestra habilidades en JavaScript y diseño responsivo con estética retro.",
      project2Title: "Proyecto 2",
      project2Desc: "Plataforma full-stack con backend integrado, demostrando experiencia en desarrollo completo.",
      project3Title: "Proyecto 3",
      project3Desc: "Aplicación móvil responsiva con características avanzadas y optimización de rendimiento máximo.",
      viewProject: "→ Ver Proyecto"
    },
    // Skills Section
    skills: {
      title: "HABILIDADES TÉCNICAS",
      frontend: "FRONTEND",
      backend: "BACKEND",
      tools: "HERRAMIENTAS",
      databases: "Bases de Datos"
    },
    // Contact Section
    contact: {
      title: "CONTACTO",
      terminal: "$ CONTACT_FORM.EXE",
      nameLabel: "❯ nombre:",
      namePlaceholder: "Tu nombre",
      emailLabel: "❯ email:",
      emailPlaceholder: "tu@email.com",
      messageLabel: "❯ mensaje:",
      messagePlaceholder: "Tu mensaje aquí...",
      send: "→ ENVIAR"
    },
    // Footer
    footer: {
      copyright: "© 2024 Lucia Benitez | Retro Portfolio v2.0",
      github: "GH",
      linkedin: "LI",
      twitter: "TW"
    }
  },
  en: {
    // Navbar
    navbar: {
      inicio: "// HOME",
      proyectos: "// PROJECTS",
      skills: "// SKILLS",
      contacto: "// CONTACT"
    },
    // Hero Section
    hero: {
      terminal: "Welcome to Lucia Benitez Portfolio",
      role: "Role:",
      roleValue: "Web Developer",
      location: "Location:",
      locationValue: "Argentina",
      specialization: "Specialization:",
      specializationValue: "Frontend & Design",
      description: "Creating innovative digital experiences from the nostalgia of retro code. Passionate about HTML5, CSS3, JavaScript and responsive design with vintage flavor.",
      button: "→ SEND MESSAGE"
    },
    // Projects Section
    projects: {
      title: "PROJECTS",
      project1Title: "Project 1",
      project1Desc: "Interactive web application demonstrating JavaScript skills and responsive design with retro aesthetics.",
      project2Title: "Project 2",
      project2Desc: "Full-stack platform with integrated backend, demonstrating complete development experience.",
      project3Title: "Project 3",
      project3Desc: "Responsive mobile application with advanced features and maximum performance optimization.",
      viewProject: "→ View Project"
    },
    // Skills Section
    skills: {
      title: "TECHNICAL SKILLS",
      frontend: "FRONTEND",
      backend: "BACKEND",
      tools: "TOOLS",
      databases: "Databases"
    },
    // Contact Section
    contact: {
      title: "CONTACT",
      terminal: "$ CONTACT_FORM.EXE",
      nameLabel: "❯ name:",
      namePlaceholder: "Your name",
      emailLabel: "❯ email:",
      emailPlaceholder: "your@email.com",
      messageLabel: "❯ message:",
      messagePlaceholder: "Your message here...",
      send: "→ SEND"
    },
    // Footer
    footer: {
      copyright: "© 2024 Lucia Benitez | Retro Portfolio v2.0",
      github: "GH",
      linkedin: "LI",
      twitter: "TW"
    }
  }
};

// Obtener idioma actual del localStorage o usar español por defecto
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'es';
}

// Cambiar idioma
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage(lang);
}

// Aplicar traducciones al DOM
function applyLanguage(lang) {
  const trans = translations[lang];

  // Navbar
  document.querySelector('a[href="#hero"]').textContent = trans.navbar.inicio;
  document.querySelector('a[href="#projects"]').textContent = trans.navbar.proyectos;
  document.querySelector('a[href="#skills"]').textContent = trans.navbar.skills;
  document.querySelector('a[href="#contact"]').textContent = trans.navbar.contacto;

  // Hero Section
  document.querySelector('.typing-text').textContent = trans.hero.terminal;
  const heroLines = document.querySelectorAll('#hero .terminal-line');
  if (heroLines[1]) heroLines[1].innerHTML = `<span class="prompt">❯</span><span class="text-accent">${trans.hero.role}</span> ${trans.hero.roleValue}`;
  if (heroLines[2]) heroLines[2].innerHTML = `<span class="prompt">❯</span><span class="text-accent">${trans.hero.location}</span> ${trans.hero.locationValue}`;
  if (heroLines[3]) heroLines[3].innerHTML = `<span class="prompt">❯</span><span class="text-accent">${trans.hero.specialization}</span> ${trans.hero.specializationValue}`;
  
  const heroDesc = document.querySelector('#hero .terminal-line.description');
  if (heroDesc) heroDesc.innerHTML = `<span class="prompt">❯</span><span>${trans.hero.description}</span>`;
  
  document.querySelector('#hero .btn-contact .btn-content').textContent = trans.hero.button;

  // Projects Section
  document.querySelector('#projects .section-title').innerHTML = `<span class="title-prefix">// </span>${trans.projects.title}`;
  
  const projectCards = document.querySelectorAll('.project-card');
  projectCards[0].querySelector('.card-title').textContent = trans.projects.project1Title;
  projectCards[0].querySelector('.card-body p').textContent = trans.projects.project1Desc;
  projectCards[0].querySelector('.card-link').textContent = trans.projects.viewProject;

  projectCards[1].querySelector('.card-title').textContent = trans.projects.project2Title;
  projectCards[1].querySelector('.card-body p').textContent = trans.projects.project2Desc;
  projectCards[1].querySelector('.card-link').textContent = trans.projects.viewProject;

  projectCards[2].querySelector('.card-title').textContent = trans.projects.project3Title;
  projectCards[2].querySelector('.card-body p').textContent = trans.projects.project3Desc;
  projectCards[2].querySelector('.card-link').textContent = trans.projects.viewProject;

  // Skills Section
  document.querySelector('#skills .section-title').innerHTML = `<span class="title-prefix">// </span>${trans.skills.title}`;
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories[0].textContent = trans.skills.frontend;
  skillCategories[1].textContent = trans.skills.backend;
  skillCategories[2].textContent = trans.skills.tools;
  const dbLabel = document.querySelectorAll('.skill-name')[5];
  if (dbLabel) dbLabel.textContent = trans.skills.databases;

  // Contact Section
  document.querySelector('#contact .section-title').innerHTML = `<span class="title-prefix">// </span>${trans.contact.title}`;
  document.querySelector('.contact-form-container .terminal-title').textContent = trans.contact.terminal;
  
  const formLabels = document.querySelectorAll('.form-label');
  formLabels[0].textContent = trans.contact.nameLabel;
  formLabels[1].textContent = trans.contact.emailLabel;
  formLabels[2].textContent = trans.contact.messageLabel;

  const formInputs = document.querySelectorAll('.form-input');
  formInputs[0].placeholder = trans.contact.namePlaceholder;
  formInputs[1].placeholder = trans.contact.emailPlaceholder;
  formInputs[2].placeholder = trans.contact.messagePlaceholder;

  document.querySelector('.btn-submit .btn-content').textContent = trans.contact.send;

  // Footer
  document.querySelector('.footer-text').innerHTML = `<span class="footer-prefix">$ </span>${trans.footer.copyright}`;

  // Actualizar selector de idioma
  document.getElementById('language-selector').value = lang;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  applyLanguage(getCurrentLanguage());

  // Event listener para el selector de idioma
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.addEventListener('change', function(e) {
      setLanguage(e.target.value);
    });
  }
});
