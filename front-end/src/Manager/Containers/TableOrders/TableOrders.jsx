import axios from 'axios'
import React, {  useState } from 'react'
import TableOrder from '../../Components/TableOrder/TableOrder'
import './TableOrders.css'
const TableOrders = () => {
  const [data,setData]=useState([]);
  const tblnum = localStorage.getItem('tableNum')
  var sum = 0;
  
  const statusUpdate=()=>{
    axios.put(`http://localhost:5000/completedtable/${tblnum}`)
    .then((res)=>{
      getorders()      
     })
     .catch((err)=>{
      console.log(err)
     })
    
  }
  
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
  localStorage.setItem("tableNum",key)
  
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

for(let i = 0; i< data.length; i++)
{
  if(data[i].status === "successfull")
 sum = parseInt(sum) + parseInt( data[i].total)
}
  const items= (data.length>0)? data.map((item,key)=>{
     
   
    
     
    return(
     <div>
      
      <TableOrder data={item}/>
      
     </div>
     
    )
   }):<></>
   
  return (
    <div className='table_ordr'>
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
    <div className='pending_bill'>
      
    {items}
    <button className='rupee_bill' onClick={()=>{statusUpdate()}}>pay <i class="fa-solid fa-indian-rupee-sign"></i> {sum}  </button>
    </div>
    </div>:<div><div className='pending_nil'>SELECT A VALID TABLE NO</div>
    
    </div>}
  </div>
  )
}

export default TableOrders