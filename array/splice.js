/**
 *  How to delete an element from the array ? 
 */


let arr = ['I', 'go', 'home'];

delete arr[1];
console.log(arr);

console.log(arr.length);

/** 
 *  here element removed but still has 3 elements
 */
// So array splice method is handy 

/**
 *  syntax: arr.splice(index, deleteCount, elem1, elem2)
 * 
 */

// let start with deletion
let arr1 = ['I', 'suduty', 'jaavascript'];
arr1.splice(1, 1);
console.log(arr1);

// next we remove 3 elements and replace with the other two:

let arr2 = ['I', 'study', 'javascript', 'right', 'now'];
// remove 3 first elements and replace then with another
arr2.splice(0, 3, "Let's", "dance");
console.log(arr2);

// add new element without delete count
let arr3 = ['I', 'study', 'javascript'];
arr3.splice(2, 0, 'complex', 'language');
console.log(arr3);
