// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
console.log(User);
let users = [
    new User(1, 'vasya', 'vasin', 'abc@mail.com', '123-31-56'),
    new User(2, 'kolya', 'kolin', 'def@mail.com', '124-31-56'),
    new User(3, 'petya', 'petin', 'ghi@mail.com', '125-31-56'),
    new User(4, 'olya', 'olina', 'jkl@mail.com', '126-31-56'),
    new User(5, 'anna', 'anina', 'mno@mail.com', '127-31-56'),
    new User(6, 'pasha', 'pashin', 'pqr@mail.com', '128-31-56'),
    new User(7, 'vera', 'verina', 'stu@mail.com', '129-31-56'),
    new User(8, 'katya', 'katina', 'vwx@mail.com', '122-31-56'),
    new User(9, 'oleg', 'olegin', 'yzd@mail.com', '121-31-56'),
    new User(10, 'marina', 'marinina', 'joy@mail.com', '120-31-56')
];
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUserId = users.filter(user => user.id%2 === 0);

console.log(filterUserId);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort(function (user1,user2){
    return user1.id - user2.id;
});
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
console.log(Client);
let clients = [
    new Client(1, 'vasya', 'vasin', 'abc@mail.com', '123-31-56', 5),
    new Client(2, 'kolya', 'kolin', 'def@mail.com', '124-31-56', 8),
    new Client(3, 'petya', 'petin', 'ghi@mail.com', '125-31-56', 4),
    new Client(4, 'olya', 'olina', 'jkl@mail.com', '126-31-56', 9),
    new Client(5, 'anna', 'anina', 'mno@mail.com', '127-31-56', 12),
    new Client(6, 'pasha', 'pashin', 'pqr@mail.com', '128-31-56', 1),
    new Client(7, 'vera', 'verina', 'stu@mail.com', '129-31-56', 17),
    new Client(8, 'katya', 'katina', 'vwx@mail.com', '122-31-56', 3),
    new Client(9, 'oleg', 'olegin', 'yzd@mail.com', '121-31-56', 20),
    new Client(10, 'marina', 'marinina', 'joy@mail.com', '120-31-56', 11)
];
console.log(clients);
let clientSort = clients.sort(function (client1, client2) {
    return client1.order - client2.order;
});
console.log(clientSort);