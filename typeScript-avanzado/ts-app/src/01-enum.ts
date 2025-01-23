export enum ROLES { //un enum es un conjunto de constantes que se pueden usar para hacer referencia a valores fijos
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
};

export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'nico',
  role: ROLES.ADMIN,
};
