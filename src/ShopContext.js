import { createContext } from "react"


export  const ShopContext = 
    createContext({
        data: [], 
        loading: false, 
        error: null , 
        category: [],  
        loadingCategory: false, 
        errorCategory: null
    })

