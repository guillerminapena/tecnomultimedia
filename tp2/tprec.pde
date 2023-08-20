//https://youtu.be/CZSMA3YRFfM
//Peña Guillermina
//92818/2



PImage imagen;

void setup() {
  size(800, 400);
  imagen = loadImage("arteoptico.png");
}



void dibujo(int x) {
  strokeWeight (9); //grosor de todas las lineas menos del circulo mas chico
  noFill(); //ellipse del medio
  int d=600, i; //600 es de dpnde arranca el circle del medio 
  for ( i=0; i<40; i++) { //se va incrementando de a uno
  if (i%2==0) //si es modulo de 2
    stroke(0); //color de las lineas negras
  else //sino
    stroke(255); //color lineas blancas
    circle(x, 200, d);
    d=d-16;
  }
  //ellipse de los mayor
  d=670;
  for (i=0; i<29; i++) {
    if (i%2==0)
      stroke(0);
    else
      stroke(255);
    ellipse(x, 200, d+200, d);
    d=d-16;
  }
  //ellipse mas chica
  d=69;
  strokeWeight (15);

  for ( i=0; i<5; i++) {

    float posY = map(i, 0, d-1, 200-i*3, mouseY);
    float posX = map(i, 0, d-1, x-i*3, mouseX);
  
    if (i%2==0)
      stroke(0);
    else
      stroke(255);
    ellipse(posX, posY, d, d);
    d=d-16; // se van achicando las lineas
  }
}
 


void draw() {
  background(100);
  dibujo(600);
  fill(100);
  noStroke();
  image (imagen, 0, 0, 400, 400);
}
