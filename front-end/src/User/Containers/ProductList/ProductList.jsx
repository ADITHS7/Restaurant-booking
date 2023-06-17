import React, {  useEffect, useState } from 'react'

import './ProductList.css'

import axios from 'axios';
//import Cart from '../Cart/Cart';




const ProductList = ({handleAddProduct}) => {
  const [data,setData]=useState([]);
  //const [cartItems,setCartItems]=useState([]);
  
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




const items= (data.length>0)? data.map((item,key)=>{
  let src = 'http://localhost:5000/uploads/'+item.url;
  return(  
   <div >
   <div className="user_prd_card">
   <img src={src} alt=''/>
   <div className='prd_card_down'>
   <h3 className='prd_name' >{item.name}</h3>
   <div className='prd_desc'>
   <p >{item.desc}</p>
   </div>
   </div>
   <div className='cta'>
    <div className='price'>
    <p><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</p>
    </div>
    <div className='cart_btn'>
      
      <button onClick={()=>handleAddProduct(item)}><i class="fa-solid fa-bag-shopping"></i></button>
      
    </div>
   </div>  
 </div>
</div>

  )
}

):<h1 className='no_prod'>No Items Found Please Add Items!</h1>


  return (
    <>
    <div className='product_list'>
      <div className='head'>
        
        
        <div className="h_func">
          <div>
            <button className='all_prd_btn' onClick={()=>window.location.reload(true)}>All Products</button>
          </div>
          <div className='search'>
          <i class="fa-brands fa-searchengin"></i>
            <input type=''   placeholder='search foods' onChange={handleSearch}/>
            
          </div>
          <div className='filter'>
          <i onClick={handleSearch} class="fa-solid fa-sliders"></i>
          <select  onChange={handleSearch} >
        <option value='Null' selected>select Category</option>
        <option value='Vegetarian'>Veg</option>
        <option value='Non Veg'>Non veg</option>
        <option value='Hot Drinks'>Hot Drinks</option>
        <option value='Cool Drinks'>Cool Drinks</option>
        <option value='Deserts'>Deserts</option>
        <option value=''>none</option>
      </select>
          
          
          </div>
        </div>

      </div>
      
    </div>
    
    <div className='user_prd_container'>
    {items}</div>
    
      
    </>
  )
}


export default ProductList