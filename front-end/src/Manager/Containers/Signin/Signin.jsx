import React, {  useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
  const navigate = useNavigate()
  const [data,setData]=useState({
    managerId:'',
    password:''
  })
  const [error,setError]=useState(false)
   
  const handleLogin=(e)=>{
    if(!data.managerId || !data.password){
      setError(true);
      return(false)
     }
    e.preventDefault();
   axios.post('http://localhost:5000/managersignin',data)
   
   .then((res)=>{
    
    console.log(res);
    localStorage.setItem("manager",JSON.stringify(res.data))
    if(res.data.name){
      navigate('/manager')
    }else{
      alert("enter correct details")
    }
   
   })
   .catch((err)=>{
    console.log(err)
   })  
  }
  

  return (
    <div className='signin'>
      <div className='signin_left'>
      <div className="signin_left_container">
        <h1>Sign in</h1>
        <div className='social_links'>
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-google"></i></button>
        </div>
        <div>

        </div>
        <div className='signin_form'>
        <input type='text' placeholder='Manager Id'
        value={data.managerId} onChange={(e)=>setData({...data,managerId:e.target.value})}/>
        {error && !data.managerId && <span className='invalid_input'>Enter valid Manager Id</span>}
        <input type='password' placeholder='Password'
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        {error && !data.password && <span className='invalid_input'>Enter valid password</span>}
        <button onClick={(e)=>{handleLogin(e)}}>SIGN IN</button>
        </div>
      </div>
      </div>
      <div className='signin_right'>
      <div className="signin_right_container">
        <h1>Welcome To The Besnik </h1>
        <p>New Here?</p>
        <button onClick={()=>{navigate('/manager/signup')}}>SIGN UP</button>
      </div>
      </div>

    </div>
  )
}

export default Signin