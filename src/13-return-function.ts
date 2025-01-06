(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const rta = calcTotal([10, 20, 30, 40, 50]);
  console.log('total', rta);
})();
