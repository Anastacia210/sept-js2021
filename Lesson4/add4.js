
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const sumArray = (array1,array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}
const returnArrayConst = sumArray([1,2,3,4],[2,3,4,5]);
console.log(returnArrayConst);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arr = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];
for (const field of arr) {
    for (const key in field){
        console.log(key);
    }
}

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let array = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];
for (const value of array){
    for (const item in value){
        console.log(value[item]);
    }
}