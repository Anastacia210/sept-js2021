// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const divEl = document.createElement('div');
divEl.innerHTML = '<strong>HELLO OKTEN</strong>';
divEl.style.color = 'blue';
divEl.style.textAlign = 'center';
divEl.style.margin = '5px';
divEl.style.padding = '30px';
divEl.style.background = 'pink';
divEl.style.border = '2px solid blue';
divEl.style.height = '100px';
divEl.style.width = '100px';
divEl.classList.add('wrap');
divEl.classList.add('collapse');
divEl.classList.add('alpha');
divEl.classList.add('beta');
// let cloneEl = divEl.cloneNode(true);
// document.body.appendChild(cloneEl);
document.body.appendChild(divEl.cloneNode(true));
document.body.appendChild(divEl.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

const mass = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.getElementsByClassName('menu')[0];
for (const item of mass) {
    let liElem = document.createElement('li');
    liElem.innerText = item;
    menu.appendChild(liElem);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const divElement = document.createElement('div');
    divElement.innerText = `${course.title} ${course.monthDuration}`;
    divElement.style.color = 'blue';
    divElement.style.marginTop = '5px';
    document.body.appendChild(divElement);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray2){
    const divElt = document.createElement('div');
    divElt.classList.add('item');
    divElt.style.border = '1px solid red';
    divElt.style.width = '200px';
    const hEl = document.createElement('h1');
    hEl.classList.add('heading');
    hEl.innerText = `${course.title}`
    const pEl = document.createElement('p');
    pEl.classList.add('description');
    pEl.innerText = `${course.monthDuration}`
    divElt.appendChild(hEl)
    divElt.appendChild(pEl)
    document.body.appendChild(divElt)
}

