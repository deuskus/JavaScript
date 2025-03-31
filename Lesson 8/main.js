'use strict'

// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
//     Подумати та реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

function clone(sourceObject) {
    if (sourceObject) {
        let extractedFunctions = []
        for (let propertyName in sourceObject) {
            if (typeof sourceObject[propertyName] === 'function') {
                const boundFunction = sourceObject[propertyName].bind({});
                extractedFunctions.push({boundFunction, propertyName});
                console.log(boundFunction)
            }
        }
        console.log(extractedFunctions)
        let clonedObject = JSON.parse(JSON.stringify(sourceObject));
        for (const functionInfo of extractedFunctions) {
            clonedObject[functionInfo.propertyName] = functionInfo.boundFunction
        }
        return clonedObject

    }
    throw new Error('something went wrong');
}

const clonedObject = clone({
    id: 1, name: 'max', age: 25, foo() {
    }, bar(msg) {
        return msg
    }
});

console.log(clonedObject.bar('hello bar'))


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


const coursesWithIds = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}));
console.log(coursesWithIds)