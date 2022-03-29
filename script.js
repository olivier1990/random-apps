// Exo 1
// let a = prompt("Enter a", "a value");
// let b = prompt("Enter b", "b value");


// let x = 300;

// if (a < b ){

//  console.log(x)
//  alert(x);
// }
// else
// {
//   x = 100
//    console.log(x)
//    alert(x);

// }


// Exo2
// let a = prompt("Enter a", "a value");
// let b = prompt("Enter b", "b value");
// let c = prompt("Enter c", "c value");

// if (a < b ){

//     let x = 100;
//  console.log(x)
//  alert(x)
// }
// else if(b<c)
// {
//    let x = 200
//    console.log(x)
//    alert(x)

// }
// else{
//     let x = 300
//     console.log(x)
//     alert(x)
// }

// Exo3
// let age = prompt("Enter age", "age utilisateur");

// if(age <= 18 || age >= 60){
//     alert('You are too young or a papy')
// }
// else {

//     let weight = prompt("Enter weight", "Votre poids");
//     let height = prompt("Enter height", "Votre taile");
    
//     imc = weight/height**2
    
//     switch (true) {
//         case imc < 18.5 :
        
//         alert('Poids insuffisant')
//         break;
//         case imc >= 18.5 && imc <= 24.9:
//         alert('Poids normal')
//         break;
//         case imc >= 25 && imc <= 29.9:
//         alert('Surpoids')
//         break;
//         case imc >= 30 && imc <= 39.9:
//         alert('Obésité')
//         break;
//         default:
//         alert('Obésité morbide')
//   }
    
// }

// Exo2 Les Boucles - Exercices
// let entiers = prompt("Taper un nombre entier entre 1 et 100 Andouille", "50");

// if(entiers <= 100 || entiers >= 1){
//     alert(entiers)
//     console.log(entiers)
// }
// else if (entiers ){
 
// }

// Exo2 refait
for (let i=1; i<=100; i++) {
    
    if( i%5==0){
        console.log('coucou')
    }
    if(i%7==0){
        console.log('hibou')
    }
    if(i%5 != 0 && i%7 !=0){

    }
} 

// Exo2 correction prof
for(let i=1; i<=100; i++) {
    let message = "";
    if (i%5 == 0) {
      message+= "Coucou";
    }
    if (i%3 == 0) {
        message += "chouette";
      }
    if (i%7 == 0) {
      message += "Hibou";
    }
    message ? console.log(message) : console.log(i);
  }   
  
//   exo3

// let positif = prompt("Entrer un nombre positif ", "10");
// if(positif > 0)
// {
//     for(let i=1; i<=positif; i++){
        
//         console.log(i + ' '  + '=> ' + positif*i)
//     }
// }
// else{
//     console.log('taper un chiffre positif SVP')
// }



// myArray = [2,24,8,12,1,44,7];

// for (let i = 0; i < myArray.length; i++ ){
    
//     console.log(Math.min(...myArray));
//     console.log(Math.max(...myArray));
// }



// SEB EXO Cote
// let notes = [], user_note = '', moyenne=0, nbr_0=0, nbr_20=0, total=0

// do {
//     let user_note = prompt('Quelle est ta cote sur /20 ?')

//     if(user_note === 'stop'){
//         break;
//     }else {
//         notes.push(+user_note)
//     }
// }
// while(user_note !== 'stop')

// for(let i=0 ; i<notes.length ; i++){
//     if(notes[i] == 0){
//         nbr_0++
//     }else if(notes[i] == 20){
//         nbr_20++
//     }
//     total += notes[i]
// }
// moyenne = total/notes.length
// alert('La moyenne vaut: ' + moyenne + '\nLe nombre de 0/20 : ' + nbr_0 + '\nLe nombre de 20/20 : ' + nbr_20)




// TO FIX EXo COTE
// let arrayNotes = [];
// let myGrade = 0;



//     let myGrade = prompt("Entrer votre cote sur /20", "2");
//     arrayNotes.push(myGrade);


// if(myGrade !== 'stop' ){
// }


 // Montre le nombre de résultats encodés, la moyenne de la classe, le nombre d’élèves ayant eu 0/20 et le nombre d'élèves ayant eu 20/20
//  for ( let i = 0; i < myGrade.length; i++ ) {

//     console.log(arrayNotes);
// }



// SEB Occurence d'un nombre entier
// let arr = [5, 5, 10, 20, 20, 20],
//     nbr = +prompt('Quel occurence ?'),
//     cpt=0

// for(let i=0 ; i<arr.length ; i++){
//     arr[i] === nbr ? cpt++ : ''
// }

// alert('Le nombre d\'occurence(s) pour le nombre : ' + nbr + ' est : ' + cpt)


// Réalisez le code permettant de trouver le nombre d'occurence d'un nombre entier fourni par l'utilisateur dans un tableau
// Ex : 
// tableau = [4,4,2,1]
// Valeur fournie par l'utilsateur = 4;
// => Nb occurences de 4 est de 2


// let tableau = [4,4,2,1],
//     input = +prompt('Taper un nombre ?'),
//     counter = 0

//     for(let i=0 ; i<tableau.length ; i++){

//         tableau[i] === input ? counter++ : ''

//     }
//     console.log('Le nombre d\'occurence(s) pour le nombre : ' + input + ' est : ' + counter)




// 1.Réalisez un programme permettant de détecter les occurrences d’un élément
// demandé dans un tableau

