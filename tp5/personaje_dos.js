class personajeDos { //el niño amarillo

  constructor (pdx, pdy, Dancho, Dalto) {

    this.pdx = pdx;
    this.pdy = pdy;
    this.Dancho = Dancho;
    this.Dalto = Dalto;
    this.colorPers = color (255, 255, 0);
    this.contadorChoques = 0;
    this.colision = this.colision;
    this.persUno= new personajeUno();
  }

  dibujar () {

    fill (this.colorPers);
    rect(this.pdx, this.pdy, this.Dancho, this.Dalto);
  }


  //para que se mueva hacia la derecha
  derecha () {
    this.pdx += 10;
  }
  //para que se mueva hacia la izquierda

  izquierda() {
    this.pdx -= 10;
  }
  //para que se mueva hacia arriba

  arriba() {
    this.pdy -= 10;
  }
  //para que se mueva hacia abajo

  abajo() {
    this.pdy += 10;
  }
  colision (obstaculos) {
    if (this.pdx + this.Dancho >= obstaculos.ox &&  this.pdx <= obstaculos.ox + obstaculos.oancho && this.pdy + this.Dalto >= obstaculos.oy && this.pdy <= obstaculos.oy + obstaculos.oalto) { //si y del personaje es menor que y mas el alt de los obstaculos
      return true; //pasa la colision
    }
    return false; //no hay colision
  }
}
