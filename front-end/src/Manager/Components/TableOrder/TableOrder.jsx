import axios from 'axios'
import React, { useEffect, useState } from 'react'
const TableOrder = ({data}) => {
  const [oData,setOData] = useState([])
   
  
 
  const loadData = ()=>{
    
    axios.get('http://localhost:5000/itemfind/'+data.oid)
    .then((response)=>{
    setOData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  

  useEffect(()=>{
   loadData()
   
  },[])
  
  let src = 'http://localhost:5000/uploads/'+oData.url
  return (
    <div className='online_order'>
      {data.status==="successfull"?
      <div className='o_ord_container'>
      <div className='order_time'>
      <p>{data.date}</p>
      </div>
     <div className='order_dtls'>
      <div className='order_name_img'>
       <img src={src} alt='' />
       <p>{oData.name}</p>
       </div>
       
       <div className='order_qty'>
       <p>{data.qty}</p>
       </div>
       <div className='order_phone'>
       <p>Table {data.tableNo}</p>
       
       </div>
       <div className='order_address'>
       <p>Table </p>
     
       </div>
       {(data.payment ==="true")?<div className='onln_payment'>Paid</div>:
       <div className='cod_payment'><i class="fa-solid fa-indian-rupee-sign"></i> {data.qty * oData.price}</div>}
       <button >{data.status}</button>
       </div>
      </div>
      :null}
    </div>
  )
}

export default TableOrder