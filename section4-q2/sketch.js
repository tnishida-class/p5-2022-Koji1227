// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
  let ratio = [];
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    ratio[i] = scores[i] / total;
    sum += ratio[i];
    arc(200, 200, 300, 300, (sum - (ratio[i])) * TWO_PI, sum * TWO_PI, PIE);
  }
}
