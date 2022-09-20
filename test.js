let num = [1, 2, 3, 4, 5];
let newNum = [];

const modify = (item) => {
  // console.log(item);
  // isPrime(item);
  // console.log(isPrime(item));
  // let newItem = 0;
  (isPrime(item)) ? newNum.push(item + 1) : newNum.push(item * 2);
  //if (isPrime) {
  //  newItem = item +1;
  //newNum.push(newItem);
  //}
  //else {
  //  newItem = item * 2;
  //newNum.push(newItem);
  //}
  return newNum;
};

num.forEach((item) => {
  modify(item);
});

function isPrime(n) {
  if (n == 0 || n == 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(newNum);

module.exports = modify;
/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output & extend it to test cases
Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving.
     a. Obvious logic, tests ability to convert logic to code
     b. Figuring out logic
     c. Knowledge of specific domain or concepts
     d. Knowledge of specific algorithm
     e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one
3. Get to a point where you can explain your approach to a 10 year old
4. Take a stab at the high-level logic & write it down.
5. Try to offload processing to functions & keeping your main code small.
Milestone 3: Code by expanding your pseudocode
1. Make sure you name the variables, functions clearly.
2. Avoid constants in your code unless necessary; go for generic functions, you can use examples for your thinking though.
3. Use libraries as much as possible
Milestone 4: Prove to the interviewer that your code works with unit tests
1. Make sure you check boundary conditions
2. Time & storage complexity
3. Suggest optimizations if applicable
*/
