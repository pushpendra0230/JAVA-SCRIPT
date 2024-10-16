// java script assignment date 1oct2024................
// ===============================================================================================================================
// q.1. Function Expression Hoisting


// console.log(typeof test);
// var test = function() { return 5; };


// output:-
// undefined
// ===============================================================================================================================
// q.2. Lexical Scoping with Let and Var


// let x = 5;
// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();

// output:-
// undefined
// ===============================================================================================================================
// q.3. Closure Inside a Loop


// function createIncrementer() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// let increment = createIncrementer();
// console.log(increment());
// console.log(increment());

// output:-
// 1
// 2
// ===============================================================================================================================
// q.4.Variable Hoisting


// console.log(foo);
// var foo = 10;

// output:-
// undefined
// ===============================================================================================================================
// q.5. Block Scope with Let


// function blockScope() {
//   let x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// blockScope();

// output:-
// 20
// 10
// ===============================================================================================================================
// q.6. Function Scope and Closures


// function outer() {
//   var outerVar = "outer";
//   return function inner() {
//     console.log(outerVar);
//   };
// }
// var innerFunc = outer();
// innerFunc();


// output:-
// outer
// ===============================================================================================================================
// q.7. Variable Shadowing



// let a = 10;
// function shadow() {
//   let a = 5;
//   console.log(a);
// }
// shadow();
// console.log(a);

// output:-
// 5
// 10
// ===============================================================================================================================
// q.8. Closure and Multiple Functions


// function outerFunc() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     }
//   };
// }

// let counter = outerFunc();
// counter.increment();
// counter.decrement();

// output:-
// 1
// 0
// ===============================================================================================================================
// q.9. Lexical Scoping with Functions


// function outerFunc() {
//   let x = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   return innerFunc;
// }
// let result = outerFunc();
// result();

// output:-
// 10
// ===============================================================================================================================
// q.10. Hoisting with Function Declarations


// function hoistingTest() {
//   console.log(x);
//   var x = 10;
// }
// hoistingTest();

// output:-
// undefined
// ===============================================================================================================================
// q.11. Functions and Default Parameters


// function add(a = 5, b = a * 2) {
//   return a + b;
// }
// console.log(add(3));
// console.log(add());

// output:-
// 9
// 15
// ===============================================================================================================================
// q.12. Closure with State


// function createCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());

// output:-
// 1
// 2
// ===============================================================================================================================
// q.13. Hoisting in Functions


// function testHoist() {
//   console.log(foo);
//   var foo = 10;
// }
// testHoist();

// output:-
// undefined
// ===============================================================================================================================
// q.14. Self-Invoking Function with Closure


// (function() {
//   var x = 5;
// })();
// console.log(x);

// output:-
// x is not defined
// ===============================================================================================================================
// q.15. Closure and Returning Functions


// function multiplierFactory(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }
// let double = multiplierFactory(2);
// console.log(double(4));

// output:-
// 8
// ===============================================================================================================================
// q.16. Block Scope and Let


// let x = 5;
// function checkScope() {
//   let x = 10;
//   console.log(x);
// }
// checkScope();
// console.log(x);

// output:-
// 10
// 5
// ===============================================================================================================================
// q.17. Functions and Parameter Hoisting


// function hoistParam(param) {
//   console.log(param);
//   var param = 20;
// }
// hoistParam(10);

// output:-
// 10
// ===============================================================================================================================
// q.18. Nested Functions and Scope Chain


// let x = 1;
// function outer() {
//   let x = 2;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// output:-
// 2
// ===============================================================================================================================
// q.19. Arguments Object


// function testArgs(a, b, c) {
//   console.log(arguments[0], arguments[1], arguments[2]);
// }
// testArgs(1, 2);

// output:-
// 1 2 undefined
// ===============================================================================================================================
// q.20. Variable Shadowing in Blocks


// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// output:-
// 10
// 5
// ===============================================================================================================================
// q.21. Closures and Lexical Scope


// function outer() {
//   let a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// let result = outer();
// result();


