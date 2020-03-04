//fun -with-array - object.js
const students = [
    { id: 21, name: "Albert" },
    { id: 31, name: "Robert" },
    { id: 41, name: "Libert" },
    { id: 51, name: "Flbert" }
];
let names = [];
for (let i = 0; i < students.length; i++) {
    let element = students[i].name;
    names.push(element);

}
console.log(names);
console.log("we can do it another way through Map.Lets fun with it");

let n = students.map(s => s.name);
console.log(n);


