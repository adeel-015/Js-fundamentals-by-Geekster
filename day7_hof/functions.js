// let numbers = [1,2,9];

// numbers.forEach((number, index, numbers) => {
//     console.log(number, index, numbers);
// })

let product = [
    {id: 1, name: "product1", price: 99},
    {id: 2, name: "prod2", price: 199},
    {id: 3, name: "prod3", price: 599},
    {id: 5, name: "product5", price: 399},
    {id: 6, name: "product6", price: 599}
];


// --> reduce

let reduced = product.reduce((total, product) => {
    return total + product.price;
}, 0)

console.log(reduced);



// // Filter products with price greater than 200
// let filtered = product.filter((product) => {
//     return product.price > 200;
// });

// // Map to extract only the names of the filtered products
// let productNames = filtered.map((product) => {
//     return product.name;
// });

// console.log(productNames);




// let mapArray = product.map((product) => {
//     // console.log(`The Product ID is ${product.id}`);
//     // console.log(`The Product Name is ${product.name}`);
//     console.log(`${product.price * 2}`);
//     // console.log("---------------------------------");
// })

// console.log(product);