// let arr = [5, 'banana', 12, 5, 3],
//     nbr = prompt('Combien d\'occurence ?'),
//     cpt=0

// for(let i=0 ; i<arr.length ; i++){
//     arr[i] === nbr ? cpt++ : ''
// }

// alert('Le nombre d\'occurence(s) pour le nombre : ' + nbr + ' est : ' + cpt)


// 2. Réalisez un programme permettant de détecter l’index d’un élément demandé dans
// un tableau, renvoyez un message à l’utilisateur si l’élément n’est pas présent dans le
// tableau
// Vous ne pouvez utiliser indexOf


// let array_02 = [1, 'Pomme', 2, 3, 1]
// let whatIndex = prompt('Connaître l\'index de ?')
// let index = 0

// for(let i=0 ; i<array_02.length ; i++){
//     whatIndex == array_02[i] ? index=i : ''
// }

// alert('L\'élément ' + whatIndex + ' se trouve à l\'index : ' + index + ' du tableau') 



// 3. Améliorez votre programme précédent pour détecter toutes les occurrences de
// l’élément demandé et affichez les indexs

// let array_02 = [1, 'Pomme', 2, 3, 1, 'Pomme']
// let user = prompt('Connaître l\'index et les occurence(s) de ?')
// let indexs = []
// let cpt = 0

// for(let i=0 ; i<array_02.length ; i++){
//     if(user == array_02[i]){
//         cpt++
//         indexs.push(i)
//     }
// }
// alert('L\'élément ' + user + ' se trouve à ' + cpt + ' reprises dans le tableau, aux indexes : ' + indexs.slice()) 


// // EX4 TO FIX
// const array1 = [5, 3, 1];
// const array2 = [8, 2, 7];

// const array3 = array1.push(array2[i]);
// const array4 = array2.concat(array1);

// console.log(array3);
// console.log(array4);


// const array1 = [5, 3, 1];
// const array2 = [8, 2, 7];

// for(let i=0 ; i<array.length ; i++){ 
    
//     array1.push(array2[i]);
// }


// console.log(array3);
// console.log(array4);


///SEB
// 4. Réalisez un programme capable de fusionner 2 tableaux
// 4.1 En ajoutant le contenu du 2ème tableau APRÈS celui du premier
// 4.2 En ajoutant le contenu du 2ème tableau AVANT celui du premier
// Vous ne pouvez pas utiliser Array.concat(), uniquement push() et unshift()

// let firstArray = ['Pomme', 'Cerise', 'Orange']
// let secondArray = [1, 2, 3]

//  for(let i=0 ; i<secondArray.length ; i++){
//     firstArray.push(secondArray[i])
// } 

// secondArray.reverse()
// for(let i=0 ; i<secondArray.length ; i++){
//     firstArray.unshift(secondArray[i])
// }

// console.log(firstArray) 






// Exo5 OLI
// 5. Réalisez un programme permettant d’inverser les valeurs du tableau
// Vous ne pouvez pas utiliser Array.reverse()

//     let secondArray= [];
//     let firstArray = [1, 8, 5, 3];

// for(let i=0 ; i<firstArray.length ; i++){
//         secondArray.unshift(firstArray[i])
//     }
//     console.log(secondArray) 

// SEB

    // let array = [1, 2, 3]
    // let reverseArray = array.map(array.pop, [... array]);
    // console.log(reverseArray) 


// Exo 6 Oli
// 6. Réalisez un programme qui enlève tous les items présents plus d’une fois et les
// remplacent par “Modifié”


// let array_02 = [5, 'banana', 12, 5, 3]
// let user = prompt('Connaître l\'index et les occurence(s) de ?')
// let indexs = []
// let cpt = 0

// for(let i=0 ; i<array_02.length ; i++){
//     if(user == array_02[i]){
//         cpt++
//         indexs.push(i)

        
//     }
//     for(let j=0 ; j<indexs.length ; j++){
        
//         // console.log(indexs[j])
//         array_02.splice(indexs[j],1,'Modifié')  
//     }

// }
// console.log(array_02)
// alert('L\'élément ' + user + ' se trouve à ' + cpt + ' reprises dans le tableau, aux indexes : ' + indexs.slice() + array_02) 



// SEB
// let array = [1, 'Pomme', 2, 3, 1, 'Pomme']
// let modified = false

// for(let i=0 ; i<array.length ; i++){

//     for(let j=i+1 ; j<array.length ; j++){
        
//        if(array[i] == array[j]){
//         array[j] = 'Modifié'
//         modified = true
//         }
//     }
//     if(modified){
//      array[i] = 'Modifié'
//      modified = false
//     }
// }
// console.log(array)


// 7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus
// grande chaîne d’éléments similaires dans les 2 tableaux.
// Sans utiliser de filter()

let array_01 = [1, 3, 5, 'banana', 8, 11, 0, 0, 0, 12],
array_02 = [0,'bonjour', 5, 'banana', 8, 11, 0, 0, 0, 12],
stringChain  = [],
lastEL

for(let i=0 ; i<array_01.length ;i++){
for(let j=0 ; j<array_02.length ;j++){
    if(array_01[i] == array_02[j]){
        stringChain.push(i)
    }
}
}
lastEl = stringChain.length-1
alert('Les tableaux sont similaires de l\index ' + stringChain[0] + ' à l\'index ' + stringChain[lastEl])
console.log(stringChain) 










