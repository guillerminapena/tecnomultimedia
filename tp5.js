//Peña Guillermina
//928181/2
//comisión 1

let objetos;
function setup() {
 
  createCanvas(700,500);
  objetos = new juego (10);

}


function draw() {
  background(32,137, 165);
 objetos.dibujar()
// image(img, 0, 0);
}
function keyPressed(){
   objetos.teclaPres(keyCode);
}

/*function preload(){
  img = loadImage('data/inicio.jpeg')
}*/

/*function mousePressed (){
  
}*/
