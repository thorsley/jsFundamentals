let hi =() => {
    console.log("hello");
}

/*
    -all fat arrow functions need to be set to a variable
    -the fat arrow signifies that this is a function


    -arrow functions are the shorthand way of writing a function exression-not decleration
    -fat arrow functions do not get hoisted since they are function expressions 
*/

//concise body 
let hi = () => console.log('hello');//return is implicit and happens by default
hi()

//BLOCK BODY
let hi = () =>{
    console.log("hello");
    // return keyword must be present inside of a black body arrow function
}
hi();

//CONCISE vs BLOCK

let apples = num => console.log(`There are ${num} apples.`);


apples(10);

let counting = num => {
    for(let i = 0; i <= num; i++){
        console.log(i)
    }
}
counting(20);

/*
-If there are no parameters, we have to have the parens()
-if there is a single parameter, you can choose to have no parems or to include the params
-If there are multiple parameters, you have to include parens()
*/