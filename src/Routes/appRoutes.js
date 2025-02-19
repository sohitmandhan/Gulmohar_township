import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home'
import CommunitiesPage from '../Components/Pages/CommunitiesPage'
import AboutPage from '../Components/Pages/AboutPage'
import HomeForSalePage from '../Components/Pages/HomeForSalePage'
import Testimonials from '../Components/Pages/Testimonials'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/communities' element={<CommunitiesPage />} />
        <Route path='/homeforsale' element={<HomeForSalePage />} />
    </Routes>
  )
}

export default AppRoutes