// 01/02/2022
// EXO 8 
// Réalisez les instructions / flowchart puis le code nécessaire pour trier un tableau
// Venir me montrer une fois les instructions définies avant de passer au code
// [5,3,8,1][1,3,5,8]

let array = [5,3,8,1]
let temp = 0;
// let sorted = 0;
// let unsorted = 0;

for(let i=0 ; i<array.length ; i++){
    for(let j=0 ; j < array.length ; j++){

      if( array[i] < array[j]){

        temp = array[j]
        array[j] = array[i]
        array[i] = temp

      }
      // else{
      
      // if (array.length/2){
        

      // }
      // sort left half  of numbers
      // sort right half of numbers
      // Merge sorted halves
      // }
    }
}
console.log(array)

// console.log(array_02)

// EXO 8 SEB
let array = [56456651, 100, 2033, 1],
temp = 0

for(let i=0 ; i<array.length ; i++){
for(let j=0 ; j<array.length ; j++){
    if(array[i] < array[j]){

        temp = array[j]        
        array[j] = array[i]
        array[i] = temp 
    }
}
}
console.log(array) 















// let words = str.split(' ');

  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;













//   let array = [56456651, 100, 2033, 1],
//   temp = 0

// for(let i=0 ; i<array.length ; i++){
//   for(let j=0 ; j<array.length ; j++){
//       if(array[i] < array[j]){

//           temp = array[j]        
//           array[j] = array[i]
//           array[i] = temp 
//       }
//   }
// }
// console.log(array) 













// EXO 7 
let array_01 = [1, 3, 5, 'bananaa', 8, 9],
    array_02 = [0,'bonjour', 5, 'bananaa', 8, 11, 0, 0, 0, 12],
    keyChain  = [],
    lastEL
    
    // Boucle les 2 array, si data array1 == data array2 alors on push la clé à la dernière ligne keyChain
for(let i=0 ; i<array_01.length ;i++){
    for(let j=0 ; j<array_02.length ;j++){
        console.log(array_02[i])
        if(array_01[i] == array_02[j]){
            keyChain.push(i)
        }
    }
}

// keyChain a 3 donnée mais on doit avoir 2 puisque c'est le dernier Index.
lastEl = keyChain.length-1

// keyChain[lastEl] => on va chercher dernier numéro Index avec lastEl (last element)
alert('Les tableaux sont similaires de l\index ' + keyChain[0] + ' à l\'index ' + keyChain[lastEl])






// EXO 8
let array = [56456651, 100, 2033, 1],
temp = 0

for(let i=0 ; i<array.length ; i++){
for(let j=0 ; j<array.length ; j++){
    if(array[i] < array[j]){

        temp = array[j]        
        array[j] = array[i]
        array[i] = temp 
    }
}
}
console.log(array)










//  EXO 6 Correction PROF
/*6. Réalisez un programme qui enlève tous les items présents plus d’une fois et les remplacent par “Modifié”*/

let myArray = [5,3,8,2,5,8,9];
let duplicates = [];
console.log('Technique 1, Array de départ', myArray);
/*Technique 1 : trouver tout les items présents plus d'une fois, ensuite reparcourir le tableau et les modifier*/
for(let i=0; i<myArray.length; i++) {
  for (let j=0; j<myArray.length; j++) {
    // On vérifie différent index sinon il check le même index ???
    if (i !== j) {
      if (myArray[i] == myArray[j]) {
        // On push le data dans duplicates
        duplicates.push(myArray[j]);
      }
    }
  }
}

console.log('Duplicates', duplicates);

for (let k=0; k<duplicates.length; k++) {
  for (let l=0; l<myArray.length; l++) {
    if (myArray[l] == duplicates[k]) {
      myArray[l] = "modifié";
    }
  }
}

console.log('Array final', myArray);

/* Technique 2 : Avec index */
console.log('\n*************************\n');

myArray = [5,3,8,2,5,8,9,5,5,1,8];
console.log('Technique 2, array de départ', myArray);
let indexes = [];

for(let i=0; i<myArray.length; i++) {
  let hasDuplicates = false;
  // Pourquoi j=i+1 ? parce que myArray = [5,3,8,2,5,8,9,5,5,1,8]; et pas 2 array a comparer on va check l'index 0 [i] par rapport a l'index 1 [j]
  for (let j=i+1; j<myArray.length; j++) {
    // myArray[i] == myArray[j] veut dire myArray[0]  i=0 == myArray[1]  j=i+1
    if (myArray[i] == myArray[j]) {
      hasDuplicates = true;
      indexes.push(j);
    }
  }
  // Si hasDuplicates est true alors on push(i) en même temps que celui dans le if (myArray[i] == myArray[j])
  if (hasDuplicates) {
      indexes.push(i);
  }
}

console.log('Indexs ou il y a des doublons', indexes);

for (let i=0; i<indexes.length; i++) {
  // Pq entre 4 brackets et pas 2 ? regarder quel effet ça fait a 2 []
  myArray[indexes[i]] = "modifié";
}
// On montre le data du tableau du début myArray = [5,3,8,2,5,8,9,5,5,1,8];
console.log('Tableau final', myArray)















//  EXO 7 Correction PROF

// 7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus grande
// chaîne d’éléments similaires dans les 2 tableaux.
// Sans utiliser de filter()