// output:-
// 1
// ===============================================================================================================================
// q.22. Hoisting in Function Expressions


// console.log(typeof foo);
// var foo = function() {
//   return 5;
// };


// output:-
// undefined
// ===============================================================================================================================
// q.23. Function Declaration Hoisting


// function hoistFunc() {
//   console.log(foo());
//   function foo() {
//     return 10;
//   }
// }
// hoistFunc();


// output:-
// 10
// ===============================================================================================================================
// q.24. Closures and Arguments


// function createFunction() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const increment = createFunction();
// console.log(increment());
// console.log(increment());


// output:-
// 1
// 2
// ===============================================================================================================================
// q.25. Scope and Variable Shadowing


// let x = 10;
// function checkScope() {
//   let x = 20;
//   console.log(x);
// }
// checkScope();
// console.log(x);

// output:-
// 20
// 10
// ===============================================================================================================================
// q.26. Immediate Invocation and Scope


// (function() {
//   var x = 5;
// })();
// console.log(x);


// output:-
// x is not defined
// ===============================================================================================================================
// q.27. Closures with Nested Functions


// function outerFunction() {
//   var outerVar = "I'm outer";
//   return function innerFunction() {
//     console.log(outerVar);
//   };
// }
// outerFunction()();

// output:-
// I'm outer
// ===============================================================================================================================
// q.28. Hoisting of Function Expressions


// console.log(typeof func);
// var func = function() {
//   return 5;
// };

// output:-
// undefined
// ===============================================================================================================================
// q.29. Block Scope with Let


// let x = 10;
// if (true) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// output:-
// 20
// 10
// ===============================================================================================================================
// q.30. Closures and State Management


// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// const increment = counter();
// console.log(increment());
// console.log(increment());

// output:-
// 1
// 2
// ===============================================================================================================================
// q.31. Hoisting and Function Parameters


// function testHoisting(param) {
//   console.log(param);
//   var param = 20;
// }
// testHoisting(10);

// output:-
// 10
// ===============================================================================================================================
// q.32. Variable Shadowing in Nested Functions


// let a = 1;
// function outer() {
//   let a = 2;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// output:-
// 2
// ===============================================================================================================================
// q.33. Closures with Multiple Functions


// function createCounter() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     }
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.decrement();

// output:-
// 1
// 0
// ===============================================================================================================================
// q.34. Lexical Scope and Closures


// let a = 1;
// function outerFunc() {
//   let a = 2;
//   return function() {
//     console.log(a);
//   };
// }
// let result = outerFunc();
// result();

// output:-
// 2
// ===============================================================================================================================
// q.35. Hoisting and Function Declarations


// console.log(test());
// function test() {
//   return 5;
// }


// output:-
// 5
// ===============================================================================================================================
// q.36. Closures with Functions Returning Functions


// function createMultiplier(multiplier) {
//   return function(num) {
//     return num * multiplier;
//   };
// }

// let double = createMultiplier(2);
// console.log(double(4));

// output:-
// 8
// ===============================================================================================================================
// q.37. Block Scope with Let and Var


// var x = 10;
// if (true) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// output:-
// 20
// 10
// ===============================================================================================================================
// q.38. Closures and State Encapsulation


// function createCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// let counter = createCounter();
// console.log(counter());
// console.log(counter());


// output:-
// 1
// 2
// ===============================================================================================================================
// q.39. Function Expressions and Hoisting


// console.log(typeof func);
// var func = function() {
//   return 10;
// };


// output:-
// undefined
// ===============================================================================================================================
// q.40. Function Scope and Hoisting


// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();


// output:-
// undefined
// ===============================================================================================================================
// q.41. Closure and Returning Functions


// function multiplierFactory(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }
// let double = multiplierFactory(2);
// console.log(double(5));


// output:-
// 10
// ===============================================================================================================================
// q.42. Lexical Scoping and Function Variables


// let x = 10;
// function outerFunc() {
//   console.log(x);
// }
// function test() {
//   let x = 20

