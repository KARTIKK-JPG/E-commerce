import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { Navbarrr } from '../components/Navbarrr'
import { Crousel } from '../components/Crousel'
import { Crouselll } from '../components/Crouselll'
import ProductH from '../components/ProductH'
import { Accesories } from '../components/Accesories'
import { Worrying } from '../components/Worrying'
import { Tatanew } from '../components/Tatanew'
import { Footer } from '../components/Footer'



export const Homepage = () => {
  return (
    <div className='mt-16'>
        
        <Navbarrr></Navbarrr>
        <Crousel></Crousel>
        <Crouselll></Crouselll>
        <Worrying></Worrying>
        <ProductH></ProductH>
        
        <Accesories></Accesories>
        <Tatanew></Tatanew>
        
        
    </div>
  )
}