// Exemple :
// [1, 3, 5, ‘banana’, 8, 9]
// [0, ‘bonjour’, 5, ‘banana’, 8, 11, 0, 0, 0, 12]
// => Les tableaux sont similaires de l’index 2 à 4

// Comment faire?
// Code commenté ici : https://codepen.io/Snaj/pen/zYPNLKp
// Attention : cet exercice est bien sûr plus complexe que les précédents et sert d’exercice de
// dépassement, ne vous inquiétez pas si vous avez encore du mal avec la compréhension de la
// solution.




/*7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus grande chaîne d’éléments similaires dans les 2 tableaux.
Sans utiliser de filter()
*/

//nos 2 tableaux de départ
let arr1 = [1, 3, 5, 'banana', 8, 9, 0, 0, 0, 12, 5, 6];
let arr2 = [0, 'bonjour', 5, 'banana',8, 9, 0, 1, 3, 5];

/* tableau qui reprendra les indexs de la chaine en cours*/
let newSimilar = [];

/* variable qui gardera les indexs de la chaine précédente pour pouvoir la comparer avec la newSimilar, je garderai la plus grande des 2 (même principe que PP et PG)*/
let lastSimilar = false;

/*on parcourt le premier tableau, pour chaque tour du premier tableau on compare avec le tableau suivant*/
for(let i=0; i<arr1.length; i++) {
  
  //je met l'élément du tableau 1 dans check pour la comparer
  let check = arr1[i];
  
  //je parcours le 2eme tableau
  for (let j=0; j<arr2.length; j++) {
      //je vérifie si un élément du 2eme tableau correspond, si oui alors on commence une chaine similaire entre les 2, sinon on continue a parcourir le tableau 2
      if (check == arr2[j]) {
        let indexArr2 = j; //on garde l'index du tableau 2 en mémoire
        newSimilar.push(j); //on ajoute a notre chaine l'élément actuel
        
        //ici on parcourt les 2 tableaux, index par index en parallele en commencant par l'index sur lequel on était déjà +1
        for(let k=i+1; k<arr1.length;k++) {
          
          indexArr2++;
          //on évite de regarder au dela de la taille du tableau
          if (arr2.length > indexArr2) {
            if (arr1[k] == arr2[indexArr2]) {
              //la chaine continue
              newSimilar.push(indexArr2);
            } else {
              // la chaine est finie
              break;
            }
          } else {
            //on a parcouru le tableau 2
            break;
          }
        }
        
        //on compare notre nouvelle chaine avec notre précédente (si on en avait une précédente)
        if (!lastSimilar || newSimilar.length > lastSimilar.length) {
          //si la nouvelle chaine est plus grande alors on l'attribue
          lastSimilar = newSimilar;
        }
        //on reset notre nouvelle chaine
        newSimilar = [];
      }   
  }
}

//si on a une chaine alors on la montre
if (lastSimilar) {
  console.log('Check terminé, la plus grande chaine commune est de', lastSimilar.length, 'commence par ', arr2[lastSimilar[0]], '(index tableau 2 : ', lastSimilar[0] , '), et fini par', arr2[lastSimilar[lastSimilar.length-1]], '(index tableau 2 : ', lastSimilar[lastSimilar.length-1], ')');
} else {
  console.log('Aucune similarité');
}














// 08-02-2022

// 1. Conditions
// a. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
// elle est strictement supérieure à 18 et inférieure à 50


let age = 19;

if( age >18 & age <50){
    console.log(age);
}


// b. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
// elle est strictement égale en valeur et en type à 30

let age = 19;

if(age == 30){
    console.log('Hello')
}


// c. Réalisez le code nécessaire pour vérifier qu’une variable "âge" uniquement si
// elle est supérieure à une variable “ageMinimum”. Dans ce cas affichez soit un
// message indiquant que l'âge requis n’est pas atteint, ou que l'âge requis est
// atteint en fonction du résultat

let age = 20;
let ageMinimum = 18;

if(ageMinimum > age){
    console.log('l\'âge requis n\'est pas atteint vous avez' + age  + ' '+ 'ans')

}
else{
    console.log(('l\'âge requis est atteint vous avez' + ' '+ age + ' '+ 'ans'))

}

// d. Réalisez la condition suivante de 3 manières différentes “Si il a un age alors je
// le multiplie par 2, sinon je le divise par 3”


// IF // Condition
let age = 0;
if(age > 0){
    
    calculAge = age * 2;
    console.log(calculAge);

}
else{
    calculAge = age / 3;
    console.log('Impossible');

}

// Ternaire
let age = 20;

let ageTernaire = age > 0 ? age * 2 : age / 3;

console.log(ageTernaire);



// Switch TO FIX
let age = 20;
switch(age > 0) {
    case 0:
        age / 3
      break;
    case 20:
        age * 2
      break;
    default:
      // code block
  }



// 2. Boucles
// a. Bouclez sur les entiers de 100 à 0, 
// affichez la valeur de l’entier seulement si le
// résultat du modulo entre l’entier et une variable “comparaison” est différent de 0

let userInput = 5;

for (let i =0; i<=100; i++){
   
    if( i%userInput !=0){

        console.log(i);
    }
}



// b. Bouclez sur les entiers de 2 à 200, faites la somme des entiers qui sont des
// nombres premiers (divisible uniquement par 1 et eux-même)


let nbrPremiers = 0;

