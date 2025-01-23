export const createProduct = (
  id: string | number,
  isNew: boolean = true, // el valor por defecto es true si no se pasa nada en el argumento isNew al utilizar = true en la declaración de la función
  stock: number = 10,
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
  };
}

const p1 = createProduct('1', true, 100);
console.log(p1);
const p2 = createProduct(2, false);
console.log(p2);
