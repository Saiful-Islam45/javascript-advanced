//Null Vs Undefined.js
const name;//name is undefined

function add(n1, n2) {
    console.log(n1 + n2);
}
add(5);//n2 is undefined

function add(n1, n2) {
    console.log(n1 + n2);
}
const result = add(5, 6);//result is undefined because add function =has no return value

const arrayUndefined = [5, 6, 7, 8, 9];
console.log(arrayUndefined[11]);//arrayUndefined has no value in 11th index,so result is undefined

const obj = { name: "saif", number: 456378 };
console.log(obj.age);//age is not defined in the object