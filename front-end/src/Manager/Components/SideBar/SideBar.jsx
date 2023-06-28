import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { Link,  useNavigate } from 'react-router-dom'
import manager from '../../Assets/manager.png'

const SideBar = () => {
  const navigate =useNavigate()
  const manager_dtls =localStorage.getItem("manager")
  const [tableAssist,setTableAssist]=useState()
  useEffect(()=>{
   setTableAssist(localStorage.getItem("tableAssist"))
  },[])
   
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
      <Link to='/manager/tableassist' >Table Assist </Link><span className='tab_ass'>{tableAssist==="undefined"?"0":tableAssist}</span>
      <Link to='/manager/pendingorders' >Pending Orders</Link>
      <Link to='/manager/tableorders' >Table Bill</Link>
      <Link to='/manager/online' >Online Orders</Link>
      <Link to='/manager/sales' >Sales</Link>
      <Link to='/manager/chefreg' >Chef Registration</Link>
      <Link to='/manager/menu' >Our Menu</Link>
      <Link to='/manager/orderhistory' >Order History</Link>
      < Link onClick={logout} to = "/manager/signin">Logout</Link>
      </nav>
    </div>
  )
}

export default SideBar