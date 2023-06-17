import React, {  useEffect, useState } from 'react'

import './ProductList.css'
import image from '../../Assets/HeadImage.png';
import axios from 'axios';



const ProductList = () => {
  const [data,setData]=useState([]);
  
 
useEffect(()=>{
  getProducts()
},[])

const getProducts=()=>{
  axios.get('http://localhost:5000/product-list')
  .then((response)=>{
  setData(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}






const deleteProduct = (id,e)=>{
  
axios.delete(`http://localhost:5000/senddata/${id}`)
.then((res)=>{
  console.log(res);
  document.getElementById("dlg"+e).style.display="none"
  window.location.reload(true)
  
  
 })
 .catch((err)=>{
  console.log(err)
  
 })
 
 
}


const handleSearch =(e)=>{
  let key =(e.target.value);
 
  if(key){
    axios.get(`http://localhost:5000/search/${key}`)
    .then((res)=>{
      console.log(res);
      setData(res.data)

      
     })
     .catch((err)=>{
      console.log(err)
     })
    }
    else{
      getProducts()
    }
  
}


const dlg = (e)=>{
document.getElementById("dlg"+e).style.display="block"
}

const items= (data.length>0)? data.map((items,key)=>{
  let src = 'http://localhost:5000/uploads/'+items.url;
  
  
  
  
  return(

   <>
   
  
   <div className="prd_card">
   <img src={src} alt=''/>
   <div>
   <p >{items.name}</p>
   </div>
   <p >{items.category}</p>
   <p><i class="fa-solid fa-indian-rupee-sign"></i> {items.price}</p>
   <a href= {'/chef/update/'+items._id}><i  class="fa-solid fa-pencil"></i></a>
   
   
   <i onClick={()=>{dlg(key)}} class="fa-solid fa-trash"></i>
   
   
 </div>
<div className='dlg_container' id={"dlg"+key}>
 <div className="dlg__box">
  
   <i class="fa-solid fa-trash"></i>
    <p> Delete {items.name} ?</p>
   <div className='btn'>
   
   <button className='r_btn' onClick={()=>{window.location.reload(true)}}>NO</button>
   <button className='g_btn' onClick={()=>{deleteProduct(items._id,key)}}>Yes</button>
   
   </div>
   </div>
   </div>

 

</>
  )
}

):<h1 className='no_prod'>No Items Found Please Add Items!</h1>


  return (
    <>
    <div className='product_list'>
      <div className='head'>
        
        <h1>OUR MENU</h1>
        <div className='h_line'>
          <img src={image} alt=''/>

        </div>
        <div className="h_func">
          <div>
            <button className='all_prd_btn'  onClick={()=>window.location.reload(true)}>All Products</button>
          </div>
          <div className='search'>
          <i class="fa-brands fa-searchengin"></i>
            <input type=''   placeholder='search foods' onChange={handleSearch}/>
            
          </div>
          <div className='filter'>
          <i onClick={handleSearch} class="fa-solid fa-sliders"></i>
          <select  onChange={handleSearch} >
        <option value='' selected>select Category</option>
        <option value='Vegetarian'>Veg</option>
        <option value='Non Veg'>Non veg</option>
        <option value='Hot Drinks'>Hot Drinks</option>
        <option value='Cool Drinks'>Cool Drinks</option>
        <option value='Deserts'>Deserts</option>
        
      </select>
          
          
          </div>
        </div>

      </div>
      
    </div>
    
    <div className='prd_list'>
    {items}</div>
      
    </>
  )
}


export default ProductList