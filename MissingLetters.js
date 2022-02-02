// function fearNotLetter(str) {
//   let start = str.charCodeAt(0) + 1;
//   let missing = "";
//   for (var i = 1; i < str.length; i++) {
//     //if the codes don't match append the letter to the variable
//     if (str.charCodeAt(i) !== start) {
//       missing += String.fromCharCode(start);
//       start++; //add an extra one to the counter for the missing letter
//     }
//     start++;
//   }
//   if (missing == "") {
//     missing = undefined;
//   }

//   return missing;
// }
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    let code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("ABCE"));
