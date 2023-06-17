import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OnlineOrderList.css'

const OnlineOrderList = ({data}) => {
  const [oData,setOData] = useState([])
   //const addr = JSON.parse(data.address)
  // var adde =JSON.parse(addr)
  console.log(oData)
  const address = data.address.split('~');
  
  const setStatus=()=>{
    
  }

  useEffect(()=>{
    axios.get('http://localhost:5000/itemfind/'+data.oid)
    .then((response)=>{
    setOData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
  let src = 'http://localhost:5000/uploads/'+oData.url
  return (
    <div className='online_order'>
      
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
        {(data.table==="true")?<p>Table {data.tableNo}</p>:
       <p>{data.phone}</p>}
       </div>
       <div className='order_address'>
       {(data.table==="true")?<p>Table </p>:<p>
       <p>{address[0]}</p>
       <p>{address[1]}</p>
       <p>{address[2]}</p>
       <p>{address[3]}</p>
       <p>{address[4]}</p></p>}
       </div>
       {(data.payment ==="true")?<div className='onln_payment'>Paid</div>:
       <div className='cod_payment'><i class="fa-solid fa-indian-rupee-sign"></i> {data.qty * oData.price}</div>}
       <button onClick={()=>{setStatus()}}>{data.status}</button>
       </div>
      </div>
    </div>
  )
}

export default OnlineOrderList