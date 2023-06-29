import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OnlineSuccessfullOrders.css'
const OnlineSuccessfullOrders = ({data}) => {
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

  const statusUpdate=()=>{
    axios.put(`http://localhost:5000/updatestatuscompleted/${data._id}`)
    .then((res)=>{
      loadData()      
     })
     .catch((err)=>{
      console.log(err)
     })
    
  }
  
  let src = 'http://localhost:5000/uploads/'+oData.url
  return (
    
    <div className='c_online_order'>
    
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
     <p>{address[5]}</p>
     </div>
     <div className='order_address'>
   <div>
     <p>{address[0]}</p>
     <p>{address[1]}</p>
     <p>{address[2]}</p>
     <p>{address[3]}</p>
     <p>{address[5]}</p>
     <p>{address[6]}</p>
     <p>{address[7]}</p></div>
     </div>
     {(data.payment ==="true")?<div className='onln_payment'>Paid</div>:
     <div className='cod_payment'><i class="fa-solid fa-indian-rupee-sign"></i> {data.qty * oData.price}</div>}
     <button onClick={()=>{statusUpdate()}}>{data.status}</button>
     </div>
    </div>
   
  </div>
  )
}

export default OnlineSuccessfullOrders