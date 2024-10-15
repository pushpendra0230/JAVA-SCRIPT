// java script assignment date 2 oct 2024.......................................
// ===============================================================================================================================
// q.1.Create a function greet that takes two positional arguments: name and greeting, and returns a personalized greeting message.Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.

// function greet(name, greeting) 
// {
//     return 'my name is${name}${greeting}';
// }
// let name = "Manu";
// let greeting = "hello";
// console.log(greet(name, greeting));

// output:-
// my name is${name}${greeting}
// ===============================================================================================================================
// q.2.Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.

// function sumnumbers (...rest)
// {
//     const [a,b,c,d,e,f,g,h]=rest;
//     return a+b+c+d+e+f+g+h;
// }
//   let  a  = sumnumbers(32,55,44,33,76,5,4,3);
//   console.log(a);
// output:-
// 252
// ===============================================================================================================================
// q.3.Create a function introduce that takes three positional arguments: firstName, lastName, and age, and returns a sentence introducing the person.

// function three(name,age,lastname) 
// {
//     return `my name is ${name} and age ${age} and last name is ${lastname}`;
// }
  
//   let name = "pushpendra";
//   let age = 21;
//   let lastname = "soni";
//   let a = three(name, age, lastname);
//   console.log(a);

// output:-
// my name is pushpendra and age 21 and last name is soni
// ===============================================================================================================================
// q.4.Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat".

// function lop(a,b,breadType="whole wheat") 
// {
//     return `my name is ${a} last name ${b} and ${breadType}`;
// }
//   let a = "pushpendra";
//   let b = "soni";
//   let c = lop(a, b);
//   console.log(c);

// output:-
// my name is pushpendra last name soni and whole wheat
// ===============================================================================================================================
// q.5.Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.

// function multiply(x,y=1)
// {
//     return x*y;
// }
//   let x = 7;
//   let b=multiply(x);
//   console.log(b);

// output:-
// 7
// ===============================================================================================================================
// q.6.Write a function getTotalPrice that takes an unknown number of prices as arguments using the rest operator and returns the total price.

// function getTotalPrice(...prices) 
// {
//     return prices.reduce((total,price)=>total+price, 0);
// }
//   let totalPrice = getTotalPrice(344,765,86,55);
//   console.log(totalPrice);

// output:-
// 1250
// ===============================================================================================================================
// q.7.Create a function buildSentence that accepts three arguments: subject, verb, and object. If no object is passed, it should default to "something".


// function buildSentence(subject,verb,object="something") 
// {
//     return `${subject} ${verb} ${object}`;
// }
//   let sentence1=buildSentence("I", "like", "javascript");
//   let sentence2=buildSentence("He","like");
//   console.log(sentence1);
//   console.log(sentence2);

// output:-
// I like javascript
// He like something
// ===============================================================================================================================
// q.8.Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.

// function addnumbers(...rest)
// {
//     const[a,b,c,d,e,f] = rest;
//     return a+b+c+d+e+f;
// }
// let a = addnumbers(44,665,43,67,54,77);
// console.log(a);

// output:-
// 950
// ===============================================================================================================================
// q.9.Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".

// function displayInfo(name, age, city = "Unknown")
//   {
//     return `my name is ${name} and my age is ${age} and my city is ${city}`;
//   }
//   let name = "pushpendra soni";
//   let age = "21";
//   let c = displayInfo(name, age);
//   console.log(c);  

// output:-
// my name is pushpendra soni and my age is 21 and my city is Unknown
// ===============================================================================================================================
// q.10.Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".

// function orderPizza(size, topping="cheese")
// {
//     return(`Pizza size is ${size} and topping is ${topping} `);
// }
// let size=7;
// let b = orderPizza(size);
// console.log(b);

// output:-
// Pizza size is 7 and topping is cheese 
// ===============================================================================================================================
// q.11.Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator.

// function makeCoffee(...rest)
// {
//     const[a,b,c,d,e] = rest;
//     return rest;
// }
// let a = makeCoffee(1,2,3,4,5);
// console.log(a);

// output:-
// [ 1, 2, 3, 4, 5 ]
// ===============================================================================================================================
// q.12.Write a function introducePerson that takes two positional arguments name and profession, with profession defaulting to "Student".

//  function introducePerson(name,profession="Student") 
// {
//     return `I am ${name} and my profession is ${profession}`;
// }
// let name = "pushpendra soni";
// let a = introducePerson(name);
// console.log(a);

// output:-
// I am pushpendra soni and my profession is Student
// ===============================================================================================================================
// q.13.Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.


// function findMax(...rest)
// {
//     const[a,b,c,d,e,f]=rest;
//     let max=a;
//     if(max<b)
//     {
//       max = b;
//     }
//      if(max<c)
//     {
//       max = c;
//     }
//      if(max<d)
//     {
//       max = d;
//     }
//     if(max<e)
//     {
//       max = e;
//     }
//      if(max<f)
//     {
//       max = f;
//     }
//     return max;
//   }
//   let max=findMax(44,76,89,66,54,33);
//   console.log(max);

// output:-
// 89
// ===============================================================================================================================
// q.14.Write a function buildPerson that takes two arguments: firstName and lastName, and returns an object representing the person.

// function buildPerson(first,last)
// {
//     let a=
//    {
//      first,
//      last,
//    }
//    return a;
// }
// let first="pushpendra",
//     last="soni";
// let a =buildPerson(first,last);
// console.log(a);

// output:-
// { first: 'pushpendra', last: 'soni' }
// ===============================================================================================================================
// q.15.Create an object car with primitive properties: brand, model, and year.

