const word1 = "齋藤飛鳥だぞ";
const word2 = "あっしゅっしゅしゅー";

const setBtn2 = function () {
    const hoge = Math.random * 10;
    if (hoge < 5) {
        const result = window.confirm(word1);
        if (result) {
            alert(word1);
        } else {
            alert(word2);
        }
    } else {
        const result = window.confirm(word2);
     if (result) {
        alert(word2);
    } else {
        alert(word1);
    }
}
};