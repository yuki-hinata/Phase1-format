let i = 0

const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const fizzBtn = function(){
    i = i+1;
    if (i % 3===0) {
        showNum.innerHTML = 'fizz';
    }else {
        alert('ダメダメだ―')
        location.reload();
    }
};

const buzzBtn = function(){
    i = i+1;
    if (i % 5===0) {
        showNum.innerHTML='buzz'
    }else{
        alert('ダメダメだ―')
        location.reload();
    }
};

const fizzbuzzBtn = function(){
    i =i+1;
    if ((i % 3===0)&&(i % 5===0)) {
        showNum.innerHTML='fizzbuzz';
    }else{
        alert('ダメダメだー')
        location.reload();
    }
};

const numBtn = function(){
    i = i+1;
    if (i % 3===0 || i % 5===0) {
        alert('ダメダメだ―');
        location.reload();
    }
    showNum.innerHTML= i;
};