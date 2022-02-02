function sumAllPrime(num) {
  function isPrime(num) {
    let result = true;
    if (num === 0 || num === 1)
    {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumAllPrime(10));
