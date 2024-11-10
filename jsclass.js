// Recursion  :-


// Matlab jab ek function khud ko hi bar bar call karta hai either for higher values or for lower values us concept ko recursion khete hai. 

 

// Recursion concept mai last value of higher or lower ko base condition khete hai 

 

// Har function call ek naya stack space allocate karwati hai. 

 

// Jisse space complexity increase hoti hai 

 

// Loop ke wakt time complexity par effect padhta hai wahi recursion par space complexity par effect pardtha hai .

// backword 

// function abc(i){
//     if(i==0) return;
//     console.log(i);
//     abc(i-1);
// }
// let i=10;
// abc(i);

// forword

// function abc(i){
//     if(i==10) return;
//     console.log(i);
//     abc(i+1);
// }
// let i=0;
// abc(i);

// Callback Function :-

// Callback function JavaScript mein ek aisa function hota hai jo doosre function ke argument ke roop mein pass kiya jaata hai,
// aur fir wo doosra function jab chahe, us callback ko call kar sakta hai. Callback functions kaafi useful hote hain jab hume kisi
// kaam ke complete hone ke baad kuch aur execute karna hota hai, bina main program ko block kiye. 

// just like calculator program


// calculator program in java script 


// function mul(a,b){
//     return a*b;
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function div(a,b){
//     if(b==0)return "undefined";
//     else return a/b;
// }
// function calculator(a,b,pushpendra){
//     console.log('a: ${a}');
//     console.log('b: ${b}');
//     return pushpendra (a,b);
// }
// let ab=calculator(3,5,add);
// console.log(`Addition result: ${ab}`);
// let bc=calculator(5,3,sub);
// console.log(`Subtraction result: ${bc}`);
// let c = calculator (3,5,(a,b)=>
// {
//     return a*b;
// });
// console.log(`Multiplication result: ${c}`);
// let d=calculator(10, 2, div);
// console.log(`Division result: ${d}`);

// Callback Function Kya Hai? 

// Callback function ek normal function hi hota hai, bas usse hum argument ke roop mein pass karte hain aur us function ke andar se call karte hain jab uski zarurat hoti hai. 

 

// function greeting(name) { 

//   console.log("Hello, " + name + "!"); 

// } 

// function processUserInput(callback) { 

//   let name = "Pushpendra"; 

//   callback(name);  // Yahaan callback ko argument ke saath call kiya gaya hai 

// } 

// processUserInput(greeting); 

 

// Yahaan greeting ek callback function hai, jo processUserInput ke andar argument ke roop mein pass kiya gaya hai, aur fir use call kiya gaya hai. Jab processUserInput function ko call kiya jaata hai, tab greeting function ko internally call kiya jaata hai. 

// Kaise Kaise Arguments Types Mai Bhej Sakte Hai Callback Functions Mai? 

 

// Function as an Argument: 

// Aap kisi bhi normal function ko as a callback function bhej sakte ho. 

// Example: functionName as a parameter. 

 

// Anonymous Function: 

// Aap ek anonymous function bhi directly as a callback pass kar sakte ho. 

// Example: processUserInput(function(name) { console.log("Hi, " + name); }); 

// Arrow Functions: 

// Aap arrow functions bhi as a callback pass kar sakte ho. 

// Example: processUserInput(name => console.log("Hey, " + name)); 

 

 

// Callback functions mein default parameters ka use kaise hota hai, yeh hum examples ke zariye samajhte hain. Do alag-alag scenarios dekhenge: ek jisme default parameters use honge aur ek jisme nahi honge. 

// Example 1: With Default Parameters 

// Yahaan greeting function ke parameter name ka default value "Guest" set kiya gaya hai. Agar callback ko call karte waqt koi argument pass nahi kiya gaya, to "Guest" use ho jayega. 

 

// // Callback function with default parameter 

// function greeting(name = "Guest") { 

//   console.log("Hello, " + name + "!"); 

// } 

  

// function processUserInput(callback) { 

//   callback(); // Yahaan koi argument pass nahi ho raha 

// } 

  

// // Process without passing any argument to callback 

// processUserInput(greeting);  // Output: Hello, Guest! 

  

// // Process with passing an argument 

// processUserInput(function() { 

//   greeting("Prajjal"); 

// });  // Output: Hello, Prajjal! 

 

// Explanation: 

// Pehle call mein, greeting ko bina kisi argument ke call kiya gaya, isliye default value "Guest" print ho gaya. 

// Dusre call mein, greeting("Prajjal") ko explicitly call kiya gaya, isliye "Prajjal" print ho gaya. 

 

 

// Example 2: Without Default Parameters 

// Ab hum greeting function ko bina default parameter ke use karenge. Agar argument pass nahi hota, to hum condition laga ke "Unknown" ko fallback value bana denge. 

 

// // Callback function without default parameter 

// function greeting(name) { 

//   console.log("Hello, " + (name || "Unknown") + "!"); 

// } 

  

// function processUserInput(callback) { 

//   callback(); // Yahaan koi argument pass nahi ho raha 

// } 

  

// // Process without passing any argument to callback 

// processUserInput(greeting);  // Output: Hello, Unknown! 

  

// // Process with passing an argument 

// processUserInput(function() { 

//   greeting("Prajjal"); 

// });  // Output: Hello, Prajjal! 

 

// Explanation: 

// Pehle call mein, greeting ko bina kisi argument ke call kiya gaya, aur kyunki default value nahi thi, undefined pass ho gaya. Isliye humne name || "Unknown" condition lagayi, jo "Unknown" print karta hai. 

// Dusre call mein, humne greeting("Prajjal") ko explicitly call kiya, jisse "Prajjal" print ho gaya. 

// Key Points: 

// With Default Parameters: Default value tab use hoti hai jab koi argument pass nahi hota. 

// Without Default Parameters: Condition check karke fallback value lagayi ja sakti hai agar argument pass nahi kiya jaata. 

 

 

 

 

// Important Points: 

// Function ko as Argument bhejna: Kisi bhi function ko as an argument pass kar sakte ho, chahe wo normal function ho, anonymous function ho, ya arrow function. 

// Default Parameters: Callback function ke arguments me default values set kar sakte ho, jo tab use hoti hain jab koi value pass nahi hoti. 

// userinp(function (name)
// {
//     console.log("hi, "+name);
// });

// the right answer

// function userinp(callback) 
// {
//     var name="Pushpendra";
//     callback(name);
// }
// userinp(function(name) 
// {
//     console.log("hi, "+name);
// });


// Callback function without default parameter 



// function greeting(name) { 

//     console.log("Hello, " + (name || "Unknown") + "!"); 
  
//   } 
  
  
//   function processUserInput(callback) { 
  
//     callback(); // Yahaan koi argument pass nahi ho raha 
  
//   } 

// for printing custom function

// function abc(
//     callback=function(){
//         console.log ("error 404");
//     }
// ){
//     callback();
// }
// abc (function ()
// {
//     console.log("custom function");
// });
// abc();

// for printing error 404


// function abc(
//     callback=function(){
//         console.log ("error 404");
//     }
// ){
//     callback();
// }
// abc (function ()
// {
//     console.log("custom function");
// });
// abc();
// function a(i,sum)
// {
//     if(i==0) return 0;
//     return i*a(i-1);
// }
// let i=4;
// let ab=a(i);
// console.log(ab);



// chapter 5. Array Methods in JS 

// Push : already created array ke andar mai koi naya data add karne ke kaam ata hai. 

// Push mai data add hota hai at the end of the preexisting array. 

//    2.    pop: : already created array ke andar mai data ko remove karne ke kaam ata hai. 

//          Pop mai data piche se remove hoti hai. 

//    3.   shift: deletes the first element from an array. 

//   4.   unshift: 

//  //unshift : ek naya element insert karne ke kaam aata hai 

// //uske pehle wale sabhi elements shift hote hain 

// arr1.unshift("Pushpendra"); 

// console.log(arr1); 

  

// Splice: //splice:change karta hai content of an array by adding removing or replacing 

// let fruits = ["apple", "banana", "kiwi", "orange"]; 

// fruits.splice(1, 1, "grapes");  

// //(startindex, no of elements delete karna hai,element jise insert karna hai); 

// console.log(fruits); 

// fruits.splice(1, 3); 

// console.log(fruits); 

// Original array mai change ho jata hai. 

// Koi naya array return nahi ho raha hai 

// fruits.splice(3);//wo element remove ho jayega jiska position number mention kiya hua hai 

// console.log(fruits); 

// fruits.splice("a"); //yeh syntax galat hai isse pura array remove ho jayega jab pura array khali karna ho to iss galat syntax ka phyda utha sakte hai 

// console.log(fruits); 

 

// Slice: 

// //slice 

// //slice: array ko copy karta hai 

// //uske pehle element se start karta hai aur last element tak 

// // returns a shallow copy of a portion of an array into new array 

// let fruits1 = ["apple", "banana", "kiwi", "orange", "pot", "lion"]; 

// let fruits2 = fruits1.slice(0, 4);//starting index jisko count karega and ending index jisko count nahi karega 

// console.log(fruits2); 

// console.log(fruits1);// mai koi changes nahi hua  

// 3. includes : is used as linear search returns boolean result if found true else false 

// //includes 

// //includes: array me ek element hai ya nahi ye check karta hai 

// let fruits3 = ["apple", "banana", "kiwi", "orange", "pot", "lion"]; 

// console.log(fruits3.includes("pushpendra")); //false 

 

// console.log(fruits3.includes("apple")); //true 

 

// 4.Join: 

 

// //join 

// //join: array ko string me convert karta hai 

// let fruits4 = ["apple", "banana", "kiwi", "orange", "pot"]; 

// let res = fruits4.join(",");//, is a delimiter  

// console.log(res); //apple,banana,kiwi,orange,pot 

 

// 5.Reverse: 

// //reverse 

// //reverse: array ko reverse karta hai 

// let fruits5 = ["apple", "banana", "kiwi", "orange", "pot"]; 

// console.log(fruits5.reverse()); 

 

// 6.//merge two arrays 

// let fruits6 = ["apple", "banana", "kiwi", "orange", "pot"]; 

// let fruits7 = ["lion", "tiger", "bear"]; 

// console.log(fruits6.concat(fruits7));//this makes a new array and doesnot make changes in original arrays 

// console.log(fruits7); 

 

// Using spread operator is alternate of concat: 

// console.log([...fruits6, ...fruits7]); //using spread operator 

// console.log(fruits6); 

// Callbacks in Array Methods: 

 
 

//foreach loop 

// let fruits = [ 

//   { name: "apple", color: "red" }, 

//   { name: "banana", color: "yellow" }, 

//   { name: "cherry", color: "red" }, 

// ]; 

// //iterate over each element 

// fruits.forEach((fruit) => console.log(fruit)); 

 
 

// //map 

// let fruits = ["Apple", "Banana", "Kiwi"]; 

// fruits.map((fruit) => console.log(fruit)); 

// //yeh naya array banake deta hai original array mai changes nahi karta hai 

// //foreach 

// let numbers = [1, 2, 3, 4, 5]; 

// let double = numbers.map((num) => num * 2); 

// console.log(double); 

// console.log(numbers); 

 
 

// //map 

// let numbers = [1, 2, 3, 4, 5, 6]; 

// let arr = []; 

// numbers.map((num) => { 

//   if (num > 2) { 

//     arr.push(num); 

//   } 

// }); 

// console.log(arr); 

 
// //foreach 

// let numbers = [1, 2, 3, 4, 5, 6]; 

// let arr = []; 

// numbers.map((num) => { 

//   if (num % 2 != 0) { 

//     arr.push(num); 

//   } 

// }); 

// console.log(arr); 

 
// //filter 

// //it creates new array with element jo cases ko pass karta hai 

// let arr = [1, 2, 3, 4, 5, 6]; 

// let even = arr.filter((num) => num % 2 === 0); 

// console.log(even); 

 
 

// //reduce 

// // accumultor sum factorial 

// let numbers = [1, 2, 3, 4]; 

// let sum = numbers.reduce((acc, num) => acc + num, 0); 

// console.log(sum); 

 
 

// //reduce 

// // accumultor sum factorial 

// let numbers = [1, 2, 3, 4]; 

// let sum = numbers.reduce((acc, num) => acc * num, 1); 

// console.log(sum); 

 
 

// //reduce 

// // accumultor sum factorial 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// let sum = numbers.reduce((acc, num) => { 

//   if (num % 2 == 0) acc += num; 

//   return acc; 

// }, 0); 

// console.log(sum); 

 
 

// //Find 

// let numbers = [1, 2, 3, 4, 5, 3, 20]; 

// let found = numbers.find((num) => num > 10); 

// console.log(found); 

 
 

// First occurrence of the condition jo statisfy ho rahi hai usko return karke deta hai otherwise undefined return karta hai. 

 

// let numbers = [1, 2, 3, 4, 5, 3, 12, 35, 20]; 

// let found = numbers.sort((a, b) => b - a); 

// console.log(found); 

 

// let numbers = [1, 2, 3, 4, 5, 3, 0]; 

// let found = numbers.findIndex((num) => num > 10); 

// console.log(found); 

// //foreach ke thorugh hi orginal array mai change karna hai 

// let numbers = [1, 2, 3, 4, 5, 6]; 

// numbers.forEach((num, index, arr) => { 

//   arr[index] = num * 2; 

// }); 

// console.log(numbers); 

 
// Foreach undefined return karta hai. Kuch nahi return karna matlab undefined return karna 

// Map ek naya array return karta hai. 

 

// Foreach tab use karein jab ap array mai koi changes nahi chahte ho 

 

 

// Foreach allows mutation where map does not allow mutation  

// Filters condition statisfy hone par elements ko ek naya array mai dhal kar return karke deta hai 

// Reduce is for accumlation type of method jiska use hum summation factorail nikalna ya continuos array ka koi operation perform karne ke time use karte hai. 

// 2level depth: 

// let numbers = [ 

//   { 

//     name: "prajjal", 

//     marks: [85, 90, [95, 98]], 

//   }, 

//   { 

//     name: "kishan", 

//     marks: [95, 86, 97], 

//   }, 

// ]; 

// console.log(numbers); 

// //scores ko extract karenge 

// let scores = numbers.map((num) => num.marks); 

// console.log(scores); 

 
 

// let flatscores = scores.flat(2);//2 level depth 

// console.log(flatscores); 

// 3d level depth: 

// let numbers = [ 

//   { 

//     name: "prajjal", 

//     marks: [85, 90, [95, 98], [[56, 96, 89]]], 

//   }, 

//   { 

//     name: "kishan", 

//     marks: [95, 86, 97], 

//   }, 

// ]; 

// console.log(numbers); 

// //scores ko extract karenge 

// let scores = numbers.map((num) => num.marks); 

// console.log(scores); 

 
 

// let flatscores = scores.flat(3); //3 level depth 

// console.log(flatscores); 

 
 

// Infinity: 

// let numbers = [ 

//   { 

//     name: "prajjal", 

//     marks: [85, 90, [95, 98], [[56, 96, 89]]], 

//   }, 

//   { 

//     name: "kishan", 

//     marks: [95, 86, 97], 

//   }, 

// ]; 

// console.log(numbers); 

// //scores ko extract karenge 

// let scores = numbers.map((num) => num.marks); 

// console.log(scores); 

 
 

// let flatscores = scores.flat(Infinity); //infinite level depth 

// console.log(flatscores); 

 
 

// FlatMap: 

// //flatMap 

// //combination of map and flat 

// let numbers = [1, 2, 3]; 

// let res = numbers.flatMap((num) => [num, num * 3]); 

// console.log(res); 
// let employees = [ 

//   { 

//     name: "prajjal", 

//     salary: 1500000, 

//   }, 

//   { 

//     name: "kishan", 

//     salary: 800000, 

//   }, 

// ]; 

// let res = employees.flatMap((employee) => [employee.name, employee.salary * 2]); 

// console.log(res); 

 
// Ques: kya isme sabhi tarh ke users ko lekar unquie purchases kya hai? 

 

// let users = [ 

//   { name: "Kishan", purchases: ["Bulb", "Hati", "Ghora"] }, 

//   { name: "Rahul", purchases: ["Bulb", "Dog", "Heater"] }, 

//   { name: "Nikhil", purchases: ["Jhadhu", "Lemon", "Mirchi", "Doll"] }, 

// ]; 

// let userpurchase = users.flatMap((user) => [...user.purchases]); 

// console.log(userpurchase); 

// let unquiepurchases = [...new Set(userpurchase)]; 

// console.log(unquiepurchases); 

// let numbers = [1, 2, 4, 3, 5]; 

// let haseven = numbers.some((num) => num % 2 == 0); 

// console.log(haseven); 

 
 

// let numbers = [40, 2, 4, 30, 50]; 

// let haseven = numbers.every((num) => num % 2 == 0); 

// console.log(haseven); 

 
 

// let numbers = ["banana", "apple", "kiwi"]; 

// console.log(numbers.indexOf("appl")); 

 
 

// let numbers = ["banana", "apple", "kiwi", "banana", "kiwi"]; 

// console.log(numbers.lastIndexOf("banana")); 

 

// Flat: 
 

// let numbers = [ 

//   1, 

//   [2, 3], 

//   [4, 5, 6], 

//   7, 

//   [ 

//     [1, 2, 3], 

//     [4, 5, 6], 

//   ], 

// ]; 

// let arr = numbers.flat(); 

// console.log(arr); 

// //flat converts into 1d behind the specific depth 

// let users = [ 

//   { name: "Kishan", purchases: ["Bulb", "Hati", "Ghora"] }, 

//   { name: "Rahul", purchases: ["Bulb", "Dog", "Heater"] }, 

//   { name: "Nikhil", purchases: ["Jhadhu", "Lemon", "Mirchi", "Doll"] }, 

// ]; 

// let userpurchase = users.map((user) => user.purchases); 

// console.log(userpurchase.flat()); 