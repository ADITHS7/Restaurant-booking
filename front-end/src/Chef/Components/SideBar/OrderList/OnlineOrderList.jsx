import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './OnlineOrderList.css'

const OnlineOrderList = ({data}) => {
  const [oData,setOData] = useState([])
   
  
  const address = data.address.split('~');
  
  const statusUpdate=()=>{
    axios.put(`http://localhost:5000/updatestatus/${data._id}`)
    .then((res)=>{
      loadData()      
     })
     .catch((err)=>{
      console.log(err)
     })
    
  }

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
    <div className='c_online_order'>
      {data.status==="pending"?
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
       <p>{address[5]}</p>}
       </div>
       <div className='order_address'>
       {(data.table==="true")?<div>Table</div>:<div>
       <p>{address[0]}</p>
       <p>{address[1]}</p>
       <p>{address[2]}</p>
       <p>{address[3]}</p>
       {/* <p>{address[4]}</p> */}
       <p>{address[5]}</p>
       <p>{address[6]}</p>
       <p>{address[7]}</p></div>}
       </div>
       {(data.payment ==="true")?<div className='onln_payment'>Paid</div>:
       <div className='cod_payment'><i class="fa-solid fa-indian-rupee-sign"></i> {data.qty * oData.price}</div>}
       <button onClick={()=>{statusUpdate()}}>{data.status}</button>
       </div>
      </div>
      :null}
    </div>
  )
}

export default OnlineOrderList