'use strict'

//#dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let h="hello world";
console.log(h.length);
let hh='lorem ipsum';
console.log(h.length);
let hhh='javascript is cool';
console.log(hhh.length);

//#8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let b='hello world';
b=b.toUpperCase();
console.log(b);

let bb='lorem ipsum';
bb=bb.toUpperCase();
console.log(bb);

let bbb='javascript is cool';
bbb =bbb.toUpperCase();
console.log(bbb)

//#ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let c='HEELO WORLD';
c=c.toLowerCase()
console.log(c)

let cc='LOREM IPSUM';
cc=cc.toLowerCase()
console.log(cc)

let ccc='JAVASCRIPT IS COOL';
ccc=ccc.toLowerCase()
console.log(ccc)

//#0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
str=str.trim()
console.log(str);


//#bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str1.split(' '); // Разделяем строку по пробелам
}

let str1 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str1);

console.log(arr);

//#Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1=[10,8,-7,55,987,-1011,0,1050,0]
let stringArr1=arr1.map(num=>String(num));
console.log(stringArr1)

//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array,direction){
    if (direction==="ascending"){
        array.sort((a,b)=>b-a);
    }
    else if (direction==="descending"){
        array.sort((a,b)=>a-b)
    }
    return array;


}
let nums = [11,21,3];

console.log(sortNums(nums,"ascending"));
console.log(sortNums(nums,"descending"))

//#yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedCourses = [...coursesAndDurationArray].sort((a, b) => b.monthDuration - a.monthDuration);

let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

let mappedCourses = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log("Отсортированные курсы:", sortedCourses);
console.log("Отфильтрованные курсы:", filteredCourses);
console.log("Курсы с ID:", mappedCourses);

// #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards = [];

for (const suit of suits) {
    for (const value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        cards.push({cardSuit: suit, value: value, color: color});
    }
}


let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadeAce);


let sixes = cards.filter(card => card.value === '6');
console.log('Всі шістки:', sixes);

let redCards = cards.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);


let diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);

let clubsFromNine = cards.filter(card => card.cardSuit === 'clubs' && (parseInt(card.value) >= 9 || card.value === 'ace' || card.value === 'jack' || card.value === 'queen' || card.value === 'king'));
console.log('Всі трефи від 9 та більше:', clubsFromNine);








