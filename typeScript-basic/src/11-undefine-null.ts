(() => {
  // Undefine
  let undef: undefined = undefined;
  console.log('undef', undef);

  // Null
  let nul: null = null;
  console.log('nul', nul);

  let myNumber: number | null;
  let myString: string | undefined;

  myNumber = null;
  myString = undefined;

  //myNumber = null;
  //myString = undefined;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  function hi(name: string | null) {
    let hello= 'Hello ';
    if (name){
      hello += name;
    } else {
      hello += 'end_null';
    }
    console.log(hello);
  }
  hi('mari');
  hi(null);

  function hi_v2(name: string | null) {
    let hello= 'Hello ';
    hello += name?.toUpperCase() || 'end_null';
    console.log(hello);
  }
  hi_v2('mari');
  hi_v2(null);
})();
