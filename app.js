// window.alert("Hi, I am John");
// window.prompt("How are you doing?")


// function sayHi() {
//     console.log("Hi");
// }

// setInterval(sayHi, 1500)

// console.log("Hi")

// console.error("This is red color.")

// console.warn("dasdas")

// console.log(document)

// let MyH1 = document.getElementById("first");
// console.log(MyH1)

// let MyP = document.getElementsByClassName("second");
// console.log(MyP)

// let secondH1 = document.querySelector(".second");
// // querySelector 只會return第一個滿足css selector的htnl element
// console.log(secondH1)


// let seconds = document.querySelectorAll(".second");
// console.log(seconds[0])
// console.log(seconds[1])

// function declaration
// function sayHi() {
//     console.log("Hi");
// }

//drrow function expression syntax
// let sayHi = (name) => {
//     console.log("Hi" + name);
// }

// sayHi("John")

// this keyword

// let John = {
//     name: 'John Lu',
//     greeting() {
//         // function declaration
//         console.log("Hi, my name is " + this.name + ".");
//     },
//     walk:() => {
//         // arrow function expression
//         console.log(this.name + " is walking in the street.");
//     }
// }

// John.greeting();
// John.walk();

// forEach function takes one parameter - function
// let luckyNumbers = [7, 15, 23, 66, 91, 10, 13];

// luckyNumbers.forEach(function checkNum(n) {
//     if (n > 20) {
//         console.log(n);
//     }
// });

// //for loop
// for (let i = 0; i < luckyNumbers.length; i++) {
//     if (luckyNumbers[i] > 20) {
//         console.log(luckyNumbers[i]);
//     }
// }

// luckyNumbers.forEach(checkNum);

// function checkNum(n) {
//     if (n > 20) {
//         console.log(n);
//     }
// }

// array
// let lucky = [12, 7, 23, 14];
// // length, index
// // push, pop, shift, unshift

// // HTMLCollevtion
// let secondsElement = document.getElementsByClassName("second");
// console.log(secondsElement);

// // NodeList
// let secondQuery = document.querySelectorAll(".second");
// console.log(secondQuery);


// innerHTML and innerText

// let h1 = document.querySelector("h1.myH1");

// h1.innerHTML = "<mark> My name is John </mark>"


let myP = document.querySelector("p");

myP.classList.add("red");

console.log(myP.classList);


/**
 * classList
 * 
 * add, remove, toggle, contains
 */


