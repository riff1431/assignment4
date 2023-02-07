// Function Name: mindGame 
// Function Description: A simple math calculation. It's called mindGame . It will help to output a result base on own conditions

function mindGame(number){
  let first= number * 3;
  let second= first + 10;
  let third= second / 2;
  let fourth= third - 5;
  return fourth;
 }

// Function Name: evenOdd 
// Function Description: The function will convert text to character numbers. It will help to output even numbers and odd numbers

 function evenOdd(number){
  let calculation= number%2;
  if( calculation === 0){
      return ('even')
  }
  else {
     return('odd')
  }
}

// Function Name: isLGSeven
// Function Description: The function will help to judge whether the input number is greater than '7' or less the '7'. The result will able calculation base on own rules 

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

// Function Name: findingBadData
// Function Description: The function will help to find the minus numbers and also it will output how many minus numbers available in the input array

function findingBadData(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element < 0) {
      sum = sum + 1;
    }
  }
  return sum;
}


// Function Name: gemsToDiamond
// Function Description: The function will convert three friend's gems to diamonds and also calculate the total diamond based on their own conditions

function gemsToDiamond(firstInput, secondInput, thirdInput) {
  const firstFriendCapacity = 21;
  const secondFriendCapacity = 32;
  const thirdFriendCapacity = 43;

  const firstDiamond = firstFriendCapacity * firstInput;
  const secondDiamond = secondFriendCapacity * secondInput;
  const thirdDiamond = thirdFriendCapacity * thirdInput;

  const totalDiamond = firstDiamond + secondDiamond + thirdDiamond;

  if (totalDiamond > 1000 * 2) {
    const less = totalDiamond - 2000;
    return less;
  } else {
    return totalDiamond;
  }
}