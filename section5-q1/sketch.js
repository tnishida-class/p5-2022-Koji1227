// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 100, 70, '#234567', 255);
}

function balloon(t, x, y, backgroundcolor, textcolor){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2; // これはすき間(padding)
  let rw = w + p * 2 //長方形の横の長さ
  let rh = h + p * 2 //長方形の縦の長さ
  let rsc = y + h * 0.5 + p //長方形の左の辺の真ん中のy座標
  fill(backgroundcolor);
  noStroke();
  rect(x + 10, y, rw, rh);
  triangle(x, rsc, x + 10, rsc - 5, x + 10, rsc + 5);
  stroke(backgroundcolor);
  noFill();
  arc(x + 10 + rw + 10, rsc, 20, 15, PI, PI * 2);
  arc(x + 10 + rw + 30, rsc, 20, 15, 0, PI);
  fill(textcolor);
  text(t, x + 10 + p, rsc);
}
