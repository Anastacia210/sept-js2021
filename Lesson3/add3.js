// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr = [];
let arr1 = [];

for (let u = 0; u < 50; u++){
    u%2 === 0 ? arr[u] = u : arr1[u] = u;
}
console.log(arr);
console.log(arr1);

// ___________________________________________________________________________________________________
let arr2 = [];
for ( i = 0; i < 20; i++ ) {
    arr2.push(Math.round(Math.random() * 100));
}
console.log(arr2);

// ___________________________________________________________________________________________________
let arr3 = [];

for (q = 8; q < 28; q++) {
    arr3.push(Math.round(Math.random()* 732));
}
console.log(arr3);

// 2. Вивести за допомогою console.log кожен третій елемен
for (r = 2 ; r < arr3.length; r+=3)
    console.log(arr3[r]);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let x = 2; x < arr3.length; x+=3) {
    if (arr3[x]%2 === 0){
        console.log(arr3[x]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr4 = [];
for (let y = 2; y < arr3.length; y+=3) {
    if (arr3[y]%2===0) {
        arr4.push(arr3[y]);
    }
}
console.log(arr4);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let mas = [100,250,50,168,120,345,188];
let summ = 0;
for (u = 0; u < mas.length; u++){
    summ = summ + mas[u];
}
console.log(summ);
summ = +summ / mas.length;
console.log(summ);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let massiv = [100,250,50,168,120,345,188];
let multiply = [];
for (y=0; y<massiv.length; y++){
    multiply.push(massiv[y]*5);
}
console.log(multiply);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let massiv2 = [28, 'abc', '346', 897, true, 'vgfmh4', 546, false, '11a'];
let nums = [];
for (j=0; j<massiv2.length; j++){
    if (typeof massiv2[j]===`number`){
        nums.push(massiv2[j]);
    }
}
console.log(nums);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
const usersWithAddress = [];

for (const user of usersWithId) {
    for (const address of citiesWithId) {
        if (user.id === address.user_id) {
            usersWithAddress.push({...user, address});
        }
    }
}
console.log(usersWithAddress);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers = [3,10,15,21,29,36,45,58,60,77];
for (let i=0; i<numbers.length; i++){
    if (numbers[i]%2 === 0){
        console.log(numbers[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbers1 = [3,10,15,21,29,36,45,58,60,77];
let numbers2 = [];
for (let a = 0; a < numbers1.length; a++){
    numbers2[a] = numbers1[a];
}
console.log(numbers2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c'];
let full = "";
for (let a = 0; a < abc.length; a++){
    full = full + abc[a];
}
console.log(full);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let a = 0
while (a<abc.length){
     full = full + abc[a];
     a++;
 };
 console.log(full);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc2 = [ 'a', 'b', 'c'];
let full2 = "";
for (const string of abc2){
    full2 = full2 + string
}
console.log(full2);