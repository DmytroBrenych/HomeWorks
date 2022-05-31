// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = [];
// let user1 = new User (1, 'Viktor', 'Solomonov', 'sss@gmail.com', 1633334455);
// let user2 = new User (2, 'Ivan', 'sss', 'sss@gmail.com', 1633334435);
// let user3 = new User (3, 'Vitaliy', 'www', 'sss@gmail.com', 1633394455);
// let user4 = new User (4, 'Andriy', 'eee', 'sss@gmail.com', 1633334455);
// let user5 = new User (5, 'Yura', 'ttt', 'sss@gmail.com', 1633334435);
// let user6 = new User (6, 'Serhiy', 'yyy', 'sss@gmail.com', 1633332455);
// let user7 = new User (7, 'Oleksandr', 'uuu', 'sss@gmail.com', 16366334455);
// let user8 = new User (8, 'Ruslan', 'iii', 'sss@gmail.com', 16333348855);
// let user9 = new User (9, 'Kostya', 'ooo', 'sss@gmail.com', 163333449005);
// let user10 = new User (10, 'Pavlo', 'lll', 'sss@gmail.com', 163333445500);
//
// arr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let u1 = arr.filter(value => value.id % 2 === 0);
// console.log(u1);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let u2 = arr.sort((a, b) => a.id - b.id);
// console.log(u2);


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class clients {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let arr = [];
// let user1 = new clients (1, 'Viktor', 'Solomonov', 'sss@gmail.com', 1633334455, ['tomato', 'strawberry']);
// let user2 = new clients (2, 'Ivan', 'sss', 'sss@gmail.com', 1633334435, ['tomato', 'strawberry', 'chocolate']);
// let user3 = new clients (3, 'Vitaliy', 'www', 'sss@gmail.com', 1633394455, ['tomato', 'strawberry', 'milk']);
// let user4 = new clients (4, 'Andriy', 'eee', 'sss@gmail.com', 1633334455, ['tomato', 'strawberry','milk', 'sousage']);
// let user5 = new clients (5, 'Yura', 'ttt', 'sss@gmail.com', 1633334435, ['tomato', 'strawberry']);
// let user6 = new clients (6, 'Serhiy', 'yyy', 'sss@gmail.com', 1633332455, ['tomato', 'strawberry']);
// let user7 = new clients (7, 'Oleksandr', 'uuu', 'sss@gmail.com', 16366334455, ['tomato', 'strawberry']);
// let user8 = new clients (8, 'Ruslan', 'iii', 'sss@gmail.com', 16333348855, ['tomato', 'strawberry']);
// let user9 = new clients (9, 'Kostya', 'ooo', 'sss@gmail.com', 163333449005, ['tomato', 'strawberry']);
// let user10 = new clients (10, 'Pavlo', 'lll', 'sss@gmail.com', 163333445500, ['tomato', 'strawberry']);
//
// arr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arr.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, producer, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     this.info = function () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxspeed += newSpeed);
//         console.log(newcar);
//     };
//     this.newValue = function (newValue) {
//         console.log(this.year = newValue);
//         console.log(newcar);
//     };
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//         console.log(newcar);
//     }
//
// }
//
// let newcar = new Car ('Audi', 'Germany', 2022, 333, 6.0);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// newcar.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// newcar.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// newcar.increaseMaxSpeed(100);
// newcar;
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// newcar.newValue(2100);
// newcar;
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// newcar.addDriver('Dima');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxspeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     info() {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     };
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxspeed += newSpeed);
//         console.log(newcar);
//     };
//     newValue(newValue) {
//         console.log(this.year = newValue);
//         console.log(newcar);
//     };
//     addDriver(driver) {
//         console.log(this.driver = driver);
//         console.log(newcar);
//     }
//
// }
//
// let newcar = new Car ('Audi', 'Germany', 2022, 333, 6.0);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// newcar.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// newcar.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// newcar.increaseMaxSpeed('100');
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// newcar.newValue(2000);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// newcar.addDriver('Joe');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, tuf) {
        this.name = name;
        this.age = age;
        this.tuf = tuf;
    }
}

let arr = [];
let p1 = new Popelushka('Anna', 15, 33);
let p2 = new Popelushka('Ira', 16, 34);
let p3 = new Popelushka('Vika', 17, 35);
let p4 = new Popelushka('Karina', 18, 36);
let p5 = new Popelushka('Marina', 19, 37);
let p6 = new Popelushka('Oksana', 20, 38);
let p7 = new Popelushka('Zoryana', 21, 39);
let p8 = new Popelushka('Maria', 22, 40);
let p9 = new Popelushka('Barbara', 23, 41);
let p10 = new Popelushka('Kamila', 24, 42);

arr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
// console.log(arr);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
}

let arr1 = [];
let k1 = new prince('Ivan', 15, 33);
let k2 = new prince('Igor', 16, 34);
let k3 = new prince('Sergiy', 17, 35);
let k4 = new prince('Vikor', 18, 36);
let k5 = new prince('Vitaliy', 19, 37);
let k6 = new prince('Oleg', 20, 38);
let k7 = new prince('Andriy', 21, 39);
let k8 = new prince('Ruslan', 22, 40);
let k9 = new prince('Dmytro', 23, 41);
let k10 = new prince('Joe', 24, 42);

arr1 = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10];
// console.log(arr1);
