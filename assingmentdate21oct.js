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
// Function ke andar, Object.keys(obj) ka istemal karke object obj ke keys ko liya jata hai. Is case mein, { a: 1, b: 2 } ke keys ['a', 'b'] hote hain.
// Function Call:
// Jab getObjectKeys({ a: 1, b: 2 }, keys => keys.join(", ")) call kiya jaata hai, to extracted keys ko callback function par pass kiya jaata hai.
// Callback Function:
// Callback function keys => keys.join(", ") keys array ko comma se join karke ek string banaata hai, jo a, b hota hai.
// Output:
// Isliye, output a, b hota hai, jo object ke keys ka comma-separated string representation hai.
// ===================================================================================================
// q.18. 
//     function getObjectValues(obj, callback) {
//         return callback(Object.values(obj));
//     }
//     console.log(getObjectValues({ a: 1, b: 2 }, values => values.reduce((a, b) => a + b)));
    
// Output: ?

// 3

// Explanation:-
// Function getObjectValues:
// Ek object obj aur ek callback function ko input leta hai.
// Extract Values:
// Object.values(obj) ka use karke object { a: 1, b: 2 } ke values [1, 2] extract kiye jaate hain.
// Callback Function:
// Callback function values.reduce((a, b) => a + b) ko array [1, 2] par apply kiya jaata hai, jo values ko jodta hai.
// Pehla aur akhri iteration: 1 + 2 = 3.
// Final Output:
// Callback function se return value 3 hoti hai, jo console pe print hoti hai.
// ===================================================================================================
// q.19. 
//     function capitalizeWords(arr, callback) {
//         return callback(arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)));
//     }
//     console.log(capitalizeWords(["hello", "world"], words => words.join(" ")));
    
// Output: ?

// Hello World

// Explanation:-
// Function capitalizeWords:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// map Method:
// arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)) har word ke first letter ko uppercase mein convert karta hai aur baaki word ko same rakhta hai.
// Example: "hello" becomes "Hello", and "world" becomes "World".
// Callback Function:
// Callback function words.join(" ") capitalized words ko join karta hai, aur ek string banata hai: "Hello World".
// Final Output:
// Callback function se "Hello World" return hota hai, jo console pe print hota hai.
// ===================================================================================================
// q.20. 
//     function createFullName(first, last, callback) {
//         return callback(`${first} ${last}`);
//     }
//     console.log(createFullName("John", "Doe", name => name));
    
// Output: ?

// John Doe

// Explanation:-
// Function createFullName:
// Yeh function do arguments first aur last (first name aur last name) ko leta hai, aur ek callback function ko pass karta hai.
// String Interpolation:
// Backticks (${first} ${last}) ka use karke, first aur last name ko concatenate karke ek full name banaata hai, jaise "John Doe".
// Callback Function:
// Callback function name => name full name ko simply return karta hai bina kisi modification ke.
// Final Output:
// "John Doe" console pe print hota hai, jo full name hai.
// ===================================================================================================
// q.21. 
//     function isPrime(num, callback) {
//         const prime = num > 1 && [...Array(num).keys()].slice(2).every(n => num % n !== 0);
//         return callback(prime);
//     }
//     console.log(isPrime(7, result => result ? "Prime" : "Not Prime"));
    
// Output: ?

// Prime

// Explanation:-
// Function isPrime:
// Yeh function ek number num aur ek callback function ko input leta hai.
// Prime Check Logic:
// num > 1 ensures ke number 1 se bada hai.
// [...Array(num).keys()].slice(2) se number tak ek array banayi jaati hai, jisme numbers 2 se lekar num - 1 tak ke numbers hote hain.
// .every(n => num % n !== 0) ye check karta hai ki number num ko 2 se lekar num - 1 tak ke kisi bhi number se divide karne par remainder 0 na ho. Agar remainder 0 hota hai, to number prime nahi hota.
// Callback Function:
// Agar prime true hota hai, to callback function "Prime" return karta hai; agar false hota hai to "Not Prime" return hota.
// Final Output:
// Since 7 ek prime number hai, result "Prime" console pe print hota hai.
// ===================================================================================================
// q.22. 
//     function findLongestWord(arr, callback) {
//         const longest = arr.reduce((a, b) => a.length > b.length ? a : b);
//         return callback(longest);
//     }
//     console.log(findLongestWord(["cat", "elephant", "dog"], word => word));
    
