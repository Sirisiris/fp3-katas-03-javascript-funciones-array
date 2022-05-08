/* 1# Encuentra el máximo */

export function maxOfTwoNumbers(a,b){
    if(a>b){
        return a;
    } else {
        return b;}
    }
    
/* 2# Busca la palabra más larga*/

export function findLongestWord(array){
    let wordLongest = "";
    if(array.length === 0){
        return undefined;
    }
    for(let i=0; i<array.length; i++){

        if(array[i].length > wordLongest.length){
            wordLongest = array[i];
        }
    }
    return wordLongest;
}

/* #3 Suma los valores de un array */

export function sumArray(array){
    let suma = 0
    if(array.length === 0){
        return 0; }
for(let i = 0; i < array.length ; i ++ ) {
    suma+= array[i];}
  return suma
}

/* #4 Calcular la media aritmética - Array de Números */

export function averageNumbers(array){
    if(array.length === 0){
        return undefined;}
    return sumArray(array)/array.length
}

/* #5 Calclar la media de largo palabras - Array de Strings */

let words = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
words.push('Bcncodes', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers');

export function averageWordLength(array){
    if (array.length === 0) {
        return undefined;
    }
    if (array = 'Bcncodes') {
        return array.length;
    }
}

// * #6 unifyarray

export function uniquifyArray(words){}

//usar include

export function doesWordExist(){}

// busco si palabra esta dentro del array devuelvo true, sino devuelvo false
// array.prototype.include() 

export function howManyTimes(){}



export function greatestProduct(){}





