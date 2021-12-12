// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('click').onclick = function () {
    let userName1 = document.forms.loginForm1.userName1.value;
    let email1 = document.forms.loginForm1.email1.value;
    let userName2 = document.forms.loginForm2.userName2.value;
    let email2 = document.forms.loginForm2.email2.value;

    console.log(userName1, email1, userName2, email2);
};

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const form = document.forms['table'];
form.onsubmit = function (ev) {
    ev.preventDefault();
    const rows = +form.rows.value;
    const columns = +form.columns.value;
    const content = form.content.value;
    console.log(rows, columns, content);

    const table = document.createElement('table');
    for (let a = 0; a < rows; a++) {
        const tr = document.createElement('tr');
        tr.style.border = '1px solid pink';
        tr.style.background = 'lightblue';
        for (let b = 0; b < columns; b++){
            const td = document.createElement('td');
            td.style.border = '1px solid pink';
            td.innerText = content;
            tr.appendChild(td);
        }

            table.appendChild(tr);
    }
    document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let tabooWords = ['Заговор', 'Вакцина', 'Бомба', 'Президент'];
let button = document.getElementById('btn');
button.onclick = function (){
    let tWord = document.getElementById('tabu').value;
    for (let tabooWord of tabooWords){
        if (tabooWord === tWord){
            alert('Bad word!');
        }
    }
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let tabWords = ['Заговор', 'Вакцина', 'Бомба', 'Президент'];
let btn = document.getElementById('but');
btn.onclick = function (){
    let badWord = document.getElementById('taboo').value;
    for (let tabWord of tabWords){
        if (badWord.includes(tabWord)){
            alert('Bad word!');
        }
    }
};