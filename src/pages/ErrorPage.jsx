import style from "./ErrorPage.module.css"
import Button from "../components/Button/Button";
import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <div className={style.errorPage}>
            <h1>
                Oupppppsssi....
            </h1>
            <Link to="/" > <Button label={"Return Home"}/> </Link>
        </div>
    )
}