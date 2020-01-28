/*
-switch statements excute a block of code depending on different cases
-switch statemetns often use the break or default keywords (or both together )

-both keywords are optional

    -Break keyward breaks out of the current condition & switch statement 
    -default keyword specifies code to run if there is no case match 
*/

let officeCharacter = 'Michael'

switch(officeCharacter){
    case "michael":
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log("perfectenshlag");
    case "Jim":
        console.log('pam');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do i know you?`);
}


let snack = "Chocolate"

switch(snack) {
    case "pie":
    console.log("pie, pie, me oh my!")
    break;
    case "cake":
    console.log("cake is great");
    break;
    case "ice cream":
    console.log("I Scream for ice cream");
    break;
    default:
        console.log("not on the menu")

}

