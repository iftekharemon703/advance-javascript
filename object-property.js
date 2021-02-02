const student = [
    {id: 11, name : "safa"},
    {id: 21, name : "emon"},
    {id: 31, name : "apu"},
    {id: 41, name : "jimi"}
]

// output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const names = element.name;
//     output.push(names);
// }
// console.log(output);

const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const bigger = student.filter( s => s.id > 20);
const bigger1 = student.find( s => s.id > 20);
console.log(bigger1);