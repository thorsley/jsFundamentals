/*
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop - both iterate over properties in an array
*/

let food = ['pecan pie', 'shrimp', 'quesadilla','cheese cake','hotdog'];

/*
for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}
*/

food.forEach((foodItem, index) => console.log(foodItem, index));

food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

food.forEach(function(foodItem, index){
   // console.log(foodItem);
   console.log(index);
})

let movies = ["joker","parasite","terminator","stuber"]

movies.forEach(movie => console.log(movie));

movies.forEach(movie => {
    console.log(movie);
})






movies.push('phantom menace');
console.log(movies);

movies.splice(2, 1, 'rogue one');
console.log(movies)