import { useEffect, useState } from "react";

export default function useProduct(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect( () => {
        const url = 'https://dummyjson.com/products'
        const dataFetch = async () =>{
            try {
                setLoading(true)
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Error fetching shop items - Status: " + response.status);
                }
                const responseData = await response.json()
                
                setData(responseData.products)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        dataFetch() 
    } , [])
    return {data, loading, error}
}