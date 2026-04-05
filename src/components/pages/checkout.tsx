import { useCart } from "../../hooks/usecart"
import type { MyProduct } from "../../types/producttype";
import { Header } from "../header";
import style from "./checkout.module.css"

function Cartitem({ input }: { input: MyProduct }) {
  return (
    <>

      <div className={style.cartItem}>
        <div className={style.productHolder}>
          <div className={style.removeItem}>
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
            <p>{input.name}</p>
          </div>
        </div>
      </div>


      <div className={style.cartItem}>
        <p>${input.price}</p>
      </div>


      <div className={style.cartItem}>
        <p>{input.numberInCart}</p>
      </div>

    
      <div className={style.cartItem}>
        <p>${input.price * input.numberInCart}</p>
      </div>
    </>
  );
}



export function Cart(){
const {cart} = useCart()
const cartitems = cart.map((cartitem=>{return <Cartitem key={cartitem.id} input={cartitem}/>}));
return (
<>
<Header/>
<div className={style.cartGrid}>
    <div className={style.cartItem}><p>Product</p></div>
    <div className={style.cartItem}><p>Price</p></div>
    <div className={style.cartItem}><p>quanity</p></div>
    <div className={style.cartItem}><p>subtotal</p></div>
    {cartitems.length>0?cartitems:<><p>No items in Cart!</p></>}
</div>


</>

)    



}