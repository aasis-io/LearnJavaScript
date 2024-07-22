// variables

//var
// var x = 90;
// console.log(x);

// var x = 180;
// console.log(x);

//let
// let y = 90;
// console.log(y);

// cannot be redeclared
// let y = 10;

//can be updated
// y = 20;
// console.log(y);

//const
// const z = 10;
// console.log(z);

//cannot be redeclared
//cannot be updated
// z = 9;        // --- error occurs
// console.log(z);

//Date types in JavaScript
//string
// const output = "Hello World!";
// console.log(typeof output);

//number
// const result = 90;
// console.log(result);
// console.log(typeof result);

//float
// const result =3.67;
// console.log(result);
// console.log(typeof result);

// undefined
// let y;
// console.log(y);
// console.log(typeof y);

// null
// let y = null;
// console.log(y);
// console.log(typeof y);

// boolean
// let y = true;
// console.log(y);
// console.log(typeof y);

//BigInt
// let y = 345346456445n;
// console.log(y);
// console.log(typeof y);

// Symbol
// const y = Symbol("Hi!");
// console.log(y);
// console.log(typeof y);

// let x = 8.68;
// console.log(x);
// console.log(typeof x);

// Manual Type Consversion
// const result = "1233";
// const output = Number(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

///////

// const result = "1233";
// const output = parseInt(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

////////

// const result = "6.78";
// const output = parseFloat(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

////////////
// const result = 678;
// const output = String(result);

// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = result.toString();

// console.log(output);
// console.log(typeof output);

//////
// const isMarried = false;
// const ans = String(isMarried);

// console.log(ans);
// console.log(typeof ans);

//Variables
//Objects

// const obj={
//     name: "Ashish Thapa",
//     age: 21,
// }
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7];
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

//String Method

// const result = "Hello World";
// //length
// console.log(result.length);

// //chatAt
// console.log(result.charAt(4));

// //indexOf
// console.log(result.indexOf("o"));

// //lastIndexOf
// console.log(result.lastIndexOf("o"));

// //toLowerCase
// console.log(result.toLowerCase());

// //toUpperCase
// console.log(result.toUpperCase());

// //replace
// console.log(result.replace("World", "everyone"));

// //includes
// console.log(result.includes("World"));

// //slice
// console.log(result.slice(1, 6));

//concat
// console.log(result.concat(" " + "I love JS"));

// //let output = "         B  C  A"
// let output = "    BCA";
// console.log(output.trim())

// //split
// console.log(result.split(" "))

// //concatination
// let x = "Hello World";
// let y = "I love JS!";
// let z = "Because it's fun";
// console.log(x + " " + y + " " + z);

// const a = 80,
//   b = 60;

// const result = a + b;
// // console.log("The sum of two number is:" + result);
// console.log(`The sum of two number is: ${result}`);

// Assignment Operator
// let y = 80;
// y += 10;
// console.log(y);

//
// let a = 10;
// let b = 5;
// let c = "10";
// console.log(a == c);
// console.log(a === c);
// console.log(a != b);
// console.log(a !== c);

// let ageGroup = 18;
// console.log(ageGroup >= 18 ? "You can vote" : "You can't");

//Unary Operators
// let x = "123";
// let y = +x; //positive
// console.log(y);
// console.log(typeof y);

// const obj = {
//   name: "Sita Devi",
//   age: 56,
// };

// delete obj.age;
// console.log(obj);

// ////
// const myOBJ = {
//     name: "Sita Devi",
//     age: 56,
//   };

//   delete myOBJ.age;
//   console.log(obj);

// let email = "ashishthapa@gmail.com";
// let password = "password";

// if (email === "ashishthapa@gmail.com" && password === "password") {
//   console.log("Login Successfull!");
// } else {
//   console.log("Invalid Credentials");
// }

// SEE grade check

// let grade = 98;

// if (grade > 90) {
//   console.log("A+");
// } else if (grade >= 80 && grade <= 90) {
//   console.log("A");
// } else if (grade >= 70 && grade <= 80) {
//   console.log("B+");
// } else if (grade >= 60 && grade <= 70) {
//   console.log("B");
// } else if (grade >= 50 && grade <= 60) {
//   console.log("C+");
// } else if (grade >= 40 && grade <= 50) {
//   console.log("C+");
// } else {
//   console.log("Non Graded");
// }

// let weather = "rainy";

// if (weather === "sunny") {
//   console.log("Today is a sunny day");
// } else if (weather === "winter") {
//   console.log("Today is a cold day");
// } else if (weather === "rainy") {
//   console.log("Today is a rainy day!");
// } else {
//   console.log("Invalid Weather!");
// }

// const d = new Date().getDay();

// switch (d) {
//   case 0:
//     console.log("Today is sunday!");
//     break;

