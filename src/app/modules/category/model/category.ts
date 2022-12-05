import { Product } from "../../product/model/product";

export interface Category{

    id: number,
    name: string, 
    description: string,
    products: Array<Product>

}