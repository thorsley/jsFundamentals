/*
    - forOf loops look at the iterable properties on an array
    -cant use forOf loops on an objects because objects are enumerable not iterable.


let student = {
    name: "peter",
    awesome: true,
    degree: "javascript",
    week: 1
}

for (let item of student){
    console.log(item);
}
*/

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for(let dog of dogArray) {
    console.log(dog, 'goes bark');
}