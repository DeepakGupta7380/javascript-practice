var numbers = [1, 2, 3, 4, 5, 6];
var target = 5;

for (var i = 0; i < numbers.length; i++)
if(numbers[i] === target){
    console.log("Target:", i);
}
console.log(numbers[0], numbers[0] == target);
console.log(numbers[1], numbers[1] == target);
console.log(numbers[2], numbers[2] == target);
console.log(numbers[3], numbers[3] == target);
console.log(numbers[4], numbers[4] == target);
console.log(numbers[5], numbers[5] == target);
console.log(numbers[6], numbers[6] == target);


var numbers = [1, 2, 3, 4, 5, 6];
var target = 6;
var found = false;

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] === target){
        console.log("Target:", i);
        found = false;
        break;
    }
}

if(!found){
    console.log("target no")
}


var numbers = [1, 2, 3, 4, 5, 6];
var target = 6;

var i = 0

while(i < numbers.length){
    if(numbers[i] === target){
        console.log("Target:", i);
    }
    i++
}

var numbers = [1, 2, 3, 4, 5, 6];
var target = 6;

var i = 0;
var found = false;

while(i < numbers.length){
    if(numbers[i] === target){
        console.log("Target:", i);
        found = true;
    }
    i++;
}
if(!found){
    console.log("Target no");
}