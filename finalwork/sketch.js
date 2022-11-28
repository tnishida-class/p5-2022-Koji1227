// 最終課題を制作しよう
let centx;
let centy;
let count1;
let count2;
let speed;
let i1;
let i2;
let textcolor1;
let textcolor2;
let newheight;
// すべての授業リスト
let leclist;
let proflist;
let clusterlist = [];
// 受けた授業リスト
let takenlec = [];
let takenprof = [];
let takencluster = [];
// 面白かった授業リスト
let funlec = [];
let funprof = [];
let funcluster = [];

let redlist = [];
let bluelist = [];
let cl;
let stage;
let x1;
let x2;
let y1;
let y2;

function setup(){
  createCanvas(windowWidth, windowHeight);
  centx = width / 2;
  centy = height / 2;
  count1 = 0;
  count2 = 0;
  speed = 8; // 落ちてくるスピードを調整
  i1 = 0;
  i2 = 0;
  textcolor1 = 'black';
  textcolor2 = 'black';
  stage = 1.0;
  newheight = height - 50;
  listup();
}

function draw(){
  if(stage == 1.0){
    background(160, 192, 255);
    frame('red');
    explanation();
  }
  if(stage == 1.1){
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
    if(i1 * 2 >= leclist.length || i2 * 2 + 1 >= leclist.length){
      stage = 1.3
    }
  }
  if(stage == 1.3){
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
    if(i1 * 2 >= takenlec.length || i2 * 2 + 1 >= takenlec.length){
      stage = 2.3
    }
  }
  if(stage == 2.3){
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
    background(160, 192, 255);
    for(let i = 0; i < 12; i++){
      redlist[i] = 0;
      bluelist[i] = 0;
    }
    for(let p = 0; p < takencluster.length; p++){
      for(let q = 0; q < 12; q++){
        if(takencluster[p] == q){
          redlist[q] = redlist[q] + 1;
        }
      }
    }
    for(let p = 0; p < funcluster.length; p++){
      for(let q = 0; q < 12; q++){
        if(funcluster[p] == q){
          bluelist[q] = bluelist[q] + 1;
        }
      }
    }
    let point = [];
    for(let i = 0; i < 12; i++){
      point.push(redlist[i] + bluelist[i] * 2);
    }
    let highest = 0;
    let highcl = [];
    console.log(point);
    for(let i = 0; i < 12; i++){
      if(highest < point[i]){
        highest = point[i];
      }
    }
    for(i = 0; i < 12; i++){
      if(point[i] == highest){
        highcl.push(i);
      }
    }
    console.log(highest);
    console.log(highcl.length);
    if(highcl.length == 1){
      let highcl_no = highcl[0];
      let content = 'あなたのオススメクラスタは' + cl[highcl_no] + 'です！';
      textAlign(CENTER);
      textSize(25);
      text(content, centx, 40);
    }
    else {
      textAlign(CENTER);
      textSize(25);
      text('あなたはバランス型です！', centx, 20);
    }

    explanation();
    regularPolygon(centx, centy, 50, redlist, 'red');
    regularPolygon(centx, centy, 50, bluelist, 'blue');
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
    text('エンターを押すと開始します。', centx, 100);
  }
  if(stage == 1.0 || stage == 1.1 || stage == 1.2 || stage == 1.3){
    fill('red');
    textSize(20);
    textAlign(CENTER);
    text('自分の受けた授業が赤の枠内に来たらスペースを押してください。', centx, 50);
  }
  if(stage == 2.0){
    fill('blue');
    textSize(20);
    textAlign(CENTER);
    text('エンターを押すと開始します。', centx, 100);
  }
  if(stage == 2.0 || stage == 2.1 || stage == 2.2 || stage == 2.3){
    stroke('blue');
    fill('blue');
    textSize(20);
    textAlign(CENTER);
    text('次は，受けた授業のうち，面白かった授業が青の枠内に来たらスペースを押してください。', centx, 50);
  }
  if(stage == 3.0){
    // let list;
    // for(i = 0; i < 1; i++){
    //   list = [];
    //   for(j = 0; j < 12; j++){
    //     list.push(i + 1);
    //   }
    //   regularPolygon(centx, centy, 50, list, 'black');
    // }
    regularPolygon(centx, centy, 50, [1,1,1,1,1,1,1,1,1,1,1,1], 'black');
    regularPolygon(centx, centy, 50, [2,2,2,2,2,2,2,2,2,2,2,2], 'black');
    regularPolygon(centx, centy, 50, [3,3,3,3,3,3,3,3,3,3,3,3], 'black');
    regularPolygon(centx, centy, 50, [4,4,4,4,4,4,4,4,4,4,4,4], 'black');
    regularPolygon(centx, centy, 50, [5,5,5,5,5,5,5,5,5,5,5,5], 'black');
    regularPolygon(centx, centy, 50, [6,6,6,6,6,6,6,6,6,6,6,6], 'black');

    let x;
    let y;
    for(i = 0; i < 12; i++){
      let theta = PI * 2 * i / 12 - HALF_PI;
      x = centx + cos(theta) * 6 * 50;
      y = centy + sin(theta) * 6 * 50;
      textSize(20);
      textAlign(CENTER);
      fill('black');
      noStroke();
      content = cl[i]
      text(content, x, y);
    }
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
    hyoji = leclist[n * 2] + '\n（' + proflist[n * 2] + '先生）';
  }
  if(stage == 2.1 || stage == 2.2 || stage == 2.3){
    hyoji = takenlec[n * 2] + '\n（' + takenprof[n * 2] + '先生）';
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
    hyoji = leclist[n * 2 + 1] + '\n（' + proflist[n * 2 + 1] + '先生）';
  }
  if(stage == 2.1 || stage == 2.2 || stage == 2.3){
    hyoji = takenlec[n * 2 + 1] + '\n（' + takenprof[n * 2 + 1] + '先生）';
  }
  text(hyoji, centx, count2 + 100);
}

