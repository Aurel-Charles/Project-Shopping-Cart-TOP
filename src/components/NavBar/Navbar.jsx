import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <h1>Project Shopping Cart</h1>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/shop"> Shop </NavLink>
            <NavLink to="/cart"> Cart </NavLink>
        </nav>
    )
}