function findingBadData(numbers){
    let sum= 0;
    for(let i=0; i < numbers.length; i++){
      let element= numbers[i];
      if( element < 0 ){
        sum= sum + 1;
      }
    }
    return sum;
  }
  
  let input = [ -4, -9, -5, -33, -55 ];
  const result = findingBadData(input);
  console.log(result);
  