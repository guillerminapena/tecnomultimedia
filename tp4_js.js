let pantallas = 0;

let cuadx, cuady, cuadalto, cuadancho; //ladrillos
let rectx, recty, rectalto, rectancho; //base

let dispara; //el personaje naranja salio o no


let punox, punoy, punotam; //personaje uno [naranja]
let pdosx, pdosy, pdostam; //peronaje dos [rojo]

let cant = 20;

let ladrillox=[];
let ladrilloy = [];
let ladrilloelim = [];

let personajeenbase;

let velx, vely;

let expulsa = false;

let derribadas = 0;



function setup() {


  
  createCanvas(500, 500);

  //ladrillos
  cuadx = 0;
  cuady = 0;
  cuadalto = 10;
  cuadancho = 30;

  //base
  rectx=width/2;
  recty= 450;
  rectalto=15;
  rectancho=200;
  //personajes
  personajeexpulsado = false; //false si esta quieto, true si ya fue expulsado
  personajeenbase =true;
  //pos de personajes
  punox = 483;
  punoy = height/2 +52;
  punotam = 36;
  pdosx = rectx+20;
  pdosy = recty-20;
  pdostam = punotam;


  velx = random ( 1, 3); // velocidad
  vely = random ( 1, 3);


  for (let i = 0; i < cant; i++) {

    ladrillox [i] = i*cuadancho;
    ladrilloy [i] = i*cuadalto;
    ladrilloelim[i] = [];
    for (let j = 0; j < 5; j++) {
      ladrilloelim[i][j] = false;
    }
  }
}

function draw () {
    
  background(0);

  fill(255);
  rect(0, 320, 36); //cuadrados de los costados
  rect (465, 320, 36);  // ||       || ||    ||

  personajeuno (punox, punoy, punotam); //naranja
  personajedos ( rectx+20, recty-20, pdostam);
  rectangulo (rectx, recty, rectancho, rectalto);


  fill(255, 0, 0);
  //cuadrados a derribar
  for (let i=0; i<cant; i+=2){
    for (let j=0; j<7; j+=2) {
      cuadradosArriba (i*cuadancho, j*cuadalto, cuadancho, cuadalto);
    }
  }


  fill(255);
  //movimientos en x del rectangulo
  if (keyIsPressed===true) {
    if (keyCode=== RIGHT_ARROW && rectx<width-rectancho) {
      rectx+=2;
    }
    if (keyCode=== LEFT_ARROW && rectx>width/110) {
      rectx-=2;
    }
  }

  //cuando el personaje es expulsado
  if (personajeexpulsado) {
    punox -= velx;
    punoy -= vely;
  } else {

    personajeenbase = false;
  }



  if (punoy < 0 + punotam){
    vely *= -1; // Invertir la dirección cuando toca el techo
  }

 
  //delimitacion del alto
  if (punoy <= rectalto - punotam / 2  && punox <= rectx + rectancho / 2) {
    vely = +vely;
  }

  //delimitacion del ancho
  if (punox >= width - punotam / 2 || punox <= punotam / 2) {
    velx = -velx;
  }
}


//caudrados que van a ser golpeados
function cuadradosArriba(x, y, ancho, alto) {
  fill(0, 255, 0);
  rect(x, y, ancho, alto);
}

//barra de abajo
function rectangulo (x, y, ancho, alto) {
  fill(255);
  rect (x, y, ancho, alto);
}

function personajeuno (x, y, tam) {
  fill(248, 156, 22);
  circle (x, y, tam);
}

function personajedos(x, y, tam) {
  fill(255, 0, 0);
  circle (x, y, tam);
}

function impacto (x, y, px, py, ancho, alto) {
  return (x > px && x < px + ancho && y> py && y < py + alto);
}



function postimpacto () {

  for (let i = 0; i < cant; i+=2) {
    for (let j = 0; j < cant; j+=2) {
      if (!ladrilloelim [i][j]) {
        cuadradosArriba(ladrillox[i], ladrilloy[j], cuadancho, cuadalto);
        if (impacto(punox, punoy, ladrillox[i], ladrilloy[j], cuadancho, cuadalto)) {
          expulsa = true;
          ladrilloelim [i][j] = true;
          dy = random(2, 7);
          dx =random(2, 7);
          derribadas ++;
        }
      }
    }
  }
}


/*function botones (x,  y,  ancho,  alto){
  if ( mouseX> x && mouseX<x+ancho && mouseY> y && mouseY<y+alto) {
    return true;
  } else {
    return false;
  }

}

function mousePressed () {
if (pantallas===0 && botones(215, 300, 150, 80)){ //inicio a la 1
  pantallas=1;
}
}

function visualBoton ( x, y, ancho, alto, texto){
  
  textSize (20)
  fill (133,174,227, 150);
  rect(x, y, ancho, alto, 150);
  fill(255);
  strokeWeight(5);
  text (texto, x+10, y+10, ancho, alto);

}*/




function keyPressed () {
  if (keyCode === 32) {
    personajeexpulsado=true;
  } else {
    personajeenbase = false;
  }
}
