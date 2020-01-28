/*
    - A ternary s a shortcut, or shorthand way of writing an if/else statement.
    -Ternary's require the default or catch all (else).
*/

let num = 6;

//ternary
(num > 0) ? console.log("yes") : console.log('no');


//if/else 
if(num > 0) {
console.log('yes')
}else{
    console.log('no')
}

let num = 6;

//ternary
(num == 0) ? console.log('working'):(num < 0) ? console.log('not working') : console.log('still not working')


//else/if 
if(num == 0){
    console.log('working')
}else if (num < 0){
    console.log('Still not working')
}else {
    console.log('not working');

}




let age = 30;

(age >= 25) ? console.log("Yay! You can rent a car!"):(age >= 21) ? console.log('Yay! You can drink') : (age >= 18) ? console.log('Yay! you can vote!') : console.log('sorry your too young to do anything')