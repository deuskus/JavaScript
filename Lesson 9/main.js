'use strict'
// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div')
block.classList.add('wrap', 'collapse', 'alpha', 'beta')
block.innerText = 'hello div'

const blockCopy = block.cloneNode(true)

document.body.append(block, blockCopy)

//     #OPLI89c9G
// - Є масив:
//     ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let menuItems =  ['Main','Products','About us','Contacts']
let list = document.createElement('ul')
for (const item of menuItems) {
    let listItem =  document.createElement('li')
    listItem.innerText = item
    list.append(listItem)
}
document.body.appendChild(list)


// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesBlock = document.createElement('div')

for (const course of coursesAndDurationArray) {
    const courseItem = document.createElement('div')
    let courseTitle = document.createElement('h2')
    courseTitle.innerText = course.title

    let duration = document.createElement('h3')
    duration.innerText = `monthDuration: ${course.monthDuration}`

    let line = document.createElement('hr')
    courseItem.append(courseTitle, duration, line)
    coursesBlock.appendChild(courseItem)
}
document.body.appendChild(coursesBlock)

// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const coursesContainer = document.createElement('div')

for (const course of coursesAndDurationArray) {
    const courseBox = document.createElement('div')
    courseBox.style.background = '#b0babf'
    courseBox.classList.add('item')
    
    let heading = document.createElement('h1')
    heading.classList.add('heading')
    heading.innerText = course.title

    let desc = document.createElement('p')
    desc.classList.add('description')
    desc.innerText = `monthDuration: ${course.monthDuration}`

    let space = document.createElement('br')
    courseBox.append(heading, desc, space)
    coursesContainer.appendChild(courseBox)
}
document.body.appendChild(coursesContainer)
// ==========================


