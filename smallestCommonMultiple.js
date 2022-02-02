function smallestCommons(arr) {
  if(arr[0]>arr[1])
  {
      min = arr[1];
      max = arr[0];
  }else 
  {   
      min = arr[0];
      max = arr[1];
  }
  function range(min,max)
  {
      var arr = [];
      for(let i = min;i<=max;i++)
      {
          arr.push(i);
      }
      return arr;
  }

      function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    let  smallestMultiple = min;
    range(min, max).forEach(function(n) {
        smallestMultiple = lcm(smallestMultiple, n);
    });

    return smallestMultiple;
}

console.log(smallestCommons([5,5]));