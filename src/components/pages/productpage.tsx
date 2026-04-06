import { useState } from "react";
import { useCart } from "../../hooks/usecart";
import type { MyProduct } from "../../types/producttype";
import { Header } from "../header";
import style from "./productpage.module.css"
import { useNavigate, useParams } from "react-router";

function makecatagoryobj (obj:MyProduct[]):string[]{
    const catagorylist:string[] = [] 
    obj.forEach((item)=>{
        if (catagorylist.includes(item.catagory)) {
            return 
        }
        catagorylist.push(item.catagory)
    })
    return catagorylist

}

export function ProductCardHolder({products}:{products:MyProduct[]}){
    const {addToCart} = useCart()
    const {cata} = useParams()
    let filterprodcuts:MyProduct[];

    if (cata) {
     filterprodcuts = products.filter((input)=>
        input.catagory === cata
    )    
    if(cata === "not set"){
    filterprodcuts = products   

    }
    } else {
     filterprodcuts = products   
    }
   
    const productcards = filterprodcuts.map((input)=>{
        return (
            <>
            <div className={style.productcard}>
                <img src={input.image} alt={input.name}  />
                <h2>{input.name}</h2>
                <p>{input.description}</p>
                <p>{input.price}</p>
                <button onClick={()=>{addToCart(input)}}>Add To Cart</button>
            </div>
            </>
        )
    })
return (
    <>{productcards}</>
)
}


function Filter({products}:{products:MyProduct[]}){
    const catagorys = makecatagoryobj(products)
    const [selectvalue,setselectvalue] = useState<string>("not set")
    const nav = useNavigate()
    return (
        <div className={style.filtercont}>
            <div className={style.optionselectorcont}>
                <label htmlFor="filterselection">Select Catagory</label>
                <select 
                    name="filterselection" 
                    value={selectvalue} 
                    onChange={(e)=>{setselectvalue(e.target.value)}} 
                    id="filterselection"
                    >
                    <option value="not set">Not Set</option>
                        {catagorys.map((cata:string)=>{
                            return <option key={cata} value={cata}>{cata}</option>
                        })}   
                </select>
                <button type="button" onClick={()=>(nav(`/products/${selectvalue}`))}>Filter</button>
            </div>
        </div>
    )
}

export function ProductPage({product}:{product:MyProduct[]}){
    return (
<>
            <Header/>
            <div className={style.mainBody}>
                <Filter products={product}/>
                <div className={style.prodcutGrid} style={{width:"70%"}}>
                    <ProductCardHolder products={product}/>
                </div>
            </div>
</>
    )
}