// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = +prompt('Enter minute from 0 to 59');
if (time <= 15) {
    console.log('first quater');
} else if (time > 15 && time <= 30) {
    console.log('second quater');
} else if (time > 30 && time <= 45) {
    console.log('third quater');
} else if (time > 45 && time <= 59) {
    console.log('fourth quater');
} else {
    console.log('Error!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Enter day from 1 to 31');
if (day <= 10) {
    console.log('first decade');
} else if (day > 10 && day <= 21) {
    console.log('second decade');
} else if (day > 21 && day <= 31) {
    console.log('third decade');
} else {
    console.log('Error!')
}

// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 'test';
if (test === true) {
    console.log('Right!')
} else {
    console.log('Not right!')
}

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('enter 1 or 0 or -3');
if (a !== 0) {
    console.log('Right')
} else {
    console.log('Wrong')
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// РАСПИСАНИЕ НЕРАБОТАЮЩЕГО ЧЕЛОВЕКА)))
let weekTimetable = +prompt('Enter day of the week (1 - 7)')
switch (weekTimetable) {
    case 1:
        console.log('Monday: New lesson');
        break;
    case 2:
        console.log('Tuesday: Homework + Classwork');
        break;
    case 3:
        console.log('Wednesday: New lesson');
        break;
    case 4:
        console.log('Thursday: Homework + Classwork');
        break;
    case 5:
        console.log('Friday: New lesson');
        break;
    case 6:
        console.log('Saturday: Homework + Classwork');
        break;
    case 7:
        console.log('Sundy: Relax');
        break;
    default:
        console.log('What is this?')
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Який рік?');
if (year % 4 === 0) {
    console.log('Високосний')
} else {
    console.log('Нормальний')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let rightName = prompt('Яка «офіційна» назва JavaScript?');
 if(rightName === 'ECMAScript'){
     console.log ('Правильно!');
 } else{
     console.log ('Не знаєте? ECMAScript!');
 }