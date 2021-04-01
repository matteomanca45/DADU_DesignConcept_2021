let w=500
let s=25 //spessore
let c=90 //colore
let l=50 //lunghezza verticali

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(140+l,189,127);
  
  //m grande
  stroke(204,136,103+l,c);
  strokeWeight(s*3);
  
  line(50,50,l,400+l);
  line(50,50,150+l,200+l);
  line(350,50,300+l,400+l);
  line(350,50,150+l,200+l);
  
  //m piccola
  stroke(102+l,118,84);
  strokeWeight(s);
  
  line(150,450,350,400+l);
  line(150,300,200+l,325+l);
  line(150,450,200+l,325+l);
  line(150,300,350,250+l);
  
  
  
}

 function keyTyped(){
  // quando schiaccio un tasto
  // when I stroke a key on my keyboard

  console.log(key); 
  //inserisco variabile
 
  s= random(1,30);
  c= random(20,200);
  l= random(1,100);
   
   
}

