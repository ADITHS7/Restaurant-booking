import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


const Pages = ({cartItems}) => {
  return (
    <div>
    <Navbar cartItems={cartItems}/>
    <div className='outlet'>
    <Outlet/>
    </div>
    
    <Footer/>
    </div>
  )
}

export default Pages