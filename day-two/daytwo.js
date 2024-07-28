/* 
let numOne = Number(prompt("enter number One "));
let numTwo = Number(prompt("enter number Two "));
if (numOne === numTwo) {
  console.log(`${numOne} and ${numTwo} are equal`);
} else if (numOne >= numTwo) {
  console.log(`${numOne} greter than number ${numTwo} `);
} else if (numOne <= numTwo) {
  console.log(`${numOne} smaller than number ${numTwo} `);
} else {
  console.log("invalid number");
}
*/
//2: Write a program that checks the strength of a password based on its length.
/*
let password = prompt("Enter your password:");

if (password.length >= 12) {
  console.log("Strong password");
} else if (password.length >= 8) {
  console.log("Moderate password");
} else {
  console.log("Weak password");
}
*/
// 3:Write a program that checks if a person is eligible for a driving license based on their age.
/*
let age = Number(prompt("your age"));
if (age >= 18) {
  console.log("You are  eligible for a driving license.");
} else {
  console.log("You are not eligible for a driving license.");
}
*/
// 4:Write a program that calculates the Body Mass Index (BMI) and categorizes it.
/*
let heightInMeter = Number(parseFloat(prompt("your height in meters")));
let weight = Number(parseFloat(prompt("your weight kg")));

let bmi = weight / (heightInMeter * heightInMeter);
console.log(bmi);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Overweight");
} else {
  console.log("Obesity");
}
*/
// 5:Write a program that checks if a student is eligible for a scholarship based on their GPA.
/*
let gpa = parseFloat(prompt("Enter your GPA:"));

if (gpa >= 3.5) {
  console.log("You are eligible for a scholarship.");
} else {
  console.log("You are not eligible for a scholarship.");
}
*/
// 6:Write a program that calculates the electricity bill based on the units consumed.
/*
let units = parseFloat(prompt("Enter the number of units consumed:"));
let bill = 0;

if (units <= 100) {
  bill = units * 1.5;
} else if (units <= 200) {
  bill = 100 * 1.5 + (units - 100) * 2.5;
} else if (units <= 300) {
  bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
} else {
  bill = 100 * 1.5 + 100 * 2.5 + 100 * 4 + (units - 300) * 5;
}

console.log("Your electricity bill is " + bill);
*/
// 7:Write a program that converts temperature from Celsius to Fahrenheit and vice versa.
/*
let temperature = parseFloat(prompt("Enter the temperature:"));
let unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit):");

if (unit.toUpperCase() === "C") {
  let fahrenheit = (temperature * 9) / 5 + 32;
  console.log(temperature + "°C is " + fahrenheit + "°F");
} else if (unit.toUpperCase() === "F") {
  let celsius = ((temperature - 32) * 5) / 9;
  console.log(temperature + "°F is " + celsius + "°C");
} else {
  console.log("Invalid unit.");
}
*/
// 8:Write a program that finds the season based on the month number.
/*
let month = parseInt(prompt("Enter the month number (1-12):"));

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Invalid month number.");
}
*/
// 9:Write a program that checks if a number is divisible by both 5 and 11.
/*
let number = parseInt(prompt("Enter a number:"));

if (number % 5 === 0 && number % 11 === 0) {
    console.log(number + " is divisible by both 5 and 11.");
} else {
    console.log(number + " is not divisible by both 5 and 11.");
}
*/
//10:Write a program that checks the type of a triangle based on the lengths of its sides.
/*
let a = parseFloat(prompt("Enter the length of side A:"));
let b = parseFloat(prompt("Enter the length of side B:"));
let c = parseFloat(prompt("Enter the length of side C:"));

if (a === b && b === c) {
  console.log("The triangle is Equilateral.");
} else if (a === b || b === c || a === c) {
  console.log("The triangle is Isosceles.");
} else {
  console.log("The triangle is Scalene.");
}
*/
