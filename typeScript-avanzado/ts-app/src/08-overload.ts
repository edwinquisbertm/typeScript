// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

function stringToArray(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // si es un array lo convierte a string
  } else {
    return input.split(''); // si es un string lo convierte a array
  }
}

const rtaArray = stringToArray('Nico');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>',rtaArray); // [ 'N', 'i', 'c', 'o' ]

const rtaString = stringToArray(['N', 'i', 'c', 'o']);
if (typeof rtaString === 'string') {
  rtaString.toUpperCase();
}
console.log('rtaStr', "['N', 'i', 'c', 'o'] =>", rtaString); // Nico
