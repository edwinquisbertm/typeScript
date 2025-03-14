import {User, ROLES} from './01-enum';

const currentUser: User = {
    username: 'John',
    role: ROLES.CUSTOMER
};

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        console.log('Is admin');
        return true;
    }
    console.log('Is not admin');
    return false;
}

const rta = checkAdminRole();
console.log(rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER]);
console.log('checkRoleV2', rta3);

export const checkRoleV3 = (...roles: string[]) => { // Rest operator ... para recibir un número indeterminado de argumentos y los convierte en un array de strings
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