function keyPressed(){
  if(keyCode == ' '.charCodeAt(0)){
    if(stage == 1.1 || stage == 1.2 || stage == 1.3){
      if(count1 >= centy - 150 && count1 <= centy + 200){
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        space_push(1, i1, 'i1');
      }
      if(count2 >= centy - 150 && count2 <= centy + 200){
        // 色を赤に変えて「受けた授業リスト」にプッシュ
        space_push(1, i2, 'i2');
      }
    }
    if(stage == 2.1 || stage == 2.2 || stage == 2.3){
      if(count1 >= centy - 150 && count1 <= centy + 200){
        // 色を青に変えて「面白かった授業リスト」にプッシュ
        space_push(2, i1, 'i1');
      }
      if(count2 >= centy - 150 && count2 <= centy + 200){
        // 色を青に変えて「面白かった授業リスト」にプッシュ
        space_push(2, i2, 'i2');
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

function space_push(a, b, c){
  // a : ステージ（整数値）, b : i1 or i2, c : i1かi2かの指標
  let color;
  let n;
  if(a == 1){
    color = 'red';
    if (c == 'i1') {
      n = b * 2;
      textcolor1 = color;
    }
    if (c == 'i2') {
      n = b * 2 + 1;
      textcolor2 = color;
    }
    takenlec.push(leclist[n]);
    takenprof.push(proflist[n]);
    takencluster.push(clusterlist[n]);
  }
  if (a == 2) {
    color = 'blue';
    if (c == 'i1') {
      n = b * 2;
      textcolor1 = color;
    }
    if (c == 'i2') {
      n = b * 2 + 1;
      textcolor2 = color;
    }
    funlec.push(takenlec[n]);
    funprof.push(takenprof[n]);
    funcluster.push(takencluster[n]);
  }
}

function regularPolygon(cx, cy, r, list, color){
  let n = list.length;
  let newlist = [];
  for(i = 0; i < n; i++){
    newlist.push(list[i] * 50);
  }
  for(i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - HALF_PI;
    if(i == 0){
      let theta_n_1 = TWO_PI * (n - 1) * 1 / n - HALF_PI;
      x1 = cx + cos(theta_n_1) * newlist[n - 1];
      y1 = cy + sin(theta_n_1) * newlist[n - 1];
    }
    if(i == n){
      x1 = cx + cos(HALF_PI) * newlist[0];
      y1 = cy + sin(HALF_PI) * newlist[0];
    }
    x2 = cx + cos(theta) * newlist[i];
    y2 = cy + sin(theta) * newlist[i];
    stroke(color);
    line(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
}

// 講義科目のリストアップ
function listup(){
  leclist = ['日本社会文化論', '日本思想文化論', '日本文化交流論','日本メディア文化論', '日本歴史文化論', '東アジア政治社会論', 'オセアニア社会文化論', '北アジア歴史社会論', '東南アジア社会文化論', '東南アジア政治文化論', '環大西洋文化論', 'アメリカ社会論', 'アメリカ文化論', '英米テクスト文化論', '宗教文化論', 'ヨーロッパ社会文化論', '文化人類学', '現代社会人類学', '現代民族誌学', '比較民族学', '文化混交論', '越境文化形成論', '科学技術文明論', '比較文化論', '文化翻訳論', '越境社会文化論', '国際関係論', '多文化政治社会論', '比較政策論', '比較政治社会論', '平和構築論', '近現代社会思想論', '近現代文化言説論', '近現代表象文化論', '近現代経済思想論', '近現代政治思想論', '現代社会理論', 'グローバル正義論', 'ジェンダー社会文化論', 'メディア社会文化論', '現代規範論', '文化政策論', '近現代アート論', '芸術文化表象論', '視覚文化論', '表象文化形成論', '芸術文化環境論', '第二言語習得論', '言語機能論', 'コミュニケーション表現論', '翻訳コミュニケーション論', 'グローバル・イングリッシュ・ヒストリー', '非言語コミュニケーション論', '音声コミュニケーション論', 'コミュニケーション構造論', 'コミュニケーション比較論', '認知コミュニケーション論', '現代IT入門', 'ITコミュニケーションデザイン', '社会システム科学', 'データマネージメント', '統計情報処理'];
  // 2022年度の担当教員/2021年度の担当教員
  proflist = ['辛島/栢木', '昆野', '寺内', '板倉', '長', '谷川', '深川/平野', '池尻/萩原', '伊藤', '貞好', '小澤', '井上', '西谷', '松家・西谷・深町/野谷', '野谷', '衣笠/坂本', '大石', '石田(慎)/梅屋', '下條', '岡田', '齋藤', '田中(祐)','塚原', '深町/遠田', '北村', '近藤', '宮脇/坂井', '新川', '安岡', '李/阪野', '中村', '鹿野', '石田(圭)', '松家', '市田', '上野', '西澤','櫻井', '青山', '小笠原', '工藤', '藤野', '池上', '上畑/岡本', '蟻谷/井口', '岩本', '高田', '田中(順)', '石田(雄)', '小松原', '藤濤', '西村', '北田', '水口', '南本', '巽', '松本', '大月/森下', '西田', '村尾', '清光', '康'];
  for(let x = 0; x < 12; x++){
    for(let y = 0; y < 5; y++){
      // 基本クラスタあたり5つの授業がある
      clusterlist.push(x);
    }
    if(x == 2 || x == 8){
      // ヨロアメと芸術文化だけ6つ授業がある
      clusterlist.push(x);
    }
  }
  for(let z = 0; z < 12; z++){
    redlist.push(0);
    bluelist.push(0);  
  }
  cl = ['日本学', 'ｱｼﾞｱ・太平洋文化論', 'ﾖｰﾛｯﾊﾟ・ｱﾒﾘｶ文化論', '異文化関係論', '多文化共生論', '越境文化論', 'ﾓﾀﾞﾆﾃｨ論', '芸術文化論', '先端社会論', '言語ｺﾐｭﾆｹｰｼｮﾝ論', '感性ｺﾐｭﾆｹｰｼｮﾝ論', '情報ｺﾐｭﾆｹｰｼｮﾝ論'];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
