var numbers=[1, 2, 3, 4, 5, 6];
var target = 1;

// console.log(Math.floor((numbers.length -1) / 2), "index");
// console.log(numbers[Math.floor((numbers.length - 1)/2)], "element")

let middleIndex = Math.floor((numbers.length - 1) / 2);
console.log(middleIndex, "middleIndex");
let middleElement = numbers[middleIndex];
console.log(middleElement == target);
console.log(middleElement > target);
console.log(middleElement < target);

let left = 0;
let right = numbers.length -1;
console.log(left, "left");
console.log(right, "right");
console.log(Math.floor((left + right) /2));
console.log(numbers[Math.floor((left + right) / 2)]);
if(middleElement > target){
    right = Math.floor((left + right) / 2) -1;
    console.log(right, "right");
    middleElement = Math.floor((left + right) / 2);
    console.log(middleElement, "middleElement")
    console.log(middleElement == target);
    console.log(middleElement > target);
    console.log(middleElement < target);
}