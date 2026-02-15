//for loop +if Condition
let count = 0;

for(let i = 0; i <= 200; i++){
    if(i % 2 ==0){
        count++;
    }
}
console.log(count);

//string
let  result ="";

for (let i = 0; i <= 200; i += 2){
    result = result + i + ", ";
}
console.log(result);

//Array
let arr = [];

for(let i = 0; i <= 200; i += 2){
    arr.push(i);
}
console.log(arr.join(", "));