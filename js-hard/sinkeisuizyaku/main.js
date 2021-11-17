const panel = document.getElementById("panel");

function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

var tmpArray = [1, 1, 2, 2, 3, 3, 4, 4];
fisherYatesShuffle(tmpArray);
console.log(tmpArray);

let turn = 0;

let box1;
let box2;

let precard;

let count = 0;
let count2 = 0;
let play1count = 0;
let play2count = 0;

let array = [];

const one = document.getElementById("player1Point");
one.textContent = `player1:${play1count}`;
const two = document.getElementById("player2Point");
two.textContent = `player2:${play2count}`;

change();

//for文は順番がある。終わった時点でiは８になってしまう。なのでundifiyになる。
for (let i = 0; i <= 7; i++) {
  const panel1 = document.createElement("div");
  //panel1.idを連呼するのはiに8が入るのを防止させ、0～7を入れるため。
  panel1.id = i;
  panel1.classList.add("card", "back");
  panel.appendChild(panel1);
  panel1.addEventListener("click", change1);
  function change1() {
    count++;
    panel1.classList.remove("card", "back");
    panel1.classList.add("surface");
    panel1.textContent = tmpArray[panel1.id];
    if (count % 2 === 1) {
      box1 = tmpArray[panel1.id];
      precard = panel1.id;
    } else {
      box2 = tmpArray[panel1.id];
    }

    console.log(box1);
    const info = document.getElementById(precard);
    const judge = () => {
      if (box1 === box2) {
        info.classList.add("finish");
        panel1.classList.add("finish");
        change();
        if (count % 2 === 0 && count2 === 3) {
          function alert1() {
            alert("終了です。");
            window.location.reload();
          }
        }
        setTimeout(alert1);
        count2++;
        panel1.removeEventListener("click", change1);
        info.removeEventListener("click", array[precard]);
      } else {
        const info = document.getElementById(precard);
        info.textContent = "";
        panel1.textContent = "";
        info.classList.add("card", "back");
        panel1.classList.add("card", "back");
        info.classList.remove("surface");
        panel1.classList.remove("surface");
        change();
      }
    };
    if (count % 2 === 0) {
      setTimeout(judge, 500);
    }
  }
  array.push(change1);
}

console.log(play1count);

function change() {
  const next = document.getElementById("nextPlayer");
  if (turn === 0) {
    turn = -1;
    next.textContent = "player1の番です";
    return;
  }
  if (box1 !== box2) {
    turn = turn * -1;
  } else {
    turn = turn * 1;
  }

  switch (turn) {
    case -1:
      next.textContent = "player1の番です";
      const one = document.getElementById("player1Point");
      if (box1 !== box2 && box1 !== undefined) {
        play1count = play1count + 0;
      } else {
        play1count++;
      }
      one.textContent = `player1:${play1count}`;
      break;
    case 1:
      next.textContent = "player2の番です";
      const two = document.getElementById("player2Point");
      if (box1 !== box2) {
        play2count = play2count + 0;
      } else {
        play2count++;
      }
      two.textContent = `player2:${play2count}`;
      break;
  }
}

console.log(play2count);
