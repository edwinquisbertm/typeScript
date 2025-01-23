const prices: (number | string)[] = [100, 75, 42, 'as'];
prices.push(23);
prices.push('23');

let user: [string, number, boolean];
// las tuplas son arreglos con un número fijo de elementos y tipos fijos en un orden específico
//user = ['nico', 27];
//uuser = [12, 23];

//uuser = [];
//uuser = ['nico'];
//uuser = ['nico', 23];
user = ['nico', 23, true];
const [username, age] = user;
console.log(username);
console.log(age);
