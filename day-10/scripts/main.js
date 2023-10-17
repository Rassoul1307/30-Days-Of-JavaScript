// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


// Set
// Creating an empty set
// const companies = new Set()
// console.log(companies)

// Creating set from array
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
//   console.log(setOfLanguages)

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
  
//   for (const language of setOfLanguages) {
//     console.log(language)
//   }


// Adding an element to a set
// const companies = new Set() // creating an empty set
// console.log(companies.size) // 0

// companies.add('Google') // add element to the set
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')
// console.log(companies.size) // 5 elements in the set
// console.log(companies)

// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//   setOfCompanies.add(company)
// }


// Deleting an element a set
// console.log(companies.delete('Google'))
// console.log(companies.size) // 4 elements left in the set


// Checking an element in the set
// console.log(companies.has('Apple')) // false
// console.log(companies.has('Facebook')) // true


// Clearing the set
// const languages = [
//   'English',
//   'Finnish',
//   'English',
//   'French',
//   'Spanish',
//   'English',
//   'French',
// ]
// const langSet = new Set(languages)
// console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
// console.log(langSet.size) // 4

// const counts = []
// const count = {}

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l)
//   console.log(filteredLang) // ["English", "English", "English"]
//   counts.push({ lang: l, count: filteredLang.length })
// }
// console.log(counts)


// Union of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)


// Intersection of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)



// Map
// Creating an empty Map
// const map = new Map()
// console.log(map)

// Creating an Map from array
// countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)

// Creating an Map from array
// countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)


// Adding values to the Map
// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// Getting a value from Map
// console.log(countriesMap.get('Finland'))


// Checking key in Map
// console.log(countriesMap.has('Finland'))