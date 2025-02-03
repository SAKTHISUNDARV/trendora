import React from 'react'
import { BrowserRouter,Router,Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App =() => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
