import type { MyProduct } from "../types/producttype";

export function productfactory (obj:any):MyProduct{

    return {
        name:obj.title,
        id:obj.id,
        description:obj.description,
        price:obj.price,
        numberInCart:0,
        favorite: Math.random() > .5,
        image:obj.images[0],
        catagory:obj.category
    }
}