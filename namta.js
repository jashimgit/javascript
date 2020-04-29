var count = 0;
var sum = 0;

for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    // console.log(count + " x " + i + " = " + count * i);

    count = i;
    console.log(count);
    
 
    // print multipliccation for each odd number 

    for (let i = 1; i <= 10; i++) {
      console.log(count + " x " + i + " = " + count * i);
    }
  }
}
