import React, {  useState } from 'react'
import './ChefRegistration.css'

import axios from 'axios';
const ChefRegistration = () => {

  const [data,setData]=useState({
    name:'',
    chefId:'',
    password:''
  })
  const [error,setError]=useState(false)
  
  const [dlg,setDlg]=useState(false)
  const [reg,setReg]=useState(true)
  
 
  
  const sendData=(e)=>{
   if(!data.name || !data.chefId || !data.password){
    setError(true);
    return(false)
   }
   

   
   axios.post('http://localhost:5000/chefsignup',data)
 .then((res)=>{
  console.log(res);
 setDlg(true)
 setReg(false)
 })
 .catch((err)=>{
  console.log(err)
 })
  }





  return (
    <div className='chefReg'>
      {dlg?
      <div className='chefReg_left'>
      <div className="chefReg_left_container">
        <h1>Registered New Chef Successfully</h1>
        <p>Besnik!</p>
        <button onClick={()=>{window.location.reload(true)}}>OK</button>
      </div>
      </div>:null}
      {reg?
      <div className='chefReg_right'>
      <div className="chefReg_right_container">
        <h1>Register New Chef</h1>
        <div className='social_links'>
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-google"></i></button>
        </div>
        <div>

        </div>
        <div className='chefReg_form'>
        <input type='text' placeholder='Name'  
        value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        {error && !data.name && <span className='invalid_input'>Enter valid name</span>}
        <input type='text' placeholder='chefid'
        value={data.chefId} onChange={(e)=>setData({...data,chefId:e.target.value})}/>
         {error && !data.chefId && <span className='invalid_input'>Enter valid Chef Id</span>}
        <input type='password' placeholder='Password'
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
         {error && !data.password && <span className='invalid_input'>Enter valid password</span>}
        <button onClick={()=>{sendData()}}>Register</button>
        </div>
      </div>
      </div>:null}
    </div>
  )
}

export default ChefRegistration