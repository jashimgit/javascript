let pets = [
    {name: 'Meowsaalot', species: 'cat', age: 2},
    {name: 'Barksalot', species: 'dog', age: 3},
    {name: 'Purrsloud', species: 'cat', age: 8}
]
console.log(pets.push({name:'Puppster', species: 'dog', age: 4}));




let ourTest = pets.map(nameOnly)

function nameOnly(x){
    return x.name
}
console.log(ourTest);
