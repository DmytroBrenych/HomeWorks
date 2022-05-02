// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*function task1(a, b) {
    let result = a * b;
    return result;
}

let answer = task1(5, 10);
console.log(answer);*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*
function task2(r) {
    let res2 = 3.14 * (r * r);
    return res2;
}

let ans2 = task2(5);
console.log(ans2);
*/


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*function task3(r, h) {
    let res3 = 2 * 3.14 * r * h;
    return res3;

}

let ans3 = task3(5, 6);
console.log(ans3);*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*let books = [
    {name: 'Game of Thrones', count: 999, genre: 'history', author: 'Georgre Martin'},
    {name: 'Harry Potter', count: 777, genre: 'fantasy', author: 'J.K. Rowling'},
    {name: 'Peaky Blinders', count: 888, genre: 'history', author: 'xxx'}
];

function masuv (array) {
    for (const element of array) {
        console.log(element);
    }

}

masuv(books);*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function pcreator(text) {
    document.write(`<p>${text}</p>`);

}

pcreator('okten web');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function ulcreator(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);

}

ulcreator('ukraine');
ulcreator('ukraine');
ulcreator('ukraine');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function licreator(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

licreator('Ukraine', 5);*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*
let name = [1,'ua', true];

function mas(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

mas(name);*/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*let users = [
    {name: 'Ivan', age: 15, id: 777},
    {name: 'Ira', age: 33, id: 888},
    {name: 'Oleg', age: 35, id: 999},
    {name: 'Olena', age: 19, id: 0000}
];

function objects (array) {
    for (const item of array) {
        document.write(`<div>${item.name} ${item.age} ${item.id}</div>`);
    }
}

objects(users);*/

// - створити функцію яка повертає найменьше число з масиву

/*
let numbers = [3,20,777];

function num(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item
        }
    }
    return min;
}

console.log(num(numbers));
*/


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nums = [4, 8, 10, 77, 3];
//
// function sum(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(sum(nums));