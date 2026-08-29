import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"
import { useState } from "react"
import { addItemUtil, removeItemUtil } from "./utils/cartUtils"
import useProduct from "./hooks/useProduct"
import Toast from "./components/Toast/Toast"

function App() {
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

  
  const {data, loading, error} = useProduct()
  
  return (
    <>
    <Navbar cart={cart} />
    <Toast toasts={toasts}/>
    <Outlet context={{cart, addItem , removeItem , data, loading, error}} />
    </>
  )
}

export default App
