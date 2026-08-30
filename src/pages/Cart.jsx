import { useOutletContext } from "react-router"
import { Link } from "react-router";
import style from './Cart.module.css'
import ProductInCartCard from "../components/ProductInCartCard/ProductInCartCard";
import Button from "../components/Button/Button";
import { Package, Truck } from "lucide-react";

export default function Cart() {
    const { cart, addItem, removeItem,data, loading, error } = useOutletContext()
    if (loading || !data.length) return <p>...loading</p>

    const itemsInCart = cart.map(item => ({
        product: data.find(element => element.id === item.id),
        quantity: item.quantity
    }))

    const shipping = 15
    const subTotalPrice = itemsInCart.reduce((total, item) => total + (item.quantity * item.product.price), 0)
    console.log(subTotalPrice);
    return(
        <div className={style.cartPage}>
            <h1>Your Cart</h1>
            <div className={style.delivery} >
                <Package />
                <p>Free delivery for order over 50$ </p>
                <Truck />
            </div>
    
            {loading && <p>...loading</p>}
            {error && <p>{error}</p>}
            {cart.length === 0 && (
                <div className={style.emptyCart}>
                    <p>.....is EMPTY</p>
                    <Link to={"/shop"}>Visit our Shop</Link>
                </div>
            )}
    
            {cart.length > 0 && (
                <div className={style.cartLayout}>
                    <table className={style.cart}>
                        <thead>
                            <tr className={style.cartHeader}>
                                <th>Products</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsInCart.map((item) => (
                                <ProductInCartCard 
                                    key={item.product.id} 
                                    product={item.product} 
                                    addItem={addItem} 
                                    quantity={item.quantity} 
                                    removeItem={removeItem} 
                                />
                            ))}
                        </tbody>
                    </table>
    
                    <table className={style.subtotalCart}>
                        <tbody>
                            <tr>
                                <td><h4>Subtotal:</h4></td>
                                <td><h4>{subTotalPrice.toFixed(2)}$</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Shipping:</h4></td>
                                <td>{subTotalPrice >= 50? <h4>0$ (free) </h4> : <h4>{shipping}</h4>}</td>
                            </tr>
                            <tr>
                                <td><h3 className={style.totalText}>Total:</h3></td>
                                <td className={style.totalPrice}>{(subTotalPrice+shipping).toFixed(2)} $</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><Button label={"Checkout"}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}