// const car = 
// {
//     brand: "Toyota",
//     model: "fortuner",
//     year:2024
// };
//   console.log(car.brand);
//   console.log(car.model);
//   console.log(car.year);

// output:-
// Toyota
// fortuner
// 2024
// ===============================================================================================================================
// q.16.Create an object book with non-primitive properties: title, author, and reviews (where reviews is an array of review objects).

// const book = 
// {
//     title: "DSA BOOK",
//     author: "prajjal sir",
//     reviews:
//     [
//       { reviewer: "pushpendra", rating: 5, comment: "nice book" },
//     ]
//   };
//   console.log(book.title);
//   console.log(book.reviews[0].comment);  

// output:-
// DSA BOOK
// nice book
// ===============================================================================================================================
// q.17.Create an object laptop with both primitive (brand, price) and non-primitive (features - an array) properties.

// const laptop = 
// {
//     brand: "Dell",
//     price: 120000,
//     features: ["15.6 inch display", "16GB RAM", "512GB SSD", "Intel i7", "Windows 11"]
// };
//   console.log(laptop.brand);
//   console.log(laptop.features[0]);

// output:-
// Dell
// 15.6 inch display
// ===============================================================================================================================
// q.18.Create an object person with a method greet that prints a greeting message using the name property.

// const person = 
// {
//     name: "Pushpendra",
//     greet:function() 
//     {
//       console.log(`Hello, my name is ${this.name}!`);
//     }
//   };
//   person.greet();

// output:-
// Hello, my name is Pushpendra!
// ===============================================================================================================================
// q.19.Write a function buildTeam that takes an unknown number of team members using the rest operator and returns an array of their names.

// function buildTeam(...members) 
// {
//     return members;
// }  
//   let team=buildTeam("Alice", "Bob", "Charlie", "David");
//   console.log(team);

// output:-
// [ 'Alice', 'Bob', 'Charlie', 'David' ]
// ===============================================================================================================================
// q.20.Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.

// function discountPrice(price, discountPercentage=10)
// {
//     const discount = (price*discountPercentage)/100;
//     return price-discount;
//  }
//  let price = 190;
//  let b  = discountPrice(price);
//  console.log(b);

// output:-
// 171
// ===============================================================================================================================
// q.21.Write a function describePet that accepts two arguments: petName and petType. If no petType is provided, it should default to "dog".

// function describePet(petName, petType = "dog") 
// {
//     return `${petName} is a ${petType}`;
// }
// let name="pug";
// let a = describePet(name);
// console.log(a);

// output:-
// pug is a dog
// ===============================================================================================================================
// q.22.Create a function calculateArea that accepts two arguments: length and width. If width is not provided, it should default to the same value as length (for a square).

// function lol( length,width=length)
// {
//     return length*width;
// }
//  let a = lol(7);
//  console.log(a);

// output:-
// 49
// ===============================================================================================================================
// q.23.Write a function joinStrings that accepts an unknown number of strings using the rest operator and returns them concatenated into one string.

// function student(...string)
// {
//    const[a,b]=string;
//    return a+b;
// }
// let a = student("pushpendra","soni");
// console.log(a);

// output:-
// pushpendrasoni
// ===============================================================================================================================
// q.24.Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided, it should default to "user".

// function user(name,email,role= "user")
// {
//     return(`name is ${name} email is ${email} role ${role} `);
// }
// let name = "pushpendra soni";
// let email = "sonipushpendra256@gmail.com";
// let a = user(name,email);
// console.log(a);

// output:-
// name is pushpendra soni email is sonipushpendra256@gmail.com role user 
// ===============================================================================================================================
// q.25.Write a function divideNumbers that takes two arguments: a and b, with b defaulting to 1 if not provided.

// function div(a,b=1)
// {
//     return a/b;
// }
//   let a = div(10);
//   console .log(a);

// output:-
// 10
// ===============================================================================================================================
// q.26.Create a function combineArrays that accepts an unknown number of arrays using the rest operator and returns one combined array.


// function arry(...rest)
// {
//   return rest.flat();
// }
// let a = arry([1,2,3,4],[4,5,6,,7]);
// console.log(a);

// output:-
// [
//     1, 2, 3, 4,
//     4, 5, 6, 7
// ]
// ===============================================================================================================================
// q.27.Write a function introduceEmployee that takes two positional arguments: employeeName and position, with position defaulting to "intern".

// function introduceEmployee(employeeName,position="intern") 
// {
//     return `${employeeName} is a ${position}.`;
// }
// let employee1 = introduceEmployee("pushpendra soni");
// let employee2 = introduceEmployee("prajjal sir", "developer");

// console.log(employee1);
// console.log(employee2);

// output:-
// pushpendra soni is a intern.
// prajjal sir is a developer.
// ===============================================================================================================================
// q.28.Create a function findAverage that takes an unknown number of scores using the rest operator and returns the average score.

// function findAverage(...scores) 
// {
//     const total=scores.reduce((acc,score)=>acc+score,0);
//     return total / scores.length;
// }
// let average=findAverage(85,90,78);
// console.log(average);


// output:-
// 84.33333333333333
// ===============================================================================================================================
// q.29.Write a function buildCar that accepts three arguments: brand, model, and year. If no year is provided, it should default to the current year.

// function buildCar(brand,model,year=2024) 
// {
//     return{
//         brand:brand,
//         model:model,
//         year:year
//     };
// }
// let car = buildCar("Toyota", "Corolla");
// console.log(car);

// output:-
// { brand: 'Toyota', model: 'Corolla', year: 2024 }
// ===============================================================================================================================