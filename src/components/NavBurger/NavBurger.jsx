import { Menu } from "lucide-react";
import Button from "../Button/Button";
import { useState } from "react";
import { NavLink } from "react-router";
import style from "./NavBurger.module.css"

export default function NavBurger({cart, className}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    console.log(isOpen);
    
    return (
        <div className={className}>
        <Button variant={"burger"} label={<Menu  />} onClick={handleOpen}/> 
        {isOpen ? 
            <nav className={style.burgerNav}>
                <NavLink onClick={handleOpen} to="/"> Home </NavLink>
                <hr />
                <NavLink onClick={handleOpen} to="/shop"> Shop </NavLink>
                <hr />
                <div className={style.cartMenuBurger}>
                    <NavLink onClick={handleOpen} to="/cart"> Cart </NavLink>
                    {totalItems === 0 ? null : <div> {totalItems} </div>}
                </div>
            </nav> 
            : null}
        </div>
    )
}