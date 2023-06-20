import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = ({cartItems}) => {
  const [menu,menuState]=useState(false);
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
    menuState(false)
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

 const nav =
  <div className='nav_con'>
     <Link  to={`${(Atable==="true")?`/?table=true&tableNo=${tableNo}`:'/'}`} onClick={()=>{menuState(false)}} >Home</Link>
          <Link to={`${(Atable==="true")?`/menu?table=true&tableNo=${tableNo}`:'/menu'}`  } onClick={()=>{menuState(false)}}>Menu</Link>
          {Atable==="true"?
          <p onClick={tableAssist}><i class="fa-brands fa-facebook-messenger"  ></i>Table Assist</p>:null}
       
  </div>
 

  return (
    <div className='navbar'> 
       
       <div className="menu-icon">
        <i class="fa-solid fa-bars" onClick={()=>{menu?menuState(false):menuState(true)}}></i>
      </div>
    
        <div className='nav_name'>
        
        <h3>Besnik.</h3>
        </div>
        <div className='desktop' >
          
          {nav}
         
          </div>
        {menu?
        <div className='mobile' >
          
        
        {nav}
        </div>
        :null}
        <div className='nav_but'>
       
        <div className='cart_div'>
        <Link to ={`${(Atable==="true")?`/cart?table=true&tableNo=${tableNo}`:'/cart'}`} ><i class="fa-solid fa-cart-shopping"></i> </Link>
        <span>{cartItems.length}</span>
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