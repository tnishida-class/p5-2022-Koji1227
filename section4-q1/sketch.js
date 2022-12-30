// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  console.log(scores);

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  let new_px, new_py;
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
    circle(dx * (i + 0.5), ( 100 - scores[i]) / 100 * height, 7);
  }
  px = dx * 0.5;
  py = ( 100 - scores[0]) / 100 * height;
  for(let i = 1; i < scores.length; i ++){
    new_px = dx * (i + 0.5);
    new_py = ( 100 - scores[i]) / 100 * height;
    line(px, py, new_px, new_py);
    px = new_px;
    py = new_py;
  }
}