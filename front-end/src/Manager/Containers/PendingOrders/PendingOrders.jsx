import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './PendingOrders.css'
import Pending from '../../Components/Pending/Pending'

const PendingOrders = () => {
  
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getorders()
  },[])
  const getorders=()=>{
    axios.get('http://localhost:5000/orders/pending')
    .then((response)=>{
    setData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  const items= (data.length>0)? data.map((item,key)=>{
    
    
   return(
    <div>
    
     <Pending data={item}/>
     
    </div>
    
   )
  }):<></>


 
  //searching item from chef database
  
  return (
    <div className='pend_ordr'>
      {items.length>0?<div>
      <div className='pending_orders'>Pending Orders: {items.length}</div>
      <h1>PENDING ORDERS</h1>
      
      {items}
      </div>:<div><div className='pending_orders'>Pending Orders: 0</div>
      
      </div>}
    </div>
  )
}

export default PendingOrders