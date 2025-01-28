import { fa, faker } from '@faker-js/faker';
import { addProduct, products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.helpers.arrayElement([12, 24, 36, 48, 60]),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
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