// Output: ?

// elephant

// Explanation:-
// Function findLongestWord:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Longest Word Dhoondne ka Logic:
// .reduce() method ka istemal karke array ke har word ko compare kiya jata hai.
// Ye check karta hai ki kaunsa word sabse lamba hai aur usse longest word ke roop mein rakhta hai.
// Callback Function:
// Jab longest word mil jata hai, ye callback function ko call karta hai, jisme longest word ko argument ke roop mein pass karta hai.
// Final Output:
// Diye gaye array ["cat", "elephant", "dog"] ke liye, longest word "elephant" hai.
// Isliye, console par result "elephant" print hota hai.
// ===================================================================================================
// q.23. 
//     function doubleNumbers(arr, callback) {
//         return callback(arr.map(num => num * 2));
//     }
//     console.log(doubleNumbers([1, 2, 3], nums => nums.join(", ")));
    
// Output: ?

// 2, 4, 6

// Explanation:-
// Function doubleNumbers:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Numbers ko Double Karne ka Logic:
// arr.map(num => num * 2) ki wajh se array ke har number ko 2 se guna kiya jata hai, jo ek naya array banata hai.
// Callback Function:
// Naye array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, 2, 3] ke liye, naye array [2, 4, 6] banta hai.
// Callback function nums.join(", ") se result "2, 4, 6" ke roop mein console par print hota hai.
// ===================================================================================================
// q.24. 
//     function findSquare(num, callback) {
//         return callback(num * num);
//     }
//     console.log(findSquare(4, square => square));
    
// Output: ?

// 16

// Explanation:-
// Function findSquare:
// Yeh function ek number num aur ek callback function ko input leta hai.
// Square Dhoondne ka Logic:
// Function num * num se number ka square calculate karta hai.
// Callback Function:
// Square value ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye number 4 ke liye, square 16 hota hai.
// ===================================================================================================
// q.25. 
//     function splitString(str, callback) {
//         return callback(str.split(" "));
//     }
//     console.log(splitString("Hello World", arr => arr.length));
    
// Output: ?

// 2

// Explanation:-
// Function splitString:
// Yeh function ek string str aur ek callback function ko input leta hai.
// String ko Split Karne ka Logic:
// Function str.split(" ") se string ko space ke basis par split karke ek array banata hai.
// Callback Function:
// Naye array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye string "Hello World" ke liye, array ["Hello", "World"] banta hai.
// Callback function arr.length se array ki length 2 hoti hai.
// Isliye, console par result 2 print hota hai.
// ===================================================================================================
// q.26. 
//     function countWordsInSentence(sentence, callback) {
//         const count = sentence.split(" ").length;
//         return callback(count);
//     }
//     console.log(countWordsInSentence("This is a test", count => count));
    
// Output: ?

// 4

// Explanation:-
// Function countWordsInSentence:
// Yeh function ek string sentence aur ek callback function ko input leta hai.
// Sentence Mein Words Gine Ka Logic:
// Function sentence.split(" ") se sentence ko space ke basis par split karke ek array banata hai aur us array ki length ko count karta hai.
// Callback Function:
// Count value ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye sentence "This is a test" ke liye, words ki count 4 hoti hai.
// Isliye, console par result 4 print hota hai.
// ===================================================================================================
// q.27. 
//     function convertToArray(obj, callback) {
//         return callback(Object.entries(obj));
//     }
//     console.log(convertToArray({ a: 1, b: 2 }, arr => arr.length));
    
// Output: ?

// 2

