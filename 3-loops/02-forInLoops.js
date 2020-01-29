/*
    -great for counting key/value pairs in an object. properties in an object are what is called enumerable 
        for in loops will iterate over an objects enumerable properties


        
*/


let student = {
    name: "peter",
    awesome: true,
    degree: "javascript",
    week: 1
}

console.log(student.degree); // Dot notation

for (let item in student){
    console.log(item);
    console.log(student[item]); // object bracket notation
}


let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

console.log([1]); //bracket notation
 
for (dog in dogArray){
    //console.log(dog);
    console.log(dogArray[dog]);

}

let name = "dAN";
let capName;

for (let i in name){
    if (i == 0) {
        capName = name[i].toUpperCase();
    }else {
        capName += name[i].toLowerCase();
    }
    console.log(capName)

}


