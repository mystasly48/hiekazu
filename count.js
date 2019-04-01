// admin: @30msl

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
  var hiekazu = new Date(2019, 4, 1, 0, 0);
  var now = new Date();
  if (hiekazu.getTime() < now.getTime()) {
    document.getElementById("left").innerHTML = "<ruby>冷和<rp>（</rp><rt>ヒエカズ</rt><rp>）</rp></ruby>２年までには";
    document.getElementById("count").innerHTML = "ドメインが切れます！<br>さようなら！";
    clearInterval(count);
  } else {
    var left = hiekazu - now
    var days = Math.floor(left / 1000 / 60 / 60 / 24);
    var hrs = Math.floor((left-days*24*60*60*1000)/1000/60/60);
    var min = Math.floor((left-days*24*60*60*1000-hrs*60*60*1000)/1000/60);
    var sec = Math.floor((left-days*24*60*60*1000-hrs*60*60*1000-min*60*1000)/1000);
    document.getElementById("count").innerHTML = days + "日" + hrs + "時間" + min + "分" + sec + "秒";
  }
}
setInterval('count()',100);