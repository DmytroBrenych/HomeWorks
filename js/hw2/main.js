// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let x = 10;
let a = prompt('Enter number 1, 0, -3');
if (a > 0 || a < 0) {
    console.log('True');
} else {
    console.log('False');
}
*/

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*let time = prompt('Enter number from 0 to 59');

if (time >= 0 && time <= 15) {
    console.log('1 quoter');
} else if (time >= 16 && time <= 30) {
    console.log('2 quoter');
} else if (time >= 31 && time <= 45) {
    console.log('3 qouter');
} else if (time > 45 && time < 60) {
    console.log('4 qouter');
}
else {
    console.log('Invalid number');
}*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*let day = prompt('Enter day from 1 to 31');

if (day > 0 && day < 11) {
    console.log('1 dekada');
}
else if (day > 10 && day < 21) {
    console.log('2 dekada');
}
else if (day > 20 && day < 32) {
    console.log('3 dekada');
}
else {
    console.log('Invalid number');
}*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
/*let num = +prompt('Enter number from 1 to 7');
switch (num) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid number!');
}*/
// - Користувач вводить або має два числа.
let a = +prompt('Enter number 1');
let b = +prompt('Enter number 2');

if (a > b) {
    console.log(a);
}
else if (b > a) {
    console.log(b);
}
else if (a === b) {
    console.log('Numbers are equal!!!');
}
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
