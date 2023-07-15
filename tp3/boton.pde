boolean botones (int x, int y, int ancho, int alto){
  if ( mouseX> x && mouseX<x+ancho && mouseY> y && mouseY<y+alto) {
    return true;
  } else {
    return false;
  }
}

void opciones (int x, int y, int ancho, int alto, String texto){ 
  textSize (25);
  fill (133,174,227, 150);
  rect(x, y, ancho, alto, 150);
  fill(255);
  strokeWeight(5);
  text (texto, x+10, y+10, ancho, alto);
}
