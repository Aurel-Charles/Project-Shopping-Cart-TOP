import { Outlet } from "react-router"
import Navbar from "./components/NavBar/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
