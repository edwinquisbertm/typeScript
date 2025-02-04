const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 12 de febrero de 1993 recuerda que los meses empiezan en 0
date.getHours();
date.getTime();
date.toISOString();

console.log(date);
console.log(date2);


export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year; // para acceder a las propiedades de la clase se usa this y el nombre de la propiedad
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate);
