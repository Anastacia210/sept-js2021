// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}
let res = rectangle(5, 10);
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * (r * r);
}
let res1 = circle(7);
console.log(res1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cyl(r, h) {
    return 2 * Math.PI * r * (r + h);
}
let res2 = cyl(5, 11);
console.log(res2);

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['qwe','asd','zxc'];
let funArr = arr => {
     console.log(arr);
     for (const arrElement of arr) {
         console.log(arrElement);
     }
 };
 funArr(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(msg) {
    document.write(`<p>${msg}</p>`);
}
createP('Hello OKTEN');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(list) {
    document.write(`<ul>
            <li>${list}</li>
            <li>${list}</li>
            <li>${list}</li>
        </ul>`);
}
createUl('Success doesn`t come to you...you go to it');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writer(msg, sym) {
    document.write('<ul>');

    for (let i = 0; i < sym; i++) {
        document.write(`<li>${i + 1} - ${msg}</li>`);
    }
    document.write('</ul>');
}
writer('Success doesn`t come to you...you go to it', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const items = ['JS', 123, true, 'html', 345];

document.write('<ul>');
for (const item of items) {
    document.write(`<li>${item}</li>`);
};
document.write('</ul>');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'Max', age: 38},
    {id: 2, name: 'Meggan', age: 45},
    {id: 3, name: 'Jack', age: 35},
    {id: 4, name: 'Kate', age: 37}
];
for (const user of users) {
    document.write(`<div>${user.id}-${user.name}-${user.age}</div>`)
};
