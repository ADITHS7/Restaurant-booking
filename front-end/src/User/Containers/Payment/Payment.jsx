import React, { useEffect, useState } from 'react'
import './Payment.css'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Payment = ({cartItems}) => {
  const [method,setMethod]=useState(false)
  const [cDlg,setCDlg]=useState(false)
  const [oDlg,setODlg] = useState(false)
  const [pay,setPay]=useState('')
  const navigate = useNavigate()
  const [table,setTable]=useState('')
    const [tableNo,setTableNo]=useState('')
    useEffect(()=>{
      setTable(JSON.parse(localStorage.getItem("table")))
      setTableNo(JSON.parse(localStorage.getItem("tableNo")))
    },[])
  
  const placeOrder = async()=>{
    const products  = JSON.parse(localStorage.getItem('products'));
    const address = JSON.parse(localStorage.getItem('address') )
  // const table =localStorage.getItem("table")
  //const tableNo =localStorage.getItem("tableNo")
    
    //const addr = toString(address)
    //const addr = JSON.stringify(address);
      if(pay==true){
        setODlg(true)
      }else{
        setCDlg(true)
      }
      const addr = (JSON.parse(table)==="true")?null: (address.name+"~" +address.house+"~"+address.road+"~"+address.city+"~"
      +address.pincode+"~"+address.phone+"~"+address.phone2)
   
    
    const setFormData=async(data)=>{

     
      
      const bodyFormData = new FormData();
        bodyFormData.append('oid',data._id);
        bodyFormData.append('qty',data.quantity);
        bodyFormData.append('name',data.name);   
        bodyFormData.append("table",JSON.parse( table))
        bodyFormData.append("tableNo",JSON.parse( tableNo))      
        bodyFormData.append("address",addr);
        bodyFormData.append("payment",pay );
        bodyFormData.append("date",Date())

       
        
       await axios.post('http://localhost:5000/orders', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      } )
        
 .then((res)=>{
  console.log(res);
  
 })
 .catch((err)=>{
  console.log(err)
 })
      
    }
    
  products?.map((val)=>(
  setFormData(val)
  
  ),
  
  
  
      
        
      )

     
    
  }
  const CheckoutForm = ({cartItems}) => {
    const totalPrice = cartItems.reduce((price,product)=>price +product.quantity * product.price,0 )
    
    const stripe = useStripe();
    const elements = useElements();
  
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        
      });
    };
  
    return (
      <div>
        
      <form  onSubmit={handleSubmit}>
        <div className='cardElement'>
        < CardElement 
        options={{
          style:{
            base: {
              iconColor: '#000',
              color: '#000',
              fontWeight: '500',
              
              
              fontSize: '1.5rem',
              fontSmoothing: 'antialiased',
              ':-webkit-autofill': {
                color: '#fce883',
              },
              '::placeholder': {
                color: '#87BBFD',
              },
            },
            invalid: {
              iconColor: '#FF0000',
              color: '#FF0000',
              fontSize:'1.5rem',
              lineHeight:'2rem'
              
            },}
        }} />
        </div>
        
        <button onClick={()=>{placeOrder() }} className='btn_pay' type="submit" disabled={!stripe || !elements}>
          Pay <i class="fa-solid fa-indian-rupee-sign"></i> {totalPrice}
        </button>
      </form>
     
      </div>
    );
  };
  
  const stripePromise = loadStripe('pk_test_51NCzKkSGKUfFuPYDh3rDqJFe2d4L7zmlcdVHyYqVXvdZKN1YBMkvlbsfKiEhBoZuS6otNvrO0Yc2nzJlr3lBHKGr00Ws5qUCti');
  
  return (
    <div className='payment'>
      <div className='payment_container'>
        <div className='payment_select'>
      <label name="pay">
        <span>
        <input type ='radio'  onClick={()=>{setMethod(false); }}  onChange={()=>{setPay(false)}}/>Cash On Delivery
        </span>

        <span>
        <input type ='radio' onClick={()=>{setMethod(true);}} onChange={()=>{setPay(true)}}/>Online Payment
        </span>
      
        
      </label>
      </div>
      {method?
      <div>
      <Elements stripe={stripePromise}>
    <CheckoutForm cartItems={cartItems} />
  </Elements>
  </div>:<div><button onClick={()=>{placeOrder()}} className='proceed_btn'>Proceed</button></div>}</div>
  
  {cDlg?<div className='cod_dlg_box'>
  <div  className='cod_dlg_cntnr'>
    <div>
    <i class="fa-regular fa-circle-check"></i>
    </div><div>
     <p>Order Placed Successfully We Will Reach You Soon </p> 
     </div><div>
     <button  onClick={()=>{navigate(`${(table==="true")?`/menu?table=true&tableNo=${tableNo}`:'/menu'}`)}}>OK</button>
    </div>
    </div>
  </div>:null}
   {oDlg?<div className='cod_dlg_box'>
    <div  className='cod_dlg_cntnr'>
      <div>
      <i class="fa-regular fa-circle-check"></i>
      </div><div>
       <p>Payment Successfull Order Will Reach You Soon </p> 
       </div><div>
       <button onClick={()=>{navigate(`${(table==="true")?`/menu?table=true&tableNo=${tableNo}`:'/menu'}`)}}>OK</button>
      </div>
      </div>
    </div>:null}
  </div>
  )
}

export default Payment