// for loop

// for (let counter = 1; counter <= 6; counter++) {

//     console.log('Inside the loop: ' + counter );
// }

//console.log('outside the loop:' + counter);

// 9 x 1 = 9

var count = 13;

for (let i = 1; i <= 10; i++) {
  console.log(count + " x " + i + " = " + count * i);
}

// sum of odd number

var sum = 0;

for (var i = 1; i <= 10; i++) {
  console.log(sum + ' + ' + i + ' = ' + (sum+i));
  // console.log(sum += i);
  if (i % 2 == 1) {
    // console.log(i);
    // console.log(sum +=i);
  }
  if (i % 2 == 0) {
    // console.log(i);
    console.log(sum + " + " + i + " = " + (sum += i));
  }
}
