// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function fooMin() {
    let min = arguments[0];
    for (const number of arguments) {
        if (min > number) {
            min = number
        }
    }
    console.log(`${min}`)
}
fooMin(35, 17, -3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function fooMax() {
    let max = arguments[0];
    for (const number of arguments) {
        if (max < number) {
            max = number
        }
    }
    console.log(`${max}`)
}
fooMax(36, 18, -4);

// - створити функцію яка повертає найбільше число з масиву
const funMax2 = (array)=> {
    let max = array[0];
    for (const funMaxElement of array) {
         if (funMaxElement > max) max = funMaxElement;
    }
    return max;
 };
 const funMaxRet = funMax2([1,15,25,41,2655,3154,-265]);
 console.log(funMaxRet);

// - створити функцію яка повертає найменьше число з масиву
const funMin = (array)=> {
     let min = array[0];
     for (const funMinElement of array) {
        if (funMinElement < min) min = funMinElement;
     }
     return min;
 };
 const funMinRet = funMin([1,15,25,41,2655,3154,-265]);
 console.log(funMinRet);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const funAdd = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
};
const add = funAdd([17, 21, 35, 38])
console.log(add);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const funMiddle = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i / array.length;
};
const sume = funMiddle([10, 25, 30, 45])
console.log(sume);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function myFunc() {
    let min = arguments[0];
    let max = arguments[0];

    for (const number of arguments) {
        if (min > number) {
            min = number
        }
        if (max < number) {
            max = number
        }
    }

    console.log(`виводить найбільше: ${max}`);
    return min;
}
let asd = myFunc(30, 1, 8, 9, -71, 200, 27, 321, 4567, 177)
console.log(`повертає найменьше: ${asd}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const funRandom = () => {
    const arrey = [];

    for (let i = 0; i < 20; i++) {
        arrey.push(Math.round(Math.random() * 100));
    }
    return arrey;
};
let myArray = funRandom();
console.log(myArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function randomizer(limit){
    let result = Math.round(Math.random()*limit);
    return result;
}
let x = randomizer(50);
console.log(x);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let nums1 = [1, 2, 3];
nums1.reverse();
console.log(nums1);