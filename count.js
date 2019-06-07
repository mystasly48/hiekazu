// author: @30msl

count();
function count(){
  // え？
  // ジャヴァスクリプトってこんなに時間処理面倒なの？
  // マジ？
  // 僕が無能っていうのは大いに認める
  // でもこれは許せない
  // 何がC＃に似ているだ
  // 僕は絶対に許さない
  // おいインドネシア
  // お前もだ
  // 
  // でもこのコードは本当にひどい
  // マジで反省してます
  // 気が向いたら直します
  var now = new Date();
  var hiekazu = new Date(now.getFullYear()+1, 1, 1, 0, 0);
  var hieYear = now.getFullYear() - 2018 + 1;
  var left = hiekazu - now
  var days = Math.floor(left / 1000 / 60 / 60 / 24);
  var hrs = Math.floor((left-days*24*60*60*1000)/1000/60/60);
  var min = Math.floor((left-days*24*60*60*1000-hrs*60*60*1000)/1000/60);
  var sec = Math.floor((left-days*24*60*60*1000-hrs*60*60*1000-min*60*1000)/1000);
  var hieText = "";
  if (days != 0) hieText += days + "日";
  if (hrs != 0) hieText += hrs + "時間";
  if (min != 0) hieText += min + "分";
  if (sec != 0) hieText += sec + "秒";
  document.getElementById("count").innerHTML = hieText;
  document.getElementById("hieYear").innerHTML = hieYear;
}
setInterval('count()',100);