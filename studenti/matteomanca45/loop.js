let w = 600;
 let t= 0;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);

  let n = 20; // number of lines
  let m = w/n; // distanza tra le linee 
  
  for(let fila = 0; fila < n; fila ++){
      
  //line(0,fila*30,w,fila*m); // orizzontali
  //line(fila*m,0, fila*m,w); // verticali
    
  for(let col = 0; col < n; col ++){
      
  let x = col*m; // angolo in alto sx
  let y = fila*m;
  let xc = x + m/2; // centro
  let yc = y + m/2;
  let i = (fila*n) + col; // indice
    
  rectMode(CENTER); 
    
  let v =  noise (x/100 + t, y/100);
  let q= map (i,0, m*m,10,6);
  square(x + m/2, y + m/2, q);
  let b = map (i, 0, n*n, 255, 0);
  fill(0);
    //fill(153, 0, 102);
  let vv = map(v,0,1,m/2*-1, m/2)
  square(x+vv, y+ m/2, q)
     
  let c =  map (col*n, 0, n*n, 255, 0);
  let vc = map(v, 0, 1, 0, 255);  
  
   fill (0); 
  //fill(95, 158, 160);
  circle(x, y , v*m);
    //circle (x, y, v*n);
  
      }
    
  }
   
  t = t + 0.1;
}



