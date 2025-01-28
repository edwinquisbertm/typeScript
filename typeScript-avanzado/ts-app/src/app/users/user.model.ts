import { BaseModel } from '../base.model'

export enum ROLES { //un enum es un conjunto de constantes que se pueden usar para hacer referencia a valores fijos
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
};

export interface User extends BaseModel {
  username: string;
  role: ROLES;
};
