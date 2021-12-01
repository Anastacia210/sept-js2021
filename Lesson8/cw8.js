// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const header = document.getElementById('main_header')
header.innerText = 'sept-2021'
header.style.color = 'darkviolet'
// b) робить шириниу елементу ul 400px
const ulWithLi = document.getElementsByTagName('ul')
for (const ul of ulWithLi) {
    ul.style.width = '400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkList = document.getElementsByClassName('linkList')
for (const li of linkList) {
    li.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
const liEls = document.getElementsByClassName('listElement2')
for (const li of liEls) {
    console.log(li.innerText)
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
const allLi = document.getElementsByTagName('li')
for (const li of allLi) {
    li.style.background = 'gray'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
const anch = document.getElementsByTagName('a')
for (const a of anch) {
    a.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
const links = document.getElementsByTagName('a')
for (const a of links) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const newClass = document.getElementsByClassName('a')
for (const a of newClass) {
    if (a.innerText === 'link1') {
        a.classList.add('element_link1')
    }
    if (a.innerText === 'link2') {
        a.classList.add('element_link2')
    }
    if (a.innerText === 'link3') {
        a.classList.add('element_link3')
    }
}
console.log(newClass.classList)
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeader = document.getElementsByClassName('sub-header')
for (const h3 of subHeader) {
    function col() {
        col = prompt('Enter color')
        h3.style.backgroundColor = col;
    }
}
col()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
const subHead = document.getElementsByClassName('sub-header')
for (const h3 of subHead) {
    if (h3.innerText === 'content 2 segment') {
        function color() {
            color = prompt('Enter text-color')
            h3.style.color = color;
        }
    }
}
color()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const content1 = document.getElementsByClassName('content_1')
for (const elem of content1) {
    function change() {
        change = prompt('enter your text')
        elem.innerText = change
    }
}
change()
// l) отримати елементи p та змінити їм padding на 20px
const pEls = document.getElementsByTagName('p')
for (const p of pEls){
    p.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const pText = document.getElementsByClassName('text2')
for (const p of pText){
    p.innerText = 'September-2021'
}