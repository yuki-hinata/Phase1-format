let timer2;

const Btn1 =document.getElementById('confirmTime2');
const Btn2 =document.getElementById('startTimer2');

let startTime;
let owari;

Btn1.addEventListener('click', function(){
    owari = new Date();
    let difftime = Math.floor((owari.getTime() - startTime.getTime())/1000);
    if(difftime ===20){
        alert('大正解');
    }else if(difftime<20){
        alert(`あと${difftime}秒`);
    }else{
        alert(`もう${difftime}秒よ`);
    }
});

Btn2.addEventListener('click',function(){
    startTime = new Date();
    timer2= setInterval('countUp2',1000);
});

const countUp2 = function(){
    let checkTime = new Date();
    let difftime =Math.floor((owari.getTime() - startTime.getTime())/1000);
    if (difftime===40){
        alert('バイバイキーン');
    }
};