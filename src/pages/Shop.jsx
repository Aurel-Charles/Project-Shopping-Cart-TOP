import { useState } from "react"
import { useOutletContext } from "react-router"
import useProduct from "../hooks/useProduct"

export default function Shop() {
    const { cart, addItem, removeItem } = useOutletContext()

    const {data, loading, error} = useProduct()
    console.log(data);
    
    
    return(
        <div className="shop-page">
            <h1>Shop page</h1>
        </div>
    )
}
