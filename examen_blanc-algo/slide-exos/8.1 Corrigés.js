
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