import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OnlineSuccessfullOrders from '../../Components/OnlineSuccessfull)rders/OnlineSuccessfullOrders'

const OnlineOrder = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getorders()
  })
  const getorders=()=>{
    axios.get('http://localhost:5000/orders')
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
      
      <OnlineSuccessfullOrders data={item}/>
      
     </div>
     
    )
   }):<></>
 
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

export default OnlineOrder