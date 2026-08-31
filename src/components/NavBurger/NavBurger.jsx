import { Menu, Moon, Sun, ToggleLeft, ToggleRight } from "lucide-react";
import Button from "../Button/Button";
import { useState } from "react";
import { NavLink } from "react-router";
import style from "./NavBurger.module.css"

export default function NavBurger({cart, className, theme, toggleTheme}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    
    return (
        <div className={className}>
        <Button variant={"burger"} label={<Menu  />} onClick={handleOpen}/> 
        {isOpen  ? 
            <>
                <div className={style.overlay} onClick={handleOpen} ></div>
                <nav className={style.burgerNav}>
                    <NavLink onClick={handleOpen} to="/"> Home </NavLink>
                    <hr />
                    <NavLink onClick={handleOpen} to="/shop"> Shop </NavLink>
                    <hr />
                    <div className={style.cartMenuBurger}>
                        <NavLink onClick={handleOpen} to="/cart"> Cart </NavLink>
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
                </nav> 
            </>
            : null}
        </div>
    )
}