// Niveau 1
// 1 Itérer de 0 à 10 en utilisant la boucle for, faire de même en utilisant la boucle while et do while
// ----------------For------------------------
// for (let i = 0; i < 11; i++) {
//     console.log(i);
    
// }
// --------------While-----------------------
// let nbr = 0
// while (nbr <= 10) {
//     console.log(nbr);
//     nbr++
// }

// ------------Do while------------------------
// let nbr = 0
// do {
//     console.log(nbr);
//     nbr++;
// } while (nbr<=10);

// 2 Itérer de 10 à 0 en utilisant la boucle for, faire de même en utilisant la boucle while et do while

// -------------------for---------------------------
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }
// --------------------while-------------------------
// let nbr = 10
// while (nbr >= 0) {
//     console.log(nbr);
//     nbr--;
// }
// ------------------do while-------------------------
// let nbr=10
// do {
//     console.log(nbr);
//     nbr--;
// } while (nbr>=0);


// 3  Itérer de 0 à n en utilisant la boucle for
// let n = 5
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
    
// }

// 4  Écrivez une boucle qui crée le modèle suivant en utilisant console.log() :
// for (let index = 0; index < 7 ; index++) {
//     console.log(`${"#".repeat(index)}`);
// }

// 5 Utilisez la boucle pour imprimer le motif suivant :
// let nbr = 0
// for (let index = 0; index <= 10; index++) {
//     let calcule = `${nbr} * ${index}`
//     let resultat = (nbr++) * index
//     console.log(`${calcule} = ${resultat}`)   
// }

// 6 En utilisant la boucle, imprimez le motif suivant
// console.log('i','i^2','i^3');
// for (let index = 0; index <= 10; index++) {
//     console.log(index + " " , index**2 + "  ", index**3); 
// }


// 7 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres pairs
// for (let index = 0; index <= 100; index++) {
//     if ((index % 2 == 0)){
//         console.log(index);
//     } 
// }

// 8 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres impairs
// for (let index = 0; index <=100; index++) {
//     if ((index % 2 !== 0)) {
//         console.log(index);
//     }
// }

// 9 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres premiers
// function estNombrePremier(nombre) {
//     if (nombre <= 1) return false;
//     if (nombre <= 3) return true;
//     if (nombre % 2 === 0 || nombre % 3 === 0) return false;
//     for (let i = 5; i * i <= nombre; i += 6) {
//         if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
//     }
//     return true;
// }

// for (let nombre = 0; nombre <= 100; nombre++) {
//     if (estNombrePremier(nombre)) {
//         console.log(nombre);
//     }
// }


// 10 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer la somme de tous les nombres.
// let somme = 0

// for (let index = 0; index <= 100; index++) {
//     somme+=index   
// }
// console.log(`The sum of all numbers from 0 to 100 is ${somme}.`);

// 11 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer la somme de tous les pairs et la somme de toutes les cotes.
// let sommePaire = 0
// let sommeImpaire = 0
// for (let index = 0; index <= 100; index++) {
//     if ((index % 2 == 0)){
//         sommePaire+=index 
//     }else{
//         sommeImpaire+= index
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${sommePaire}. And the sum of all odds from 0 to 100 is ${sommeImpaire}.`);


// 12 Utilisez la boucle for pour parcourir de 0 à 100 et imprimer la somme de tous les pairs et la somme de toutes les cotes. Imprimer la somme des pairs et la somme des cotes sous forme de tableau
// let sommePaire = 0
// let sommeImpaire = 0
// let tab = []
// for (let index = 0; index <= 100; index++) {
//     if ((index % 2 == 0)){
//         sommePaire+=index 
//     }else{
//         sommeImpaire+= index
//     }
// }
// tab.push(sommePaire,sommeImpaire)
// console.log(tab);


// 13 Développer un petit script qui génère un tableau de 5 nombres aléatoires
// let tab = []
// for (let index = 0; index < 5; index++) {
//     const nbrAlea = Math.floor(Math.random() * 100)
//     tab.push(nbrAlea)
// }
// console.log(tab);


// 14 Développer un petit script qui génère un tableau de 5 nombres aléatoires et les nombres doivent être uniques
// let tab = []
// while (tab.length < 5) {
//     const nbrAlea = Math.floor(Math.random() * 100)
//     if (tab.indexOf(nbrAlea) === -1) {
//         tab.push(nbrAlea) 
//     }
// }
// console.log(tab);


// 15 Développez un petit script qui génère un identifiant aléatoire à six caractères :
// const caracteresPossibles = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function genereId(){
//     let id = "";
//     for(let i=0; i<6; i++){
//         id +=caracteresPossibles[Math.round((Math.random()*caracteresPossibles.length))];
//     }
//     console.log(id);
// }

// genereId();