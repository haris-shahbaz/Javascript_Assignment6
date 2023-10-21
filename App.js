// Chapter 35 to 38




// Question no 1
// function currentDate(date) {
//     var date = new Date();
//     console.log(date);
// }
// currentDate();


// Question no 2
// function greet(first, last) {
//     var first = "Haris";
//     var last = "Shahbaz";
//     console.log("Hello " + first + " " + last);
// }
// greet();


// Question no 3
// function getNumber(result) {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var result = num1 + num2;
//     console.log("The sum of number1 and number2 is " + result);
// }
// getNumber();


// Question no 4
// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//         return num1 + num2;
//         case "-":
//         return num1 - num2;
//         case "*":
//         return num1 * num2;
//         case "/":
//         if (num2 === 0) {
//             return "Division by zero is not allowed";
//         } 
//         return num1 / num2;
//         default:
//             return "Invalid operator";  
//     }
// }
// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter a second number");
// let operator = prompt("Enter a operator");
// let result = calculate(num1, num2, operator)
// console.log(result);


// Question no 5
// function square(number) {
//     return number * number;
// }
// var result = square(5);
// console.log("The square of 5 is: " + result);


// Question no 6
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else if (n < 0) {
//       return "Undefined";
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   let num = prompt("Enter a number");
//   let result = factorial(num);
//   if (result !== "Undefined") {
//     document.write(`The factorial of ${num} is: ${result}`);
//   } else {
//     document.write("Factorial of a negative number is undefined.");
//   }


// Question no 7
// function counting() {
//     var first = prompt();
//     first = Number.parseInt(first);
//     var last = prompt();
//     last = Number.parseInt(last);
//     for (var i = first; i <= last; i++) {
//         console.log(i)
//     }
// }
// counting();


// Question no 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     const baseSquared = calculateSquare(base);
//     const perpendicularSquared = calculateSquare(perpendicular);
//     const hypotenuseSquared = baseSquared + perpendicularSquared;
//     const hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
// }
// const baseLength = prompt("Enter Base");
// const perpendicularLength = prompt("Enter Perpendicular");
// const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
// console.log(`The hypotenuse of the right triangle is ${hypotenuse.toFixed(2)}`);


// Question no 9
// function calculate (width, height) {
//     return width * height;
// }
// let width = 5;
// let height = 8;
// let result = calculate(width, height);
// console.log(result);


// Question no 10
// function isPalindrome(str) {
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// const testString = 'madam';
// const isPalindromic = isPalindrome(testString);
// if (isPalindromic) {
//     console.log(`${testString} is a palindrome.`);
// } else {
//     console.log(`${testString} is not a palindrome.`);
// }


// Question no 11
// function capitalizeWord () {
//     let str = "the quick brown fox";
//     let arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     let str2 = arr.join(" ");
//     console.log(str2);
// } 
// capitalizeWord();


// Question no 12
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     let maxLength = 0;
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i].replace(/[^a-zA-Z]/g, '');
//         if (word.length > maxLength) {
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }

//     return longestWord;
// }
// const inputString = 'Web Development Tutorial';
// const longestWord = findLongestWord(inputString);
// console.log(longestWord);


// Question no 14
// function calcCircumferences (radius) {
//     return 2 * Math.PI * radius;
// }
// function calcArea (radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// const radius = parseFloat(prompt("radius"));
// console.log(+calcCircumferences(radius).toFixed(2));
// console.log(+calcArea(radius).toFixed(2)); 