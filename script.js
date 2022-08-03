const daysTxt = document.querySelector('div.card.days');
const hoursTxt=document.querySelector('.hours');
const minutesTxt=document.querySelector('.minutes');
const secondsTxt=document.querySelector('.seconds');



function countDown(){
  const launchDate=new Date("9 Sep 2022 09:00:00");
  const currentTime=new Date();

  const secondsToDate=(launchDate-currentTime)/1000;
  daysTxt.textContent=Math.floor(secondsToDate/3600/24);
  hoursTxt.textContent=timeFormatter(Math.floor(secondsToDate/3600)%24);
  minutesTxt.textContent=timeFormatter(Math.floor(secondsToDate/60)%60);
  secondsTxt.textContent=timeFormatter(Math.floor(secondsToDate)%60);
}

function timeFormatter(time){
  return time<10?"0"+time:time;
}

countDown();
setInterval(countDown,1000);