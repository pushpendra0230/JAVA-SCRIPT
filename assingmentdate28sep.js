// java script assignment date 28sep2024................
// ====================================================================================================================================
// q.1.
// console.log(x);
// var x = 5;

// output:-
// undefined
// ====================================================================================================================================
// q.2. 
// let y = 10;if (true) 
// {
//   let y = 20;
// }
// console.log(y);

// output:-
// 10
// ====================================================================================================================================
// q.3.
// var a = 10;if (true) 
// {
//   var a = 20;
// }
// console.log(a);

// output:-
// 20
// ====================================================================================================================================
// q.4.
// let z = 15;
// console.log(z);

// output:-
// 15
// ====================================================================================================================================
// q.5.
// function test() 
// {  var m = 30;
//   if (true) 
// {
//     let m = 40;
//     console.log(m);
// }
//   console.log(m);
// }
// test();

// output:-
// 40
// 30
// ====================================================================================================================================
// q.6.
// function test() 
// {  var a = 50;
//   if (true) 
// {
//     var a = 60;
//     let b = 70;
//     console.log(a, b);
// }
//   console.log(a, b);
// }
// test();
// answer..........
// function test() {
//     var a = 50;
//     let b;

//     if (true) 
//         {
//         a = 60;
//         b = 70;
//         console.log(a, b);
//     }
//     console.log(a, b);
// }
// test();

// output:-
// 60 70
// 60 70
// ====================================================================================================================================
// q.7.
// if (true) {
//     let a = 10;
//     const b = 20;
// }
// console.log(a, b);
// answer..........
// let a;
// const b = 20;
// if (true) 
//     {
//     a = 10;
//     }
// console.log(a, b);
// output:-
// 10 20
// ====================================================================================================================================
// q.8.
// var n = 5;
// {
//   let n = 10;
//   console.log(n);
// }
// console.log(n);

// answer.........
// var n = 5;
// {
//   let n = 10;
//   console.log(n);
// }
// console.log(n);

// output:-
// 10
// 5
// ====================================================================================================================================
// q.9.
// const obj = { a: 1, b: 2 };obj.a = 10;
// console.log(obj);

// output:-
// { a: 10, b: 2 }
// ====================================================================================================================================