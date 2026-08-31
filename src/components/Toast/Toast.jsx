import { ShoppingCart, X } from "lucide-react";
import style from "./Toast.module.css" 
import { Link, useLocation } from "react-router";


export default function Toast({toasts}) {
    const location = useLocation()
    
    if (location.pathname === '/cart' || location.pathname === '/rick') return null
    
    return (
        <div className={style.toastContainer}>
            {toasts.length > 0 && <Link to="/cart" ><ShoppingCart className={style.cartIcon} size={64}/></Link>}
            {toasts.map( (toast) => (
                <div key={toast.id} className={style.toast}>
                    <div className={style.toastDetails}>
                        <h3>{toast.product.title}</h3>
                        <X size={16} stroke="var(--text-primary)"  /> 
                        <p> {toast.quantity}</p>
                    </div>
                    <p>Succesfully Added to your cart</p>
                </div>
            ))}
        </div>
    )
}