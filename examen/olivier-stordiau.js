// Question 1 
// Réalisez le code nécessaire pour permettre de transofrmer un tableau en liste chainées
// Entrée : [1,2]



// let array123 = [7,9];

// let linkedlist = {
//     head: {
//       value: 1,
//       next: {
//         value: 2,        
//           next: null
//       }
//     }
// }

// // Print liste chainée
// linkedlist.print = function () {
//     let current = this.head;
//     while (current) {
    
//     // Mettre une boucle et insérer a chaque tour une valeur de l'array123
//     // Ne pas toucher au next : null lorsqu'on ajoute des données ???
//         for(let i=0; i<array123.length; i++) {
        
//             current.value = array123[i];  
//             console.log(current);
//             current = current.next;  

        
//         }
//     }
// }

// linkedlist.print();




// Question 2
// Réalisez un algorithme capable de détecter le nombre de caractères, de mots
// et de phrases das une chaine de caractères. Les mots sont séparés par des espaces
// et les phrases se terminent par de . Le total des caractères ne reprend pas les points
//  ni les espaces. Vous n'avez pas le droit d'utiliser split() ni substr()

// Permettez à l'utilisateur de saisir la chaine de caractères dans un input HTML et d'afficher
// le résultat dans une balise paragraphe.

// Bonus Détecter le le plus long et affichez le dans le résultat

// Exemple:
// Entrée "Cet examen est facile je vais le réussir"
// Sortie : Le texte comprend 2 phrases et 8 mots pour un total de 33 caractères





// // Question 3
// //je définis mes différents sélecteurs
// let input_sort = document.querySelector("#sort-input");
// let button_sort = document.querySelector("#add-to-sort");
// let submit_sort = document.querySelector("#submit-sort");
// let display_sort = document.querySelector("#sort-display");
// let arr = [];

// //je crée mes event listeners
// button_sort.addEventListener("click", add_to_sort);
// submit_sort.addEventListener("click", sort_array);

// function add_to_sort() {
//     //j'ajoute à mon tableau la valeur de l'input parsé en Int
//     let value = parseInt(input_sort.value);
//     arr.push(value);
// }

// function sort_array() {
//     console.log(arr);
//     //on trie
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//     return display_array(arr);
// }

// function display_array(arr) {
//     //fonction d'affichage, qui va calculer aussi la somme
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     display_sort.innerHTML =
//      " / Tableau trié : " + arr.toString();



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
//     generate(arr, 'notdata.txt')
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
//    generate('abc', 'data.txt', 'text/plain');
// }











// Question 4
// Remplacez les éléments d'un tableau aux indices multiples de 3 par coucou,
// aux indices multiples de 5 par hibou
// Attention aux indices multiples de 3 et de 5
// Remplacez les autres valeurs par la sommes des changements effectués.



// let array = [1,2,5,8,9,1,0,5]




// function replace (){

//     for(let i=0; i<array.length; i++) {

//         if (i%5 == 0) {
//             array+= "Hibou";
//         }
//         else if (i%3 == 0) {
//             array += "coucou";
//         }
//         else if (i%5 == 0 && i%3 == 0){
//             array+= "Hibou et coucou";
//         }
//         else{
//             console.log("a remplir")
//         }
//         message ? console.log(message) : console.log(i);
//       }   

// }
// replace();






// Question 5
// Réalisez le code nécessaire pour inverser une chaine de caractère sans utiliser split() reverse() ou join()
// Bonus inverser la chaine de caractère de maniere recursive (substr et charAt())
// Exemple : Entree : "Bonjour"
// Sortie : "ruojnob"



    // let oldString = "Bonjour";
    // let newString = "";

    // for (let i = oldString.length - 1; i >= 0; i--) { // on commence par 6 puis on va jusque 0, i>= 0 pour avoir la première lettre, i-- pour faire une diminution de 6
    //     newString += oldString[i];  // On ajoute chaque lettre dans la nouvelle variable
    // }
    // console.log(newString);
    




// Question 6
// Sortie/réponse : ["abcdefghi",20, 10]

// let Array1337 = [["abc",8,5],["def",2,1],["ghi",10,4]]


