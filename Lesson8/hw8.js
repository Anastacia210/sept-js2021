// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
const peshka = document.getElementById('content');
document.write(peshka.innerText);
// -- отримує текст з блоку з id "rules"
const divka = document.getElementById('rules');
document.write(divka.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
peshka.innerText = 'Another text';
// -- замініть текст параграфа з id 'rules' на будь-який інший
divka.innerText = 'Another text';
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
const pEls = document.getElementsByTagName('p');
for (const p of pEls){
    p.style.backgroundColor = 'red'
    p.style.color = 'cornflowerblue'
}
const divEls = document.getElementsByTagName('div');
for (const div of divEls){
    div.style.backgroundColor = 'red'
    div.style.color = 'cornflowerblue'
}
const liEls = document.getElementsByTagName('li');
for (const li of liEls){
    li.style.backgroundColor = 'red'
    li.style.border = '1px solid white'
    li.style.color = 'cornflowerblue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(divka.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const rulesRedEls = document.getElementsByClassName('fc_rules');
for (const rulesRedEl of rulesRedEls){
    rulesRedEl.style.color = 'red';
}