"use strict";
// 1:Write a program that finds the quadrant of a given point (x, y).
/*
let x = Number(prompt("number x"));
let y = Number(prompt("number y"));
if (x > 0 && y > 0) {
  console.log("first quadrent");
} else if (x < 0 && y > 0) {
  console.log("second quadrent");
} else if (x < 0 && y < 0) {
  console.log("third quadrent");
} else if (x > 0 && y < 0) {
  console.log("four quadrent");
} else if ((x === 0) & (y === 0)) {
  console.log("origin");
} else {
  console.log("invalid number");
}
*/
// 2:Write a program that checks if a person is eligible to vote based on their age and nationality.
/*
let age = Number(prompt("your age"));
if (age >= 18) {
  console.log("you are eligibal for  vote");
} else {
  console.log("you are not eligibal for vote");
}

*/
// 3:Write a program that compares three numbers and prints the largest one.
/*
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest.");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest.");
} else {
  console.log(num3 + " is the largest.");
}
*/

// 4:Write a program that calculates if there is a profit or loss based on cost price and selling price.
/*
let sellingPrice = Number(prompt("selling price"));
let costPrice = Number(prompt("cost price"));
if (sellingPrice < costPrice) {
  console.log("lost");
} else if (sellingPrice === costPrice) {
  console.log(" no profit no loss");
} else {
  console.log("proift");
}
*/
// 5:Write a program that takes a number (1-7) and prints the corresponding day of the week.
/*
let numberWeek = Number(prompt("week number 1,2,3,4,5,6,7"));
switch (numberWeek) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid number");
    break;
}
*/
// 6:Write a program that calculates the simple interest based on principal, rate, and time.
/*
let principal = Number(prompt("Enter the principal amount:"));
let rate = Number(prompt("Enter the rate of interest:"));
let time = Number(prompt("Enter the time in years:"));

let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest: " + simpleInterest);
*/
// 7:Write a program that checks if a number is a multiple of both 3 and 7.
/*
let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0 && number % 7 === 0) {
  console.log(number + " is a multiple of both 3 and 7.");
} else {
  console.log(number + " is not a multiple of both 3 and 7.");
}
*/
// 9:Write a program that checks if a character is in uppercase or lowercase.
/*
let char = prompt("Enter a character:");

if (char >= "A" && char <= "Z") {
  console.log(char + " is an uppercase letter.");
} else if (char >= "a" && char <= "z") {
  console.log(char + " is a lowercase letter.");
} else {
  console.log(char + " is not a letter.");
}
*/
// 10:Write a program that performs a basic arithmetic operation (+, -, *, /) using switch case.
/*
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter an operation (+, -, *, /):");

switch (operation) {
  case "+":
    console.log("Result: " + (num1 + num2));
    break;
  case "-":
    console.log("Result: " + (num1 - num2));
    break;
  case "*":
    console.log("Result: " + num1 * num2);
    break;
  case "/":
    if (num2 !== 0) {
      console.log("Result: " + num1 / num2);
    } else {
      console.log("Cannot divide by zero.");
    }
    break;
  default:
    console.log("Invalid operation.");
}
*/
