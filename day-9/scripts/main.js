// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Rappeler
// a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n ** 2
// }

// // function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
// console.log(cube(callback, 3))

// // Fonction de retour
// // Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//     }
//     return doWhatEver
// }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10))


//exemple
// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// L'exemple ci-dessus peut être simplifié comme suit :
// const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum
// }
// console.log(sumArray(numbers))


// Setting time
// syntax
function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s


// Définir une heure à l'aide d'un setTimeout
function sayHello() {
    console.log('Hello')
  }
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.



// Programmation fonctionnelle
// forEach
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


// map
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
//   const countriesToUpperCase = countries.map((country) => country.toUpperCase())
//   console.log(countriesToUpperCase)
  
//   /*
//   // Arrow function
//   const countriesToUpperCase = countries.map((country) => {
//     return country.toUpperCase();
//   })
//   //Explicit return arrow function
//   const countriesToUpperCase = countries.map(country => country.toUpperCase());
//   */

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// )


// Filtrer
//Filter countries containing land
// const countriesContainingLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)
// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]
  
//   const scoresGreaterEighty = scores.filter((score) => score.score > 80)
//   console.log(scoresGreaterEighty)



// reduce
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum) 


// every
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

// console.log(areAllStr)


// find
// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)

// console.log(age)
// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]
  
//   const score = scores.find((user) => user.score > 80)
//   console.log(score)


// findIndex
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) // 5


// some
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true

// const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
// console.log(areAllStr) // false



// sort

// Tri des valeurs de chaîne
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array  is also sorted

// Tri des valeurs numériques
// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]

// Tri des tableaux d'objets
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]