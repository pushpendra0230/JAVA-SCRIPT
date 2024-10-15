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
