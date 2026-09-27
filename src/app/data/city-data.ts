import { City } from '../models/city';

export const CITY_DATA: City[] = [
  {
    id: 1,
    name: 'São Paulo',  
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
      },
    ],
  },  {
    id: 2,
    name: 'Campinas',  
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
      },
    ],
  },  {
    id: 3,
    name: 'Guarulhos', 
    products: [
      {
        id: 2,
        name: 'Product 2',
        price: 200,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
      },
    ],
  }
];
