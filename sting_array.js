var  s = 'Nayem Babu';
var a = s.split(' ');
console.log(a);

var rev = a.join();
console.log(a.join(' '));

var rev = s.split('').reverse().join('');
console.log(rev);

// 
var s = 'a quick brown fox jumps over the lazy dog';
var a = s.split(' ');

console.log('Number of letters: ' + s.length);

// number of words 
console.log('Number of words: ' + a.length);

console.log(a);

console.log(a.splice(0, 3));
