import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"
import { useReducer, useState } from "react"
import cartReducer from "./reducers/cartReducer"
import useProduct from "./hooks/useProduct"
import Toast from "./components/Toast/Toast"
import useCategory from "./hooks/useCategory"
import { ShopContext } from "./ShopContext"

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      document.documentElement.classList.toggle('dark')
  }

  const [toasts, setToasts] = useState([])


  function addToast(product, quantity) {
      const tempId = Date.now()
      setToasts(toasts => [...toasts, { tempId, product, quantity }])
      setTimeout(() => {
          setToasts(toasts => toasts.filter(t => t.tempId !== tempId))
      }, 3000)
  }


  const [cart, dispatch] = useReducer(cartReducer, [])

  function addItem(id, quantity) {
      dispatch({ type: 'ADD_ITEM', id, quantity })
      const product = data.find(item => item.id === id)
      addToast(product, quantity)
  }

  function removeItem(id, all=false) {
      dispatch({ type: 'REMOVE_ITEM', id, all })
  }

  function emptyCart() {
      dispatch({ type: 'EMPTY_CART' })
  }

  const {data, loading, error} = useProduct()
  const { data: category, loading: loadingCategory, error: errorCategory } = useCategory()


  
  return (
    <>
    <ShopContext value={{
        data, 
        loading, 
        error, 
        category,  
        loadingCategory, 
        errorCategory,
        cart,
        addItem,
        removeItem,
        emptyCart
    }}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Toast toasts={toasts}/>
      <Outlet/>
      {/* <Outlet context={{cart, addItem , removeItem , data, loading, error, category, loadingCategory, errorCategory, emptyCart}} /> */}
    </ShopContext>
    </>
  )
}

export default App
