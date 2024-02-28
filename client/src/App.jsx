import './App.css'
import { Routes, Route, } from "react-router-dom"
import Home from './views/Home'
import Categories from './views/Categories'
import MyCart from './views/MyCart'
import AllPlants from './views/AllPlants'
import PlantName from './views/PlantName'




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/allplants" element={<AllPlants />} />
        <Route path="/plantname" element={<PlantName />} />
      </Routes>
    </>
  )
}

export default App
