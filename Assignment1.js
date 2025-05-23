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
let N=4567;  // 4-digit number
let mod=N%1000; // last 3 digits: 4567 % 1000 = 567
let sub=N-mod; // 4567 - 567 = 4000
let firstDigit=sub/1000;  // 4000 / 1000 = 4
console.log(firstDigit);//Output: 4

//Q5.Find the last digit of a 4 digit number
//Answer--->
let N =4567; // 4-digit number
let lastdigit =N % 10;
console.log(lastdigit);//Output 7

//Q6.Find the remainder
//Answer--->
let r1 = 2; // divisor
let r2 = 9; // dividend
console.log(r1%r2);//remainder is 1

//Q7.Multiply two Numbers
//Answer--->
let m1 = 2;
let m2 = 5;
console.log(m1*m2);//Output 10

//Q8. Marks Calculator 
//Answer--->
let mar1=50;
let mar2=20;
let mar3=100;
let total = mar1+mar2+mar3;
let average=total/3;
console.log(total);//Print total marks of Shyam.
console.log(average); //Print Average of Shyam.


