// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let user = document.forms.user;
user.onsubmit = function (ev){
    ev.preventDefault();
    let uName = this.userName.value;
    let uAge = this.userAge.value;
    localStorage.setItem('userData', JSON.stringify({name:uName, age:uAge}));
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let car = document.forms.car;
car.onsubmit = function (ev){
    ev.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model, type, volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
    if (!cars){
        cars = [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    }else{
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
};