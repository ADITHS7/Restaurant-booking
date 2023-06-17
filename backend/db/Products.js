const mongoose = require('mongoose');
const productSchema =new mongoose.Schema({
  url:String,
  name:String,
  price:String,
  category:String,
  sweet:Boolean,
  sour:Boolean,
  salty:Boolean,
  juicy:Boolean,
  bitter:Boolean,
  breakfast:Boolean,
  lunch:Boolean,
  dinner:Boolean,
  desc:String,
  price:String

  
  
})

module.exports = mongoose.model("products",productSchema);