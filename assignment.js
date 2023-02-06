numbers = [20, 30, -40, 50, -60];

function findingBadData(number) {
  for (let i = 0; i < numbers.length; i++) {
    data = numbers[i];

    if (data <= 0) {
      return "Bad data";
    } else {
      return "Good Data";
    }
  }
}

const result = findingBadData(numbers);
console.log(result);
