import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableOrder from '../../Components/TableOrder/TableOrder'
const TableOrders = () => {
  const [data,setData]=useState([]);
  const [oData,setOData] = useState([])
  
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

  
const handleSearch =(e)=>{
  let key =(e.target.value);
  console.log(key,"keyyy")
  
  if(key){
    axios.get(`http://localhost:5000/tableno/${key}`)
    .then((res)=>{
      console.log(res);
      setData(res.data)
     })
     .catch((err)=>{
      console.log(err)
     })
    }
    else{
      getorders()
    }
  
}
 
  const items= (data.length>0)? data.map((item,key)=>{
    axios.get('http://localhost:5000/itemfind/'+data.oid)
    .then((response)=>{
    setOData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  
    
    return(
     <div>
      
      <TableOrder data={item}/>
      
     </div>
     
    )
   }):<></>
   
  return (
    <div className='online_ordr'>
       <h1>TABLE BILL</h1>
      <div className='filter'>
          <i  class="fa-solid fa-sliders"></i>
          <select  onChange={handleSearch}>
        <option value='null' selected>select Table</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value=''>none</option>
      </select>
          
          
          </div>
    {items.length>0?<div>
    <div className='pending_orders'></div>
   
    
    
    {items}
    
    </div>:<div><div className='pending_orders'>SELECT A VALID TABLE NO</div>
    
    </div>}
  </div>
  )
}

export default TableOrders