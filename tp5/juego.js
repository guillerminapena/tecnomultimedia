class juego {

  constructor() {
    this.puno = new personajeUno(50, 100, 20, 50);
    this.pdos = new personajeDos(600, 100, 20, 50);
    this.obs = [];
    for (let i = 0; i < 17; i++) {
      this.obs.push(new obstaculos(-20, random(height), random(0.5, 2.3))); // obstaculos y su velocidad
    }
    this.choques = 0;
    this.ganaste = false;
    this.perdiste = false;
  }

  verificarColisiones() {
    for (let i = 0; i < this.obs.length; i++) {
      if (
        this.pdos.pdx < this.obs[i].ox + this.obs[i].oancho &&
        this.pdos.pdx + this.pdos.Dancho > this.obs[i].ox &&
        this.pdos.pdy < this.obs[i].oy + this.obs[i].oalto &&
        this.pdos.pdy + this.pdos.Dalto > this.obs[i].oy) {
        this.obs[i].ox = -this.obs[i].oancho;
        this.choques++;
      }

      if (this.pdos.pdx <= this.puno.pdx + this.puno.Dancho &&
        this.pdos.pdx + this.pdos.Dancho >= this.puno.pdx &&
        this.pdos.pdy <= this.puno.pdy + this.puno.Dalto &&
        this.pdos.pdy + this.pdos.Dalto >= this.puno.pdy) {
        fill(255, 0, 0)
        text('ganaste', 0, 0);
        this.ganaste = true;
      }
    }
    if ( this.choques >= 4) {
      this.perdiste = true;
       image(img, 50, 50, 600, 400);
      noLoop();
    }
  }
  dibujar() {
    this.puno.dibujar();
    this.pdos.dibujar();
    for (let i = 0; i < this.obs.length; i++) {
      this.obs[i].dibujar();
    }
    this.verificarColisiones();
  }

  movimientoP(tecla) {
    this.tec = tecla;
    if (this.tec === UP_ARROW) {
      this.pdos.arriba();
    } else if (this.tec === DOWN_ARROW) {
      this.pdos.abajo();
    } else if (this.tec=== LEFT_ARROW) {
      this.pdos.izquierda();
    } else if (this.tec=== RIGHT_ARROW) {
      this.pdos.derecha();
    }
  }
}
