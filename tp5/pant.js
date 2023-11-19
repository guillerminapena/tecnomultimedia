class pantallas {

  constructor() {
    this.pantalla = 0;
    this.anchoBot = 120;
    this.altoBot = 30;
    this.bot = new botones(0, 0, 700, 500);
    this.botVolv = new botones(0, 0,700, 500);
    this.jueg= new juego();
  }
  reinicio() {
    this.pantalla = 0;
    this.jueg= new juego();
      this.perdiste = false;
  }
  dibujarPant(){
    if (this.pantalla === 0){
      this.jueg.dibujar();
      this.jueg.verificarColisiones();
    }
    if(this.pantalla === 1) {
      this.botVolv.dibujarBotones();
      this.jueg.reinicio();
    }
    }
  funcionanBotones(){
    if (this.botVolv.presionar(0, 0,700, 500 && this.pantalla === 1)){
      this.reinicio();
    
  }
  }

}
