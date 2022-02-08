import { Time } from '@angular/common';

export class Cita {
  public id: string | undefined;
  public name: string | undefined;
  public age: number | undefined;
  public hour: string | undefined;
  public lastName: string | undefined;
  public date: string | undefined;

  constructor(
    id?: string,
    name?: string,
    age?: number,
    hour?: string,
    lastName?: string,
    date?: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.hour = hour;
    this.lastName = lastName;
    this.date = date;
  }
  // constructor() {}
}
