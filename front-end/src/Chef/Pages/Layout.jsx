import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';
const Layout = () => {
  return (
    <div className='_chef'>
      <SideBar/>
      <div className='chef_Content'>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default Layout