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