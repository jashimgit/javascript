

var arr = [
    [45, 66, 89, 90],
    [66, 88, 76, 97],
    [88, 79, 98, 85],
];

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);

for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log("Element of " + i + " : " + arr[i][j]);
    }
}


let activities = [
    ['work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// console.log(activities[2]);
// Add elements at the end of the array with push()
activities.push(['Study', 3]);
// add element in the middle of the array

activities.splice(2, 0, ['Coding', 4]);

/* calculate the percentage of the hours spent on each activity
And append percentage to the inner array
*/
activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    console.log(percentage);
    activity[2] = percentage + '%';
})
console.table(activities);


/**
 * 
 *  Iterate array
 */

activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);

    })
})