import React from 'react'
import './SideBar.css'
import { Link, useNavigate } from 'react-router-dom'
import manager from '../../Assets/manager.png'

const SideBar = () => {
  const navigate =useNavigate()
  const manager_dtls =localStorage.getItem("manager")

  const logout = ()=>{
    localStorage.clear();
    navigate('/manager/signin')
  }
  
  return (
    <div className='manager_sidebar'>
      <img className='manager_image' src={manager} alt=''/>
     <div className='manager_name'>
     <p > {JSON.parse(manager_dtls).name}</p>
     </div>
     
      <nav>
      <Link to='/manager/tableassist' >Table Assist</Link>
      <Link to='/manager/serve' >Readt to serve</Link>
      <Link to='/manager/pendingorders' >Pending Orders</Link>
      <Link to='/manager/sales' >Sales</Link>
      <Link to='/manager/tableorders' >Table Orders</Link>
      <Link to='/manager/tableorders' >Online Orders</Link>
      <Link to='/manager/chefreg' >Chef Registration</Link>
      <Link to='/manager/menu' >Our Menu</Link>
      <Link to='/manager/orderhistory' >OrderHisstory</Link>
      
      < Link onClick={logout} to = "/manager/signin">Logout</Link>
      </nav>
    </div>
  )
}

export default SideBar