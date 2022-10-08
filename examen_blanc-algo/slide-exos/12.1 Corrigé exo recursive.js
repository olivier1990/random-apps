function recursive_add (number_1, number_2=number_1) {
    if (number_2 == 0){
        return number_1;
    }
    return recursive_add(number_1+1, number_2-1);
}
console.log(recursive_add(5,7));


/*une multiplication equivaut a additioner un nombre avec lui même autant de fois que demander par le 2eme nombre : 3x2 => 3+3; 4x5 => 4+4+4+4+4 */
/*on a déjà une fonction qui s'occupe d'ajouter un nombre à un autre, donc on va pouvoir utiliser cette étape*/
//On prend les 2 nombres en parametres et on y ajoute un total qui équivaut si rien n'est passé au nombre 1

function recursive_multiply (number_1, count, total = 0) {
  console.log('nombre 1 : ', number_1, "nombre de fois qu'il faut encore l'add à lui même", count, "total actuel", total);
  if (count == 0) {
    return total;
  }
  //appel recursif de cette fonction, qui elle même utilise la fonction recursive_add
  return recursive_multiply(number_1, count-1, recursive_add(number_1, total));
}

console.log(recursive_multiply(10,10));
console.log(recursive_multiply(10,5));
console.log(recursive_multiply(4,6));