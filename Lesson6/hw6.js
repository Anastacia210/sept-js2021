// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = str.toUpperCase('hello world');
console.log(toUpperCase);
let toUpperCase1 = str1.toUpperCase('lorem ipsum');
console.log(toUpperCase1);
let toUpperCase2 = str2.toUpperCase('javascript is cool');
console.log(toUpperCase2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase = str.toLowerCase('HELLO WORLD');
console.log(toLowerCase);
let toLowerCase1 = str1.toLowerCase('LOREM IPSUM');
console.log(toLowerCase1);
let toLowerCase2 = str2.toLowerCase('JAVASCRIPT IS COOL');
console.log(toLowerCase2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str3 = ' dirty string   ';
let trim = str3.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str4 = 'Каждый охотник желает знать';
let split = str4.split(' ');
console.log(split);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str5 = 'Каждый охотник желает знать';
let del = str5.substring(0, 7)
console.log(del)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str6 = "HTML JavaScript PHP";
let insert_dash =
    str6
        .replaceAll(' ', '-')
        .toUpperCase('HTML JavaScript PHP');
console.log(insert_dash);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str7 = 'каждый охотник желает знать';
let capitalize1 = str7[0].toUpperCase()+str7.slice(1)
console.log(capitalize1);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str8 = 'Каждый охотник желает знать';
let capitalize = (str8) => {
     return str8.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
 };
console.log(capitalize(str8));
// Честно, списала последнее.)))


