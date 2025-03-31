'use strict'

//#I2XsG6f
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let ab=(a,b) => a*b;
console.log(ab(10,20));

//#ETGAxbEn8l
//- створити функцію яка обчислює та повертає площу кола з радіусом r

let plosha = (r) => Math.PI*r*r;


//#Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let ploshaci = (height,weidth) => 2*Math.PI*height*weidth;
console.log(ploshaci(200,100))

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1= (items) =>{
    for (item of items) {
        console.log(item)
    }

}

//#59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let parg = (text)=>{
    let p=`<p>${parg.text}</p>`
    document.write(p)
}
parg("papapapa")

//#hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul1=(text)=>{
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
        `)

}
ul1("pap321")

//#0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ul2=(text,count)=>{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)

    }
        document.write(`</ul>`)
}

ul2("poa",3)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let ul3=(items)=>{
    document.write(`<ul>`)
    for ( const item of items) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`)
}

ul3([123,true,"asdasd",221])

//#bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

 let ul4=(items)=>{
     for (const item of items) {
         document.write(`<div> ${item.id} ${item.name} ${item.age}`)

     }
 }

 ul4([
     {id:1,name:"Andrey",age:29},
     {id:2,name:"Pert",age:21},
     {id:3,name:"Dsaw",age:23},
     {id:4,name:"Molo",age:22},
 ])


//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let numbe=(numbers)=>{
    let min=numbers[0]
    for (const minElement of numbers) {
  if (minElement<min){
      min=minElement
  }
    }
    return min;
}

console.log(numbe([123,-13,-50,12312312]))

///#EKRNVPM
// // - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum=(arr)=>{
    let start=0;
    for (const arrElement of arr) {
        start=start+arrElement

    }
    return start;
}

console.log(sum([50,20,10]))

////#kpsbSQCt2Lf
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let swap=(arr,i1,i2)=>{
let cell = arr[i1];
arr[i1]=arr[i2];
arr[i2]=cell;
return arr;

}

console.log(swap([11,22,33,44],0,1))


////#mkGDenYnNjn
// //- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// //Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let choice = null;

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choice = item;
        }
    }

    let result = sumUAH / choice.value;
    return result;
};

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));

