import { useOutletContext } from "react-router"
import ProductCard from "../components/ProductCard/ProductCard"
import style from './Shop.module.css' 
import Button from "../components/Button/Button"
import { useState } from "react"

export default function Shop() {
    const { addItem, data, loading, error, category } = useOutletContext()
    const [selectedCategory , setSelectedCategory] = useState(null)

    const selectProduct = selectedCategory ? data.filter((product) => product.category === selectedCategory) : data

    
    function handleCategory(value) {
        setSelectedCategory(value === '' ? null : value)
    }

    return(
        <div className={style.shopPage}>

            <h1> The Shop</h1>

            {category && <div className={style.categorySelctor}>
                    <select name="category" id="category-selector" onChange={(e) =>  handleCategory(e.target.value)}>
                        <option value='' >All</option>
                        {category.slice(0, 4).map((cat) => (
                            <option key={cat.slug} value={cat.slug}  >
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            }
            {category && <div className={style.category}>
                    <Button isActive={selectedCategory === null} label={"All"} onClick={ () => handleCategory(null)} />
                    {category.slice(0, 4).map((cat) => (
                        <Button key={cat.slug} isActive={selectedCategory === cat.slug} label={cat.name} onClick={ () => handleCategory(cat.slug)}/>
                    ))}
                </div>
            }

            {loading && <p>...loading</p> }
            {error && <p> {error} </p> }
            {selectProduct && <div className={style.productsContainer}>
                {selectProduct.map((product) => (
                    <ProductCard key={product.id} product={product} addItem={addItem} />
                ))}
            </div> }

        </div>
    )
}
