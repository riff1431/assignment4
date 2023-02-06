function isLGSeven(number){
    if ( number < 7 ){
        let smallThanSeven =  number - 7;
        return smallThanSeven;
    }
    else{
        let smallLessSeven= number * 2;
        return smallLessSeven;
    }
}
const myNumber= 15;
const result=isLGSeven(myNumber);
console.log(result)