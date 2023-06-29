import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OrderHistory.css'
const OrderHistory = ({data}) => {
  const [oData,setOData] = useState([])
   
  
  const address =data.address? data.address.split('~'):null
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
  const databaseChefDate =data.cheTime
  const chetime= databaseChefDate.slice(0, 24)
  return (
    <div className='history_order'>
     
      <div className='h_ord_container'>
        <div className="time">
      <div className='order_time'>
      <p>{data.date}</p>
      </div>
      <div className="success_time">
        <p>{chetime}</p>
      </div>
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
       <p>{address[5]}</p>}
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
       <button >{data.status}</button>
       </div>
      </div>
     
    </div>
  )
}

export default OrderHistory