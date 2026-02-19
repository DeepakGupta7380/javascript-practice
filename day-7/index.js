let student = {
    name: "Deepak",
    age: 21,
    course: "BCA",
    isPassed: true
};
console.log(student.name);
console.log(student.age);
console.log(student["course"]);

let students1 = {
    name: "Rahul",
    age: 20,
    course: "BCA",
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
}
console.log(students1.name);
console.log(students1["age"]);
student.greet();

let students ={
    name: "Aman",
    age: 18,
    class: "12th",
    marks: 85,
    study: function(){
        console.log("Student is studying");
    }
};
console.log(students.name);
console.log(students.marks)
students.study();

let car ={
    brand: "Toyota",
    color: "white",
    speed: 120,
    drive: function(){
        console.log("Car is running");
    }
};
car.drive();


function turnOnlight(){
    console.log("Light is ON");
}
turnOnlight();
turnOnlight();
turnOnlight();

function add(a, b){
    return a + b;
}
console.log(add(2, 3));
console.log(add(10, 20));

function add(a, b){
    return a + b;
}

const add = (a, b) => a + b;

const makeJuice = () => {
    console.log("Juice is ready");
};
makeJuice();

const add = (a, b) => a + b;

console.log(add(5, 3));
console.log(add(10, 20));

const square = x => X * X;
console.log(square(5));