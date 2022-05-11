// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*let masuv = [5,10,8,22];

let sereduna = (masuv) => {
    let res = 0;
    for (const item of masuv) {
        res += item;
    }
    return res/masuv.length;
}
console.log(sereduna(masuv));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

/*
let xxx = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if(argElement < min) {
            min = argElement;
        }
        if(argElement > max) {
            max = argElement;
        }
        
    }
    console.log(max);
    return min;
}

console.log(xxx (2,5,7,9,10));
*/


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*let random = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(random());*/


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*let random = (limit) => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        // arr.push(Math.round(Math.random()*100));
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}

console.log(random(5));*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*let mas = [1, 2, 3];
let fff = (array) => {
    let newarr = [];
    // for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    //     newarr[j] = array[i];
    for (let i = array.length - 1; i >= 0; i--) {
        newarr.push(array[i]);
    }
    return newarr;
}

console.log(fff(mas));*/
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

/*let arr = [
    {
        age: 22
    },
    {
        age: 33
    }
];
let change = (array) => {
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
    return array;
}

console.log(change(arr));*/

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*let pr = (a,b) => a*b;
console.log(pr(2,3));*/
// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*let kl = (r) => 3.14 * r * r;
console.log(kl(5));*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*let cl = (h, r) => 2 * 3.14 * r * h;
console.log(cl(5,10));*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/*let books = [
    {name: 'Game of Thrones', count: 999, genre: 'history', author: 'Georgre Martin'},
    {name: 'Harry Potter', count: 777, genre: 'fantasy', author: 'J.K. Rowling'},
    {name: 'Peaky Blinders', count: 888, genre: 'history', author: 'xxx'}
];

let mas = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
mas(books);*/
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*let pcreator = (text) => {
    document.write(`<p>${text}</p>`);
}

pcreator('okten');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*let ulcreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulcreator(`ololo`)*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*let li2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

li2('okten',5);*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let name = [1,'ua', true];

let pr = (array) => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
pr(name);*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
/*let users = [
    {name: 'Ivan', age: 15, id: 777},
    {name: 'Ira', age: 33, id: 888},
    {name: 'Oleg', age: 35, id: 999},
    {name: 'Olena', age: 19, id: 0000}
];

let obj = (array) => {
    for (const item of array) {
        document.write(`<div>${item.name} ${item.age} ${item.id}</div>`)
    }
}
obj(users);*/
// - створити функцію яка повертає найменьше число з масиву

/*let numbers = [3, 20, 777];

let num = (array) => {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item
        }
    }
    return min;
}

console.log(num(numbers));*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let nums = [4, 8, 10, 77, 3];

let sum = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(sum(nums));*/

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

