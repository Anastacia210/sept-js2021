// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;

    this.drive = function (){
        console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину')
    };
    this.drive();

    this.info = function (){
        console.log(`
 			model : ${this.model}
 			manufacturer : ${this.manufacturer}
 			year : ${this.year}
 			maxSpeed : ${this.maxSpeed}
 			volumeEngine : ${this.volumeEngine}
 			`)};
    this.info();

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.increaseMaxSpeed(200);

    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.changeYear(2020);

    this.addDriver = function (driver){
        this.driver = driver;
    }
    this.addDriver('Anastacia');

}
function Driver (name, age){
    this.name = name;
    this.age = age;
}

let car = new Car("Ranger Raptor", "Ford", 2019, '175 км', "1996 см3")
console.log(car);

let driver = new Driver('Anastacia', 35)
console.log(driver);
console.log('________________________________');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Mashina {
    constructor(model, manufacturer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    };
    drive (){
        console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину')
    };
    info (){
        console.log(`
 			model : ${this.model}
 			manufacturer : ${this.manufacturer}
 			year : ${this.year}
 			maxSpeed : ${this.maxSpeed}
 			volumeEngine : ${this.volumeEngine}
 			`)
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = newSpeed;
    };
    changeYear (newValue){
        this.year = newValue;
    };
    addDriver (driver1){
        this.addDriver = driver1;
    }

}
let car1 = new Mashina("Kuga", "Ford", 2017, '150 км', "1.5 л")
console.log(car1);

class Voditel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let driver1 = new Voditel('Amina', 35)
console.log(driver1);

car1.info();
car1.drive();
car1.increaseMaxSpeed(190);
car1.changeYear(2020);
car1.addDriver('Amina');

console.log('-----------------------------')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let girls = [
    new Cinderella('nastya', 34, 38),
    new Cinderella('sasha', 17, 37),
    new Cinderella('anna', 37, 36),
    new Cinderella('lera', 31, 38),
    new Cinderella('julia', 20, 36),
    new Cinderella('olya', 37, 35),
    new Cinderella('ira', 22, 39),
    new Cinderella('maria', 25, 40),
    new Cinderella('zhanna', 27, 41),
    new Cinderella('mila', 19, 39),
]
console.log(girls);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('valik', 21, 37);
console.log(prince);

let filterGirlSize = girls.filter(girl => girl.size === prince.shoe);
console.log(filterGirlSize);