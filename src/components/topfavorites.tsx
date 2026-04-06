import React, { useState } from "react";
import type { MyProduct } from "../types/producttype";
import { useCart } from "../hooks/usecart";
import style from '../components/topfavorites.module.css'
import { useInView } from "react-intersection-observer";

function TopFavoritesCard({input}:{input:MyProduct}){
    const [quanity,setQuanity] = useState(1)
function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setQuanity( Number(event.currentTarget.value) )
}
const {addToCart} = useCart()
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce:true,
  });
return (   
    <div>
        <div ref={ref} className={`${style.productCardHolder} ${inView?style.animateEntrace:null}`}>
            <div>
                <div className={style.imageCont}>
                    <img src={input.image} alt={input.description}/>
                    <div className={style.imageOverlay}>{input.name}</div>
                </div>
                <div className="">
                    <p>{input.description}</p>
                    <p>$ {input.price}</p>
                </div>
                <div className={style.actionHolder}>
                    <div>
                        <label htmlFor="quanity">Quanity</label>
                        <input type="number" name="quanity" id="number" min={1} value={quanity} onChange={handleChange} />
                    </div>
                    <button type="button" aria-label={input.name} onClick={()=>addToCart(input,quanity)}>Add To Cart</button>
                </div>
            </div>
        </div>
    </div> 
)
}










export function TopFavorites({favorites}:{favorites:MyProduct[]}){
        const favlistitem =  favorites.map((favorite)=>{ return <li key={favorite.id} className={style.prodcutCardRow}><TopFavoritesCard  input={favorite}/></li> }) 


    return (
        <ul className={style.favProdHolder}>
            {favlistitem}
        </ul>
    )
        

    
}