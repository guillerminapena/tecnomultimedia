size(800, 400);

background(96, 137, 206);

PImage paisaje;
paisaje=loadImage("paisaje.jpg");
image(paisaje, 0, 0, 400, 400);

noStroke();

fill(255);//nubes
rect(400, 250, 800, 10);


fill(162, 110, 61); 
rect(400, 275, 800, 125);




fill(193, 140, 90); //montaña
triangle(500, 350, 640, 150, 775, 350);//montaña
rect(612, 125, 55, 200);//parte de la montaña

fill(178, 129, 90);// fondo  con ellipse 
rect(400, 350, 800, 400);
ellipse(700, 400, 175, 150);
