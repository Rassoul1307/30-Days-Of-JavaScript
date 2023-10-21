// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Promesse
// Callback
//Callback
// const doSomething = callback => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     callback('It did not go well', skills)
//   }, 2000)
// }

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err)
//   }
//   return console.log(result)
// }

// doSomething(callback)

// const doSomething = callback => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     callback(false, skills)
//   }, 2000)
// }

// doSomething((err, result) => {
//   if (err) {
//     return console.log(err)
//   }
//   return console.log(result)
// })


// Promettez le constructeur
// syntax
// const promise = new Promise((resolve, reject) => {
//   resolve('success')
//   reject('failure')
// })

// Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.length > 0) {
//       resolve(skills)
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })

// doPromise
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.log(error))

// Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.includes('Node')) {
//       resolve('fullstack developer')
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })

// doPromise
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.error(error))


// Récupérer API
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens


// Async et Await
// const square = async function (n) {
//   return n * n
// }

// square(2)

// const square = async function (n) {
//   return n * n
// }
// const value = await square(2)
// console.log(value)

// promesse
// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))

// asynchrones et attendent
// const fetchData = async () => {
//   try {
//     const response = await fetch(url)
//     const countries = await response.json()
//     console.log(countries)
//   } catch (err) {
//     console.error(err)
//   }
// }
// console.log('===== async and await')
// fetchData()