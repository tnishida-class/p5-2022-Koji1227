// テキスト「練習：繰り返し」
// 太い線と細い線が交互に出てくるパターン
// 練習：以下の2パターンにプログラムを書き換えてみましょう
// (1) 細い、太い、すごく太い、の3本周期で太さが変わる
// (2) 最初の3本が細い、次の3本が太い、最後の3本がすごく太い

function setup() {
  createCanvas(300,100);
  background(196);
  for(let i = 0; i < 9; i++){
    // これが(1)です
    // 変えるのはここから
    if(i % 3 == 0){
      strokeWeight(1);
    }
    else {
      if(i % 3 == 1){
        strokeWeight(3);
      }
      else {
        strokeWeight(5);
    }}
    // ここまでの間になります
    let x = i * 10 + 10;
    line(x, 0, x, 100);
  }
  for(let j = 0; j < 9; j++){
    // これが(2)です
    // 変えるのはここから
    if(j < 3){
      strokeWeight(1);
    }
    else {
      if(j < 6){
        strokeWeight(3);
      }
      else {
        strokeWeight(5);
    }}
    // ここまでの間になります
    let x2 = j * 10 + 10 + 200;
    line(x2, 0, x2, 100);
  }
}
