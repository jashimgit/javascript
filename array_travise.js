var arr = [5, 8, 4, 5, 1, 5, 66, 4, 99, 11];

//array Incriment
for (var i = 0; i < arr.length; i++) {
  arr[i] += 5;
}
console.log(arr);
// array dririment

for (var i = 0; i < arr.length; i++) {
  arr[i] -= 2;
}
console.log(arr);

//array ODD or Even
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    console.log(arr[i]);
  }
}
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

//array total

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum = arr[i] + sum;
  sum += arr[i];
}
console.log(sum);

var sum = 0;
var drg = 984;
for (var i = 0; i < arr.length; i++) {
  //   sum = arr[i] + sum;
  sum += arr[i];
}

var result = drg - sum;
console.log(result);

var arr2 = [4, 2, 3, 4]
var arr3 = [5, 9, 8, 7, 6];

var sum = arr2.concat(arr3)

console.log(sum);