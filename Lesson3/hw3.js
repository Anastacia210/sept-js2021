// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [31, 28, 25, 19, 16];
console.log(numbers);

let drinks = ['coffee', 'tea', 'lemonade', 'milk', 'water'];
console.log(drinks);

let value = [17, true, 'love', 35, 'sun'];
console.log(value);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let coffee = ['Latte', 'Americano', 'Espresso', 'Capuccino', 'Cold brew', 'Flat white'];

console.log(coffee [0]);
console.log(coffee [1]);
console.log(coffee [2]);
console.log(coffee [3]);
console.log(coffee [4]);
console.log(coffee [5]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet.</div>`);
}
document.write(`<hr>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - Lorem ipsum dolor sit amet.</div>`);
}
document.write(`<hr>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    i++;
    document.write(`<div><h1>hello okten</h1></div>`);
}
document.write(`<hr>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let x = 0;
while (x < 20) {
    x++
    document.write(`<div><h1>hello okten - ${x}</h1></div>`);
}
document.write(`<hr>`)

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers2 = [1, 25, 215, 25, 5, 25, 58, 5, 2, 52];
for (const number of numbers2) {
    console.log(number);
}
console.log('_________________________________');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings = ['coffee', 'tea', 'chocolate', 'cocoa', 'lemonade', 'milk', 'herbal tea', 'mineral water', 'compote', 'ginger ale']
for (const string of strings) {
    console.log(string);
}
console.log('____________________________________');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const items = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (const item of items) {
    console.log(item);
}
console.log('____________________________________');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
massive = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (a = 0; a < massive.length; a++)
    if (typeof massive[a] === `boolean`){
        console.log(massive[a])
    }
console.log('_________________________________');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
massive = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (b = 0; b < massive.length; b++)
    if (typeof massive[b] === `number`){
        console.log(massive[b])
    }
console.log('_________________________________');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
massive = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (c = 0; c < massive.length; c++)
    if (typeof massive[c] === `string`){
        console.log(massive[c])
    }
console.log('_________________________________');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
emptyArr = [];
emptyArr[0] = "cat";
emptyArr[1] = true;
emptyArr[2] = 113;
emptyArr[3] = false;
emptyArr[4] = 25;
emptyArr[5] = "dog";
emptyArr[6] = true;
emptyArr[7] = 714;
emptyArr[8] = false;
emptyArr[9] = "asdfgh";
for (i = 0; i < emptyArr.length; i++){
    console.log(emptyArr[i]);
};
console.log('_________________________________');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 10; i++){
    console.log(`step :`, i);
    document.write(`step :`, i)
};
document.write(`<hr>`);
console.log('_________________________________');

for (let j = 0; j < 100; j++){
    console.log(`step :`, j );
    document.write(`step : ${j}`)
};
document.write(`<hr>`);
console.log('_________________________________');

for (let n = 0; n < 100; n++){
    console.log(`step :`, n);
    document.write(`step : ${n}`);
    n+=2;
};
document.write(`<hr>`);
console.log('_________________________________');

for (let m = 0; m < 100; m++){
    if (m%2 === 0) {
        console.log(`step :`, m)
        document.write(`step : ${m}`);
    }
};
document.write(`<hr>`);
console.log('_________________________________');

for (let t = 0; t < 100; t++){
    if (t%2 === 1){
        console.log(`step :`, t);
        document.write(`step : ${t}`);
    }
};