//   case 1:
//     console.log("Today is monday!");
//     break;

//   case 2:
//     console.log("Today is tuesday!");
//     break;

//   case 3:
//     console.log("Today is wednesday!");
//     break;

//   case 4:
//     console.log("Today is thrusday!");
//     break;

//   case 5:
//     console.log("Today is friday!");
//     break;

//   case 6:
//     console.log("Today is saturday!");
//     break;

//   default:
//     console.log("Invalid weather");
// }

// let status = 200;

// switch (status) {
//   case 201:
//     console.log("Created");
//     break;

//   case 400:
//     console.log("Bad Request");
//     break;

//   case 401:
//     console.log("Unauthorized");
//     break;

//   case 403:
//     console.log("Forbidden");
//     break;

//   case 200:
//     console.log("Ok");
//     break;

//   case 500:
//     console.log("Internal server error");
//     break;

//   default:
//     console.log("Error");
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`2 * ${i} = ${2 * i}`);
// }
// for (let i = 0 ; i <20; i ++) {
//   console.log('the even number are:${i}');

// }

/*
====
ARRAY
====
*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr)

// let arr = [1, 2, 3, 4, 5, 3]; //data structure

//Splice //removes the data from array
// arr.splice(1,3);
// console.log(arr);

//slice //prints the defined set
// let sliced = arr.slice(1,3); //prints index 1 and 2
// console.log(sliced);

// check index
// console.log(arr.indexOf(3))
// console.log(arr.lastIndexOf(3))

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// //push
// let newArr = arr.push(12);
// console.log(arr);

// //pop
// arr.pop(12);
// console.log(arr);

// //push
// arr.shift(12);
// console.log(arr);

// //pop
// arr.unshift(12);
// console.log(arr);

//includes
// if (arr.includes(4)){
//     console.log("4 is present in array")
// }

// let result = arr.includes(4);
// console.log(result);

//Join
// const output = ["JS", "is", "Fun"];
// console.log(output.join(" "));

//////

// let arr = [];
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(`The sum of the given numbers is ${sum}`);

/////OBJECTS IN JS

// const person = {
//   name: "Ashish",
//   age: 21,
//   address: {
//     street: "Satungal",
//     city: "Kathamandu",
//     country: "Nepal",
//   },
//   occupation: "Student",
//   education: "BCA",
//   isMarried: false,
//   greet: function () {
//     console.log(`Hello, I am ${this.name} and i am ${this.age} years old!`);
//   },
// };
// person.greet();

// //Destructuring
// const {
//   name,
//   age,
//   isMarried,
//   address: { street, city, country },
// } = person;

// console.log(name, age, isMarried, street, city, country);

////Function in JavaScript
// function myFunction(){
//     console.log("Hey Function");
// }

// myFunction();

// function sum(a, b) {
//   return a + b;
// }

// console.log(`The sum is ${sum(2, 4)}`);

// function Radius(radius) {
//   return Math.PI * radius * radius;
// }

// console.log(`The area of circle is ${Math.round(Radius(6), 4)}`);

// Function to calculate the sum of provided numbers
// function calculateTotal(...numbers) {
//     return numbers.reduce((sum, number) => sum + number, 0);
// }

// // Example usage
// const sum = calculateTotal(1, 2, 3, 4, 5);
// console.log(`The sum is: ${sum}`);

// function calculateTotal(cartItems, taxRate) {
//   let total = 0;
//   for (i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;
//   }
//   total += total * taxRate;
//   return total;
// }

// let cart = [
//   { name: "Dr Martin", price: 8000, quantity: 2 },
//   { name: "SB Dunk", price: 4000, quantity: 3 },
// ];

// const result = calculateTotal(cart, 0.02);

// console.log(`your full and final payment is:${result}`);

// function convert() {
//   const meterInput = document.getElementById("meterInput").value;
//   const result = meterInput * 3.28084;
//   document.getElementById(
//     "result"
//   ).textContent = `${meterInput} meters is equal to ${result.toFixed(2)} feet`;
// }

// function myFunction(){
//   let a = prompt("Enter first number?");
//   let b = prompt("Enter second number?");

//   let result = Number(a) + Number(b);
//   if(result){
//     alert(`The sum of two numbers is: ${result}`);
//   }

// }

// myFunction();

//Global Scoping
// var x = 90;
// let y = 70;
// const z = 30;

// function myPrint() {
//   console.log(x, y, z);
// }

// myPrint();

//Function Scope
// function myPrint() {
//   var x = 90;
//   let y = 70;
//   const z = 30;
//   console.log(x, y, z);
// }

// myPrint();

//Scope defined inside a block of conditional statement
//Block Scope
// function myPrint() {
//   if (true) {
//     var x = 90;
//     let y = 70;
//     const z = 30;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x);
// }

// myPrint();

//var can be used as a function scope
//let and const cannot be used as function scope, it can only be ued inside the defined block

//////DOM
// console.log(document.body);

//Id Selector
// let result = document.getElementById("hello");

// result.innerText = "I Love JS!";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.textAlign = "center";
// console.log(result);

// //Class Selector
// let output = document.getElementsByClassName("myClass")[0];
// output.innerText = "How are you?";
// output.style.backgroundColor = "aqua";
// output.style.color = "green";
// output.style.textAlign = "center";
// console.log(output);

// //Class Selector
// let ans = document.getElementsByClassName("myClass");
// ans[1].innerText = "Who are you?";
// ans[1].style.backgroundColor = "blue";
// ans[1].style.color = "white";
// ans[1].style.textAlign = "center";
// console.log(ans);

// //Tag Selector
// let res = document.getElementsByTagName("span");

// res[0].style.backgroundColor = "brown";
// res[0].style.color = "white";
// res[0].style.textAlign = "center";

// console.log(res);

// let newRes = document.getElementsByTagName("span");

// newRes[1].style.backgroundColor = "aquamarine";
// newRes[1].style.color = "red";
// newRes[1].style.textAlign = "center";

// console.log(newRes);

// //////

// let x = document.getElementsByName("email");
// // let y = document.getElementsByName("password");
// console.log(x);

// let y = document.querySelector("#add");
// y.style.backgroundColor = "blue";
// y.style.color = "white";
// y.style.padding = "2vmax 4vmax";
// y.style.cursor = "pointer";
// y.style.border = "none";

// y.setAttribute("class", "meroClass");

// let z = document.querySelector(".delete");
// z.style.backgroundColor = "red";
// z.style.color = "white";
// z.style.padding = "2vmax 4vmax";
// z.style.cursor = "pointer";
// z.style.border = "none";

// y.addEventListener("click", () => {
//   let display = document.createElement("h1");
//   display.innerText = "This is a new H1";
//   document.body.append(display);
// });

// function addTask() {
//   let display = document.createElement("h1");
//   display.innerText = "This is a new H1";
//   document.body.append(display);
// }
// y.onclick = addTask;

// function deleteTask(){
//   let h1 = document.querySelector("h1");
//   h1.remove();
// }

// z.onclick = deleteTask;

// let display  = document.createElement("h1");
// display.innerText = "This is a new H1";
// document.body.append(display);
// document.body.prepend(display);

// let btn  = document.querySelectorAll("button");
// // console.log(btn);
// btn[0].style.backgroundColor = "blue";
// btn[0].style.border = "none";
// btn[0].style.borderRadius = "6px";
// btn[0].style.color = "white";
// btn[0].style.padding = "12px 16px";

// btn[1].style.backgroundColor = "red";
// btn[1].style.border = "none";
// btn[1].style.borderRadius = "6px";
// btn[1].style.color = "white";
// btn[1].style.padding = "12px 16px";

// function myFunction(name, age) {
//   console.log(`My name is ${name}, and I am ${age} years old.`);
// }
// myFunction("Ashish Thapa", 21);

//Fat Arrow Function
// const meroFunction = (name, age) => {
//   console.log(`My name is ${name}, and I am ${age} years old.`);
// };
// meroFunction("Ashish Thapa", 21);

//Advance Array Method
// let arr = [1, 4, 5, 6, 7, 8, 9, 5, 4];

//find
// const myFunction = (value, index) => {
//   return value > 6;
// };

// let output = arr.find((value, index) => {
//   return value > 6;
// });

// let output = arr.find((value, index) => value > 6);

// //filter
// let output = arr.filter((value, index) => value > 6);
// console.log(output);

//
// const products = [
//   { id: 1, name: "Dr Martin", price: 5000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 7000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 10000, inStock: true },
//   { id: 4, name: "Travis Scott", price: 9000, inStock: true },
// ];

//find
// let answer = products.find((value, index) => value.inStock);
// console.log(answer);

// //Filter
// let answer = products.filter((value, index) => !value.inStock);
// console.log(answer);

// // //Some
// let answer = products.some((value, index) => !value.inStock);
// console.log(answer);

// let output = arr.some((value, index) => value > 6);
// console.log(output);

// //every
// let answer = products.every((value, index) => !value.inStock);
// console.log(answer);

// let output = arr.every((value, index) => value > 6);
// console.log(output);

//foreach
//it cannot return array
// let answer = products.forEach((value, index) => !value.inStock);
// console.log(answer);

// let output = arr.forEach((value, index) => value * 2);
// console.log(output);

//map
// let answer = products.map((value, index) => value.inStock);
// console.log(answer);

// let output = arr.map((value, index) => value * 2);
// console.log(output);

// let answer = products.map((value, index) => value.name);
// let display = document.createElement("h2");
// display.innerText = answer;
// document.body.prepend(display);

//REDUCE

//map
// let output = arr.reduce((accum, curvalue) => accum + curvalue);
// console.log(output);

// let answer = products.reduce((total, curvalue) => total + curvalue.price, 0);
// console.log(answer); //Single Return

// let heading = document.getElementById("heading");
// let box = document.getElementById("box1");
// let btn = document.getElementById("btn");

// btn.style.backgroundColor = "aqua";
// btn.style.padding = "12px 16px";
// btn.style.border = "none";
// btn.style.borderRadius = "6px";
// btn.style.cursor = "pointer";

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "blue";
//   btn.style.color = "white";
//   console.log("clicked");
// });

// btn.addEventListener("mouseover", () => {
//     btn.style.transform = "scale(1.1)";
//   });

//   btn.addEventListener("mouseout", () => {
//     btn.style.transform = "scale(1)";
//   });

// btn.addEventListener('contextmenu',(e)=>{
//   btn.style.backgroundColor="green";

//   e.preventDefault();
//   // window.alert("ehhhh");
// })

// //doesnot let to open the inspect menu list
// window.addEventListener("contextmenu",(e)=>{

//   e.preventDefault();
// })

//it shows the coordinate of x and y of mouse clicked
// window.addEventListener('click',(e)=>{

// const myFunc = () => {
//   console.log("I love JS!");
// };

//setTimeout
// setTimeout(() => {
//   console.log("I love JS!");
// }, 5000);

//setInterval
// setInterval(() => {
//   console.log("I love JS!");
// }, 1000);

// const intervalID = setInterval(() => {
//   console.log("I love JS!");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);

// const Time = () => {
//   const d = new Date();
//   const hour = d.getHours();
//   const minute = d.getMinutes();
//   const second = d.getSeconds();
//   console.log(`${hour} : ${minute} : ${second}`);
// };

// setInterval(Time, 1000);

// const updateClock = () => {
//   const clock = document.querySelector(".clock");
//   const now = new Date();
//   const hour = now.getHours().toString().padStart(2, "0");
//   const minute = now.getMinutes().toString().padStart(2, "0");
//   const second = now.getSeconds().toString().padStart(2, "0");

//   clock.innerHTML = `${hour} : ${minute} : ${second}`;
// };

// setInterval(updateClock, 1000);

//OOP in JAVASCRIPT

// function Person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.greeting = function () {
//     let greet = `Hello, my name is ${this.name}. I am ${this.age} years old, and i live in ${this.address}`;
//     return greet;
//   };
// }

// const person = new Person("Ram Thapa", 21, "Thankot");
// const person2 = new Person("Hari Thapa", 23, "Kalanki");

// console.log(person.greeting());
// console.log(person2.greeting());

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };
//   this.withdraw = function (amount) {
//     this.balance -= amount;
//   };
// }

// const ramAcc = new BankAccount("Ram", 1000);
// ramAcc.deposit(4000);
// ramAcc.withdraw(2000);

// console.log(ramAcc);

// const addForm = document.querySelector("#createAccount");
// const customerName = document.querySelector("#customerName");
// const balance = document.querySelector("#balance");

// const deopsitForm = document.querySelector("#deopsitForm");
// const accountNumber = document.querySelector("#accountNumber");
// const amount = document.querySelector("#amount");

// const withdrawForm = document.querySelector("#withdrawForm");
// const wAccountNumber = document.querySelector("#wAccountNumber");
// const wAmount = document.querySelector("#wAmount");

// let accounts = [];

// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = new BankAccount(customerName.value, +balance.value);
//   accounts.push(account);
//   console.log(accounts);
// });

// deopsitForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = accounts.find(
//     (account) => account.accountNumber === +accountNumber.value
//   );
//   account.deposit(+amount.value);
//   console.log(accounts);
// });

// withdrawForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = accounts.find(
//     (account) => account.accountNumber === +accountNumber.value
//   );
//   account.withdraw(+wAmount.value);
//   console.log(accounts);
// });

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();
// }

// const sitaAccount = new BankAccount("Sita Devi", 40000);

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// const ramAccount = new BankAccount("Ram Thapa", 5000);
// ramAccount.deposit(1000);
// console.log(ramAccount);

// const hariAccount = new BankAccount("Hari Sharan", 5000);
// hariAccount.deposit(1000);
// console.log(hariAccount);

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Math.floor(Math.random() * 10000000000);
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const ramAccount = new BankAccount("Ram Thapa", 5000);
console.log(ramAccount);

const hariAccount = new BankAccount("Hari Sharan", 5000);
console.log(hariAccount);
