import { useState } from 'react'
import style from './ProductCard.module.css'
import Button from '../Button/Button'


export default function ProductCard({product, addItem, inCart=false}) {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className={style.productCard} >
            <img src={product.images[0]} alt={product.title} />
            <h3 className={style.titleProduct}> {product.title} </h3>
            {inCart ? null : <p> {product.description} </p>}
            <p> {product.description} </p>
            <p className={style.priceProduct}> {product.price} $</p>
            <div className={style.productCta}>
                <div className={style.quantityCta}>
                    {quantity === 0 ? <Button label={"-"} disabled={true} />
                    : <Button variant={"minus"} label={"-"} onClick={ () => setQuantity(quantity > 0? quantity - 1 : 0 ) }/>}
                    <p>{quantity}</p>
                    <Button variant={"plus"} label={"+"} onClick={ () => setQuantity(quantity + 1) }/>
                </div>
                <Button variant={'add'} label={"Add to cart"} onClick={quantity !== 0 ? () => addItem(product.id, quantity) : null} disabled={quantity === 0} />
            </div>
        </div>
    )
}