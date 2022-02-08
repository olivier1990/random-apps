// EXO 7
let array_01 = [1, 3, 5, 'bananaa', 8, 9],
    array_02 = [0,'bonjour', 5, 'bananaa', 8, 11, 0, 0, 0, 12],
    keyChain  = [],
    lastEL
    
    // Boucle les 2 array, si data array1 == data array2 alors on push la clé à la dernière ligne keyChain
for(let i=0 ; i<array_01.length ;i++){
    for(let j=0 ; j<array_02.length ;j++){
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