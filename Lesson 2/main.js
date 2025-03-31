'use strict';
//#67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr =[ 20, 21 , 22, 23 ,24 ,25 ,26 ,27,28,29]
console.log(arr[0], arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);


//#LARqoUj5I
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 ={
    title: 'Dark',
    pageCount:228,
    genre:'horror'
}
console.log(book1)
let book2={
    title: 'Love',
    pageCount:229,
    genre:'Roman'
}
console.log(book2)

let book3={
    title:'Space',
    pageCount:230,
    genre:'fantasy'
}
console.log(book3);


//#sA3Gg1sCp
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - //являється  масивом. Кожен автор має поля name та age.


let book11 ={
    title: 'Dark',
    pageCount:228,
    genre:'horror',
    authors:[
        {name: 'Yuri Gluri', age:56},
        {name: 'Artem Zane', age:57}
    ]
}
console.log(book11)
let book22={
    title: 'Love',
    pageCount:229,
    genre:'Roman',
    authors: [
        {name:'David Damaskin',age:46},
        {name:'Marry Damaskina',age:32}
    ]
}
console.log(book22)

let book33={
    title:'Space',
    pageCount:230,
    genre:'fantasy',
    authors:[
        {name:'Roman Artorias',age:19},
        {name:'Ilon Mask',age:32}
    ]

}
console.log(book33);


// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name:'Ruslan',username:'ruslan321',password:'ruslan1234'},
    {name:'Alice',username: 'alice444',password: 'alice1234'},
    {name:'Roman',username: 'roman55',password: 'roman1234'},
    {name:'Kristina',username: 'kristina555',password: 'kristina1234'},
    {name: 'Sasha',username: 'sasha555',password: 'sasha1234'},
    {name:'Ilon',username: 'ilonqwe',password: 'ilon1234'},
    {name:'Yuri',username: 'radan',password: 'yuri123451'},
    {name:'Lida',username: 'lioooo',password: 'qweqeqeqwe'},
    {name: 'RADAGAN', username: 'raddaaaaa',password: 'qwer1234'},
    {name: 'Sir',username: 'sirsirsir',password: 'lolaaa1123'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//#coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одраз


let temps = [
    {day:'Понеідлок',morning:11,afternoon:12,evening:13},
    {day:'Вівторок',morning:10,afternoon:11,evening:12},
    {day:'Середа',morning:9,afternoon:10,evening:11},
    {day:'Четверг',morning:8,afternoon:9,evening:10},
    {day:'Пятницф',morning:11,afternoon:12,evening:13},
    {day:'Субота',morning:13,afternoon:12,evening:11},
    {day:'Неділя',morning:15,afternoon:14,evening:11},
]
console.log(temps)


//#bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x=+prompt('введите значение 1, 0, -3');
if (x!==0){
    console.log('Вірно')
}
else{
    console.log('Невірно')
}

//#3ckURgvs
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
//години попадає число
//(в першу, другу, третю или четверту частину години).

let time = +prompt("введите число от 0 до 59")

if(time >= 0 && time <= 14){
    console.log('Первая четверть')
} else if (time>=15&&time<=29){
    console.log('Вторая четверть')
} else if (time>=30&&time<=44){
    console.log('Третья четверть')
} else if (time>=45&&time<=59){
    console.log('Четвертая четверть')
} else{
    console.log('Неправильно ввели число')
}

//#UMoNq4biWGe
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
//число (у першу, другу чи третю).

let day = +prompt('введите число от 0 до 31')

if (day>=0&&day<=10){
    console.log('пеша декада')
}else if (day>=11&&day<=20){
    console.log('вторая декада')
}else if (day>=21&&day<=31){
    console.log('третья декада')
}else{
    console.log('Неправильно число')
}


//#KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day1 = +prompt('Введите день недели 1-7')

switch (day1){
    case 1:
        console.log('спорт');
        break;
    case 2:
        console.log('готовка');
        break;
    case 3:
        console.log('учеба');
        break;
    case 4:
        console.log('уборка');
        break;
    case 5:
        console.log('спорт');
        break;
    case 6:
        console.log('свидание');
        break;
    case 7:
        console.log('english lear')
        break;
    default:
        console.log('Неккоректное заданно число(1-7');
}


//#uwsz1RnTQJ1
//- Користувач вводить або має два числа.
 //   Потрібно знайти та вивести максимальне число з тих двох .
 //   Також потрібно врахувати коли введені рівні числа.

let number1 =+prompt('Введите первое число')
let number2=+prompt('Введите второе число')

if (number1 > number2){
    console.log(`Максимальное число ${number1}`)
}
else if (number2>number1){
    console.log(`Максимальное число ${number2}`)
}
 else if (number1 === number2){
    console.log('числа равны');
}

 //#iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1=0;
 if (!x1){
     x='default'
 }


//#awLXL6TBzg
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

 if (coursesAndDurationArray[0].monthDuration > 5){
     console.log('super')
 }
 if(coursesAndDurationArray[1].monthDuration >5){
     console.log('super')
 }
if(coursesAndDurationArray[2].monthDuration >5){
    console.log('super')
}
if(coursesAndDurationArray[3].monthDuration >5){
    console.log('super')
}
if(coursesAndDurationArray[4].monthDuration >5){
    console.log('super')
}
if(coursesAndDurationArray[5].monthDuration >5){
    console.log('super')
}
