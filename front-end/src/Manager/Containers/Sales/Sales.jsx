import React, { useState } from 'react'
import './Sales.css'
import axios from 'axios';
const Sales = () => {
  const [data,setData]=useState([]);
  var sum = 0;
  var qtysum = 0;
 
    axios.get('http://localhost:5000/orders/completed')
    .then((response)=>{
      console.log(response)
    setData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  

  for(let i = 0; i< data.length; i++)
{
  
 sum = parseInt(sum) + parseInt( data[i].total)
 qtysum = parseInt(qtysum) + parseInt( data[i].qty)
}

  return (
    <div className='sales'>
      <h1>Sales</h1>
      <div className="sales-container">
      <div className="totalmoney">
        <h3>Total Revenue:</h3>
        <br></br>
        
        <i class="fa-solid fa-indian-rupee-sign"></i>{sum} /-
      </div>
      <div className="orders">
        <h3>Orders:</h3>
        <br></br>
      {data.length}
      </div>
      
      <div className="qty">
        <h3>Items Sold</h3>
        <br></br>
      {qtysum}
      </div>
      </div>
    </div>
  )
}

export default Sales