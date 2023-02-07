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

const result = gemsToDiamond(20, 200, 50);
console.log(result);
