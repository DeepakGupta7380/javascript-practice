//for loop
for (let i = 1; i <= 5; i++){
    console.log(i);
}

//while loop
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

//do while loop

let y = 1;

do {
    console.log(y);
    y++;

}while(y <= 5);

//for of loop

let fruits = ["Apple", "mango", "Banana"]

for (let fruit of fruits){
    console.log(fruit);
}

//for in loop 

let person = {
    name: "rahul",
    age: 25
};

for(let key in person){
    console.log(key + " : " + person[key]);
}