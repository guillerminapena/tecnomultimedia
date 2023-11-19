//Peña Guillermina
//928181/2
//comisión 1
let img;
let jueg;
function setup() {
  createCanvas(700, 500);
  jueg = new juego ();
}
function draw() {
  background(32, 137, 165);
  jueg.dibujar()
}
function keyPressed() {
  jueg.movimientoP(keyCode);
}
function preload() {
  img = loadImage('imag/perdiste.jpg');
}
function mousePressed(){
  jueg.funcionanBotones();
}
