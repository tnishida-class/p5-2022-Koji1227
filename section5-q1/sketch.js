// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 100);
}

function balloon(t, color){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2; // これはすき間(padding)
  fill(color);
  noStroke();
  rect(10, 10, w + p * 2, h + p * 2);
  triangle(0, 15, 10, 20, 10, 10);
  fill(255);
  text(t, p + 10, h + p);
}
