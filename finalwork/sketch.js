// 最終課題を制作しよう
let centx;
let centy;
let count1;
let cycle;
let speed;

function setup(){
  createCanvas(windowWidth, windowHeight);
  centx = width / 2;
  centy = height / 2;
  count1 = 0;
  //count11 = 0;
  count2 = height / 2;
  //count21 = height / 2;
  cycle = height;
  speed = 3; // 落ちてくるスピードを調整
  //order1 = 0;
  //order2 = 0;
}

function draw(){
  let p = 10; //すき間の設定
  count1 = (count1 + speed) % cycle;
  count2 = (count2 + speed) % cycle;
  background(160, 192, 255);

  stroke('red');
  line(centx - 450, centy, centx + 450, centy);
  line(centx + 450, centy, centx + 450, centy + 250);
  line(centx + 450, centy + 250, centx - 450, centy + 250);
  line(centx - 450, centy + 250, centx -450, centy);

  stroke('black');
  
  rect(centx - 400, count1, 800, 100);
  textSize(24);
  textAlign(CENTER);
  text("ITコミュ", centx, count1 + 50);

  rect(centx - 400, count2, 800, 100);
  textSize(24);
  textAlign(CENTER);
  text("言語コミュ", centx, count2 + 50);

  /*if(order > 1){
    text("感性コミュ", centx, count2 + 50);
  }*/
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
