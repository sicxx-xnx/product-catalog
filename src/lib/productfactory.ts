import type { MyProduct } from "../types/producttype";

export function productfactory (obj:any):MyProduct{

    return {
        name:obj.name,
        id:obj.product_id,
        description:obj.description,
        price:obj.price,
        numberInCart:0
    }
}