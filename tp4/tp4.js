let pantallas = 0
  let cuadx, cuady, cuadalto, cuadancho; //ladrillos
let rectx, recty, rectalto, rectancho; //base
let punox, punoy, punotam; //personaje uno [naranja]
let pdosx, pdosy, pdostam; //peronaje dos [rojo]
let cant= 20;
let ladrillox=[];
let ladrilloy = [];
let ladrilloelim = [];
let personajeenbase;
let velx, vely;
let expulsa = false;
let derribadas;
let imagenes = [];

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
  velx = random(3, 6);
  vely = random(3, 6);
  derribadas = 0;

  ladrillos();

  for (let i = 0; i<6; i++) {
    imagenes.push(loadImage('data/pant' + i + '.jpeg'));
  }
}

function draw () {

  background(0)
    //pantalla principal
    if (pantallas === 0) {
    image(imagenes[0], 0, 0, 500, 500);
  }
  //creditos
  if (pantallas === 1) {
    image(imagenes[5], 0, 0, 500, 500);
  }
  //comienzo del juego
  if (pantallas ===  2) {

    fill(34, 33, 67);
    rect(0, 320, 36); //cuadrados de los costados
    rect (465, 320, 36);  // ||       || ||    ||

    personajeuno (punox, punoy, punotam); //naranja
    personajedos ( rectx+20, recty-20, pdostam);
    rectangulo (rectx, recty, rectancho, rectalto);

    fill(255);
    //movimientos en x del rectangulo
    if (keyIsPressed===true) {
      if (keyCode=== RIGHT_ARROW && rectx<width-rectancho) {
        rectx+=4;
      }
      if (keyCode=== LEFT_ARROW && rectx>width/110) {
        rectx-=4;
      }
    }
    //cuando el personaje es expulsado
    if (personajeexpulsado) {
      punox -= velx;
      punoy -= vely;
    } else {

      personajeenbase = false;
    }
    //delimito alto
    if (punoy>= height-rectalto-punotam &&
      punox>=rectx-rectancho &&
      punox<= rectx+rectancho) {
      vely=-vely;
    }
    // Invertir la dirección cuando toca el techo
    if (punoy < 0 + punotam) {
      vely *= -1;
    }

    if (punoy <= rectalto - punotam  && punox <= rectx + rectancho) {
      vely = +vely;
    }

    //delimitacion del ancho
    if (punox >= width - punotam / 2 || punox <= punotam / 2) {
      velx = -velx;
    }

    mostrarChoque();

    if (derribadas >= 30 ) {
      image(imagenes[3], 150, 150);
      image(imagenes[4], 200, 300);
      noLoop();
      valoresDeNuevo();
      ladrillos();
    }
  }
  if (punoy >= height ) {
    image(imagenes[2], 150, 150);
    image(imagenes[4], 200, 300);
    noLoop();
    valoresDeNuevo();
    ladrillos();
  }
}

//caudrados que van a ser golpeados
function cuadradosArriba(x, y, ancho, alto) {
  fill(45, 75, 222);
  rect(x, y, ancho, alto);
}

//barra de abajo
function rectangulo (x, y, ancho, alto) {
  fill(255);
  rect (x, y, ancho, alto);
}
function valoresDeNuevo() {
  punox = 483;
  punoy = height/2 +52;
  punotam = 36;
  pdosx = rectx+20;
  pdosy = recty-20;
  pdostam = punotam;
  velx = 3;
  vely = random(1, 5);
  personajeexpulsado = false;
}

function ladrillos() {
  for (let i = 0; i <cant; i++) {
    ladrillox [i] = i*cuadancho;
    ladrilloy [i] = i*cuadalto;
    ladrilloelim[i] = [];
    for (let j = 0; j < 3; j++) {
      ladrilloelim[i][j] = true;
    }
  }
}
function personajeuno (x, y, tam) {
  fill(248, 156, 22);
  circle (x, y, tam);
}

function personajedos(x, y, tam) {
  fill(255, 0, 0);
  circle (x, y, tam);
}

function choque (xp, yp, xl, yl, ancho, alto) {
  return (xp > xl-ancho/2 && xp < xl-ancho/2 && yp > yl-alto/2 && yp<yl-alto/2);
}

function mostrarChoque() {
  for (let i = 0; i < cant; i += 2) {
    for (let j = 0; j < 11; j += 2) {
      if (!ladrilloelim[i][j]) {
        cuadradosArriba(ladrillox[i], ladrilloy[j], cuadancho, cuadalto);
        if (punox + punotam / 2 >= ladrillox[i] && punox - punotam / 2 <= ladrillox[i] + cuadancho && punoy + punotam / 2 >= ladrilloy[j] && punoy - punotam / 2 <= ladrilloy[j] + cuadalto) {

          vely = -vely;
          ladrilloelim[i][j] = true;
          derribadas++;
        }
      }
    }
  }
}
//para comenzar
function keyPressed () {
  if (keyCode === 32) {
    personajeexpulsado=true;
  }
}
//boton interacción
function mousePressed() {
  if (pantallas===0 && boton(145, 188, 204, 21)) { //inicio al juego
    pantallas=2;
  }
  if (pantallas===0 && boton(145, 234, 204, 21)) { //inicio al juego
    pantallas=1;
  }
  if (pantallas===1 && boton(167, 415, 328, 479)) { //de los creditos al inicio
    pantallas=0;
  }
  if (pantallas===2 && boton(210, 315, 150, 35)) {
    pantallas=0;
    loop();
  }
}
function boton (x, y, ancho, alto) {
  if ( mouseX> x && mouseX<x+ancho && mouseY> y && mouseY<y+alto) {
    return true;
  } else {
    return false;
  }
}
