const todo = document.getElementById('todo');
const todo2 = document.getElementById('todo-app');
const addBtn = document.querySelector('.add-btn');

// let word;
// let btn;

addBtn.addEventListener('click', function () {
    const word = document.createElement('li');
    const area = document.getElementById('add-area').value;
    console.log(typeof(area));
    if (area === "") {
        alert('空です！');
        todo.removeChild(word);
    } else {
        word.textContent = `${area}`;
        todo.appendChild(word);
        const btn = document.createElement('button');
        word.appendChild(btn);
        btn.textContent = '完了';
        btn.style.height = '26px';
        btn.addEventListener('click', function () {
            todo.removeChild(word);
        });
    };
});