const view = document.getElementById("view");
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// <=は以下を表す。最小値が１。5以下の時だから配列は5個になる。
function sample(min, max) {
  let randoms = [];
  for (i = 0; i <= 5; i++) {
    while (true) {
      let tmp = intRandom(min, max);
      if (!randoms.includes(tmp)) {
        if (min === 31 && i === 2) {
          tmp = "free";
        }
        randoms.push(tmp);
        break;
      }
    }
  }
  return randoms;
}
let twoD = [];
for (let i = 0; i < 5; i++) {
  let ar = sample(i * 15 + 1, i * 15 + 15);
  console.log(ar);
  twoD.push(ar);
}
// console.log(sample(1, 15));
// console.log(sample(16, 30));

// console.log(twoD);
let y = 0;
let j = 0;

// // ここで縦に6個追加される
for (let y = 0; y < 5; y++) {
  const row = document.createElement("tr");

  //   ここで横に5個追加される
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement("td");
    cell.id = twoD[j][y];
    cell.textContent = twoD[j][y];
    row.appendChild(cell);
  }
  view.appendChild(row);
}

const f = document.getElementById("free");
f.className = "hit-Num";

const btn = document.getElementById("hitNum");

let atari = [];
let count = 0;

btn.addEventListener("click", function () {
  let min5 = 1,
    max5 = 75;

  for (i = 0; i <= 0; i++) {
    while (true) {
      var tmp = intRandom(min5, max5);
      if (!atari.includes(tmp)) {
        atari.push(tmp);
        break;
      }
    }
  }

  console.log(atari);

  alert(`数字は${atari[count]}番です！`);
  let num1 = document.getElementById(atari[count]);
  if (num1 !== null) {
    num1.className = "hit-Num";
  }
  console.log(num1);
  count++;
});
