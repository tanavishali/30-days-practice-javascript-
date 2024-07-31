"use strict";
// 1:Write a program that prints all odd numbers from 1 to 100.
/*
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

*/
// 2:Write a program that calculates the power of a number without using the Math.pow method.
/*
let base = Number(prompt("num"));
let exponent = Number(prompt("exponent"));
let result = Math.pow(base, exponent);
console.log(result);

for (let i = 1; i <= exponent; i++) {
  result = result * base;
}
*/
// 4:Write a program that calculates the sum of squares of the first N natural numbers.
/*
let number = prompt("num");
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i * i;
}
console.log(sum);
*/
// 5:Write a program that reverses a given string.
/*
let name = "tanawish";
let reverse = "";
for (let i = name.length - 1; i >= 0; i--) {
  reverse += name[i];
}
console.log(reverse);
*/
