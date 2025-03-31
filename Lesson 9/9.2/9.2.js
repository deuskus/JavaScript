'use strict'

// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
let mainContainer = document.createElement('div');
mainContainer.classList.add('bodyMainDiv');
coursesArray.forEach(course => {
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('bodyMainDivBlock');

    let title = document.createElement('h3');
    title.classList.add('bodyMainDivBlockH3');
    title.innerText = `${course.title}`;

    let monthDur = document.createElement('h4');
    monthDur.classList.add('bodyMainDivBlockH4Month');
    monthDur.innerText = `${course.monthDuration}`;

    let hourDur = document.createElement('h4');
    hourDur.classList.add('bodyMainDivBlockH4Hour');
    hourDur.innerText = `${course.hourDuration}`;

    let modulesList = document.createElement('ul');
    modulesList.classList.add('bodyMainDivBlockUl');

    course.modules.forEach(module => {
        let moduleItem = document.createElement('li');
        moduleItem.classList.add('bodyMainDivBlockUlLi');
        moduleItem.innerText = `${module}`;
        modulesList.appendChild(moduleItem);
    })

    courseBlock.append(title, monthDur, hourDur, modulesList)
    mainContainer.appendChild(courseBlock);
})
document.body.appendChild(mainContainer);