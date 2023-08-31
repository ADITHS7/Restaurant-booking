import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [data,setData]=useState({
    userid:'',
    password:''
  })
  const handleLogin=()=>{
   
   
   axios.post('http://localhost:5000/cheflogin',data)
   
   .then((res)=>{
    localStorage.setItem("chef",JSON.stringify())
    console.log(res);
    console.log(res.data)
    localStorage.setItem("chef",JSON.stringify(res.data))
  navigate('/chef')
    
   
   })
   .catch((err)=>{
    console.log(err)
   })  
   
  }


  return (
    <div className='login'>
      <div className='login_left'>
      <div className="login_left_container">
        <h1>Sign in</h1>
        <div className='social_links'>
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-google"></i></button>
        </div>
        <div>

        </div>
        <div className='login_form'>
        <input type='text' maxLength='10' minLength='2' placeholder='chef id'
        value={data.userid} onChange={(e)=>setData({...data,userid:e.target.value})}/>
        <input type='password' placeholder='Password'
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button onClick={handleLogin}>SIGN IN</button>
        </div>
      </div>
      </div>
      <div className='login_right'>
      <div className="login_right_container">
        <h1>Welcome To The Besnik Kitchen</h1>
       
      </div>
      </div>

    </div>
  )
}

export default Login