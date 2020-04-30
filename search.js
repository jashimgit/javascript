var arr = [3, 4, 8, 24, 44, 49, 65, 22, 10, 32, 99]

var find = 5

var isFound = false;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == find){
        console.log('data found at index ' + i);
        break;
    }
    
}
if(!isFound){
    console.log('Data not found');
    
}