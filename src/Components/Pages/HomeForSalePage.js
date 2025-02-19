import React from 'react'
import Intro from '../Intro'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer'
import PropertySalesCard from '../PropertSalesCard'

const HomeForSalePage = () => {
  return (
    <div>
      <Intro />
      <PropertySalesCard visibilityFactor='x' />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default HomeForSalePage
