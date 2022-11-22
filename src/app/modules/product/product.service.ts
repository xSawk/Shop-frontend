import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]
  {
    return [
      {
        name: "Produkt1",
        category: "Kategoria 1",
        description: "Opis produktu 1",
        price: 10.99,
        currency: "PLN"
      },
      {
        name: "Produkt2",
        category: "Kategoria 2",
        description: "Opis produktu 2",
        price: 10.55,
        currency: "PLN"
      }, 
      {
        name: "Produkt3",
        category: "Kategoria 3",
        description: "Opis produktu 3",
        price: 5.51,
        currency: "PLN"
      }
    ];
  }
}
