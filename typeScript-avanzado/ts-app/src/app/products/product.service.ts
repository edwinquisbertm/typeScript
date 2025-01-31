import { fa, faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto, updateProductDto , FindProductDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}
// utilizar el Product['id'] es una forma de decir que el id tiene el mismo tipo que el id de la interfaz Product.
export const updateProduct = (id: Product['id'], changes: updateProductDto) =>{
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
    updatedAt: faker.date.recent(),
  }
  return products[index];
}

export const deleteProduct = (id: string) => {

}

export const getProduct = (id: string) => {

}

export const findProducts = (dto: FindProductDto): Product[] => {
  return products;
}
