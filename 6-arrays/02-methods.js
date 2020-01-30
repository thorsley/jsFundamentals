let food = ['pecan pie', 'shrimp', 'quesadilla','cheese cake','hotdog'];

console.log('original array:' , food);

food.push('pizza'); // appends or 'pushes'an item into the array appends to the end
console.log('push', food);


food.splice(1 , 1, "bananas"); // (position/ how many to delete /add in its place)

console.log('splice:', food);

food.splice( 2 , 0 , 'sweet potato pie'); //(position/ how many to delete (0)/ what to add in its place)
console.log('splice 2:', food);

food.pop();//removes the last item of the array
console.log('pop', food);

food.shift();//removes the first item of the array
console.log('shift', food);

food.unshift('popcorn', 'steak');//unshift adds 1 or more itemsto the beginning of the array. 
console.log('unshift', food);

console.log('original array', food);
