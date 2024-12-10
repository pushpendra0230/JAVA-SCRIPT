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


// let id = "8";
// let rollno =2323;
// let studentname = "pushpendra";
// let obj={
//   id,
//   rollno,
//   studentname,
// };
// console.log(obj);

// let arr=[1,2,3,4,5];
// let code=arr.map((x)=>Array.isArray(x));
// console.log(code)

// let arr=[1,2,3,4,5];
// let code=arr.some((x)=>Array.isArray(x));
// console.log(code)

// let restaurants=[
//     {name:"Romantic Rooftop",distance:3,rating:4.5},
//     {name:"Cozy Corner",distance:6,rating:4.2},
//     {name:"Candlelight Cafe",distance: 2,rating:3.9},
//     { name: "Starry Sky Diner", distance: 4,rating:4.8},
//   ];
//   let restaurant=restaurants.filter(
//     (restaurant)=>restaurant.distance<=5&&restaurant.rating>=4
//   );
//   console.log(restaurant);



// let restaurants=[
//     {name:"Romantic Rooftop",distance:3,rating:4.5},
//     {name:"Cozy Corner",distance:6,rating:4.2},
//     {name:"Candlelight Cafe",distance: 2,rating:3.9},
//     { name: "Starry Sky Diner", distance: 4,rating:4.8},
//   ];
// let restaurantname=restaurants.map((restaurant)=>restaurant.name);
// console.log(restaurantname);



// let restaurants=[
//     {name:"Romantic Rooftop",distance:3,rating:4.5},
//     {name:"Cozy Corner",distance:6,rating:4.2},
//     {name:"Candlelight Cafe",distance: 2,rating:3.9},
//     { name: "Starry Sky Diner", distance: 4,rating:4.8},
//   ];
// const firstOption = restaurants.find(
//     (restaurant)=>restaurant.distance<=5&&restaurant.rating>=4
//   );
//   console.log(firstOption);


// let letters=[
//     ["I","will","love","you","forever"],
//     ["You","are","the","love","of","my","life"],
//     ["Love","is","what","binds","us"],
//   ];
//   let love=letters.every((letter)=>
//     letter.some((word)=>word.toLowerCase()==="love")
//   );
//   console.log(love);


// let letters=[
//     ["I","will","love","you","forever"],
//     ["You","are","the","love","of","my","life"],
//     ["Love","is","what","binds","us"],
//   ];
//   let forever=letters.some((letter)=>letter.includes("forever"));
// console.log(forever);

// let movies=[
//     {title:"Love Actually",genre:"romance",duration:135},
//     {title:"Inception",genre:"scifi",duration:148},
//     {title:"The Notebook",genre:"romance",duration:123},
//     {title:"Titanic",genre:"romance",duration:195},
//   ];
// let titles=movies.map(movie=>movie.title);
// console.log(titles);

// let gift=[
//   {name:"Teddy Bear",price:800,popularity:4.5},
//   {name:"Perfume",price:1500,popularity:4.7},
//   {name:"Photo Frame",price:500,popularity:3.8},
//   {name:"Necklace",price:4500,popularity:4.9},
// ];
// let all=gift.every(gift=>gift.price<5000);
// console.log(all);

// let songs=[
//   {title:"Perfect",artist:"Ed Sheeran",duration:263},
//   {title:"All of Me",artist:"John Legend",duration:269},
//   {title:"A Thousand Years",artist:"Christina Perri",duration:295},
// ];
// const convertedDurations = songs.map(song => {
//   const minutes = Math.floor(song.duration / 60);
//   const seconds = song.duration % 60;
//   return `${minutes}:${seconds.toString(),(2, "0")}`;
// });
// console.log("Converted durations:", convertedDurations);
