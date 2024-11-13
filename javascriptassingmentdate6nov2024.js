// JavaScript assignment date 6nov 2024.............
// ===============================================================================================
// Easy Phase (1-30)
// ===============================================================================================
// q.1.Use map to create a new array that doubles the values of the given array [1, 2, 3, 4].

const originalArray = [1, 2, 3, 4];
   const doubledArray = originalArray.map(value => value * 2);
   console.log(doubledArray);  

//    Output: [2, 4, 6, 8]
// ===============================================================================================
// q.2.Use filter to remove even numbers from the array [5, 8, 12, 15, 18].

const originalArray = [5, 8, 12, 15, 18];
const oddNumbersArray = originalArray.filter(value => value % 2 !== 0);
console.log(oddNumbersArray); 

//   Output: [5, 15]
// ===============================================================================================
// q.3.Use reduce to sum up all elements in the array [10, 20, 30, 40].

const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

//    Output: 100
// ===============================================================================================
// q.4.Use find to get the first element greater than 15 in the array [8, 12, 16, 20, 24].

const numbers = [8, 12, 16, 20, 24];
const firstGreaterThan15 = numbers.find(value => value > 15);
console.log(firstGreaterThan15); 

//    Output: 16
// ===============================================================================================
// q.5.Use findIndex to locate the index of the first odd number in the array [2, 4, 6, 9, 12].

const numbers = [2, 4, 6, 9, 12];
const firstOddIndex = numbers.findIndex(value => value % 2 !== 0);
console.log(firstOddIndex);

//    Output: 3
// ===============================================================================================
// q.6.Use some to check if there is any number greater than 100 in [10, 20, 30, 150].

const numbers = [10, 20, 30, 150];
const hasNumberGreaterThan100 = numbers.some(value => value > 100);
console.log(hasNumberGreaterThan100); 

//    Output: true
// ===============================================================================================
// q.7.Use every to check if all numbers in the array [5, 10, 15, 20] are multiples of 5.

const numbers = [5, 10, 15, 20];
const allMultiplesOf5 = numbers.every(value => value % 5 === 0);
console.log(allMultiplesOf5); 

//    Output: true
// ===============================================================================================
// q.8.Use sort to sort the array [3, 5, 1, 4, 2] in ascending order.

const numbers = [3, 5, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); 

//    Output: [1, 2, 3, 4, 5]
// ===============================================================================================
// q.9.Use filter to extract words longer than 3 characters from ["cat", "dog", "fish", "elephant"].

   const words = ["cat", "dog", "fish", "elephant"];
   const longWords = words.filter(word => word.length > 3);
   console.log("Original Array:", words);
   console.log("Filtered Array (words longer than 3 characters):", longWords);

//    output: Original Array: [ 'cat', 'dog', 'fish', 'elephant' ]
//    Filtered Array (words longer than 3 characters): [ 'fish', 'elephant' ]
// ===============================================================================================
// q.10.Use map to convert an array of prices [10, 20, 30] to include tax (10%).

    const prices = [10, 20, 30];
    const pricesWithTax = prices.map(price => price * 1.10);
    console.log(pricesWithTax); 

//     Output: [11, 22, 33]
// ===============================================================================================
// q.11.Use reduce to multiply all numbers in the array [2, 3, 4].

    const numbers = [2, 3, 4];
    const product = numbers.reduce((accumulator, currentValue) => accumulator *    currentValue, 1);
 console.log(product); 

//  Output: 24
// ===============================================================================================
// q.12.Use sort to arrange ["banana", "apple", "cherry"] alphabetically.

    const fruits = ["banana", "apple", "cherry"];
    fruits.sort();
    console.log(fruits); 

//     Output: ["apple", "banana", "cherry"]
// ===============================================================================================
// q.13.Use some to check if any element in [12, 24, 35, 47] is divisible by 5.

    const numbers = [12, 24, 35, 47];
    const isDivisibleBy5 = numbers.some(value => value % 5 === 0);
    console.log(isDivisibleBy5); 

//     Output: true
// ===============================================================================================
// q.14.Use find to get the first negative number in [7, -3, 9, -8, 2].

 
   const numbers = [7, -3, 9, -8, 2];
   const firstNegative = numbers.find(value => value < 0);
   console.log(firstNegative); 

//    Output: -3
// ===============================================================================================
// q.15.Use every to check if all numbers in [9, 18, 27, 36] are divisible by 9.

    const numbers = [9, 18, 27, 36];
    const allDivisibleBy9 = numbers.every(value => value % 9 === 0);
    console.log(allDivisibleBy9); 

