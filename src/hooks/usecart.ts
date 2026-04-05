import { useState } from "react";
import type {MyProduct} from "../types/producttype"
let cart:MyProduct[] = []
let listeners:any = []
function showCartTotal():number{
const cartTotal = cart.reduce<number>((acc,cartitem):number=>{
    return acc = acc+cartitem.numberInCart
},0)   
return cartTotal 
}
function forceRender():void{
listeners.forEach((l:()=>{}):{}=>l())
}
function addToCart(product:MyProduct,quanity:number = 1):void{
const found = cart.find((item)=>item.id===product.id)
if (found) {
    found.numberInCart = found.numberInCart + quanity
    forceRender()
    return
}
cart = [...cart,{...product,numberInCart:quanity}]
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
function removeItemFromCart(product:MyProduct):void{
    const newCart = cart.filter((item)=> item.id !== product.id)
    cart = newCart
    forceRender()
    return   
}
export function useCart(){
    const [,setListener] = useState({})
    listeners.push(()=>setListener({}))

    return {
        cart:cart,
        addToCart,
        removeIncrementFromCart,
        removeItemFromCart,
        showCartTotal
    }
}

export function __resetCartForTests() {
  cart = []
  listeners = []
}