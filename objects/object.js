// javascript object 

// let user = {
//     name : 'John',
//     age   : 30
// }
// user.address = 'Dhaka';

// console.log(user.address);
// console.log(user);
// user.sayHi = function(){
//     alert('Hello');
// }

// user.sayHi();

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('jack');
// console.log(user.name);

// method in constructor function

function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log('My name is : ' + this.name);
    }
}

let john = new User('john');

john.sayHi()




