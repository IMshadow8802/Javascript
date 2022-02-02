function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();//slice copies all the dataa from start to end slice(start,end)
  newArr.splice(n, 0, ...arr1);//splice(index,items to delete,items to insert)
  return newArr;
}

console.log (frankenSplice([1, 2, 3], [4, 5, 6], 1));