// Explanation:-
// Function convertToArray:
// Yeh function ek object obj aur ek callback function ko input leta hai.
// Object ko Array Mein Convert Karne ka Logic:
// Function Object.entries(obj) se object ke key-value pairs ko ek array of arrays mein convert karta hai.
// Callback Function:
// Naye array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye object { a: 1, b: 2 } ke liye, array [['a', 1], ['b', 2]] banta hai.
// Callback function arr.length se array ki length 2 hoti hai.
// Isliye, console par result 2 print hota hai.
// ===================================================================================================
// q.28. 
//     function getFirstChar(str, callback) {
//         return callback(str.charAt(0));
//     }
//     console.log(getFirstChar("", char => char));
    
// Output: ?


// Explanation:-
// Function getFirstChar:
// Yeh function ek string str aur ek callback function ko input leta hai.
// First Character Dhoondne ka Logic:
// Function str.charAt(0) se string ke pehle character ko prapt karta hai.
// Callback Function:
// Pehle character ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye string "" (khali string) ke liye, pehla character nahi hota.
// Isliye, console par result "" (khali string) print hota hai.
// ===================================================================================================
// q.29. 
//     function filterPositiveNumbers(arr, callback) {
//         return callback(arr.filter(num => num > 0));
//     }
//     console.log(filterPositiveNumbers([-1, 0, 2, 3], nums => nums));
    
// Output: ?

// [ 2, 3 ]

// Explanation:-
// Function filterPositiveNumbers:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Positive Numbers Filter Karne ka Logic:
// Function arr.filter(num => num > 0) se array ke sirf positive numbers ko filter karta hai.
// Callback Function:
// Filtered array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [-1, 0, 2, 3] ke liye, filtered array [2, 3] banta hai.
// Isliye, console par result [2, 3] print hota hai.
// ===================================================================================================
// q.30. 
//     function extractNumbers(arr, callback) {
//         return callback(arr.filter(el => typeof el === "number"));
//     }
//     console.log(extractNumbers([1, "two", 3], nums => nums));
    
// Output: ?

// [ 1, 3 ]

// Explanation:-
// Function extractNumbers:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Numbers Extract Karne ka Logic:
// Function arr.filter(el => typeof el === "number") se array mein se sirf numbers ko filter karta hai.
// Callback Function:
// Filtered array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, "two", 3] ke liye, filtered array [1, 3] banta hai.
// Isliye, console par result [1, 3] print hota hai.
// ===================================================================================================
// q.31. 
//     function checkStringLength(str, maxLength, callback) {
//         return callback(str.length <= maxLength);
//     }
//     console.log(checkStringLength("Hello", 5, isValid => isValid ? "Valid" : "Too long"));
    
// Output: ?

// Valid

// Explanation:-
// Function checkStringLength:
// Yeh function ek string str, ek maximum length maxLength, aur ek callback function ko input leta hai.
// String Length Check Karne ka Logic:
// Function str.length <= maxLength se check karta hai ki string ki length maximum length se chhoti ya barabar hai ya nahi.
// Callback Function:
// Boolean result ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye string "Hello" aur maximum length 5 ke liye, string ki length 5 hoti hai, jo valid hai.
// Isliye, console par result "Valid" print hota hai.
// ===================================================================================================
// q.32. 
//     function getObjectEntries(obj, callback) {
//         return callback(Object.entries(obj));
//     }
//     console.log(getObjectEntries({ a: 1, b: 2 }, entries => entries.length));
    
// Output: ?

// 2

// Explanation:-
// Function getObjectEntries:
// Yeh function ek object obj aur ek callback function ko input leta hai.
// Object Entries Dhoondne ka Logic:
// Function Object.entries(obj) se object ke key-value pairs ko ek array of arrays mein convert karta hai.
// Callback Function:
// Naye array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye object { a: 1, b: 2 } ke liye, array [['a', 1], ['b', 2]] banta hai.
// Callback function entries.length se array ki length 2 hoti hai.
// Isliye, console par result 2 print hota hai.
// ===================================================================================================
// q.33. 
//     function countDown(num, callback) {
//         while (num > 0) {
//             callback(num);
//             num--;
//         }
//     }
//     countDown(3, n => console.log(n));
    
// Output: ?

// 3
// 2
// 1

