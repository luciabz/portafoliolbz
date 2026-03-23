// Starfield para la sección de contacto usando p5.js en modo instancia
const contactStarfield = (p) => {
  let stars = [];
  let speed = 20;

  p.setup = function() {
    const container = document.getElementById('starfield-contact');
    const width = container.parentElement.offsetWidth;
    const height = container.parentElement.offsetHeight;
    
    p.createCanvas(width, height);
    
    // Inicializa estrellas
    for (let i = 0; i < 600; i++) {
      stars[i] = new Star(p, width, height);
    }
  };

  p.draw = function() {
    p.background(18, 10, 40); // Fondo oscuro
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  };

  p.windowResized = function() {
    if (document.getElementById('starfield-contact')) {
      const container = document.getElementById('starfield-contact');
      const width = container.parentElement.offsetWidth;
      const height = container.parentElement.offsetHeight;
      p.resizeCanvas(width, height);
    }
  };
};

class Star {
  constructor(p, w, h) {
    this.p = p;
    this.x = p.random(-w, w);
    this.y = p.random(-h, h);
    this.z = p.random(w);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - 20;
    if (this.z < 1) {
      this.z = this.p.width;
      this.x = this.p.random(-this.p.width, this.p.width);
      this.y = this.p.random(-this.p.height, this.p.height);
      this.pz = this.z;
    }
  }

  show() {
    this.p.fill(255);
    this.p.noStroke();
    
    let sx = this.p.map(this.x / this.z, 0, 1, 0, this.p.width);
    let sy = this.p.map(this.y / this.z, 0, 1, 0, this.p.height);

    let r = this.p.map(this.z, 0, this.p.width, 8, 0);
    this.p.ellipse(sx, sy, r);

    let psx = this.p.map(this.x / this.pz, 0, 1, 0, this.p.width);
    let psy = this.p.map(this.y / this.pz, 0, 1, 0, this.p.height);

    this.p.stroke(255);
    this.p.strokeWeight(r);
    this.p.line(sx, sy, psx, psy);
    this.pz = this.z;
  }
}

// Inicia la instancia de p5.js cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  new p5(contactStarfield, 'starfield-contact');
});
