 
//console.log('Examen blanc')

// Benjamin Delbar 2021-2022
// EXAMEN BLANC 5IPRO
// Partie Théorie :
// 1. Citez les différences majeures entre un tri à bulle et un tri par sélection

// Même si les algorithmes de tri par bulle et de tri par sélection ont des complexités de temps de cas moyen de O (n2), le tri par bulle est presque tout le temps dépassé par le tri par sélection. Cela est dû au nombre de swaps requis par les deux algorithmes (les types de bulles nécessitent davantage de swaps). Mais en raison de la simplicité du tri à bulle, la taille de son code est très petite. La stabilité est une autre différence entre ces deux algorithmes. Un algorithme de tri stable est un algorithme de tri qui conserve l'ordre des enregistrements si la liste contient des éléments de valeur égale. En ce sens, le tri par sélection n'est pas un algorithme stable alors que le tri à bulle est un algorithme stable.

// 2. Définissez ce qu’est une fonction récursive, donnez un exemple d’utilisation

// une fonction récursive est une fonction qui peut s'appeler elle-même au cours de son exécution. On parle également de définition récursive, d'appel récursif de fonction, etc. voir l'article détaillé algorithme récursif.

// exemple : fonction factorielle

let nbr = 2
function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  console.log(nbr +'*'+ fact(nbr-1))
  return nbr * fact(nbr-1);
}
console.log('factoriel de  :' + nbr + ' = ' +fact(nbr));


// 3. Quelle est la complexité ( O(...) ) d’un ajout de nœud en début de liste chaînée?

// il faut parcourt la liste au moins un fois pour en connaitre les index 

// 4. En quoi cela diffère pour un tableau? Expliquez pourquoi.

// 5. Que vaut 4096 % 50 ?

console.log('ex5 :'+4096%50)

// 6. Que vaut 13 % 841.598.113 ?

console.log('ex6 :'+13 % 841598113)

// 7. Corrigez, commentez et améliorez le code suivant

//je veux trouver les occurrences d’un nombre dans un tableau    !! autant tout refaire !!!!
let tabOccurence = [1,2,3,2,6,5,2,2]
let ValRecherche = 2
let occurences = 0

function occurenceEx7(tab, recherche) {
   
    for (let i = 0; i < tab.length; i++) {
        tab[i] == recherche ? occurences ++ :''    
    }
    return occurences
}

let result = occurenceEx7(tabOccurence,ValRecherche)
console.log( result )


// Partie Pratique :

let body = document.querySelector('body')
let div = body.appendChild(document.createElement('div'))

// 1. Réalisez le code nécessaire pour détecter le plus petit nombre, le plus grand, les nombres
// pairs et impairs dans un tableau. Renvoyez les résultats sous forme de dictionnaire
// Entrée : [1, 4, 8, 12, 9]
// Résultat : {pluspetit : 1, plusgrand: 12, pairs: [4,8,12], impairs: [1, 9]}

h2Ex1= div.appendChild(document.createElement('h2'))
h2Ex1.style = 'margin : 1%'
h2Ex1.innerHTML = " EX 1 : "

let tab =[1, 4, 8, 12, 9]
let plusGrand =tab[0]
let plusPetit = tab[0]
let tabPaire= []
let tabImpaire=[]

for (let i = 0; i < tab.length; i++) {
    plusGrand < tab[i+1] ? plusGrand = tab[i+1] :''
    plusPetit > tab[i+1] ? plusPetit = tab[i+1] :''
    tab[i]%2 == 0 ? tabPaire.push(tab[i]) :''
    tab[i]%2 != 0 ? tabImpaire.push(tab[i]) :''
}

let pEx1 = div.appendChild(document.createElement('p'))
pEx1.style == 'margin : 1%'
pEx1.setAttribute('id','result-ex2')
pEx1.innerHTML = `
                    <p>le tableau : ${tab}</p>
                    <p>le plus grand : ${plusGrand}</p>
                    <p>le plus petité : ${plusPetit}</p>
                    <p>tableau paire : ${tabPaire}</p>
                    <p>tableau impaire : ${tabImpaire}</p>
                `