// ;
//   outerFunc();
// }
// test();


// output:-
// 10
// ===============================================================================================================================
// q.43. Scoping and Temporal Dead Zone


// console.log(a);
// let a = 10;


// Question: What is the output and why? Explain the concept of the "Temporal Dead Zone."


// output:-
// ReferenceError: Cannot access 'a' before initialization

// Temporal Dead Zone (TDZ) ka Concept:
// TDZ ek aisa period hai jab ek variable scope mein hota hai lekin usko tab tak access nahi kiya ja sakta jab tak uska initialization nahi hota.

// Example Breakdown:
// Pehele: a hoisted hai lekin initialize nahi hai.
// Dauraan: console.log(a) call hone par error aata hai.
// Baad: Agar aap console.log(a) ko let a = 10; ke baad rakhein, toh ye sahi se 10 print karega.
// ===============================================================================================================================
// q.44. Hoisting in Nested Functions


// function outer() {
//   console.log(a);
//   var a = 10;
//   function inner() {
//     console.log(a);
//     var a = 20;
//   }
//   inner();
// }
// outer();


// Question: What will be printed and why? Discuss how hoisting affects variables in nested functions.


// output:-
// undefined
// undefined
// Explanation:
// Hoisting:

// Variable declarations with var are hoisted to the top of their scope, but initializations are not.
// Execution of outer():

// The first console.log(a) outputs undefined because var a is hoisted but not initialized yet.
// The initialization var a = 10; occurs after the log.
// Execution of inner():

// The console.log(a) inside inner() throws a ReferenceError because var a in inner() is hoisted but not yet initialized, placing it in the TDZ (Temporal Dead Zone).
// ===============================================================================================================================
// q.45. Closure with Function Re-Assignment


// let count = 0;
// function counter() {
//   count++;
//   return count;
// }

// let c1 = counter;
// let c2 = counter;

// console.log(c1());
// console.log(c2());
// console.log(c1());


// Question: What will be the output and why? Analyze the behavior of closures when functions are assigned to multiple variables.


// output:-
// 1
// 2
// 3

// Explanation:
// Function Assignment:

// Both c1 and c2 reference the same counter function. They do not create new instances of the function; they simply point to the same function in memory.
// Global Variable count:

// The count variable is defined in the global scope and is shared by all invocations of the counter function. This means any changes to count affect all references to the counter function.
// Execution:

// c1():
// Calls counter, increments count from 0 to 1, and returns 1.
// c2():
// Calls counter again, increments count from 1 to 2, and returns 2.
// c1():
// Calls counter once more, increments count from 2 to 3, and returns 3.
// ===============================================================================================================================
// q.46. Variable Scope in Loops (Var vs. Let)


// for (var i = 0; i < 3; i++) {
//   for (let i = 0; i < 2; i++) {
//     console.log(i);
//   }
// }
// console.log(i);


// Question: What will be printed and why? Explain the difference between `var` and `let` in loop scoping.


// output:-
// 0
// 1
// 0
// 1
// 0
// 1
// 3

// Explanation:
// Outer Loop (var i):

// The outer loop uses var, which is function-scoped. After the loop, i becomes 3.
// Inner Loop (let i):

// The inner loop uses let, which is block-scoped. It creates a new i for each iteration, printing 0 and 1.
// Final console.log(i):

// After both loops, the outer i is 3 because it incremented through the outer loop.
// Key Differences:
// var: Function/global scope; retains the same variable across iterations.
// let: Block scope; each iteration of the loop creates a new variable.
// ===============================================================================================================================
// q.47. Lexical Scope and Closures


// function outer() {
//   let a = 1;
//   return function inner() {
//     return a++;
//   };
// }

// const x = outer();
// console.log(x());
// console.log(x());
// console.log(a);


// Question: What will be the output and why? Analyze the closure formed by `inner()` and how it impacts variable access.


// output:-
// 1
// 2
// ReferenceError: a is not defined

// Explanation:
// Closure Formation:

// The outer function creates a variable a and returns the inner function, which forms a closure. This means inner retains access to a even after outer has finished executing.
// Function Calls:

// const x = outer(); invokes outer(), creating a with an initial value of 1 and returning the inner function.
// When x() is called the first time, it executes inner(), returning 1 (the current value of a) and then increments a to 2.
// On the second call to x(), it returns 2 (the new value of a) and increments it to 3.
// Error with console.log(a):

// Attempting to access a directly results in a ReferenceError because a is scoped to the outer function and is not accessible in the global scope.
// ===============================================================================================================================
// q.48. Re-declaration with Var and Let


// var x = 10;
// let x = 20;
// console.log(x);


// Question: What will happen here, and why? Discuss why this causes an error and the difference between `var` and `let` in terms of redeclaration.


// output:-
// SyntaxError: Identifier 'x' has already been declared

// Explanation:
// Variable Declarations:

// var x = 10; declares a variable x and initializes it with the value 10.
// let x = 20; attempts to declare a new variable x with let and initialize it with the value 20.
// Redeclaration Behavior:

// var: Variables declared with var can be redeclared within the same scope without causing an error. If you had only used var, the second declaration would simply update the value of x to 20.
// let: However, let does not allow redeclaration of the same variable in the same scope. When you try to declare x again using let, it results in a SyntaxError.
// ===============================================================================================================================
// q.49. Function and Block Scope


// function outer() {
//   var x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// outer();


// Question: What will be printed and why? Explain how block scope works with `let` and `var`.


// output:-
// 20
// 10

// Explanation:
// Inner Block: The let x = 20; inside the if block shadows the outer x. Thus, console.log(x); in the block prints 20.
// Outer Scope: The console.log(x); outside the block accesses the outer var x, which is 10, so it prints 10.
// Block Scope:
// let: Block-scoped; only accessible within its block.
// var: Function-scoped; accessible throughout the function.
// ===============================================================================================================================
// q.50. Const with Objects


// const obj = { a: 10 };
// obj.a = 20;
// obj = { a: 30 };
// console.log(obj.a);


// Question: What is the output and why? Discuss how `const` works with objects, particularly in terms of re-assignment versus mutation.


// output:-
// TypeError: Assignment to constant variable.

// Explanation:
// Mutation: The line obj.a = 20; successfully changes the property a of the object to 20. This is allowed because const allows mutation of the object it references.
// Re-assignment: The line obj = { a: 30 }; attempts to reassign obj to a new object. Since obj is declared with const, this results in a TypeError.
// Key Points:
// const Behavior: In JavaScript, const prevents re-assignment of the variable itself but allows for the properties of objects to be modified.
// Mutation vs. Re-assignment: You can change the contents of an object (mutation) but cannot assign a new object or value to a const variable (re-assignment).
// ===============================================================================================================================
// q.51. Immediate Invocation with Var and Let


// for (let i = 0; i < 3; i++) {
//   (function() {
//     console.log(i);
//   })();
// }


// Question: What will be printed and why? Analyze the behavior of IIFE (Immediately Invoked Function Expression) with `let` in loops.


// output:-
// 0
// 1
// 2

// Explanation:
// Loop Execution: The for loop iterates with i taking values from 0 to 2.
// IIFE (Immediately Invoked Function Expression): Each iteration of the loop creates a new scope due to the let declaration. The IIFE captures the current value of i in that iteration.
// Behavior of let in Loops:
// Block Scope: Unlike var, which is function-scoped and shares the same variable across iterations, let is block-scoped. This means a new instance of i is created for each iteration.
// IIFE Capturing: Each IIFE accesses the value of i at the time of its invocation, resulting in distinct outputs of 0, 1, and 2.
// ===============================================================================================================================
// q.52. Function Hoisting vs. Variable Hoisting


// function test() {
//   console.log(foo);
//   var foo = 10;
//   function foo() {}
//   console.log(foo);
// }
// test();


// Question: What will be the output and why? Explain the order in which function declarations and variable declarations are hoisted.


// output:-
// [Function: foo]
// 10

