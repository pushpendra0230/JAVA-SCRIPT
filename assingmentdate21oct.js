// java script assignment date 21 oct 2024........................
// ====================================================================================================
// q.1. 
//    function processArray(arr, callback) {
//        return arr.map(callback);
//    }
//    console.log(processArray([1, 2, 3], x => x * 2));
   
// Output: ?

// [ 2, 4, 6 ]

// Explanation:-
// Yah processArray function ek array aur ek callback function ko leta hai. Callback function har ek element par lagta hai aur naya array banata hai.
// Iss example mein, callback function har element ko 2 se multiply karta hai. Jab aap [1, 2, 3] array ko is function mein dete hain, to output [2, 4, 6] milta hai, kyunki:
// 1 ko 2 se multiply karte hain, jo 2 hota hai.
// 2 ko 2 se multiply karte hain, jo 4 hota hai.
// 3 ko 2 se multiply karte hain, jo 6 hota hai.
// Yah output input array ke har element ko 2 se multiply karke aata h.
// ====================================================================================================
// q.2. 
//    function calculate(a, b, callback) {
//        return callback(a, b);
//    }
//    console.log(calculate(5, 3, (x, y) => x + y));
   
// Output: ?

// 8

// Explanation:-
// Yah calculate function do numbers a aur b, aur ek callback function leta hai. Callback function a aur b par lagu hota hai.
// Callback Function:
// Is example mein, callback function x aur y ko jodta hai.
// Function Call:
// Jab calculate(5, 3, (x, y) => x + y) call karte hai, to 5 aur 3 ko jodkar 8 milta hai.
// Isliye, output hoga 8.
// ====================================================================================================
// q.3. 
//    function filterArray(arr, callback) {
//        return arr.filter(callback);
//    }
//    console.log(filterArray([10, 20, 30, 40], x => x > 25));
   
// Output: ?

// [ 30, 40 ]

// Explanation:-
// Yah filterArray function ek array arr aur ek callback function ko leta hai. Callback function array ke har element par lagu hota hai.
// Callback Function:
// Is example mein, callback function x > 25 ko use karta hai.
// Function Call:
// Jab filterArray([10, 20, 30, 40], x => x > 25) call kiya jaata hai, to filter method un elements ko chunta hai jo condition ko satisfy karte hain.
// Output:
// Isliye, output [30, 40] hai, jo un elements ka array hai jo 25 se bade hain.
// ====================================================================================================
// q.4. 
//    function greetUser(name, callback) {
//        return callback(`Hello, ${name}!`);
//    }
//    console.log(greetUser("Alice", message => message));
   
// Output: ?

// Hello, Alice!

// Explanation:-
// Yah greetUser function ek name aur ek callback function ko leta hai. Callback function greeting message par lagta hai.
// Greeting Message:
// Function ke andar, callback ko Hello, ${name}! pass kiya jaata hai.
// Function Call:
// Jab greetUser("Alice", message => message) call kiya jaata hai, to callback Hello, Alice! ko return karta hai.
// Output:
// Isliye, output Hello, Alice! hota hai.
// ====================================================================================================
// q.5. 
//    function doubleArray(arr, callback) {
//        return arr.map(callback);
//    }
//    console.log(doubleArray([1, 2, 3, 4], x => x * 2));
   
// Output: ?

// [ 2, 4, 6, 8 ]

// Explanation:-
// Yah doubleArray function ek array arr aur ek callback function ko leta hai. Callback function array ke har element par lagu hota hai.
// Function Definition:
// doubleArray function arr.map(callback) ka use karta hai, jo har element par callback function ko apply karta hai.
// Callback Function:
// Is example mein, callback function x * 2 har element ko 2 se multiply karta hai.
// Function Call:
// Jab doubleArray([1, 2, 3, 4], x => x * 2) call kiya jaata hai, to array ke elements ko 2 se multiply kiya jaata hai.
// Output:
// Isliye, output [2, 4, 6, 8] hota hai.
// ====================================================================================================
// q.6. 
//    function findMin(arr, callback) {
//        return callback(Math.min(...arr));
//    }
//    console.log(findMin([5, 10, 1, 3], min => min));
   
