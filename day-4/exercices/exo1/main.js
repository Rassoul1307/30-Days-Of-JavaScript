//niveau 1
// -------------------1--------------
// let age = prompt('Veuillez saisir votre age')

// if (age>18) {
//     alert('You are old enough to drive.')
// }else{
//     alert(`You are left with ${18 - age} years to drive.`)
// }
// ---------------------2--------------
// const yourAge = prompt("Entrez votre âge :") 
// const myAge = 22
// if (yourAge>myAge) {
//     console.log(`Vous etes plus agés que moi de ${yourAge - myAge} ans `);
// } else {
//     console.log (`Je suis plus agé que vous de ${myAge-yourAge} ans`);
    
// }
// --------------------3----------------
let a = 4
let b = 3
// en utilisant else if
// if (a>b) {
//     console.log(" a est supérieur à b ");
// }else{
//     console.log (" b est supérieur a a");
// }

// en utilisant ternary operator

let c = a>b 

c
?console.log( " a est supérieur à b ")
:console.log(" b est supérieur à a" );


// niveau 2
// let day = prompt("Nous sommes quelle jour").toLowerCase()
// switch (day){
//     case 'lundi' || 'mardi' || 'mercredi' || 'jeudi' || 'vendredi':
//         console.log(`${day} est un Jour de travail`);
//         break;
//     case 'samedi'|| 'dimanche':
//         console.log (`${day} est un weekend`);
//         break;
//     default:
//         console.log("jour invalide");
// }

// niveau 3
let month = prompt("veuillez saisir un mois ").toLowerCase()

switch (month) {
    case 'janvier' || 'mars' || 'mais' || 'juillet' || 'aout' || 'octobre' || 'decembre':
        console.log(`il y'a 31 jours dans le mois de ${month} `);
        break;
    case 'avril' || 'juin' || 'septembre ' || 'novembre':
        console.log(`il y'a 30 jours dans le mois de ${month} `);
        break;
    case 'fevrier':
        console.log(`il y'a 28 jours dans le mois de ${month} `);
        break;
    default:
        console.log('le mois n\'existe pas');
}