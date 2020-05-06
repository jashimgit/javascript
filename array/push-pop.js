/**
 *  Add / Remove items from an array
 *  arr.push(items) -- adds items to the end
 *  arr.pop() -- extracts an item from the end 
 *  arr.shift() -- extracts an item from the beginning
 *  arr.unshift(item) -- adds item to the beginning
 */


let arr = ['I', 'go', 'home'];

let fruits = ['Apple', 'Banana'];
console.log(fruits);

// now push an item to fruits array

fruits.push('Orange');
// log again
console.log(fruits);
// remove item at the end of array

fruits.push('bla bla bla');
console.log(fruits);

// using pop() remove item from the end
fruits.pop();
console.log(fruits);


/**  Shift()  and unshift() */

arr.shift();
console.log(arr);

arr.unshift('We');
console.log(arr);

