// 1). Write a function modifyArray(arr, callback) that takes an array and a
// callback function. The callback should double each element of the array and return
// the modified array.

// function double(arr, callback) {
//     return arr.map(callback);
// }
// function doublenumber(element) {
//     return element * 2;
// }
// console.log(double([1, 2, 3, 4], doublenumber));

// // ==========================================================================================================================

// // 2) Implement a function fetchData(callback) that simulates fetching user data
// (name, age) after 2 seconds using setTimeout. The callback should log the fetched
// data.

// function fetchthedata(callback) {
//   setTimeout(() => {
//     const userData = { name: "John", age: 30 };
//     callback(userData);
//   }, 2000);
// }
// fetchthedata((data) => {
//   console.log(data);
// });

// // ==========================================================================================================================

// // 3) Process a string using a callback

// function processString(str, callback) {
//     return callback(str);
// }

// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// console.log(processString("hello world", toUpperCase));

// // ==========================================================================================================================

// // 4) Get user data returning a promise

// function getUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ name: "John", age: 30 });
//         }, 2000);
//     });
// }

// getUserData().then(data => console.log(data));

// // ==========================================================================================================================

// // 5) Fetch posts with a random chance of success or failure

// function fetchPosts() {
//     return new Promise((resolve, reject) => {
//         const randomNum = Math.random();
//         if (randomNum > 0.5) {
//             resolve(["Post 1", "Post 2", "Post 3"]);
//         } else {
//             reject("Failed to fetch posts.");
//         }
//     });
// }

// fetchPosts()
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err));

// // ==========================================================================================================================

// // 6) Calculate the sum of two numbers with promise rejection for invalid input

// function calculateSum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a > 0 && b > 0) {
//             resolve(a + b);
//         } else {
//             reject("Both numbers must be positive.");
//         }
//     });
// }

// calculateSum(5, 10)
//     .then(sum => console.log(sum))
//     .catch(err => console.log(err));

// // ==========================================================================================================================

// // 7) Get average score of a student

// function getAverageScore(students, studentName) {
//     const student = students.find(s => s.name === studentName);
//     if (student) {
//         const sum = student.scores.reduce((acc, score) => acc + score, 0);
//         return sum / student.scores.length;
//     }
//     return null;
// }

// let students = [
//     { name: "Alice", scores: [80, 90, 85] },
//     { name: "Bob", scores: [70, 75, 78] },
// ];
// console.log(getAverageScore(students, "Alice"));
// console.log(getAverageScore(students, "Bob"));

// // ==========================================================================================================================

// // 8) Print a pattern of stars without using repeat

// function printStars(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let stars = '';
//         for (let j = 1; j <= i; j++) {
//             stars += '*';
//         }
//         process.stdout.write(stars + '\n');
//     }
// }

// printStars(4);

// // ==========================================================================================================================

// // 9) Filter employees by salary

// function filterHighSalary(employees, minSalary) {
//     return employees.filter(employee => employee.salary > minSalary);
// }

// let employees = [
//     { name: "John", salary: 50000 },
//     { name: "Jane", salary: 60000 },
//     { name: "Mike", salary: 45000 },
// ];
// console.log(filterHighSalary(employees, 55000));

// // ==========================================================================================================================

// // 10) Merge and sort two arrays, removing duplicates

// function mergeAndSortArrays(arr1, arr2) {
//     const merged = [...arr1, ...arr2];
//     const unique = [...new Set(merged)];
//     return unique.sort((a, b) => a - b);
// }

// console.log(mergeAndSortArrays([3, 1, 4], [4, 2, 5]));