// Output: ?

// 1

// Explanation:-
// Yah findMin function ek array arr aur ek callback function ko leta hai. Callback function minimum value par lagta hai.
// Minimum Value:
// Function ke andar, Math.min(...arr) ka istemal karke array ka minimum element ko liya jaata hai.
// Function Call:
// Jab findMin([5, 10, 1, 3], min => min) call kiya jaata hai, to Math.min(...arr) se 1 milta hai.
// Output:
// Isliye, output 1 hota hai, jo array ke sabse chhote element ka value hai.
// ====================================================================================================
// q.7. 
//    function sum(a, b, callback) {
//        return callback(a + b);
//    }
//    console.log(sum(10, 5, result => result * 2));
   
// Output: ?

// 30

// Explanation:-
// Yah sum function do numbers a aur b, aur ek callback function ko leta hai. Callback function sum par lagta hai.
// Sum Calculation:
// Function ke andar, a + b ka calculation hota hai.
// Function Call:
// Jab sum(10, 5, result => result * 2) call kiya jaata hai, to pehle 10 + 5 se 15 milta hai.
// Callback Function:
// Callback function result => result * 2 is 15 par lagta hai, jo 15 * 2 karke 30 return karta hai.
// Output:
// Isliye, output 30 hota hai, jo sum ka double hai.
// ====================================================================================================
// q.8. 
//    function processStrings(arr, callback) {
//        return arr.map(callback);
//    }
//    console.log(processStrings(["hello", "world"], str => str.toUpperCase()));
   
// Output: ?

// [ 'HELLO', 'WORLD' ]

// Explanation:-
// Yah processStrings function ek array arr aur ek callback function ko leta hai. Callback function array ke har string par lagu hota hai.
// Function Definition:
// processStrings function arr.map(callback) ka istemal karta hai, jo har ek string par callback function ko apply karta hai.
// Callback Function:
// Is example mein, callback function str => str.toUpperCase() har string ko uppercase mein badalta hai.
// Function Call:
// Jab processStrings(["hello", "world"], str => str.toUpperCase()) call kiya jaata hai, to array ke elements ko uppercase mein badla jaata hai.
// Output:
// Isliye, output ['HELLO', 'WORLD'] hota hai.
// ====================================================================================================
// q.9. 
//    function countVowels(str, callback) {
//        const count = str.match(/[aeiou]/gi)?.length || 0;
//        return callback(count);
//    }
//    console.log(countVowels("hello world", count => count));
   
// Output: ?

// 3

// Explanation:-
// Yah countVowels function ek string str aur ek callback function ko leta hai. Callback function vowel count par lagta hai.
// Vowel Counting:
// Function ke andar, str.match(/[aeiou]/gi) se string mein vowels ka count kiya jaata hai. Agar koi vowels nahi milte, to count 0 set hota hai.
// Function Call:
// Jab countVowels("hello world", count => count) call kiya jaata hai, to hello world mein vowels e, o, aur o hain, jo total 3 hote hain.
// Callback Function:
// Callback function count => count is count par lagta hai, jo simply 3 return karta hai.
// Output:
// Isliye, output 3 hota hai.
// ====================================================================================================
// q.10. 
//     function getFirstElement(arr, callback) {
//         return callback(arr[0]);
//     }
//     console.log(getFirstElement([1, 2, 3], el => el * 2));
    
// Output: ?

// 2

// Explanation:-
// Yah getFirstElement function ek array arr aur ek callback function ko leta hai. Callback function array ke pehle element par lagta hai.
// First Element:
// Function ke andar, arr[0] se array ka pehla element milta hai, jo is case mein 1 hai.
// Function Call:
// Jab getFirstElement([1, 2, 3], el => el * 2) call kiya jaata hai, to callback function ko pehle element 1 par apply kiya jaata hai.
// Callback Function:
// Callback function el => el * 2 is 1 par lagu hota hai, jo 1 * 2 karke 2 return karta hai.
// Output:

