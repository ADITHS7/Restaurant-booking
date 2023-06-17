const mongoose = require('mongoose');
const chefLoginSchema =new mongoose.Schema({
  name:String,
  chefId:String,
  password:String
})
module.exports = mongoose.model("chefLogin",chefLoginSchema);