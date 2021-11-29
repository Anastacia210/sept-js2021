// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
 let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'
let norm1 = n1.replaceAll('..',' ');
let norm2 = n2.replaceAll('---',' ');
let norm3 = n3.replaceAll('__',' ');
console.log(norm1)
console.log(norm2)
console.log(norm3)

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const funRand = () => {
 const array = [];

 for (let i = 0; i < 20; i++) {
  array.push(Math.round(Math.random() * 100));
 }
 return array;
};
let myArray = funRand();
console.log(myArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
const sort = myArray.sort();
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
const filtered = myArray.filter(function (i) {
	if (i%2 === 0){
		return i
	}else {
		return
	}
});
console.log(filtered);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const string = myArray.map((value) => {
 	value = value.toString();
 	return value;
 });
 console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
const nums = [11,21,3];
const sortNums = nums.sort(function (a, b){
    return a-b;
});
console.log(sortNums);

const sortNums2 = nums.sort (function(a, b){
    return b-a;
});
console.log(sortNums2);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const monthDuration = coursesAndDurationArray.sort(function (a,b){
    return b.monthDuration-a.monthDuration
});
console.log(monthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
for (const item of coursesAndDurationArray) {
    if (item.monthDuration>5){
        console.log(item)
    }
};
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
 const cutString = (str, n) => {
    const strCut = [];
    while (str.length) {
        strCut.push(str.substr(0, n))
        str = str.slice(n)
    }
    return strCut
};
console.log(cutString('синхронизация', 3));