let player1Timer;
let player2Timer;

let player1Num = 1;
let player2Num = 1;

let turn = 2;

const setPlayer1dice = document.getElementById('setPlayer1dice');
const setPlayer2dice = document.getElementById('setPlayer2dice');
const Btn1 =document.getElementById('player1Btn');
const Btn2 =document.getElementById('player2Btn');
const body =document.querySelector('body');

const result =document.getElementById('result');


let player1Dice =`./img/saikoro${player1Num}.png`;
setPlayer1dice.setAttribute('src', player1Dice);

let player2Dice =`./img/saikoro${player2Num}.png`;
setPlayer2dice.setAttribute('src', player2Dice);

const player1Random = function(){
    player1Num = Math.floor(Math.random() * 6 + 1);
    player1Dice = `./img/saikoro${player1Num}.png`;
    setPlayer1dice.setAttribute('src', player1Dice);
};

const player2Random = function(){
    player2Num = Math.floor(Math.random() * 6 + 1);
    player2Dice = `./img/saikoro${player2Num}.png`;
    setPlayer2dice.setAttribute('src', player2Dice);
};

Btn1.addEventListener('click', function(){
    clearInterval(player1Timer);
    player1Timer = setInterval('player1Random()', 100);
    Btn1.disabled = true;
    func1();
});

Btn2.addEventListener('click', function(){
    clearInterval(player2Timer);
    player2Timer = setInterval('player2Random()', 100);
    Btn1.disabled = true;
    func2();
});

const check = () =>{
    if (turn !== 0) {
        return;
    }
    if(player1Num>player2Num){
        result.textContent = 'player1の勝利';
    }else if (player1Num === player2Num) {
        result.textContent = '引き分け';
    }else{
        result.textContent= 'player2の勝利';
    }
    Btn1.disabled = false;
    Btn2.disabled = false;
    turn =2;
};


const func1 = () =>{
    asyncFunc1();
};

const asyncFunc1 = async()=>{
    const random =()=>{
        return new Promise((resolve)=>{
            result.textContent = '???';
            setTimeout(()=>{
                resolve();
                clearInterval(player1Timer);
            }, 3000);
        });
    };

    await random();
    turn -=1;
    check();
    };

    const func2 = () =>{
        asyncFunc2();
    };
    
    const asyncFunc2 = async()=>{
        const random =()=>{
            return new Promise((resolve)=>{
                result.textContent = '???';
                setTimeout(()=>{
                    resolve();
                    clearInterval(player2Timer);
                }, 3000);
            });
        };
    
        await random();
        turn -= 1;
        check();
        };


