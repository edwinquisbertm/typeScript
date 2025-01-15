import { subDays, format} from 'date-fns';

const date = new Date(1998, 0, 20); // los meses empiezan en 0 (enero) y terminan en 11 (diciembre)
const rta = subDays(date, 30);
const str = format(rta, 'yyyy-MM-dd');

console.log(str); // 1998-02-10
