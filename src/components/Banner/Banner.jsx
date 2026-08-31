import style from "./Banner.module.css"

export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.bannerInner}>
                <span>Free shipping on orders over 50$ — limited time!</span>
                <span>New products added daily — shop now!</span>
                <span>Free shipping on orders over 50$ — limited time!</span>
                <span>New products added daily — shop now!</span>
            </div>
        </div>
    )
}