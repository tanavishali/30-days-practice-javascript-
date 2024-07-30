"use strict";
// 1:Write a program that prints numbers from 1 to 100.
/*
for (let num = 0; num <= 100; num++) {
  console.log(num);
}

*/
// 2:Write a program that calculates the sum of the first N natural numbers.
/*
let sum = 0;
for (let num = 0; num <= 10; num++) {
  sum = sum + num;
  console.log(sum);
}
console.log(sum);
*/
// 3:Write a program that generates a multiplication table for a given number.
/*
let num = Number(prompt("table number"));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
*/
// 4:Write a program that calculates the factorial of a number.
/*
let factorial = 1;
for (let num = 1; num <= 10; num++) {
  factorial = factorial * num;
  console.log(factorial);
}*/
// 8:Write a program that reverses a number.
/*
let number = prompt("Enter a number:");
let reversedNumber = "";

for (let i = number.length - 1; i >= 0; i--) {
  reversedNumber += number[i];
  // console.log(reversedNumber[i]);
}
console.log("Reversed number is " + reversedNumber);
*/
// 9:Write a program that calculates the sum of even numbers from 1 to N.
