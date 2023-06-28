const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer');
const path = require('path');
const mongoose = require('mongoose')
require('./db/config');
const Product = require("./db/Products");
const Order = require('./db/Order')
const ChefLogin =require('./db/chef')
const ManagerSignup=require('./db/manager')
const TableAssistance = require('./db/TableAssist')

const jsonparser = bodyParser.json
//const stripe = require('stripe')('sk_test_51NCzKkSGKUfFuPYDUJQYcSsOZroh4yUlkQ1fZgRyGxC57kuOBBrT6OCEqaXHbjbfIqXEzLfV17zvc0bV8oRgzf2r00eZAQqp4A');

const app = express();
app.use(cors());

app.use(express.static('public'));
app.use('/uploads',express.static('uploads'));



const upload = multer({ 
  storage: multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'uploads')
    },
    filename:function(req,file,cb){
      cb(null,file.fieldname + '-' + Date.now() +path.extname(file.originalname))
    },
    fileFilter: (req,file,cb)=>{
    if(file){
      cb(null,true)
    }
    else{
      cb(new Error("No file available for upload"))
    }
    }
  })
 }).single("senddata")

const formData = (req)=>{

  let url;
  if(req.body.change=='true')
  {
    url=req.file.filename
  }
  else{
    url = req.body.senddata
  }


 s 
  const name = req.body.name;
  const category = req.body.category;
  const sweet =req.body.sweet;
  const sour =req.body.sour;
  const salty =req.body.salty;
  const juicy =req.body.juicy;
  const bitter =req.body.bitter;
  const breakfast  =req.body.breakfast;
  const lunch =req.body.lunch;
  const dinner =req.body.dinner;
  const desc = req.body.desc;
  const price = req.body.price

  
  const newProduct ={
    url,
    name,
    category,
    sweet,
    sour,
    salty,
    juicy,
    bitter,
    breakfast,
    lunch,
    dinner,
    desc,
    price
  }
  return newProduct
}

app.post('/add-product',upload,async(req,res)=>{
  const newData = formData(req);

  const Data = new Product(newData);
  Data.save().then(()=>{console.log("data added succesfully")})

  
  

});

app.get('/product-list',async(req,res)=>{
  const products =  await Product.find()
  if(products.length>0){
    res.send(products)
  }else{
    res.send({"result":"not found"})
  }
})



app.get("/update/:id",async(req,res)=>{
  let result = await Product.findOne({_id:req.params.id});
  if(result){
   res.send(result)
  }else{
   res.send({"result":"no record found"})
  }
 })



app.put("/update/:id",upload,async(req,res)=>{
 const newData = formData(req);
 console.log(req.body.change)
 const data = await Product.updateOne(
  
    {_id:req.params.id},
    {$set: newData}
  
 )
 
})

app.delete("/senddata/:id",async(req,res)=>{
  let result = await Product.deleteOne({_id:req.params.id})
  res.send(result)
})

app.get('/search/:key',async(req,res)=>{
  let result = await Product.find(
    {$or:[{name: { $regex: req.params.key }},
    {category:{$regex:req.params.key}}]}
    

  )
  res.send(result)
})






 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage });

//tableAssistance
app.post('/tableAssistance',uploads.none(), async (req, res) => { 
  const tableAssistance = new TableAssistance(req.body);
  tableAssistance.save().then(()=>{console.log("data added succesfully")})
  res.json({ message: 'File uploaded successfully.' });
});

app.get('/tableAssistance',async(req,res)=>{
  const tableAssistance =  await TableAssistance.find()
  if(tableAssistance.length>0){
    res.send(tableAssistance)
  }else{
    res.send({"result":"not found"})
  }
})

app.delete("/tableAssistance/:id",async(req,res)=>{
  let result = await TableAssistance.deleteOne({_id:req.params.id})
  res.send(result)
})
//posting order
app.post('/orders',uploads.none(), async (req, res) => { 
  const order = new Order(req.body);
  order.save().then(()=>{console.log("data added succesfully")})
  res.json({ message: 'File uploaded successfully.' });
});


//update status of order

app.put("/updatestatus/:id",jsonparser(),async(req,res)=>{
  
  
  const order = await Order.updateOne(
   
     {_id:req.params.id},
     {$set: {status:"successfull",cheTime:`${Date()}`}},
    
    
  )
  res.send(order)
 })


//ordered data finding using find pending orders
app.get('/orders',async(req,res)=>{
  const order =  await Order.find({status:"pending"})
  if(order.length>0){
    res.send(order)
  }else{
    res.send({"result":"not found"})
  }
})

//cooked orders
app.get('/orders/success',async(req,res)=>{
  const order =  await Order.find()
  if(order.length>0){
    res.send(order)
  }else{
    res.send({"result":"not found"})
  }
})
//getting table
app.get('/orders/table',async(req,res)=>{
  const order =  await Order.find({status:"successfull",table:"true",payment:"false"})
  if(order.length>0){
    res.send(order)
  }else{
    res.send({"result":"not found"})
  }
})



app.get('/itemfind/:id',async(req,res)=>{
  const orderitem = await Product.findOne({_id:req.params.id})
  res.send(orderitem)
  
})



app.post('/chefsignup',jsonparser(),  (req, res) => { 
  const signup = new ChefLogin(req.body);
  signup.save()
 res.send(signup)
})

app.post('/cheflogin',jsonparser(),async(req,res)=>{
  if(req.body){
    let chef =await  ChefLogin.findOne(req.body)
    if(chef){
      res.send(chef)
      
    }else{
      res.send({"result":"no user found"})
      
    }
  }
  else{
    res.send({"result":"provide correctly"})
  }
})

app.post('/managersignup',jsonparser(),(req, res) => { 
const signup = new ManagerSignup(req.body);
  signup.save()
 res.send(signup)
})

app.post('/managersignin',jsonparser() ,async(req,res)=>{
  if(req.body){
    let signin =await  ManagerSignup.findOne(req.body)
    if(signin){
      res.send(signin)
      
    }else{
      res.send({"result":"no user found"})
      
    }
  }
  else{
    res.send({"result":"provide correctly"})
  }
})



app.listen(5000)