// Explanation:
// Hoisting:

// Both the variable foo (declared with var) and the function foo are hoisted.
// The effective hoisting looks like:

// function foo() {}
// var foo; // declared but undefined
// Execution:

// First console.log(foo): Outputs undefined because the variable is declared but not initialized yet.
// Second console.log(foo): Outputs [Function: foo] because the function declaration takes precedence.
// ===============================================================================================================================
// q.53. Scoping Inside Functions


// var x = 5;
// function scopeCheck() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }
// scopeCheck();


// Question: What will be printed and why? Discuss how variable hoisting affects the `x` variable within the function.


// output:-
// undefined
// 10

// Explanation:
// Hoisting:

// Inside the scopeCheck function, the variable x is hoisted to the top. This means the declaration var x is recognized before any code runs, but it is initialized to undefined.
// The hoisted version of the function looks like this:

// function scopeCheck() {
//   var x; // hoisted
//   console.log(x); // prints undefined
//   x = 10; // assigns 10 to the local x
//   console.log(x); // prints 10
// }
// Execution:

// First console.log(x): At this point, the local x is hoisted but uninitialized, so it outputs undefined.
// Second console.log(x): After assigning 10 to the local x, it prints 10.
// ===============================================================================================================================
// q.54. Closures with Function Properties


// function counter() {
//   counter.count = (counter.count || 0) + 1;
//   return counter.count;
// }

// console.log(counter());
// console.log(counter());


// Question: What will be the output? How does the function property `counter.count` affect the closure and variable persistence?


// output:-
// 1
// 2

// Explanation:
// Function Property:

// counter.count is a static property attached to the function counter. It retains its value between calls to counter(), acting like a private variable.
// Execution:

// First Call: When counter() is called for the first time:

// counter.count is initially undefined.
// The expression (counter.count || 0) evaluates to 0.
// It then increments by 1, setting counter.count to 1.
// The function returns 1.
// Second Call: When counter() is called again:

// counter.count is now 1 from the previous call.
// The expression (counter.count || 0) evaluates to 1.
// It increments by 1, setting counter.count to 2.
// The function returns 2.
// ===============================================================================================================================
// q.55. Block Scope and Re-declaration


// let x = 10;
// {
//   let x = 20;
//   var y = 30;
// }
// console.log(x);
// console.log(y);


// Question: What will be the output? Explain how `let` and `var` behave differently inside block scope.


// output:-
// 10
// 30

// Explanation:
// let x = 10;:

// The first declaration of x is outside the block, so this x is in the outer scope. Its value is 10.
// Block Scope with let:

// Inside the block, let x = 20; declares a new variable x, scoped only to this block. This does not affect the outer x.
// Therefore, within the block, the value of x is 20, but this does not change the value of the outer x.
// Block Scope with var:

// var y = 30; is declared inside the block. Unlike let, var does not have block scope; it is function-scoped or globally scoped if declared outside of a function.
// As a result, y is accessible outside the block, and its value becomes 30.
// ===============================================================================================================================
// q.56. Hoisting of Function Expression


// console.log(func());
// var func = function() {
//   return 10;
// };


// Question: What will be printed and why? Discuss the difference in hoisting behavior between function declarations and function expressions.


// output:-
// TypeError: func is not a function

// Explanation:
// Variable Declaration and Hoisting:

// The line var func = function() { return 10; }; declares func as a variable and initializes it with a function expression. However, 
// only the variable declaration is hoisted to the top of its scope, not the assignment.
// This means that func is hoisted and initialized to undefined until the assignment is reached.
// Function Call:

// When console.log(func()); is executed, func is in scope but has not yet been assigned the function, 
// so it evaluates to undefined. Therefore, calling func() at this point results in a TypeError because undefined is not a function.
// ===============================================================================================================================
// q.57. Const and Re-assignment


// const a = 5;
// {
//   const a = 10;
//   console.log(a);
// }
// console.log(a);


// Question: What will be printed? Discuss how `const` works in different block scopes and whether re-declaration is possible.