let hr1 = div.appendChild(document.createElement('hr'))




// 2. Réalisez le code nécessaire pour trier un tableau d’entiers envoyés par l’utilisateur par une
// balise input avec un tri à bulle ou insertion ou sélection. Précisez celui utilisé. Une fois le
// tableau trié, affichez le tableau trié ainsi que la somme des entiers du tableau à l’utilisateur
// dans une balise de votre choix.


h2Ex2= div.appendChild(document.createElement('h2'))
h2Ex2.style = 'margin : 1%'
h2Ex2.innerHTML = ' EX 2 : Encodez un nombre entier'
let inputEx2 = div.appendChild(document.createElement('input'))
inputEx2.setAttribute('id','input-ex2')
inputEx2.setAttribute('type','number')
inputEx2.style = 'margin : 1%'
let brEx2 =  div.appendChild(document.createElement('br'))
let buttonEx2 = div.appendChild(document.createElement('button'))
buttonEx2.style = 'margin : 1%'
buttonEx2.innerHTML = 'validez'
let button2Ex2 = div.appendChild(document.createElement('button'))
button2Ex2.innerHTML ='Tier'
button2Ex2.style = 'margin : 1%'
let button3Ex2 = div.appendChild(document.createElement('button'))
button3Ex2.innerHTML ='Calculez'
button3Ex2.style = 'margin : 1%'
let pEx2 = div.appendChild(document.createElement('p'))
pEx2.style == 'margin : 1%'
pEx2.setAttribute('id','result-ex2')

let tab2= []

buttonEx2.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputEx2.value ==''){
        alert('Encodez un chiffre !!!')
    }else{
        let value = parseInt(inputEx2.value)
        console.log( typeof(value))
        tab2.push(value)  
        afficherResultEx2(tab2)
        inputEx2.value=''
    }
})

function afficherResultEx2(tab){
    pEx2.innerHTML =''
    for (let i = 0; i < tab.length; i++) {
        pEx2.innerHTML += tab[i]+ ' | '
    }
}

button2Ex2.addEventListener('click',(e)=>{
    e.preventDefault();
    let temp
    for (let i = 0; i < tab2.length; i++) {
       for (let j = i+1; j < tab2.length; j++) {
           if(tab2[i] > tab2[j]){
               temp = tab2[j]
               tab2[j] = tab2[i]
               tab2[i] = temp
           } 
       }
    }
    //console.log(tab2)
    afficherResultEx2(tab2)
})

button3Ex2.addEventListener('click',(e)=>{
    e.preventDefault();
    let result = 0
    //console.log(tab2)
    for (let i = 0; i < tab2.length; i++) {
        result += tab2[i]
        
    }
    //console.log(result)
    pEx2.innerHTML = 'Somme du tableau = '+result

})

let hr2 = div.appendChild(document.createElement('hr'))


// 3. Réalisez le code nécessaire pour inverser un tableau, vous n’avez pas le droit d’utiliser
// array.reverse(), ni array.unshift(), ni array.push() ni le droit de créer un autre tableau.

h2Ex3= div.appendChild(document.createElement('h2'))
h2Ex3.style = 'margin : 1%'
h2Ex3.innerHTML = ' EX 3 :'
button1Ex3 = div.appendChild(document.createElement('button'))
button1Ex3.innerHTML ='Inversez'
button1Ex3.style = 'margin : 1%'
pEx3 = div.appendChild(document.createElement('p'))
pEx3.style == 'margin : 1%'
let hr3 = div.appendChild(document.createElement('hr'))

