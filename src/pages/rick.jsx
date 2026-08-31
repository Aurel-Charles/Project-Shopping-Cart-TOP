import { useState } from "react"
import { Link } from "react-router"
import Button from "../components/Button/Button"
import style from "./rick.module.css"

function makeOrderRef() {
    return `PXL-${Math.floor(1000 + Math.random() * 9000)}`
}

export default function Rick() {
    const [orderRef] = useState(makeOrderRef)
    const placedOn = new Date().toLocaleDateString("en-GB")

    return (
        <div className={style.rickPage}>
            <div className={style.receiptWrap}>
                <article className={style.receipt}>
                    <p className={style.brand}>PixelCart</p>
                    <h1 className={style.headline}>Order confirmed</h1>
                    <p className={style.lede}>Thanks for your purchase.</p>

                    <span className={style.stamp}>Paid</span>

                    <dl className={style.meta}>
                        <div className={style.metaRow}>
                            <dt>Order</dt>
                            <dd>{orderRef}</dd>
                        </div>
                        <div className={style.metaRow}>
                            <dt>Placed</dt>
                            <dd>{placedOn}</dd>
                        </div>
                        <div className={style.metaRow}>
                            <dt>Payment</dt>
                            <dd>Card ending 4242</dd>
                        </div>
                        <div className={style.metaRow}>
                            <dt>Delivery</dt>
                            <dd>Free</dd>
                        </div>
                    </dl>

                    <div className={style.videoFrame}>
                        <iframe
                            className={style.rickIframe}
                            src="https://www.youtube-nocookie.com/embed/DLzxrzFCyOs?start=43&autoplay=1&controls=0"
                            title="Order summary"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p className={style.caption}>Order summary &mdash; 3:32</p>

                    <Link to="/shop" className={style.backLink}>
                        <Button label="Back to shop" />
                    </Link>
                </article>
            </div>
        </div>
    )
}
