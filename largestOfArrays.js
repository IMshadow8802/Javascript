function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

let myArray = [
  [4, 5, 1, 12],
  [13, 27, 24, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
console.log(largestOfFour(myArray));