for (let i =2; i<=200; i++){
   
    // Si ca vaut 0 alors c'est un nombre premiers puisque divisible par 1 et eux-même
    if(i%1 == 0 & i%i ==0){
        nbrPremiers += i;
    }
}
console.log(nbrPremiers);




// 3. Tableaux
// a. Créez et parcourez un tableau comprenant des valeurs de différents types
// (boolean, string, integer, float, ..)

let array1 = ['test', true, 3];

for (let i = 0; i < 1; i++){

        console.log(array1);
  
}

// b. Créez et parcourez un tableau d’entier, du dernier élément au premier


let array1 = ['test', true, 3];

for (let i=array1.length-1; i >=0; i--){

        console.log(array1[i])
  
}



// TO FIX
// c. Créez et parcourez un tableau d’entier du premier élément au dernier en
// évitant les index impairs et ce sans utiliser de condition à l’intérieur de votre
// boucle

let array1 = ['test', true, 3];

for (let i=array1.length-1; i >=0; i+=2){

        console.log(array1[i])
  
}




// d. Créez et parcourez un tableau d’entier du premier élément au dernier en
// évitant les index dont le modulo 4 est 0


    let array1 = [3, 6, 5, 8, 7, 9, 8, 33, 36];

    for (let i = 0; i < 1; i++){

        if(array1[i]%4 == 0 ){

            console.log(array1);

        }
    }

// e. Créez et parcourez un tableau en sommant les éléments à leurs place
// ex : [2,5,8,2] => [2, 7 (5+2), 15 (5+2+8), 17 (...)]


// SEB
let array = [[5, 2, 8], [12, 24, 9], [3, 1, 8]], temp

for(let i=0 ; i<array.length ; i++){

    for(let j=1 ; j<array[i].length ; j++) {
        array[i][j] += array[i][j-1]
    }
}

for(let i=0 ; i<array.length-1; i++){
    for(let k=0 ; k<array.length-i-1 ; k++) {
        console.log('i:', i,'k:', k);   
        if(array[i] > array[k+1]){

            temp = array[i]
            array[i] = array[k+1]
            array[k+1] = temp
        }
    }
}
console.log(array)

// f.
// Pareil que le précédent, sauf que vous avez un tableau de tableaux, une fois la
// somme faites triez les par ordre décroissant
// ex :
// Tableau de départ : [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
// Tableaux avec sommes => [[5, 7, 15], [12, 36, 45], [3, 4, 12]]
// Tableaux ordonnés par ordre décroissant => [[12, 36, 45], [5, 7, 15],[3, 4, 12]]





// 4. Tris
// a. Améliorez le tri à bulle tel que vu précédemment : Si lors d’un tour entier il n’a
// pas dû effectuer de “swap” alors arrêtez l’algorithme


let myArray = [5,3,8,1];
console.log('Unsorted', myArray);
for(let i=0; i<myArray.length-1; i++) {
  
  for(let j=0; j<myArray.length-i-1; j++) {
    console.log('i:', i,'j:', j);
    if (myArray[j] > myArray[j+1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j+1];
      myArray[j+1] = temp;
      console.log('swap', myArray);
    }
  }
}
console.log('Sorted', myArray);



// b. Réalisez un tri (bulle / insertion / sélection) décroissant

let myArray = [5,3,8,1];
console.log('Unsorted', myArray);
for(let i=0; i<myArray.length-1; i++) {
  
  for(let j=0; j<myArray.length-i-1; j++) {
    console.log('i:', i,'j:', j);
    if (myArray[j] > myArray[j+1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j+1];
      myArray[j+1] = temp;
      console.log('swap', myArray);
    }
  }
}
console.log('Sorted', myArray);


// c. Permettez à l’utilisateur d’entrer des valeurs (nombres entiers) remplissant un
// tableau, une fois que l’utilisateur est satisfait de ses entrées, triez le tableau
// par ordre croissant


// d. Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une
// variable “limite”, triez les N derniers éléments du tableau (N étant la limite)
// Quel algorithme choisir et pourquoi ? Implémentez le code


// e. Même question que la précédente sauf qu’il faut trier les N premiers éléments


// Si ca vaut 0 alors c'est un nombre premiers puisque divisible par 1 et eux-même
if(i%1 == 0 & i%i ==0){
  nbrPremiers += i;
}







//les differents tris 

// Tri a bulle

console.log('Tri a bulle')                      // Trie de droite a gauche 
                                                // on compare la case 0 avec la case 1 si plus plus grand on switch et ce jusqu'a la longeur du tableau -i-1
                                                // et on recommence chaque fois une case en moins a verifier d'ou i-1      

let myArray = [5,3,8,1];                        // creation du tableau
console.log('Unsorted', myArray);               // voir le tableau dans la console
for(let i=0; i<myArray.length-1; i++) {         // premier boucle for i = 0 , jusqu'a la longueur du tableau-1 , i++  
  for(let j=0; j<myArray.length-i-1; j++) {     // deuxieme boucle for j = 0 , jusqu'a la longueur du tableau -i-1 (deplacement du marqueur) ,j++
    
    console.log('i:', i,'j:', j);               // voir les valeurs de i et de j dans la console
    if (myArray[j] > myArray[j+1]) {            // si case 0 plus grande que case 1 au premier tour
      
      let temp = myArray[j];                    // mettre case 0 dans variable temporaire
      myArray[j] = myArray[j+1];                // mettre case 1 dans case 0    
      myArray[j+1] = temp;                      // mettre variable temporaire dans case 1
      console.log('swap', myArray);             // voir l'etait du tableau apres chaque swap
    }
  }
}
console.log('Sorted', myArray);                 //voir le tableau trié

