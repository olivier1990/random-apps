
// Pendu 17/05/2022

// let my_button = document.querySelector(".button65");

// my_button.addEventListener("click", simpleclick);

// function simpleclick () {
//   let input = document.querySelector("input");
  
//   this.innerHTML = input.value
//   input.value = ""
// }

// let array = ['a', 'l', 'g', 'o']


// 31-05-2022

// Lectures et Ecritures de fichiers

// Lire un fichier qui contient une suite de nombres séparés par un ; et les afficher (exercice avancé : sans utiliser de .split(";"))
// En partant de l'ex. précédent : Trier la liste de nombres et l'afficher (avancé : proposer à l'utilisateur de choisir son type de tri)
// En partant de l'ex. précédent : Sauvegarder la liste trié pour permettre à l'utilisateur de la télécharger (avancé : permettez à l'utilisateur de choisir le nom du fichier & le séparateur voulu)
// En partant de l'exercice du pendu, permettez à l'utilisateur de mettre en ligne une liste de mots à utiliser aléatoirement
// En partant de l'exercice du pendu, permettez à l'utilisateur de télécharger le score de sa partie : (#nb d'essai, mot à trouver, lettres essayées etc)


// Lecture
// Grâce au FileReader, et de manière asynchrone
// const reader = new FileReader();
// reader.onload = function contenu_charger() {
//  console.log(reader.result);
// };
// reader.readAsText(this.files[0]);


// Ecriture
// function generate(text, name, type = 'text/plain') {
//  let link_to_download = document.querySelector("a#download");
//  let file = new Blob([text], {type: type});
//  link_to_download.href = URL.createObjectURL(file);
//  link_to_download.download = name;
// }


// //mise en variable de l'input file ainsi que du bouton download
// let input_file = document.querySelector('#file-input');
// let download_btn = document.querySelector('button.download');

// //ajout d'event listeners
// input_file.addEventListener('change', file_changed);
// download_btn.addEventListener('click', download);

// //cette fonction est appellée dès que le fichier est changé
// function file_changed() {
//   if (this.files.length === 0) {
//     console.log('Pas de fichier sélectionné');
//     return;
//   }

//   const reader = new FileReader();
//     reader.onload = function contenu_charger() {
//     //ce résultat est appellé lorsque le contenu du fichier uploadé est chargé
//     console.log(reader.result);
//   };
//   reader.readAsText(this.files[0]); //on va récupérer le fichier dans l'input avec this.files[0] car on peut potentiellement upload plusieurs fichiers d'un coup
// }

// //prend 3 parametres : le text, le nom du fichier et son type (par defaut text/plain)
// function generate(text, name, type = 'text/plain') {
//    let link_to_download = document.querySelector("a#download");
//    let file = new Blob([text], {type: type});
//    link_to_download.href = URL.createObjectURL(file);
//    link_to_download.download = name;
// }

// //appellée au click du bouton "Créer le fichier"
// function download() {
//    generate('test', 'test.txt', 'text/plain');
// }


// Examen blanc
// Partie Théorie :

// 1. Citez les différences majeures entre un tri à bulle et un tri par sélection

// Tous les 2 utilisent une variables temporaires
// Le tris à bulles va accéder une array de maniere consécutives et changer la données si il le faut

// 2. Définissez ce qu’est une fonction récursive, donnez un exemple d’utilisation

// La programmation récursives est une fonction qui s'éxecute elle mêmes dans sont propres codes.
// Par exemple dans le calcul de factiorielles.

// 3. Quelle est la complexité ( O(...) ) d’un ajout de nœud en début de liste chaînée?

// L'ajout de données en HEAD se fait l'une à la suite de l'autre on ne pourra pas choisir de position comme dans une array.

// 4. En quoi cela diffère pour un tableau? Expliquez pourquoi.

// On pourra placer le data à n'importe qu'elles positions par exemple une array avec 4 string on pourra y insérer
// en position array[2] entre temps qu'avec une fonction chainées seulement en HEAD ou TAIL donc position array[0] et array[3]


// 5. Que vaut 4096 % 50 ?
// 81

// 6. Que vaut 13 % 841.598.113 ?
// 0


// 7. Corrigez, commentez et améliorez le code suivant

//je veux trouver les occurrences d’un nombre dans un tableau
function zzz (a, b) {
let occ = 0;
for (i=0; i<a; i++) {
if (a[i] == b[i]) {
occurences = occurences+1;
}
return occurences;
}}


// Correction


function occurence (a, b) {   // Mettre un nom de fonction qui a du sens par a rapport a sont utilité
  let occurences = 0;                // occurences au lieu de occ
  for (i=0; i<a; i++) {
    if (a[i] == b[i]) {
    occurences = occurences+1;
    }
  return occurences;
  }}






  // Partie Pratique :


// 1. Réalisez le code nécessaire pour détecter le plus petit nombre, le plus grand, les nombres
// pairs et impairs dans un tableau. Renvoyez les résultats sous forme de dictionnaire
// Entrée : [1, 4, 8, 12, 9]
// Résultat : {pluspetit : 1, plusgrand: 12, pairs: [4,8,12], impairs: [1, 9]}




// 2. Réalisez le code nécessaire pour trier un tableau d’entiers envoyés par l’utilisateur par une
// balise input avec un tri à bulle ou insertion ou sélection. Précisez celui utilisé. Une fois le
// tableau trié, affichez le tableau trié ainsi que la somme des entiers du tableau à l’utilisateur
// dans une balise de votre choix.


// 3. Réalisez le code nécessaire pour inverser un tableau, vous n’avez pas le droit d’utiliser
// array.reverse(), ni array.unshift(), ni array.push() ni le droit de créer un autre tableau.


// 4. Réalisez le code nécessaire pour trouver et compter toutes les occurrences d’une chaîne
// de caractère dans une autre chaîne de caractères. Vous n’avez pas le droit d’utiliser les
// fonctions split(), contains(), indexOf() et match().
// Entrée :[‘un grand hibou gris’], “gr”
// Résultat: 2



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

