class botones {
  
  constructor(bx, by,bancho,balto){
    this.bx = bx;
    this.by = by;
    this.bancho = bancho;
    this.balto = balto;
  }
  
  dibujar(a, p){
    
    this.a = a;
    this.p = p;
    rect(this.bx, this.by, this.bancho, this.balto);
  }
  
  presBoton (bx, by, bancho, balto){
        return mouseX>this.bx && mouseX<this.bx+this.bancho && mouseY>this.by && mouseY<this.by+this.balto;
  }
  
}