//Tri par insertion

console.log('Tri par insertion')                    // on preand la valeur de la deuxieme case, on compare avec les cases presedente si plus petit on switch                                                

let myArray = [5,3,8,1];                            // creation du tableau
console.log('Unsorted', myArray);                   // voir le tableau non trié
for(let i = 1; i < myArray.length;i++){             // premiere boucle i=1, longueur du tableau, +11
  for(let j = i - 1; j > -1; j--){                  // deuxieme boulce j = i-1 (0 le premier tour), jusqu'a j-1, j--
    console.log('i:', i,'j:', j);                   // voir les valeurs de i et de j dans la console
    if(myArray[j + 1] < myArray[j]){                // si case 1 plus petite que case 0 au premier tour
      let temp = myArray[j+1];                      // mettre case 1 dans variable temporaire
      myArray[j+1] = myArray[j];                    // mettre case 0 dans case 1
      myArray[j] = temp;                            // mettre variable temporaire dans case 0
      console.log('swap', myArray);                 // voir l'etait du tableau apres chaque swap
    }
  } 
};
console.log('Sorted', myArray);                     //voir le tableau trié

//Tri par sélection

console.log('Tri par sélection')                                 //Tri de gauche a droite
                                                                // on prend la case 0 et on chercher l'element le plus petit dans le reste du tableau
                                                                //si il y a un elemement plus petit on switch puis on recommence a la case 1  


let myArray = [5,3,8,1];                                        // creation du tableau
let min = 0;                                                    // creation d'un valeur minimum    
console.log('Unsorted', myArray);                               // voir le tableau non trié
  for (let i = 0; i < myArray.length; i++) {                    // premiere boucle i = 0 , jusqu'a la longueur du tableau, i++ 
    min = i;                                                    // mettre la valeur de i dans min    

                                                                //Trouver le plus petit dans la partie droite du tableau
    for (let j = i + 1; j < myArray.length; j++) {              // deuxieme boucle j = i+1 jusqu'a la longueur de tableau, j++
      if (myArray[j] < myArray[min]) {                          // si la case 1 en plus petite que la case min                            
        min = j;                                                // mettre la valeur de j dans min
      }
    }

                                                                //on ne remplace pas si le minimum est déjà le premier des unsorted
    if (min !== i) {                                            // si min est different de i
      //swap
      let temp = myArray[i];                                    // mettre ma case 0 dans variable temporaire
      myArray[i] = myArray[min];                                // mettre case min dans case 0    
      myArray[min] = temp;                                      // mettre variable temp dans case min                

    }
  }
console.log('Sorted', myArray);                                 // voir le tableau trié








// Correction prof EXERCICE RECAP


console.log('\n\n****** 1.B. ******');
/*1b Réalisez le code nécessaire pour afficher une variable “âge” uniquement si elle est strictement égale en valeur et en type à 30 */
/*Le triple égal permet de vérifier que la valeur ainsi que le type soit similaire*/
let age = 30;
if (age === 30) {
  console.log('age', age);
}


console.log('\n\n****** 2.B. ******');
/*2b Bouclez sur les entiers de 2 à 200, faites la somme des entiers qui sont des nombres premiers (divisible uniquement par 1 et eux-même)*/
let somme = 0;
for (let i=2; i<=200; i++) {
  //on part du principe qu'il est un nombre premier
  let isPremier = true;

  //on vérifie parmis tout les entiers de i-1 à 2
  for(let j=i-1; j>=2; j--) {
    if (i%j === 0) {
      //si le modulo donne 0, alors il n'est pas premier, on mets isPremier à false et on arrête de vérifier
      isPremier = false;
      break;
    } 
  }

  if (isPremier) {
    //console.log(i); //enlevez ce commentaire pour voir les nombres premiers 
    somme+=i;
  }
}

console.log('Somme des nombres premiers de 2 à 200 :', somme);


console.log('\n\n****** 3.B. ******');
/*3b Créez et parcourez un tableau d’entier, du dernier élément au premier*/
let myArray = [5,3,8,1];

for (let i=myArray.length-1; i>=0; i--) {
  console.log(myArray[i]);
}

console.log('\n\n****** 3.D. ******');
/*3d Créez et parcourez un tableau d’entier du premier élément au dernier en évitant les index dont le modulo 4 est 0*/
let myOtherArray = [5, 3, 8, 1, 2, 4, 5, 6, 8, 1, 0, 2];

for (let i=0; i<myOtherArray.length; i++) {
  if (i%4) {
    console.log('index :', i, 'valeur :', myOtherArray[i]);
  }
}

console.log('\n\n****** 3.E. ******');
/*3e Créez et parcourez un tableau en sommant les éléments à leurs place
ex : [2,5,8,2] => [2, 7 (5+2), 15 (5+2+8), 17 (...)]
*/

let sumArray = [2, 5, 8, 2];
for (let i=0; i<sumArray.length; i++) {
  if (i) {
    sumArray[i] += sumArray[i-1];
  }
}
console.log('Tableau sommé', sumArray);

console.log('\n\n****** 4.B. ******');
/*4b Réalisez un tri (bulle / insertion / sélection) décroissant*/

