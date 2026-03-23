// Starfield global deshabilitado - se usa solo para la sección contacto
/*
let stars = [];
let speed;

function setup() {
  // Crea un lienzo que ocupa toda la ventana
  createCanvas(windowWidth, windowHeight);
  
  // Define la velocidad del movimiento
  speed = 20; 

  // Inicializa 800 estrellas
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(15, 8, 33); // Fondo oscuro personalizado
  translate(width / 2, height / 2); // Mueve el punto de origen (0,0) al centro

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

// Ajusta el tamaño si el usuario cambia el tamaño de la ventana
/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Clase para definir el comportamiento de cada estrella
class Star {
  constructor() {
    // Posición aleatoria en X e Y
    this.x = random(-width, width);
    this.y = random(-height, height);
    // Z representa la profundidad (distancia)
    this.z = random(width);
    // Almacena la posición anterior para dibujar la estela (cola)
    this.pz = this.z;
  }

  update() {
    // Mueve la estrella acercándola (disminuyendo Z)
    this.z = this.z - speed;

    // Si la estrella pasa la pantalla (Z < 1), la reiniciamos al fondo
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    // Mapea las coordenadas 3D a 2D
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    // Calcula el tamaño basado en la cercanía
    let r = map(this.z, 0, width, 8, 0);
    ellipse(sx, sy, r, r);

    // Opcional: Dibujar una línea para efecto de "velocidad luz"
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z; // Actualiza la Z anterior

    stroke(255);
    line(px, py, sx, sy);
  }
}
*/