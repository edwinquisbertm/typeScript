// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

export function stringToArray(input: string): string[];
export function stringToArray(input: string[]): string;
export function stringToArray(input: number): boolean;

//export function stringToArray(input: string | string[]): string | string[] {
//  if (Array.isArray(input)) {
//    return input.join(''); // si es un array lo convierte a string
//  } else {
//    return input.split(''); // si es un string lo convierte a array
//  }
//}

export function stringToArray(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // si es un array lo convierte a string
  } else if (typeof input === 'string') {
    return input.split(''); // si es un string lo convierte a array
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = stringToArray('Nico');
rtaArray.reverse();
console.log('rtaArray', 'Nico =>',rtaArray); // [ 'N', 'i', 'c', 'o' ]

const rtaString = stringToArray(['N', 'i', 'c', 'o']);
rtaString.toString();
console.log('rtaStr', "['N', 'i', 'c', 'o']", rtaString); // Nico

const rtaBoolean = stringToArray(1);
console.log('rtaBoolean', '1 =>', rtaBoolean); // true
