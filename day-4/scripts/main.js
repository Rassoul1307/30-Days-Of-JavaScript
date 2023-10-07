// // this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

// ----------------------------if--------------------------

// syntax
if (condition) {
    //this part of code runs for truthy condition
}
    //exemple
// let num = 3
// if (num > 0) {
//       console.log(`${num} is a positive number`)
// } //  3 is a positive number

// ----------------------------else--------------------------
// syntax
if (condition) {
    // this part of code runs for truthy condition
} else {
    // this part of code runs for false condition
}
    //exemple
// let num = 3
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// } else {
//       console.log(`${num} is a negative number`)
// }
//     //  3 is a positive number
    
// num = -3
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// } else {
//     console.log(`${num} is a negative number`)
// }
    //  -3 is a negative number

    // ---------------------------------If Else if Else-------------------------
    // syntax
if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

}

    //exemple
// if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }

// --------------------------------------------Switch---------------------------------------
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

// Examples to use conditions in the cases

let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}


// --------------------------------------------Ternary Operators------------------------
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')