'use strict';

// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let number = 1;
const number1 = 10;
const number2 = -999;
const number3 = 123;
const PI = 3.14;
const number4 = 2.7;
const number5 = 16;
let yes = true;
let no = false;
console.log(a, b, c, d, number, number1, number2, number3, PI, number4, number5, yes, no);


// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в
//  одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Роман';
let middleName = 'Євгенович';
let lastName = 'Гріщенко';
let person = `${firstName} ${middleName} ${lastName}`
console.log(person);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a1 = 100; let b2 = '100'; let c3 = true;

console.log(typeof a1, typeof b2, typeof c3)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім`ям, По-Батькові та роками. та вивести в консоль
//
let firstNamePrompt = prompt('Вкажіть ваше ім\'я:', 'Роман');
let middleNamePrompt = prompt('Вкажіть ваше по-батькові:', 'Євгенович');
let agePrompt = prompt('Вкажіть ваш вік:', '20');
//
let personPrompt = `${firstNamePrompt} ${middleNamePrompt}. ${agePrompt} років.`;
//
console.log(personPrompt);

