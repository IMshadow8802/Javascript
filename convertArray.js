let num = [1,2,2,3,1,2];
let newNum = [];

// function convertArray(i) {
//     let newItem = 0;
//     newItem = (i + 1) * [i];
//     newNum.push(newItem);
//     return newItem;
// }

// num.forEach((item,i,arr) => {
//     convertArray(arr);
// })

num.forEach((item, i, arr) => newNum.push((i + 1) * num[i]));

console.log(newNum);