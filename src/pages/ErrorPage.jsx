import Button from "../components/Button/Button";
import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <div className="error-page">
            <h1>
                Oupppppsssisisisisisi
            </h1>
            <Link to="/" > <Button label={"Return Home"}/> </Link>
        </div>
    )
}