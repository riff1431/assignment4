function gemsToDiamond(firstInput, secondInput, thirdInput) {
  const firstFriendCapacity = 21;
  const secondFriendCapacity = 32;
  const thirdFriendCapacity = 43;

  const firstDiamond = firstFriendCapacity * firstInput;
  const secondDiamond = secondFriendCapacity * secondInput;
  const thirdDiamond = thirdFriendCapacity * thirdInput;

  const totalDiamon = firstDiamond + secondDiamond + thirdDiamond;

  if (totalDiamon > 1000 * 2) {
    const less = totalDiamon - 2000;
    return less;
  } else {
    return totalDiamon;
  }
}

const result = gemsToDiamond(20, 200, 50);
console.log(result);
