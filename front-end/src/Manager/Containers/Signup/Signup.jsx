
import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [error,setError]=useState(false)
  
   const [data,setData] =useState(
    {
      name:'',
      managerId:'',
      password:''


    }
   )
     const sendData=(e)=>{
      e.preventDefault();
  
      if(!data.managerId ||!data.name|| !data.password){
        setError(true);
        return(false)
       }
   
   
   axios.post('http://localhost:5000/managersignup',{name:data.name,
  managerId:data.managerId,
password:data.password})
 .then((res)=>{
  console.log(res);
  localStorage.setItem("manager",JSON.stringify(res.data))
  navigate('/manager')
 
 })
 .catch((err)=>{
  console.log(err)
 })
  }
  return (
    <div className='signup'>
      <div className='signup_left'>
      <div className="signup_left_container">
        <h1>Welcome Back To The Besnik </h1>
        <p>Already have an account ?</p>
        <button onClick={()=>{navigate('/manager/signin')}}>SIGN IN</button>
      </div>
      </div>
      <div className='signup_right'>
      <div className="signup_right_container">
        <h1>Create Account</h1>
        <div className='social_links'>
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-google"></i></button>
        </div>
        <div>

        </div>
        <div className='signup_form'>
        <input type='text' placeholder='Name'  
        value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        {error && !data.name && <span className='invalid_input'>Enter valid name</span>}
        <input type='text' placeholder='Manager Id'
        value={data.managerId} onChange={(e)=>setData({...data,managerId:e.target.value})}/>
        {error && !data.managerId && <span className='invalid_input'>Enter valid Manager Id</span>}
        <input type='password' placeholder='Password'
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        {error && !data.password && <span className='invalid_input'>Enter valid password</span>}
        <button onClick={(e)=>{sendData(e)}}>SIGN UP</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup