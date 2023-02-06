function evenOdd(number){
    let calculation= number%2;
    if( calculation === 0){
        return ('even')
    }
    else {
       return('odd')
    }
}

let input= 'Batch7';
let myNumber= input.length;
const result= evenOdd(myNumber);
console.log(result);
