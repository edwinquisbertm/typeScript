import { Product } from './product.model'; // en esta línea se importa la interfaz Product desde el archivo './product.model'.


export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'size'>;

export interface updateProductDto extends Partial<CreateProductDto>{}

type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}
