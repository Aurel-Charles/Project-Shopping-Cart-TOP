import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"
import { useState } from "react"
import { addItemUtil, removeItemUtil } from "./utils/cartUtils"

function App() {
  const [cart, setCart] = useState([])

  function addItem(id, quantity) {
     setCart(addItemUtil(id, quantity , cart))
  }

  function removeItem(id, all=false) {
    setCart(removeItemUtil(id, cart, all))
  }

  return (
    <>
    <Navbar/>
    <Outlet context={{cart, addItem , removeItem }} />
    </>
  )
}

export default App
