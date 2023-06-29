import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OrderHistory.css'
import OrderHistry from '../../Components/OrderHistory/OrderHistry'
const OrderHistory = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getorders()
  })
  const getorders=()=>{
    axios.get('http://localhost:5000/orders/success')
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
      
      <OrderHistry data={item}/>
      
     </div>
     
    )
   }):<></>
  return (
    <div className='his_ordr'>
    {items.length>0?<div>
    <div className='his_orders'> Orders: {items.length}</div>
    <h1> ORDER HISTORY</h1>
    
    {items}</div>:<div className='his_orders'> Orders: 0</div>
  }
  </div>
  )
}

export default OrderHistory