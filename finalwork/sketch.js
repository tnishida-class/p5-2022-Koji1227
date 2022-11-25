// 最終課題を制作しよう
let centx;
let centy;
let count1;
let speed;
let i1;
let i2;
let textcolor1;
let textcolor2;
// すべての授業リスト
let leclist = ["ITコミュニケーションデザイン", "コミュニケーション表現論", "音声コミュニケーション論", "社会システム科学", "アメリカ社会論", "翻訳コミュニケーション論"];
// 受けた授業リスト
let takenlec = [];
// 面白かった授業リスト
let interelec = [];
let stage;
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
  count2 = 0;
  speed = 3; // 落ちてくるスピードを調整
  i1 = 0;
  i2 = 0;
  textcolor1 = 'black';
  textcolor2 = 'black';
  stage = 1.0;
}

function draw(){
  //let p = 10; //すき間の設定
  if(stage == 1.0){
    // ステージ1・冒頭
    background(160, 192, 255);
    frame('red');
    count1 = count1 + speed;
    box1(0, textcolor1);
    if(count1 >= centy){
      stage = 1.1;
    }
  }
  if(stage == 1.1){
    // ステージ1・メイン
    count1 = count1 + speed;
    count2 = count2 + speed;
    if(count1 > height){
      i1 += 1;
      textcolor1 = 'black';
      count1 = count1 % height
    }
    if(count2 > height){
      i2 += 1;
      textcolor2 = 'black';
      count2 = count2 % height
    }
    background(160, 192, 255);
    frame('red');
    box1(i1, textcolor1);
    box2(i2, textcolor2);
    
    // チェック！
    console.log(takenlec);
  
    if(i1 * 2 > leclist.length || i2 * 2 + 1 > leclist.length){
      stage = 2
    }
  }

}

function frame(linecolor){
  stroke(linecolor);
  line(centx - 450, centy, centx + 450, centy);
  line(centx + 450, centy, centx + 450, centy + 250);
  line(centx + 450, centy + 250, centx - 450, centy + 250);
  line(centx - 450, centy + 250, centx - 450, centy);
}

function box1(n, textcolor){
  fill('white');
  noStroke();
  rect(centx - 400, count1, 800, 100);
  stroke('black');
  noFill();
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  text(leclist[n * 2], centx, count1 + 50);
}

function box2(n, textcolor){
  fill('white');
  noStroke();
  rect(centx - 400, count2, 800, 100);
  stroke('black');
  noFill();
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  text(leclist[n * 2 + 1], centx, count2 + 50);
}

function keyPressed(){
  if(stage == 1.0 || stage == 1.1 || stage == 1.2){
    if(keyCode == " ".charCodeAt(0)){
      if(count1 >= centy - 100 && count1 <= centy + 250){
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        textcolor1 = 'red';
        takenlec.push(leclist[i1 * 2]);
      }
      if(count2 >= centy - 100 && count2 <= centy + 250){
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        textcolor2 = 'red';
        takenlec.push(leclist[i2 * 2 + 1])
      }
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
