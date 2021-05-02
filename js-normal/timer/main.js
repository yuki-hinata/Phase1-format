let lefthour;
let leftminute;
let leftsec;

const now=document.getElementById('nowTime');
const set =document.getElementById('setTime');
set.addEventListener('click', function(){
    sec = document.getElementById('inputTime').value;
    leftsec = sec % 60;
    leftminute= Math.floor((sec % 3600)/60);
    lefthour = Math.floor(sec/3600);
    now.textContent=`残り${lefthour}時間${leftminute}分${leftsec}秒:セット完了です`
});

let timer;
const countDown = function(){
    sec= sec - 1;
    leftsec = sec % 60;
    leftminute= Math.floor((sec % 3600)/60);
    lefthour = Math.floor(sec/3600);
    now.textContent=`残り${lefthour}時間${leftminute}分${leftsec}秒`
    now.textContent=sec;
    if(sec === 0){
        alert('おわーり');
        clearInterval(timer);
    }
};

const start=document.getElementById('startTimer');

start.addEventListener('click',function(){
    clearInterval(timer);
    timer = setInterval(countDown,1000);
});

const stop=document.getElementById('stopTimer');
stop.addEventListener('click',function(){
    clearInterval(timer);
    leftsec = sec % 60;
    leftminute= Math.floor((sec % 3600)/60);
    lefthour = Math.floor(sec/3600);
    now.textContent=`残り${lefthour}時間${leftminute}分${leftsec}秒でストップしました`
});