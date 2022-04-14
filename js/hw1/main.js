// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello ';
let b = 'owu ';
let c = 'com ';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

// Вивести кожну змінну за допомогою: console.log , alert, document.write
/*alert(a);
alert(b);*/

// Вивести кожну змінну за допомогою: console.log , alert, document.write
document.write(a);
document.write(b);
document.write(c);

// - Створити об'єкт book з наступними полями : назва, (тип string), кількість сторінок (числовий тип), жанр (string)
let book = {
    name: 'Game of Thrones',
    number: 300,
    genre: 'fantasy'
}
// console.log(book);

// // - Створити об'єкт book з наступними полями : назва, (тип string), кількість сторінок (числовий тип), жанр (string), автори (тип - масив, кожен елемент масиву - це стрінга)
let book2 = {
    name: "Game of Thrones",
    number: 300,
    genre: 'fantasy',
    authors: ['Georgre M', 'Tom Reamy', 'Mark Lawrence']
}
// console.log(book2);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Dmytro ';
let lastName = 'Brenych '
let middleName = 'Andriyovych ';

let person = firstName + lastName + middleName;
document.write(person);
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let result = prompt("Please Enter");
console.log(person[result]);