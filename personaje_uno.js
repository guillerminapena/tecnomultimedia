class personajeUno { //la niña

  constructor (posUX, posUY, Uancho, Ualto) {

    this.posUX = posUX;
    this.posUY = random(100, 400);
    this.Uancho = Uancho;
    this.Ualto = Ualto;
    this.colorPers = color (255, 0, 0);
  }

  dibujar () {

    fill (this.colorPers);
    rect(this.posUX, this.posUY, this.Uancho, this.Ualto);


  }
}
