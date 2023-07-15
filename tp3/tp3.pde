//https://youtu.be/_9zzEp4UBdc
//Peña Guillermina
// 92818/2
// comisión 1

int pantallas=0;
int cant = 17;

PImage [] imagenes = new PImage [cant];

void setup () {
  size (600, 600);

  for (int i=0; i<cant; i++) {
    imagenes [i] = loadImage("pantalla"+i+".jpg");
 
  }
}

void draw() {

  background(0);

  if (pantallas==0) {
    image (imagenes[0], 0, 0, 600, 600 );
    opciones(215, 300, 150, 80, "Inicio");
    opciones (215, 450, 150, 80, "creditos");
  }

  if (pantallas==1) {                                                               // pantalla 1
    image (imagenes[1], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                            //fondo de texto
    rect(50, 30, 490, 250);                            //marco del fondo del texto
    fill(0);                                           //color del texto
    text (texto[0], 60, 40, 480, 450);                 //texto
    opciones(420, 450, 150, 80, "A");                   //botón opción A
    opciones(50, 450, 150, 80, "B");                  //botón opción B
  }

  if (pantallas==2) {                                                              // pantalla 2
    image (imagenes[2], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 150);                            //marco del fondo del texto
    fill(0);                                           //color de texto
    text (texto[1], 60, 40, 480, 450);                //texto
    opciones(420, 450, 150, 80, "Continuar");         //boton opción continuar
    opciones(50, 450, 150, 80, "Volver");             //boton opción volver
  } 
  
  else if (pantallas==8) {                                                          //pantalla 8
    image (imagenes[8], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 200);                            //marco del fondo del texto
    fill(0);                                           //color de texto
    text (texto[7], 60, 40, 480, 450);                 //texto
    opciones(420, 450, 150, 80, "Continuar");          //boton opcion continuar
    opciones(50, 450, 150, 80, "Volver");              //boton opcion volver
  }

  if (pantallas==9) {                                                               //pantalla 9
    image (imagenes[9], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 200);                            //marco del fondo del texto
    fill(0);                 
    text (texto[8], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "B");
    opciones(50, 450, 150, 80, "A");
  }
  if (pantallas==3) {                                      //pantalla 3
    image (imagenes[3], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 100);                            //marco del fondo del texto
    fill(0);                 
    text (texto[2], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
  }

  if (pantallas==4) {                                    // pantalla 4
    image (imagenes[4], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 200);                            //marco del fondo del texto
    fill(0);                 
    text (texto[3], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "B");
    opciones(50, 450, 150, 80, "A");
  }

  if (pantallas==5) {                                    // pantalla 5
    image (imagenes[5], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 150);                            //marco del fondo del texto
    fill(0);                 
    text (texto[4], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
    opciones(50, 450, 150, 80, "Volver");
  }

  if (pantallas==6) {                                    // pantalla 6
    image (imagenes[6], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 200);                            //marco del fondo del texto
    fill(0);                 
    text (texto[5], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
    opciones(50, 450, 150, 80, "Volver");
  }

  if (pantallas==7) {                                  //pantalla 7
    image (imagenes[7], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 150);                            //marco del fondo del texto
    fill(0);                 
    text (texto[6], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Fin");
  }

  if (pantallas==10) {                                // pantalla 10
    image (imagenes[10], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 100);                            //marco del fondo del texto
    fill(0);                 
    text (texto[9], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
    opciones(50, 450, 150, 80, "Volver");
  }

  if (pantallas==11) {                              //pantalla 11
    image (imagenes[11], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 150);                            //marco del fondo del texto
    fill(0);                 
    text (texto[12], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
    opciones(50, 450, 150, 80, "Volver");
  }

  if (pantallas==12) {                              //pantalla 12
    image (imagenes[12], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 200);                            //marco del fondo del texto
    fill(0);                 
    text (texto[13], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Fin");
  }

  if (pantallas==13) {                            // pantalla 13
    image (imagenes[13], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 180);                            //marco del fondo del texto
    fill(0);                 
    text (texto[10], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Continuar");
  }

  if (pantallas==14) {                            // pantalla 14
    image (imagenes[14], 0, 0, 600, 600);
    fill(255, 255, 255, 50);                           //fondo de texto
    rect(50, 30, 490, 150);                            //marco del fondo del texto
    fill(0);                 
    text (texto[11], 60, 40, 480, 450);
    opciones(420, 450, 150, 80, "Fin");
  }

  if (pantallas==15) {                            // the end
    fill (255);
    image (imagenes[15], 0, 0, 600, 600 );
    opciones(420, 450, 150, 80, "Creditos");
    opciones(50, 450, 150, 80, "Inicio");
  } 
  else if (pantallas==16) {
    fill (255);
    image (imagenes[16], 0, 0, 600, 600 );
    textSize(30);
    fill(255);
    text ( "Autor: Ray Bradbury \n \n programadora : Guillermina Peña \n \n Imagenes : IA y Shotdeck", width/6, height/4);
    opciones(420, 450, 150, 80, "Inicio");
  }
}