// Explanation:-
// Function countDown:
// Yeh function ek number num aur ek callback function ko input leta hai.
// Countdown Karne ka Logic:
// while (num > 0) loop ka istemal karke function num ko 0 se chhota hone tak decrement karta hai.
// Har iteration mein, current value of num ko callback function ko pass karta hai.
// Callback Function:
// Callback function n => console.log(n) se current number ko console par print kiya jata hai.
// Final Output:
// Diye gaye number 3 ke liye, output console par hoga:-
// 3
// 2
// 1
// ===================================================================================================
// q.34. 
//     function addElements(arr, callback) {
//         const sum = arr.reduce((a, b) => a + b, 0);
//         return callback(sum);
//     }
//     console.log(addElements([1, 2, 3, 4], total => total));
    
// Output: ?

// 10

// Explanation:-
// Function addElements:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Elements Ka Sum Dhoondne ka Logic:
// Function arr.reduce((a, b) => a + b, 0) se array ke saare elements ka sum calculate karta hai.
// Callback Function:
// Total sum ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, 2, 3, 4] ke liye, sum 10 hota hai.
// Isliye, console par result 10 print hota hai.
// ===================================================================================================
// q.35. 
//     function getCharCode(char, callback) {
//         return callback(char.charCodeAt(0));
//     }
//     console.log(getCharCode("A", code => code));
    
// Output: ?

// 65

// Explanation:-
// Function getCharCode:
//  Yeh function ek character char aur ek callback function ko input leta hai.
// Character Code Dhoondne ka Logic:
//  char.charCodeAt(0) se character ka ASCII code calculate hota hai.
// Callback Function:
//  Code ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
//  "A" ka ASCII code 65 hota hai, isliye console par result 65 print hota hai.
// ===================================================================================================
// q.36. 
//     function createArray(length, callback) {
//         return callback(Array.from({ length }, (_, i) => i + 1));
//     }
//     console.log(createArray(5, arr => arr));
    
// Output: ?

// [ 1, 2, 3, 4, 5 ]

// Explanation:-
// Function createArray:
//  Yeh function ek length aur ek callback function ko input leta hai.
// Array Banane ka Logic:
//  Array.from({ length }, (_, i) => i + 1) se 1 se lekar length tak ke consecutive numbers se array banti hai.
// Callback Function:
//  Ye array callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
//  Length 5 ke liye array [1, 2, 3, 4, 5] banti hai, aur console par print hoti hai.
// ===================================================================================================
// q.37. 


//     function getMax(arr, callback) {
//         return callback(Math.max(...arr));
//     }
//     console.log(getMax([1, 2, 3], max => max));
    
// Output: ?

// 3

// Explanation:-
// Function getMax:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Maximum Value Dhoondne ka Logic:
// Math.max(...arr) se array ke saare elements me se maximum value milti hai.
// Callback Function:
// Maximum value ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, 2, 3] ke liye maximum value 3 hoti hai, jo console par print hoti hai.
// ===================================================================================================
// q.38. 
//     function getMin(arr, callback) {
//         return callback(Math.min(...arr));
//     }
//     console.log(getMin([10, 20, 5], min => min));
    
// Output: ?

// 5

// Explanation:-
// Function getMin:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Minimum Value Dhoondne ka Logic:
// Math.min(...arr) se array ke saare elements me se minimum value milti hai.
// Callback Function:
// Minimum value ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [10, 20, 5] ke liye minimum value 5 hoti hai, jo console par print hoti hai.
// ===================================================================================================
// q.39. 
//     function sortDescending(arr, callback) {
//         return callback(arr.sort((a, b) => b - a));
//     }
//     console.log(sortDescending([5, 3, 8], arr => arr));
    
// Output: ?

// [ 8, 5, 3 ]

// Explanation:-
// Function sortDescending:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Descending Order Mein Sort Karne ka Logic:
// arr.sort((a, b) => b - a) se array ko descending order mein sort kiya jata hai.
// Callback Function:
// Sorted array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [5, 3, 8] ke liye sorted array [8, 5, 3] hoti hai, jo console par print hoti hai.
// ===================================================================================================
// q.40. 
//     function checkPalindrome(str, callback) {
//         const isPalindrome = str === str.split("").reverse().join("");
//         return callback(isPalindrome);
//     }
//     console.log(checkPalindrome("madam", result => result ? "Palindrome" : "Not Palindrome"));
    
