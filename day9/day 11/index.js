// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // users data
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "This is Fetch API",
//     userId: 1
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data));


// let orderFood = new Promise((resolve, reject) => {
//     let restaurantOpen = false;

//     if(restaurantOpen){
//         resolve("Food Delivered");
//     }else{
//         reject("Restaurant closed");
//     }

// });
// orderFood .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// });


// async function getData(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getData();

// function placeOrder(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Order Placed");
//         }, 1000);
//     });
// }

// function makePayment(orderStatus){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(orderStatus + "Payment Done");
//         }, 1000);
//     });
// }

// function deliveryOrder(paymentStatus){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(paymentStatus + " Order Delivered");
//         }, 1000);
//     });
// }

// placeOrder() 
// .then(result => {
//     console.log(result);
//     return makePayment(result);
// })
// .then(result => {
//     console.log(result);
//     return deliveryOrder(result);
// })
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log("Error:", error);
// });

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    console.log(users);
    return fetch("https://jsonplaceholder.typicode.com/posts");
})
.then(response => response.json())
.then(posts => {
    console.log(posts);
})
.catch(error => console.log(error));