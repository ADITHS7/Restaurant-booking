import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableOrder from '../../Components/TableOrder/TableOrder'
const TableOrders = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getorders()
  })
  const getorders=()=>{
    axios.get('http://localhost:5000/orders/table')
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
      
      <TableOrder data={item}/>
      
     </div>
     
    )
   }):<></>
  return (
    <div className='online_ordr'>
    {items.length>0?<div>
    <div className='pending_orders'></div>
    <h1>TABLE BILL</h1>
    
    {items}
    </div>:<div><div className='pending_orders'>Pending Orders: 0</div>
    
    </div>}
  </div>
  )
}

export default TableOrders