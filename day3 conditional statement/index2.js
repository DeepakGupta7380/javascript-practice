//if statement
let age = 20;

if(age >= 18){
    console.log("You can vote");
}

//if else statement
let age1 = 16;

if(age >= 18){
    console.log("You can vote")
} else {
    console.log("You cannot vote");
}

//if else if else
    let marks = 75;

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 60){
    console.log("grade B");
}
else{
    console.log("Fail");
}

//switch statement
let day = 2

switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log(Tuesday);
            break;
            default:
                console.log("Invalid day");
}

//ternary operator

let age2 = 18;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);