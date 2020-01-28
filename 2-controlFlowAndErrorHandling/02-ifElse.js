/*

let weather = 30;

if(weather < 50){
    console.log("wear a jacket!")
    else{
        console.log("No jacket Necessary!")
    }
}
*/
/*

let name = "Trevor";

if (name == "Trevor") {
    console.log(`Hello, my name is ${name}.`)
}else{
    console.log("hello, is your name is your name" + name +"?")
}
*/

//Bronze 

let name = "zAchARy";
if (name.charAt(0) == 'Z') {            
    console.log(name);  
}else{
    console.log('hey, this isnt written correctly')
}

//silver

let name = "zAchARy";
if(name[0]  == name[0].toUpperCase()) {
    console.log(name[0]);

}else {
    console.log(name.slice(1).toUpperCase());
}
   

//another way to do it for bronze

if(name[0] == name[0].toUpperCase()){
    console.log(name);
}else {
    console.log('hey, this isnt written correctly');
  
}


//Gold

if(name[0]  == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase)
}else {
    let isNotUpperCase = name.charAt(0).toUpperCase( + name.slice(1).toLowerCase();)
    console.log(isNotUppercase);
}




/*
ELSE IF STATEMENTS.     
*/


let age = 20;
age <= 25
if (age <= 25){
    console.log('Sorry, your too young to do anything.')
}
else if (age >= 18){
    console.log('You can vote!')
}
else if(age <= 21){
    console.log('You can drink!')
}
else if(age <= 17) {
    console.log('You can rent a car!')
}




