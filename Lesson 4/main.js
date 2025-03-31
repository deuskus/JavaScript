'use strict'

//#I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function abc(a,b){
    const result=a+b;
    console.log(result);
    return result;

}

abc()

//#ETGAxbEn8l
//
//- створити функцію яка обчислює та повертає площу кола з радіусом r

function radius123(radius){
    let result = Math.PI*radius*radius
    console.log(result)
    return result;
}

radius123(

)

//#Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function plosha(radius,height){
    return 2*Math.PI*radius*height
}

console.log(plosha(10,40));

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function foobar(array){
    for (const item of array) {
        console.log(item)

    }
}

//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function parg(user){
    let p =`<p>${user}</p>`
    document.write(p)
}
parg()

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function uli(tete){
    document.write(`
     <ul>
    <li>${tete}</li>
    <li>${tete}</li>
    <li>${tete}</li>
     </ul>
`)


}
uli('123')

//#0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO



function kx(text,sum){
document.write('<ul>');
    for (let i = 0; i < sum; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
kx(`text`,25)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt

function bov(arraypr){
    document.write(`<ul>`)
    for (const item of arraypr) {
        document.write(`<li>${item}</li>`);

    }
    document.write(`</ul>`)
}
bov([1123,123,123,312,true,'asdad'])

//#bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function djd(users){
    for (const user of users) {
        document.write(`<div> ${user.id} ${user.name} ${user.age}</div>`)

    }
}
djd([
    {id:1,name:'dadas',age:123},
    {id:1,name:'dadas',age:123},
    {id:1,name:'dasds',age:123},
    {id:1,name:'dasdas',age:123}
])

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minimal(arraynum){
    let min=arraynum[0];
    for (const number of arraynum) {
        if (number<min){
            min=number
        }


    }
    return min;
}
console.log(minimal([123,22,11,44,-11]))

//#EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let ker=0;
    for (const items of arr) {
        ker=ker+items;


    }
    return ker;
}
console.log(sum([1,2,10]));

//#kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}


console.log(swap([11, 22, 33, 44], 0, 1));

//#mkGDenYnNjn
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
    return 'Currency not found';
}


console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'GBP'));




