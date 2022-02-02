function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     console.log( flattenedArray.push(...steamrollArray(arr[i])));
    } else {
      console.log(flattenedArray.push(arr[i]));
    }
  }
  return flattenedArray;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
