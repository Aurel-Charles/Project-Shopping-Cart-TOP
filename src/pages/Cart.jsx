import { useOutletContext } from "react-router"
import { Link } from "react-router";
import style from './Cart.module.css'
import ProductInCartCard from "../components/ProductInCartCard/ProductInCartCard";
import Button from "../components/Button/Button";

export default function Cart() {
    const { cart, addItem, removeItem,data, loading, error } = useOutletContext()

    const itemsInCart = cart.map(item => ({
        product: data.find(element => element.id === item.id),
        quantity: item.quantity
    }))
    
    const totalPrice = itemsInCart.reduce((total, item) => total + (item.quantity * item.product.price), 0)
    console.log(totalPrice);
    return(
        <div className={style.cartPage}>
            <h1>Your Cart</h1>

            {loading && <p>...loading</p>}
            {error && <p>{error}</p>}
            {cart.length === 0 &&  <p> empty cart <Link to={"/shop"} >Go to Shop</Link> </p>}
            <div className={style.cart}>
                {itemsInCart.map( (item) => (
                        <ProductInCartCard key={item.product.id} product={item.product} addItem={addItem} quantity={item.quantity} removeItem={removeItem} />
                ) )}
            </div>
            <div className={style.subtotalCart}>
                <h3 className={style.totalText}>Total: </h3>
                <div className={style.totalPrice}>{totalPrice} $</div>
                <Button label={"Checkout"}/>
            </div>
        </div>
    )
}