import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [chefid,setChefid]=useState({
    name:'',
    userid:'',
    password:''
  })
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
    
  },[])
  
  
 
  
  const sendData=(e)=>{

   const formData = new FormData()

   formData.append("name",chefid.name);
   formData.append("userid",chefid.userid);
   formData.append("password",chefid.password);

   
   axios.post('http://localhost:5000/chefsignup',formData)
 .then((res)=>{
  console.log(res);
  localStorage.setItem("chef",JSON.stringify(res))
  navigate('/cheflogin')
 
 })
 .catch((err)=>{
  console.log(err)
 })
  }





  return (
    <div className='signup'>
      <div className='signup_left'>
      <div className="signup_left_container">
        <h1>Welcome Back To The Besnik Kitchen</h1>
        <p>Already have an account ?</p>
        <button onClick={()=>{navigate('/cheflogin')}}>SIGN IN</button>
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
        value={chefid.name} onChange={(e)=>setChefid({...chefid,name:e.target.value})}/>
        <input type='text' placeholder='chefid'
        value={chefid.userid} onChange={(e)=>setChefid({...chefid,userid:e.target.value})}/>
        <input type='password' placeholder='Password'
        value={chefid.password} onChange={(e)=>setChefid({...chefid,password:e.target.value})}/>
        <button onClick={()=>{sendData()}}>SIGN UP</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup