                    //JAVASCRIPT ASSIGNMENT-1
//Q1. Add two Numbers
//Answers-->
let A = 2;  // declare the varaible a and assign value 2
let B = 5;  // declare the varaible b and assign value 5
console.log(a+b);  // prints 7 to the console.

//Q2. Find if the conditions are obeyed or not?
//Answer--->
let x = 5; 
let y = 3;
let check= (x<10)+(x>y)=== 2;//if both conditions are true then output is true. 
console.log(check);  // true or false

//Q3.Check the conditions
//Answer--->
let d = 12;
let d1 = 20;
let check_div=((d%10===0)+(d1%10===0))>0;//if sum>0 then it means minimum to-
//-minium one divisible then output is true.
console.log(check_div);

//Q4.Find the first digit of a 4 digit number.
//Answer--->
let N = 4567;         // 4-digit number
let mod = N % 1000;   // last 3 digits: 4567 % 1000 = 567
let sub = N - mod;    // 4567 - 567 = 4000
let firstDigit = sub / 1000;  // 4000 / 1000 = 4

console.log(firstDigit);  // Output: 4
