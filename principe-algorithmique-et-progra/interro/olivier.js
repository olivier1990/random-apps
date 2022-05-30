// Partie théorique /10
// Question 1 /1
// Combien de “else” peut-on avoir après un if?

// Un seule, exemple ci dessous.
// La condition contient les règles pour qu'elle puisse s'éxécuter if(a>b) alors on continue 
if(condition){
    // Instruction est le code qui s'éxécute comme console.log('test)
    instruction
}
else{
    instruction
}
// On peut en mettre plusieurs avec les else if (){}

// Question 2 /1
// Quel est la différence entre une boucle “while” et une boucle “do while”

// La boucle do while éxécute l'instruction une fois avant de commmencer la boucle.(exemple)
// Elle execute d'office l'instruction qui se trouve dans do
do
   instruction
while (condition);

// Une boucle while
while (condition) {
    instruction
  }

// Question 3 /4
// Citez et expliquez succinctement les 3 tris vu en cours et leurs fonctionnement
// respectifs.

// Les 3 tris vu au cours contienent tous une variable temp

// Tri à bulles
// Elle va vérifier les données case par case de l'index 0 jusqu'au dernier en les permutants si il le faut.

// Tri à insertion
// elle vérifie chaque élément du tableau et les insères parmi les éléments déjà triés

// Tri sélectif
// elle fait des insertions de code et des supressions en commençant par les plus petites données.



// Question 4 /2
// Vous devez réaliser le tri d’un tableau d’entiers, mais la contrainte est de limiter au
// maximum les swaps (échange des valeurs entre 2 indexs du tableau). Parmi les
// différents algorithmes de tris vu au cours, lequel choisiriez-vous et pourquoi ?


//tri à bulle
// Elle fait le moins de swap possible


// Question 5 /2
// Que représente la notation “Big O” (O(...)) dans le contexte d’un algorithme?
// Quelle est sa valeur moyenne pour les algorithmes vus en classe?

// Cette mesure mathématique permet de vérifier la performance de l'algorithme

// O(n2)     O (n au carré)
// Exemple : si on a 4 données cela fait 16 réponses.





// Partie pratique /30
// Question 1 /2*
// Réalisez le code nécessaire pour l’énoncé suivant :
// Je souhaiterais vérifier si le résultat de l’interro est réussi, raté, ou tout juste réussi.
// J’encode un résultat sur 40 et souhaiterais voir le score remis sur 20 ainsi que le
// message : “l’interro est réussie” si > à 10/20, “l’interro est ratée” si < à 10/20, et
// “l’interro est tout juste réussie” dans le cas où l'élève a 10/20.

// Exemple
// score : 30
// Résultat : “l’interro est réussie avec un score de 15/20”
// Point bonus : Permettez à votre programme de continuer jusqu’à ce que l’utilisateur
// entre “stop”


cotes40 = prompt('Quels est la cotes sur /40 ? ');
cote20 = cotes40/2;


if (cote20 > 10){

    console.log('l’interro est réussie '+ cote20 +'/20')  
}
else if (cote20 < 10){
    console.log('l’interro est ratée '+ cote20 +'/20')
}
else{
    console.log('l’interro est tout juste réussie '+ cote20 +'/20')
}






// Question 2 /2*
// Créez et parcourez un tableau d’entiers du premier élément au dernier en évitant les
// indexs pairs.
// Point bonus : Réalisez l’exercice sans utiliser de if, et sans utiliser de modulo (%)





// Question 3 /4
// Réalisez le code permettant d’inverser un tableau.
// Tableau : [5, 3, 8, 1]
// Résultat : [1, 8, 3, 5]



    let secondArray= [];
    let firstArray = [5, 3, 8, 1];

for(let i=0 ; i<firstArray.length ; i++){
        secondArray.unshift(firstArray[i])
    }
    console.log(secondArray) 




// Question 4 /2*
// Remplacez dans le tableau de départ :
// Les valeurs aux indexs multiples de 3 par “coucou”
// Les valeurs aux indexs multiples de 5 par “hibou”
// Tableau de départ :
// let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5] ;
// Point bonus : Permettez à l’utilisateur de choisir les multiples à modifier (au lieu de 3
// et 5)

let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5] ;


for(let i=0 ; i<myArray.length ; i++){
    if(i % 3 == 0){
        console.log('coucou')
    }
    else if(i % 3 == 0 && i % 5 == 0){
        console.log('coucou + hibou')
    }
    else if(i % 5 == 0){
        console.log('hibou')

    }
    
    else{
        console.log(i)
    }

}



// Question 5 /10
// Triez par ordre décroissant les entiers dans le tableau suivant, précisez l’algorithme
// choisi.
// Exemple :
// Tableau [5, 3, 8, 1, 2, 7]
// Résultat [8, 7, 5, 3, 2, 1]



//tri à bulle
let myArray1 = [5, 3, 8, 1, 2, 7];

console.log('unsorted)', myArray1);
for (let i=0; i<myArray1.length; i++) {
  for (let j=0; j<myArray1.length-i-1; j++) {

    if (myArray1[j] < myArray1[j+1]) {
			let temp = myArray1[j];
			myArray1[j] = myArray1[j+1]
			myArray1[j+1] = temp;
		}
  }
}
console.log('sorted', myArray1);




// Question 6 /10
// Le code présent ci-dessous ne fonctionne pas.
// Réparez le code, listez les différents problèmes rencontrés ainsi que pourquoi et
// comment vous les avez résolus



// Ceci est un tri à bulles
myArray = [7, 3, 8, 9, 0, 2];
// Boucler à la longueur de l'array -1 pour ne pas prendre l'index 0 avec
for(let i=0; i<myArray.length-1; i++) {
    for(let j=0; j<myArray.length; j++) {
        if (myArray[j+1] < myArray[j]) {
            let temp = myArray[j];
            // Erreur myArray[i], il faut prendre le data de la boucle j
            myArray[j] = myArray[j+1];
            // Erreur temp[j+1], Il faut set myArray[j+1] par temp
            myArray[j+1] = temp  
        }
    }
}
