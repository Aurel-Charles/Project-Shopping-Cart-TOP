import style from './ProductInCartCard.module.css'
import Button from '../Button/Button'
import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react'

export default function ProductInCartCard({product, quantity, addItem, removeItem}) {
    return (
        <tr className={style.cardRow}>
            <td className={style.productInfo}>
                <img src={product.images[0]} alt={product.title} />
                <p className={style.productTitle}>{product.title}</p>
                <p className={style.unitPrice}>{product.price}$ </p>
            </td>
            <td>
                <div className={style.quantityCta}>
                    <Button variant={"minus"} label={<CircleMinus size={16} />} onClick={() => removeItem(product.id)} />
                    <p>x{quantity}</p>
                    <Button variant={"plus"} label={<CirclePlus size={16} />} onClick={() => addItem(product.id, 1)} />
                </div>
            </td>
            <td>{(product.price * quantity).toFixed(2)} $</td>
            <td>
                <Button variant={'remove'} label={<Trash2 size={16} color="currentColor" />} onClick={() => removeItem(product.id, true)} />
            </td>
        </tr>
    )
}