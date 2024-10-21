// java script assignment date 15oct2024................
// ==============================================================================================================================================================
// q.1.Write a function add that accepts two numbers and a callback. The callback should print the sum of the two numbers.

// const printtheSum=(sum) => 
// {
//     console.log(sum);
// };
// function add(num1,num2,callback) 
// {
//     let sum=num1+num2;
//     callback(sum);
// }
// add(5,10,printtheSum);

// output:-
// 15
// ==============================================================================================================================================================
// q.2.Create a function subtract that takes two numbers and a callback. The callback should return the difference of the two numbers.

// const difference=(difference)=> 
// {
//     console.log(difference);
// };
// function subtract(num1,num2,callback) 
// {
//     let difference=num1-num2;
//     callback(difference);
// }
// subtract(10,4,difference);

// output:-
// 6
// ==============================================================================================================================================================
// q.3.Implement a function multiply that accepts two numbers and a callback to print the product.

// const printtheproduct=(product)=>
// {
//     console.log(product);
// };
// function multiply(num1,num2,callback) 
// {
//     let product=num1*num2;
//     callback(product);
// }
// multiply(7,5,printtheproduct);

// output:-
// 35
// ==============================================================================================================================================================
// q.4.Write a function divide that accepts two numbers and a callback to return the quotient.

// const printquotient=(quotient)=>
//     {
//     console.log(quotient);
// };

// function divide(num1,num2,callback) 
// {
//     let quotient=num1/num2;
//     callback(quotient);
// }
// divide(10,2,printquotient);

// output:-
// 5
// ==============================================================================================================================================================
// q.5.Create a function fizzBuzz that takes a number and a callback to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

// const printfizzbuzz = (t) => 
// {
//     console.log(t);
// };

// function fizzBuzz(a, callback) 
// {
//     if (a % 3 === 0 && a % 5 === 0) 
//     {
//         let t = "fizzbuzz";
//         callback(t);
//     }
//     else if (a % 3 === 0) 
//     {
//         let t = "fizz";
//         callback(t);
//     }
//     else if (a % 5 === 0) 
//     {
//         let t = "buzz";
//         callback(t);
//     }
// }
// fizzBuzz(15, printfizzbuzz);

// output:-
// fizzbuzz
// ==============================================================================================================================================================
// q.6.Create a function isPrime that takes a number and a callback to check if it is a prime number.

// const printIsPrime=(isPrime)=>
// {
//     console.log(isPrime);
// };
// function isPrime(num, callback)
// {
//     if (num<=1)
//     {
//         callback("no its not a prime number");
//         return;
//     }
//     for (let i=2;i<=num/2;i++) 
//     {
//         if (num%i===0) 
//         {
//             callback("no its not a prime number");
//             return;
//         }
//     }
//     callback("yes its prime number");
// }
// isPrime(17, printIsPrime);
// isPrime(18, printIsPrime);

// output:-
// yes its prime number
// no its not a prime number
// ==============================================================================================================================================================
// q.7.Implement a function findFactorial that takes a number and a callback to return its factorial.

// const factorial=(factorial)=>
// {
//     console.log(factorial);
// };
// function findthefactorial(num,callback) 
// {
//     let factorial=1;
//     for (let i=2;i<=num;i++) 
//     {
//         factorial*=i;
//     }
//     callback(factorial);
// }
// findthefactorial(5,factorial);

// output:-
// 120
// ==============================================================================================================================================================   