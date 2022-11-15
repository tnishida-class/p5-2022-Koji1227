// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  centx = width / 2;
  centy = height / 2;
}

function draw(){
  let p = 10; //すき間の設定
  background(160, 192, 255);
  rect(centx - 400, 100, 800, 100);
  textSize(30);
  textAlign(CENTER);
  text("ITコミュ", centx, 150);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
