const btn=document.getElementById('dateSearch');
const time1=document.getElementById('diffTime');

let timer;

btn.addEventListener('click', function(){
    clearInterval(timer);
    timer=setInterval(() => {
        console.log('aaaa');
        const date=document.getElementById('dateSet').value;
        const diff=moment(`${date}`).diff(moment());
        const duration=moment.duration(diff);
        const days = Math.floor(duration.asDays());
        const hours=duration.hours();
        const minutes=duration.minutes();
        const seconds=duration.seconds();
        time1.textContent=`${date}まで後${days}日${hours}時間${minutes}分${seconds}秒`;
    }, 1000);
});