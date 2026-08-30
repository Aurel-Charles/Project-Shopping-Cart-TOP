import { NavLink } from "react-router";
import  style  from "./Navbar.module.css";
import { Moon, ShoppingCart, Sun, ToggleLeft, ToggleRight } from "lucide-react";
import NavBurger from "../NavBurger/NavBurger";

export default function Navbar({cart, toggleTheme, theme}) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    return (
        <nav className={style.navbar}>
            <h1>PixelCart</h1>
            <NavBurger className={style.burgerMenu} cart={cart}/>
            <div className={style.navLink}>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/shop"> Shop </NavLink>
                <NavLink to="/cart"> Cart </NavLink>
                <div className={style.cartIcon}>

                    <NavLink to="/cart"> <ShoppingCart size={32} /> </NavLink>
                    {totalItems === 0 ? null : <div> {totalItems} </div>}
                </div>
                <div className={style.themeToggle}>
                    {theme === 'light' 
                        ? <ToggleLeft className={style.toggleIcon} onClick={toggleTheme} />
                        : <ToggleRight className={style.toggleIcon} onClick={toggleTheme} />
                    }
                    <span className={theme === 'light' ? style.sunIcon : style.moonIcon}>
                        {theme === 'light' ? <Sun /> : <Moon />}
                    </span>
                </div>
            </div>

        </nav>
    )
}