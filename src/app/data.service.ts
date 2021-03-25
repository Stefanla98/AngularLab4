import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  createDb() {
    let products = [
      { id: 1, name: "Chocolate" },
      { id: 2, name: "Jam" },
      { id: 3, name: "Pie" },
      { id: 4, name: "Lemonade" },
      { id: 5, name: "Sunny days" }
    ];
    return { products };
  }
}
