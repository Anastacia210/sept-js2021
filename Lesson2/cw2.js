// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log('Рівні числа');
} else {
    console.log(num2);
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let frontDoor = +prompt('Введіть номер квартири 1-90');
if (frontDoor > 0 && frontDoor <= 20) {
    console.log('first');
} else if (frontDoor >= 21 && frontDoor <= 48) {
    console.log('second');
} else if (frontDoor >= 49 && frontDoor <= 90) {
    console.log('third');
} else {
    console.log('Error!');
}

// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt('Вгадай число');
if (number === 10) {
    console.log('ВІРНО!');
} else {
    console.log('НЕВІРНО')
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = '';
// if (typeof x === 'number'){
//     console.log('1');
// } else if (typeof x ==='string'){
//     console.log('2');
// } else if (typeof x === 'boolean'){
//     console.log('3');
// } else if (typeof 'object'){
//     console.log('4');
// } else {
//     console.log('What is this?');
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = +prompt('Яка сьогодні температура на вулиці?');
if (temp >= 10 || temp >= 22){
    console.log('Йдемо вчитися')
} else {
    console.log('Сидимо вдома і вчимося ОНЛАЙН')
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить
//     тоді  вивести Повідомлення - що число не вірне ... .
let quiz = +prompt('Enter your number')
switch (quiz) {
    case 1:
        console.log('Congratulations! You win AUTO!');
        break;
    case 2:
        console.log('Congratulations! You win iPhone!');
        break;
    case 3:
        console.log('Congratulations! You win MOTO!');
        break;
    case 4:
        console.log('Congratulations! You win 1 mln $!');
        break;
    case 5:
        console.log('Congratulations! You win kettle!');
        break;
    default:
        console.log('Try again')
}