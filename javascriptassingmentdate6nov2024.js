// // JavaScript assignment date 6nov 2024.............
// // ===============================================================================================
// // Easy Phase (1-30)
// // ===============================================================================================
// // q.1.Use map to create a new array that doubles the values of the given array [1, 2, 3, 4].

// let arr=[1,2,3,4];
// let doublearr=arr.map((value)=>
//     {
//         return value*2;
//     });
// console.log(doublearr);

// //    Output: [2, 4, 6, 8]
// // ===============================================================================================
// // q.2.Use filter to remove even numbers from the array [5, 8, 12, 15, 18].

// const originalArray = [5, 8, 12, 15, 18];
// const oddNumbersArray = originalArray.filter(value => value % 2 !== 0);
// console.log(oddNumbersArray); 

// //   Output: [5, 15]
// // ===============================================================================================
// // q.3.Use reduce to sum up all elements in the array [10, 20, 30, 40].

// const numbers = [10, 20, 30, 40];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 

// //    Output: 100
// // ===============================================================================================
// // q.4.Use find to get the first element greater than 15 in the array [8, 12, 16, 20, 24].

// const numbers = [8, 12, 16, 20, 24];
// const firstGreaterThan15 = numbers.find(value => value > 15);
// console.log(firstGreaterThan15); 

// //    Output: 16
// // ===============================================================================================
// // q.5.Use findIndex to locate the index of the first odd number in the array [2, 4, 6, 9, 12].

// const numbers = [2, 4, 6, 9, 12];
// const firstOddIndex = numbers.findIndex(value => value % 2 !== 0);
// console.log(firstOddIndex);

// //    Output: 3
// // ===============================================================================================
// // q.6.Use some to check if there is any number greater than 100 in [10, 20, 30, 150].

// const numbers = [10, 20, 30, 150];
// const hasNumberGreaterThan100 = numbers.some(value => value > 100);
// console.log(hasNumberGreaterThan100); 

// //    Output: true
// // ===============================================================================================
// // q.7.Use every to check if all numbers in the array [5, 10, 15, 20] are multiples of 5.

// const numbers = [5, 10, 15, 20];
// const allMultiplesOf5 = numbers.every(value => value % 5 === 0);
// console.log(allMultiplesOf5); 

// //    Output: true
// // ===============================================================================================
// // q.8.Use sort to sort the array [3, 5, 1, 4, 2] in ascending order.

// const numbers = [3, 5, 1, 4, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers); 

// //    Output: [1, 2, 3, 4, 5]
// // ===============================================================================================
// // q.9.Use filter to extract words longer than 3 characters from ["cat", "dog", "fish", "elephant"].

//    const words = ["cat", "dog", "fish", "elephant"];
//    const longWords = words.filter(word => word.length > 3);
//    console.log("Original Array:", words);
//    console.log("Filtered Array (words longer than 3 characters):", longWords);

// //    output: Original Array: [ 'cat', 'dog', 'fish', 'elephant' ]
// //    Filtered Array (words longer than 3 characters): [ 'fish', 'elephant' ]
// // ===============================================================================================
// // q.10.Use map to convert an array of prices [10, 20, 30] to include tax (10%).

//     const prices = [10, 20, 30];
//     const pricesWithTax = prices.map(price => price * 1.10);
//     console.log(pricesWithTax); 

// //     Output: [11, 22, 33]
// // ===============================================================================================
// // q.11.Use reduce to multiply all numbers in the array [2, 3, 4].

//     const numbers = [2, 3, 4];
//     const product = numbers.reduce((accumulator, currentValue) => accumulator *    currentValue, 1);
//  console.log(product); 

// //  Output: 24
// // ===============================================================================================
// // q.12.Use sort to arrange ["banana", "apple", "cherry"] alphabetically.

//     const fruits = ["banana", "apple", "cherry"];
//     fruits.sort();
//     console.log(fruits); 

// //     Output: ["apple", "banana", "cherry"]
// // ===============================================================================================
// // q.13.Use some to check if any element in [12, 24, 35, 47] is divisible by 5.

//     const numbers = [12, 24, 35, 47];
//     const isDivisibleBy5 = numbers.some(value => value % 5 === 0);
//     console.log(isDivisibleBy5); 

