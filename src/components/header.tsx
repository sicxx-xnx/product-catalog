import { Link } from "react-router";
import { useCart } from "../hooks/usecart";
import styles from "./header.module.css"


export function Header(){
    const {cart} = useCart()
    return (
        <div className={styles.headerCont}>
            <div className={styles.titleCont}>
                <h1>Spekarms Test Site</h1>
            </div>
            <ul className={styles.nav}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>Product Catalogue</Link></li>
            </ul>
            

            <Link className={styles.cartImageHolder} to={"/cart"}>
                <img 
                    src="/cart.svg" 
                    className={styles.cartIcon} 
                    alt="picture of the cart"/>
                <div
                    className={styles.cartTotalNumberCont}
                >
                    <p className={styles.cartTotalNumber}>
                        {cart.length>0?cart.length:null}
                    </p>
                </div>
            </Link>    
            </div>
       

    )
}