let bubbleSortArray = [5, 3, 8, 1];
//tri à bulle
console.log('avant tri à bulle', bubbleSortArray);
for (let i=0; i<bubbleSortArray.length; i++) {
  for (let j=0; j<bubbleSortArray.length-i-1; j++) {
    if (bubbleSortArray[j] < bubbleSortArray[j+1]) {
			let temp = bubbleSortArray[j];
			bubbleSortArray[j] = bubbleSortArray[j+1]
			bubbleSortArray[j+1] = temp;
		}
  }
}
console.log('après tri à bulle', bubbleSortArray);

let insertSortArray = [5, 3, 8, 1];
//tri par insertion
console.log('avant tri par insertion', insertSortArray);
for(let i = 1; i < insertSortArray.length;i++){
  for(let j = i - 1; j > -1; j--){
    if(insertSortArray[j + 1] > insertSortArray[j]){
      let temp = insertSortArray[j+1];
      insertSortArray[j+1] = insertSortArray[j];
      insertSortArray[j] = temp;
    }
  }
}
console.log('après tri par insertion', insertSortArray);

let selectSortArray = [5,3,8,1];
//tri par sélection
console.log('avant tri par sélection', selectSortArray);
let max = 0;
for (let i = 0; i < selectSortArray.length; i++) {
  max = i;
  for (let j = i + 1; j < selectSortArray.length; j++) {
    if (selectSortArray[j] > selectSortArray[max]) {
      max = j;
    }
  }

  if (max !== i) {
    //swap
    let temp = selectSortArray[i];
    selectSortArray[i] = selectSortArray[max];
    selectSortArray[max] = temp;
  }
}
console.log('après tri par sélection', selectSortArray);

// Language C
// Trouver le Nombre

#include <stdio.h>
#include <stdlib.h>

int main() {
    
    int reponse,nbr, input;
    
    // Créer le chiffre random
    srand(time(NULL));
    nbr = rand() % 100 + 1;
    printf("%d\n", nbr);
    
    
    while (reponse != nbr) {
    
    // input client
    printf( "Entrer un nombre:");
    input = getchar( );
    printf( "\nYou entered: ");
    putchar( input );
    

    // FIX LES PARENTHESES !!!!

    if reponse == nbr{
        printf("C'est le bon nombre !!!", nbr)
    }
    else if reponse < nbr{
        printf("Le nombre est plus grand ...")
    }
    else{
        printf("Le nombre est plus petit ...")  
    }
    return 0;
    }
}


    
// Correction prof
// faudrait juste réadapte pour qu'on ai pas a savoir 
// le nombre d'éléments au départ (un while au lieu du for)

#include<stdio.h>

int main()
{
    int i, N, pg,pp, elem;
    printf ("Entrez le nombre d'éléments voulus ");
    scanf ("%d", &elem);
    printf ("1er nombre?");
    scanf ("%d", &N);
    pg = N;
    pp=N;



    i=1;

    while (i <= elem -1) {
      printf ("Autre nombre ?");
        scanf ("%d",&N);
        if (N>pg) {
            pg = N;
        }
        
        if (N<pp) {
            pp = N;
        }
      ++i;
    }

    printf ("PG: %d", pg);
    printf ("PP: %d", pp);
    return 0;
}


for (i=1; i<= elem -1 ; i++)
{
    printf ("Autre nombre ?");
    scanf ("%d",&N);
    if (N>pg) {
        pg = N;
    }
    
    if (N<pp) {
        pp = N;
    }
}

// 
// 15-03-2022
// 
function concat (firstname, lastname){
  let nomComplet = firstname + "_" + lastname;
  return nomComplet
}





// Exercices
// 1. Réalisez une fonction prenant le nom et l’âge de la personne en entrée et retournant
// une chaîne de caractères “{nom} a {age} ans”;

function makeString ( name, age){
  let string = name + " a " + age + " ans ";
  return string
}
makeString('olivier', '20')

// 2. Réalisez une fonction qui retourne vrai si le nombre entré est pair et faux s’il est
// impair

function makePair (num){

  if (num % 2 ==0){
    console.log('vrai')
  }
  else{
    console.log('faux')
  }
}
makePair('3')



// 3. Réalisez une fonction qui prend un tableau d’entiers et qui renvoie le tableau inversé

function reverseArray (array){
  arrayReverse = array.reverse();
  return(arrayReverse)
}
array1 = [4,5,6]
reverseArray(array1);


// 4. Réalisez une fonction qui calcule combien de fois un nombre donné est présent dans
// un tableau donné et renvoie cette valeur


function countNumber (array){
  let duplicates = [];
  
  for(i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++) {
      if( i !== j){
        if (array[i] == array[j]) {
          // On push le data dans duplicates
          duplicates.push(array[j]);
        }  
      }
    }
  }
// Nombre de fois présent
console.log(array.length-2);
// Doublon
console.log(duplicates);
}
array1 = [1,3,5,7,8,3,5,7]
countNumber(array1);



// 5. Pareil que la 4 mais pour une suite de nombre 
// [3,5,7],[1,3,5,7,8,3,5,7]




function countNumber (array1, array2){
  let duplicates = [];
  
  for(i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++) {
      if( i !== j){
        if (array[i] == array[j]) {
          // On push le data dans duplicates
          duplicates.push(array[j]);
        }  
      }
    }
  }
// Nombre de fois présent
console.log(array.length-2);
// Doublon
console.log(duplicates);
}

