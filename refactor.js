// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr,bookName) {
let newArr = [...arr];
newArr.push(bookName);
return newArr;
  // Change code above this line
}
// Change code below this line
function remove(arr,bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
      // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
      return newArr;
      // Change code above this line
    }
}

const newBookList = add(bookList, "A Brief History of Time");
const newerBookList = remove(
  bookList,
  "On The Electrodynamics of Moving Bodies"
);
const newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
