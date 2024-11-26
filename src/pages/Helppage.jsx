import React from 'react'
import { Footer } from '../components/Footer'
import { Aboutsteps } from '../components/Aboutsteps'
import { Returnpic } from '../components/Returnpic'
import Navbar from '../components/Navbar'
import { Howhelp } from '../components/Howhelp'
import { Testimonial } from '../components/Testimonial'
import { Crousel } from '../components/Crousel'
import { Test } from '../components/Test'

export const Helppage = () => {
  return (
    <div className='md:mt-2 mt-12'>
     
    
     <Howhelp></Howhelp>
      <Returnpic></Returnpic>
        <Aboutsteps></Aboutsteps>
        
        <Testimonial></Testimonial>
        <hr className='border-slate-400  ' />
        
        
        
    </div>
  )
}
