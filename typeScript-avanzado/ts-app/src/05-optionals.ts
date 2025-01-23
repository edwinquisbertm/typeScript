export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number, // Optional parameter deben ir al final
) => {
  return {
    id,
    stock: stock ?? 10, // las variables opcionales deben tener un valor por defecto para evitar errores por lo que se recomienda usar el operador || para asignar un valor por defecto
    isNew: isNew ?? true,// debidoa a que el operador ?? solo asigna un valor si la variable es null o undefined y no si es false esto soluciona el problema de asignar un valor por defecto a una variable opcional
  };
}

const p1 = createProduct('1', true, 100);
console.log(p1);
const p2 = createProduct(2, false);
console.log(p2);
