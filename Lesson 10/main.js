
'use strict'
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const text = document.getElementById('text')
const button = document.getElementById('btn')
button.addEventListener('click', function () {
    text.style.display = 'none'
})

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const input = document.getElementById('i1')
const button1 = document.getElementById('btn1')

button1.onclick = function () {
    if(!input.value) {
        alert("you didn't enter age")
    }
    else if (input.value < 0) {
        alert('age wrong')
    } else if (input.value < 18){
        alert("you don't have 18 age! Sorry")
    }else if (input.value >= 18 && input.value <= 120) {
        alert('Ok. Your age is more then 18 age')
    } else {alert('Maybe you already are very old or died')}
    console.log(input.value)
}


// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms['f2'];

const infoUser = document.getElementById('info-user')
form.onsubmit = function (ev) {
    ev.preventDefault()
    let user = {name: this.name.value, surname: this.surname.value, age: this.age.value}
    infoUser.innerText = `name: ${user.name} surname: ${user.surname} age: ${user.age} `
}


// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let getMoreNumber = localStorage.getItem('number') || 0;
getMoreNumber++;
localStorage.setItem("number", getMoreNumber)

let number = document.getElementById('number')
number.innerText = getMoreNumber

console.log(typeof (getMoreNumber));

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList;
if (localStorage.getItem("sessionList")) {
    sessionList = JSON.parse(localStorage.getItem("sessionList"))
}
else {
    sessionList = []
}
sessionList.push(new Date())
localStorage.setItem("sessionList", JSON.stringify(sessionList))



// #Jg0gPO00
// створити конвертор ваги з кг у фунти. Дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let kilo = document.getElementById('kilo');
let result = document.getElementById('result')
kilo.oninput = function (ev) {
    ev.preventDefault()
    let convert = +kilo.value * 2.20462
    result.innerText = `Pound = ${convert}`
}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
localStorage.setItem("users", JSON.stringify(users))
function addObjectToLS (key, object) {
    if (!localStorage.getItem(key)) {
        throw new Error('nothing')
    }
    const parse = JSON.parse(localStorage.getItem(key))
    parse.push(object)
    localStorage.setItem(key, JSON.stringify(parse))
}
addObjectToLS('users', {name: 'Mila', age: 25, status: false})
addObjectToLS('users', {name: 'Norman', age: 23, status: true})
addObjectToLS('users', {name: 'Anna', age: 30, status: false})

//     #kUSgFqWY
// Створити 3 inputs та кнопку. Один визначає кількість рядків, другий - кількість комірок, третій вміст комірок.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table')
const tableForm = document.forms['tableForm'];
const btnTable = document.getElementById('btn-table')

btnTable.onclick = function (ev) {
    table.innerText = ''
    ev.preventDefault()
    const row = +tableForm.row.value
    const column = +tableForm.column.value
    const data = tableForm.data.value
    for (let i = 0; i < row; i++) {
            let tr = document.createElement('tr')
            table.appendChild(tr)
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.innerText = data
        }
    }

}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
let task8BlockH4 = document.getElementById('task8BlockH4');
//
let summ = JSON.parse(localStorage.getItem('summ')) || 100;
task8BlockH4.innerText = `${summ} грн.`;
// document.addEventListener('DOMContentLoaded', function () { // можна було через цей обробник
// document.addEventListener('beforeunload', function () { // цей не працює заблокований
// window.onbeforeunload = function () { // так працює але localStorage постійно оновлюється коли закриваєш а самого перезавантаження немає
window.onload = function () {
    let rebootDate = new Date(localStorage.getItem('rebootDate')) || new Date();
    //
    let currentTimestamp = new Date().getTime();
    let rebootTimestamp = rebootDate.getTime() + 10 * 1000;
    //
    if (rebootTimestamp < currentTimestamp) {
        if (localStorage.getItem('summ')) {
            task8BlockH4.innerText = `${summ + 10} грн.`;
            localStorage.setItem('summ', JSON.stringify(summ + 10));
            localStorage.setItem('rebootDate', new Date().toString());
        } else {
            localStorage.setItem('summ', JSON.stringify(summ));
            localStorage.setItem('rebootDate', new Date().toString());
        }
    }
}
// )
;