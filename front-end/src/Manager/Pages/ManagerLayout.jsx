import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const ManagerLayout = () => {
  return (
    <div><SideBar/>
    <div className='manager_outlet'>
      <Outlet/>
    </div>
    </div>
  )
}

export default ManagerLayout