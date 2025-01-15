(() => {
  type UserID = number | string | boolean;
  let userId: UserID;

  function printId(id: UserID) {
    console.log('id', id);
  }

  // literal types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSise: Size;
  shirtSise = 'S';
  //shirtSise = 'XS'; // Error


})();
