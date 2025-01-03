(() => {
  let myDynamicVariable: any; // any type is a dynamic type that can change its value and type
  myDynamicVariable = 'Hello';
  myDynamicVariable = 10;
  myDynamicVariable = true;
  myDynamicVariable = { name: 'John' };
  myDynamicVariable = [1, 2, 3];
  myDynamicVariable = () => console.log('Hello');

  myDynamicVariable = 'Hello';
  const rta = (myDynamicVariable as string).toUpperCase();
  console.log('rta', rta);

  myDynamicVariable = 10;
  const rta2 = (<number>myDynamicVariable).toFixed();
  console.log('rta2', rta2);
})();
