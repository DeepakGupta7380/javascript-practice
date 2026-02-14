//variable hoisting//
console.log(a);
var a = 10;

// //let hoisting
console.log(b);
let b = 20;

// //const hoisting
console.log(c);
const c = 30;

// //function declaration

greet();

function greet(){
    console.log("Hello");
}

//function expression
sayHi();

var sayHi = function(){
    console.log("Hi")
}

// var x = 10;

function test(){
    console.log(x);
    var x = 20;
}
test();

console.log(a);

function a(){
    console.log("hello");
}

var a = 10;
console.log(a);