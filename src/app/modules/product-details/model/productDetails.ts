import { Review } from "./review";

export interface ProductDetails{
    id: number,
    name: string,
    category: string,
    description: string,
    price: number,
    currency: string,
    image: string,
    reviews: Array<Review>
}