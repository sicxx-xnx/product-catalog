import { filterFavorites } from "../../lib/favorites";
import type { MyProduct } from "../../types/producttype";
import { Header } from "../header";
import { TopFavorites } from "../topfavorites";
import style from "./home.module.css"
export function Home({products}:{products:MyProduct[]}){
const favorites = filterFavorites(products)
 

    return(

      <>
            <Header />
            <div className={style.heroImageCont}>
              <img src="/soultrain-sunset-8214498_1920.jpg" alt="hero image" />
              <div className={style.overlay}>
                <div className={style.overlayText}>
                  <h2>A really cool header that I cant think of at the moment</h2>
                  <div className={style.overlayCallouts}>
                    <div>fast Shipping</div>
                    <div>Eco Friendly</div>
                    <div>Low Prices</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.favoritHolder}>
            <h2 className={style.favoritTitle}>Top Favorites</h2>
            <TopFavorites favorites={favorites}/>
            </div>
      </>  
    )
}