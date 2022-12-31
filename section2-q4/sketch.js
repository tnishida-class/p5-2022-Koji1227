function setup() {
  // ギリシア国旗
  const g_blue = color(0, 103, 192);
  const white = color(255);
  createCanvas(660, 180);
  noStroke();
  background(white);

  const d = 180 / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    fill(i % 2 == 0 ? g_blue : white);
    rect(0, i * d, 270, (i + 1) * d);
  }

  fill(g_blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(white);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  rect(0, d * 2, d * 5, d);
  rect(d * 2, 0, d, d * 5);


  // アルツァフ共和国国旗 (どこやねん)
  const red = color(220, 4, 20); 
  const blue = color(4, 52, 164);
  const yellow = color(244, 172, 4);
  
  fill(red);
  rect(300, 0, d * 18, d * 3);
  fill(blue);
  rect(300, d * 3, d * 18, d * 3);
  fill(yellow);
  rect(300, d * 6, d * 18, d * 3);
  fill(white);
  for(let i = 0; i < 5; i++){
    rect(300 + d * (15 - 1.5 * i), d * i,  d * 3, d);
  }
  for(let i = 0; i < 5; i++){
    rect(300 + d * (9 + 1.5 * i), d * (4 + i),  d * 3, d);
  }
}
