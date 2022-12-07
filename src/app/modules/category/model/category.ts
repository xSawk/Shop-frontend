import { Product } from "../../common/model/product";

export interface Category{

    id: number,
    name: string, 
    description: string,
    products: Array<Product>

}