// //     Output: true
// // ===============================================================================================
// // q.14.Use find to get the first negative number in [7, -3, 9, -8, 2].

 
//    const numbers = [7, -3, 9, -8, 2];
//    const firstNegative = numbers.find(value => value < 0);
//    console.log(firstNegative); 

// //    Output: -3
// // ===============================================================================================
// // q.15.Use every to check if all numbers in [9, 18, 27, 36] are divisible by 9.

//     const numbers = [9, 18, 27, 36];
//     const allDivisibleBy9 = numbers.every(value => value % 9 === 0);
//     console.log(allDivisibleBy9); 

// //     Output: true
// // ===============================================================================================
// // q.16.Use filter to get names starting with "A" from ["Alice", "Bob", "Amanda", "Carl"].

//     const names = ["Alice", "Bob", "Amanda", "Carl"];
//     const namesStartingWithA = names.filter(name => name.startsWith("A"));
//     console.log(namesStartingWithA); 

// //     Output: ["Alice", "Amanda"]
// // ===============================================================================================
// // q.17.Use map to square all elements of [1, 2, 3, 4, 5].

//     const numbers = [1, 2, 3, 4, 5];
//     const squaredNumbers = numbers.map(number => number * number);
//     console.log(squaredNumbers); 

// //     Output: [1, 4, 9, 16, 25]

// // ===============================================================================================
// // q.18.Use find to get the first string longer than 4 characters from ["dog", "horse", "cat", "sheep"].

//     const animals = ["dog", "horse", "cat", "sheep"];
//     const firstLongString = animals.find(animal => animal.length > 4);
//     console.log(firstLongString); 

// //     Output: "horse"
// // ===============================================================================================
// // q.19.Use sort to sort the numbers [50, 20, 10, 40, 30] in descending order.

//     const numbers = [50, 20, 10, 40, 30];
//     numbers.sort((a, b) => b - a);
//     console.log(numbers); 

// //     Output: [50, 40, 30, 20, 10]
// // ===============================================================================================
// // q.20.Use reduce to concatenate an array of strings ["Hello", " ", "World"].

//     const words = ["Hello", " ", "World"];
//     const concatenatedString = words.reduce((accumulator, currentValue) => accumulator +  currentValue, "");
//     console.log(concatenatedString); 

// //     Output: "Hello World"
// // ===============================================================================================
// // q.21.Use map to transform ["John", "Doe"] into ["john", "doe"] (lowercase).

// const names = ["John", "Doe"];
// const lowerCaseNames = names.map(name => name.toLowerCase());
// console.log(lowerCaseNames);

// // output: [ 'john', 'doe' ]
// // ===============================================================================================
// // q.22.Use filter to get all elements less than 100 from [150, 80, 90, 300].

// const numbers = [150, 80, 90, 300];
// const lessThanHundred = numbers.filter(num => num < 100);
// console.log(lessThanHundred);

// // output: [ 80, 90 ]
// // ===============================================================================================
// // q.23.Use findIndex to locate the position of "cat" in ["dog", "cat", "bird"].

// const animals = ["dog", "cat", "bird"];
// const catIndex = animals.findIndex(animal => animal === "cat");
// console.log(catIndex);

// // output: 1
// // ===============================================================================================
// // q.24.Use every to confirm if all elements in [10, 20, 30, 40] are greater than 5.

// const numbers = [10, 20, 30, 40];
// const allGreaterThanFive = numbers.every(num => num > 5);
// console.log(allGreaterThanFive);

// // output: true
// // ===============================================================================================
// // q.25.Use some to determine if any number in [25, 35, 45] is greater than 40.

// const numbers = [25, 35, 45];
// const anyGreaterThanForty = numbers.some(num => num > 40);
// console.log(anyGreaterThanForty);

// // output: true
// // ===============================================================================================
// // q.26.Use filter to extract odd numbers from [12, 15, 19, 21, 24].

// const numbers = [12, 15, 19, 21, 24];
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

// // output: [ 15, 19, 21 ]
// // ===============================================================================================
// // q.27.Use map to append the word "Item" to each element of ["One", "Two", "Three"].

// const items = ["One", "Two", "Three"];
// const appendedItems = items.map(item => item + " Item");
// console.log(appendedItems);

// // output: [ 'One Item', 'Two Item', 'Three Item' ]
// // ===============================================================================================
// // q.28.Use sort to sort an array of characters ["b", "a", "c", "e", "d"] alphabetically.

