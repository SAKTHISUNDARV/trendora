import React from 'react'
import { BrowserRouter,Router,Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Cart from './components/Cart/cart'
const App =() => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
