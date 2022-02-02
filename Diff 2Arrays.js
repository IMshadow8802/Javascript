// function diffArray(arr1, arr2)
// {
// return arr1.concat(arr2).filter(elements => !arr1.includes(elements) || !arr2.includes(elements));
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



////Spinal Case

function spinalCase(str) {
  let str1 = str;
  let str2 = str1.replace(/([a-z])([A-Z])/g, "$1 $2");
 // console.log("str2 | replace", str2);
  var str3 = str2.toLowerCase().split(/(?:_| )+/);//Split on whitespace and underscores and join with dash
  return str3.join("-");
}

console.log(spinalCase("Th1isIsSpi2nalTap"));
