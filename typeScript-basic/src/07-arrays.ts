(() => {
  let prices = [100, 200, 300];
  //prices.push(true);
  //prices.push('as');
  prices.push(400);
  prices = [500, 600, 700];

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['a', true];
  mixed.push(1);
  mixed.push('as');
  mixed.push({});
  mixed.push(false);
  mixed.push([]);

  let numbers = [1, 2, 3];
  numbers.map(item => item * 2);
})();
