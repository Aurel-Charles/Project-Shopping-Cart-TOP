import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"
import { useState } from "react"
import { addItemUtil, removeItemUtil } from "./utils/cartUtils"
import useProduct from "./hooks/useProduct"

function App() {
  const [cart, setCart] = useState([])

  function addItem(id, quantity) {
     setCart(addItemUtil(id, quantity , cart))
  }

  function removeItem(id, all=false) {
    setCart(removeItemUtil(id, cart, all))
  }


  console.log(cart);
  
  const {data, loading, error} = useProduct()

  return (
    <>
    <Navbar cart={cart} />
    <Outlet context={{cart, addItem , removeItem , data, loading, error}} />
    </>
  )
}

export default App
