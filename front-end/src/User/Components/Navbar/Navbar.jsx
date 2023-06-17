import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


 




const Navbar = ({cartItems}) => {
  const [Atable,setATable]=useState('')
  const [tableNo,setTableNo]=useState('')
  useEffect(()=>{
    setATable(JSON.parse(localStorage.getItem("table")))
    setTableNo(JSON.parse(localStorage.getItem("tableNo")))
  },[])
  console.log(Atable)
  const [dlg,setDlg]=useState(false)
  const tableAssist = ()=>{
    setDlg(true)
  }
  const tableCall=async()=>{
  const formData = new FormData();
  formData.append("tableNo",JSON.parse(tableNo))
  formData.append("time",Date())
  await axios.post('http://localhost:5000/tableAssistance', formData )
        
 .then((res)=>{
  console.log(res);
  setDlg(false)
 })
 .catch((err)=>{
  console.log(err)
 })
      
  
  }
  return (
    <div className='navbar'> 
    
      
        <div className='nav_name'>
        <h3>Besnik.</h3>
        </div>
        <div className='nav_con' >
          
        
        <Link to={`${(Atable==="true")?`/?table=true&tableNo=${tableNo}`:'/'}`} >Home</Link>
        <Link to={`${(Atable==="true")?`/menu?table=true&tableNo=${tableNo}`:'/menu'}`}>Menu</Link>
        {Atable==="true"?
        <p onClick={tableAssist}><i class="fa-brands fa-facebook-messenger" ></i>Table Assist</p>:null}
        </div>
        <div className='nav_but'>
        <button >Sign up</button>
        <div className='cart_div'>
        <Link to ={`${(Atable==="true")?`/cart?table=true&tableNo=${tableNo}`:'/cart'}`}><i class="fa-solid fa-cart-shopping"></i> </Link>
        {cartItems.length}
        </div>

      {
        dlg?<div className='dlg_box'>
          <h3>Do You Need Table Assistance?</h3>
          
          <div className='buttons'>
          <button className='red_btn' onClick={()=>setDlg(false)}>NO</button>
          <button className='grn_btn' onClick={()=>{tableCall()}}>Yes</button>
          </div>
        </div>:null
      }

        </div>


        
    </div>
  )
  
}


export default Navbar