// Output: ?

// Palindrome

// Explanation:-
// Function checkPalindrome:
// Yeh function ek string str aur ek callback function ko input leta hai.
// Palindrome Check Karne ka Logic:
// str === str.split("").reverse().join("") se check kiya jata hai ki string apne aap se barabar hai ya nahi.
// Callback Function:
// Result ko callback function ko pass kiya jata hai, jo "Palindrome" ya "Not Palindrome" return karta hai.
// Final Output:
// Diye gaye string "madam" ke liye result "Palindrome" hota hai, jo console par print hota hai.
// ===================================================================================================
// q.41. 
//     function filterLongStrings(arr, minLength, callback) {
//         return callback(arr.filter(str => str.length >= minLength));
//     }
//     console.log(filterLongStrings(["short", "very long string"], 5, result => result));
    
// Output: ?

// [ 'short', 'very long string' ]

// Explanation:-
// Function filterLongStrings:
// Yeh function ek array arr, minimum length minLength, aur ek callback function ko input leta hai.
// Long Strings Filter Karne ka Logic:
// arr.filter(str => str.length >= minLength) se array se un strings ko chuna jata hai jinki length minLength se badi ya barabar hoti hai.
// Callback Function:
// Filtered array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array ["short", "very long string"] ke liye, result [ 'short', 'very long string' ] hota hai, jo console par print hota hai.
// ===================================================================================================
// q.42. 
//     function calculateAverage(arr, callback) {
//         const average = arr.reduce((a, b) => a + b, 0) / arr.length;
//         return callback(average);
//     }
//     console.log(calculateAverage([10, 20, 30], avg => avg));
    
// Output: ?

// 20

// Explanation:-
// Function calculateAverage:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Average Calculate Karne ka Logic:
// arr.reduce((a, b) => a + b, 0) / arr.length se array ke elements ka sum nikaal kar unki count se divide kiya jata hai.
// Callback Function:
// Calculated average ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [10, 20, 30] ke liye average 20 hota hai, jo console par print hota hai.
// ===================================================================================================
// q.43. 
//     function repeatString(str, times, callback) {
//         return callback(str.repeat(times));
//     }
//     console.log(repeatString("A", 5, repeated => repeated));
    
// Output: ?

// AAAAA

// Explanation:-
// Function repeatString:
// Yeh function ek string str, repeat karne ka count times, aur ek callback function ko input leta hai.
// String Ko Repeat Karne ka Logic:
// str.repeat(times) se string ko times baar repeat kiya jata hai.
// Callback Function:
// Repeated string ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye string "A" ko 5 baar repeat karne par result "AAAAA" hota hai, jo console par print hota hai.
// ===================================================================================================
// q.44. 
//     function getLastElement(arr, callback) {
//         return callback(arr[arr.length - 1]);
//     }
//     console.log(getLastElement([1, 2, 3], el => el));
    
// Output: ?

// 3

// Explanation:-
// Function getLastElement:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Last Element Dhoondne ka Logic:
// arr[arr.length - 1] se array ka last element milta hai.
// Callback Function:
// Last element ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, 2, 3] ke liye last element 3 hota hai, jo console par print hota hai.
// ===================================================================================================
// q.45. 
//     function removeWhitespace(str, callback) {
//         return callback(str.replace(/\s+/g, ''));
//     }
//     console.log(removeWhitespace("   Hello World   ", result => result));
    
// Output: ?

// HelloWorld

// Explanation:-
// Function removeWhitespace:
// Yeh function ek string str aur ek callback function ko input leta hai.
// Whitespace Remove Karne ka Logic:
// str.replace(/\s+/g, '') se string se saare whitespaces ko hata diya jata hai.
// Callback Function:
// Modified string ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye string " Hello World " se whitespace hataane par result "HelloWorld" hota hai, jo console par print hota hai.
// ===================================================================================================
// q.46. 
//     function findUnique(arr, callback) {
//         return callback([...new Set(arr)]);
//     }
//     console.log(findUnique([1, 2, 2, 3], unique => unique));
    
