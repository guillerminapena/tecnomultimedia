// Guillermina Peña
// comisión 1

float opacidad = 255;
float posX, posY = 0;

int segundos;
int pantalla = 1;

PImage lincoln1;
PImage lincoln2;
PImage lincoln4;
PImage boton;


String texto = "Lincoln es una ciudad \n ubicada en la provincia de Buenos Aires \n fundada un 19 de julio de 1865";
String texto2 = "Se destaca por sus coloridos \n  y divertidos carnavales \n que son realizados a finales de febrero";
String texto4 = "Más allá de ser considerada \n una ciudad por su cantidad de habitantes \n diariamente se lleva una vida \n de pueblo ";
String textoBoton = "Reinicio";

void setup() {

  size(640, 480);
  textAlign(CENTER);
  textSize (30);

  lincoln1=loadImage("lincoln1.jpg");

  lincoln2=loadImage("lincoln2.jpg");

  lincoln4=loadImage("lincoln4.jpg");

  boton = loadImage ("reinicio.png");
}


void draw() {


  opacidad = posX*255/width;


  if (frameCount%60==0) {
    segundos ++;
  }



  println(segundos);

  //pantalla 1

  if (pantalla == 1) {
    image(lincoln1, 0, 0, 640, 480);
    fill (0);
    text (texto, width/2, posY - 100); // arriba a abajo
    posY += 2;

  }
  //pantalla 2

  if (pantalla == 2) {
    image (lincoln2, 0, 0, 640, 480); //se pone la imagen en toda la pantalla
    fill(opacidad);
    text (texto2, posX - 170, 100); // el texto pasa de izquierda a derecha
    posX += 2;
  }


  //pantalla 3
  if (pantalla == 3) {

    image (lincoln4, 0, 0, 640, 480);
    fill (255);
    text (texto4, posX - 200, 300);
    posX -=2;
    fill (245, 143, 109);
    rect (350, 50, 100, 40);
    fill (0);
    text (textoBoton, 400, 75);
  }


  if (segundos < 5) {
    pantalla = 1;
  } else if (segundos >= 5 && segundos <= 13) {
    pantalla = 2;
  } else if (segundos >= 13 && segundos <= 23) {
    pantalla = 3;
  }
}

void mousePressed () {


  if ( segundos >=23 && mouseX>= 350 && mouseX<=450 && mouseY>=50 && mouseY<=90) {
    pantalla = 1;
    segundos = 0;
    posY = 0;
    posX = 0;
  }
}
