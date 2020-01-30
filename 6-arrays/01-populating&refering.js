/*
-arrays are cotainers that hold a list of items
-denoted by []
-can hold multiple data types
-each item, regardless of datatype, is seperated by comma
*/

let list = ['orange', 'banana','apple'];
console.log(list[1]);

/*
-when calling an array, we can append square bracket onto the end of our array with the index number we want to reference, this is called square bracket notation
-javascript counts starting at 0
*/

let students = ['matt', 'bob','jeff','ab',23,true,['kris','taylor','will']];
//console.log(typeof students0);
//console.log(students instanceof Array); // instanceof operator is to check the type of a variable we're working with. 

//console.log(students[2]);




let students = ['matt', 'bob','jeff','ab',23,true,['kris','taylor','will']];

console.log(students[6][2]);
let name = students[6][2];
console.log(`hello ${name}`);
