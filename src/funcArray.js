/* Encuentra el máximo */

export function maxOfTwoNumbers(a,b){
    if(a>b){
        return a;
    } else {
        return b;
    }
    }
    
/* Busca la palabra más larga*/



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



/* Suma los valores de un array */

export function sumArray(array){
    let suma = 0
    if(array.length === 0){
        return 0;
    }
for(let i = 0; i < array.length ; i ++ ) {
    suma+= array[i];
  }
  return suma
}



export function averageNumbers(array){
    if(array.length === 0){
        return undefined;
    }
    return sumArray(array)/array.length
}



export function averageWordLength(){}



export function uniquifyArray(){}



export function doesWordExist(){}



export function howManyTimes(){}



export function greatestProduct(){}





