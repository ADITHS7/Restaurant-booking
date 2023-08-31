import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './TableOrder.css'
const TableOrder = ({data}) => {
  const [oData,setOData] = useState([])
   
  // var price = 0;
  //const totalPrice =((price,item)=>price + parseInt(item.total)  ,0 )
//  price = price + parseInt(data.total)
 // console.log(result,"heyy")
  // console.log(price,"wvovś")
 
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
    <div className='table_order'>
      {data.status==="successfull"?
      <div className='o_ord_container'>


     
     <div className='order_dtls'>
     
      <div className='order_name_img'>
       <img src={src} alt='' />
      
       </div>
       <div className='order_phone'>
<p>{oData.name}</p>
       
       </div>
       
       <div className='order_qty'>
       <p>{data.qty}</p>
       </div>
       <div className='order_qty'>
       <p>{data.qty} * {oData.price}</p>
       </div>
       
       {(data.payment ==="true")?<div className='onln_payment'>Paid</div>:
       <div className='cod_payment'><i class="fa-solid fa-indian-rupee-sign"></i> {data.qty * oData.price}</div>}
       
       
       </div>
      
      </div>
      :null}
      
    </div>
  )
}

export default TableOrder