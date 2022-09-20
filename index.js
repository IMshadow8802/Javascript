let array = [1, 2, 3, 4, 5];
let newArray = [];

// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// };

// let modify = (array) => {
//   array.forEach((num) => {
//     console.log(isPrime(num));
//   });
// };
// modify(array);

function modify(array){
    let sortArray = [];
    array.forEach((num) => {
        let factor = 0;
        for(let i=0; i<= num;i++){
            if((num%i) === 0){
                factor++
            }
        }
        if(factor == 2){
            sortArray.push(num +1);
        }else{
            sortArray.push(num*2);
        }
    });
    console.log(sortArray);
}

modify(array);
