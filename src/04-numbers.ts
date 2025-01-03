(() => {

  let productPrice = 100;
  productPrice = 200;
  console.log('productPrice', productPrice);

  let customerAge: number = 25;
  //customerAge = customerAge + "1"; // Error: Type 'string' is not assignable to type 'number'.
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock); // undefined
  if ( productInStock > 10 ) { // Error: Object is possibly 'undefined'.
    console.log('productInStock is fine');
  }

  let discount= parseInt('100');
  console.log('discount', discount);
  if (discount <= 200){
    console.log('discount is fine');
  } else {
    console.log('discount is not fine');
  }

  let hex = 0xf00d;
  console.log('hex', hex);
  let bin = 0b1010; // 10
  console.log('bin', bin);

  const myNumber : number = 10;

})();
