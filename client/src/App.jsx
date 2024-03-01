import './App.css'
import { Routes, Route, } from "react-router-dom"
import Home from './views/Home'
import Categories from './views/Categories'
import MyCart from './views/MyCart'
import AllPlants from './views/AllPlants'
import PlantName from './views/PlantName'
import Admin from './views/Admin'
import AdminCreate from './views/AdminCreate'
import Edit from './views/Edit'
import OnePlant from './views/OnePlant'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/allplants" element={<AllPlants />} />
        <Route path="/plantname" element={<PlantName />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<AdminCreate />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/oneplant/:id" element={<OnePlant />} />
      </Routes>
    </>
  )
}

export default App
