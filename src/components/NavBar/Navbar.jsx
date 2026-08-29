import { NavLink } from "react-router";
import  style  from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";

export default function Navbar({cart}) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    return (
        <nav className={style.navbar}>
            <h1>PixelCart</h1>
            <div className={style.navLink}>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/shop"> Shop </NavLink>
                <NavLink to="/cart"> Cart </NavLink>
                <div className={style.cartIcon}>

                    <NavLink to="/cart"> <ShoppingCart size={32} /> </NavLink>
                    
                    {totalItems === 0 ? null : <div> {totalItems} </div>}
                </div>
            </div>

        </nav>
    )
}