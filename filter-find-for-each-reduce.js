// //filter - find -for-each - reduce.js
let num = [5, 6, 7, 8, 9];
console.log("Filter result:");

console.log(num.filter(x => x > 5));

console.log("Find result:");
console.log(num.find(x => x > 5));

console.log("For each result:");
// let sum = 0;
// for (let val of num) {
//     sum += val;

// }
// console.log(sum);
let sum = 0;
let summation = num.forEach(function (val) {
    sum += val;
    return sum;
});
console.log(summation);


console.log("reduce result:");
let result = num.reduce((accumulator, currentValue) => { //let result = num.reduce((a,b)=>b>a?b:a);
    if (currentValue > accumulator) {
        accumulator = currentValue;
    }
    return accumulator;
});
console.log(result);


//reduce method two parameter one is accumulator that means initial value and another one is current value and that is optional.