//     Output: true
// ===============================================================================================
// q.16.Use filter to get names starting with "A" from ["Alice", "Bob", "Amanda", "Carl"].

    const names = ["Alice", "Bob", "Amanda", "Carl"];
    const namesStartingWithA = names.filter(name => name.startsWith("A"));
    console.log(namesStartingWithA); 

//     Output: ["Alice", "Amanda"]
// ===============================================================================================
// q.17.Use map to square all elements of [1, 2, 3, 4, 5].

    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(number => number * number);
    console.log(squaredNumbers); 

//     Output: [1, 4, 9, 16, 25]

// ===============================================================================================
// q.18.Use find to get the first string longer than 4 characters from ["dog", "horse", "cat", "sheep"].

    const animals = ["dog", "horse", "cat", "sheep"];
    const firstLongString = animals.find(animal => animal.length > 4);
    console.log(firstLongString); 

//     Output: "horse"
// ===============================================================================================
// q.19.Use sort to sort the numbers [50, 20, 10, 40, 30] in descending order.

    const numbers = [50, 20, 10, 40, 30];
    numbers.sort((a, b) => b - a);
    console.log(numbers); 

//     Output: [50, 40, 30, 20, 10]
// ===============================================================================================
// q.20.Use reduce to concatenate an array of strings ["Hello", " ", "World"].

    const words = ["Hello", " ", "World"];
    const concatenatedString = words.reduce((accumulator, currentValue) => accumulator +  currentValue, "");
    console.log(concatenatedString); 

//     Output: "Hello World"
// ===============================================================================================
// q.21.Use map to transform ["John", "Doe"] into ["john", "doe"] (lowercase).

const names = ["John", "Doe"];
const lowerCaseNames = names.map(name => name.toLowerCase());
console.log(lowerCaseNames);

// output: [ 'john', 'doe' ]
// ===============================================================================================
// q.22.Use filter to get all elements less than 100 from [150, 80, 90, 300].

const numbers = [150, 80, 90, 300];
const lessThanHundred = numbers.filter(num => num < 100);
console.log(lessThanHundred);

// output: [ 80, 90 ]
// ===============================================================================================
// q.23.Use findIndex to locate the position of "cat" in ["dog", "cat", "bird"].

const animals = ["dog", "cat", "bird"];
const catIndex = animals.findIndex(animal => animal === "cat");
console.log(catIndex);

// output: 1
// ===============================================================================================
// q.24.Use every to confirm if all elements in [10, 20, 30, 40] are greater than 5.

const numbers = [10, 20, 30, 40];
const allGreaterThanFive = numbers.every(num => num > 5);
console.log(allGreaterThanFive);

// output: true
// ===============================================================================================
// q.25.Use some to determine if any number in [25, 35, 45] is greater than 40.

const numbers = [25, 35, 45];
const anyGreaterThanForty = numbers.some(num => num > 40);
console.log(anyGreaterThanForty);

// output: true
// ===============================================================================================
// q.26.Use filter to extract odd numbers from [12, 15, 19, 21, 24].

const numbers = [12, 15, 19, 21, 24];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// output: [ 15, 19, 21 ]
// ===============================================================================================
// q.27.Use map to append the word "Item" to each element of ["One", "Two", "Three"].

const items = ["One", "Two", "Three"];
const appendedItems = items.map(item => item + " Item");
console.log(appendedItems);

// output: [ 'One Item', 'Two Item', 'Three Item' ]
// ===============================================================================================
// q.28.Use sort to sort an array of characters ["b", "a", "c", "e", "d"] alphabetically.

const chars = ["b", "a", "c", "e", "d"];
const sortedChars = chars.sort();
console.log(sortedChars);

// output: [ 'a', 'b', 'c', 'd', 'e' ]
// ===============================================================================================
// q.29.Use reduce to find the maximum number in [3, 6, 2, 8, 5].

const numbers = [3, 6, 2, 8, 5];
const maxNumber = numbers.reduce((max, num) => Math.max(max, num), -Infinity);
console.log(maxNumber);

// output: 8
// ===============================================================================================
// q.30.Use find to get the first number greater than 100 in [50, 120, 90, 150].

const numbers = [50, 120, 90, 150];
const firstGreaterThanHundred = numbers.find(num => num > 100);
console.log(firstGreaterThanHundred);

// output: 120
// ===============================================================================================