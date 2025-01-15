import { createProduct, calcStock, products } from "./product.service";

createProduct({
    name: 'Camisa',
    createdAt: new Date(),
    stock: 100,
    sizes: 'M'
});
createProduct({
    name: 'Pantalon',
    createdAt: new Date(),
    stock: 50
})

console.log(products);
const total = calcStock();
console.log(total);
