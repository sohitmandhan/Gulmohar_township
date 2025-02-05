import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' />
        <Route path='/testimonials' />
        <Route path='/communities' />
        <Route path='/homeforsale' />
    </Routes>
  )
}

export default AppRoutes