// output:-
// 10
// 5

// Explanation:
// Block Scope:

// The const declaration creates a block-scoped variable. In the code, there are two different a variables:
// The first const a = 5; is declared in the outer scope.
// The second const a = 10; is declared inside the block { ... }.
// Printing Values:

// When console.log(a); is called inside the block, it refers to the block-scoped a, which is 10. Thus, it prints 10.
// After exiting the block, when console.log(a); is called again, it refers to the outer a, which is 5. Hence, it prints 5.
// Re-declaration:
// Re-declaration Not Allowed: In JavaScript, variables declared with const cannot be re-declared within the same scope. However, you can have the same variable name in different scopes (like in this example), as they are treated as separate entities.
// Attempting to re-declare the same variable in the same scope would result in a SyntaxError.
// ===============================================================================================================================
// q.58. IIFE (Immediately Invoked Function Expression) and Hoisting


// (function() {
//   console.log(a);
//   var a = 10;
// })();


// Question: What will be the output and why? Explain the role of hoisting inside an IIFE.


// output:-
// undefined

// Explanation:
// Hoisting:

// In JavaScript, variable declarations (but not initializations) are hoisted to the top of their containing scope. This means that the declaration var a; is moved to the top of the IIFE (Immediately Invoked Function Expression) during the compilation phase.
// Therefore, the code inside the IIFE is interpreted as follows:

// (function() {
//   var a; // Declaration is hoisted to the top
//   console.log(a); // At this point, 'a' is declared but not initialized
//   a = 10; // Now 'a' is initialized with the value 10
// })();
// Output Behavior:

// When console.log(a); is executed, it tries to print the value of a. Since the variable has been hoisted but not yet assigned a value, a is undefined at that point in time. Thus, it prints undefined.
// ===============================================================================================================================
// q.59. Lexical Scoping and Closure Memory


// function outer() {
//   let counter = 0;
//   return function increment() {
//     counter++;
//     return counter;
//   };
// }

// let increment1 = outer();
// let increment2 = outer();
// console.log(increment1());
// console.log(increment2());
// console.log(increment1());


// Question: What will be printed? Discuss how closures preserve their lexical environment across different instances of the same function.


// output:-
// 1
// 1
// 2

// Explanation:
// Closure:

// A closure in JavaScript is created when a function retains access to its lexical scope even after the outer function has returned. In this case, outer() returns the increment() function, which forms a closure over the variable counter.
// Each time outer() is called, a new lexical environment (scope) is created, with its own independent counter variable.
// How It Works:

// First Call to increment1():

// When increment1() is called, it refers to the closure created during the first invocation of outer(). The counter for this instance starts at 0. After the increment, it becomes 1, so 1 is logged.
// First Call to increment2():

// increment2 is a separate closure created by the second call to outer(). It has its own counter that starts at 0. After incrementing, it becomes 1, so 1 is logged again.
// Second Call to increment1():

// When increment1() is called again, it refers to its own closure, where counter was already incremented to 1. Now, it increments counter to 2, so 2 is logged.
// Key Point:

// Each call to outer() creates a new closure with its own independent counter. Therefore, the increment1() and increment2() functions do not share the same counter.
// ===============================================================================================================================
// q.60. Let and Var in Loops


// for (var i = 0; i < 3; i++) {
//   let j = i;
//   console.log(j);
// }
// console.log(i);


// Question: What will be printed and why? Explain the difference between `var` and `let` in loop variable declaration.


// output:-
// 0
// 1
// 2
// 3

// Explanation:
// let vs var:

// let is block-scoped, meaning the variable j declared inside the loop is scoped to each iteration of the loop.
// var is function-scoped (or globally scoped if declared outside a function), meaning the variable i is accessible outside the loop after the loop completes.
// Execution Breakdown:

// Loop with var i:
// The variable i is declared with var, so it is function-scoped and will persist even after the loop finishes. Each iteration of the loop increments i and prints the value of j.
// let j = i;:
// The let j statement creates a new block-scoped j for each iteration, so the values printed inside the loop are 0, 1, and 2, corresponding to the current value of i at each iteration.
// Final console.log(i):

