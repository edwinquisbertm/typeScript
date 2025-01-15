(() => {
  // Union types
  type Id = number | string;

  const id: Id = 1;
  const id2: Id = '1';
  // const id3: Id = true; // Error

  console.log('id', id);
  console.log('id2', id2);
  // console.log('id3', id3);

  let userId: string | number;
  userId = '10';
  userId = 10;

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log( `Hello ${myText.toUpperCase()}`);
    } else {
      console.log(`Hello ${myText.toFixed(2)}`);
    }
  }

  greeting('John');
  greeting(10.12345);


})();
