import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'lynn',
    role: 'seller'
  },
  {
    username: 'dal',
    role: 'seller'
  },
  {
    username: 'flynn',
    role: 'customer'
  }
];

const rta = _.groupBy(data, 'role');
console.log(rta);

