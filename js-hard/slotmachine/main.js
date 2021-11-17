const up = document.querySelector(".upper-slot");
const middle = document.querySelector(".middle-slot");
const down = document.querySelector(".downer-slot");
const stop1 = document.getElementById("setTime1");
const stop2 = document.getElementById("setTime2");
const stop3 = document.getElementById("setTime3");
const start = document.getElementById("startTimer");
let one, two, three;
//動いているか
let startOne = false;
let startTwo = false;
let startThree = false;
const init = () => {
  for (let i = 0; i < 3; i++) {
    up.children[i].className = "";
    middle.children[i].className = "";
    down.children[i].className = "";
  }
};
start.addEventListener("click", () => {
  init();
  let i = 0;
  let j = 2;
  let k = 4;
  startOne = true;
  startTwo = true;
  startThree = true;
  one = setInterval(() => {
    up.children[0].textContent = i % 9;
    middle.children[0].textContent = (i + 5) % 9;
    down.children[0].textContent = (i + 3) % 9;
    i++;
  }, 1000);
  two = setInterval(() => {
    up.children[1].textContent = j % 9;
    middle.children[1].textContent = (j + 2) % 9;
    down.children[1].textContent = (j + 4) % 9;
    j++;
  }, 1000);
  three = setInterval(() => {
    up.children[2].textContent = k % 9;
    middle.children[2].textContent = (k + 8) % 9;
    down.children[2].textContent = (k + 6) % 9;
    k++;
  }, 1000);
  start.disabled = true;
});
const initDisabled = () => {
  start.disabled = false;
  stop1.disabled = false;
  stop2.disabled = false;
  stop3.disabled = false;
};
const threeTrue = (a, b, c) => {
  if (a.textContent === b.textContent && b.textContent === c.textContent) {
    a.className = "clear";
    b.className = "clear";
    c.className = "clear";
  }
};
const Clear = () => {
  initDisabled();
  threeTrue(up.children[0], up.children[1], up.children[2]);
  threeTrue(middle.children[0], middle.children[1], middle.children[2]);
  threeTrue(down.children[0], down.children[1], down.children[2]);
  threeTrue(up.children[0], middle.children[1], down.children[2]);
  threeTrue(down.children[0], middle.children[1], up.children[2]);
};
stop1.addEventListener("click", () => {
  clearInterval(one);
  startOne = false;
  stop1.disabled = true;
  if (!startOne && !startTwo && !startThree) {
    Clear();
  }
});
stop2.addEventListener("click", (e) => {
  clearInterval(two);
  startTwo = false;
  stop2.disabled = true;
  if (!startOne && !startTwo && !startThree) {
    Clear();
  }
});
stop3.addEventListener("click", () => {
  clearInterval(three);
  startThree = false;
  stop3.disabled = true;
  if (!startOne && !startTwo && !startThree) {
    Clear();
  }
});