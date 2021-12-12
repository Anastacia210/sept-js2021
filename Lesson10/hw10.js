// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const divEl = document.getElementById('text');
divEl.style.background = 'blue';
divEl.style.width = '200px';
divEl.style.height = '200px';

const delBtn = document.getElementById('del');
delBtn.onclick = function () {
    divEl.style.display = 'none';
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const btn = document.getElementById('btn');
btn.onclick = function () {
    btn.style.display = 'none';
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
const age = document.forms.age;
age.onsubmit = function (ev) {
    ev.preventDefault();
    if (+this.usAge.value < 18) {
        alert('Underage!');
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике
const list = document.getElementsByClassName('list')[0];
list.onclick = function () {
    for (const child of this.children) {
        child.classList.toggle('hidden');
    }
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
];
for (const comment of comments){
    const comDiv = document.createElement('div');
    comDiv.classList.add('comment');
    const title = document.createElement('h2');
    title.innerText = comment.title;
    const comBody = document.createElement('div');
    comBody.classList.add('b-com');
    comBody.innerText = comment.body;
    const button = document.createElement('button');
    button.innerText = 'Hide';
    button.onclick = function (){
        comBody.classList.toggle('hide');
    };
    comDiv.append(title, comBody, button);
    document.body.appendChild(comDiv);
}