import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Product from './page/Product'
import { Route, Routes} from 'react-router-dom'
import ProductDetail from './page/ProductDetail'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      

      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
