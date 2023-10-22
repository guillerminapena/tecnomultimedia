class obstaculos {
  
  
    constructor(ox, oy, velX) {
    this.ox = random(-50, 50);
    this.oy = random(30, 490);
    this.oancho = 10;
    this.oalto = 10;
    this.velX = velX; 

    }
    
  dibujar (){
    
    fill(0);
    rect(this.ox, this.oy, this.oancho, this.oalto);
    //que se mueva en X
    this.ox += this.velX;
   //cuando termine la pantalla, comienza nuevamente
    if (this.ox>width){
      this.ox = -this.oancho;
    }
  
  }

}
     
