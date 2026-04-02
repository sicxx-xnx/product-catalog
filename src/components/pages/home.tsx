import type { MyProduct } from "../../types/producttype";
import { Header } from "../header";

export function Home({products}:{products:MyProduct[]}){
const favorites = products.filter((prodcut)=>{
  if (prodcut.favorite) {
    return prodcut
  }
const favoritesfiltered = favorites.splice(0,2)  
})
    return(

      <>
            <Header />
            {/* <TopFavorites/> */}
      </>  
    )
}