count();
function count(){
  var now = new Date();
  var hiekazu = new Date(now.getFullYear()+1, 0, 1);
  var hieYear = now.getFullYear() - 2018 + 1;
  
  var leftSec = (hiekazu - now)/1000;
  var days = Math.floor(leftSec/(60*60*24));
  leftSec -= days*60*60*24;
  var hrs = Math.floor(leftSec/(60*60));
  leftSec -= hrs*60*60;
  var min = Math.floor(leftSec/60);
  leftSec -= min*60;
  var sec = Math.floor(leftSec);

  var hieText = "";
  if (days != 0) hieText += days + "日";
  if (hrs != 0) hieText += hrs + "時間";
  if (min != 0) hieText += min + "分";
  if (sec != 0) hieText += sec + "秒";
  document.getElementById("count").innerHTML = hieText;
  document.getElementById("hieYear").innerHTML = hieYear;
}
setInterval('count()',100);

