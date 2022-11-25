// 最終課題を制作しよう
let centx;
let centy;
let count1;
let cycle;
let speed;
let i1;
let leclist = ["ITコミュニケーションデザイン", "コミュニケーション表現論", "音声コミュニケーション論", "社会システム科学"];
/*let lec0 = {
  name : "ITコミュニケーションデザイン",
  cluster : "ITコミュ"
}
leclist.push(lec0);
let lec1 = {
  name : "コミュニケーション表現論",
  cluster : "言語コミュ"
}
leclist.push(lec1);*/

function setup(){
  createCanvas(windowWidth, windowHeight);
  centx = width / 2;
  centy = height / 2;
  count1 = 0;
  count2 = height / 2;
  speed = 3; // 落ちてくるスピードを調整
}

function draw(){
  let p = 10; //すき間の設定
  i1 = 0;
  i2 = 0;
  //count1 = (count1 + speed) % height
  count1 = count1 + speed;
  count2 = count2 + speed;
  if(count1 > height){
    i1 += 1;
    count1 = count1 % height
  }
  if(count2 > height){
    i2 += 1;
    count2 = count2 % height
  }
  background(160, 192, 255);

  stroke('red');
  line(centx - 450, centy, centx + 450, centy);
  line(centx + 450, centy, centx + 450, centy + 250);
  line(centx + 450, centy + 250, centx - 450, centy + 250);
  line(centx - 450, centy + 250, centx - 450, centy);

  //box1(i1, 'black')
  
  stroke('black');
  rect(centx - 400, count1, 800, 100);
  textSize(24);
  textAlign(CENTER);
  text(i1, centx, count1 + 50);

  /*rect(centx - 400, count2, 800, 100);
  textSize(24);
  textAlign(CENTER);
  text(leclist[i2], centx, count2 + 50);*/
}

function box1(n, textcolor){
  noFill();
  stroke('black');
  rect(centx - 400, count1, 800, 100);
  Fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  text(n, centx, count1 + 50);
}

function keyPressed(){
  if(keyCode == " ".charCodeAt(0)){
    speed = 1;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
