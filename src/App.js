import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Solution from './pages/Solution'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}



   
  


export default App
