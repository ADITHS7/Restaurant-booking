import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './TableAssist.css';

const TableAssist = () => {
const [data,setData] =useState([]);

  localStorage.setItem("tableAssist",data.length)


  const accepted=(id)=>{
    axios.delete(`http://localhost:5000/tableAssistance/${id}`)
    .then((res)=>{
      console.log(res);
      tableHelp()
      
     })
     .catch((err)=>{
      console.log(err)
      
     })
     
     
    
  }

  useEffect(()=>{
    tableHelp()
  },[])

  const tableHelp=()=>{
    axios.get('http://localhost:5000/tableAssistance')
  .then((response)=>{
  setData(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  const items= (data.length>0)? data.map((item,key)=>{
   
     return(
      <div className='table_ass'>

        <div className='help_icon'><i class="fa-brands fa-hire-a-helper"></i></div>
        <div onClick={()=>{accepted(item._id)}} className="table_ass_contnr">
        
        <div className='table_num'>{item.tableNo}</div>
        <div className='date_time'>{item.time}</div>
        </div>
      </div>
     )
  }):<div>no items</div>
  return (
    <div className='tableAssistance'>{items}</div>
  )
}

export default TableAssist