button1Ex3.addEventListener('click',(e)=>{
    e.preventDefault();
    pEx3.innerHTML =''
    let temp = 0
    for (let i = 0; i < tab2.length/2; i++) {
        temp = tab2[i]
        tab2[i] = tab2[tab2.length-1-i]
        tab2[tab2.length-1-i]= temp
    }
    pEx3.innerHTML =''
    for (let i = 0; i < tab2.length; i++) {
        pEx3.innerHTML += tab2[i]+ ' | '
    }

})

// 4. Réalisez le code nécessaire pour trouver et compter toutes les occurrences d’une chaîne
// de caractère dans une autre chaîne de caractères. Vous n’avez pas le droit d’utiliser les
// fonctions split(), contains(), indexOf() et match().
// Entrée :[‘un grand hibou gris’], “gr”
// Résultat: 2

h2Ex4= div.appendChild(document.createElement('h2'))
h2Ex4.style = 'margin : 1%'
h2Ex4.innerHTML = ' EX 4 :'

h31Ex4= div.appendChild(document.createElement('h3'))
h31Ex4.style = 'margin : 1%'
h31Ex4.innerHTML = ' Encodez une phrase :'

input1Ex4 = div.appendChild(document.createElement('input'))
input1Ex4.setAttribute('type', 'textarea')

let br1Ex4 =  div.appendChild(document.createElement('br'))

h32Ex4= div.appendChild(document.createElement('h3'))
h32Ex4.style = 'margin : 1%'
h32Ex4.innerHTML = ' Encodez une suite de lettre a rechercher :'

input2Ex4 = div.appendChild(document.createElement('input'))
input2Ex4.setAttribute('type', 'text')

let br2Ex4 =  div.appendChild(document.createElement('br'))

buttonEx4 = div.appendChild(document.createElement('button'))
buttonEx4.innerHTML ='Validez' 
buttonEx4.style = 'margin : 1%'

pEx4 = div.appendChild(document.createElement('p'))
pEx4.style = 'margin : 1%'

let hr4 = div.appendChild(document.createElement('hr'))

let occurence = 0

buttonEx4.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let chaine = input1Ex4.value
    let recherche = input2Ex4.value
    let flag = false

    for (let i = 0; i < chaine.length; i++) {
        if(chaine[i] == recherche[0]){
            for (let j = 0; j < recherche.length; j++) {
                if(chaine[i+j] == recherche[j]){
                    flag = true
                }else{
                    flag = false
                    break
                }
            }
            flag ? occurence++ :''
        }
    }
   // console.log(occurence)

    pEx4.innerHTML =`
                        <p> Le nombre d\'occurrence : ${occurence} </p>
                    `

})




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

h2Ex5= div.appendChild(document.createElement('h2'))
h2Ex5.style = 'margin : 1%'
h2Ex5.innerHTML = ' EX 5 : Nombre d’Harshad (6804)'
let inputEx5 = div.appendChild(document.createElement('input'))
inputEx5.setAttribute('id','input-ex2')
inputEx5.setAttribute('type','number')
inputEx5.style = 'margin : 1%'
let brEx5 =  div.appendChild(document.createElement('br'))
let buttonEx5 = div.appendChild(document.createElement('button'))
buttonEx5.style = 'margin : 1%'
buttonEx5.innerHTML = 'validez'

p1Ex5 = div.appendChild(document.createElement('p'))
p1Ex5.style = 'margin : 1%'

let hr5 = div.appendChild(document.createElement('hr'))

buttonEx5.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputEx5.value ==''){
        alert('Encodez un chiffre !!!')
    }else{
        
       
        let test 
        let occurence = 0
        let flag = true

        function harshad(input){
            let somme = 0
            let value = parseInt(input)

            for (let i = 0; i < input.length; i++) {
                somme += parseInt(input[i]); 
            }
            if(value % somme == 0 && value / somme != 1 ){
                p1Ex5.innerHTML += `<p>${value} / ${somme} = ${value / somme}</p>`
                return new String(value / somme)
            }else{
                if(value / somme == 1){
                    p1Ex5.innerHTML += `<p>${value} / ${somme} = ${value / somme}</p>`
                }else{
                    return alert('n\'est pas un nombre d’Harshad')
                }
                flag = false
            }
        }

        while(flag){
            if(test){
                test = harshad(test)
                occurence++
                
            }else{
              test  = harshad(inputEx5.value)
              occurence ++
              console.log('test')
            }
        }
        console.log(test)
        console.log(occurence)
      
        p2Ex5.innerHTML = 'le nombre de fois est ' +occurence
    }

  
})




