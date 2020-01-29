function hi(name) {
    console.log(`Hello, ${name}`);
}
hi();

function zach(ticket) {
    console.log(`I exchanged my ticket for a {$ticket}`);
}

zach("sandwitch");


function counter(number){
    for (number; number <= 10; number++){
        console.log(number);
    }
}

counter(0);


function counter(number, string){
    for (number; number <= 10; number++){
        console.log(number);
    }
}

/*

function hi(fName,lName) {
    console.log(`Hello, My Name is ${fName} ${lName}`);
}
hi("Trevor", "Horsley" );
*/

function myName(fName, lName) {
    let fullName = fname + '' + lName;
    console.log(`Hello, my name is ${fullName}`)
}

myName('Zach', 'Maynard');