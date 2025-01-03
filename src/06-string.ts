(() => {
  let productTitle = 'iPhone 12 Pro Max';
  //productTitle = null;
  //productTitle = 123;
  productTitle = 'Samsung Galaxy S21 Ultra';
  console.log('productTitle', productTitle);

  const productDescription = "The iPhone 12 Pro Max is the most powerful iPhone ever.";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
  tile: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  new: ${isNew}
  `;

  console.log('summary', summary);

  const myString: string = 'Hello World';
})();
