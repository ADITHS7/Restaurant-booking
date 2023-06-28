import React, { useEffect, useState } from 'react';
import './SideBar.css'
import { Link, useNavigate } from 'react-router-dom';

import chefImage from '../../Assets/chef.png'
import axios from 'axios';

const SideBar = () => {

  const navigate =useNavigate();
  const [pend,setPend]=useState([])
  const numb = pend.length;
  useEffect(()=>{
 axios.get('http://localhost:5000/orders')
    .then((response)=>{
    setPend(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  const chef_dtls = localStorage.getItem("chef")
  const logout = ()=>{
    localStorage.clear();
    navigate('/chefsignin')
  }
 
  return (
    <div className='sidebar'>
      <img className='chef_image' src={chefImage} alt=''/>
      {JSON.parse(chef_dtls).name}
      <nav >
      
        <Link to = '/chef/orderhistory'><i class="fa-solid fa-chair"></i>Order History </Link>  
       

        <Link to = '/chef/onlineOrders'  ><i class="fa-solid fa-mobile-retro"  ></i>pending Orders{numb>0? <div className='order_len'> {numb}</div>:null}</Link>
        <Link to = '/chef/home'><i class="fa-solid fa-house"></i> Home</Link>
        <Link to = '/chef/addproduct'><i class="fa-solid fa-plus"></i> Add Product</Link>
        <Link onClick={logout} to = '/cheflogin'><i class="fa-solid fa-user"></i> Logout</Link>
      </nav>
    </div>
  )
}

export default SideBar