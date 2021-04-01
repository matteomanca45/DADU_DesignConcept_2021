 let w= 500;
 let e= 40; //posizione verticali M grande
 let n= 50; //lunghezza verticali M 

 let c=100 //colore
 let o= 20; //spessore 1
 let m= 25; //spessore 2 
 
 function setup() {
  createCanvas(w, w);
}

function draw() {
  background(150,170,155);
  
  //lettera M 1
  fill(0);
  
  stroke(2*c+5,92,92,);
  strokeWeight(o);
    
  line(80,100,w/5-e,w-n);
  line(420,50,400+e,w-n)
  
  line(80,100,w/2,w/2);
  line(420,50,250,w/2);
  
  //lettera M 2 
  stroke(2*c+5,92,c-8,90);
  strokeWeight (m-20);
  
  line(200,70,180,w-n*2);
  line(300,70,320,w-n*2);
  
  line(200,70,w/2,150+n);
  line(300,70,250,150+n);
  
  }

 function keyTyped(){
  // quando schiaccio un tasto
  // when I stroke a key on my keyboard

  console.log(key); 
  //inserisco variabile
 
   o= random(1,30); //spessore m1
   m= random(1,30); //spessore m2
   n= random(1,100); //lunghezza vert. m
   c= random(1,150);//colore   
   
}

