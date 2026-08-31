    import { Link, useOutletContext, useParams } from "react-router"
    import Button from "../components/Button/Button";
    import { useState } from "react";
    import style from './ProductPage.module.css'
    import { CircleMinus, CirclePlus } from "lucide-react";
    import Carousel from "../components/Caroussel/Caroussel";

    export default function ProductPage() {
        const { id } = useParams()
        const { addItem, data, loading, error } = useOutletContext()
        const product = data.find( (p) => p.id === Number(id) )
        const [quantity, setQuantity] = useState(1)


        if (loading || !data.length) return <p>...loading</p>
        if (error) return <p>{error}</p>
        if (!product) return <p>Product not found</p>
        return (
            <div className={style.productPage}>
                <div className={style.productWrapper}>
                    <Carousel className={style.caroussel} product={product}/>
                    <div className={style.imagesContainer}>
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={product.title} />
                        ))}
                    </div>
                    <div className={style.productInfo}>
                        <h1 className={style.productTitle}>{product.title}</h1>
                        <p>{product.description}</p>
                        <p className={style.priceProduct}>{product.price} $</p>
                        <div className={style.productCta}>
                            <div className={style.quantityCta}>
                                {quantity === 0 ? <Button label={"-"} disabled={true} />
                                : <Button variant={"minus"} label={<CircleMinus size={16} />} onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)} />}
                                <p>{quantity}</p>
                                <Button variant={"plus"} label={<CirclePlus size={16} />} onClick={() => setQuantity(quantity + 1)} />
                            </div>
                            <div className={style.addDetailsCTA}>
                                <Button variant={'add'} label={"Add to cart"} onClick={quantity !== 0 ? () => addItem(product.id, quantity) : null} disabled={quantity === 0} />
                                <Link to={`/shop`} > <Button variant={'shop'} label={"Back to Shop"} /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.reviewsWrapper}>
                    <h2>Reviews from custumers</h2>
                        {product.reviews.length ?
                        product.reviews.map( (review, index) => (
                            <div key={index} className={style.review}>
                                <p> {review.reviewerName} </p>
                                <p>
                                    {Array.from({length: 5}, (_, i) => (
                                        <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                    ))}
                                </p>
                                <p>{new Date(review.date).toLocaleDateString('en-US')}</p>
                                <p> "{review.comment}" </p>
                            </div>
                        ) )
                        : null }
                </div>
            </div>
        )
    }