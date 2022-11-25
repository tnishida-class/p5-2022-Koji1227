// 最終課題を制作しよう
let centx;
let centy;
let count1;
let speed;
let i1;
let i2;
let textcolor1;
let textcolor2;
let newheight;
// すべての授業リスト
let leclist = ["アメリカ社会論", "アメリカ文化論", "英米テクスト文化論", "宗教文化論", "ヨーロッパ社会文化論"];
// "日本社会文化論", "日本思想文化論", "日本文化交流論", "日本メディア文化論", "日本歴史文化論", "東アジア政治社会論", "オセアニア社会文化論", "北アジア歴史社会論", "東南アジア社会文化論", "東南アジア政治文化論", "環大西洋文化論", 
// 受けた授業リスト
let takenlec = [];
// 面白かった授業リスト
let interelec = [];
let stage;
// let lec0 = {
//   name : "ITコミュニケーションデザイン",
//   cluster : "ITコミュ"
// }
// leclist.push(lec0);
// let lec1 = {
//   name : "コミュニケーション表現論",
//   cluster : "言語コミュ"
// }
// leclist.push(lec1);

function setup(){
  createCanvas(windowWidth, windowHeight);
  centx = width / 2;
  centy = height / 2;
  count1 = 0;
  count2 = 0;
  speed = 3; // 落ちてくるスピードを調整
  i1 = 0;
  i2 = 0;
  textcolor1 = 'black'
  textcolor2 = 'black';
  stage = 1.0;
  newheight = height - 50;
}

function draw(){
  //let p = 10; //すき間の設定
  if(stage == 1.0){
    // ステージ1・冒頭
    background(160, 192, 255);
    frame('red');
    explanation();
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
      count1 = count1 % newheight;
    }
    if(count2 > height){
      i2 += 1;
      textcolor2 = 'black';
      count2 = count2 % newheight;
    }
    background(160, 192, 255);
    frame('red');
    explanation();
    box1(i1, textcolor1);
    box2(i2, textcolor2);
    
    // チェック！
    console.log(takenlec);
  
    if(i1 * 2 >= leclist.length || i2 * 2 + 1 >= leclist.length){
      stage = 1.2
    }
  }
  if(stage == 1.2){
    // ステージ1・終盤
    background(160, 192, 255);
    frame('red');
    explanation();
    if(i1 * 2 >= leclist.length){
      count2 = count2 + speed;
      box2(i2, textcolor2);
      if(count2 >= newheight){
        stage = 2.0;
      }
    }
    if(i2 * 2 + 1 >= leclist.length){
      count1 = count1 + speed;
      box1(i1, textcolor1);
      if(count1 >= newheight){
        stage = 2.0;
      }
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

function explanation(){
  if(stage == 1.0 || stage == 1.1 || stage == 1.2){
    fill('red');
    textSize(20);
    textAlign(CENTER);
    text("自分の受けた授業が赤の枠内に来たらスペースを押してください。", centx, 50);
  }
}

function box1(n, textcolor){
  fill('white');
  noStroke();
  rect(centx - 400, count1 + 50, 800, 100);
  stroke('black');
  noFill();
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  text(leclist[n * 2], centx, count1 + 100);
}

function box2(n, textcolor){
  fill('white');
  noStroke();
  rect(centx - 400, count2 + 50, 800, 100);
  stroke('black');
  noFill();
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  text(leclist[n * 2 + 1], centx, count2 + 100);
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
