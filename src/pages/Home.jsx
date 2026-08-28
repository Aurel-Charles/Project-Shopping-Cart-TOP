import { Link } from "react-router";
import Button from "../components/Button/Button";
import style from "./Home.module.css"

export default  function Home() {
    return (
        <div className={style.homePage}>
            <p>Add to cart, add to life."</p>
            <p>free experiance!</p>
            <Link to={"/shop"} > <Button label={"Shop"}/> </Link>
        </div>
    )
}