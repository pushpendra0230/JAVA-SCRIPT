java script assignment date 9oct2024.................................
=================================================================================================================
q.1. Function with Default Arguments


function greet(name = "Guest", message = "Welcome!") {
    return `${name}, ${message}`;
}

console.log(greet("Alice"));
console.log(greet());


What will be the output of the above code?
answer.
Alice, Welcome!
Guest, Welcome!
=================================================================================================================
q.2. Rest Operator in Function Arguments


function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10));


What will be the output of the above code?
answer....
6
15
=================================================================================================================
q.3. Positional vs Named Arguments


function displayInfo(firstName, lastName, age) {
    return `${firstName} ${lastName} is ${age} years old.`;
}

console.log(displayInfo("John", "Doe", 30));
console.log(displayInfo("Jane", "Smith", 25));


What will be the output of the above code?
answer...
ohn Doe is 30 years old.
Jane Smith is 25 years old.

=================================================================================================================
q.4. Object with Functions


const person = {
    name: "Alex",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());


What will be the output of the above code?
answer...
Hello, my name is Alex

=================================================================================================================
q.5. Closures with Function Returning Function


function outerFunc(outerValue) {
    return function innerFunc(innerValue) {
        return outerValue + innerValue;
    };
}

const addFive = outerFunc(5);
console.log(addFive(10));
console.log(addFive(3));


What will be the output of the above code?
answer...
15
8

=================================================================================================================
q.6. Scope with Nested Functions


let outerVar = "I am outside";

function outer() {
    let outerVar = "I am inside";
    function inner() {
        return outerVar;
    }
    return inner();
}

console.log(outer());


What will be the output of the above code?
answer...
I am inside


=================================================================================================================
q.7. Default Arguments with Rest Operator


function multiply(factor = 2, ...numbers) {
    return numbers.map(num => num * factor);
}

console.log(multiply(3, 1, 2, 3));
console.log(multiply(undefined, 4, 5));


What will be the output of the above code?
answer...
[ 3, 6, 9 ]
[ 8, 10 ]


=================================================================================================================
q.8. Rest Parameters with Positional Arguments


function combine(first, second, ...rest) {
    return [first, second, ...rest];
}

console.log(combine(1, 2, 3, 4, 5));
console.log(combine("a", "b", "c"));


What will be the output of the above code?
answer...
[ 1, 2, 3, 4, 5 ]
[ 'a', 'b', 'c' ]

=================================================================================================================
q.9. Object with Functions and Closures


const counter = {
    count: 0,
    increment() {
        return ++this.count;
    },
    reset() {
        return this.count = 0;
    }
};

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());


What will be the output of the above code?
answer...
1
2
0
1


=================================================================================================================
q.10. Scope and Default Arguments


let x = 10;

function testScope(a, b = x) {
    let x = 20;
    return a + b;
}

console.log(testScope(5));


What will be the output of the above code?
answer...
15
=================================================================================================================
q.11. Rest Operator with Arrow Functions


const joinStrings = (...strings) => strings.join(" ");

console.log(joinStrings("Hello", "World"));
console.log(joinStrings("", "is", "awesome"));


What will be the output of the above code?
answer...
Hello World
 is awesome
=================================================================================================================
q.12. Function with Multiple Default Arguments


function calculateArea(length = 5, width = 10) {
    return length * width;
}

console.log(calculateArea(7));
console.log(calculateArea());


What will be the output of the above code?
answer...
70
50
=================================================================================================================
q.13. Rest Operator with No Arguments


function logAll(...args) {
    return args.length;
}

console.log(logAll());
console.log(logAll(1, 2, 3));


What will be the output of the above code?
answer...
0
3
=================================================================================================================
q.14. Function Expression with Default Parameters


const multiply = function(a = 1, b = 2) {
    return a * b;
};

console.log(multiply(3, 4));
console.log(multiply(5));


What will be the output of the above code?
answer...
12
10
=================================================================================================================
q.15. Closure with Counter


function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


What will be the output of the above code?
answer...
1
2
3
=================================================================================================================
q.16. Scope of Variables in Nested Functions


let name = "Outside";

function outerFunction() {
    let name = "Inside";
    function innerFunction() {
        return name;
    }
    return innerFunction();
}

console.log(outerFunction());


What will be the output of the above code?
answer...
Inside
=================================================================================================================
q.17. Object Method and `this` Keyword


const car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};

const getBrand = car.getBrand;
console.log(getBrand());


What will be the output of the above code?
answer...
undefined
=================================================================================================================
q.18. Rest Operator with Mixed Parameters


function listColors(color1, color2, ...otherColors) {
    return otherColors;
}

console.log(listColors("Red", "Blue", "Green", "Yellow"));


What will be the output of the above code?
answer...
[ 'Green', 'Yellow' ]
=================================================================================================================
q.19. Default Arguments and Undefined


function displayMessage(message = "Hello") {
    return message;
}

console.log(displayMessage(undefined));
console.log(displayMessage("Hi"));


What will be the output of the above code?
answer...
ello
Hi
=================================================================================================================
q.20. Closure with Outer Function Arguments


function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));


What will be the output of the above code?
answer...
5
=================================================================================================================