// const chars = ["b", "a", "c", "e", "d"];
// const sortedChars = chars.sort();
// console.log(sortedChars);

// // output: [ 'a', 'b', 'c', 'd', 'e' ]
// // ===============================================================================================
// // q.29.Use reduce to find the maximum number in [3, 6, 2, 8, 5].

// const numbers = [3, 6, 2, 8, 5];
// const maxNumber = numbers.reduce((max, num) => Math.max(max, num), -Infinity);
// console.log(maxNumber);

// // output: 8
// // ===============================================================================================
// // q.30.Use find to get the first number greater than 100 in [50, 120, 90, 150].

// const numbers = [50, 120, 90, 150];
// const firstGreaterThanHundred = numbers.find(num => num > 100);
// console.log(firstGreaterThanHundred);

// // output: 120
// // ===============================================================================================
// Medium Phase (31-60)
// // ===============================================================================================
// q.31.Use reduce to flatten an array [[1, 2], [3, 4], [5, 6]] into a single array.

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
// console.log(flattenedArray);

// Output: [ 1, 2, 3, 4, 5, 6 ]
// // ===============================================================================================
// q.32.Use filter to remove duplicates from [1, 2, 3, 1, 2, 4, 5].

// const numbers = [1, 2, 3, 1, 2, 4, 5];
// const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
// console.log(uniqueNumbers);

// Output: [ 1, 2, 3, 4, 5 ]
// // ===============================================================================================
// q.33.Use map to generate an array of lengths of each word in ["apple", "banana", "cherry"].

// const words = ["apple", "banana", "cherry"];
// const lengths = words.map(word => word.length);
// console.log(lengths);

// Output: [ 5, 6, 6 ]
// // ===============================================================================================
// q.34.Use findIndex to locate the index of the first number divisible by 7 in [14, 28, 35, 21].

// const numbers = [14, 28, 35, 21];
// const firstDivisibleBySeven = numbers.findIndex(num => num % 7 === 0);
// console.log(firstDivisibleBySeven);

// Output: 0
// // ===============================================================================================
// q.35.Use some to check if the array ["apple", "banana", "grape"] contains the word "banana".

// const fruits = ["apple", "banana", "grape"];
// const containsBanana = fruits.some(fruit => fruit === "banana");
// console.log(containsBanana);

// Output: true
// // ===============================================================================================
// q.36.Use reduce to count the occurrences of each character in the string "hello world".

// const str = "hello world";
// const charCount = str.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});
// console.log(charCount);

// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// // ===============================================================================================
// q.37.Use sort to sort an array of objects by age [{age: 30}, {age: 25}, {age: 35}].

// const people = [{age: 30}, {age: 25}, {age: 35}];
// const sortedByAge = people.sort((a, b) => a.age - b.age);
// console.log(sortedByAge);

// Output: [ { age: 25 }, { age: 30 }, { age: 35 } ]
// // ===============================================================================================
// q.38.Use filter to get people older than 25 from [{age: 20}, {age: 30}, {age: 40}].

// const people = [{age: 20}, {age: 30}, {age: 40}];
// const olderThanTwentyFive = people.filter(person => person.age > 25);
// console.log(olderThanTwentyFive);

// Output: [ { age: 30 }, { age: 40 } ]
// // ===============================================================================================
// q.39.Use map to create a new array of full names from [{first: "John", last: "Doe"}].

// const people = [{first: "John", last: "Doe"}];
// const fullNames = people.map(person => `${person.first} ${person.last}`);
// console.log(fullNames);

// Output: [ 'John Doe' ]
// // ===============================================================================================
// q.40.Use reduce to calculate the total price from an array of objects [{price: 10}, {price: 20}].

// const items = [{price: 10}, {price: 20}];
// const totalPrice = items.reduce((total, item) => total + item.price, 0);
// console.log(totalPrice);

// Output: 30
// // ===============================================================================================
// q.41.Use find to get the object where the id is 3 from [{id: 1}, {id: 3}, {id: 5}].

// const objects = [{id: 1}, {id: 3}, {id: 5}];
// const objectWithId3 = objects.find(obj => obj.id === 3);
// console.log(objectWithId3);

// Output: { id: 3 }
// // ===============================================================================================
// q.42.Use filter to get all the even numbers squared from [1, 2, 3, 4, 5].

// const numbers = [1, 2, 3, 4, 5];
// const evenSquares = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
// console.log(evenSquares);

