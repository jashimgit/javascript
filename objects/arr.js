var people = [
    [name = 'john doe', email = 'john@doe.com', age = 42],
    [name = 'jane doe', email = 'jane@doe.com', age = 29],
]


function printer(arr, exit=false) {
    if(exit){
        exit;
    }
    return arr;
}

printer(people);

people.forEach(people  => {
    console.log(people['email']);
    
});