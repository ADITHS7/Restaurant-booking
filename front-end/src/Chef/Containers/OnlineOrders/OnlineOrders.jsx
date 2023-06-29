import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OnlineOrders.css'
import OnlineOrderList from '../../Components/OrderList/OnlineOrderList';

const OnlineOrders = () => {
  
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getorders()
  })
  const getorders=()=>{
    axios.get('http://localhost:5000/orders/pending')
    .then((response)=>{
      console.log(response)
    setData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  const items= (data.length>0)? data.map((item,key)=>{
    
    
   return(
    <div>
     
     <OnlineOrderList data={item}/>
     
    </div>
    
   )
  }):<></>


 
  //searching item from chef database
  
  return (
    <div className='online_ordr'>
      {items.length>0?<div>
      <div className='pending_orders'>Pending Orders: {items.length}</div>
      <h1> ORDERS</h1>
      
      {items}</div>:<div className='pending_orders'>Pending Orders: 0</div>
    }
    </div>
  )
}

export default OnlineOrders