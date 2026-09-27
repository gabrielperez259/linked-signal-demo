import { Product } from "./product";


export interface City {
    id: number;
    name: string;
    products: Product[]
}