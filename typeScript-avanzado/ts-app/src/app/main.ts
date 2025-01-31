import { fa, faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.helpers.arrayElement([12, 24, 36, 48, 60]),
    categoryId: faker.string.uuid(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.lorem.words(3).split(' '),
  })
};

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'hola',
  stock: 100,
});

findProducts({
  title: 'hola',
  tags: ['hola'],
});
