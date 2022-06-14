//L’algorithme de calcul de l’IMC (slide cours 2)

let imc;
let age = prompt('Quel est votre age?');

if (age >= 18) {
  if (age >= 60) {
    console.log("attention, le calcul n'est pas indiqué vu votre âge");
  }
  let height = prompt('Quel est votre taille (en cm)');
  height = parseInt(height);
  height /= 100;
  let weight = prompt('Quel est votre poids (en kg)');
  weight = parseInt(weight);
  imc = weight / ((height*height));
  let category = "";
  if (imc < 18.5) {
    category = "poids insuffisant";
  } else if (imc < 25) {
    category = "poids normal";
  } else if (imc < 30) {
    category = "surpoids";
  } else if (imc < 40) {
    category = "obésité";
  } else {
    category = "obésité morbide";
  }
  console.log('Vous êtes dans la catégorie', category, 'Votre imc est de', imc);
} else {
  console.log("Vous etes trop jeune pour calculer votre IMC");
}






/* Parcourir les entiers de 1 à 100 et affichez (console.log) l’entier sauf si celui ci est un multiple de 5, affichez 
“Coucou”, et si celui ci est un multiple de 7, affichez “Hibou” */

for(let i=1; i<=100; i++) {
    let message = "";
    if (i%5 == 0) {
      message+= "Coucou";
    }
    if (i%7 == 0) {
      message += "Hibou";
    }
    message ? console.log(message) : console.log(i);
  }







/* Demandez un nombre entier positif à l’utilisateur (prompt), ensuite bouclez de 1 à ce nombre et afficher à chaque 
fois le nombre ainsi que sa valeur au carré (1 => 1, 2 => 4, 3 => 9, 4 => 16 etc) */

  let nombre = prompt('Entrez un nombre entier');

for(let i=1; i<=nombre; i++) {
  console.log(i, i*i);
}






// PP et PG 

//V1 => While

let nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
let pp = nombre;
let pg = nombre;

while (nombre != 0) {
  if (pp > nombre) {
    pp = nombre;
  }
  if (pg < nombre) {
    pg = nombre;
  }
  console.log('so far', pp, pg);
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
}

console.log('pp', pp, 'pg', pg);


//V2 => Do While

let pp = 0;
let pg = 0;
let nombre = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  if (pp == 0 && pg == 0 && nombre != 0) {
    pp = nombre;
    pg = nombre;
  } else if (nombre != 0) {
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg);

//V3 => Utilisation de ternaires

let pp = 0, pg = 0, nombre = 0;
do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  pp = !pp && nombre ? nombre : pp && nombre && pp > nombre ? nombre : pp;
  pg = !pg && nombre ? nombre : pg && nombre && pg < nombre ? nombre : pg;
} while (nombre);
console.log('pp', pp, 'pg', pg);
*/

//V2 Avec somme et moyenne => Do While

let pp = 0;
let pg = 0;
let nombre = 0;
let somme = 0;
let cpt = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  
  if (nombre != 0) {
    somme += nombre;
    cpt++;
    
    if (pp == 0 && pg == 0) {
      pp = nombre;
      pg = nombre;
    }
    
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg, 'la somme est', somme, 'la moyenne est', somme/cpt);






/* Permettre de boucler sur les entiers de 1 à 10 et d’afficher à chaque fois les lettres de A à Z (résultat : 1A, 2A, 3A… 
10A, 1B, 2B, 3B, … 10B, 1C etc) (indice A à Z = Char code de 65 à 90)*/

for(let i=1; i<=10; i++) {
    for (let j=65; j<91; j++) {
      console.log(i,String.fromCharCode(j));  
    }
  }







 /* Boucler sur les entiers compris entre 2 valeurs données par l’utilisateur dans l’ordre (si l’utilisateur donne 25 puis 
10, bouclez en décrémentation 25, 24, 23, 22 etc) */

let start = parseInt(prompt('Votre premier nombre'));
let end = parseInt(prompt('Votre deuxieme nombre'));

if (start > end) {
  for (start; start >= end; start--) {
    console.log(start);
  }
} else if (start < end) {
  for (start; start <= end; start++) {
    console.log(start);
  }
} else {
  console.log('Les 2 nombres sont similaires');
}






/* Boucler sur les entiers compris entre 2 valeurs données par l’utilisateur dans l’ordre (si l’utilisateur donne 25 puis 
10, bouclez en décrémentation 25, 24, 23, 22 etc) */


let compteur = 15; //N nombres premiers
let nb = 2;
while (compteur) {
  let isPremier = true;
  if (nb > 2) {
    for (let i=2; i<nb ;i++) {
      if (nb%i === 0) {
        isPremier = false;
      }
    }
  }
  
  if (isPremier) {
    console.log(nb, 'est un nombre premier');
    compteur--;
  }
  nb++;
}