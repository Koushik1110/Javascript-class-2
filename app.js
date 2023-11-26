//chain condition

// const marks = 79;

// if (marks >= 80) {
//   console.log("A+")
// } else if (marks >= 70) {
//   console.log("A")
// } else if (marks >= 60) {
//   console.log("A-")
// } else if (marks >= 50) {
//   console.log("B")
// } else if (marks >= 40) {
//   console.log("C")
// } else if (marks >= 33) {
//   console.log("D")
// } else {
//   console.log("F")
// }

// when to chain and when to not chain//

// Things to be noted that we must write the bigger condition first.

// const burgerPrice = 280;
// const pizzaPrice = 350;
// const money = 500;

// if (money >= burgerPrice) {
//   console.log(Burger);
// }

// if (money >= pizzaPrice) {
//   console.log(Pizza);
// } else {
//   console.log(NOthing);
// }

//in the upper described case if you have enough money to buy any one of those foods you can see both options in the console log.

// Type conversion

// Number to string

// const num = 100;
// const convertedNum = num.toString();
// const convertedNum = String(num);

// console.log(typeof convertedNum);

// string to number

// const firstName = "Ragnaros";

// const convertedFirstName = Number(firstName);

// console.log(convertedFirstName);

// type coercion
// console.log(10 + 10);
// console.log(10 + "10");
// console.log(10 - "10");
// console.log(10 * "10");
// console.log(10 / "10");
// console.log("5" + "2" - 3 + "1");

// truthy and falsy value

// falsy value
// falsy
// false
// 0
// ""
// null
// undefined
// NaN

// Equality operators

// console.log(5 == 5);
// console.log(5 === 5);

// =, assign value
// ==, check value
// ===, check value + type
// we should always use triple equals.

// boolean logic

// AND -- && (fulfill all logic)
// Or -- || (fulfill any one logic)
// NOT -- ! (anything that does not fulfill any condition)

// const age = 20;
// const balance = 150000;
// const isSheYoutuber = false;
// const isGovtJob = false;

// if(age>=18 && balance>=100000 && isGovtJob){
//   if (isSheYoutuber) {
//     console.log("Ami biye korte raji");
//   } else {
//     console.log(Ami biye korbo.)
//   }
// }

// leap year measurement

// condition
// year % 4 === 0 && 100 !== 0 || year % 400 === 0

// const year = 2020;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year + " is leap year");
// } else {
//   console.log(year + " is not a leap year");
// }

// switch case 
