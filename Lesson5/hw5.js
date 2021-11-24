// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangle = (a, b) => a * b;
console.log(rectangle(5, 10));

// - створити функцію яка обчислює та повертає площу кола
let circle = (r) => Math.PI * (r * r);
console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру
let cyl = (r, h) => 2 * Math.PI * r * (r + h);
console.log(cyl(7, 17));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['qwe', 'asd', 'zxc'];
let funArr = arr => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
funArr(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createP = (msg) => document.write(`<p>${msg}</p>`);
createP('Hello OKTEN');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (list) => document.write(`<ul>
             <li>${list}</li>
             <li>${list}</li>
             <li>${list}</li>
         </ul>`);
createUl('Success doesn`t come to you...you go to it');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listIt = (msg, sym) => {for (let i = 0; i < sym; i++){
    document.write(`<ul><li>${i + 1} - ${msg}</li></ul>`);
}};
listIt('Success doesn`t come to you...you go to it', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listIt2 = (list) => {for (let item of list){
    document.write(`<li>${item}</li>`)
}};
listIt2(['JS', 123, true, 'html', 345]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrUser = (arr) => {for (let elem of arr){
        document.write(`<div>${elem.id}-${elem.name}-${elem.age}</div>`)
    }
};
arrUser([
     {id: 1, name: 'Max', age: 38},
     {id: 2, name: 'Meggan', age: 45},
     {id: 3, name: 'Jack', age: 35},
     {id: 4, name: 'Kate', age: 37}
 ]);