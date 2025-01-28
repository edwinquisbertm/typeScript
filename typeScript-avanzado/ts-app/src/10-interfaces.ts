type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 10,
  size: 'M'
});

interface Product2 {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products2: Product2[] = [];

products2.push({
  id: '1',
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 10,
});

const addProduct = (data: Product2) => {
  products2.push(data);
}
