// - Створити змінні. Присвоїти кожному з них значення:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write-->
// - Переприсвоїти кожній змінній з завдання значення на довільне.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let var1 = 'hello ';
var1 = 'work ';
document.write('hello ');
document.write('work ');
console.log('hello ');
console.log('work ');
alert(var1);

let var2 = 'owu ';
var2 = 'hard ';
document.write('owu ');
document.write('hard ');
console.log('owu ');
console.log('hard ');
alert(var2);

let var3 = 'com ';
var3 = 'dream ';
document.write('com ');
document.write('dream ');
console.log('com ');
console.log('dream ');
alert(var3);

let var4 = 'ua ';
var4 = 'big ';
document.write('ua ');
document.write('big ');
console.log('ua ');
console.log('big ');
alert(var4);

let var5 = 1;
var5 = 3;
document.write(1);
document.write(3);
console.log(1);
console.log(3);
// alert(var5);

let var6 = 10;
var6 = 19;
document.write(10);
document.write(19);
console.log(10);
console.log(19);
// alert(var6);

let var7 = -999;
var7 = -666;
document.write(-999);
document.write(-666);
console.log(-999);
console.log(-666);
// alert(var7);

let var8 = 123;
var8 = 789;
document.write(123);
document.write(789);
console.log(123);
console.log(789);
// alert(var8);

let var9 = 3.14;
var9 = 6.28;
document.write(3.14);
document.write(6.28);
console.log(3.14);
console.log(6.28);
// alert(var9);

let var10 = 2.7;
var10 = 7.2;
document.write(2.7);
document.write(7.2);
console.log(2.7);
console.log(7.2);
// alert(var10);

let var11 = 16;
var11 = 13;
document.write(16);
document.write(13);
console.log(16);
console.log(13);
// alert(var11);

let var12 = true;
var12 = false;
document.write(true);
document.write(false);
console.log(true);
console.log(false);
// alert(var12);

let var13 = false;
var13 = true;
document.write(false);
document.write(true);
console.log(false);
console.log(true);
// alert(var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Анастасия';
let middleName = 'Сергеевна';
let lastName = 'Яцюк';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let uName = prompt("Enter Your name");
let uMiddleName = prompt("Enter Your middle name");
let uAge = prompt("Enter your age");
// alert ("Вітаю " + uName + ' ' + uMiddleName + ". " + "Тобі " + uAge + " років.")

//  - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.-->
// В однакових виразах не використовувати однакові оператори!!!-->
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false

trust = 5 < 6;
console.log(trust);
trust = 5 > 6;
console.log(trust);
trust = 5 === 6;
console.log(trust);
trust = 5 == 6;
console.log(trust);

// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false

trust = 10 === 10;
console.log(trust);

trust = 10 == 10;
console.log(trust);

trust = 10 != 10;
console.log(trust);

trust = 10 > 10;
console.log(trust);

trust = 10 < 10;
console.log(trust);

// 123 ? '123' -> false
// 123 ? '123' -> true

trust = 123 === '123';
console.log(trust);
trust = 123 =='123';
console.log(trust);