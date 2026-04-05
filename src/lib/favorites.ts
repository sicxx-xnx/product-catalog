import type { MyProduct } from "../types/producttype";




  export function filterFavorites(products:MyProduct[]){
const favorites = products
  .filter(product => product.favorite === true)
  .slice(0, 3);
  return favorites
  }