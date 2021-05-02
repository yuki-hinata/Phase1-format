const set=document.getElementById('setHand');
const now=document.getElementById('player');
const hand1=document.getElementById('plater1Hand');
const hand2=document.getElementById('player2Hand');

let turn = 0;
let player1Num;
let player2Num;

set.addEventListener('click',function(){
    if(turn === 0){
        player1Num=document.getElementById('playerHand').value;
        player1Hand.textContent='player1:セット完了。';
        now.textContent='player2';
    }else {
        player2Num=document.getElementById('playerHand').value;
        player2Hand.textContent='player2:セット完了。';
        now.textContent='両者セット完了';
    }
    turn = turn + 1;
});

const game=document.getElementById('gameStart');
const log = document.getElementById('log');
log.textContent='結果: ';

game.addEventListener('click',function(){
    if(turn !== 2){
        alert('2回以上押さないでください。');
        return;
    }
    switch(player1Num){
        case '0':{
            if(player2Num === '0'){
                log.textContent='結果:引き分け';
            }else if(player2Num === '1'){
                log.textContent='結果:勝ち';
            }else if(player2Num === '2'){
                log.textContent='結果：負け';
            }
            break;
        }
        case '1':{
            if(player2Num === '0'){
                log.textContent='結果:負け';
            }else if(player2Num === '1'){
                log.textContent='結果:引き分け';
            }else if(player2Num === '2'){
                log.textContent='結果：勝ち';
            }
            break;
        }
        case '2':{
            if(player2Num === '0'){
                log.textContent='結果:勝ち';
            }else if(player2Num === '1'){
                log.textContent='結果:負け';
            }else if(player2Num === '2'){
                log.textContent='結果:引き分け';
            }
            break;
        }
    }
    turn = 0;
    now.textContent='player1';
    player1Hand.textContent='player1:';
    player2Hand.textContent='player2:';
});