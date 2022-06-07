

// Examen blanc
// Partie Théorie :

// 1. Citez les différences majeures entre un tri à bulle et un tri par sélection

// Si on arrête le tri a 50% du chargement alors le tri par selection commence par le début du tableau et par le tri à bulle par la fin 

// Tous les 2 utilisent une variables temporaires
// Le tris à bulles va accéder une array de maniere consécutives et changer la données si il le faut

// 2. Définissez ce qu’est une fonction récursive, donnez un exemple d’utilisation

// La programmation récursives est une fonction qui s'éxecute elle mêmes dans sont propres codes.
// Par exemple dans le calcul de factiorielles.

// 3. Quelle est la complexité ( O(...) ) d’un ajout de nœud en début de liste chaînée?

// L'ajout de données en HEAD se fait l'une à la suite de l'autre on ne pourra pas choisir de position comme dans une array.
// Dans le cas où l'on a 10 données il sera O1 avec les listes chainées et O10 avec une array 


// 4. En quoi cela diffère pour un tableau? Expliquez pourquoi.

// On pourra placer le data à n'importe qu'elles positions par exemple une array avec 4 string on pourra y insérer
// en position array[2] entre temps qu'avec une fonction chainées seulement en HEAD ou TAIL donc position array[0] et array[3]


// 5. Que vaut 4096 % 50 ?
// 46  puisque (81*50)= 4050 - 4096 = 46

// 6. Que vaut 13 % 841.598.113 ?
// 13 puisque 841.598.113 rentre 0 fois dans 13  et le reste 0 + 13 = 13


// 7. Corrigez, commentez et améliorez le code suivant
//je veux trouver les occurrences d’un nombre dans un tableau

// function zzz (a, b) {
// let occ = 0;
// for (i=0; i<a; i++) {
// if (a[i] == b[i]) {
// occurences = occurences+1;
// }
// return occurences;
// }}


// CORRECTION
// function occurence (array1, array2) {   // Mettre un nom de fonction qui a du sens par a rapport a sont utilité et renommé les arguments/variables
//   let occurences = 0;                // occurences au lieu de occ
//   for (i=0; i<array1; i++) {
//     if (array1[i] == array2[i]) {
//     occurences = occurences+1;
//     }
//   return occurences;
//   }}






// Partie Pratique :

// 1. Réalisez le code nécessaire pour détecter le plus petit nombre, le plus grand, les nombres
// pairs et impairs dans un tableau. Renvoyez les résultats sous forme de dictionnaire
// Entrée : [1, 4, 8, 12, 9]
// Résultat : {pluspetit : 1, plusgrand: 12, pairs: [4,8,12], impairs: [1, 9]}


// let data = [1, 4, 8, 12, 9];
// let min = 0;



// if(min <= max){


// }

// let results = [
//   {pluspetit : 1,
//      plusgrand: 12,
//       pairs: [4,8,12],
//        impairs: [1, 9]}
// ]




// 2. Réalisez le code nécessaire pour trier un tableau d’entiers envoyés par l’utilisateur par une
// balise input avec un tri à bulle ou insertion ou sélection. Précisez celui utilisé. Une fois le
// tableau trié, affichez le tableau trié ainsi que la somme des entiers du tableau à l’utilisateur
// dans une balise de votre choix.



// let my_button = document.querySelector("submit");

// my_button.addEventListener("click", simpleclick);


// function simpleclick () {
//   let input_client = document.querySelector("input");
  
  
// console.log('Unsorted', input_client);               
// for(let i=0; i<input_client.length-1; i++) {           
//   for(let j=0; j<input_client.length-i-1; j++) {     
    
//     console.log('i:', i,'j:', j);               
//     if (input_client[j] > input_client[j+1]) {            
      
//       let temp = input_client[j];                    
//       input_client[j] = input_client[j+1];                  
//       input_client[j+1] = temp;                      
//       console.log('swap', input_client);             
//     }
//   }
// }
// console.log('Sorted', input_client);        
// }



      



// 3. Réalisez le code nécessaire pour inverser un tableau, vous n’avez pas le droit d’utiliser
// array.reverse(), ni array.unshift(), ni array.push() ni le droit de créer un autre tableau.





    // let myArray = [5,3,8,1];    
                            
    // for(let i=0; i<myArray.length; i++) {           
    //   for(let j=0; j<myArray.length; j++) {     
        
                    
    //     if (myArray[j] > myArray[j+1]) {            
          
    //       let temp = myArray[j];    
    //       myArray[j] = myArray[j];        

    //       myArray[j] = temp;     

                  
    //     }
    //   }
    // }
    // console.log('inverser', myArray); 



// 4. Réalisez le code nécessaire pour trouver et compter toutes les occurrences d’une chaîne
// de caractère dans une autre chaîne de caractères. Vous n’avez pas le droit d’utiliser les
// fonctions split(), contains(), indexOf() et match().
// Entrée :[‘un grand hibou gris’], “gr”
// Résultat: 2

let myArray = ['un grand hibou gris'], 'gr';




// 5. Permettez à l'utilisateur d’entrer un nombre via un formulaire, une fois le nombre validé (clic
// d’un bouton) déterminer si le nombre est un nombre d’Harshad et lui afficher la réponse.
// NB : un nombre d’Harshad est divisible par la somme de ses chiffres en restant un nombre
// entier 20 => 20 / (2+ 0) = 10, 21 => 21 / (2+1) = 7, 48 => 48 / (4 + 8) = 4, etc
// Attention : Le calcul du dividende (2 + 0) doit être fait de manière récursive
// Indice : (Math.floor(x) => vous renvoie l’entier inférieur le plus proche de x)

// Bonus : Déterminez ensuite si le résultat de la division est elle-même un nombre d’Harshad.
// Renvoyez dans ce cas à l’utilisateur la profondeur d’Harshad déterminée
// Ex :
// 6804 / (6+8+0+4) = 378
// 378 / (3+7+8) = 21
// 21 / (2 + 1) = 7
// 7 / (7) = 1
// Résultat : 6804 est un nombre d’Harshad multiple 4 (MH-4)




// 6. Réalisez le code nécessaire pour permettre à l’utilisateur de gérer une liste chaînée
// d’afficher / ajouter au début / ajouter à la fin / compter la longueur via différents boutons

