// async function orderFood(){
//     try{
//         let order = await placeOrder();
//         console.log(order);

//         let payment = await makePayment(order);
//         console.log(payment);

//         let delivery = await deliveryOrder(payment);
//         console.log(delivery);
//     }catch(error){
//         console.log("Error:", error);
//     }
// }

// function orderFood(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("khana preparation");
//         }, 2000);
//     });
// }
// async function getFood(){
//     console.log("order...");

//     let message = await orderFood();
//     console.log(message);
// }
// getFood();

// async function hello(){
//     return "Hello World";
// }
// hello().then(data => console.log(data));

// function getDelivery(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Parsel");
//         }, 2000);
//     });
// }

// async function receiveParcel(){
//     console.log("Order...");

//     let message = await getDelivery();

//     console.log(message);
// }
// receiveParcel();

// async function 

// function fetchData(){
//     return new Promise (resolve => {
//         setTimeout(() => resolve("Data mila"), 2000);
//     });
// }
// async function getData(){
//     let result = await fetchData();
//     console.log(result);
// }
// getData();


// async function getUser(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         let data = await response.json();

//         console.log("User Name:", data);
//         console.log("Email:", data);
//     }catch(error){
//         console.log("Error:", error);
//     }
// }
// getUser();

// let age = 25;
// age = 26;

// const birthYear = 2000;


// function add

// let name = "Rahul";
// let message = `hello ${name}, welcome!`;

// console.log(message);

// const person = {
//     name: "Amit",
//     age: 22
// };

// const name  = person.name;
// console.log(name);
// // console.log(age);

// const arr1 = [1, 2];
// const arr2 = [1, 2, 3, 4];

// console.log(arr2);

function greet(name = "Guest"){
    console.log(`Hello ${name}`);
}
greet();
greet("Ravi");