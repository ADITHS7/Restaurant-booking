import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'
import axios from 'axios';

const AddProduct = () => {
  

  const [prevImg,setPrevImg] = useState()
const [dlg,setDlg]=useState(false)
const [change,setChange]=useState(false)
const navigate = useNavigate();


const [item,setItem] = useState({
  url:"",
  prevUrl:'',
  name:'',
  category:'',
  sweet:false,
  sour:false,
  salty:false,
  juicy:false,
  bitter:false,
  breakfast:false,
  lunch:false,
  dinner:false,
  desc:'',
  price:''
})






const handleImg = (e)=>{
 setChange(true)
 setPrevImg(URL.createObjectURL(e.target.files[0]))
setItem({url:e.target.files[0]})
 
 
}

const sendData=(e)=>{
 e.preventDefault();

 const formData = new FormData();
 formData.append('senddata',item.url)
 formData.append("name",item.name);
 formData.append("category",item.category);
 formData.append("sweet",document.getElementById('sweet').value);
 formData.append("sour",document.getElementById('sour').value);
 formData.append("salty",document.getElementById('salty').value);
 formData.append("juicy",document.getElementById('juicy').value);
 formData.append("bitter",document.getElementById('bitter').value);
 formData.append("breakfast",document.getElementById('breakfast').value);
 formData.append("lunch",document.getElementById('lunch').value);
 formData.append("dinner",document.getElementById('dinner').value);
 formData.append("desc",item.desc);
 formData.append("price",item.price);
 formData.append("change",change)
 
 
 
 axios.post('http://localhost:5000/add-product',formData)
 .then((res)=>{
  console.log(res);
 
 })
 .catch((err)=>{
  console.log(err)
 })

 
 setDlg(true)
 
 

}
// const refresh =()=>{
  
// }



  return (
    <div className='add_product'>
      
      <h1>Add Product</h1>
      <form action=''>
      <div className="form_first">
      <input name='img' id='img' type='file' className='img_box' onChange={handleImg}  />
      
      <div className='img_bg'>
      
        <label htmlFor='img' className='label_img'>
        <img src={prevImg} alt=''/>
        
          <p><i class= 'fa-solid fa-image'></i></p>
          <p>Click to upload image</p>
          
          
        </label>
      </div>

        <div className='prod_details'>
      <input type='text'   className='input_box' placeholder='Enter Food Name'
      value={item.name} onChange={(e)=>setItem({...item,name:e.target.value})}/>
      
      <select value={item.category} onChange={(e)=>setItem({...item,category:e.target.value})} >
        <option value='Null' selected>Choose Category</option>
        <option value='Vegetarian'>Veg</option>
        <option value='Non Veg'>Non veg</option>
        <option value='Hot Drinks'>Hot Drinks</option>
        <option value='Cool Drinks'>Cool Drinks</option>
        <option value='Deserts'>Deserts</option>
      </select>
      <div className='checkbox_div'>
      <h2>Choose Labels</h2>
      
      <input type='checkbox' name='sweet' id="sweet" value={item.sweet} 
      onChange={()=>{item.sweet?setItem({...item,sweet:!true}):setItem({...item,sweet:true})}}
      
      />
      <label for = 'sweet'>Sweet</label>

      <input type='checkbox' name='sour' value={item.sour} id='sour'
      onChange={()=>{item.sour?setItem({...item,sour:!true}):setItem({...item,sour:true})}}/>
      <label for = 'sour'>Sour</label>

      <input type='checkbox' name='salty' value={item.salty} id='salty'
      onChange={()=>{item.salty?setItem({...item,salty:!true}):setItem({...item,salty:true})}}/>
      
      <label for = 'salty'>Salty</label>

      <input type='checkbox' name='juicy' value={item.juicy} id='juicy'
      onChange={()=>{item.juicy?setItem({...item,juicy:!true}):setItem({...item,juicy:true})}}/>
      <label for = 'juicy'>Juicy</label>

      <input type='checkbox' name='bitter' value={item.bitter} id='bitter'
      onChange={()=>{item.bitter?setItem({...item,bitter:!true}):setItem({...item,bitter:true})}}/>
      <label for = 'bitter'> Bitter</label>

      <input type='checkbox' name='breakfast' value={item.breakfast}  id = 'breakfast'
      onChange={()=>{item.breakfast?setItem({...item,breakfast:!true}):setItem({...item,breakfast:true})}}/>
      <label for = 'breakfast'> Breakfast</label>

      <input type='checkbox' name='lunch' value={item.lunch} id='lunch'
      onChange={()=>{item.lunch?setItem({...item,lunch:!true}):setItem({...item,lunch:true})}}/>
      <label for = 'lunch'> Lunch</label>

      <input type='checkbox' name='dinner' value={item.dinner} id = 'dinner'
      onChange={()=>{item.dinner?setItem({...item,dinner:!true}):setItem({...item,dinner:true})}}
      />
      <label for = 'dinner'> Dinner</label>
      </div>
      
      

     </div>
     
     
    </div>
    <div className='prod_details_sec'>
    <textarea  placeholder='Product description 
      maximum 150 words' 
      value={item.desc} onChange={(e)=>setItem({...item,desc:e.target.value})}/>
      <input type='text' className='price_box' placeholder='  Price in ₹ ' 
      value={item.price} onChange={(e)=>setItem({...item,price:e.target.value})}
       />
    </div>

    <button className='add_btn' onClick={sendData}>Add Product</button>
    </form>
    {dlg?<div className="dlg_box">
    <i class="fa-regular fa-circle-check"></i>
    <p>Item added successfully</p>
    <button onClick={()=>{navigate('/chef/home')}}>OK</button>
    </div>:null}
    
    
    </div>
    
  )
}

export default AddProduct