array1 = [3,5,7];
array2 = [1,3,5,7,8,3,5,7]
countNumber(array1, array2);







/*7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus grande chaîne d’éléments similaires dans les 2 tableaux.
Sans utiliser de filter()
*/

//nos 2 tableaux de départ
let arr1 = [1, 3, 5, 'banana', 8, 9, 0, 0, 0, 12, 5, 6];
let arr2 = [0, 'bonjour', 5, 'banana',8, 9, 0, 1, 3, 5];

/* tableau qui reprendra les indexs de la chaine en cours*/
let newSimilar = [];

/* variable qui gardera les indexs de la chaine précédente pour pouvoir la comparer avec la newSimilar, je garderai la plus grande des 2 (même principe que PP et PG)*/
let lastSimilar = false;

/*on parcourt le premier tableau, pour chaque tour du premier tableau on compare avec le tableau suivant*/
for(let i=0; i<arr1.length; i++) {
  
  //je met l'élément du tableau 1 dans check pour la comparer
  let check = arr1[i];
  
  //je parcours le 2eme tableau
  for (let j=0; j<arr2.length; j++) {
      //je vérifie si un élément du 2eme tableau correspond, si oui alors on commence une chaine similaire entre les 2, sinon on continue a parcourir le tableau 2
      if (check == arr2[j]) {
        let indexArr2 = j; //on garde l'index du tableau 2 en mémoire
        newSimilar.push(j); //on ajoute a notre chaine l'élément actuel
        
        //ici on parcourt les 2 tableaux, index par index en parallele en commencant par l'index sur lequel on était déjà +1
        for(let k=i+1; k<arr1.length;k++) {
          
          indexArr2++;
          //on évite de regarder au dela de la taille du tableau
          if (arr2.length > indexArr2) {
            if (arr1[k] == arr2[indexArr2]) {
              //la chaine continue
              newSimilar.push(indexArr2);
            } else {
              // la chaine est finie
              break;
            }
          } else {
            //on a parcouru le tableau 2
            break;
          }
        }
        
        //on compare notre nouvelle chaine avec notre précédente (si on en avait une précédente)
        if (!lastSimilar || newSimilar.length > lastSimilar.length) {
          //si la nouvelle chaine est plus grande alors on l'attribue
          lastSimilar = newSimilar;
        }
        //on reset notre nouvelle chaine
        newSimilar = [];
      }   
  }
}

//si on a une chaine alors on la montre
if (lastSimilar) {
  console.log('Check terminé, la plus grande chaine commune est de', lastSimilar.length, 'commence par ', arr2[lastSimilar[0]], '(index tableau 2 : ', lastSimilar[0] , '), et fini par', arr2[lastSimilar[lastSimilar.length-1]], '(index tableau 2 : ', lastSimilar[lastSimilar.length-1], ')');
} else {
  console.log('Aucune similarité');
}










// 6. Réalisez les fonctions nécessaires pour faire les 4 opérations (+ - / * ) avec 2

function additionNumbers (num1, num2){
  let calculation = num1 + num2;
  return calculation
}
additionNumbers(3 , 3);




function subtractionNumbers (num1, num2){
  let calculation = num1 - num2;
  return calculation
}
subtractionNumbers(40, 3);



function multiplicationNumbers (num1, num2){
  let calculation = num1 * num2;
  return calculation
}
multiplicationNumbers(4 , 4);





function divisionNumbers (num1, num2){
  if (num2 !==0){
    let calculation = num1 / num2;
    return calculation
  }
  else{
    console.log('impossible de diviser par 0')
  }
}
divisionNumbers(30, 0);

// nombres donnés
// 7. Réalisez une fonction permettant de choisir laquelle des 4 fonctions réalisées au
// point 6 appeller dépendant de l’entrée d’un utilisateur

function calculator (mult, divi, addi, subs){
  // Faire un prompt et utiliser user pour mettre les int dans multiplicationNumbers
  user = prompt('Pour faire des multiplications utiliser mult, division, divi, addition addi, soustraction subs');
  userNumber = prompt('Entrer un nombre ');
  if(user == 'mult'){

    function multiplicationNumbers (num1, num2){
      let calculation = num1 * num2;
      return calculation
    }
    // Si ça ne marche pas mettre la variable user a la place
    multiplicationNumbers(userNumber, userNumber);
  }



}
calculator();

// 8. Réalisez les fonctions nécessaire pour jouer au jeu de Nim (bâtonnets)
// 9. Réalisez les fonctions nécessaire pour renvoyer la somme des valeurs d’un tableau
// Exercices avancés




// 1. Réalisez une fonction récursive permettant de calculer la factorielle d’un nombre
// (factorielle de 5 = 5*4*3*2*1, factorielle de 7 = 7*6*5*4*3*2*1 etc)
// 2. Réalisez un ensemble de fonctions permettant de vérifier si une valeur entrée dans
// une grille de 4 par 4 respecte les règles du sudoku (voir grille plus bas)
// 3. Réalisez les fonctions nécessaires pour permettre de remplir les trous de la grille
// 4. Réalisez un générateur de grilles de sudoku de 4 par 4
// 5. Réalisez le tout nécessaire pour générer et compléter des sudoku de 4 par

//exemple de grille de 4 par 4 à trou (les 0 = pas de réponse)
let grid = [
  [2, 0, 0, 0],
  [1, 0, 0, 3],
  [4, 0, 0, 0],
  [3, 2, 0, 1]
  ]

