// //Scopes - whisting.js
// function add(a, b) {
//     if (a > b) {
//         var diff = a - b;
//     }
//     console.log(diff);

// }
// add(7, 6);
// //but if we declare diff variable as let or constant,it can't access outside the if block.but var can do it.the procedure is called whisting.
if ({}) {
    console.log("I am not false")
}
else {
    console.log("I am false")
}