// Output: ?

// [ 1, 2, 3 ]

// Explanation:-
// Function findUnique:
// Yeh function ek array arr aur ek callback function ko input leta hai.
// Unique Elements Dhoondne ka Logic:
// new Set(arr) se array ke unique elements ko nikaalne ke liye Set ka istemal kiya jata hai, aur [...] se unhe phir se array me convert kiya jata hai.
// Callback Function:
// Unique elements ka array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [1, 2, 2, 3] ke liye unique elements [1, 2, 3] hote hain, jo console par print hote hain.
// ===================================================================================================
// q.47. 
//     function calculateFactorial(num, callback) {
//         const factorial = num <= 1 ? 1 : num * calculateFactorial(num - 1, () => {});
//         return callback(factorial);
//     }
//     console.log(calculateFactorial(5, fact => fact));
    
// Output: ?

// NaN

// Explanation:-
// Function calculateFactorial:
// Yeh function ek number num aur ek callback function ko input leta hai.
// Factorial Calculate Karne ka Logic:
// Recursion ka istemal karke num <= 1 hone par 1 return kiya jata hai, warna num * calculateFactorial(num - 1, () => {}) se factorial calculate hota hai.
// Callback Function:
// Calculated factorial ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye number 5 ke liye factorial calculate karne par result NaN milta hai, kyunki callback function ko sahi tarike se istemal nahi kiya gaya hai. Isse yeh pata chalta hai ki recursion me callback function ka istemal nahi kiya gaya hai.
// ===================================================================================================
// q.48. 
//     function flattenArray(arr, callback) {
//         return callback(arr.flat());
//     }
//     console.log(flattenArray([[1, 2], [3, 4]], flat => flat));
    
// Output: ?

// [ 1, 2, 3, 4 ]

// Explanation:-
// Function flattenArray:
// Yeh function ek nested array arr aur ek callback function ko input leta hai.
// Array Ko Flatten Karne ka Logic:
// arr.flat() se nested array ko ek single-level array me convert kiya jata hai.
// Callback Function:
// Flattened array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye nested array [[1, 2], [3, 4]] ko flatten karne par result [1, 2, 3, 4] hota hai, jo console par print hota hai.
// ===================================================================================================
// q.49. 
//     function getCommonElements(arr1, arr2, callback) {
//         const common = arr1.filter(value => arr2.includes(value));
//         return callback(common);
//     }
//     console.log(getCommonElements([1, 2, 3], [2, 3, 4], result => result));
    
// Output: ?

// [ 2, 3 ]

// Explanation:-
// Function getCommonElements:
// Yeh function do arrays arr1 aur arr2 aur ek callback function ko input leta hai.
// Common Elements Dhoondne ka Logic:
// arr1.filter(value => arr2.includes(value)) se arr1 ke un elements ko chuna jata hai jo arr2 me bhi maujood hain.
// Callback Function:
// Common elements ka array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye arrays [1, 2, 3] aur [2, 3, 4] ke liye common elements [2, 3] hote hain, jo console par print hote hain.
// ===================================================================================================
// q.50. 
//     function extractAges(people, callback) {
//         return callback(people.map(person => person.age));
//     }
//     const people = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
//     console.log(extractAges(people, ages => ages));
    
// Output: ?

// [ 30, 25 ]

// Explanation:-
// Function extractAges:
// Yeh function ek array people aur ek callback function ko input leta hai.
// Ages Ko Extract Karne ka Logic:
// people.map(person => person.age) se har vyakti ki age ko extract kiya jata hai aur ek naya array banaya jata hai.
// Callback Function:
// Extracted ages ka array ko callback function ko pass kiya jata hai, jo result ko handle karta hai.
// Final Output:
// Diye gaye array [{ name: "John", age: 30 }, { name: "Jane", age: 25 }] se ages ko extract karne par result [30, 25] milta hai, jo console par print hota hai.
// ===================================================================================================