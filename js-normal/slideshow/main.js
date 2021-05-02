let seasonindex=0
const season=[
{img: './img/slide1.png', text:'春へ'},
{img: './img/slide2.png', text:'夏へ'},
{img: './img/slide3.png', text:'秋へ'},
{img: './img/slide4.png', text:'冬へ'},

];

const Btn =document.getElementById('pushBtn');
Btn.textContent =season[seasonindex].text;
const view=document.getElementById('viewImg');
view.setAttribute('src', season[seasonindex].img);

Btn.addEventListener('click', function(){
    if(seasonindex ===3){
        seasonindex = 0;
    }else{
        seasonindex = seasonindex + 1;
    }
    view.setAttribute('src', season[seasonindex].img);
    Btn.textContent =season[seasonindex].text;
});

const skip=document.getElementById('skipBtn');
skip.addEventListener('click', function(){
    seasonindex=document.getElementById('seasonNum').value;
    seasonindex=parseInt(seasonindex);
    view.setAttribute('src', season[seasonindex].img);
    Btn.textContent =season[seasonindex].text;
});