// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let speed;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  speed = 0;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1 + speed) % cycle;
  // BLANK[1]
  let size;
  if(count < 50){size = count + 50;}
  else {size = 150 - count;}
  ellipse(width / 2, height / 2, size);
}

function keyPressed(){
  if(keyIsDown(" ".charCodeAt(0))){
    speed = (speed + 1) % 2;
  }
}