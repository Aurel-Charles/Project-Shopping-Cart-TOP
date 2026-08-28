
import style from './ProductInCartCard.module.css'
import Button from '../Button/Button'

export default function ProductInCartCard({product,quantity, addItem,removeItem}) {


    return (
        <div className={style.cardContainer} >
            <img src={product.images[0]} alt={product.title} />
            <p> {product.title} </p>
            <div className={style.productCta}>
                <div className={style.quantityCta}>
                    <Button variant={"minus"} label={"-"} onClick={() => removeItem(product.id)} />
                    <p>{quantity}</p>
                    <Button variant={"plus"} label={"+"} onClick={() => addItem(product.id,1)}/>
                </div>
                <Button variant={'remove'} label={"Remove"} onClick={() => removeItem(product.id, true)}  />   
            </div>
            <p>{product.price} $</p>
        </div>
    )
}