// Output: [ 4, 16 ]
// // ===============================================================================================
// q.43.Use sort to arrange strings by length ["short", "longer", "longest"].

// const strings = ["short", "longer", "longest"];
// const sortedByLength = strings.sort((a, b) => a.length - b.length);
// console.log(sortedByLength);

// Output: [ 'short', 'longer', 'longest' ]
// // ===============================================================================================
// q.44.Use reduce to implement a custom map function.
// // ===============================================================================================
// q.45.Use every to check if all objects in [{age: 25}, {age: 30}] are above 20.

// const people = [{age: 25}, {age: 30}];
// const allAboveTwenty = people.every(person => person.age > 20);
// console.log(allAboveTwenty);

// Output: true
// // ===============================================================================================
// q.46.Use map to extract the domains from emails ["user1@domain.com", "user2@site.net"].

// const emails = ["user1@domain.com", "user2@site.net"];
// const domains = emails.map(email => email.split("@")[1]);
// console.log(domains);

// Output: [ 'domain.com', 'site.net' ]
// // ===============================================================================================
// q.47.Use findIndex to get the index of the first number greater than 10 in [2, 8, 11, 15].

// const numbers = [2, 8, 11, 15];
// const firstGreaterThanTenIndex = numbers.findIndex(num => num > 10);
// console.log(firstGreaterThanTenIndex);

// Output: 2
// // ===============================================================================================
// q.48.Use reduce to reverse a string "javascript".

// const str = "javascript";
// const reversedStr = str.split("").reduce((acc, char) => char + acc, "");
// console.log(reversedStr);

// Output: tpircsavaj
// // ===============================================================================================
// q.49.Use filter to keep only positive numbers from [-10, 20, -30, 40, 50].

// const numbers = [-10, 20, -30, 40, 50];
// const positiveNumbers = numbers.filter(num => num > 0);
// console.log(positiveNumbers);

// Output: [ 20, 40, 50 ]
// // ===============================================================================================
// q.50.Use some to determine if the array [NaN, 5, 10] contains NaN.

// const array = [NaN, 5, 10];
// const containsNaN = array.some(value => isNaN(value));
// console.log(containsNaN);

// Output: true
// // ===============================================================================================
// q.51.Use map to remove vowels from an array of strings ["apple", "banana"].
// // ===============================================================================================
// q.52.Use sort to sort an array of dates ["2024-10-01", "2022-03-01"] chronologically.

// const dates = ["2024-10-01", "2022-03-01"];
// const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));
// console.log(sortedDates);

// Output: [ '2022-03-01', '2024-10-01' ]
// // ===============================================================================================
// q.53.Use reduce to implement a basic factorial calculation.
// // ===============================================================================================
// q.54.Use filter to extract words containing only vowels from ["eye", "sky", "tooth"].
// // ===============================================================================================
// q.55.Use find to get the first palindrome in ["car", "madam", "racecar"].

// const words = ["car", "madam", "racecar"];
// const firstPalindrome = words.find(word => word === word.split("").reverse().join(""));
// console.log(firstPalindrome);

// Output: madam
// // ===============================================================================================
// q.56.Use map to transform each number in [1, 2, 3] to its English word equivalent.

// const numbers = [1, 2, 3];
// const words = ["one", "two", "three"];
// const numberWords = numbers.map(num => words[num - 1]);
// console.log(numberWords);

// Output: [ 'one', 'two', 'three' ]
// // ===============================================================================================
// q.57.Use reduce to implement a custom filter function.
// // ===============================================================================================
// q.58.Use sort to arrange an array of objects by the length of their name property.

// const people = [{name: "pushpendra"}, {name: "prajjal"}, {name: "nikhil"}];
// const sortedByNameLength = people.sort((a, b) => a.name.length - b.name.length);
// console.log(sortedByNameLength);

// Output: [ { name: 'nikhil' }, { name: 'prajjal' }, { name: 'pushpendra' } ]
// // ===============================================================================================
// q.59.Use some to check if any string in ["123", "abc", "45"] contains only numbers.
// // ===============================================================================================
// q.60.Use every to validate that all elements in [{id: 1}, {id: 2}] have an id property.

// const objects = [{id: 1}, {id: 2}];
// const allHaveId = objects.every(obj => obj.hasOwnProperty("id"));
// console.log(allHaveId);

// Output: true
// // ===============================================================================================