/*Corrections exercices sur les fonctions*/
/*1. Réalisez une fonction prenant le nom et l’âge de la personne en entrée et retournant une chaîne de caractères “{nom} a {age} ans”*/

function concat_name_age (name, age) {
    return name + " a " + age + " ans";
  }
  console.log(concat_name_age("John", 23));
  
  /*2. Réalisez une fonction qui retourne vrai si le nombre entré est pair et faux s’il est impair*/
  function is_pair (nb) {
    return nb % 2 === 0;
  }
  console.log(is_pair(2), is_pair(5));
  
  
  /*3. Réalisez une fonction qui prend un tableau d’entiers et qui renvoie le tableau inversé */
  function reverse_array (arr) {
    for(let i=0; i<arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
  }
  console.log(reverse_array([5,3,8,1,2]));
  
  /*4. Réalisez une fonction qui calcule combien de fois un nombre donné est présent dans un tableau donné et renvoie cette valeur
  */
  
  function find_occurence(arr, search) {
    let occurences = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] == search) {
        occurences++;
      }
    }
    return occurences;
  }
  
  console.log(find_occurence([5,8,1,9,8,2,8,1], 8));
  
  /*5. Pareil que la 4 mais pour une suite de nombre*/
  function find_occurences(arr, search) {
    //si la recherche n'est pas un tableau, alors j'appelle le find_occurence qui s'occupera de faire le travail
    if (!Array.isArray(search)) {
      return find_occurence(arr, search);
    }
    let occurences = 0;
    //je parcours le tableau
    for (let i=0;i<arr.length-(search.length-1); i++) {
         //je parcours le tableau de recherche
        for (let j = 0; j < search.length; j++) {
          //si l'élément ne match pas j'arrete
          if (arr[i+j] !== search[j]) {
            break;
          }
          //si tout les éléments ont matchés, alors on est bien sur une occurence
          if (j == search.length -1) {
            occurences++;
          }
        }
    }
    return occurences;
  }
  
  console.log(find_occurences([1,2,3,4,1,2,3,5,8,9,5,1,2,3], [1,2,3]));
  console.log(find_occurences([1,2,3,4,1,2,3,5,8,9,5,1,2,3], 3));
  
  
  /*6 & 7 Réalisez les fonctions nécessaires pour faire les 4 opérations (+ - / * ) avec 2 nombres donnés*/
  function operation (number_1, number_2, operand) {
    switch(operand) {
      case "-" : 
        return substract(number_1, number_2);
      break;
        case "*" : 
        return multiply(number_1, number_2);
      break;
        case "/" : 
        return divide(number_1, number_2);
      break;
      default:
        return add (number_1, number_2);
    }  
  }
  
  function add (number_1, number_2) {
    return number_1 + number_2;
  }
  
  function substract (number_1, number_2) {
    return number_1 - number_2;
  }
  
  function divide (number_1, number_2) {
    return number_1 / number_2;
  }
  
  function multiply (number_1, number_2) {
    return number_1 * number_2;
  }
  
  console.log(add(5, 2));
  console.log(operation(5, 2, "+"));
  console.log(operation(4, 2, "/"));