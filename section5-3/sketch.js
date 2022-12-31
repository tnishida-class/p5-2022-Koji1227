// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(300, 30);
  calendar(2023, 1);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  textSize(14);
  textAlign(CENTER);
  const w = 40;
  const h = 30;
  let count = 1;
  text('SUN', w * 1, h);
  text('MON', w * 2, h);
  text('TUE', w * 3, h);
  text('WED', w * 4, h);
  text('THU', w * 5, h);
  text('FRI', w * 6, h);
  text('SAT', w * 7, h);

  console.log(dayOfWeek(2023, 1, 1));

  // ここはなぜか上手く動きません
  for(let d = 1; d <= daysInMonth(y, m); d++){
  // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    text(d, w * ((dayOfWeek(y, m, d)) + 1), h * (count + 1))
    if(dayOfWeek(y, m, d) == 6){
      count += 1;
    }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let count = 0;
  for(i = 1970; i < y; i++){
    count += daysInYear(i);
  }
  count += dayOfYear(y, m, d);
  // 1970年1月1日は木曜日(= 4)
  return (count + 3) % 7
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
