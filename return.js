

function greet(msg) {
    function greetigns(name) {
        return msg + ', ' + name +' ! ';
    }
    return greetigns;
}

var gm = greet('Good morning');
console.log(gm('jasim'));