// Isliye, output 2 hota hai, jo array ke pehle element ka double hai.
// ====================================================================================================
// q.11. 
//     function findIndex(arr, value, callback) {
//         const index = arr.indexOf(value);
//         return callback(index);
//     }
//     console.log(findIndex([10, 20, 30], 20, idx => idx));
    
// Output: ?

// 1

// Explanation:-
// Yah findIndex function ek array arr, ek value, aur ek callback function ko leta hai. Callback function index par lagta hai.
// Index Finding:
// Function ke andar, arr.indexOf(value) ka istemal karke diya gaya value ka index milta hai. Is case mein, 20 ka index 1 hai.
// Function Call:
// Jab findIndex([10, 20, 30], 20, idx => idx) call kiya jaata hai, to index variable mein 1 store hota hai.
// Callback Function:
// Callback function idx => idx is index par lagu hota hai, jo simply 1 return karta hai.
// Output:
// Isliye, output 1 hota hai, jo array mein 20 ka index hai.
// ====================================================================================================
// q.12. 
//     function mergeStrings(arr1, arr2, callback) {
//         return callback([...arr1, ...arr2]);
//     }
//     console.log(mergeStrings(["a", "b"], ["c", "d"], arr => arr.join(",")));
    
// Output: ?

// a,b,c,d

// Explanation:-
// Yah mergeStrings function do arrays arr1 aur arr2, aur ek callback function ko leta hai. Callback function merged array par lagta hai.
// Array Merging:
// Function ke andar, [...arr1, ...arr2] ka istemal karke dono arrays ko merge kiya jaata hai. Is case mein, ["a", "b"] aur ["c", "d"] ko milakar ["a", "b", "c", "d"] milta hai.
// Function Call:
// Jab mergeStrings(["a", "b"], ["c", "d"], arr => arr.join(",")) call kiya jaata hai, to merged array ko callback function arr => arr.join(",") par pass kiya jaata hai.
// Callback Function:
// Callback function arr.join(",") merged array ko comma se join karke ek string banaata hai, jo a,b,c,d hota hai.
// Output:
// Isliye, output a,b,c,d hota hai
// ====================================================================================================
// q.13. 
//     function multiplyNumbers(arr, factor, callback) {
//         return callback(arr.map(num => num * factor));
//     }
//     console.log(multiplyNumbers([1, 2, 3], 3, result => result.reduce((a, b) => a + b)));
    
// Output: ?

// 18

// Explanation:-
// Yah multiplyNumbers function ek array arr, ek factor, aur ek callback function ko leta hai. Callback function multiplied array par lagta hai.
// Array Multiplication:
// Function ke andar, arr.map(num => num * factor) ka istemal karke har element ko diya gaya factor se multiply kiya jaata hai. Is case mein, [1, 2, 3] ko 3 se multiply karne par [3, 6, 9] milta hai.
// Function Call:
// Jab multiplyNumbers([1, 2, 3], 3, result => result.reduce((a, b) => a + b)) call kiya jaata hai, to multiplied array result ko callback function par pass kiya jaata hai.
// Callback Function:
// Callback function result.reduce((a, b) => a + b) is array ke sabhi elements ka sum karta hai, jo 3 + 6 + 9 karke 18 hota hai.
// Output:
// Isliye, output 18 hota hai, jo multiplied array ka total hai.
// ====================================================================================================
// q.14. 
//     function checkEven(num, callback) {
//         return callback(num % 2 === 0);
//     }
//     console.log(checkEven(4, isEven => isEven ? "Even" : "Odd"));
    
// Output: ?

// Even

