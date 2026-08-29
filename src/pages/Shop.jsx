import { useOutletContext } from "react-router"
import ProductCard from "../components/ProductCard/ProductCard"
import style from './Shop.module.css' 

export default function Shop() {
    const { cart, addItem, removeItem, data, loading, error } = useOutletContext()

    return(
        <div className={style.shopPage}>

            <h1> The Shop</h1>

            {loading && <p>...loading</p> }
            {error && <p> {error} </p> }
            {data && <div className={style.productsContainer}>
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} addItem={addItem} />
                ))}
            </div> }

        </div>
    )
}