// After the loop completes, i has been incremented to 3, which is printed because i was declared using var and is accessible outside the loop.
// ===============================================================================================================================
// q.61. Shadowing with Let and Var


// let a = 5;
// function test() {
//   var a = 10;
//   console.log(a);
// }
// test();
// console.log(a);


// Question: What will be printed and why? Discuss how `let` and `var` interact in terms of scope and shadowing.


// output:-
// 10
// 5

// Explanation:
// Inside the function test(), var a = 10 creates a new variable that shadows the outer let a = 5. So console.log(a) inside the function prints 10.
// Outside the function, the let a = 5 remains unaffected, so console.log(a) prints 5.
// Key Point: var is function-scoped, while let is block-scoped, and var can shadow outer variables inside a function.
// ===============================================================================================================================
// q.62. Function Scope with Var


// function testScope() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }
// testScope();


// Question: What will be printed? Analyze how `var` variables are hoisted within a function and how their value is handled before initialization.


// output:-
// undefined
// 10

// Explanation:
// Hoisting: The declaration of var x is hoisted to the top of the function, but its initialization (x = 10) occurs at the actual assignment line.
// When console.log(x) is called the first time, x is declared but not yet initialized, so it prints undefined.
// After x = 10, the second console.log(x) prints 10.
// Key Point: Variables declared with var are hoisted but initialized with undefined until the assignment is encountered.
// ===============================================================================================================================
// q.63. Re-declaration with Var Inside Function


// var a = 10;
// function testVar() {
//   var a = 20;
//   console.log(a);
// }
// testVar();
// console.log(a);


// Question: What will be the output? Explain how variable scope works when re-declaring `var` inside a function.


// output:-
// 20
// 10

// Explanation:
// Function Scope: Inside testVar, var a = 20; creates a new a that is local to the function. It does not affect the global a declared outside the function.
// The console.log(a) inside testVar prints the local value 20.
// The console.log(a) outside the function prints the global value 10 since the outer a remains unchanged by the function.
// Key Point: Variables declared with var inside a function are scoped to that function and do not interfere with variables in the global scope.
// ===============================================================================================================================
// q.64. Scoping in Nested Functions


// function outerFunc() {
//   var x = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   innerFunc();
// }
// outerFunc();


// Question: What will be printed and why? Discuss the concept of lexical scoping in nested functions.


// output:-
// 10

// Explanation:
// Lexical Scoping: In JavaScript, functions remember the scope in which they were declared. This is known as lexical scoping.
// In this case, innerFunc is defined inside outerFunc. Since innerFunc accesses x, it looks for x in its own scope. If it doesn't find it, it looks in the scope of its outer function, outerFunc.
// innerFunc finds x = 10 in the scope of outerFunc, so it prints 10.
// Key Point: Lexical scoping means that inner functions have access to variables in the outer function's scope.
// ===============================================================================================================================
// q.65. Block Scoping with Let


// let a = 5;
// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);


// Question: What will be printed? Discuss how block scoping with `let` affects variable visibility inside and outside the block.


// output:-
// 10
// 5

// Explanation:
// Block Scoping with let: Variables declared with let are block-scoped, meaning they are confined to the nearest set of curly braces {}.
// In this example:
// Inside the block { let a = 10; }, a new a is declared. This variable is only accessible within the block. Hence, console.log(a) inside the block prints 10.
// Outside the block, the original let a = 5; is still in effect. Therefore, console.log(a) outside the block prints 5.
// Key Point: Block-scoped variables declared with let have separate scopes inside and outside the block, and they don't interfere with each other.
// ===============================================================================================================================
// q.66. Closure with Multiple Functions


// function outerFunc() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       return count;
//     },
//     decrement: function() {
//       count--;
//       return count;
//     }
//   };
// }

// let counter = outerFunc();
// console.log(counter.increment());
// console.log(counter.decrement());


