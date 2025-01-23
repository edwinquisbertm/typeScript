const withoutEnd = () => {
  while (true) {
    console.log('Never ends');
  }
}


const fail = (message: string) => {
  throw new Error('Error');
}

const example =  (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('Invalid input');
}

console.log(example('hola'));
console.log(example([1, 2, 3]));
console.log(example(121212));
console.log(example('despues del fail'));
