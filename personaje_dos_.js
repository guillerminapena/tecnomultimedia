class personajeDos { //el niño amarillo

  constructor (pdx, pdy, Dancho, Dalto) {

    this.pdx = pdx;
    this.pdy = pdy;
    this.Dancho = Dancho;
    this.Dalto = Dalto;
    this.colorPers = color (255, 255, 0);
    this.contadorChoques = 0;
  }

  dibujar () {

    fill (this.colorPers);
    rect(this.pdx, this.pdy, this.Dancho, this.Dalto);


  }
      teclaPres(keyCode) {

    if  (keyCode == LEFT_ARROW) {
      this.izquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.derecha();
    } else if (keyCode == UP_ARROW){
      this.arriba();
    } else if (keyCode == DOWN_ARROW){
      this.abajo();
    }
  }
  
  
  //para que se mueva hacia la derecha
  derecha (){
    this.pdx += 10;
  }
    //para que se mueva hacia la izquierda

  izquierda(){
    this.pdx -= 10;
  }
      //para que se mueva hacia arriba

 arriba(){
  this.pdy -= 10;
}
    //para que se mueva hacia abajo

  abajo(){
    this.pdy += 10;
    
  }
  
 /* colisionar(obstaculo){
  if (this.pdx + this.Dancho >= obstaculo.ox && this.pdx<= obstaculo.ox + obstaculo.oancho && this.pdy + this.dalto >= obstaculo.oy && this.pdy <= obstaculo.oy + obstaculo.oalto ){
    contadorChoques++;
  }
     if (contadorChoques >= 5){
    background(0,255,0);
    
  }
      }*/
 

}
