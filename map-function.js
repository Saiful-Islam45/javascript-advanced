//map - function.js
const numbers = [5, 6, 7, 9, 8];
const result = numbers.map(element => { return element * element });
console.log(result);

//map function takes 3 parameter as input
const result2 = numbers.map(function (element, index, array) {
    console.log(element, index, array);

})
/*
we can define above function like as->
(element,index,array)=>{console.log(element,index,array);
}
That will show same result as well
*/
