const btn = document.getElementById("numCheck");
// 空の配列
const threenum = [];
function random() {
  for (let i = 0; threenum.length < 3; i++) {
    let num = "";
    num += Math.floor(Math.random() * 10);
    //includesは配列内に存在していればtrueを返す。今回は!がついているので、存在していなかったらtrueを実行。pushは配列の追加。
    if (!threenum.includes(num)) {
      threenum.push(num);
      //文字列にしてからpush
    }
  }

  console.log(threenum);
}

random();

let eat = 0;
let bite = 0;
let num1 = 10;

const turn = document.getElementById("remainTurn");
turn.textContent = `あと残り${num1}回です`;

// ボタンゾーン
btn.addEventListener("click", function () {
  num1 = num1 - 1;
  const answer = document.getElementById("answerNum").value;
  const ary = answer.split("");
  console.log(threenum);
  console.log(ary);
  console.log(num1);
  if (num1 !== 0) {
    if (ary[0] === ary[1] || ary[0] === ary[2] || ary[1] === ary[2]) {
      alert("同じ文字を2回以上使ってはいけません。");
    } else {
      for (let i = 0; i < threenum.length; i++) {
        for (let j = 0; j < ary.length; j++) {
          if (threenum[i] === ary[j]) {
            if (i === j) {
              eat = eat + 1;
            } else {
              bite = bite + 1;
            }
          }
        }
      }
      alert(`${eat}EAT ${bite}BITE`);
      if (eat === 3) {
        alert("Your Win！");
        num1 = 10;
      }
      eat = 0;
      bite = 0;
    }
    document.getElementById("answerNum").value = "";
    turn.textContent = `あと残り${num1}回です`;
  } else {
    turn.textContent = `残念でした。答えは${threenum.join("")}でした。`;
  }
});

// let len = 3;
// if(threenum[0]===ary[0]){
//     eat= eat +1;
// }
// if(threenum[1]===ary[1]){
//     eat = eat + 1
// }
// if(threenum[2]===ary[2]){
//     eat = eat +1
// }
// if(threenum[0]===ary[1] || threenum[0]===ary[2]){
//     bite = bite + 1;
// }
// if(threenum[1]===ary[0] || threenum[1]===ary[2]){
//     bite = bite + 1;
// }
// if(threenum[2]===ary[1] || threenum[2]===ary[0]){
//     bite = bite + 1;
// }
// let str = "0123456789";
// let strLen = str.length;
// let result = "";

// for (let i = 0; i < len; i++) {
//   result += str[Math.floor(Math.random() * strLen)];
// }
