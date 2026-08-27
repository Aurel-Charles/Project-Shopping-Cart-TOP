import { Link } from "react-router";
import Button from "../components/Button/Button";

export default  function Home() {
    return (
        <div data-testid="home-page">
            <h1>Home Page</h1>
            <h1>Let's do shoppping</h1>
            <Link to={"/shop"} > <Button label={"Shop"}/> </Link>
        </div>
    )
}