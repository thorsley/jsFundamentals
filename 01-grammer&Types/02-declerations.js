/*
- a variable is a named contanier for storing data. 
- we name variables so that we cn refer to them again.
*/

let a = 2;
    let    b     =     1;
/* (1)    (2)  (3)   (4)

1. javascript keyword
2. variable name
3. assignment operator 
4. variable value 
*/ 

console.log(a + b);

let hello = 'test one';
let Hello = 'test two';


/*
- a variable name must begin with a letter, underscore, or dollar sign.
- numbers may follow the above characters, but they cant come first. 
- javascript is case sesative= "hello" & "hello" are two seperat variables 
- no spaces allowed in variable names. 
- camelCase is the best practice for naming variables with multiple words. / it Helps with readability
*/

/*
    var, let, const: 

    - var: old keyword for variables in javascript.

    - let: new keyword for variables introduced in ES6.
    (newer version of javascript)

    -const: unchangeable variable once declared. 
*/


/*
declaration vs initialization:
    -declerations are on the LEFT SIDE of a variable 
        -let x
        -declarations are on the left side of the assignment operator (=)

    
        -initializations are the RIGHT SIDE of the variable
        0-it sets the value of the variable
        - the value we initialize our variables as is what is on the right side of the assignment operator (=)
*/


let x;
console.log('Declaration: ', x); // Decleration undefined 

x =  10;

console.log('Initialization: ', x); // Initializaion: 10

x = 100;
console.log('Reinitialization:', x);

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);


var x = {

    firstName: 'John',

    lastName: 'Doe'

};
