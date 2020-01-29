// (1)      (2)        (3)
function Person(name, age, canVote){
//  (4)     (5)  (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)   (8)
let person4 = new Person('james', 80, true);
let person5 = new Person('doug',32, true)
console.log(person4);
console.log(person5);

/*
    1.Function keyword
    2.The function name. for constructor functions the name of the function should be capatalized
    3.The parameters. these will be the values for the keys in our object once a new 'person' is created. 
    4.the 'this' keyword refers back to whatever called it, or whatever activates it. in this case 'this refers back to person'
    5.the keys of the new object we're creating.
    6.the argument  we pass through our function call wil resolve as the values
    7.& 8. the new keyword creates a new instance of our 'person' function with the values we pass into that function when invoking it. 
    
*/