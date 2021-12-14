import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesProvider {

  items = [
    {
      name: 'Milk',
      quantity: '1'
    },
    {
      name: 'Bread',
      quantity: '2'
    },
    {
      name: 'Mangos',
      quantity: '3'
    },
    {
      name: 'Cilantra',
      quantity: '1'
    },
    {
      name: 'Steak',
      quantity: '3'
    },
  ];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }

}