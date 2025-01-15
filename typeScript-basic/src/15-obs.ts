(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    sizes?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
        products.push(data);
  }

  addProduct({
    title: 'Camisa',
    createdAt: new Date(),
    stock: 100,
    sizes: 'M'
  });
  addProduct({
    title: 'Pantalon',
    createdAt: new Date(),
    stock: 50
  })

  console.log(products);

  products.push({
    title: 'Zapatos',
    createdAt: new Date(),
    stock: 200
  });

})();
