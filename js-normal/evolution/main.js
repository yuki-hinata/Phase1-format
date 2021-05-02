const set=document.getElementById('setBtn');
const reset=document.getElementById('resetBtn');
const img=document.getElementById('showImg');

set.addEventListener('click',function(){
    img.innerHTML='';
    const random =Math.floor(Math.random() *10);

    const first=document.createElement('div');
    first.innerHTML="<img src='./img/evolution1.png' alt='genn人'/>";
    img.appendChild(first);
    const word1=document.createElement('p');
    word1.innerHTML="原人";
    first.appendChild(word1);

    if(random >= 4){
        const second=document.createElement('div');
        second.innerHTML="<img src='./img/evolution2.png' alt='kyuujinn'/>";
        img.appendChild(second);
        const word2=document.createElement('p');
        word2.innerHTML="旧人";
        second.appendChild(word2);
    }

    if(random >= 7){
        const third=document.createElement('div');
        third.innerHTML="<img src='./img/evolution3.png' alt='shinnjinn'/>";
        img.appendChild(third);
        const word3=document.createElement('p');
        word3.innerHTML="新人";
        third.appendChild(word3);
    }

    if(random >= 9){
        const fourth=document.createElement('div');
        fourth.innerHTML="<img src='./img/evolution4.png' alt='kyuujinn'/>";
        img.appendChild(fourth);
        const word4=document.createElement('p');
        word4.innerHTML="現代人";
        fourth.appendChild(word4);
    }
});

reset.addEventListener('click', function(){
    img.innerHTML='';
});