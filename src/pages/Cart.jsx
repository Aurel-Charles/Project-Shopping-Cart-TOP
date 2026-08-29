import { useOutletContext } from "react-router"
import { Link } from "react-router";
import style from './Cart.module.css'
import ProductInCartCard from "../components/ProductInCartCard/ProductInCartCard";
import Button from "../components/Button/Button";

export default function Cart() {
    const { cart, addItem, removeItem,data, loading, error } = useOutletContext()
    if (loading || !data.length) return <p>...loading</p>

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
            {cart.length === 0 &&  (
                <div className={style.emptyCart}>
                    <p>.....is EMPTY</p>
                    <Link to={"/shop"} >Visit our Shop</Link>
                </div>

                )}

            {cart.length > 0 && (
                <div className={style.cart}>
                    <div className={style.cartHeader}>
                        <p>Products</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    {itemsInCart.map( (item) => (
                            <ProductInCartCard key={item.product.id} product={item.product} addItem={addItem} quantity={item.quantity} removeItem={removeItem} />
                    ) )}
                </div>
            )}
            {cart.length > 0 && (
                <div className={style.subtotalCart}>
                    <h3 className={style.totalText}>Total: </h3>
                    <div className={style.totalPrice}>{totalPrice.toFixed(2)} $</div>
                    <Button label={"Checkout"}/>
                </div>
            )}
        </div>
    )
}