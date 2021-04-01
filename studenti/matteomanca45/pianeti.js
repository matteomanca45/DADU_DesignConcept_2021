let w = 600;
let r = w/4; //raggio
let a = 0; //angolo

function setup() {
  createCanvas(w, w);
  colorMode(HSB); // r, G, B -> 0 - 255 // H 0-360

}

function draw() {
  background(0, 0, 90);

  //noFill();
  let h = map (cos(a), -1, 1, 0, 360); // cos(a) va da 1 a -1 -> 0 - 360
  fill(h, 80, 80);
  circle(w/2, w/2, r*2);

  let x = w/2 + cos(a)*r;
  let y = w/2 + sin(a)*r;

  fill(0);
  circle(x, y, 36);

  a = a + 0.01;

  //pianeta
  let xp = x + cos(a*2)*r/3;
  let yp = y + sin(a*2)*r/3;
  
  circle(xp, yp, 18);


}

function keyTyped(){
  console.log(key);
}