// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let arr = [2, 4, 6, 8, 9, 10, 17, 20, 35, 38];

function arraySum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    console.log(result);
}

arraySum(arr);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    title: 'Шаг за грань',
    pages: 416,
    genre: 'мистика'
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    title: 'Грани реальности',
    pages: 461,
    genre: 'мистика',
    author: 'В.Пояков'
}
// 4. Створити маcив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
let books = [
    {id: 1, title: 'Шаг за грань', pages: 416, genre: 'мистика', author: 'В.Пояков'},
    {id: 2, title: 'Грани реальности', pages: 461, genre: 'мистика', author: 'В.Пояков'},
    {id: 3, title: 'Грозовой перевал', pages: 384, genre: 'роман', author: 'Э. Бронте'},
    {id: 4, title: 'Отверженные', pages: 704, genre: 'роман', author: 'В.Гюго'},
]
// Вивести кожну книгу як окремий об'єкт
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23
let width = 10

function calculateRectangleArea(x, y) {
    return x * y
}

let s = calculateRectangleArea(height, width)
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10
let dC = 4

function calculateCylinderVolume(h, R) {
    return Math.PI * 2 ** 2 * 10
}

let v = calculateCylinderVolume(heightC, dC)
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).
let n1 = 3
let m = 4

function calculate(k1, k2) {
    return Math.sqrt(k1 ** 2 + k2 ** 2)
}

let k = calculate(n1, m)
console.log(k)