// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
/*let c1 = document.getElementById('content');
let c1text = c1.innerText;
console.log(c1text);*/

// -- отримує текст з блоку з id "rules"
/*let r1 = document.getElementById('rules');
let r1text = r1.innerText;
console.log(r1text);*/


// -- замініть текст параграфа з id 'content' на будь-який інший
// let c1 = document.getElementById('content');
// c1.innerText = 'ua';

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let r1 = document.getElementById('rules');
// r1.innerText = 'ololo';

// -- змініть кожному елементу колір фону на червоний
/*let red = document.querySelectorAll('*');
for (const redElement of red) {
    redElement.style.backgroundColor = 'red';
}*/

// -- змініть кожному елементу колір тексту на синій
/*let green = document.querySelectorAll('*');
for (const greenElement of green) {
    greenElement.style.color = 'blue';
}*/

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
/*let classes = document.getElementById('rules');
let classesdisplay = classes.classList;
console.log(classesdisplay);*/
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*let changecolor = document.getElementsByClassName('fc_rules');
for (const changecolorElement of changecolor) {
    changecolorElement.style.color = 'red';
}*/
//
//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// let add1 = document.getElementById('main_header');
// add1.className = 'classname';

// b) робить шириниу елементу ul 400px
// let ulget = document.getElementsByTagName('ul');
// for (const ulgetElement of ulget) {
//     ulgetElement.style.width = '400px';
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let classget = document.getElementsByClassName('linkList');
// for (const classgetElement of classget) {
//     classgetElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let getlistelement2 = document.getElementsByClassName('listElement2');
// for (const getlistelement2Element of getlistelement2) {
//     console.log(getlistelement2Element.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let getli = document.getElementsByTagName('li');
// for (const getliElement of getli) {
//     getliElement.style.backgroundColor = 'grey';
//
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let geta = document.getElementsByTagName('a');
// for (const getaElement of geta) {
//     getaElement.classList = 'anchor'
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let getaelements = document.getElementsByTagName('a');
// for (const getaelement of getaelements) {
//     if (getaelement.innerText === 'link3') {
//         getaelement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let getax = document.getElementsByTagName('a');
// for (const getax1 of getax) {
//     getax1.classList = `element_${getax1.text}`
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Change color');
// let getsh = document.getElementsByClassName('sub-header');
// for (const getsh1 of getsh) {
//     getsh1.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let pcolor = prompt('Choose color');
// let sh = document.getElementsByClassName('sub-header');
// for (const sh1 of sh) {
//     if (sh1.innerText === 'content 2 segment') {
//         sh1.style.color = pcolor;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// let ptext = prompt('Enter text');
// let getclass = document.getElementsByClassName('content_1');
// for (const getclass1 of getclass) {
//     getclass1.innerHTML = ptext;
// }

// l) отримати елементи p та змінити їм padding на 20px
// let getp = document.getElementsByTagName('p');
// for (const getpElement of getp) {
//     getpElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let gettext2 = document.getElementsByClassName('text2');
// for (const gettext2Element of gettext2) {
//     gettext2Element.innerText = 'June-2022';
// }
