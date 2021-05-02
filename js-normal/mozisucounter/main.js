let textarea;

const sample =document.getElementById('sampleForm');
const count =document.getElementById('textCounter');
const reset =document.getElementById('resetBtn');
const ini =document.getElementById('iniDel');
const end =document.getElementById('endDel');
const goal = 400;
count.textContent=`あと${goal-sample.value.length}文字`;

console.log(sample.value)
sample.addEventListener('keyup', function(){
    count.textContent=`あと${goal-sample.value.length}文字`;
    textarea = sample.value;
});

reset.addEventListener('click',function(){
    count.textContent=`あと${goal}文字です。`;
});

ini.addEventListener('click', function(){
    textarea = textarea.slice(1);
    sample.value=textarea;
    count.textContent=`あと${goal-sample.value.length}文字`;
});

end.addEventListener('click',function(){
    textarea =textarea.slice(0,-1);
    sample.value=textarea;
    count.textContent=`あと${goal-sample.value.length}文字`;
})