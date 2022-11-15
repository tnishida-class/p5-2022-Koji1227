// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 10, 10, '#234567', 255);
}

function balloon(t, x, y, backgroundcolor, textcolor){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2; // これはすき間(padding)
  fill(backgroundcolor);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  triangle(0, 10 + h / 2, 10, 15 + h / 2, 10, 5 + h / 2);
  fill(textcolor);
  text(t, p, h + p);
}
