import { Link } from "react-router";
import Button from "../Button/Button";

export default function Navbar() {
    return (
        <nav>
            <h1>Project Shopping Cart</h1>
            <Link to="/"> <Button label={"Home"}/> </Link>
            <Link to="/shop"> <Button label={"Shop"}/> </Link>
            <Link to="/cart"> <Button label={"Cart"}/> </Link>
        </nav>
    )
}