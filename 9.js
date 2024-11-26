// let arr =[1, 2, 3, 4, 5];
//      let even_num = arr.filter((num) => num %2 ==0) ;
//      let even_num_sqar = even_num.map((num) =>num*num);
//      console.log(even_num);
//      console.log(even_num_sqar);


// Find the intersection of two arrays
// let a=[1, 2, 3, 4, 5, 6];
// let b=[4, 5, 6, 7, 8, 9];
// let intersection=a.reduce((acc, x)=> 
//      {
//     if(b.includes(x))acc.push(x);
//     return acc;
// },[]);
// console.log(intersection);

// Find the intersection of two arrays
// let a = [1, 2, 3, 4, 5, 6];
// let b = [4, 5, 6, 7, 8, 9];
// let intersection=a.reduce((acc, x)=> 
//     b.includes(x)?(acc.push(x),acc):acc
// []);
// console.log(intersection);

//how to use push in ofr making 2 d array to 1 d array

// let a =[
//      [1,2,3],
//      [4,5,6],
//      [7,8,9],
// ];
// let f=a.reduce((acc,x)=>(acc.push(...x),acc),[]);
// console.log (f);

// const w=[apple,banana,cheery,avacardo,blubeery,chocoberry];


// output:- { a:apple,avacardo
// b:banana,bluebeery
// c:chocoberry
// }


// const words = ["apple", "banana", "cherry", "avocado", "blueberry", "chocoberry"];
// const result = words.reduce((acc, word) => {
//   const firstLetter = word[0].toLowerCase();
//   if (!acc[firstLetter]) 
//   {
//     acc[firstLetter] = [];
//   }
//   acc[firstLetter].push(word);
//   return acc;
// },{});
// console.log(result);



// const words = ["apple", "banana", "cherry", "avocado", "blueberry", "chocoberry"];
// const result = words.reduce((acc, word) => {
//   const firstLetter = word[0].toLowerCase();
//   if (!acc[firstLetter]) 
//   {
//     acc[firstLetter] ={};
//   }
//   acc[firstLetter][word]=word;
//   return acc;
// },{});
// console.log(result);




// const words = ["apple", "banana", "cherry", "avocado", "blueberry", "chocoberry"];
// const result = words.reduce((acc, word) => {
//   const firstLetter = word[0].toLowerCase();
//   if (!acc[firstLetter]) {
//     acc[firstLetter] = {}; // Create an empty object for the first letter
//   }
//   acc[firstLetter].word; // This line doesn't modify the object, it just accesses the 'word' property
//   return acc;
// }, {});
// console.log(result);


let id = "8";
let rollno =2323;
let studentname = "pushpendra";
let obj={
  id,
  rollno,
  studentname,
};
console.log(obj);