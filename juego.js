class juego{
  
  constructor(){
  this.crearPersonajeUno();
  this.crearPersonajeDos();
  this.obstaculos = [];
    for (let i = 0; i < 17; i++) {
      this.obstaculos.push(new obstaculos(-20, random(20, 490), random(0.5, 2.3))); // obstaculos y su velocidad
  }
    
  }

  
  dibujar(){
    this.personajeDos.dibujar();
    this.personajeUno.dibujar();
        for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
        }
    }
  
  teclaPres(keyCode){
   this.personajeDos.teclaPres(keyCode);
  }
  
  crearPersonajeDos(){
    this.personajeDos = new personajeDos(600, 100, 20, 50);
}
  crearPersonajeUno(){
    this.personajeUno = new personajeUno(50, 100, 20, 50);
}


}
