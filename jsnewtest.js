// const stock = [
//     { category: "Electronics", subCategory: "Mobile", count: 50 },
//     { category: "Electronics", subCategory: "Laptop", count: 30 },
//     { category: "Furniture", subCategory: "Sofa", count: 10 },
//     { category: "Electronics", subCategory: "Mobile", count: 20 },
//     { category: "Electronics", subCategory: "Mobile", count: 80 },
//     { category: "Furniture", subCategory: "Sofa", count: 10 },
//     { category: "Furniture", subCategory: "Sofa", count: 100 },
//     { category: "Furniture", subCategory: "Sofa", count: 50 },
//     { category: "Electronics", subCategory: "Laptop", count: 50 },
//     { category: "Electronics", subCategory: "Laptop", count: 60 },
// ];

// const total = {};

// stock.forEach(item => {
//     if (!total[item.category]) {
//         total[item.category] = {};
//     }
//     if (!total[item.category][item.subCategory]) {
//         total[item.category][item.subCategory] = 0;
//     }
//     total[item.category][item.subCategory] += item.count;
// });
// console.log(total);





// const products = [
//     { name: "Lipstick", category: "Beauty", price: 500 },
//     { name: "Foundation", category: "Beauty", price: 1200 },
//     { name: "Chair", category: "Furniture", price: 3000 },
//     { name: "Desk", category: "Furniture", price: 4500 }
// ];

// const totalofthePrice = {};

// products.forEach(item => {
//     if (!totalofthePrice[item.category]) {
//         totalofthePrice[item.category] = 0;
//     }
//     totalofthePrice[item.category] += item.price;
// });

// console.log(totalofthePrice);





// const userOrders = [
//     { user: "Amit", orders: [{ total: 2000 }, { total: 3000 }] },
//     { user: "Neha", orders: [{ total: 7000 }] },
//     { user: "Raj", orders: [{ total: 4000 }, { total: 1000 }] }
// ];

// let totaloftheUsers = '';
// let totaloftheSpents = 0;

// userOrders.forEach(user => {
//     const totalSpent = user.orders.reduce((sum, order) => sum + order.total, 0);
//     if (totalSpent > totaloftheSpents) {
//         totaloftheSpents = totalSpent;
//         totaloftheUsers = user.user;
//     }
// });

// console.log(totaloftheUsers);




// const userOrders = [
//     { user: "Amit", orders: [{ total: 2000 }, { total: 3000 }] },
//     { user: "Neha", orders: [{ total: 7000 }] },
//     { user: "Raj", orders: [{ total: 4000 }, { total: 1000 }] }
// ];

// let totaloftheUsers = '';
// let totaloftheSpents = 0;

// userOrders.forEach(user => {
//     const totalSpent = user.orders.reduce((sum, order) => sum + order.total, 0);
//     if (totalSpent > totaloftheSpents) {
//         totaloftheSpents = totalSpent;
//         totaloftheUsers = user.user;
//     }
// });
// console.log(totaloftheUsers);






// const items = [
//     { name: "AC", price: 40000, discount: 6000 },
//     { name: "TV", price: 55000, discount: 3000 },
//     { name: "Fridge", price: 30000, discount: 7000 }
// ];

// let bestoftheItem = null;
// let bestoftheRatio = 0;

// items.forEach(item => {
//     const ratio = item.discount / item.price;
//     if (ratio > bestoftheRatio) {
//         bestoftheRatio = ratio;
//         bestoftheItem = item;
//     }
// });

// console.log(bestoftheItem);





const inventory = [
    { name: "Shampoo", category: "Beauty" },
    { name: "Toothpaste", category: "Beauty" },
    { name: "Sofa", category: "Furniture" },
    { name: "Dining Table", category: "Furniture" },
    { name: "Fan", category: "Electronics" }
];

const frequency = {};

inventory.forEach(item => {
    if (!frequency[item.category]) {
        frequency[item.category] = 0;
    }
    frequency[item.category]++;
});

console.log(frequency);  