import React, {  useState } from 'react'
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  // const [name,setName] = useState('');
  // const [phone,setphone] = useState('');
  // const [phone2,setphone2] = useState('');
  // const [pincode,setPincode] = useState('');
  // const [city,setCity] = useState('');
  // const [house,setHouse] = useState('');
  const navigate = useNavigate()
  const [address,setAddress] = useState({
    name:'',
    phone:'',
    phone2:'',
    pincode:'',
    city:'',
    house:'',
    road:''
  });
  const [error,setError]=useState(false)
 const submit =()=>{
  if(!address.name ||!address.phone || !address.pincode || !address.city || !address.house || !address.road ){
    setError(true);
    return(false)
   }
  
    localStorage.setItem("address",JSON.stringify(address))
    const addr = JSON.parse(localStorage.getItem("address")   )
    console.log(addr)
    navigate('/payment')
 }

    
  

    

    

  return (
    <>
    <div className='checkout'>
      <div className="checkout_container">
        <h1 className='checkot_heading'> Billing Address</h1>
        <div className="checkout_name">
          
          <input value={address.name} onChange={(e)=>setAddress({...address,name:e.target.value})} type='text' placeholder='Full Name (Required)*'/>
          {error && !address.name && <span className='invalid_input'>Full Name (Required)*</span>}
        </div>

        <div className="checkout_number">
          
          <input value={address.phone} onChange={(e)=>setAddress({...address,phone:e.target.value})} type='text' placeholder='Phone number (Required)*'/>
          {error && !address.phone && <span className='invalid_input'>Phone number (Required)*</span>}
        </div>

        <div className="checkout_number">
          
          <input value={address.phone2} onChange={(e)=>setAddress({...address,phone2:e.target.value})} type='text' placeholder='Alternate Phone number'/>
        </div>

        <div className="checkout_pin">
          
          <input value={address.pincode} onChange={(e)=>setAddress({...address,pincode:e.target.value})} type='text' placeholder='Pincode (Required)*'/>
          {error && !address.pincode && <span className='invalid_input'>Pincode (Required)*</span>}
        </div>

        <div className="checkout_city">
        <input value={address.city} onChange={(e)=>setAddress({...address,city:e.target.value})} type='text' placeholder='City (Required)*'/>
        {error && !address.city && <span className='invalid_input'>City (Required)</span>}
        </div>

        <div className="checkout_house">
        <input value={address.house} onChange={(e)=>setAddress({...address,house:e.target.value})} type='text' placeholder='House No,Building Name (Required)*'/>
        {error && !address.house && <span className='invalid_input'>House No,Building Name (Required)*</span>}
        </div>

        <div className="checkout_address">
        <input value={address.road} onChange={(e)=>setAddress({...address,road:e.target.value})} type='text' placeholder='Road name ,Area,Colony (Required)*'/>
        {error && !address.road && <span className='invalid_input'>Road name ,Area,Colony (Required)*</span>}
        </div>

        <div className="deliver_btn">
          <button onClick={()=>{submit()}}>Save And Deliver Here</button>
        </div>



      </div>
      </div>
      </> 
  )
}

export default Checkout