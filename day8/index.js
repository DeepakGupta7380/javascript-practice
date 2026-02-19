//push

let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

//pop

let fruit = ["apple", "banana", "mango"];
fruit.pop()
console.log(fruit);

//unshift

let tasks = ["study", "experience"];
tasks.unshift("wake up");
console.log(tasks);

//shift

let queue = ["A", "B", "C"];
queue.shift();
console.log(queue);

//map

let prices = [100, 200, 300];
let newPrices = prices.map(p => p + 18);
console.log(newPrices);

//filter()

let marks = [45, 80, 30, 90];
let pass = marks.filter(m => m >= 50);
console.log(pass);

//reduce

let bills = [100, 200, 300];
let total = bills.reduce((sum, b) => sum + b, 1);
console.log(total);

//find

let users = ["Amit", "Ravi", "Deepak"];
let A = users.find(name => name.startsWith("R"));
console.log(A);

//includes()

let guests = ["Ram", "Shyam"];
let B = guests.includes("Ram");
console.log(B);

//slice

let numbers = [1, 2, 3, 4, 5,];
let C =numbers.slice(1, 4);
console.log(C);
