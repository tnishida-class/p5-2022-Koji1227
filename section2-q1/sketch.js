// 小手調べ
function setup(){
  createCanvas(200, 200);
  fill(0);
  for(let i = 0; i < 10; i++){
    noFill();
    stroke(0, 0, 255);
    ellipse(100, 100, 10 * i + 10)
    if(i >= 5){
      stroke(255, 0, 0);
      ellipse(100, 100, 10 * i + 10);
    }
  }
}
