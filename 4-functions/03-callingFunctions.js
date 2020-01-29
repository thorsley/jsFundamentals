function hi(){
    console.log("hello")
}



hi;

hi();

console.log(hi);

console.log(hi());


// As soon as our parser see's that there is a function invocation that happens imediataly.


function hi(){
    for (i = 1; i < 11; i++){
        console.log(i)
    }
}

hi();


/*
 -given the array create a function that lists out the values individually 
*/

let arr = ['this', 'is', 'really', 'cool'];



function hi() {
    for (let item of arr){
        console.log(item)
    }
}

hi();

