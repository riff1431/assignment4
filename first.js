function mindGame(number){
    let first= number * 3;
    let second= first + 10;
    let third= second / 2;
    let fourth= third - 5;
    return fourth;
   }
   
   const theNumber=33;
   const ouput= mindGame(theNumber);
   console.log(ouput);