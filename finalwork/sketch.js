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
let leclist = [];
let proflist = [];
let clusterlist = [];
// 受けた授業リスト
let takenlec = ['日本社会文化論', '日本思想文化論', '日本文化交流論','日本メディア文化論', '日本歴史文化論', '東アジア政治社会論'];
let takenprof = [];
let takencluster = [];
// 面白かった授業リスト
let funlec = [];
let funprof = [];
let funcluster = [];
let stage;

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
  stage = 2.2;
  newheight = height - 50;
  listup();
  console.log(stage);
}

function draw(){
  console/log(takenlec);
  if(stage == 1.0){
    // ステージ1・開始前
    background(160, 192, 255);
    frame('red');
    explanation();
  }
  if(stage == 1.1){
    // ステージ1・冒頭
    background(160, 192, 255);
    frame('red');
    explanation();
    count1 = count1 + speed;
    box1(0, textcolor1);
    if(count1 >= centy){
      stage = 1.2;
    }
  }
  if(stage == 1.2){
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
    // console.log(takenlec);
  
    if(i1 * 2 >= leclist.length || i2 * 2 + 1 >= leclist.length){
      stage = 1.3
    }
  }
  if(stage == 1.3){
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
  if(stage == 2.0){
    background(160, 192, 255);
    frame('blue');
    explanation();
  }
  if(stage == 2.1){
    // ステージ2・冒頭
    background(160, 192, 255);
    frame('blue');
    explanation();
    count1 = count1 + speed;
    box1(0, textcolor1);
    if(count1 >= centy){
      stage = 2.2;
    }
  }
  if(stage == 2.2){
    // ステージ2・メイン
    count1 = count1 + speed;
    count2 = count2 + speed;
    if(count1 > height){
      i1 += 1;
      textcolor1 = 'red';
      count1 = count1 % newheight;
    }
    if(count2 > height){
      i2 += 1;
      textcolor2 = 'red';
      count2 = count2 % newheight;
    }
    background(160, 192, 255);
    frame('blue');
    explanation();
    box1(i1, textcolor1);
    box2(i2, textcolor2);
    
    // チェック！
    // console.log(funlec);
  
    if(i1 * 2 >= takenlec.length || i2 * 2 + 1 >= takenlec.length){
      stage = 2.3
    }
  }
  if(stage == 2.3){
    // ステージ2・終盤
    background(160, 192, 255);
    frame('blue');
    explanation();
    if(i1 * 2 >= takenlec.length){
      count2 = count2 + speed;
      box2(i2, textcolor2);
      if(count2 >= newheight){
        stage = 3.0;
      }
    }
    if(i2 * 2 + 1 >= takenlec.length){
      count1 = count1 + speed;
      box1(i1, textcolor1);
      if(count1 >= newheight){
        stage = 3.0;
      }
    }
  }
  if(stage == 3.0){
    // ここに診断結果を表示
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
  if(stage == 1.0){
    fill('red');
    textSize(20);
    textAlign(CENTER);
    text("エンターを押すと開始します。", centx, 100);
  }
  if(stage == 1.0 || stage == 1.1 || stage == 1.2 || stage == 1.3){
    fill('red');
    textSize(20);
    textAlign(CENTER);
    text("自分の受けた授業が赤の枠内に来たらスペースを押してください。", centx, 50);
  }
  if(stage == 2.0){
    fill('blue');
    textSize(20);
    textAlign(CENTER);
    text("エンターを押すと開始します。", centx, 100);
  }
  if(stage == 2.0 || stage == 2.1 || stage == 2.2 || stage == 2.3){
    stroke('blue');
    fill('blue');
    textSize(20);
    textAlign(CENTER);
    text("次は，受けた授業のうち，面白かった授業が青の枠内に来たらスペースを押してください。", centx, 50);
  }
}

function box1(n, textcolor){
  let hyoji;
  fill('white');
  noStroke();
  rect(centx - 400, count1 + 50, 800, 100);
  noFill();
  stroke(textcolor);
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  if(stage == 1.1 || stage == 1.2 || stage == 1.3){
    hyoji = leclist[n * 2] + "\n（" + proflist[n * 2] + "先生）";
  }
  if(stage == 2.1 || stage == 2.2 || stage == 2.3){
    hyoji = takenlec[n * 2] + "\n（" + takenprof[n * 2] + "先生）";
  }
  text(hyoji, centx, count1 + 100);
}

function box2(n, textcolor){
  let hyoji;
  fill('white');
  noStroke();
  rect(centx - 400, count2 + 50, 800, 100);
  stroke(textcolor);
  noFill();
  fill(textcolor);
  textSize(24);
  textAlign(CENTER);
  if(stage == 1.1 || stage == 1.2 || stage == 1.3){
    hyoji = leclist[n * 2 + 1] + "\n（" + proflist[n * 2 + 1] + "先生）";
  }
  if(stage == 2.1 || stage == 2.2 || stage == 2.3){
    hyoji = takenlec[n * 2 + 1] + "\n（" + takenprof[n * 2 + 1] + "先生）";
  }
  text(hyoji, centx, count2 + 100);
}

function keyPressed(){
  if(keyCode == " ".charCodeAt(0)){
    if(stage == 1.1 || stage == 1.2 || stage == 1.3){
      if(count1 >= centy - 150 && count1 <= centy + 200){
        if(textcolor1 = 'red'){
          // もう赤色になっている場合は元に戻す
          space_push(1, 1, 0, 1);
        }
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        space_push(1, 1, 0, 0);
      }
      if(count2 >= centy - 150 && count2 <= centy + 200){
        if(textcolor2 = 'red'){
          // もう赤色になっている場合は元に戻す
          space_push(1, 0, 1, 1);
        }
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        space_push(1, 0, 1, 0);
      }
    }
    if(stage == 2.1 || stage == 2.2 || stage == 2.3){
      if(count1 >= centy - 150 && count1 <= centy + 200){
        if(textcolor1 = 'blue'){
          // もう青色になっている場合は元に戻す
          space_push(2, 1, 0, 1);
        }
        // 色を青に変えて「面白かった授業リスト」にプッシュ
        space_push(2, 1, 0, 0);
      }
      if(count2 >= centy - 150 && count2 <= centy + 200){
        if(textcolor2 = 'blue'){
          // もう青色になっている場合は元に戻す
          space_push(2, 0, 1 , 1);
        }
        // 色を青に変えて「面白かった授業リスト」にプッシュ
        space_push(2, 0, 1, 0);
      }
    }
  }
  if(keyCode == ENTER){
    if(stage == 1.0){
      stage = 1.1;
    }
    if(stage == 2.0){
      stage = 2.1;
      count1 = 0;
      count2 = 0;
      i1 = 0;
      i2 = 0;
      textcolor1 = 'red';
      textcolor2 = 'red';
    }
  }
}

function space_push(a, b, c, d){
  // a : ステージ（整数値）, b : i1, c : i2, d : 0(追加) or 1(削除) 
  let color;
  let n;
  if(d == 0){
    if(a == 1){
      color = 'red';
    }
    if(a == 2){
      color = 'blue';
    }
  }
  if(d == 1){
    if(a == 1){
      color = 'black';
    }
    if(a == 2){
      color = 'red';
    }
  }
  if(c == 0){
    n = b * 2;
    textcolor1 = color;
  }
  if(b == 0){
    n = c * 2 + 1;
    textcolor2 = color;
  }
  if(d == 0){
    if(a == 1){
      takenlec.push(leclist[n]);
      takenprof.push(proflist[n]);
      takencluster.push(clusterlist[n]);
    }
    if(a == 2){
      funlec.push(takenlec[n]);
      funprof.push(takenprof[n]);
      funcluster.push(takencluster[n]);
    }
  }
  if(d == 1){
    if(a == 1){
      takenlec.pop();
      takenprof.pop();
      takencluster.pop();
      if(c == 0){
        textcolor1 = 'black';
      }
      if(b == 0){
        textcolor2 = 'black';
      }
    }
    if(a == 2){
      funlec.pop();
      funprof.pop();
      funcluster.pop();
    }
  }
}

function listup(){
  leclist = ['日本社会文化論', '日本思想文化論', '日本文化交流論','日本メディア文化論', '日本歴史文化論', '東アジア政治社会論'];
  proflist = ['栢木/辛島', '昆野', '寺内', '板倉', '長', '谷川'];
  for(let x = 0; x < 12; x++){
    for(let y = 0; y < 5; y++){
      // 基本クラスタあたり5つの授業がある
      push.clusterlist = x;
    }
    if(x == 2 || x == 8){
      // ヨロアメと芸術文化だけ6つ授業がある
      push.clusterlist = x;
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
