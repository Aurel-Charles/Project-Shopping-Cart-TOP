import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"
import { useState } from "react"
import { addItemUtil, removeItemUtil } from "./utils/cartUtils"
import useProduct from "./hooks/useProduct"
import Toast from "./components/Toast/Toast"
import useCategory from "./hooks/useCategory"

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      document.documentElement.classList.toggle('dark')
  }

  const [cart, setCart] = useState([])
  const [toasts, setToasts] = useState([])

  function addToast(product, quantity) {
      const tempId = Date.now()
      setToasts(toasts => [...toasts, { tempId, product, quantity }])
      setTimeout(() => {
          setToasts(toasts => toasts.filter(t => t.tempId !== tempId))
      }, 3000)
  }

  function addItem(id, quantity) {
     setCart(addItemUtil(id, quantity , cart))
     const product = data.find(item => item.id === id)
     addToast(product, quantity)
  }

  function removeItem(id, all=false) {
    setCart(removeItemUtil(id, cart, all))
  }

  function emptyCart() {
    setCart([])
  }

  
  const {data, loading, error} = useProduct()
  const { data: category, loading: loadingCategory, error: errorCategory } = useCategory()
  
  return (
    <>
    <Navbar cart={cart} toggleTheme={toggleTheme} theme={theme} />
    <Toast toasts={toasts}/>
    <Outlet context={{cart, addItem , removeItem , data, loading, error, category, loadingCategory, errorCategory, emptyCart}} />
    </>
  )
}

export default App
