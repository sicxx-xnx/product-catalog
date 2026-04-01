import { useState } from "react";
import type {MyProduct} from "../types/producttype"
let cart:MyProduct[] = []
let listeners:any = []
function forceRender():void{
listeners.forEach((l:()=>{}):{}=>l())
}
function addToCart(product:MyProduct):void{
const found = cart.find((item)=>item.id===product.id)
if (found) {
    found.numberInCart++
    forceRender()
    return
}
cart = [...cart,{...product,numberInCart:1}]
forceRender()
}
function removeIncrementFromCart(product:MyProduct):void{
const found = cart.find((item)=>item.id===product.id)
if (found) {
    found.numberInCart--
    forceRender()
}  else{return}
if (found.numberInCart <= 0) {
   const newCart = cart.filter((item)=> item.id !== product.id)
   cart = newCart
   forceRender()
   return
}
return
}

export function useCart(){
    const [,setListener] = useState({})
    listeners.push(()=>setListener({}))

    return {
        cart:cart,
        addToCart,
        removeIncrementFromCart
    }
}

export function __resetCartForTests() {
  cart = []
  listeners = []
}