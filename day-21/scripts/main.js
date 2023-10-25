// // syntax
// document.getElementsByTagName('tagname')

// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// Getting elements by class name
//syntax
// document.getElementsByClassName('classname')
// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


// Getting an element by id
//syntax
// document.getElementById('id')

// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>

// Getting elements by using querySelector methods
// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title

// const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }

// allTitles.forEach(title => console.log(title))
// const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

// Adding attribute
// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// Adding attribute using setAttribute
// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')

// Adding attribute without setAttribute
//another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')

// Removing class using remove
//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.remove('title', 'header-title')


// Adding Text to HTML element
// Adding Text content using textContent
// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'

// Adding Text Content using innerHTML
// Text Content
// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'

// Inner HTML
// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`
//   const ul = document.querySelector('ul')
//   ul.innerHTML = lists


// Adding style
// Adding Style Color
// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//   } else {
//     title.style.color = 'red'
//   }
// })

// Adding Style Background Color
// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.backgroundColor = 'green'
//   } else {
//     title.style.backgroundColor = 'red'
//   }
// })

// Adding Style Font Size
// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.fontSize = '20px'
//   } else {
//     title.style.fontSize = '30px'
//   }
// })