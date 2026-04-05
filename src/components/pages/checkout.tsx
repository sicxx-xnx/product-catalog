import { useCart } from "../../hooks/usecart"
import type { MyProduct } from "../../types/producttype";
import { Header } from "../header";
import style from "./checkout.module.css"

function Cartitem({ input }: { input: MyProduct }) {
    const {removeItemFromCart,removeIncrementFromCart,addToCart}= useCart()
  return (
    <>

      <div className={style.cartItem}>
        <div className={style.productHolder}>
          <div className={style.removeItem}
                onClick={()=>removeItemFromCart(input)}>
            <img
              className={style.removeItemIMG}
              src="/delete-left-svgrepo-com.svg"
              alt="remove item from cart icon"
            />
          </div>

          <div className={style.productIMageHolder}>
            <img
              className={style.productImage}
              src={input.image}
              alt="product image"
            />
          </div>
          <div className={style.prouctName}>
            <p>{input.name.slice(0,15) }</p>
          </div>
        </div>
      </div>


      <div className={style.cartItem}>
        <p>${input.price}</p>
      </div>


      <div className={`${style.cartItem} ${style.flex}`}>
        <p 
            className={style.quanity}
            onClick={()=>(removeIncrementFromCart(input))}>-</p>
        <p>{input.numberInCart}</p> 
        <p 
            onClick={()=>(addToCart(input))}
            className={style.quanity}>+</p>
      </div>

    
      <div className={style.cartItem}>
        <p>${input.price * input.numberInCart}</p>
      </div>
    </>
  );
}

function CheckoutBox(){
        const {cart} = useCart()

    const subtotal = cart.reduce<number>((acc,itm):number=>
                {return acc + (itm.price*itm.numberInCart)},
                0)
    return (
        <div className={style.checkoutBox}>
            <div className={style.checkoutsubbox}>
                <p>subtotal:</p><p>${subtotal.toFixed(2)}</p>
            </div>
            <div className={style.checkoutsubbox}><p>Shipping:</p><p>${10.00.toFixed(2)}</p></div>
            <div className={style.checkoutsubbox}><p>Tax:</p><p>calculated at checkout</p></div>
            <div className={style.checkoutsubbox}><p>Total:</p><p>${(subtotal + 10.00).toFixed(2)}</p></div>
            <button type="button">Checkout</button>
        </div>
    )
}

export function Cart(){
const {cart} = useCart()
const cartitems = cart.map((cartitem=>{return <Cartitem key={cartitem.id} input={cartitem}/>}));
return (
<>
<Header/>
<div className={style.checkoutPage}>
    <div className={style.cartGrid}>
        <div className={style.cartItem}><p>Product</p></div>
        <div className={style.cartItem}><p>Price</p></div>
        <div className={style.cartItem}><p>quanity</p></div>
        <div className={style.cartItem}><p>subtotal</p></div>
        {cartitems.length>0?cartitems:<><p>No items in Cart!</p></>}
    </div>
    <div className="">
        <CheckoutBox/>
    </div>
</div>


</>

)    



}