import { useContext, useState } from 'react'
import style from './ProductCard.module.css'
import Button from '../Button/Button'
import { CircleMinus, CirclePlus } from 'lucide-react'
import { Link } from 'react-router'
import { ShopContext } from '../../ShopContext'


export default function ProductCard({product, inCart=false}) {
    const {addItem} = useContext(ShopContext)
    const [quantity, setQuantity] = useState(1)

    return (
        <div className={style.productCard} >
            <img src={product.images[0]} alt={product.title} />
            <h3 className={style.titleProduct}> {product.title} </h3>
            {inCart ? null : <p> {product.description} </p>}
            <p className={style.priceProduct}> {product.price} $</p>
            <div className={style.productCta}>
                <div className={style.quantityCta}>
                    {quantity === 0 ? <Button label={"-"} disabled={true} />
                    : <Button variant={"minus"} label={<CircleMinus size={16} />} onClick={ () => setQuantity(quantity > 0? quantity - 1 : 0 ) }/>}
                    <p>{quantity}</p>
                    <Button variant={"plus"} label={<CirclePlus size={16} />} onClick={ () => setQuantity(quantity + 1) }/>
                </div>
                <div className={style.addDetailsCTA} >
                    <Button variant={'add'} label={"Add to cart"} onClick={quantity !== 0 ? () => addItem(product.id, quantity) : null} disabled={quantity === 0} />
                    <Link to={`/product/${product.id}`} > <Button variant={'detailLink'} label={"View Details"} /> </Link>
                </div>
            </div>
        </div>
    )
}