// Question: What will be the output and why? Analyze how closures behave with multiple functions accessing the same lexical scope.


// output:-
// 1
// 0


// Explanation:
// Closures: In JavaScript, closures allow a function to retain access to variables in its lexical scope even after the outer function has finished executing.

// Behavior of the Code:

// outerFunc() creates a local variable count initialized to 0 and returns an object containing two methods: increment and decrement.
// Both increment and decrement have access to the same count variable due to closure. They share the same lexical environment (the scope created by outerFunc).
// Execution:

// counter.increment() is called first, so it increments count from 0 to 1, returning 1.
// counter.decrement() is called next, so it decrements count from 1 to 0, returning 0.
// Key Point: Multiple functions (increment and decrement) inside a closure can modify and access the same variable (count). This shared state is preserved across calls.
// ===============================================================================================================================
// q.67. Hoisting and Function Declaration


// console.log(test());
// function test() {
//   return 5;
// }


// Question: What will be printed and why? Explain how function declarations are hoisted.


// output:-
// 5

// Explanation:
// Function Declarations Hoisting: In JavaScript, function declarations are hoisted to the top of their scope, meaning the entire function (its name and body) is moved to the top before the code is executed.

// Behavior:

// Even though the console.log(test()) call appears before the function declaration in the code, JavaScript hoists the test function, allowing it to be called before its definition.
// As a result, when console.log(test()) is executed, the test function is already available, and it returns 5.
// Key Point: Function declarations are hoisted entirely, unlike variables declared with var, which are hoisted but not initialized. Hence, test() works even before its definition in the code.
// ===============================================================================================================================
// q.68. Function Expression vs. Declaration


// console.log(foo());
// var foo = function() {
//   return 5;
// };


// Question: What will happen here and why? Discuss the difference between function expressions and function declarations in terms of hoisting.


// output:-
// TypeError: foo is not a function

// Explanation:
// Function Expressions vs. Function Declarations:
// Function Declarations: These are hoisted along with their definitions. For example, a function declared like function bar() { return 5; } can be called before its definition because the entire function is hoisted to the top.
// Function Expressions: In contrast, function expressions (like the one assigned to foo here) are only partially hoisted. The variable name is hoisted, but its value (the function) is not assigned until the execution reaches that line.
// ===============================================================================================================================
// q.69. Scope Chain in Nested Functions


// let a = 1;
// function outer

// () {
//   let b = 2;
//   function inner() {
//     console.log(a, b);
//   }
//   inner();
// }
// outer();


// Question: What will be printed and why? Explain how the scope chain works in nested functions.


// output:-
// ReferenceError: Cannot access 'a' before initialization

// Explanation:
// The output 1 2 is a result of how variable scoping and the scope chain work in nested functions.
// Scope Chain:
// Global Scope:

// The variable a is declared in the global scope and is accessible anywhere in the program.
// Outer Function (outer) Scope:

// Inside the outer function, a new scope is created, and the variable b is defined with a value of 2.
// Inner Function (inner) Scope:

// The inner function has access to its own scope and can also access variables from its parent scope (outer) and the global scope.
// When inner is called, it can see:
// a from the global scope.
// b from its parent scope (the outer function).
// ===============================================================================================================================
// q.70.Closure in Multiple Instances


// function outer() {
//   let x = 10;
//   return function() {
//     return x++;
//   };
// }

// const a = outer();
// const b = outer();

// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());

// Question: What will be printed? Discuss how closures work with multiple instances and how they preserve their own state.


// output:-
// 10
// 10
// 11
// 10
// 10
// 11
// 11

// Explanation:
// Closure Creation:

// The function outer defines a variable x and returns an inner function that increments and returns x.
// Each time outer is called, a new instance of x is created, preserved within its own closure.
// Instance Behavior:

// When const a = outer(); is executed, a new closure is created where x starts at 10. The function returned by outer captures this instance of x.
// Similarly, const b = outer(); creates another closure with a separate x, also starting at 10.
// ===============================================================================================================================