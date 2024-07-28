"use strict";
// Write a program that checks if a number is positive, negative, or zero.
/*
let num = Number(prompt("enter number"));
console.log(num, typeof num);
if (num == 0) {
  console.log(`${num}: is not negative or positive ${num} is zero`);
} else if (num > 0) {
  console.log(`${num}: is positive`);
} else if (num < 0) {
  console.log(`${num}: is negative`);
} else {
  console.log("invalid input");
}
*/

// Write a program that checks if a number is even or odd.
/*
let num = Number(prompt("enter number"));
console.log(num, typeof num);
if (num % 2 == 0) {
  console.log(`${num}: is even`);
} else {
  console.log(`${num}: is odd`);
}
*/
//3: Write a program that calculates the grade based on marks.
/*
let num = Number(prompt("enter your marks "));
console.log(num, typeof num);
if (num >= 90 && num < 100) {
  console.log(`your marks ${num}: and  your grade is A+`);
} else if (num >= 80 && num < 90) {
  console.log(`your marks ${num}: and  your grade is A`);
} else if (num >= 70 && num < 80) {
  console.log(`your marks ${num}: and  your grade is B`);
} else if (num >= 60 && num < 70) {
  console.log(`your marks ${num}: and  your grade is C`);
} else if (num >= 50 && num < 60) {
  console.log(`your marks ${num}: and  your grade is D`);
} else if (num < 50) {
  console.log(`${num}: you fail try next time`);
} else {
  console.log("invalid input");
}
*/

// 4: Write a program that checks if a year is a leap year.
/*
let num = Number(prompt("year "));
console.log(num, typeof num);
if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}
*/
// 5:Write a program that checks if a character is a vowel or consonant.
/*
let char = prompt("enter character for check vowel or not")..toLowerCase();
console.log(typeof char);
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log(`${char} :vowel`);
} else {
  console.log(`${char}: consonant`);
}
*/
// 6:Write a program that classifies a person's age group.
/*
let ageClassifies = Number(prompt("enter your age"));
console.log(ageClassifies);
if (ageClassifies < 18) {
  console.log("child");
} else if (ageClassifies >= 13 && ageClassifies < 20) {
  console.log("Teenager");
} else if (ageClassifies >= 20 && ageClassifies < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
*/
//7: Write a program that checks if a number is within a specified range (e.g., 1 to 100).
/*
let number = prompt("Enter a number:");
if (number >= 1 && number <= 100) {
  console.log("The number is within the range.");
} else {
  console.log("The number is outside the range.");
}

*/
// 7:Write a program that checks if a day is a weekday or weekend.
/*
let day = prompt("Enter a day of the week:").toLowerCase();
if (day === "saturday" || day === "sunday") {
  console.log("weekend");
} else {
  console.log("weekday");
}
*/
// 9:Write a program that checks the weather based on temperature.
/*
let temperature = Number(prompt("Enter temp"));
if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold outside.");
}
*/
//10: Write a program that performs a basic arithmetic operation (+, -, *, /) based on user input.
/*
let num1 = Number(prompt("number one"));
let num2 = Number(prompt("number two"));
let op = prompt("number two");
if (op === "+") {
  let sum = num1 + num2;
  console.log(sum);
} else if (op === "-") {
  let sub = num1 - num2;
  console.log(sub);
} else if (op === "*") {
  let mul = num1 * num2;
  console.log(mul);
} else if (op === "/") {
  let devi = num1 / num2;
  console.log(devi);
} else {
  console.log("invalid input!");
}
*/
// date and time and there methode
/*
let myDate = new Date();
console.log(myDate); //Sat Jul 27 2024 12:59:21 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toString()); //Sat Jul 27 2024 12:59:33 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toLocaleString()); //27/07/2024, 12:59:52
console.log(myDate.toDateString()); //Sat Jul 27 2024
console.log(myDate.toISOString()); //2024-07-27T08:04:51.501Z

console.log(myDate.toLocaleDateString()); //27/07/2024
*/
// let createddate = new Date(2023, 2, 12).toDateString();
// let createddate = new Date(2023, 2, 12).toString();
// let createddate = new Date("2000,02,22").getDate();
// console.log(createddate);
