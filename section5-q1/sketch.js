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
  fill(backgroundcolor);
  noStroke();
  rect(x + 10, y, w + p * 2, h + p * 2);
  triangle(x, y + h * 0.5 + p, x + 10, y + h * 0.5 + p - 5, x + 10, y + h * 0.5 + p + 5);
  stroke(backgroundcolor);
  noFill();
  arc(x + 10 + w + p * 2 + 10, y + h * 0.5 + p, 20, 15, PI, PI * 2);
  arc(x + 10 + w + p * 2 + 30, y + h * 0.5 + p, 20, 15, 0, PI);
  fill(textcolor);
  text(t, x + 10 + p, y + h * 0.5 + p);
}