// Explanation:-
// Yah checkEven function ek number num aur ek callback function ko leta hai. Callback function number ki evenness par lagta hai.
// Even Check:
// Function ke andar, num % 2 === 0 se check kiya jaata hai ki num even hai ya nahi. Is case mein, 4 even hai, isliye expression true return hota hai.
// Function Call:
// Jab checkEven(4, isEven => isEven ? "Even" : "Odd") call kiya jaata hai, to callback function ko true pass kiya jaata hai.
// Callback Function:
// Callback function isEven => isEven ? "Even" : "Odd" check karta hai. Kyunki isEven true hai, ye "Even" return karta hai.
// Output:
// Isliye, output "Even" hota hai.
// ====================================================================================================
// q.15. 
//     function filterShortStrings(arr, maxLength, callback) {
//         return callback(arr.filter(str => str.length <= maxLength));
//     }
//     console.log(filterShortStrings(["apple", "banana", "pear"], 5, result => result));
    
// Output: ?

// [ 'apple', 'pear' ]

// Explanation:-
// Yah filterShortStrings function ek array arr, ek maxLength, aur ek callback function ko leta hai. Callback function filtered array par lagta hai.
// String Filtering:
// Function ke andar, arr.filter(str => str.length <= maxLength) ka istemal karke un strings ko filter kiya jaata hai jinki length maxLength se kam ya barabar hoti hai. Is case mein, "apple" aur "pear" ki length 5 se chhoti ya barabar hai, isliye ye strings filter hoti hain.
// Function Call:
// Jab filterShortStrings(["apple", "banana", "pear"], 5, result => result) call kiya jaata hai, to filtered array [ 'apple', 'pear' ] callback function ko pass kiya jaata hai.
// Callback Function:
// Callback function result => result simply filtered array ko return karta hai.
// Output:
// Isliye, output [ 'apple', 'pear' ] hota hai, jo un strings ka array hai jo specified length se chhote ya barabar h.
// ====================================================================================================
// q.16. 
//     function generateRandomNumbers(count, callback) {
//         const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
//         return callback(numbers);
//     }
//     console.log(generateRandomNumbers(5, nums => nums));
    
// Output: ?

// [ 67, 59, 94, 8, 72 ]

// Explanation:-
// Yah generateRandomNumbers function ek count aur ek callback function ko leta hai. Callback function randomly generated numbers par lagu hota hai.
// Random Number Generation:
// Function ke andar, Array.from({ length: count }, () => Math.floor(Math.random() * 100)) ka istemal karke count number of random integers generate kiye jaate hain jo 0 se 99 ke beech hote hain.
// Function Call:
// Jab generateRandomNumbers(5, nums => nums) call kiya jaata hai, to ye 5 random numbers generate karta hai, jaise ki [67, 59, 94, 8, 72].
// Callback Function:
// Callback function nums => nums generated numbers ko return karta hai.
// Output:
// Isliye, output [67, 59, 94, 8, 72] hota hai, jo randomly generated 5 numbers ka array hai.
// ====================================================================================================
// q.17. 
//     function getObjectKeys(obj, callback) {
//         return callback(Object.keys(obj));
//     }
//     console.log(getObjectKeys({ a: 1, b: 2 }, keys => keys.join(", ")));
    
// Output: ?

// a, b

// Explanation:-
// Yah getObjectKeys function ek object obj aur ek callback function ko leta hai. Callback function object ke keys par lagta hai.
// Keys Extraction:
// Function ke andar, Object.keys(obj) ka istemal karke object obj ke keys ko prapt kiya jaata hai. Is case mein, { a: 1, b: 2 } ke keys ['a', 'b'] hote hain.
// Function Call:
// Jab getObjectKeys({ a: 1, b: 2 }, keys => keys.join(", ")) call kiya jaata hai, to extracted keys ko callback function par pass kiya jaata hai.
// Callback Function:
// Callback function keys => keys.join(", ") keys array ko comma se join karke ek string banaata hai, jo a, b hota hai.
// Output:
// Isliye, output a, b hota hai, jo object ke keys ka comma-separated string representation hai.
// ===================================================================================================