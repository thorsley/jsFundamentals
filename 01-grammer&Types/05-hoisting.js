/*
-javascriot is interpreted line by line (read top to botttom), and preforms 2 passes of our code.
-The first pass of the code recognizes where we hace declared variables and stores them away in memory. 
    -looks at anything on the left side of our assignment operatior (=)
- the second pass of the code is where the values we have given our variables are actually assigned. 

-Note: fuctions are also hoisted. 
*/

console.log(name);
let name = 'Trevor';


b();

function b() {
    console.log('I have been hoisted');
}
