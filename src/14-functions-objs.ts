(() => {

  const login = (data: {email: string,  password: number}) => {
    console.log(`Email: ${data.email}, Password: ${data.password}`);
  }

  //login('nic@nic.bo', '123456');

  login({
    email: 'nico@nic.bo',
    password: 123456
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    sizes?: Sizes // Optional parameter with the '?' symbol
  }) => {

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

})();
