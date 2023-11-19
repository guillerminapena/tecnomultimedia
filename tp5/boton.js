class botones{
  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = ancho;
    this.alto = alto;
  }
  dibujarBotones(){
    fill(234, 65, 77);
    stroke(3);
    rect(this.bx, this.by, this.ancho, this.alto);
  }
  presionar( bx, by, ancho, alto){
    return mouseX>this.bx && mouseX<this.bx+this.ancho && mouseY>this.by && mouseY<this.by+this.alto;
  }
  
}
