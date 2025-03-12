export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year; // para acceder a las propiedades de la clase se usa this y el nombre de la propiedad
    this.month = month;
    this.day = day;
  }

  printFormat():string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  add(amount: number, type: 'day' | 'months' | 'years'): MyDate {
    if (type === 'day') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
    return this;
  }

}


const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat()); // 1993/7/9
