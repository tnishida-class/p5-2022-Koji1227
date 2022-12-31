//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  // 何も操作しなくてもボールが湧いてくる機能を追加
  count = (count + 1) % 100;
  if(count == 0){
    let size_random = random(10, 60);
    let vx_random = random(-5, 5);
    let vy_random = random(-5, 5);
    const b = { x: width / 2, y: height / 2, size: size_random, vx: vx_random, vy: vy_random };
    balls.push(b);    
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    // ボールのサイズをランダムに変更
    let size_random = random(10, 60);
    const b = { x: mouseX, y: mouseY, size: size_random, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
