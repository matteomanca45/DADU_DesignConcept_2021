let w = 600;
let n = 20; // n*n quadrati
let dati = []; // array vuoto


function setup() {
    createCanvas(w, w);
    // toss the coin 25 times // 25 lanci di moneta
    // and store the result // registra il risultato
    for(let i = 0; i< (n*n); i++){
        dati.push(moneta()); // add 1 element at the end of the array // + 1 elemento alla fine
    }
    console.log(dati);
  
  }

function draw() {
  background(200);

  let m = w/n; // spazio tra le linee

  for(let fila = 0; fila <n; fila++){
    strokeWeight(1);
    
    line(0, fila*m, w, fila*m);
    line(fila*m,0, fila*m, w);
    for(let col = 0; col<n; col++){
        // angolo // corner
        let x = col*m;
        let y = fila*m;
        let xc = x + m/2;
        let yc = y + m/2;
        let i = fila*n + col; // o -> 24 // 25 valori, n*n

        //circle(xc,yc,20);
        text(dati[i], xc, yc); // iesimo elemento della mia serie di 25 elementi

        strokeWeight(8);

        if(dati[i] == 0){
            // fai una cosa
            //line(x, y+m, x+m, y);
            if (dati[0] == 0){
                line(x+m/2, y, x+m/2, y+m);

            }
        } else {
            // fai una cosa diversa
            //line(x, y, x+m, y+m);
            line(x, y+m/2, x+m, y+m/2);
        }
    }
}

}


function keyTyped(){
    console.log(key);
    //moneta();
    creaDati();
  }
  
  // flip coin function
  function moneta(){ 
      let risultato = random(1);
      if(risultato < 0.5){
          console.log("testa");
          return 1;
      } else {
          console.log("croce");
          return 0;
      }
  }








  function creaDati(){
      // cancella i punti
      dati = [];
      // crea n*n dati nuovi
      for(let i = 0; i< (n*n); i++){
        dati.push(moneta()); // add 1 element at the end of the array // + 1 elemento alla fine
    }
    console.log(dati);
  
  
      

  }