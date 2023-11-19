class personajeUno { //la niña

  constructor (pux, puy, Uancho, Ualto) {

    this.pux = pux;
    this.puy = random(100, 400);
    this.Uancho = Uancho;
    this.Ualto = Ualto;
    this.colorPers = color (255, 0, 0);
  }

  dibujar () {

    fill (this.colorPers);
    rect(this.pux, this.puy, this.Uancho, this.Ualto);
  }
}