// 6. Réalisez le code nécessaire pour permettre à l’utilisateur de gérer une liste chaînée
// d’afficher / ajouter au début / ajouter à la fin / compter la longueur via différents boutons

h2Ex6= div.appendChild(document.createElement('h2'))
h2Ex6.style = 'margin : 1%'
h2Ex6.innerHTML = ' EX 6 : LinkedList'
let brEx6 =  div.appendChild(document.createElement('br'))
let button1Ex6 = div.appendChild(document.createElement('button'))
button1Ex6.style = 'margin : 1%'
button1Ex6.innerHTML = 'ajouter debut'
let button2Ex6 = div.appendChild(document.createElement('button'))
button2Ex6.style = 'margin : 1%'
button2Ex6.innerHTML = 'ajouter fin'
let button3Ex6 = div.appendChild(document.createElement('button'))
button3Ex6.style = 'margin : 1%'
button3Ex6.innerHTML = 'comptez'

let button4Ex6 = div.appendChild(document.createElement('button'))
button4Ex6.style = 'margin : 1%'
button4Ex6.innerHTML = 'retour'

let button5Ex6 = div.appendChild(document.createElement('button'))
button5Ex6.style = 'margin : 1%'
button5Ex6.innerHTML = 'afficher en JSON'

p1Ex6 = div.appendChild(document.createElement('p'))
p1Ex6.style == 'margin : 1%'


let hr6 = div.appendChild(document.createElement('hr'))

let ex6ListeChaine = {
    head : {
        value : 'noeud un',
        next :  {
            value : 'noeud deux',
            next : {
                value : 'noeud trois',
                next : null
            } 
        }
    }
}


ex6ListeChaine.print = function (){
   let current = this.head 
   while(current){
       p1Ex6.innerHTML += `<p> ${current.value} </p>`
       //console.log(current.value)
       current = current.next
   }
}

ex6ListeChaine.createNewNode = function (value, next){
    return newNode = {
        value : value,
        next : next
    }

}


ex6ListeChaine.addBegin = function(){
    this.head = this.createNewNode('nouvelle tete', this.head)
    
}

ex6ListeChaine.addEnd = function(){
    current = this.head
    while(current){
        if(current.next== null){
            current.next = this.createNewNode('nouveau noeud de fin',null)
            break
        }  
        current= current.next
    }
}

ex6ListeChaine.count = function (){
    current = this.head
    let count = 0
    while(current){
        count ++
        current= current.next
    }
    return count
}



button1Ex6.addEventListener('click',(e)=>{
    e.preventDefault();
    p1Ex6.innerHTML =''
    ex6ListeChaine.addBegin()
    ex6ListeChaine.print()

})

button2Ex6.addEventListener('click',(e)=>{
    e.preventDefault();   
    p1Ex6.innerHTML =''
    ex6ListeChaine.addEnd()
    ex6ListeChaine.print()

})

button3Ex6.addEventListener('click',(e)=>{
    e.preventDefault(); 
    let elements = ex6ListeChaine.count()
    p1Ex6.innerHTML = ` il y a ${elements} noeud(s) dans la liste `
})

button4Ex6.addEventListener('click',(e)=>{
    e.preventDefault();   
    location.reload();
})

button5Ex6.addEventListener('click',(e)=>{
    e.preventDefault();  
    p1Ex6.innerHTML =''
    p1Ex6.innerHTML = JSON.stringify(ex6ListeChaine)
})


ex6ListeChaine.print()
